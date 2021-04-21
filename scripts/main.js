 /*code for name button on homepage*/
 function getName(){
    let name = prompt("What's your name?");
    alert("Hello " + name);
  }

  /* Assignment button 1, find larger number button*/
function largernumber(){
  let num1 = parseInt(prompt("Enter your first number: "));
  let num2 =  parseInt(prompt("Enter your second number: "));
  let output = ""
  if (num1 > num2){ //if first number is larger than second, output first
    output = num1;
  } else if (num1 == num2){ // otherwise, if they are equal, output this
    output = "The numbers you entered are equal!";
  } else if (num2 > num1){ // if num 2 is larger, output this
    output = num2;
  } else { // if there arent sufficient numbers for the function to work
    output = "Invalid Output";
  }
  document.getElementById("largerNum").innerHTML = output;
}