// question asked in an interview

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// function sortBinary(arr){
//     let i = 0, j = arr.length - 1;
//     while(i<=j){
//         console.log(arr[i], arr[i+1], i);
//         if(arr[i] > arr[i+1]) {
//             swap(arr, i, i+1);
//             i = -1;
//         }
//         if(arr[j] < arr[j-1]) {
//             swap(arr, j, j-1);
//             j = arr.length;
//         }
//         i++;
//         j--;
//     }
//     return arr;
// }

function sortBinary(arr) {
    let i = 0; j = -1;
    while(i < arr.length) {
        console.log(a[i], i, j);
        if(arr[i] < 1) {
            j++;
            swap(arr, i , j);
        }
        i++;
    }
    return arr;
}

// const a = [25, 11, 6, 30, 75, 2];
const a = [1,1,0, 1, 1, 0, 1, 1, 0];
console.log(sortBinary(a));