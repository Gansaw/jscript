const show = () => {
    event.preventDefault();
// Random 수 생성
// 변수를 넣으려면 '' ""이 아닌 ``를 사용해야 한다!!
// ${n} : 문자열 안에 변수 or 표현식 표현

    let n = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".h2class > img").setAttribute("src",`./images/${n}.png`);

}