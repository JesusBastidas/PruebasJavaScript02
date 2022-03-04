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

/*Buscar elementos dentro de un array: .indexOf() nos retorna la posicion el primer elemento que concuerda con el parametro de la busqueda .
                                        .lastIndexOf() nos retorna el ultimo indice del elemento que coincida con el parametro de busqueda*/

console.log(numeros.indexOf(6));
console.log(numeros.pop());
console.log(numeros);
numeros.push(7);
numeros.push(5);
console.log(numeros);
console.log(numeros.lastIndexOf(5));

/* .reverse() este metodo invierte el orden de los elementos del array*/

numeros.reverse();
console.log(numeros);

/* .join('separador') devuelve un string con el separador que se indica, si no se coloca un separador por defecto con coloca comas*/

console.log(numeros.join());
numeros.reverse();
console.log(numeros.join(';'));

/* .splice(a,b,items) cambia el contenido de un array. a- indice de inicio
                                                       b- numero de elementos (opcional)   
                                                       items - elementos a insertar
*/

console.log(numeros);
/* numeros.splice(2);  elimina los elementos a partir de la posicion 2 hasta el final */
/*numeros.splice(2,2); elimina los elementos a partir de la posicion 2 hasta las posiciones indicadas */

numeros.splice(6,0,8,9,10); /*si b es distinto a 0 elimina la los datos de la posicion indicada, en caso contrario ingresa los valores especificados en items */
console.log(numeros);

/* .slice(a,b) extrae elementos de un array desde el a hasta b. */

let numerosNuevo = numeros.slice(3,6);
console.log(numerosNuevo); 
console.log(numeros);

/* BUCLES: sirven cuando queremos que un trozo de codigo se repita.. 
    while: bucle indeterminado, la ejecucion del codigo se repite hasta que se cumla la condicion
     Sintaxis: while(condicion){
        codigo a ejecutar
    };
    do while: tambien es un bucle indeterminado lo que implica que se repite el codigo hasta que se cumpla la condicion
     Sintaxis, en este caso dicha sitaxis te compone de dos partes 1. un codigo a ejecutar y 2. una condicion de salida, de la siguiente forma:
     do{
         condicion 
     }while(condicion);
     */

let password = 'hola';
/*while (password != 'hola'){
    password = prompt('Introdusca su password')
};
console.log('Fin'); */

/*do{
    password = prompt('Intruduce tu pass')
} while (password != 'hola');
console.log('Finale');*/

/* for: es un bucle determinado lo que implica que se conoce la cantidad de veces que se debe ejecuta el codigo.
en este tipo de bucle la sintaxis se compone de tres partes: 1. la iniciacion de la variable, 2. el numero de iteraciones(repeticiones), 3. el incremento o decremento

for (let i= 0; i<=n;i++){
    codigo a ejecutar(lo que deseo que haga en caso de que la condicion este en pie)
}
*/

for (let i=0; i<=3;i++){
    console.log(i);
};

let numerachos = [21,35,0,15,2];

for(let i=0; i<numerachos.length; i++){
    console.log(`la posicion de i en el array es  ${i} y su valor ${numerachos[i]}`);
}

/* Bucle for of / for in. sirve para simplificar el bucle. 
la sintaxis es la siguiente: 

let names =['juan', 'antonio', 'pepe', 'luis'];
for (let name of names) {
    console.log(name);
};

for (let name in names) {
    console.log(name);
};

break - rompe el bucle
continue - continua el bucle pero salta la posicion 
*/
for (let conteo of numerachos){
    if (conteo===0){
        break
    }
    console.log(conteo);
};

for (let index in numerachos){
    if (numerachos[index]===0){
        continue
    }
    console.log(index);
}

/* EJERCICIOS DE REPASO*/

/*let name1 = prompt('Ingresa tu nombre');
let age =  prompt('Ingresa tu edad');
let prox = (parseInt(age)+1);

console.log(`Hola ${name1}, tienes ${age} anios y el anio que viene tendras ${prox}`);
*/

let triangulo 
let rectangulo 
let circulo 

/*let b = prompt('inserte la base');
let h = prompt('isnerte la altura');*/

let figura = prompt('Introduce la figura que deseas calcuar');
if (figura === triangulo){
    let b = prompt('inserte la base');
    let h = prompt('inserte la altura');
    console.log((parseInt(b)*parseInt(h))/2);
}else if(figura === rectangulo){
    let b2 = prompt('inserte la base');
    let h2 = prompt('inserte la altura');
    console.log(parseInt(b2)*parseInt(h2));
}else {
    if (figura === circulo){
    let r = prompt('inserte el radio');
    console.log(Math.PI*(parseInt(r)*parseInt(r)));
    }
}
