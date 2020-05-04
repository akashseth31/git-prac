var twoSum = function(arr, target) {
    let indexes;
    for(let i=0; i<arr.length; i++) {
        const cArr = [...arr];
        cArr.splice(i, 1);
        if(cArr.indexOf(target - arr[i]) > - 1) {
            indexes = [i, cArr.indexOf(target - arr[i]) + 1];
            break;
        }
    }
    return indexes;
};

console.log(twoSum([2,7,11,15], 9));