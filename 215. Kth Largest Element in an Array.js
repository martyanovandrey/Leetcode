/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return quickSort(nums, 0 , nums.length - 1, k)[nums.length - k]
};

function quickSort(arr, start, end , k) {
    if (start < end ){
        let pivotIndex = partition(arr, start, end);
        quickSort(arr, start, pivotIndex - 1)
        quickSort(arr, pivotIndex, end)
        return arr
    } else {
        return arr
    }

}

function partition(arr, start = 0, end = arr.length - 1){
    const pivotValue = arr[end]
    let pivotIndex = start

    for (let i = start; i < end; i++) {
        if (arr[i] <= pivotValue) {
            swap(arr, i, pivotIndex)
            pivotIndex++
        }
    }
    swap(arr, pivotIndex, end)
    return pivotIndex
}

function swap(arr, a, b){
    [arr[a], arr[b]] = [arr[b], arr[a]]
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
// console.log(partition([3, 2, 1, 5, 6, 4]));
