/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let numsMap = new Map()
    let nums2Set = [...new Set(nums2)]
    let res = []
    nums1.forEach(el => {
        if(!numsMap.has(el)) {
            numsMap.set(el, 1)
        }
    })

    for (let i = 0; i < nums2Set.length; i++) {
        if(numsMap.has(nums2Set[i])) res.push(nums2Set[i])
    }
    return res
};
