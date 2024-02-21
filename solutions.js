// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  //Uso la funcion isNaN para verificar que a y b sean numeros
  if(!isNaN(a) && !isNaN(b)){
    let result;
    result=a+b;
    return result;
  }
  //En caso de que el dato no sean numeros me mande este mensaje
  else{
    console.log("Los datos de entrada no son adecuados");
    return;
  }
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  //Uso la funcion isNaN para verificar que n sea un numero
  if(!isNaN(n)){
    let factorial=1;
    let x=0;
    for(i=0;i<n;i++){
      x=n-i;
      factorial=factorial*x;
    }
    return factorial;
  }
  //En caso de que n no sea un numero me mande este mensaje
  else{
    console.log("Los datos de entrada no son adecuados");
    return;
  }
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
  //Asumimos que el primer numero del arreglo es el mayor para hacer la comparacion
  let  largestNumber = arr[0];
  //Variable auxiliar que me devuelve true si el dato del array es un numero pero si es un string que me devuelva un false
  let datosAdecuados=true;
  for(i=1;i<arr.length;i++){
    //verificacion para saber si un numero del array es un string
    if(typeof arr[i]!=='number'){
      datosAdecuados=false;
    }
    //si el numero del arreglo es mayor
    else if(arr[i]>largestNumber){
      largestNumber=arr[i];
    }
  }
  //Si la variable "datosAdecuados" es false mande este mensaje
  if(!datosAdecuados){
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  //Si no es false que devuelva el numero mayor del arreglo
  else{
    return largestNumber;
  }
  
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
  if (!isNaN(str)) {
    console.log("Los datos de entrada no son adecuados");
    return; // Salir de la función si el input es un número
  }

  let texto=str.toLowerCase();
  let contVocales=0;
  for(i=0;i<texto.length;i++){
    if(texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u'){
      contVocales++;
    }
  }  
  return contVocales;
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
  //Verificacion de que n es un numero
  if(!isNaN(n)){
    let contDivisiones=0;
    //ciclo que me divide el numero por i para ver cuantas veces es divisible sin residuo
    for(i=1;i<=n;i++){
      //si no tiene residuo me suma uno al contador
      if(n%i===0){
        contDivisiones++;
      }
    }
    //Si el numero no es primo me devuelve false
    if(contDivisiones>2){
      return false;
    }
    //Si el numero es primo devuelve true
    else{
      return true;
    }
  }
  //si n no es un numero
  else{
    console.log("Los datos de entrada no son adecuados");
    return;
  }
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
