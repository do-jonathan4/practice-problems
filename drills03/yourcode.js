

function getPath(path){
    return path.split('/')
}

function getPathParts(url){
    let [protocol, host, pathportfile] = url.split(':')
    host = host.slice(2)
    let num1 = pathportfile.indexOf('/')
    let num2 = pathportfile.lastIndexOf('/')
    let port = pathportfile.slice(0, num1)*1
    let path = pathportfile.slice(num1+1, num2)
    let file = pathportfile.slice(num2+1)
    return {protocol, host, port, path, file}
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
