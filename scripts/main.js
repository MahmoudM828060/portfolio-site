 /*code for name button on homepage*/
 function getName(){
    let name = prompt("What's your name?");
    alert("Hello " + name);
  }

//ComingSoon9//
function comingsoon9() {
  output = "Assignment Ten Will Be Coming Soon."; //Button Undertext//
  document.getElementById("assignmenten").innerHTML = output;
}

//JavaScript Exercise 1//
function largerNumber(){ 
  //This Identifies The Larger Number From The Input Of Two Numbers//
  let num1 = parseInt(prompt("Enter the first number: "));
  let num2 =  parseInt(prompt("Enter the second number: "));
  let output = ""
  if (num1 > num2){ //If Num1 Is Greater Than Num2//
      output = "The larger number is, " + num1 + "."; //Output//
  } else if (num1 == num2){ //If Num1 Is Equal To Num2//
      output = "The numbers entered are equal."; //Button Undertext//
  } else if (num2 > num1){ //If Num2 Is Less Than Num1//
      output = "The larger number is, " + num2 + "."; //Output//
  } else {
      output = "Invalid Output."; //Button Undertext//
  }
  document.getElementById("largerNum").innerHTML = output;
}

//JavaScript Exercise 2//
function signOfProduct(){ 
  //This Identifies The Signs Of A Product From The Total Product//
  let a = parseInt(prompt("Place a number"));
  let b = parseInt(prompt("Place a number"));
  let c = parseInt(prompt("Place a number"));
  let totalProduct = a * b * c; //Finding The Total Product//
  if (totalProduct < 0 ){
    output = "The sign of the product is -."; //Button Undertext//
  }
  if (totalProduct > 0 ){
    output = "The sign of the product is +."; //Button Undertext//
  }
  document.getElementById("SignProduct").innerHTML = output;
}

//JavaScript Exercise 3//
function threeNumberSort() { 
  //This Sorts Three Number Inputs, And Outputs Three From Least To Greatest//
  let a = parseInt(prompt("Insert a number."));
  let b = parseInt(prompt("Insert a number."));
  let c = parseInt(prompt("Insert a number."));
  let array = [a, b, c];
  array.sort(function(a, b, c){return a - b});{ //Inverts Array To Be Least To Greatest//
      output = "The order from least to greatest is, " + array + "."; //Button Undertext//
  }
  document.getElementById("LeastGreat").innerHTML = output;
}

//JavaScript Exercise 4//
function SumOfThrees() { 
  //This Outputs The Sum Of The Multiples Of Threes Under 1000//
  let sum = 0;
  for (let i = 0; i < 1000; i++) { //Loop Of Multiples Of 3 Under 1000//
      ! (i % 3) && (sum += i)
  output = "The sum of three is, " + sum + "."; //Button Undertext//
  }
  document.getElementById("SumThree").innerHTML = output;
}

//JavaScript Exercise 5//
function WhileThrees(){ 
  //This Outputs The While Of Multiples Of Threes Under 1000//
  let sum = 0;
  let i = 0;
  while (i < 1000) { //Loop Of Multiples Of 3 Under 1000//
      sum += i;
      i = i + 3;
  output = "The while of three is, " + sum + "."; //Button Undertext//
  }
  document.getElementById("WhileThree").innerHTML = output;
}

//JavaScript Exercise 6//
function tenFour() { 
  //This Changes The Multiples Of 4,10 to FourTen//
  let multiples410 = 0;
   for(i = 1; i<101; i = i +1){
       if(i % 4 === 0 && i % 10 === 0){ //Multiples Of Ten And Four//
          multiples410 += (' TenFour.'); 
       }
       else if(i % 4 === 0){ //Multiple Of Four//
          multiples410 += (' Four.'); 
       }
       else if(i % 10 === 0){ //Multiple Of Ten//
          multiples410 += ('Ten.'); 
       }
       else(multiples410 += ' ' + i + ' '); //One To One Hundred//
   }
  alert (multiples410); //Alert Box//
}

//JavaScript Exercise 7//
function centuryFromYear() { 
  //This Calculates The Century Of A Year Using//
  let userYear = prompt ('What century is this year is in? Enter any year.', '2021');
  let century = 0;
  century = Math.floor(userYear/100+1); //Rounds To The Largest Interger//
  output = "The year you entered is in the century of " + century + "."; //Button Undertext//
  document.getElementById("Century").innerHTML = output;  
}

//JavaScript Exercise 8//
function thirdAngle() { 
  //Input Of Two Numbers To Find The Missing Number Adding To 180//
  alert ("Here you can calculate the missing angle of a triangle. You must put insert two angles of a triangle and the function will return the third angle, totaling 180°." );
  let a = parseInt(prompt("Enter an angle of a triangle")); //Input Of First Number//
  let b = parseInt(prompt("Enter another angle of a triangle ")); //Input Of Second Number//
  let totalSum = 0;
  if ((a + b) < 180){ //If Less Than 180//
  totalSum = 180 - (a + b); 
      output = "The angle that is missing is, " + totalSum + "."; //Button Undertext//
  }
  else if ((a + b) > 180){ //If Greater Than 180//
      output = "Invalid. Enter two angles of a triangle."; //Button Undertext//
  }
  document.getElementById("Triangle").innerHTML = output;  
}