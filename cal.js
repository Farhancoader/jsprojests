const display = document.getElementById("display");

function appendtodisplay(input){
    display.value += input;
}

function calculate(){
    try{
    display.value = eval(display.value );
    }
    catch(error){
        display.value = "ERROR!";
    }
}

function cleard(){
    display.value = "";
}
