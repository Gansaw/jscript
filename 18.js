// 회문 체크 함수
const palindrome = (t1, t2) => {
    let s = t1.value;
    // 입력내용이 없는 경우
    if (s.length == 0) {
        document.querySelector("h2").textContent = "단어를 입력하세요."
        return;

    };

    // 입력내용이 있는 경우
    // 방법1
    // let rs = "";
    // for (let i = s.length -1 ; i >= 0 ; i--){
    //     rs = rs + s[i];
    // }

    // if (s==rs){
    //     t2.value = s + "(은/는) 회문입니다.";
    // } else{
    //     t2.value = s + "(은/는) 회문이 아닙니다.";
    // }


    // 방법2
    let rs = "";
    // 문자열.split()은 문자열을 분리자로 분리
    s = s.split("");
    // 배열.reverse()는 배열의 요소를 뒤집어줌
    s = s.reverse();
    // 배열.join()은 배열의 요소를 문자열로 묶어줌
    rs = s.join("");
    console.log(s, rs);
    if (t1.value == rs) {
        t2.value = t1.value + "(은/는) 회문입니다.";
    } else {
        t2.value = t1.value + "(은/는) 회문이 아닙니다.";
    }

}

// 숫자 합계
const numSum = (t1, t2) => {
    // form input tag인 경우에는 value를 가져와야 한다
    let s = t1.value;
    let sum = 0;
    for (let ch of s) {
        if (!isNaN(ch)){
            sum = sum + parseInt(ch);
        }
        t2.value = sum;
        }

}

// DOM 요소 가져오기
document.addEventListener("DOMContentLoaded", () => {
    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");
    const bts = document.querySelectorAll(".bt");

    // 버튼 배열의 click event 작성
    for (let bt of bts) {
        console.log(bt);
        bt.addEventListener("click", (event) => {
            event.preventDefault();
            let part = bt.getAttribute("id").slice(-1);

            if (part == 1) palindrome(txt1, txt2);
            // if (part === '1') palindrome();
            else numSum(txt1, txt2);


            // 문자열 순회
            // console.log(ch,isNaN(ch));        



            });
    }

});
