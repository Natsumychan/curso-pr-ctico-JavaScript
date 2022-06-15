function calcularMediaAritmetica (lista){
//     let sumaLista = 0;

// for (let i=0; i<lista.length; i++) {
//     sumaLista= sumaLista + lista[i];
// }

const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
)

const promedioLista = sumaLista/ lista.length;

return promedioLista
}

//Inicio de las funciones de la mediana 

const lista1 = [
    100,
    200,
    500,
    400000000,
]

const mitadLista1= parseInt(lista1.length/2);

function esPar (numerito){
    if(numerito % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

if(esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 -1];
    const elemento2 = lista1[mitadLista1]

    const promedioElemento1y2 = calcularMediaAritmetica ([elemento1,elemento2,])
    mediana = promedioElemento1y2;

}else{
    mediana = lista1[mitadLista1];
}

//reto ordenar el array usando el metodo .sort

//Inicio funcion de moda

const lista2= [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista2Count = {};

lista2.map(
function(elemento) {
    if (lista2Count[elemento]) {
        lista2Count[elemento] += 1;
    }else {
        lista2Count[elemento] = 1;
    }
}
);

const lista2Array = Object.entries(lista2Count).sort(
    function(valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    }
)

const moda = lista2Array[lista2Array.length -1]


//Calcular otros tipos de promedios (pendiente)