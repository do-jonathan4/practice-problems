

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

function getMinMaxMean(){

}

function findMode(){

}
