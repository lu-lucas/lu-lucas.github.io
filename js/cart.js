let carritoArray = [];

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
       let envio = 0;
       if (document.getElementById("premiumradio").checked) {
        envio= parseInt(cart.articles[0].unitCost) * parseInt(cart.articles[0].count) * 0.15
       } else if (document.getElementById("expressradio").checked){
        envio= parseInt(cart.articles[0].unitCost) * parseInt(cart.articles[0].count) * 0.07
       } else if (document.getElementById("standardradio").checked) {
        envio= parseInt(cart.articles[0].unitCost) * parseInt(cart.articles[0].count) * 0.05
       }
       console.log(envio)

    document.getElementById("articulo_cart").innerHTML = htmlContentToAppend;
    document.getElementById("subtotal").innerHTML = `${cart.articles[0].currency} ${parseInt(cart.articles[0].unitCost) * parseInt(cart.articles[0].count)}`;
    document.getElementById("envíoCosto").innerHTML = `${cart.articles[0].currency} ${envio}`
    document.getElementById("total").innerHTML = `${cart.articles[0].currency} ${(parseInt(cart.articles[0].unitCost) * parseInt(cart.articles[0].count))+envio}`
}


document.getElementById("tarjetaCrédito").addEventListener("click", () => {
    document.getElementById('selectPayment').innerHTML = '<p class="ps-5">Tarjeta de Crédito</p>'
    inputNum.removeAttribute("disabled")
    inputVen.removeAttribute("disabled")
    inputCVV.removeAttribute("disabled")

    if (inputBancaria.getAttribute("disabled") === null) {
        inputBancaria.setAttribute("disabled", "")
    }

})
document.getElementById("transfBancaria").addEventListener("click", () => {
    document.getElementById('selectPayment').innerHTML = '<p class="ps-5"> Transferencia bancaria </p>'
    inputBancaria.removeAttribute("disabled")

    if (inputNum.getAttribute("disabled") === null) {
        inputNum.setAttribute("disabled", "")
        inputVen.setAttribute("disabled", "")
        inputCVV.setAttribute("disabled", "")
    }

})




document.addEventListener("DOMContentLoaded", function () {
    getJSONData(CART_INFO_URL + USUARIO_ID + '.json').then(function (resultObj) {
        if (resultObj.status === "ok") {
            carritoArray = resultObj.data;
            showCarrito(carritoArray);
            console.log(carritoArray)

        }
    });
    document.getElementById("premiumradio").addEventListener('change', showCarrito);
    document.getElementById("expressradio").addEventListener('change', showCarrito);
    document.getElementById("standardradio").addEventListener('change', showCarrito);
});
function seleccionePago() {
    if (document.getElementById("tarjetaCrédito").checked || document.getElementById("transfBancaria").checked) {
    } else {
        document.getElementById('selectPayment').innerHTML = `<p class="text-danger">Seleccione un metodo de pago <p>`
    }
}

let form = document.getElementById("infoCliente")
form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    } else {
        alert('Su compra se realizó con éxito');
    }

    form.classList.add('was-validated')
}, false)
