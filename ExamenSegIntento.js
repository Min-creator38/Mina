const prompt = require("prompt-sync")();

class CentralVideo{
    constructor(nombre, NumMembresia, direccion, telefono, estado){
        this._nombre=nombre
        this._NumMembresia=NumMembresia
        this._direccion=direccion
        this._telefono=telefono
        this._estado= estado

        this._cliente=[]
        this._peliculas=[]
        this._rentas=[]
        this._consulta=[]
        this._consultaP=[]

    }

    AgregarCliente(){
        let registro = parseInt(prompt("Numero de clientes a registrar: "))
        for (let i = 0; i < registro; i++) {
            this._nombre=prompt("Ingrese el nombre: ")
            this._direccion=prompt("ingrese la direccion: ")
            this._telefono=parseInt(prompt("Agregar numero de telefon: "))
            this._NumMembresia=parseInt(prompt("su membresia es:"))
            this._estado=prompt()
            switch (parseInt(this._estado)) {
                case 1:
                    this._estado = 'Deudor';
                    break;
                case 2:
                    this._estado = 'Libre de multa';
                    break;
            }
            let cliente={
            nombre:this._nombre,
            direccion:this._direccion,
            telefono:this._telefono,
            NumMembresia:this._NumMembresia,
            estado: this._estado
        }
        this._cliente.push(cliente)
    }
 } 
    bajaCliente(NumMembresia) {
       const baja = this._cliente.findIndex(cliente => cliente.NumMembresia === NumMembresia);
       if (baja !== -1) {
        const clienteEliminado = this._cliente.splice(baja, 1);
                console.log(`la membresia del cliente ${clienteEliminado[0].nombre} ha sido dada de baja.`);
        } else {
            console.log(" la membresia del cliente no ha sido dada de baja.");
            console.log("Consulta de Registro del cliente finalizado");
    }
}
    RegisPelicula(){
        let registroP=parseInt(prompt("numero de peliculas a rentar:"))
        for(let i=0;i<registroP;i++){
            this._id= prompt("Ingrese su id: ");
            this._titulo = prompt("Ingrese el titulo de la pelicula que desea: ");
            this._clasificacion= prompt("Ingrese la clasificacion de la pelicula: ");
            this._estadoP=prompt( )
            switch (parseInt(this._estadoP)) {
                case 1:
                    this._estadoP = 'Disponible'
                    break
                case 2:
                    this._estadoP = 'Rentada'
                    break
            }
            this._tipo = prompt("tipo de peli(3.Pelicua de estreno), (4. Pelicula de catalogo) ")
            switch (parseInt(this._tipo)) {
                case 3:
                    this._tipo = 'Pelicua de estreno'
                    break
                case 2:
                    this._tipo = 'Pelicula de Catalogo'
                    break
            } 

            let pelicula={
                id:this._id,
                titulo:this._titulo,
                clasificacion:this._clasificacion,
                tipo:this._tipo,
                estadoP:this._estadoP
            }
            this._peliculas.push(pelicula)
        }
    }bajaPelicula(titulo) {
       const bajaP = this._peliculas.findIndex(pelicula => pelicula.titulo === titulo);
        if (bajaP !== -1) {
         const PeliEliminado = this._cliente.splice(bajaP, 1);
                 console.log(`la pelicula ${PeliEliminado[0].titulo} dado de baja.`);
         } else {
             console.log(" la Pelicula no ha sido dad de baja.");
             console.log("Consulta de la pelicula finalizada");
     }
 } eliminarPeli() {
    for (let i = 0; i < this._consultaPeli.length; i++) {
        if (this._consultaPeli[i].dispo === 'Rentata') {
            this._consultaPeli.slice(i, 1);
            // console.log(`La peli ${this._consultaPeli[i].titulo} se ha rentato`);

        } else {
            console.log(`La peli ${this._consultaP[i].titulo} aun sigue disponible `);
        }
    }
 }
 rentarPeli(titulo, verif) {
    let cinemax = this._consultaP;
    let peliEncontrata = null;
    
    for (let i = 0; i < cinemax.length; i++) {
        if (cinemax[i].titulo === titulo) {
            peliEncontrata = cinemax[i]
            break;
        }
    }
    if (peliRentada) {
        if (peliRentada.dispo === 'Aun esta Disponible:') {
            let deudorLibre = verif._consulta.some(c => c.estado === 'el cliente es Deudor:')
            if (deudorLibre) {
                console.log("Salde su deuda Pagando:");
            } else { 
            if (peliEncontrata.tipo === 'Pelicula de Estreno') {
                this._precioPeli = 50;
            } else if (peliEncontrata.tipo === 'Pelicula de Catalogo') {
                this._precioPeli = 35
            }
            let fechaRenta = prompt("Ingrese la fhecha de renta (DD-MM-AAAA")
            let fechaLimite = this.calcularLimite(fechaRenta)
            peliEncontrata.dispo = 'Rentada';
            peliEncontrata.fechaRenta = fechaRenta;
            peliEncontrata.fechaLimite = fechaLimite;
            console.log(`La peli ${titulo} ha sido rentada`);
            console.log(`la Fecha devolucion de la perlicula: ${peliEncontrata.fechaRenta}`);
            console.log(`Precio es de de la renta es de:${this._precioPeli}`);
        }
        } else {
            console.log("Peli no disponible");
        }
    }
}
calcularLimite(fechaRenta) {
    fechaLime.setDate(fechaLime.getDate() + 3);
    return fechaLime.toISOString().slice(0, 10)
}
}

let cliente = new CentralVideo()
cliente.AgregarCliente()
cliente.bajaCliente()
cliente.RegisPelicula()
cliente.bajaPelicula()
cliente.eliminarPeli()
cliente.rentarPeli()
cliente.calcularLimite()