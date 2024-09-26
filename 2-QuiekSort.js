QuickSort = (arr) => {
    const datos= [...arr];
    const Array = [];

    partition = (arr, low, high) => {
        const pivot = arr[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]]; 
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; 
        return i + 1;
    };
    let low = 0;
    let high = datos.length - 1;

    const datosP = [];
    datosP.push([low, high]);

    while (datosP.length > 0) {
        const [low, high] = datosP.pop();

        if (low < high) {
            const pivotIndex = partition(datos, low, high);
            datosP.push([low, pivotIndex - 1]);
            datosP.push([pivotIndex + 1, high]);
        }
    }
    return datos; 
}
const array = [5, 666, 25, 3, 22, 11, 15];
const Array = QuickSort(array);
console.log(Array); 




            // recursivo

/* QuickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
       const datos = arr[arr.length - 1];
       const partition = (arr, datos) => {
    if (arr.length === 0) return [[], []];
        const [head, ...tail] = arr;
        const [left, right] = partition(tail, datos);

        if (head < datos) {
            return [[head, ...left], right];
        } else {
            return [left, [head, ...right]];
        }
    };
    const [left, right] = partition(arr.slice(0, arr.length - 1), datos);
    return [...QuickSort(left), datos, ...QuickSort(right)];
}
const array = [5, 666, 25, 3, 22, 11, 15];
const Array = QuickSort(array);
console.log(Array); */