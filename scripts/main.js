 /*code for name button on homepage*/
 function getName(){
    let name = prompt("What's your name?");
    alert("Hello " + name);
}

  /* larger number assignment*/
function largernumber(){
  let num1 = parseInt(prompt("Enter a number: "));
  let num2 =  parseInt(prompt("Enter another number: "));
  let output = ""
  if (num1 > num2){ 
    //if the first number inputed is larger 
    output = num1;
  } else if (num1 == num2){ 
    // if the numbers inputed are equal
    output = "The numbers you entered are equal!";
  } else if (num2 > num1){ 
    // if the second number inputed is larger
    output = num2;
  } else { 
    // if the numbers inputted are invalid
    output = "Invalid Output";
  }
  document.getElementById("largerNum").innerHTML = output;
}

 /*Button 2, Sign of product for 3 numbers button*/
 function signOfProduct(){
  let a = parseInt(prompt("Enter the first number"));
  let b = parseInt(prompt("Enter the second number"));
  let c = parseInt(prompt("Place the third number"));
  let totalProduct = a * b * c; //defines total product as the variables multiplied by eachother
  if (totalProduct < 0 ){ //if the product is less than 0 (negative) 
      output = "The sign of the product of your entered numbers is, -";  
  }
  if (totalProduct > 0 ){ //if the product is more than 0 (positive)
      output = "The sign of the product of your entered numbers is, +";  
    }
  document.getElementById("ProductSign").innerHTML = output;
}

 /*Button 3, three number sort least to greatest*/
 function threeNumberSort(){
  let num1 = parseInt(prompt("Enter the first number"));
  let num2 = parseInt(prompt("Enter the second number"));
  let num3 = parseInt(prompt("Enter the third number"));
  let array = [num1, num2, num3]; // creates a "list" containing all variables that were inputted
  array.sort(function(a, b){return a - b}); //sort function for array which shows least to greatest
    {
      output = "These numbers ordered from least to greatest is, " + array;
    }
  document.getElementById("leastToGreatest").innerHTML = output;
}
