// Definir clases son atributos dentro del constructor

class Persona{
    constructor(nombre,edad,sexo,direccion){
        this.nombre=nombre;
        this.direccion=direccion;
        this.edad=edad;
        this.sexo=sexo;
    }
    // (dejan de ser funciones y se llaman metodos)  metodo saludar
    saludar(){
console.log(`Hola ${this.nombre}`);
    }

    // Encapsulamiento (setter y getter) seter=eliminar  getter=agrega
    get nombre(){
        return this._nombre
        this._nombre=values ;
    }
}
let persona1 = new Persona("JesusR",22,"M","Agustin de Iturbide")
console.log(persona1);
persona1.saludar()