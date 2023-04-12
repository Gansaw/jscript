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

            const radios = document.querySelectorAll(`input[type=radio]`);

            for (let item of radios) {
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