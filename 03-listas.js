// crear un lista con diferentes tipos de datos
let datos ={nombre: "Mina", aprlliods: " Guerra Moreno", edad: 18, estudia: false};
let arreglo= ["mina", 18, mari, true];

const info = () => {
    /*for(let arr in arreglo){
        console.log(arreglo[arr]);

    }
        for (let list in datos){
    console.log(`${list}:${datos[list]}`)
    
    let valores = Object.values(datos);
    valores.map((data, index) =>{
        console.log(`${index}:${data}`);
    });

    let valores = Object.keys(datos);
    for (let informacion of valores ){
        console.log(informacion);
    }

    let valores = Object.entries(data);
    valores.map(dat => {
        console.log(dat);
    })*/


        Object.entries(datos).forEach(([key, value]) =>{
            console.log(`El ${key}: ${value}`)
        })
};
info();