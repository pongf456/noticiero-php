let notices = document.querySelector(".notices");
window.onload = function() {
    fetch("datos/data.json") 
    .then(res => res.json())
    .then(re => {
        console.log(re)
        let ind = re["spanish"];
        var s = 0;
        for(i in ind) {
            let inde = ind[i]
            for(e in inde){
                if (inde[e]["description"] == null) {
                    notices.innerHTML += `<div class="notice"><span class="tit-no">${inde[e]["title"]}</span>
                 <span class="ver-mas"><a href = "${inde[e]["link"]}">ver mas..</a></span>
                </div> `
                }
            else {
                notices.innerHTML += `<div class="notice"><span class="tit-no">${inde[e]["title"]}</span>
                <div class = "resum"><p class="cont-no">${inde[e]["description"]}</p></div>
             <span class="ver-mas"><a href = "${inde[e]["link"]}">ver mas..</a></span>
            </div> `
            }
            }
            s++
            if (s === 1) { break; }
        }
    })
}