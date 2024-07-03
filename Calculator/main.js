let currentValue="";

const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
    display.scrollLeft=display.scrollWidth;
}

function clearDisplay(){
    display.value = display.value.slice(0,-1);
    currentValue = display.value;
}

function clearAll(){
    display.value="";
    currentValue="";

}

function calculate(){
    display.value = eval(display.value);
}