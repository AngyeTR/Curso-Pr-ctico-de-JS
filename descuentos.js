//const precioOriginal = 100;
//const descuento = 15;

function calcularPrecioConDescuento(precio, descuento)
{
    const procentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePrecioDescuento) / 100;
    return precioConDescuento;
}

function discountedPrice()
{
    
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    
    const resultp = document.getElementById("result");
    resultp.innerText = "El precio con descuento es $" + precioConDescuento;
    
}

//console.log({precioOriginal, descuento, procentajePrecioDescuento, precioConDescuento});



