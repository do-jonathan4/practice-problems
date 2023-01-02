
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
        if (sum + arr[i] > val) continue
        sum += arr[i]
        result.push(arr[i])
    }
    return result
}

function getAllNamesShorterThan(names, num){
    let result = []
    for (let i = 0; i < names.length; i++) {
        if (names[i].length < num) result.push(names[i])
    }
    return result
}

function makeLabel(){

}
