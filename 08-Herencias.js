// casos de uso
//clases => codificacion

//componentes
//E-R

    //ciclo de vida desarrollo
    //analisis
    //diseño
    //desarrollo
    //pruebas
    //implementacion
    //mantenimiento
    //documentacio
    class Persona {
        constructor(Nombre,Apellido,Edad,Sexo,Direccion,Correo,Telefono,Horario){
            this._nombre = Nombre;
            this._apellido = Apellido;
            this._edad = Edad;
            this._sexo = Sexo;
            this._direccion = Direccion;
            this._correo = Correo;
            this._telefono = Telefono;
            this._horario = Horario
        }
    }
    
    class Alumnos extends Persona{ 
        constructor(nombre,Carera,Semestre){
            super(nombre)
           // this._matricula = Matricula;
            this._carrera = Carera;
            this._semestre = Semestre;
        }
        mensaje(){
            console.log(`Soy el alumno ${this._nombre} y estudio la carrera de ${this._carrera}`);
            
        }
    }
    
    let alumno = new Alumnos("mina", "guerra", "10-16","23E20115", "sistemas", "3")
    alumno.mensaje()


