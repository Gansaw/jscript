// const show = () => {
//     event.preventDefault();

//     let n = Math.floor(Math.random() * 6) + 1;
//     console.log(n);


//     document.querySelector("#h2id").innerHTML = '<img src="./images/' + n + '.png">';

//     }
//     document.addEventListener("DOMContentLoaded",() => {

//         document.querySelector(".h2class").innerHTML = "시작입니다.";

//     });



// 1. DOM 만들기
    document.addEventListener("DOMContentLoaded", () => {

        document.querySelector(".h2class").innerHTML = "시작입니다."


    });

// 2. const 지정
    const show = () => {
        event.preventDefault();

// 3. let (변수지정)
    let n = Math.floor(Math.random() * 6) + 1;
    
    };