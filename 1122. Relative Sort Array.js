var relativeSortArray = function(arr1, arr2) {
    let arr2hash = {}
    let res1 = []
    let res2 = []
    for(let i=0; i < arr1.length; i++){
        //arr2hash[arr2[i]] = i
        if(arr2.includes(arr1[i])){
            arr1.forEach(el => {
                if(arr2[i] === el){
                    res1.push(arr2[i])
                }
            })
        } else {
            res2.push(arr1[i])
        }

    }
    res2.sort((a,b) => a - b)

    return [...res1, ...res2]
};

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));
