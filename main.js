// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
var dateNumber = 0;
var dateString = "";
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let isPrime = true;
let isEven = true;
let intValue = 24;  //change this value

const displayValues = () => {
  intValue = document.getElementById("inputValue").value;
  displayDate()
  numberToString()
  stringToNumber()
  totalsum()
  whatIs()
  checkIsPrime()
  checkIsEven()
  CheckPrimeAndEvenTogether()

} 

const displayDate = () => {
  const currentDate = new Date()
  //console.log(new Date)
  document.getElementById("display-element1").innerHTML = currentDate;
  
}
 


// Write a JavaScript program to convert a number to a string.

const numberToString = () => {
  const d = new Date()
  dateNumber = d.getDay()
  // console.log(dateNumber)
  dateString = dateNumber.toString();
  console.log("The date number in string format is: " + dateString)
  document.getElementById("display-element2A").innerHTML = "The date number in string format is: " + dateString; 
  dateString = weekday[dateNumber];
  document.getElementById("display-element2B").innerHTML = "This integer as a weekday is: " + dateString; 
}



// Write a JavaScript program to convert a string to the number.


const stringToNumber = () => { 
  const str  = "3";
  const strToInt = parseInt(str);
  console.log(strToInt);
  document.getElementById("display-element3").innerHTML = str + " <-- this is a string and this is an int -> " + strToInt;

}




// Write a JavaScript program that takes in different check types and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  function whatIs(noHave) {
  if (typeof noHave === "boolean") {
    console.log(noHave + " is a boolean");
  }
  else if (noHave === null) {
    console.log("null is a null");
  }
  else if (typeof noHave === "undefined") {
    console.log("undefined is undefined");
  }
  else if (typeof noHave === "number") {
    if (isNaN(noHave)) {
      console.log(noHave + " is NaN");
    } else {
      console.log(noHave + " is a number");
    }
  }
  else if (typeof noHave === "string") {
    console.log(noHave + " is a string");
  }
  else {
    console.log(noHave + " is of unrecognized noHave type");
  }
}

whatIs(true);
whatIs(null);
whatIs(undefined);
whatIs(42);
whatIs(NaN);
whatIs("hello");
whatIs([1, 2, 3]);

  

  
// Write a JavaScript program that adds 2 numbers together.

const totalsum = () => {
const num1 = 954;
const num2 = 375;
const sum = num1 + num2;
console.log('the total is: '+ sum)
document.getElementById("display-element4").innerHTML = "The total sum is: " + sum;
}

// Write a JavaScript program that runs only when 2 things are true.

// Write a JavaScript program that runs when 1 of 2 things are true.

// Write a JavaScript program that runs when both things are not true.  






const checkIsPrime = () => {
  //check if the intValue is prime
  if(intValue > 1){
    for(let i = 2; i < intValue; i++) {
      if (intValue % i == 0) {
        isPrime = false;
        break;
      }
    }    
  }
}

const checkIsEven = () => {
  //we chekc if the intValue is even
  if(intValue % 2 != 0) {
    isEven = false;
  }
}

const CheckPrimeAndEvenTogether = () => {
  //and (2 things must equal)
  if(isPrime && isEven) {
    console.log(intValue + " is both a prime number and an even number! Wahoo!");
    document.getElementById("result").innerHTML = intValue + " is both a prime number and an even number! Wahoo!";
  }
  
  //or (1 of the 2 equals)
  else if(isPrime || isEven) {
    if(isPrime){
      console.log(intValue + " is a prime number but not an even number.");
      document.getElementById("result").innerHTML = intValue + " is a prime number but not an even number.";
    }
    else {
      console.log(intValue + " is a even number but not a prime number. Maybe next time!");
      document.getElementById("result").innerHTML = intValue + " is a even number but not a prime number. Maybe next time!";
    }
    
  }
  
  //both things are not true
  else{
    console.log(intValue + " is not a prime number and is not an even number either. Shucks!");
    document.getElementById("result").innerHTML = intValue + " is not a prime number and is not an even number either. Shucks!";
  }
  
}






// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
