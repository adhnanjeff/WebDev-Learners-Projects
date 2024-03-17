const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value) //eval() is a built in method to evaluate the given value/ parameter passed to the method and returns the answer
    }
    catch(error){
        display.value = "Error";
    }
    
}