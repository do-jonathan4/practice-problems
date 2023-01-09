

function getPath(path){
    return path.split('/')
}

function getPathParts(){

}

function getCapitalCount(arr){
    let count = 0
    for (let word of arr) {
        if (word[0].toUpperCase() === word[0]) count++
    }
    return count
}

function correctCalcChecker(arr){
    let correct = []
    for (let obj of arr) {
        if (obj.op === '+') {
            if (obj['result'] === obj.num1 + obj.num2) correct.push(obj)
        }
        if (obj.op === '-') {
            if (obj['result'] === obj.num1 - obj.num2) correct.push(obj)
        }
        if (obj.op === '*') {
            if (obj['result'] === obj.num1 * obj.num2) correct.push(obj)
        }
        if (obj.op === '/') {
            if (obj['result'] === obj.num1 / obj.num2) correct.push(obj)
        }
    }
    return correct
}

function doMath(){

}
