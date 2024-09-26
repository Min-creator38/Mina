MergeSort = (arr) => {
    if (arr.length <= 1){
return arr
    }
    for(let n =1; n < arr.length; n*=2){
    }
    for(let left1 = 0; left1 < arr.length -1; left1 +=2 *n){ 
        const mid =Math.min(left1 + n - 1, array.length - 1);
    }
}



         // recursivo
/* MergeSort = (arr) => {
   if (arr.length <= 1){
    return arr 
   }
   const medio = Math.floor(arr.length / 2) ;
   const leftHafl = arr.slice (0, medio);
   const rightHafl = arr.slice ( medio);
   const Sortedleft =MergeSort(leftHafl)
   const Sortedright =MergeSort(rightHafl)

   return (Sortedleft, Sortedright)
}
Merge = (left, right) =>{
    const resultado = []
    const left1 = 0;
    const right1 = 0
    while(left1 < left.length && right1 < right.length){
        if (left[left1] < right[right1]){
            resultado.push (left[left1]);
            left1++;
        }else{
            resultado.push(right[right1]);
            right1++;
        }
    }
    return resultado.concat(left.slice(left1)),
    right.slice(right1)
}
const array = [5, 666, 25, 3, 22, 11, 15];
const Array = MergeSort (array);
console.log(Array);  */