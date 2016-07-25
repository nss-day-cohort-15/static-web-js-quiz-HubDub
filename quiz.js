var inputHeight = document.getElementById("height");
var inputSymbol = document.getElementById("symbol");
var treeOutput = document.getElementById("output");

console.log(height);  //this shows the getElement is working
console.log(symbol);  //this shows the getElement is working
console.log(output);  //this shows the getElement in working
//got the enter events working.
height.addEventListener("keypress", function(event) {
  console.log(event); //the keypress event works
  if (event.keyCode === 13) {
    checkFill (); //this does call the function
  }
})

symbol.addEventListener("keypress", function(event) {
  console.log(event);  //the keypress event works
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
  console.log("let's build a tree");
  var inputHeightValue = inputHeight.value;
  var inputSymbolValue = inputSymbol.value;
  var finalTreeOutput = treeOutput;
  console.log(inputHeightValue); //this did display value
  console.log(inputSymbolValue); //this did display value
  var inputHeightNumber = parseInt(inputHeightValue); //turn numinput into integer
  console.log(inputHeightNumber); //this works, it's a number now
  var tree = [];
  // console.log(tree);  //it shows the blank array
  for (i = 0; i < inputHeightNumber; i++) {
    console.log(i);
    newTree = tree.push(inputSymbolValue);
    // tree = tree += inputSymbolValue;
    // tree.push(inputSymbolValue);
    }
    treeOutput.innerHTML = "<p> " + newTree + " </p>";
}
tree2 (
  0:
  )
//haven't figured it out yet. not accounting for the spaces yet.

// then it loops to build the tree the correct number of layers putting the values in an array that has the number of symbols in each row. Then it console.logs the array out backwards.

// if we make the loop go the treeheight number of times and make it increase by 2 each loop, then it can fill an array from the top of the tree down. Then we just need to console.log the array from the last integer to the first making sure to give a break each time. But how to do account for the space?

