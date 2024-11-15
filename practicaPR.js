
console.log(result);
// Paso 1: Declarar una variable llamada `caracter`.
let caracter;

// Paso 2: Inicializar la variable `caracter` con el valor "Hola".
caracter = "Hola";

// Paso 3: Cambiar el valor de `caracter` para usar comillas simples.
caracter = 'Hola';

// Paso 4: Imprimir el valor de `caracter` en la consola.
console.log(caracter);

// Paso 5: Declarar una nueva variable `secondCharacter`.
let secondCharacter;

// Paso 6: Imprimir el valor de `secondCharacter` en la consola.
console.log(secondCharacter);

// Paso 7: Asignar la cadena "Prueba" a `secondCharacter`.
secondCharacter = "Prueba";
console.log(secondCharacter);

// Paso 8: Declarar una variable `count` y asignarle el valor numérico 8.
let count = 8;

// Paso 9: Declarar una variable llamada `rows` como un arreglo vacío.
let rows = [];

// Paso 10: Cambiar `rows` para que contenga ["London", "New York", "Mumbai"].
rows = ["London", "New York", "Mumbai"];

// Paso 11: Imprimir el primer valor en `rows`.
console.log(rows[0]);

// Paso 12: Actualizar el tercer elemento de `rows` a 10 y mostrar `rows`.
rows[2] = 10;
console.log(rows);

// Paso 13: Acceder dinámicamente al último elemento de `rows`.
console.log(rows[rows.length - 1]);

// Paso 14: Agregar "Paris" al final de `rows` y mostrar el cambio.
rows.push("Paris");
console.log(rows);

// Paso 15: Eliminar el último elemento de `rows` y asignarlo a `popped`.
let popped = rows.pop();
console.log(popped);

// Paso 16: Reasignar `rows` a un arreglo vacío.
rows = [];

// Paso 17: Reemplazar `let` con `const` donde las variables no cambian.
const fixedCharacter = "#"; // Variable constante para la pirámide

// Paso 18: Crear un bucle for para construir la pirámide.
for (let i = 0; i < count; i++) {
    rows.push(fixedCharacter.repeat(i + 1));
}

// Paso 19: Declarar `result` como una cadena vacía.
let result = "";

// Paso 20: Imprimir `result` (actualmente vacío).
console.log(result);

// Paso 21: Crear un bucle `for...of` para concatenar las filas.
for (const row of rows) {
    result += row + "\n";  // Agregar cada fila y una nueva línea
}

// Mostrar el resultado final de la pirámide
console.log(result);

// Paso 32: Concatenar nueva línea entre valores de resultado y fila
let result = "";
for (let row of rows) {
    result += row + "\n";
}
console.log(result);

// Paso 33: Empujar `caracter` en lugar de `i` en el array `rows`
const character = "#";
rows = [];
for (let i = 0; i < count; i++) {
    rows.push(character.repeat(i + 1));
}

// Paso 34: Utilizar .repeat() en `caracter` y darle `i` como número de repeticiones
rows = [];
for (let i = 0; i < count; i++) {
    rows.push(character.repeat(i + 1));
}

// Paso 35: Añadir 1 al valor de `i` en `repeat()`
for (let i = 0; i < count; i++) {
    rows.push(character.repeat(i + 1));
}

// Paso 36: Crear la función `padRow`
function padRow() {}

// Paso 37: Llamar a la función `padRow`
padRow();

// Paso 38: Declarar una variable `call` y asignarle el resultado de `padRow`
let call = padRow();
console.log(call); // Paso 39: Imprimir el valor de `call`

// Paso 40: Usar `return` en `padRow` para devolver "¡Hola!"
function padRow() {
    return "¡Hola!";
}
console.log(padRow()); // Mostrar el valor de retorno de la función

// Paso 41: Agregar un parámetro `name` en `padRow`
function padRow(name) {
    return name;
}
console.log(padRow("TuNombre")); // Paso 42: Pasar el nombre como argumento

// Paso 43: Declarar la función `addTwoNumbers`
function addTwoNumbers(a, b) {
    return a + b;
}
let sum = addTwoNumbers(5, 10);
console.log(sum); // Imprimir `sum`

// Paso 44: Eliminar la función `addTwoNumbers` y `sum`

