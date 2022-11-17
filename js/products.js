let productsArray = [];

function setProID(id) {
    localStorage.setItem("ProID", id);
    window.location = "product-info.html"
}

function showProductsList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.products.length; i++){ 
        let products = array.products[i];
        htmlContentToAppend += `
        <h1> </h1>
        <p> </p>
        <div class="list-group-item list-group-item-action">
        <div class="row" onclick="setProID(`+products.id+`)">
            <div class="col-3">
                <img src="` + products.image + `" alt="product image" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <div class="mb-1">
                    <h4>`+ products.name +` `+ `-` +` `+ products.currency + ` ` + products.cost+ `</h4> 
                    <p> `+ products.description +`</p> 
                    </div>
                    <small class="text-muted">` + products.soldCount + ` vendidos </small> 
                </div>
            </div>
        </div>
        </div>
    `
        document.getElementById("car-type-container").innerHTML = htmlContentToAppend; 
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    let agarrarID = localStorage.getItem('catID')
    getJSONData(PRODUCTS_URL + agarrarID +'.json').then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productsArray = resultObj.data;
            showProductsList(productsArray);
            document.getElementById("tipo-producto").innerHTML = "Verás aquí todos los productos de la categoría " + productsArray.catName;
        }
    });
});