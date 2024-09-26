const prompt = require("prompt-sync")();

class Persona {
    constructor (nombre, edad, sexo,direccion, telefono){
        this._telefono = telefono;
        this._nombre = nombre;
        this._edad = edad;
        this._sexo = sexo;
        this._direccion = direccion;
        this._Arreglo =[]
       
    }
    AgregarPersona (){  
        let NumPersonas = 3;
    for ( let i = 0; i < NumPersonas ; i ++){
        this._nombre = prompt(" su nombre es :"),
        this._sexo = prompt("su sexo es:"),
        this._direccion = prompt(" su direccion es: "),
        this._edad = prompt(" su edad es :"),
        this._telefono = prompt(" su numero de telefono es: ")
    }   
    let personas = {
        nombre: this._nombre,
        sexo: this._sexo,
        direccion: this._direccion,
        edad: this._edad,
        telefono: this._telefono
    }    
    this._Arreglo.push(personas)     
   }

   MostrarInfo (){
    this._Arreglo.forEach((map) => { 
    console.log( `Soy ${map.nombre}, mi genero es ${map.sexo}, vivo en la calle ${map.direccion}
                  y tengo ${map.edad} años de edad, mi numero de celular es : ${map.telefono}`) 
                });
   }
}
let Persona1 = new Persona ();
Persona1.AgregarPersona()
Persona1.MostrarInfo()
