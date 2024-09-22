                // n= a la numero de veces que se va arepetir
/*  function fibo(n){
    const sucesion=[0, 1]
    for(let i=2;i<n;i++){
        sucesion[i]=sucesion[i-1]+sucesion[i-2];
    }
    return sucesion
}
console.log(fibo(10))*/

/*n=5 
arr=[0,1]
i=2  ;i<5;i++
arr [2]=arr[2-1]+arr[2-2]
arr[2]=arr[1]+ arr[0]
arr[2]=arr[1]
arr [3]=arr[3-1]+arr[3-2]
arr[2]*/
    

           //corregir
/*function fibo(n){
    let inicial = 0
    let temporal= 1
    let actual =0
    for(i=2;i<n;i++){
        inicial=temporal
        temporal=actual
        actual=inicial+temporal
    }
    console.log(actual)
}
fibo(5)   */

/*let fibo = () =>{
    let inicial = 0
    let temporal= 1
    let actual = [0,1]
    for(let i=2;i<6;i++){
        suma = inicial + temporal
        inicial = temporal
        temporal = suma  
        actual.push(suma)
    }
    console.log(actual)
}
fibo()*/
          // corregir
let fibo = (n) =>{
    if (n < 2){
        return n
    }
        return fibo(n-1) + fibo(n-2) 
    }
console.log(fibo(6)) 
 

/* let fibo = () => {
    let inicial = 0
    let  temporal = 1
    let actual 
    for(let i = 0 ;i < n ; i++){
        actual = inicial
        inicial = temporal
        temporal =   actual + temporal;  
    }
    return inicial
}
console.log(fibo(6)) */