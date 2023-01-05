

function countOccurences(arr, word){
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word) result++
    }
    return result
}

function wordLengths(arr){
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i].length
        result.push(num)
    }
    return result
}

function getMinMaxMean(arr){
    const mean = arr.reduce((sum, i) => sum + i)/arr.length
    const min = arr.sort((a, b) => a-b)[0]
    const max = arr.sort((a, b) => a-b)[arr.length-1]
    return {min, max, mean}
}

function findMode(arr){
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }

    let mode = 0
    let count = 0
    for (const prop in obj) {
        if (obj[prop] > count) {
            count = obj[prop]
            mode = Number(prop)
        }
    }
    
    return mode
}
