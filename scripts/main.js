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