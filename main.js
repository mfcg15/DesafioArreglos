//////////FUNCIONES/////////

function alwaysHungry(arr) 
{
    let contador = 0;

    for(let i = 0 ; i< arr.length; i++)
    {
        if(arr[i]=="comida")
        {
            console.log("delicioso");
            contador++;
        }
    }

    if(contador==0)
    {
        console.log("Tengo hambre");
    }
}


function highPass(arr, cutoff) 
{
    let filteredArr = [];

    for(let i = 0; i< arr.length; i++)
    {
        if(arr[i]>cutoff)
        {
            filteredArr.push(arr[i])
        }
    }

    return filteredArr;
}

function betterThanAverage(arr) 
{
    let sum = 0;

    for(let i = 0; i< arr.length; i++)
    {
        sum += arr[i]
    }
    
    sum = (sum/arr.length)

    let count = 0;
    
    for(let i = 0; i< arr.length; i++)
    {
        if(arr[i]>sum)
        {
            count++;
        }
    }

    return count;
}

function reverse(arr) 
{
    let arrAux = [];

    for(let i = arr.length-1 ; i >= 0; i--)
    {
        arrAux.push(arr[i])
    }

    for(let i = 0 ; i < arr.length; i++)
    {
        arr[i] = arrAux[i];
    }

    return arr;
}

function fibonacciArray(n) 
{
    var fibArr = [0, 1];
    let sumando1 = 0, sumando2 = 1, suma = 0;

    while(fibArr.length!=n)
    {
        suma = fibArr[sumando1] + fibArr[sumando2]
        fibArr.push(suma);
        sumando1++;
        sumando2++;
    }
    return fibArr;
}
   

//////////LLAMAR FUNCIONES/////////

console.log("Respuesta ejericio 1");
alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
alwaysHungry([4, 1, 5, 7, 2]);

console.log("Respuesta ejericio 2");
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

console.log("Respuesta ejericio 3");
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); 

console.log("Respuesta ejericio 4");
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

console.log("Respuesta ejericio 5");
var result = fibonacciArray(10);
console.log(result);