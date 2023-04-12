// function show() {
// //  alert("안녕하세요");

// //      form이 다시 form을 재실행하는 것을 막아줌
//     event.preventDefault();

//     document.getElementById("h2id").innerHTML = "안녕하세요.";    
// }

//      document.addEventListener("DOMContentLoaded", function() {
//      document.getElementById("h2id").innerHTML = "안녕하세요.";
// }); 와 동일

//      화살표 함수로 변환
const show = () => {
    event.preventDefault();
    // document.getElementById("h2id").innerHTML = "안녕하세요.";    

    // 1~6까지 Random수
    let n = Math.floor(Math.random() * 6) + 1;
    console.log(n);
    // 주사위 그림과 연결    

    document.querySelector("#h2id").innerHTML = '<img src="./images/' + n + '.png">';

    // innerHTML : 태그 전체
    // innerText : 태그 제외

    // document.querySelector("#h2id").innerHTML = '<img src="./image/${n}.png">';

    // switch (n){
    //     case 1:
    //         n = document.querySelector("#h2id").innerHTML = "<img src='./images/1.png'>"
    //         break;
    //     case 2:
    //         n = document.querySelector("#h2id").innerHTML = "<img src='./images/2.png'>"
    //         break;
    //     case 3:
    //         n = document.querySelector("#h2id").innerHTML = "<img src='./images/3.png'>"
    //         break;
    //     case 4:
    //         n = document.querySelector("#h2id").innerHTML = "<img src='./images/4.png'>"
    //         break;
    //     case 5:
    //         n = document.querySelector("#h2id").innerHTML = "<img src='./images/5.png'>"
    //         break;
    //     case 6:
    //         n = document.querySelector("#h2id").innerHTML = "<img src='./images/6.png'>"
    //         break;
    //     }
    }
    
        


//     인수 안에 함수를 그대로 넣는 것이 JQuery의 특징
    // document.addEventListener("DOMContentLoaded",function(){
    //     document.getElementById("h2id").innerHTML = "시작입니다.";
    // });

    // 화살표 함수로 변환 (function을 지우고 => 추가)
    document.addEventListener("DOMContentLoaded",() => {

        // document.getElementById("h2id").innerHTML = "시작입니다.";
        // document.querySelector("#h2id").innerHTML = "시작입니다.";
        document.querySelector(".h2class").innerHTML = "시작입니다.";

        
        

        // CREATE  - const는 바뀌면 안됨
        // const bt = document.createElement("button");
        // bt.textContent = "확인";
        // document.getElementById("hdiv").append(bt);
    });

