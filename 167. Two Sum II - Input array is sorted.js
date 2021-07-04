/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for(let i=0; i < numbers.length; i++){
        let resNumb = target - numbers[i]
        let isFinded = binarySearch(numbers, i, numbers.length, resNumb)
        if(isFinded > -1) return [i + 1, isFinded + 1]
    }
};

const binarySearch = (numbers, from, to, target) => {
    let left = from
    let right = to;
    while (right - left > 1){
        let middle = Math.floor((left + right) / 2);
        if(numbers[middle] === target) return middle
        if(numbers[middle] < target){
            left = middle
        } else {
            right = middle
        }
    }
    return -1
}

console.log(twoSum([5,25,75], 100));