// Paso 45: Declarar `test` dentro de `padRow`
function padRow() {
    const test = "Testing";
}
console.log(test); // Esto causará un error de ámbito

// Paso 46: Usar `return` para devolver `test`
function padRow() {
    const test = "Testing";
    return test;
}
console.log(padRow()); // Imprimir el retorno de `padRow`

// Paso 47: Mover `console.log` por encima de `return`
function padRow() {
    const test = "Testing";
    console.log("¡Esto funciona!");
    return test;
}
console.log(padRow()); // Ver resultado en consola

// Paso 48: Eliminar `console.log` y mostrar el retorno
console.log(padRow()); // Solo imprime el valor retornado

// Paso 49: Eliminar `test` y el `return` de `padRow`
function padRow() {}

// Paso 50: Eliminar `call` y el `console.log` de `call`

// Paso 51: Agregar `rowNumber` y `rowCount` como parámetros
function padRow(rowNumber, rowCount) {}

// Paso 52: Usar `return` para devolver `character.repeat(rowNumber)`
function padRow(rowNumber, rowCount) {
    return character.repeat(rowNumber);
}

// Paso 53: Reemplazar `character.repeat(i + 1)` con llamada a `padRow`
rows = [];
for (let i = 0; i < count; i++) {
    rows.push(padRow(i + 1, count));
}

// Paso 54: Pasar `i + 1` y `count` como argumentos en `padRow`
rows = [];
for (let i = 0; i < count; i++) {
    rows.push(padRow(i + 1, count));
}

// Paso 55: Concatenar espacio al principio y final de la cadena en `padRow`
function padRow(rowNumber, rowCount) {
    return " " + character.repeat(rowNumber) + " ";
}

// Paso 56: Actualizar espacios en blanco para que se repitan `rowCount - rowNumber` veces
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);
}

// Paso 57: Repetir `character` con `2 * rowNumber - 1` veces
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// Paso 58: Usar `+=` para incrementar `result`
result += character;

// Paso 59: Usar `++` en lugar de `+= 1` en el bucle
for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}

// Paso 60: Empezar el bucle en 1 en lugar de 0
for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}

// Paso 61: Usar `i` directamente en lugar de `i + 1` en `padRow`
for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}

// Paso 62: Cambiar la condición del bucle a `i <= count`
for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}

// Paso 63: Agregar un comentario de una línea sobre la función
// Esta función formatea cada fila de la pirámide

// Paso 64: Convertir el bucle `for` en un comentario de varias líneas

for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}


// Paso 65: Crear una sentencia if con la condición `true`
if (true) {
    console.log("Condition is true");
}

// Paso 66: Cambiar la condición if a `false`
if (false) {
    console.log("Condition is true");
}

// Paso 67: Cambiar la condición if a la cadena "false"
if ("false") {
    console.log("Condition is true");
}

// Paso 68: Cambiar la condición if a una cadena vacía `""`
if ("") {
    console.log("Condition is true");
}

// Paso 69: Agregar else if y verificar si `5 < 10`
if (false) {
    console.log("Condition is true");
} else if (5 < 10) {
    console.log("5 is less than 10");
}

// Paso 70: Agregar un bloque else
if (false) {
    console.log("Condition is true");
} else if (5 > 10) {
    console.log("5 is less than 10");
} else {
    console.log("This is the else block");
}

// Paso 71: Declarar `continueLoop` como `false` y `done` como `0`
let continueLoop = false;
let done = 0;

// Paso 72: Declarar un bucle `while` con `continueLoop` como condición
while (continueLoop) {
    // Lógica
}

// Paso 72: Crear un bucle `while` con `continueLoop` como condición
let continueLoop = true;  // Cambiar a true para que el bucle inicie
let done = 0;
let count = 5;  // Puedes ajustar el número de filas de la pirámide

while (continueLoop) {
    done++;  // Incrementar `done` en cada iteración
    // Paso 74: Usar `if` para verificar si `done` es igual a `count`
    if (done === count) {
        continueLoop = false;  // Detener el bucle cuando `done` alcance `count`
    }
}

// Paso 77: Llamar a `padRow` con `done` y `count` como argumentos
function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + "#".repeat(2 * rowNumber - 1);
}

done = 0;
let filas = [];
while (done < count) {
    filas.push(padRow(done + 1, count));
    done++;
}

console.log(filas.join("\n"));  // Imprimir la pirámide en la consola

