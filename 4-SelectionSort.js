SelectionSort = (Arr) => {
    const n = Arr.length;
    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (Arr[j] < Arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            const tmp = Arr[i];
            Arr[i] = Arr[min];
           Arr[min] = tmp;
        }
    }
    return Arr;
}
const array = [5, 666, 25, 3, 22, 11, 15];
const Array = SelectionSort(array);
console.log(Array); 



               // recursivo
/* SelectionSort = (arr, index = 0) => {
    if (index >= arr.length - 1) {
        return arr;
    }
    const datos = (arr, minIndex, currentIndex) => {
        if (currentIndex >= arr.length) {
            return minIndex;
        }
        return arr[currentIndex] < arr[minIndex]
            ? datos(arr, currentIndex, currentIndex + 1)
            : datos(arr, minIndex, currentIndex + 1);
    };
    const minIndex = datos(arr, index, index + 1);
    if (minIndex !== index) {
        [arr[index], arr[minIndex]] = [arr[minIndex], arr[index]];
    }
    return SelectionSort(arr, index + 1);
}
const array = [5, 666, 25, 3, 22, 11, 15]; 
const Array = SelectionSort(array);
console.log(Array); */