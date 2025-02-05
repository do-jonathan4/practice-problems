

function changeElements(numClass){
    let numConvert = document.querySelectorAll(numClass)
    numConvert.forEach(x => {
        if (x.textContent === 'one') x.textContent = 1
        if (x.textContent === 'two') x.textContent = 2
        if (x.textContent === 'three') x.textContent = 3
        if (x.textContent === 'four') x.textContent = 4
        if (x.textContent === 'five') x.textContent = 5
        if (x.textContent === 'six') x.textContent = 6
        if (x.textContent === 'seven') x.textContent = 7
        if (x.textContent === 'eight') x.textContent = 8
        if (x.textContent === 'nine') x.textContent = 9
    })
}

function appendTextToElement(elementClass, text){
    let element = document.querySelectorAll(elementClass)
    element.forEach(x => x.append(text))
}

function addClass(elementClass, extraClass){
    let element = document.querySelectorAll(elementClass)
    element.forEach(x => x.classList.add(extraClass))
    return(element.length)
}

function removeElements(elementClass){
    let element = document.querySelectorAll(elementClass)
    element.forEach(x => x.remove())
}