// PIDO NOMBRE
let nombre = (prompt("ingrese su nombre"));
console.log(`"Hola" ${nombre}`);


// PIDO NUMEROS
let final = true
while(final){
    let nuMero = (prompt("ingresa un numero"));
    let nuMero2 = (prompt("por cuanto lo queres multiplicar"));
    console.log("el resultado es " + nuMero * nuMero2);
    if( + nuMero * nuMero2 >= 100){
    console.log("el resultado es mayor a 100");
    final = false;
}
}