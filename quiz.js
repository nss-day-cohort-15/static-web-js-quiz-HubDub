var inputHeight = document.getElementById("height");
var inputSymbol = document.getElementById("symbol");
var treeOutput = document.getElementById("output");

console.log(height);  //this shows the getElement is working
console.log(symbol);  //this shows the getElement is working

//got the enter buttons working.
height.addEventListener("keypress", function(event) {
  console.log(event); //the keypress event works
  if (event.keyCode === 13) {
    checkFill ();
    // buildTree ();  //this does call the function

  }
})

symbol.addEventListener("keypress", function(event) {
  console.log(event);  //the keypress event works
  if (event.keyCode === 13) {
    checkFill ();  //this does call the function
  }
})

//got the button working
document.getElementById("clickThis").addEventListener("click", function(event) {
  // console.log(event);  //prove the event is firing
  // console.log(inputHeight.value);  //this worked
  // console.log(inputSymbol.value);  //this worked
  checkFill ();  //this works, it calls the function
})

function checkFill () {   //this checks to make sure both height and symbol have input. it works.
  var inputHeightValue = inputHeight.value;
  var inputSymbolValue = inputSymbol.value;
    if (inputHeightValue < 1) {
      window.alert("fill out the height");
    } else if (inputSymbolValue < 1) {
        window.alert("fill out the symbol");
    } else buildTree ();
}
function buildTree () {
  console.log("let's build a tree");
  var inputHeightValue = inputHeight.value;
  var inputSymbolValue = inputSymbol.value;
  console.log(inputHeightValue); //this did display value
  console.log(inputSymbolValue); //this did display value


}

// if inputHeight.value === 0 {
//   alert("Please fill out height of tree")
// }



// will need an event listener to know when the form button or enter button pushed

// will need an if statement to decide if both values have been filled out.




// button or enter?
// if statement for both values > 0 on the number or not null for symbol which is a string.
// then it loops to build the tree the correct number of layers putting the values in an array that has the number of symbols in each row. Then it console.logs the array out backwards.

// if we make the loop go the treeheight number of times and make it increase by 2 each loop, then it can fill an array from the top of the tree down. Then we just need to console.log the array from the last integer to the first making sure to give a break each time. But how to do account for the space?






// formValidate () {
//    if document.forms.namedItem(height > 0) && document.forms.namedItem(symbo !== null) {
//     // the loop statement that creates the tree
//   } else {
    // return to blank form
//   }
// }
// keyup event maybe? the key code for enter button is 13