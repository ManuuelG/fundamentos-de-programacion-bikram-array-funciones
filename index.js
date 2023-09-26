/* 1-4 */
let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

/* 5-9 */
function suma(numero1, numero2) {
    return numero1 + numero2;
}


function potenciacion(a, b) {
    return a ** b;
  }
  
  function separarPalabras(frase) {
    let palabrasseparadas = frase.split(" ");
    return palabrasseparadas;
  }
  
  function repetirString(texto, numero) {
    return texto.repeat(numero);
  }
  

  function esPrimo(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) { return false }
    }
    return true;
}

  /* 10-14 */

  function ordenarArray(array) {
    return array.sort((a, b) => a - b);
  }


  function obtenerPares(array) {
    let pares = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        pares.push(array[i]);
      }
    }
    return pares;
  }

  function pintarArray(array) {
    const cadena = '[' + array.join(', ') + ']';
    return cadena;
  }

  function arrayMapi(arr,myFunction){
    let newArr = arr.map((e)=>myFunction(e))
      return newArr;
  }

  function eliminarDuplicados(arr) {
    const arraySinDuplicados = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arraySinDuplicados.indexOf(arr[i]) === -1) {
        arraySinDuplicados.push(arr[i]);
      }
    }
  
    return arraySinDuplicados;
  }

  /* 15-18 */

  let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
  let holaMundo = ['Hola', 'Mundo'];
  let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
  let arrayDeArrays = [
    [756, 'nombre'],
    [225, 'apellido'],
    [298, 'direccion']
  ];

/* 19 - 22 */

  function multiplicacion(num1, num2) {
    return num1 * num2;
  };

  function division(num1, num2) {
    return num1 / num2;
  };

  function esPar(num) {
    return num % 2 === 0;
  };

  function resta(num1, num2) {
    return num1 - num2;
  };

  function suma(num1, num2) {
    return num1 + num2;
  };

  const arrayFunciones = [suma, resta, multiplicacion];

  /* 23-26 */

  function ordenarArray2(array) {
    const arrayOrdenado = array.sort((a, b) => b - a);
    return arrayOrdenado;
  };

  function obtenerImpares(array) {
    let impares = array.filter(numero => numero % 2 !== 0);
    return impares;
  };

  function sumarArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      suma += array[i];
    }
    return suma;
  };

  function multiplicarArray(array) {
    let multiplicacion = 1;
    for (let i = 0; i < array.length; i++) {
      multiplicacion *= array[i];
    }
    return multiplicacion;
  };
 
  