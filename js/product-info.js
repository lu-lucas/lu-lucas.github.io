let infoArray = [];
let comentariosArray = [];


function setProID(id) {
    localStorage.setItem("ProID", id);
    window.location = "product-info.html"
}

function mostrarInfo(info) {
    let htmlContentToAppend = "";
        htmlContentToAppend += `
        <div class="row pl-4"> 
        <h1 style= "padding-top: 2%">` + info.name + `</h1>
        <hr>
        <p> </p>
        <h6> <strong> Precio </strong> </h6> <br>
        <p> `+ info.cost +` </p> <br>
        <h6> <strong> Descripción </strong> </h6> <br> 
        <p>`+ info.description +`</p> <br> 
        <h6> <strong> Categoría </strong> </h6> <br>
        <p>`+ info.category +` </p> <br>
        <h6> <strong> Cantidad de vendidos </strong> </h6> <br>
        <p>`+ info.soldCount +`</p> <br>
        <h6> <strong> Imágenes ilustrativas </strong> </h6> <br>
        <img src="`+info.images[0]+`" style="width: 18rem; height: 10rem;" alt="" class="img-thumbnail">
        <img src="`+info.images[1]+`" style="width: 18rem; height: 10rem;" alt="" class="img-thumbnail">
        <img src="`+info.images[2]+`" style="width: 18rem; height: 10rem;" alt="" class="img-thumbnail">
        <img src="`+info.images[3]+`" style="width: 18rem; height: 10rem;" alt="" class="img-thumbnail">
        </div>
    `
    document.getElementById("despliegue-info").innerHTML = htmlContentToAppend; 
}
function mostrarRel(array) {
    let relacionado = "";
    console.log(array);
    for (let i = 0; i < array.relatedProducts.length; i++) {
        let related= array.relatedProducts[i];
        relacionado += `
        <div class="container" onclick="setProID(${related.id})">
        <img src="${related.image}" id="img-rel" style="width: 18rem; height: 10rem;" alt="product image" class="img-thumbnail">
        <h6>${related.name}</h6>
        </div>
        `
    }
    document.getElementById("prod-relacionados").innerHTML += relacionado;
}
        
    function puntaje(numero){
        let estrellitas='';
        for(let i=0; i<5; i++){
            if(i<numero){
                estrellitas+='<i class="fas fa-star checked"></i>'
            }else{
                estrellitas+='<i class="far fa-star "></i>'
            }        
        }
        return estrellitas;
    }

    function mostrarComent(com) {
        let imprimir = "";
        for (let i=0; i<com.length; i++) {
        imprimir = `
        <div class="container">
        <div class="row border">
          <div class="col"><p> <strong>`+com[i].user+`</strong>-`+com[i].dateTime+ `-`+puntaje(com[i].score) +`</p></div>
         <br>
         <span>`+com[i].description +`</span>
          
        </div>
      </div>
        `
        document.getElementById("despliegue-comment").innerHTML += imprimir;
    };
}

    document.addEventListener("DOMContentLoaded", function(e){
        let idInfo = localStorage.getItem('ProID')
        getJSONData(PRODUCT_INFO_URL + idInfo + '.json').then(function(resultObj){
            if (resultObj.status === "ok")
            {
                let infoArray = resultObj.data;
                console.log(infoArray.name);
                mostrarInfo(infoArray);
                mostrarRel(infoArray);
            }
        });
        getJSONData(PRODUCT_INFO_COMMENTS_URL + idInfo + '.json').then(function(resultObj){
            if (resultObj.status === "ok")
            {
                let comentariosArray = resultObj.data;
                console.log(comentariosArray);
                mostrarComent(comentariosArray);
            }
    });
})