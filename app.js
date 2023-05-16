    const displayBlock = document.getElementById('display-block')

function getNum(num){
    displayBlock.value += num
}

function clearAll(){
    displayBlock.value = " "
}

function clearValue(){
    const tempValue = displayBlock.value
    displayBlock.value = displayBlock.value.slice(0,(tempValue.length-1))
    
}

function calculate(){
   displayBlock.value = eval(displayBlock.value);

}

