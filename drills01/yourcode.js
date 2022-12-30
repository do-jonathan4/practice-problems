
function sumArray(arr){
    let sum = 0
	for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

function fitWithinVal(arr, val){
    let sum = 0
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > val) continue
        if (sum >= val) continue
        sum += arr[i]
        result.push(arr[i])
    }
    return result
}

function getAllNamesShorterThan(){

}

function makeLabel(){

}
