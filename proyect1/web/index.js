const { application, json } = require("express");

const formDatos = document.getElementById("datos");
formDatos.addEventListener("submit", (ev) => {
    ev.preventDefault()

    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const sexo = document.getElementById("sexo").value;
    const RFC = document.getElementById("RFC").value;


    let info = { nombre: nombre, edad: edad, sexo: sexo, RFC: RFC };
    let infoJSON =JSON.stringify(info);
    fetch("http://localhost:3001/guardar",{
        method :"POST", 
        headers:{"content-Type":"applicacion.json"},
        body:infoJSON

    })
    

    //datoArr.push(info);
    console.log(datoArr);
})