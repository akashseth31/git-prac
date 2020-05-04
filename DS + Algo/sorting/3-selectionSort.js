/**
 * Selection Sort
 * Worst case: O(n^2)
 * Avg Case: O(n^2)
 * Best Case: O(n^2)
 * Space Req: O(n)
 */

function selectionSort(arr) {
    let minIndex = 0;
    for(let i = 0; i < arr.length - 1; i++){
        minIndex = i;
        for(let j=i+1; j<arr.length; j++) {
            if(a[j] < a[i]) {
                minIndex = j;
            }
        }
        if(minIndex !== i) {
            console.log(a[i], a[minIndex]);
            let temp = a[i];
            a[i] = a[minIndex];
            a[minIndex] = temp;
        }
    }
    return arr;
 }
 const a = [25, 11, 6, 30, 75, 2];
 console.log(selectionSort(a));