// Paso 78: Cambiar la condición del bucle `while` para verificar `done !== count`
done = 0;
filas = [];
while (done !== count) {
    filas.push(padRow(done + 1, count));
    done++;
}

// Paso 79: Eliminar la sentencia `if` ahora que la condición está en el `while`
done = 0;
filas = [];
while (done < count) {
    filas.push(padRow(done + 1, count));
    done++;
}

// Paso 80: Eliminar `continueLoop` ya que no es necesaria
filas = [];
done = 0;
while (done < count) {
    filas.push(padRow(done + 1, count));
    done++;
}

// Paso 81: Actualizar el bucle `while` para asegurarse de que `done <= count`
done = 0;
filas = [];
while (done <= count) {
    filas.push(padRow(done + 1, count));
    done++;
}

// Paso 82: Reemplazar la variable `done` con `rows.length`
filas = [];
while (filas.length < count) {
    filas.push(padRow(filas.length + 1, count));
}

// Paso 83: Reemplazar `done` en la llamada a `padRow` con `rows.length + 1`
filas = [];
while (filas.length < count) {
    filas.push(padRow(filas.length + 1, count));
}

// Paso 84: Eliminar el incremento de `done` y su declaración
filas = [];
while (filas.length < count) {
    filas.push(padRow(filas.length + 1, count));
}

// Paso 85: Convertir el bucle `while` en un comentario de varias líneas

while (filas.length < count) {
    filas.push(padRow(filas.length + 1, count));
}


// Paso 86: Crear un bucle `for` para una pirámide invertida
filas = [];
for (let i = count; i > 0; i--) {
    filas.push(padRow(i, count));
}
console.log(filas.join("\n"));  // Imprimir la pirámide invertida

// Paso 87: Cambiar la condición a `i > 0`


// Paso 88: Restar 1 a `i` en cada iteración


// Paso 89: Empujar el resultado de `padRow(i, count)` en `filas`


// Paso 90: Usar `-=` en lugar de `--`
filas = [];
for (let i = count; i > 0; i -= 1) {
    filas.push(padRow(i, count));
}

// Paso 91: Usar el operador de decremento `--`
// Implementado en el paso 86 con `i--`

// Paso 92: Comentar este bucle también

for (let i = count; i > 0; i--) {
    filas.push(padRow(i, count));
}


// Paso 93: Declarar una variable `numbers` y asignar `[1, 2, 3]`
const numbers = [1, 2, 3];
console.log(numbers);

// Paso 94: Usar `.unshift()` para agregar `5` al inicio de `numbers`
const unshifted = numbers.unshift(5);
console.log(numbers);  // `[5, 1, 2, 3]`
console.log(unshifted);  // Nueva longitud del array

// Paso 95: Usar `.shift()` para eliminar el primer elemento de `numbers`
const shifted = numbers.shift();
console.log(shifted);  // `5`
console.log(numbers);  // `[1, 2, 3]`

// Paso 96: Limpiar las variables de prueba `numbers`, `shifted`, y `unshifted`


// Paso 97: Descomentar el primer bucle `for`


// Paso 98: Actualizar el cuerpo del bucle para usar `.unshift()`
filas = [];
for (let i = 1; i <= count; i++) {
    filas.unshift(padRow(i, count));  // Agregar al inicio en vez del final
}
console.log(filas.join("\n"));

// Paso 99: Declarar una variable `inverted` y asignarle `true`
let inverted = true;

// Paso 100: Crear una condición `if` que verifique si `inverted` es `true`
filas = [];
if (inverted) {
    for (let i = 1; i <= count; i++) {
        filas.unshift(padRow(i, count));  // Construir la pirámide invertida
    }
}

// Paso 101: Mover `.unshift()` dentro del bloque `if`
// Ya implementado en el paso anterior

// Paso 102: Agregar un bloque `else` para construir la pirámide en orden normal
filas = [];
if (inverted) {
    for (let i = 1; i <= count; i++) {
        filas.unshift(padRow(i, count));
    }
} else {
    for (let i = 1; i <= count; i++) {
        filas.push(padRow(i, count));
    }
}
console.log(filas.join("\n"));

// Paso 103: Usar `.push()` en el bloque `else`
// Ya implementado en el paso anterior

// Paso 104: Eliminar todos los comentarios

