const prompt = require('prompt-sync')();   //Marina Guerra Moreno


class EmpleadosCooperativa{
    constructor(nombre, apellidos, RFC, direccion, telefono, sueldoBase, horasExtras = 0){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.RFC = RFC;
        this.direccion = direccion;
        this.telefono = telefono;
        this.sueldoBase = sueldo;
        this.horasExtras = horasExtras;
    }  
             //Getter y Setter
    get Nombre() { return this.nombre; }
    set Nombre(values) { this._nombre = values; }
         
    get Apellidos() { return this.apellidos; }
    set Apellidos(values) { this._apellidos = values; }
         
    get RFC() { return this.RFC; }
    set RFC(values) { this._RFC = RFC; }
         
    get Direccion() { return this.direccion; }
    set Direccion(values) { this._direccion = values; }
         
    get Telefono() { return this.telefono; }
    set Telefono(values) { this._telefono = values; }
         
    get SueldoBase() { return this.sueldoBase; }
    set SueldoBase(values) { this._sueldoBase = values; }
         
    get HorasExtras() { return this.horasExtras; }
    set HorasExtras(values) { this._horasExtras = values; }
             
    calSueldo() {
    let sueldo = this._horasExtras > 0 ? this._sueldoBase * 0.15:0;
    let   sueldoTotal = this._sueldoBase + sueldo;
    return sueldoTotal 
    }
}
let Datos =[]
let DatosCom = () => {
    let contratar = parseInt(prompt("Ingrese el numer de empleados:"));
    for(let i = 0; i<contratar ; i++){
            prompt(`Ingrese el nombre: `),
            prompt(`Ingrese el apellido: `),
            (prompt(`Ingrse su RFC: `)),
            prompt(`Ingrese su direccion: `),
            parseFloat(prompt('Ingrese el sueld base: '));
            parseInt(prompt('Ingrese las horas extras trabajadas: '));
            parseInt(prompt(`Ingrese su numero telefonico: `))
            empleado =new Empleado (nombre, apellidos, RFC, direccion, telefono, sueldoBase, horasExtras)
            Datos.push(empleado)       
    }
    empleado();
}
const datos =() =>{
    empleados();
};
const empleando  =()=>{
    arreglo.map ((empleados, index ) =>{
        console.log (`Empleado${index+1}:${empleados.nombre}${empleados.apellidos}RFC${empleados.RFC}${empleados.direccion},${empleados.telefono}`)
    })
};
const eliminarUltimoEmpleado =()=> {
    if (this.empleados.length > 0) {
        this.empleados.pop();
        console.log('Último empleado eliminado exitosamente.');
    } else {
        console.log('No hay empleados para eliminar.');
    }; 
}
DatosCom();
eliminarUltimoEmpleado();
empleando()