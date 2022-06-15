//Código del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log ("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
     return lado* 4;
}

//console.log ("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado (lado){
    return lado * lado;
} 
//console.log ("El área del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

//Código del triángulo
console.group("Triángulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;
//console.log ("La altura del triángulo mide: " + alturaTriangulo + " cm, ");
//console.log ("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, "+ baseTriangulo +"cm");

function perimetrotriangulo(lado1,lado2, base){
    return lado1 + lado2 + base;
}
//console.log ("El perímetro del triángulo es: " + perimetrotriangulo +" cm");

function areaTriangulo(base, altura){
    return (base*altura)/2;
} 
//console.log ("El área del triángulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

//Código del círculo
console.group("Círculo");

//const radioCirculo=  4;
//console.log ("El radio del círculo es: " + radioCirculo + " cm^2");

function diametroCirculo(radio){
 return radio * 2;
}
//console.log ("El diámetro es: " + diametroCirculo+ " cm");

//const PI= Math.PI;
//console.log ("El valor de PI es: " + PI);

function perimetroCircunferencia(radio){
    const diametro= diametroCirculo (radio)
    return diametro * Math.PI; 
}

//console.log ("El perímetro de una circunferencia es: " + perimetroCircunferencia + " cm");

function areaCirculo(radio){
    return (radio* radio) * Math.PI;
}

//console.log ("El área del círculo es: " + areaCirculo + " cm^2");

console.groupEnd();

//Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input =document.getElementById ("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input =document.getElementById ("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input1 =document.getElementById ("InputLado1");
    const value = parseFloat(input1.value);
    const input2 =document.getElementById ("InputLado2");
    const value2 = parseFloat(input2.value);
    const input3 =document.getElementById ("InputBase");
    const value3 = parseFloat(input3.value);
    const perimetro = perimetrotriangulo(value,value2,value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input =document.getElementById ("InputBase");
    const value = input.value;
    const input2 =document.getElementById ("InputAltura");
    const value2 = input2.value;
    const area = areaTriangulo(value,value2);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input =document.getElementById ("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCircunferencia(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input =document.getElementById ("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}

function calcularTrianguloIsosceles (){
    const input1 =document.getElementById ("Inputside1");
    const value = parseFloat(input1.value);
    const input2 =document.getElementById ("Inputside2");
    const value2 = parseFloat(input2.value);
    const input3 =document.getElementById ("InputBases");
    const value3 = parseFloat(input3.value);
    if (value===value2 && value!=value3){
        const altura= Math.sqrt ((value*value2)-((value3*value3)/4));
        alert("La altura del triángulo isósceles es: " + altura + " cm");
    }else{
        alert("No es un triángulo isósceles");
    }
}