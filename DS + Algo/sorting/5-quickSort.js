
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(arr, l, h) {
    const pivot = arr[Math.floor((l + h) / 2)];
    let i = l, j = h;
    while(i<=j) {
        while(arr[i] < pivot) {
            i++;
        }
        while(arr[j] > pivot) {
            j--;
        }
        if(i <= j) {
            console.log('here');
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(arr, l, h) {
    if(arr.length > 1) {
        const index = partition(arr, l, h);
        if(l < index - 1)
            quickSort(arr, l, index - 1);
        if(index < h)
            quickSort(arr, index, h);
    }
    return arr;
}

const a = [25, 11, 6, 30, 75, 2];
console.log(quickSort(a, 0, a.length - 1));