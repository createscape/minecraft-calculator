let itemList = [
    ["Hay Bale", 1, "Wheat", 9],
    ["Wooden Planks", 4, "Logs", 1],
    ["Cake", 1, "Wheat", 3, "Milk Bucket", 3, "Sugar", 2, "Eggs", 1],
    ["Observer", 1, "Cobblestone", 6, "Redstone Dust", 2, "Nether Quartz", 1],
    ["Soul Campfire", 1, "Sticks", 3, "Soul Sand", 1, "Logs", 3]
  ];
  
  //Get List of Item names
  let itemNamesList = itemList.map(function (x) {
    return x[0];
  });
  
  //Get First Select Item
  let select = document.getElementById("item-names-1");
  
  //Return List of Item Names as Select Options
  for (var i = 0; i < itemNamesList.length; i++) {
    select.options.add(new Option(itemNamesList[i], itemNamesList[i]));
  }
  
  let rowCount = 1; //Because we have one row already
  let countArray = [1];
  let id = "";
  
  //Create a new row every time the new row button is clicked
  
  function newRow() {
    rowCount++; //Increment for each button press
  
    let start = "<form>";
    //Add the html for each row of input fields
    let newRow =
      '<div class="is-12 column"><div class="field has-addons"> <div class="control has-icons-left">  <select name="item" id="item-names-' +
      rowCount +
      '" class="item-names input"></select>  <span class="icon is-medium is-left">  <i class="icon"></i></span>  </div>  <div class="control"> <input type="number" class="input number" name="number" id="item-number-' +
      rowCount +
      '" min=0 value=1></div></div>';
    let formColumns = document.getElementById("items"); //Get the Columns Div
  
    formColumns.insertAdjacentHTML("beforeend", newRow); //Insert the new rows before the end of the Columns div
  
    id = "item-names-" + rowCount; //Create the new Id for each row
  
    let select = document.getElementById(id); // Get the element with that id
    // Add the list of minecraft items to the elemnent with the ID
    for (var i = 0; i < itemNamesList.length; i++) {
      select.options.add(new Option(itemNamesList[i], itemNamesList[i]));
    }
  
    countArray.push(rowCount); // Add the row numbers to an array that we can loop through
  }
  
  let outputField = document.getElementById("output"); //get the output textarea;
  let buildListArr = [];
  
  let answerHuman = "";
  let answerOneHuman = "";
  let answerTwoHuman = "";
  let answerThreeHuman = "";
  let answerFourHuman = "";
  
  
  function displayBuildList() {
    
    let buildListArr = [];
    buildListArr = []; //rest the array every time the button is pressed.
  
    for (i = 0; i < countArray.length; i++) {
      //~~~ rowCount is only showing last row's number
  
      //get the number of the current increment
      id = "item-names-" + countArray[i];
  
      let itemNumber = "item-number-" + countArray[i];
  
      //Getting the correct sub array for the item
      let itemValue = document.getElementById(id).value; // Get Item Selected in Drop Down
      let itemCount = document.getElementById(itemNumber).value; // Get Number from input number field

      //If one of the fields is empty, skip to the next one
      if (itemCount == "" || itemCount ==0 ) {
          continue;
     }
      let itemIndex = itemList.findIndex((arr) => arr.includes(itemValue)); // Get index of itemlet itemArr = itemList[itemIndex];
      let itemArr = itemList[itemIndex];
  
      //Minecraft Math
  
      // Has four ingredients
      if (itemArr[8]) {
         let itemOneRatio = itemArr[3] / itemArr[1];
         let answerDecimalOne = itemOneRatio * itemCount;
         let answerOneMath = Math.ceil(answerDecimalOne);
         answerOneHuman = answerOneMath + " " + itemArr[2];
         
         let itemTwoRatio = itemArr[5] / itemArr[1];
         let answerDecimalTwo = itemTwoRatio * itemCount;
         let answerTwoMath = Math.ceil(answerDecimalTwo);
         answerTwoHuman = answerTwoMath + " " + itemArr[4];
   
         let itemThreeRatio = itemArr[7] / itemArr[1];
         let answerDecimalThree = itemThreeRatio * itemCount;
         let answerThreeMath = Math.ceil(answerDecimalThree);
         answerThreeHuman = answerThreeMath + " " + itemArr[6];
  
         let itemFourRatio = itemArr[9] / itemArr[1];
         let answerDecimalFour = itemFourRatio * itemCount;
         let answerFourMath = Math.ceil(answerDecimalFour);
         answerFourHuman = answerFourMath + " " + itemArr[8];
        
        
        buildListArr.push(
          answerOneHuman,
          answerTwoHuman,
          answerThreeHuman,
          answerFourHuman
        );
        
        
      }
  
      // Has three ingredients
      if (itemArr[6] && !itemArr[8]) {
        let itemOneRatio = itemArr[3] / itemArr[1];
        let answerDecimalOne = itemOneRatio * itemCount;
        let answerOneMath = Math.ceil(answerDecimalOne);
        answerOneHuman = answerOneMath + " " + itemArr[2];
  
        let itemTwoRatio = itemArr[5] / itemArr[1];
        let answerDecimalTwo = itemTwoRatio * itemCount;
        let answerTwoMath = Math.ceil(answerDecimalTwo);
        answerTwoHuman = answerTwoMath + " " + itemArr[4];
  
        let itemThreeRatio = itemArr[7] / itemArr[1];
        let answerDecimalThree = itemThreeRatio * itemCount;
        let answerThreeMath = Math.ceil(answerDecimalThree);
        answerThreeHuman = answerThreeMath + " " + itemArr[6];
        
        buildListArr.push(answerOneHuman, answerTwoHuman, answerThreeHuman);
      }
  
      // Has two ingredients
      if (itemArr[4] && !itemArr[6]) {
        let itemOneRatio = itemArr[3] / itemArr[1];
        let answerDecimalOne = itemOneRatio * itemCount;
        let answerOneMath = Math.ceil(answerDecimalOne);
        answerOneHuman = answerOneMath + " " + itemArr[2];
  
        let itemTwoRatio = itemArr[5] / itemArr[1];
        let answerDecimalTwo = itemTwoRatio * itemCount;
        let answerTwoMath = Math.ceil(answerDecimalTwo);
        answerTwoHuman = answerTwoMath + " " + itemArr[4];
  
        buildListArr.push(answerOneHuman, answerTwoHuman);
       
      }
  
      if (!itemArr[4]) {
        let ratio = itemArr[3] / itemArr[1]; //convert to decimal
        let answerDecimal = ratio * itemCount; //multiply by user submitted number of items
        let answerMath = Math.ceil(answerDecimal); //round up
        answerHuman = answerMath + " " + itemArr[2];
        buildListArr.push(answerHuman);
      }
    
      
    }
  
    outputField.value = buildListArr.join("\n"); //put the answer in the textarea with line breaks
  }
  
  //Clear list button resets the textarea
  function clearBuildList() {
    outputField.value = "";
  }
  
  //To Do List:
  // Turn on git in case you break something
  // 1. Add the items together when same item needed for different recipes
   // Add data for different recipes
  // Design elements
  // Add icons

  //Feature List
  // Add option to calculate by shulker boxes and double chests
 
  

  // Make a note of where to get icon images from:  https://mc.nerothe.com/