//global variables
var audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
var onOff="off";
//full 20 sequence array
var arr = [];
//sub array of arr based on the turn
var subArr = [];
//starts as subArr and elements shift off as turn goes on.
var turnArr = [];
var strictMode = "off";
var turnNum = "0";
var playerTurn = false;

function compPlay(){


  for(i=0; i<subArr.length; i++){

      var y = subArr[i];


      switch(y) {
      case "r":

      audio1.play();
      $("#red").css( "background-color","red" ).delay(500);


      $("#red").css("background-color", "#660000");

          break;
      case "b":

      audio2.play();
      $("#blue").css( "background-color","blue" ).delay(500);

      $("#blue").css("background-color", "#000066");

          break;
      case "y":

      audio3.play();
      $("#yellow").css( "background-color","yellow" ).delay(500);

      //wait for it
      $("#yellow").css("background-color", "#666600");

          break;
      case "g":

      audio4.play();
      $("#green").css( "background-color","green" ).delay(500);


      $("#green").css("background-color", "#006600");

       }

  }

}


function startButton(){
  if(onOff == "off"){return;}
    arr = [];
    //generate a random 20 sequence pattern
    for(i=0;i<20;i++){
      var x = Math.floor((Math.random() * 4) + 1);
      switch(x) {
      case 1:
          arr.push("r");
          break;
      case 2:
          arr.push("b");
          break;
      case 3:
          arr.push("y");
          break;
      case 4:
          arr.push("g");
       }
     }
    //initialize first turn
    turnNum=1;
    alert(arr);
    $("#full").text(arr);
    nextTurn();

}
//starts the next turn
function nextTurn(){
  $("#display").val("Turn: " + turnNum);
  if(turnNum<=20){
   subArr = arr.slice(0,turnNum);
   turnArr = subArr.slice();

   //play subArr
   compPlay();
   //wait for player to give sub array

   //if incorrect && not strict, play sub array
   //if correct increase turnNum,
   playerTurn = true;
 }
 if(turnNum == 21){
   $("#display").val("You win!");
 }
}
//red section clicked
function red(){
  //don't allow user to play until ready.
  //if(playerTurn == false){return;}
      //make sound light up
      $( "#red" )
        .mouseup(function() {
          $("#red").css( "background-color", "#660000" );
        })
        .mousedown(function() {
          audio1.play();
          $("#red").css( "background-color","red" );
        });


      if(turnArr[0] == "r"){
          //shift off 0 index
          turnArr.shift();
          if(turnArr.length == 0){
            turnNum++;
            nextTurn();
            return;
          }
      }
      //r was not next in the sequence
      else{
        $("#display").val("Oops!");
        //reset turnArr
        turnArr = subArr.slice();
        //play the sequence
        //alert("red() subArr: " + turnArr);
        $("#display").val("Turn: " + turnNum);
        return;
      }

}
//blue section clicked
function blue(){
  //don't allow user to play until ready.
  if(playerTurn == false){return;}
      //make sound
      audio2.play();
      //light up
      if(turnArr[0] == "b"){
          //shift off 0 index
          turnArr.shift();
          if(turnArr.length == 0){
            turnNum++;
            nextTurn();
            return;
          }
      }
      //b was not next in the sequence
      else{
        $("#display").val("Oops!");
        //reset turnArr
        turnArr = subArr.slice();
        //play the sequence
        alert("blue() demo the sequence: " + turnArr);
        $("#display").val("Turn: " + turnNum);
        return;
      }

}
//yelllow section clicked
function yellow(){
  //don't allow user to play until ready.
  if(playerTurn == false){return;}
      //make sound
     audio3.play();
      //light up
      if(turnArr[0] == "y"){
          //shift off 0 index
          turnArr.shift();
          if(turnArr.length == 0){
            turnNum++;
            nextTurn();
            return;
          }
      }
      //y was not next in the sequence
      else{
        $("#display").val("Oops!");
        //reset turnArr
        turnArr = subArr.slice();
        //play the sequence
        alert("yellow() demo sequence: " + turnArr);
                $("#display").val("Turn: " + turnNum);
        return;
      }

}
//green section clicked
function green(){
  //don't allow user to play until ready.
  if(playerTurn == false){return;}
      //make sound
      audio4.play();
      //light up
      if(turnArr[0] == "g"){
          //shift off 0 index
          turnArr.shift();
          if(turnArr.length == 0){
            turnNum++;
            nextTurn();
            return;
          }
      }
      //g was not next in the sequence
      else{
        $("#display").val("Oops!");
        //reset turnArr
        turnArr = subArr.slice();
        //play the sequence
        alert("green() play sequence: " + turnArr);
                $("#display").val("Turn: " + turnNum);
        return;
      }

}
//turn on machine
function on(){
  if (onOff === "off"){onOff = "on";}
  else{onOff = "off"; }
  //panels light up and make a sound
  if(onOff=="on"){
    //display
      $("#display").css("color", "red");
      $("#display").val("Hello!");
   //colors light up
      $("#red").css("background-color", "red");
      $("#blue").css("background-color", "blue");
      $("#yellow").css("background-color", "yellow");
      $("#green").css("background-color", "green");
    //color sequence to dark
      setTimeout(function(){
      //wait for it
      $("#red").css("background-color", "#660000");
    }, 700);
      setTimeout(function(){
      //wait for it
      $("#blue").css("background-color", "#000066");
    }, 750);
        setTimeout(function(){
        //wait for it
      $("#green").css("background-color", "#006600");
    }, 800);
      setTimeout(function(){
      //wait for it
      $("#yellow").css("background-color", "#666600");
    }, 850);
  }
  //turn off machine
  if(onOff=="off"){
      $("#display").css("color", "#333");
      $("#display").val("--");
      //reset variables
  }
}

$('#roundedOne').click(function(){
    if (this.checked && onOff == "on") {
        $("#display").val("Hard!")
    }
});
