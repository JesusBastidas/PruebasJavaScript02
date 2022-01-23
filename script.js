/* OPERADOR TERNARIO*/

/*El operador ternario sirve para verificar si una sentencia es verdadera o falsa y en cada caso es posible establecer una accion que se llevara a cabo

(condicioin)? true : false ... en caso que la verificacion contenga una sola sentencia

(condicion)? 
    (primera sentencia,
    segunda sentencia)
    :
    (primera sentencia
    segunda sentencia)

*/

let numero1 = 20;

(numero1 % 2 == 0)? console.log(`${numero1} es par`) : console.log(`${numero1} es impar`);

/* ARRAYS */

let numeros=[1,2,3,4,5,6];
let palabras=['pepe', 'juan', 'carlos', 'andres'];

console.log(numeros.length);
console.log(numeros[3]+numeros[5]);
console.log(`el nombre "${palabras[3]}" tiene ${palabras[3].length} letras`);

console.log(Array.isArray(numero1)); /*este metodo (Array.isArray()) nos permite verificar mediante un booleano si el dato introducido se trata de un array o no*/
console.log(Array.isArray(numeros));

