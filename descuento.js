// const precioOriginal= 120;
// const descuento= 18;

function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento= 100 - descuento;
    const precioConDescuento= (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// })

function PriceDiscount(){
    const inputPrice=document.getElementById ("inputPrecio");
    const price= parseFloat(inputPrice.value);
    const inputDiscount=document.getElementById ("inputDescuento");
    const descount= parseFloat(inputDiscount.value);

    const precioConDescuento= calcularPrecioConDescuento(price,descount);

    const priceP =document.getElementById ("PriceP");
    priceP.innerText = "El Precio con descuento es de: $" + precioConDescuento;

}

const coupons = [
    {name: "JuanDC_es_Batman",
     discount: 15,
},
    {name: "pero_no_le_digas_a_nadie",
        discount: 30,
},
    {name: "es_un_secreto",
        discount: 25,
},
];

const isCouponValueValid = function(coupon) {
    return coupon.name=== 
}






// function PricewithCoupon(){
//     const inputPrice =document.getElementById ("inputPrice");
//     const price = parseFloat(inputPrice.value);
//     const inputCoupon = document.getElementById ("inputCoupon");
//     const couponValue= inputCoupon.value;

//     let descuento;
//     switch (couponValue){
//         case coupons [0]:
//             descuento= 15;
//             break;
//         case coupons [1]:
//             descuento= 30;
//             break;
//         case coupons[2]:
//             descuento= 25;
//             break;
//     }

//     const precioConDescuento= calcularPrecioConDescuento(price,descuento);
//     const priceP = document.getElementById ("PriceP");
//     result.innerText = "El Precio con descuento es de: $" + precioConDescuento;

// }

