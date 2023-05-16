    const displayBlock = document.getElementById('display-block')

function getNum(num){
    displayBlock.innerText += num
}

function clearAll(){
    displayBlock.innerText = " "
}

function clearValue(){
    const tempValue = displayBlock.innerText
    displayBlock.innerText = displayBlock.innerText.slice(0,(tempValue.length-1))
    
}

function calculate(){
    console.log(displayBlock.innerText)
    displayBlock.innerText = eval(displayBlock.innerText)
}