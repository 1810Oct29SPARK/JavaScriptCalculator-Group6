//applying an event listerner to the window object
// window the window loads this fuctinion will be expecteud

window.onload = function(){
    console.log("henlo world");
    //Selecting element from the DOM with an id of "calculate"
    //add an event listerner so that the anonymous function provided
    //is executed when the element is clicked.
    document.getElementById("calculate").addEventListener("click",function(){
        //retrieve values from user input on the form
        let num1FromForm = document.getElementById("num1").value;
        let num2FromForm = document.getElementById("num2").value;
        let chosenOperation; 
        let operationRadios = document.getElementsByName("operation");
        for (let i=0; i < operationRadios.length; i++) {
            if (operationRadios[i].checked) {
                chosenOperation = operationRadios[i].value;
            }
        }
        //call calculate function with values and display the result
        console.log(num1FromForm);
        console.log(num2FromForm);
        console.log(chosenOperation);
        //call calculation functon with those values and isplay result
        answer = document.getElementById("answer").innerHTML = calculate(num1FromForm,num2FromForm,chosenOperation);
        console.log(calculate(num1FromForm,num2FromForm,chosenOperation));
    });
}


function calculate(num1, num2, operation){
    let result=NaN;
    if (operation === "add"){
        result = parseFloat(num1)+parseFloat(num2);
    }
    if (operation === "subtract"){
        result = num1-num2;
    }
    if (operation === "divide"){
        result = num1/num2;
    }
    if (operation === "multiply"){
        result = num1*num2;
    }
    return result;
}

