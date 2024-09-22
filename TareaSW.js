class Alumnos{
    constructor( nombre){
        this.nombre  =nombre;
        this.calificaciones = [];
    }
    AgregarCalific(calificacion) {
        this.calificaciones.push(calificacion)
    }
    mostrarCalifi() {
        console.log(`Nombre del alumno: ${this.nombre}`);
        this.calificaciones.forEach(calificacion => {
            calificacion.mostrarDetalles();
        });
        console.log();
    }
}
class Calificacion {
    constructor(Materia, Docente, cali1, cali2) {
        this.Materia = Materia;
        this.Docente = Docente;
        this.cali1 = cali1;
        this.cali2 = cali2;
    }
  Promedio() {
    return (this.cali1 + this.cali2) / 2;
   }

   mostrarDetalles(){
    console.log(`  Materia: ${this.Materia.nombre}`)
    console.log(`  Docente: ${this.Docente.nombre}`)
    console.log(`  Calificacion1: ${this.cali1}: Calificacion2: ${this.cali2}, Promedio Final: ${this.Promedio().toFixed(2)}`)
   }
}

class Materias {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Docentes {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
class sistemaCalif{
    constructor() {
        this.alumnos = [];
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    mostrarAlumnos() {
        this.alumnos.forEach(alumno => {
            alumno.mostrarCalifi();
        });
    }
}

Desarrollo = () => {
    const docente1 = new Docentes("José");
    const docente2 = new Docentes("Pedro");
    const docente3 = new Alumnos("Juan")

    const materia1 = new Materias("Matemáticas");
    const materia2 = new Materias("Física");
    const materia3 = new Materias("Programación");

    const Dany = new Alumnos("Dany")
    const Luis= new Alumnos("Luis")
  

    Dany.AgregarCalific(new Calificacion(materia1, docente1, 90, 95));
    Dany.AgregarCalific(new Calificacion(materia2,docente2, 85, 75));
    Dany.AgregarCalific(new Calificacion(materia3,docente3, 30, 30));

    Luis.AgregarCalific(new Calificacion(materia1, docente1, 75, 85));
    Luis.AgregarCalific(new Calificacion(materia2, docente2, 70, 30));


    let sistemas = new sistemaCalif()
    sistemas.agregarAlumno(Dany);
    sistemas.agregarAlumno(Luis);

    sistemas.mostrarAlumnos();
}

Desarrollo();

