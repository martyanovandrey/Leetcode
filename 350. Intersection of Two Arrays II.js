/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//Version 1

// var intersect = function(nums1, nums2) {
//     let res = []
//
//     for (let i=0; i<nums1.length; i++){
//         if(nums2.includes(nums1[i])){
//             res.push(nums1[i])
//             nums2[nums2.indexOf(nums1[i])] = null
//         }
//     }
//     return res
// };

//Version 2
// var intersect = function(nums1, nums2) {
//     let res = []
//
//     function hash(arr) {
//         const hashObj = arr.reduce((acc, el) => {
//             acc[el] = acc[el] ? acc[el] + 1 : 1
//             return acc
//         }, {})
//         return hashObj
//     }
//
//     let nums1Hash = hash(nums1)
//     let nums2Hash = hash(nums2)
//     for (let el in nums1Hash){
//         if (nums2Hash?.[el] > 0) {
//             let min = Math.min(nums1Hash[el], nums2Hash[el])
//             res = res.concat(Array(min).fill(el))
//         }
//     }
//     return res
// };

//Version 3
var intersect = function(nums1, nums2) {
    let res = []

    let nums1Hash = nums1.reduce((acc, el) => {
        acc[el] = acc[el] ? acc[el] + 1 : 1
        return acc
    }, {})
    for (let i = 0; i < nums2.length; i++){
        let curr = nums2[i]
        let count = nums1Hash[curr]

        if (count && count > 0) {
            res.push(curr)
            nums1Hash[curr]--
        }
    }
    return res
};


let nums1 = [1,2,2,1], nums2 = [2,2]

console.log(intersect(nums1, nums2));
