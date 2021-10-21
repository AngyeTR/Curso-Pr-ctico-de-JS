 Cuadrado
console.group("cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");
function perimetroCuadrado(lado) 
{
    return lado * 4;
}
//console.log("El perímetro del cuadrado es " + perimetroCuadrado + "cm");
function areaCuadrado(lado)
{
    return lado * lado;
} 
//console.log("El área del cuadrado es " + areaCuadrado + "cm2");
console.groupEnd();


//Triangulo
console.group("triangulos");
//const ladotriangulo = 6;
//const ladotriangulo2 = 6;
//const base = 4;
//const altura = 5.5;
//console.log("Los lados del triangulo son: " + ladotriangulo + "cm " + ladotriangulo2 + "cm " + base + "cm");
//console.log("La altura del triangulo es: " + altura + "cm ");
function perimetroTriangulo(lado1, lado2, base)
{
    return lado1 + lado2 + base;
}  
//console.log("El perímetro del triangulo es: " + perimetroTriangulo);
function areaTriangulo(base, altura) 
{
    return (base * altura) / 2;
}
//console.log("El área del triángulo es " + areaTriangulo + "cm2");
console.groupEnd();


// Circulo
console.group("circulos");
//var radioCirculo = 5;
const pi = Math.PI;
function diametroCirculo(radio)
{
    return radio * 2;
} 
function circunferenciaCirculo(radio)
{
    const diametro = diametroCirculo(radio);
    return (diametro * 2) * pi;
} 
function areaCirculo(radio)
{
   return  (radio * radio) * pi;
} 
//console.log("El radio del circulo es " + radioCirculo + "cm y su diamtro es " + diametroCirculo + "cm");
//console.log(pi);
//console.log("La circunferencia del circulo es " + circunferenciaCirculo + "cm");
//console.log("EL área del Circulo es " + areaCirculo + "cm2");
console.groupEnd(); 

// Cuadrado con JS
function calcularPerimetroCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

// Triangulo con JS
function calcularPerimetroTriangulo()
{
    const input1 = document.getElementById("InputLado1");
    const value1 = input1.value;

    const input2 = document.getElementById("InputLado2");
    const value2 = input2.value;

    const input3 = document.getElementById("InputBase");
    const value3 = input3.value;

    
    const perimetroT = perimetroTriangulo(value1, value2, value3);
    alert(perimetroT);
}
function calcularAreaTriangulo()
{

    const input3 = document.getElementById("InputBase");
    const value3 = input3.value;

    const input4 = document.getElementById("InputAltura");
    const value4 = input4.value;
    const areaT = areaTriangulo(value3, value4);
    alert(areaT);
}