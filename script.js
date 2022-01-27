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

/*function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of nums) {
            if (num > max_num) {
            max_num+=1                    // (Fill in the missing line here)
            }
        }
    return max_num;
    }
    */

/* Eliminar elementos: .shift() el cual elimina el primer elemento del array
                        .pop() el cual elimina el ultimo elemento del array*/

console.log(numeros);
let elementoEliminado = numeros.shift(); /* es posible agregar el elemento eliminado a una variable mediante la asignacion del metedo a la misma*/
console.log(numeros);
numeros.pop();
console.log(numeros);
console.log(elementoEliminado);

/* Colocar elementos nuevos en un array: .push() inserta uno o mas elementos al final del array
                                        .unshift() inserta uno o mas elementos al comienzi del array
*/

console.log(numeros);
numeros.push(6);
console.log(numeros);
numeros.unshift(1);
console.log(numeros);

/*Buscar elementos dentro de un array: .indexOf() nos retorna la posicion el primer elemento que concuerda con el parametro de la busqueda*/

console.log(numeros.indexOf(6));