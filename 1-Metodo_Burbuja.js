bubble  = (arr) => {
    const n = arr.length;

bubblePass = (index) => {
        if (index >= n - 1) return; 

        if (arr[index] > arr[index + 1]) {
            [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
        }
        bubblePass(index + 1);
    };
    for (let i = 0; i < n - 1; i++) {
        bubblePass(0);
    }
    return arr;
};
const array = [5, 666, 25, 3, 22, 11, 15];
const Array = bubble(array);
console.log(Array);



       // recursivo
/* 
bubble  = (arr, n = arr.length) => {
    if (n === 1) { return arr;}

bubblePass = (index = 0) => {
        if (index === n - 1) {
            return;
        }
        if (arr[index] > arr[index + 1]) {
            [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
        }
        bubblePass(index + 1);
    } 
    bubblePass();
    return bubble(arr, n - 1);
}
const array = [5, 666, 25, 3, 22, 11, 15];
const Array = bubble(array);
console.log(Array);

 */