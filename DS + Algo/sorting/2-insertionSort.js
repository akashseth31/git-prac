/**
 * Insertion Sort
 * Worst case: O(n^2)
 * Avg Case: O(n^2)
 * Best Case: O(n)
 * Space Req: O(n)
 */

 function insertionSort(arr) {
    function findAndInsert(v, l) {
        console.log(v, l, arr);
        for(i = 0; i < l; i++) {
            if(arr[i] > v) {
                arr.splice(l, 1);
                arr.splice(i, 0, v);
                break;
            }
        }
        console.log(arr);
    }
    for(let i=1; i < arr.length; i++){
        if(arr[i] < arr[i-1]) {
            findAndInsert(arr[i], i);
        }
    }
    return arr;
 }
 const a = [25, 11, 6, 30, 75, 2];
 console.log(insertionSort(a));