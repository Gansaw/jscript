document.addEventListener("DOMContentLoaded", () => {
    const boxdt = document.querySelector('#boxdt');


    boxdt.addEventListener("change", () => {
        let url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=";
        url = url + boxdt.value.replaceAll('-', '');

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                let boxlist = data.boxOfficeResult.dailyBoxOfficeList;
                let boxtag = '';

                for (let box of boxlist) {
                    console.log(box.movieNm, box.rank, box.salesAmt, box.rankInten);

                    boxtag = boxtag + '<details>';
                    boxtag = boxtag + `<summary>${box.movieNm}</summary>`;
                    boxtag = boxtag + '<ul>';
                    boxtag = boxtag + `<li>순위 : ${box.rank}위</li>`;
                    boxtag = boxtag + `<li>매출액 : ${parseInt(box.salesAmt).toLocaleString()}원</li>`;
                    boxtag = boxtag + `<li>순위변동 : ${box.rankInten}</li>`;
                    boxtag = boxtag + '</ul>';
                    boxtag = boxtag + '</details>';

                    console.log(boxtag);

                    document.querySelector('#boxdiv').innerHTML = boxtag;


                }

            })
            .catch((error) => {
                console.log(error);
            })
            ;

    });



});
