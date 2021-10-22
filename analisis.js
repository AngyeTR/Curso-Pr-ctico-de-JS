// Helpers
function esPar(numerito)
{
    return (numerito & 2 === 0);
}
function calcularMediaAritmetica(lista)
{
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

// Listas ordenadas
const salariosCol = colombia.map(
    function(persona)
    {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salarya, salaryb)
    {
        return salarya - salaryb;
    }
);


// Mediana Salarial General
function medianaSalarios(lista)
{
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length))
    {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    }
    else {
      const personaMitad = lista[mitad];
      return personaMitad;  
    }
    
}
const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana Top 10%

const spliceStart1 = (salariosColSorted.length * 90) /100;
const spliceStart = parseInt(spliceStart1);
const spliceCount = (salariosColSorted.length - spliceStart);

const salariosColTop = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTopCol = medianaSalarios(salariosColTop);

console.log({medianaGeneralCol, medianaTopCol});
