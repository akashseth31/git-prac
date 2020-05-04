/**
 * Bubble Sort
 * Worst case: O(n^2)
 * Avg Case: O(n^2)
 * Best Case: O(n)
 * Space Req: O(n)
 */

 function bubbleSort(arr) {
     let swapped = false;
     for(let i=0; i<arr.length; i++){
         if(arr[i] > arr[i+1]) {
            swapped = true;
            let t = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = t;
         }
     }
     if(swapped) return bubbleSort(arr);
     return arr;
 }

 const a = [25, 11, 6, 30, 75, 2];

 console.log(bubbleSort(a));