// callback 함수
document.addEventListener("DOMContentLoaded", () => {
    const bt1 = document.querySelector("#bt1");

    bt1.addEventListener("click", () => {
        event.preventDefault();
        show();        
    });
        const show = () => {
            event.preventDefault();

            let n = Math.floor(Math.random() * 6) + 1;
            let user;

            //querySelectorAll은 배열의 개념을 가진다 (1개 이상)
            const radios = document.querySelectorAll(`input[type=radio]`);

            for (let item of radios) {
                // 디버깅 용도 => 실제 사용자에게 보여지는건 없음 (개발자 도구의 console 창에 나타남)
                console.log(radios);

                if (item.checked) {
                    user = item.value;

                    break;
                }

            }
            document.querySelector(".h2class").innerHTML = `<img src = "./images/${n}.png">`;
            if (n == user) {
                document.querySelector("article h1").textContent = '주사위게임 : 맞음(승)';
            }
            else {
                document.querySelector("article h1").textContent = '주사위게임 : 틀림(패)';
            }
        }





});