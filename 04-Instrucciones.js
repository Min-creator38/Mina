const prompt=require(`prompt-sync`)();
/*
let numero;
let numero2;

numero=parseInt(prompt("Ingrese el numero 1:"));
numero2=parseInt(prompt("Ingrese el numero 2:"));

console.log(numero*numero2);*/

/* Realizar un programa que contenga un arreglo indefinido en el que solicite a 
traves del teclado el tamaño y se ingresepor lo menos 4 con un ciclo valores de 
cualquier tipo, imprimir los valores en pantalla*/
/*
let arreglo=[];


function infoarreglo(){
    const Tamaño=parseInt(prompt(`Ingrese el Tamaño de la lista:`));
for(let i=0; i<Tamaño;i++){
    let datos=prompt(`Ingresa datos: `)
    arreglo[i]=datos;
    //arreglo.push(datos);
}
arreglo.map((data) =>{
    console.log(arreglo);
});
}
infoarreglo()*/

let informacion;
const datos= () => {
    const Tamaño=parseInt(prompt(`Ingrese el Tamaño de la lista:`));
for(let i= 0; i<Tamaño;i++){
   let nombre=prompt(`El nombre es:`)
   let edad=parseInt(prompt(`La edad es:`))

 informacion = {
    nombre,
    edad,
 }
 arreglo.push(informacion);
}
arreglo.map((Marina) =>{
console.log(`El nombre es: ${Marina.nombre} y tiene ${Marina.edad}`)
});

console.log(arreglo);
}
datos()
