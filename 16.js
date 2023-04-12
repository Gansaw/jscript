// = : 할당 연산자 => 변수가 나옴
// == : 조건식에 들어가는 연산자 (if, for 등)
// === : type까지 같이 봄
//       => 1=="1" (o)  /  1==="1" (x)
// ? : if () {} else {}

const show = () => {
    event.preventDefault();

    let n = Math.floor(Math.random() * 6) + 1;
    let user;

    //  [] 속성을 찾아옴 => type = radio인 것 다 찾아옴
    const radios = document.querySelectorAll(`input[type=radio]`);

    //  radios 변수에 저장된 radio 노드 리스트 반복 => item에 할당
    for (let item of radios) {
        console.log(radios);
        //  item이 선택되면 (radio버튼이) => user = item.value (레디오에서 value = a 로 둔 부분)
        if (item.checked) {
            user = item.value;
            //  위 상황이 성립되면 반복 멈춤
            break;
        }

    }
    document.querySelector(".h2class").innerHTML = `<img src = "./images/${n}.png">`;
    // if (String(n) === user) {
    // if (n.toString === user) {
        if (n === parseInt(user)) {
        document.querySelector("article h1").textContent = '주사위게임 : 맞음(승)';
    }
    else {
        document.querySelector("article h1").textContent = '주사위게임 : 틀림(패)';
    }
}
