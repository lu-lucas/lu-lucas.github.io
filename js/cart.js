let carritoArray=[];

function subtotal(cantidadProd) {
carritoArray.articles[0].count = cantidadProd;
showCarrito(carritoArray);
}

function showCarrito(cart) {
    let htmlContentToAppend = "";
        htmlContentToAppend += `
        <tr class="cursor-active">
        <div><td><img src="${cart.articles[0].image}" class="img-fluid" alt="..."id="img-carrito"></td></div>
        <td><p>${cart.articles[0].name}</p></td>
        <td><p>${cart.articles[0].currency} ${cart.articles[0].unitCost}</td></p>
        <td> 
                        <div class="col-md-3 mx-auto md-3"> 
                        <input onchange="subtotal(this.value)" type="number" name="productCountInput" class="form-control inputcount" id="productCountInput"  required value="${cart.articles[0].count}" 
                            min="1">
                        </div> 
                    </td>
        <td><p>${cart.articles[0].currency} ${parseInt(cart.articles[0].unitCost) * parseInt(cart.articles[0].count)}</p></td>
                    </tr>
    `
    document.getElementById("articulo_cart").innerHTML = htmlContentToAppend; 
}



document.addEventListener("DOMContentLoaded", function(){
    getJSONData(CART_INFO_URL + USUARIO_ID +'.json').then(function(resultObj){
        if (resultObj.status === "ok") {
            carritoArray = resultObj.data;
            showCarrito(carritoArray);
            console.log(carritoArray)
           
        }
    });
});