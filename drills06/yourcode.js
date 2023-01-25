

function removeClassFromElement(classSelect, classRemove){
	let arr = document.querySelectorAll(classSelect)
    arr.forEach(x => x.classList.remove(classRemove))
}

function toggleClassOnElement(classSelect, toogleClass){
	let arr = document.querySelectorAll(classSelect)
    arr.forEach(x => x.classList.toggle(toogleClass))
}

function hideElements(target, removalType){
    const element = document.querySelector(target)
    if (removalType === 'hide') element.style.display = "none"
    if (removalType === 'removeChildren') element.innerHTML = ''
    if (removalType === 'removeSelf') element.remove()
}

function addAttributeToElement(target, attribute, value){
	const element = document.querySelector(target)
    element[attribute] = value
}

function putPosInElement(  ){
	
}


