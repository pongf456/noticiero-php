window.onload = function () {
    var rege;
    var noticias = document.querySelector(".noticias")
    function getfecha() {
        let fecha = new Date()
        let mes = fecha.getMonth()
        let año = fecha.getFullYear()
        let dia = fecha.getDate()
        mes++
        mes = `0${mes}`
        var fet = `${año}-${mes}-${dia}`
        rege = new RegExp(fet)
        return rege
    }
    getfecha()
    fetch ("../datos/data.json")
    .then(res => res.json())
    .then(re => {
        console.log(rege)
        console.log(re)
        var creator;
        var imag;
        var cont;
         for(i in re["spanish"]) {
             let abr = re["spanish"]
             for(e in abr[i]) {
                 var acceso = abr[i][e]
                 if(abr[i][e]["pubDate"].search(rege) == 0) {
                     if(abr[i][e]["creator"] == null) {
                     creator = `<span class="nombre-autor">"NotiWebs"</span>`
                     console.log(creator)
                     }
                     else {
                   creator =  `<span class="nombre-autor">${abr[i][e]["creator"]}</span>`

                }
                if(abr[i][e]["image_url"] == null) {
                    imag = `<img  src="microfono.png" alt="" class="imagen-r">`
                }
                else {
                    imag = `<img  src="${abr[i][e]["image_url"]}" alt="" class="imagen-r">`
                }
                cont = `<div class="noticia-completa">
                <section class="titulo">${abr[i][e]["title"]}</section>
                ${imag}
                <p class="informacion">${abr[i][e]["full_description"]}</p>
                ${creator}
            <span class="fecha">${abr[i][e]["pubDate"]}</span>
            <div class = "apoyo"><span class="like">${abr[i][e]["like"]}</span><img src="../img/like.ico" class = "img-l"><span class = "dislike">${abr[i][e]["dislike"]}</span><img src="../img/dislike.ico" class = "img-d"></div>
                </div>`
                noticias.innerHTML += cont
                 }
             }
         }  
    })
}