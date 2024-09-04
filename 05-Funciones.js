// Factory fuction

const persona={
    nombres: "Mina",
    edad: 18
}
const persona2={
    nombres: "JesusR",
    edad: 22
}

function datosPersona(nombre,edad){
    return{
        nombre,
        edad,
        active:true
    }
}

let persona1 =datosPersona("Mina",18);
let persona3 =datosPersona("JesusR",22);
//console.log(persona1,persona3);
    //Camel case

const datosUsuario ={
    nombres: "JesusR",
    edad: 22,
    password: 250402,
     direccion:{
     colonia:"El carmen",
     Calle:"Agustin de Iturbide",
     numext: "s/n"
    },
    sueldo:300.50,
     guardarUsuario:function (){
console.log("Guardar Usuario....");
    }
}  
//datosUsuario.guardarUsuario();

   //add registro y parametro a los obejts definids
const user= {id:18};
user.name ="JesusR",
user.guardarUsuario=function(){
console.log("Guardar Usuario....");
}
console.log(user);
user.guardarUsuario();

    // Objetos definidos
//const person =Object.freeze({id:18, nombre:"Ricardo"});
const person =Object.seal({id:18, nombre:"JesusR"})
person.id=18;
person.nombre="Mina";
person.edad=22;

//console.log(person);
   //Pasar funciones como parametros
function Pitbull(nombre){
this.nombre=nombre; //this se utiliza para asignar un valor a los objtos
}

function Animal(Fn, argumento){
    return new Fn(argumento)
}
let Animal1 = Animal(Pitbull,"fiestas de fin de año")
console.log(Animal1)