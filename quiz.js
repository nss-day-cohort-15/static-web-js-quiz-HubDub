var inputHeight = document.getElementById("height");
var inputSymbol = document.getElementById("symbol");

console.log(height);
console.log(symbol);

// var actualHeight = inputHeight.value;
// var actualSymbol = inputSymbol.value;


document.getElementById("clickThis").addEventListener("click", function(event) {
  console.log(event);  //prove the event is firing
  // console.log(actualHeight);
  // console.log(actualSymbol);
  console.log(inputHeight.value);
  console.log(inputSymbol.value);
})

// if inputHeight.value === 0 {
//   alert("Please fill out height of tree")
// }



// will need an event listener to know when the form button or enter button pushed

// will need an if statement to decide if both values have been filled out.




// button or enter?
// if statement for both values > 0 on the number or not null for symbol which is a string.
// then it loops to build the tree the correct number of layers putting the values in an array that has the number of symbols in each row. Then it console.logs the array out backwards.

// if we make the loop go the treeheight number of times and make it increase by 2 each loop, then it can fill an array from the top of the tree down. Then we just need to console.log the array from the last integer to the first making sure to give a break each time. But how to do account for the space?

//   we need an event listener that goes on the click and one that fires on the enter button. click and keypress (how get keypress to link to enter button?)




// formValidate () {
//    if document.forms.namedItem(height > 0) && document.forms.namedItem(symbo !== null) {
//     // the loop statement that creates the tree
//   } else {
    // return to blank form
//   }
// }
// keyup event maybe? the key code for enter button is 13