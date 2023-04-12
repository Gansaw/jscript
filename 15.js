document.addEventListener("DOMContentLoaded", () => {
    
    const bts = document.querySelectorAll("button");
    console.log(bts);

    document.querySelectorAll("#h2id").textContent = bts.textContent;

    // for(let item of bts){
    //         console.log(item.textContent);
    //     }


        // bts.forEach((item) => {
        //     console.log(item.textContent);
        // });

        // bts.forEach((item,idc) => {
        //     console.log(idc,item.textContent) ;
        // });

        // 추천x
        // for(let idc in bts){
        //     console.log(bts[idc].textContent);
        // }

        
        // for(let item of bts){
        //     console.log(item.textContent);
        // }

        for(let [i,v] of bts.entries()){
            console.log(i,v.textContent);
        }


        

});