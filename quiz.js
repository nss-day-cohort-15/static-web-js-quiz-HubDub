var inputHeight = document.getElementById("height");
var inputSymbol = document.getElementById("symbol");
// var treeOutput = document.getElementById("output");  //don't need this

// console.log(height);  //this shows the getElement is working
// console.log(symbol);  //this shows the getElement is working
// console.log(output);  //this shows the getElement in working
//got the enter events working.
height.addEventListener("keypress", function(event) {
  // console.log(event); //the keypress event works
  if (event.keyCode === 13) {
    checkFill (); //this does call the function
  }
})

symbol.addEventListener("keypress", function(event) {
  // console.log(event);  //the keypress event works
  if (event.keyCode === 13) {
    checkFill ();  //this does call the function
  }
})

//got the button event working
document.getElementById("clickThis").addEventListener("click", function(event) {
  // console.log(event);  //prove the event is firing
  // console.log(inputHeight.value);  //this worked
  // console.log(inputSymbol.value);  //this worked
  checkFill ();  //this works, it calls the function
})

//once it senses an enter or button event it runs a check to make sure both height and symbol have input.
function checkFill () {   //this works.
  var inputHeightValue = inputHeight.value;
  var inputSymbolValue = inputSymbol.value;
    if (inputHeightValue < 1) {
      window.alert("fill out the height");
    } else if (inputSymbolValue < 1) {
        window.alert("fill out the symbol");
    } else buildTree ();
}

//once it validates it calls the buildTree function to build the tree
function buildTree () {
  // console.log("let's build a tree");
  var inputHeightValue = inputHeight.value;
  var inputSymbolValue = inputSymbol.value;
  // var finalTreeOutput = treeOutput;
  // console.log(inputHeightValue); //this did display value
  // console.log(inputSymbolValue); //this did display value
  var inputHeightNumber = parseInt(inputHeightValue); //turn numinput into integer
  // console.log(inputHeightNumber); //this works, it's a number now

  for (i = 0; i < inputHeightNumber; i++) {
    // console.log(i);          //it does log the i
    // console.log(inputSymbolValue);          //it does log the symbol
    var countSpace = inputHeightNumber - 1; //create spaces b4 symbol
    // console.log(countSpace - i);       //test my math on the space
    var outputSpace =" ".repeat(countSpace - i);  // to create spaces before the symbol
    var outputSymbol =inputSymbolValue.repeat(1+(2*i)); //to create the tree shape
    console.log(outputSpace + outputSymbol);
    }
}

//4 tall
//sss*sss
//ss***ss
//s*****s
//*******
//
//I first tried to put the height and symbol data into an array by using the loop, unshift and pushing... the thought that I'd then console log it out backwards but I could not figure that out. then I heard about .repeat and decided to try a different tac. finding the right math to make the repeat work was challanging