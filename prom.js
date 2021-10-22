
function calcularMediaAritmetica(lista)
{
    //let sumaLista = 0;
    //for (let i = 0; i < lista.length; i++)
    //{
    //    sumaLista = sumaLista + lista[i];
    //}
    const sumaLista = lista.reduce
    (
        function(valorAcumulado = 0, nuevoElemento)
        {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


/// Mediana
function calcularMediana(lista1)
{
    const lista2 = lista1.sort(function(a, b) 
    {
        return a - b;
    });
    const mitadLista2 = parseInt(lista2.length / 2);
    function esPar(numerito)
    {
        if(numerito % 2 === 0)
        {
            return true; 
        }
        else
        {
            return false;
        }
    }
    let mediana;
    if(esPar(lista2.length))
    {
        const elemento1 = lista2[mitadLista2];
        const elemento2 = lista2[mitadLista2 - 1];
       
        const promElementos = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promElementos;
    }
    else{
        mediana = lista2[mitadLista2];
    }
    return mediana;
}

//moda

function calcularModa(listaModa)
{
const listaCount = {};

listaModa.map(
    function (elemento) {
        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }
        else
        {
            listaCount[elemento] = 1;
        }
 
    }
);
const listaArray = Object.entries(listaCount).sort(
    function(valorAcum, nuevoValor)
    {
        return valorAcum[1] - nuevoValor[1];
    }

);

const moda = listaArray[listaArray.length - 1];
return moda;
}