
/*realizar un arreglo con dos dimensiones y guardar
dos arreglos internos y dar lectutra a los datos internos*/


let Min =[
    ["Mar", "MinMin", "Mari"],
    ["Aurora","Creeper","Jupiter"]
     ];

// for of
    /* for (let dimensiones of Min){
        for(let variables of dimensiones){
            console.log(variables);
        }
     }*/

//for in
/*
for (let dimensiones in Min){
    for(let variables in Min){
        console.log(Min[dimensiones][variables]);
    }
}
*/
//for each 
/*Min.forEach(dimensiones=> {
    dimensiones.forEach(variables => 
        { console.log(variables);
    })
});

//function flecha
Min.map((dimensiones) =>{
    dimensiones.forEach(variables => 
        { console.log(variables);
    })
});
*/
//while

let i = 0;
while (i < Min.length) {
    let j = 0;
    while (j < Min[i].length) {
        console.log(` ${Min[i][j]}`);
        j++;
    }
    i++;
}

//estructura de control parser