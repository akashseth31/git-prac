/**
 * Selection Sort
 * Worst case: O(n log n)
 * Avg Case: O(n log n)
 * Best Case: O(n log n)
 * Space Req: O(n)
 */

 function merge(left, right) {
    //  console.log(left, right);
    let result = [], leftIndex = 0; rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
 }

 function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    )
 }
 const a = [25, 11, 6, 30, 75, 2];
 console.log(mergeSort(a));
