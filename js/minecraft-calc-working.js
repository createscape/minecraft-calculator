let itemList = [
    ["Hay Bale", 1, "Wheat", 9],
    ["Wooden Planks", 4, "Logs", 1],
    ["Cake", 1, "Wheat", 3, "Milk Bucket", 3, "Sugar", 2, "Eggs", 1],
    ["Observer", 1, "Cobblestone", 6, "Redstone Dust", 2, "Nether Quartz", 1],
    ["Torch", 4, "Coal", 1, "Sticks", 1]
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

    // Add the list of minecraft items to the element with the ID
    for (var i = 0; i < itemNamesList.length; i++) {
      select.options.add(new Option(itemNamesList[i], itemNamesList[i]));
    }
  
    countArray.push(rowCount); // Add the row numbers to an array that we can loop through
  }
  
  let outputField = document.getElementById("output"); //get the output textarea;
  
  
  //Set the main object array outside the function so we can use it later
  let additionArrayNew = [];

  function displayBuildList() {

    let additionArrayNew = []; //reset
  
    for (i = 0; i < countArray.length; i++) {
  
      //get the number of the current increment
      id = "item-names-" + countArray[i];
  
      let itemNumber = "item-number-" + countArray[i];
  
      //Getting the correct sub array for the item
      let itemValue = document.getElementById(id).value; // Get Item Selected in Drop Down
      let itemCount = document.getElementById(itemNumber).value; // Get Number from input number field
      let itemIndex = itemList.findIndex((arr) => arr.includes(itemValue)); // Get index of item
      let itemArr = itemList[itemIndex];
  
      //Minecraft Math
  
      // Has four ingredients
      if (itemArr[8]) {
         let itemOneRatio = itemArr[3] / itemArr[1];
         let answerDecimalOne = itemOneRatio * itemCount;
         let answerOneMath = Math.ceil(answerDecimalOne);
         
         let itemTwoRatio = itemArr[5] / itemArr[1];
         let answerDecimalTwo = itemTwoRatio * itemCount;
         let answerTwoMath = Math.ceil(answerDecimalTwo);
  
         let itemThreeRatio = itemArr[7] / itemArr[1];
         let answerDecimalThree = itemThreeRatio * itemCount;
         let answerThreeMath = Math.ceil(answerDecimalThree);
  
         let itemFourRatio = itemArr[9] / itemArr[1];
         let answerDecimalFour = itemFourRatio * itemCount;
         let answerFourMath = Math.ceil(answerDecimalFour);

        //Put the items into an array of objects
        let arr1 =  {
          itemName: itemArr[2],
          itemAmount: answerOneMath
          };
         let arr2 =   {
           itemName: itemArr[4],
           itemAmount: answerTwoMath 
          }
          let arr3 =   {
           itemName: itemArr[6],
           itemAmount: answerThreeMath 
          }
          let arr4 =   {
           itemName: itemArr[8],
           itemAmount: answerFourMath 
          }

        additionArrayNew.push(arr1, arr2, arr3, arr4);  
      }
  
      // Has three ingredients
      if (itemArr[6] && !itemArr[8]) {
        let itemOneRatio = itemArr[3] / itemArr[1];
        let answerDecimalOne = itemOneRatio * itemCount;
        let answerOneMath = Math.ceil(answerDecimalOne);
     
        let itemTwoRatio = itemArr[5] / itemArr[1];
        let answerDecimalTwo = itemTwoRatio * itemCount;
        let answerTwoMath = Math.ceil(answerDecimalTwo);
      
        let itemThreeRatio = itemArr[7] / itemArr[1];
        let answerDecimalThree = itemThreeRatio * itemCount;
        let answerThreeMath = Math.ceil(answerDecimalThree); 
     
        //Put the items into an array of objects
        let arr1 =  {
          itemName: itemArr[2],
          itemAmount: answerOneMath
          };
         let arr2 =   {
           itemName: itemArr[4],
           itemAmount: answerTwoMath 
          }
          let arr3 =   {
           itemName: itemArr[6],
           itemAmount: answerThreeMath 
          }
        
        additionArrayNew.push(arr1, arr2, arr3);      
      }
  
      // Has two ingredients
      if (itemArr[4] && !itemArr[6]) {
        let itemOneRatio = itemArr[3] / itemArr[1];
        let answerDecimalOne = itemOneRatio * itemCount;
        let answerOneMath = Math.ceil(answerDecimalOne);
  
        let itemTwoRatio = itemArr[5] / itemArr[1];
        let answerDecimalTwo = itemTwoRatio * itemCount;
        let answerTwoMath = Math.ceil(answerDecimalTwo);
  
         //Put the items into an array of objects
        let arr1 =  {
          itemName: itemArr[2],
          itemAmount: answerOneMath
          };
         let arr2 =   {
           itemName: itemArr[4],
           itemAmount: answerTwoMath 
          }
   
        additionArrayNew.push(arr1, arr2);    
      }

      //Has one ingredient
      if (!itemArr[4]) {
        let ratio = itemArr[3] / itemArr[1]; //convert to decimal
        let answerDecimal = ratio * itemCount; //multiply by user submitted number of items
        let answerMath = Math.ceil(answerDecimal); //round up

        //Put the items into an array of objects  
          let arr1 =  {
          itemName: itemArr[2],
          itemAmount: answerMath
          };
      
         additionArrayNew.push(arr1);  
      }
   
  }// End For Each Field Loop
    

    //Sum the items in the object array
    let totals = additionArrayNew.reduce((acc, item) => {
    if (item.itemName in acc) {
      acc[item.itemName] += item.itemAmount;
    } else {
      acc[item.itemName] = item.itemAmount;
    }
    return acc;
  }, {});
      

    // Convert the totals object array into readable text
    var text = Object.entries(totals)
    .map(([name, value]) => `${name}: ${value}`)
    .join('\n');
    
    //output the text into the output field
    outputField.value = text;
  }
  

  //Clear list button resets the textarea
  function clearBuildList() {
    outputField.value = "";
  }
  
  //To Do List:
  
  // Add data for different recipes
  // Design elements
  // Add icons
  