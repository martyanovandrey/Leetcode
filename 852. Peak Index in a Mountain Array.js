/**
 * @param {number[]} arr
 * @return {number}
 */

//76ms faster than 79%
// var peakIndexInMountainArray = function(arr) {
//     for ( let i=0; i < arr.length - 1; i++){
//         if(arr[i] > arr[i + 1]){
//             return i
//         }
//     }
// };

var peakIndexInMountainArray = function(arr) {
    let left = 0
    let right = arr.length

    while ( right - left >> 1) {
        let middle = Math.floor((left + right)/2)
        if(arr[middle] > arr[middle + 1] && arr[middle] < arr[middle - 1]){
            right = middle
        } else if (arr[middle] < arr[middle + 1] && arr[middle] > arr[middle - 1]){
            left = middle
        } else {
            return middle
        }
    }
};

console.log(peakIndexInMountainArray([0,2,1,0]));
