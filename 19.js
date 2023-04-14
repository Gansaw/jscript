const myFilter = (item) => {
    console.log(item);
};

document.addEventListener("DOMContentLoaded", () => {

    const txt1 = document.querySelector("#txt1");
    const cbt1s = document.querySelectorAll(".cbt1");
    const cbt2s = document.querySelectorAll(".cbt2");
    const cbt3s = document.querySelectorAll(".cbt3");
    const btReset = document.querySelector("#btReset");


    //배열의 초기화
    let arr = [];
    //버튼 이벤트 추가

    //reset 기능 구현

    btReset.addEventListener("click", (e) => {
        e.preventDefault();
        txt1.value = "";
        arr = [];
    });

    // 배열에 자료 추가
    for (let cbt1 of cbt1s) {

        cbt1.addEventListener("click", (e) => {
            e.preventDefault();

            switch (cbt1.textContent) {
                case "사과":
                    arr.push('🍎');
                    break;
                case "바나나":
                    arr.push('🍌');
                    break;
                case "오렌지":
                    arr.push('🍊');
                    break;
                case "수박":
                    arr.push('🍉');
                    break;
            }
            console.log(arr);
            // txt1.value = arr.toString();
            txt1.value = arr.join(",");

        });

    }


    // filter : 기존 배열을 기반으로 새로운 배열을 만듦
    // map : 기존 배열을 기반으로 배열을 만듦


    // console.log(gubun);

    for (let cbt2 of cbt2s) {
        cbt2.addEventListener("click", (e) => {
            e.preventDefault();

            let gubun = cbt2.textContent.replace("삭제", "");
            let temp = [];
            for (let item of arr) {

                switch (gubun) {
                    case "사과":
                        if (item != '🍎') {
                            temp.push(item);
                        }
                        break;
                    case "바나나":
                        if (item != '🍌') {
                            temp.push(item);
                        }
                        break;
                    case "오렌지":
                        if (item != '🍊') {
                            temp.push(item);
                        }
                        break;
                    case "수박":
                        if (item != '🍉') {
                            temp.push(item);
                        }
                        break;

                }

            }

            arr = temp;
            txt1.value = arr.join(',');


            // switch (cbt2.textContent) {
            //     case "사과삭제": arr = arr.filter((item) => { item != '🍎' });
            //         break;
            //     case "바나나삭제": arr = arr.filter((item) => { item != '🍌' });
            //         break;
            //     case "오렌지삭제": arr = arr.filter((item) => { item != '🍊' });
            //         break;
            //     case "수박삭제": arr = arr.filter((item) => { item != '🍉' });
            //         break;
            // }

            // txt1.value = arr.join(',');

        });

    }
    for (let cbt3 of cbt3s) {
        cbt3.addEventListener("click", (e) => {
            e.preventDefault();
            let change = cbt3.textContent.split('->')[0];
            let temp = [];
            for (let item of arr) {

                // switch (change) {
                //     case "사과":
                //         if (item == '🍎') {
                //             temp.push('🥕');

                //         } else {
                //             temp.push(item);
                //         }
                //         break;

                // replace를 이용하면 다음과 같이 나타낼 수 있음
                //     temp = temp.replaceAll('🍎','🥕');

                //     case "바나나":
                //         if (item == '🍌') {
                //             temp.push('🥒');
                //         } else {
                //             temp.push(item);
                //         }
                //         break;
                //     case "오렌지":
                //         if (item == '🍊') {
                //             temp.push('🥑');
                //         } else {
                //             temp.push(item);
                //         }
                //         break;
                //     case "수박":
                //         if (item == '🍉') {
                //             temp.push('🥦');
                //         } else {
                //             temp.push(item);
                //         }
                //         break;

                // }
                switch (change) {
                    case "사과":
                        arr = arr.map((item) => { item == '🍎' ? '🥕' : item });
                        break;
                    case "바나나":
                        arr = arr.map((item) => { item == '🍌' ? '🥒' : item });
                        break;
                    case "오렌지":
                        arr = arr.map((item) => { item == '🍊' ? '🥑' : item });
                        break;
                    case "수박":
                        arr = arr.map((item) => { item == '🍉' ? '🥦' : item });
                        break;
                }
            }

            // arr = temp;
            txt1.value = arr.join(',');

        });

    }


});