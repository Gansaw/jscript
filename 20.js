document.addEventListener("DOMContentLoaded", () => {
    // const grid = document.querySelectorAll(".grid");
    // const rows = document.querySelectorAll(".row");
    const cols = document.querySelectorAll(".col");
    const bt = document.querySelector("#bt1");

    // 초기 배열 : 0은 하트. 1은 폭탄
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
    // 클릭 체크
    let flag = true;
    // 하트 개수
    let cnt = 0;
    // 누른 순서
    let selarr = [];

    bt.addEventListener("click", () => {

        // 인터넷에 배열 섞기 검색 후 코드 작성
        if (flag) {
            arr.sort(() => Math.random() - 0.5);
            // false로 지정함으로써 버튼이 한 번만 눌리게 됨
            flag = false;
            cnt = 0;
            selarr = [];
            document.querySelector('h2').innerHTML = "";
            for (let col of cols) {
                col.innerHTML = col.getAttribute('id').replace('col', '')
            }

        }


    });

    for (let col of cols) {
        // col 안에 번호 넣기
        // col.textContent (글자만, innerHTML은 태그도)
        // col.innerHTML = col.getAttribute('id').slice(-1);
        col.innerHTML = col.getAttribute('id').replace('col', '');

        col.addEventListener("click", () => {
            let n = parseInt(col.textContent);

            if (isNaN(n)) {
                return;
            }

            if (!flag) {

                selarr.push(n);
                cnt++;


                // 선택 항목 추가
                // let n = parseInt(col.getAttribute('id').replace('col', ''));

                //폭탄 하트 구분
                if (arr[n - 1] == 0) {
                    // 하트
                    col.innerHTML = '<img src = "./images/hart.png">';
                    if (cnt == 8) {
                        flag = true;
                        document.querySelector('h2').innerHTML = "성공";
                        let lastn = arr.findIndex((item) => item == 1);
                    // console.log(lastn);
                        cols[lastn].innerHTML = '<img src = "./images/hart.png">';                                                                                                                  


                        //차집합 이용
                        // let lastArr = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((item) => 
                        //     !selarr.includes(item)
                        // );
                        // cols[lastArr[0]-1].innerHTML = '<img src="./images/hart.png">';

                    }
                }

                else {
                    // 폭탄
                    col.innerHTML = '<img src = "./images/boom.png">';
                    flag = true;
                    document.querySelector('h2').innerHTML = "실패";

                }
            }
        });




    }


    // cols.addEventListener("click", () => {

    // });

    // 폭탄 섞기 버튼


});
