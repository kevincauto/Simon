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
var strictMode = false;
var turnNum = "0";
var playerTurn = false;

function reset(){
  //full 20 sequence array
  arr = [];
  //sub array of arr based on the turn
  subArr = [];
  //starts as subArr and elements shift off as turn goes on.
  turnArr = [];
  turnNum = "0";
  playerTurn = false;
}

function compPlay(message){
if(message == "oops"){
$("#display").val("Oops!");
}
   var time = 500;

  for(i=0; i<subArr.length; i++){

      var y = subArr[i];
      time += 700;

      switch(y) {
      case "r":
      setTimeout(function(){
      audio1.play();
      $("#red").css( "background-color","red" );
      }, time);
      setTimeout(function(){
      $("#red").css("background-color", "#660000");
    }, time+400);
          break;
      case "b":
      setTimeout(function(){
      audio2.play();
      $("#blue").css( "background-color","blue" );
      }, time);
      setTimeout(function(){
      $("#blue").css("background-color", "#000066");
    }, time+400);
          break;
      case "y":
      setTimeout(function(){
      audio3.play();
      $("#yellow").css( "background-color","yellow" );
      }, time);
      setTimeout(function(){
      $("#yellow").css("background-color", "#666600");
    }, time+400);
          break;
      case "g":
      setTimeout(function(){
      audio4.play();
      $("#green").css( "background-color","#00ff00" );
      }, time);
      setTimeout(function(){
      $("#green").css("background-color", "#006600");
    }, time+400);
       }



  }
  setTimeout(function(){
    playerTurn = true;
    $("#display").val("Turn: " + turnNum);
    //This is meant to deal with case where user turns off while
    //computer is performing the sequence.
    if(onOff == "off"){$("#display").val("--"); playerTurn = false;}
  }, (subArr.length)*700)

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
   compPlay("nope");
   //wait for player to give sub array

   //if incorrect && not strict, play sub array
   //if correct increase turnNum,
   playerTurn = false;
 }
 if(turnNum == 21){
   $("#display").val("You win!");
 }
}

//red section clicked
function red(){
  //don't allow user to play until ready.
  if(playerTurn == false){return;}
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
        if(strictMode == true){
        $("#display").val("Game Over");
        reset();
        return;
        }
        playerTurn = false;
        $("#display").val("Oops!");
        //reset turnArr
        turnArr = subArr.slice();
        //play the sequence

        compPlay("oops")
        //$("#display").val("Turn: " + turnNum);
        return;
      }

}
//blue section clicked
function blue(){
  //don't allow user to play until ready.
  if(playerTurn == false){return;}
      //make sound
      //light up
      $( "#blue" )
        .mouseup(function() {
          $("#blue").css( "background-color", "#000066" );
        })
        .mousedown(function() {
          audio2.play();
          $("#blue").css( "background-color","blue" );
        });

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
        if(strictMode == true){
        $("#display").val("Game Over");
        reset();
        return;
        }
        playerTurn = false;
        $("#display").val("Oops!");
        //reset turnArr
        turnArr = subArr.slice();
        //play the sequence
        compPlay("oops");
        //$("#display").val("Turn: " + turnNum);
        return;
      }

}
//yelllow section clicked
function yellow(){
  //don't allow user to play until ready.
  if(playerTurn == false){return;}
      //make sound
      $( "#yellow" )
        .mouseup(function() {
          $("#yellow").css( "background-color", "#666600" );
        })
        .mousedown(function() {
          audio3.play();
          $("#yellow").css( "background-color","yellow" );
        });
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
        if(strictMode == true){
        $("#display").val("Game Over");
        reset();
        return;
        }
        playerTurn = false;
        $("#display").val("Oops!");
        //reset turnArr
        turnArr = subArr.slice();
        //play the sequence
        compPlay("oops");
        return;
      }

}
//green section clicked
function green(){
  //don't allow user to play until ready.
  if(playerTurn == false){return;}
      //make sound and light up
      $( "#green" )
        .mouseup(function() {
          $("#green").css( "background-color", "#006600" );
        })
        .mousedown(function() {
          audio4.play();
          $("#green").css( "background-color","#00ff00" );
        });

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
        if(strictMode == true){
        $("#display").val("Game Over");
        //reset game!
        reset();
        return;
        }
        playerTurn = false;
        $("#display").val("Oops!");
        //reset turnArr
        turnArr = subArr.slice();
        //play the sequence
        compPlay("oops");
        return;
      }
}
//turn on machine
function on(){
  if (onOff === "off"){onOff = "on";}
  else{onOff = "off"; }
  //panels light up and make a sound
  if(onOff=="on"){
      $("#start").css("color","#00ff00");

      $("#slideTwo").removeAttr("disabled");
    //display
      $("#display").css("color", "red");
      $("#display").val("Hello!");
   //colors light up
      $("#red").css("background-color", "red");
      $("#blue").css("background-color", "blue");
      $("#yellow").css("background-color", "yellow");
      $("#green").css("background-color", "#00ff00");
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
      reset();
      strictMode = false;
      $("#hard").css("color","#000000");
      $("#start").css("color","#000000");
      $("#display").css("color", "#333");
      $("#display").val("--");
      //reset variables
      $("#slideTwo").attr("disabled", true);
      $('#slideTwo').attr('checked', false); // Unchecks it

  }
}

$("#hard").click(function(){
    if (strictMode == false && onOff == "on") {
        $("#display").val("Hard!");
        $("#hard").css("color", "red");
        strictMode = true;
    }
    else if(strictMode == true && onOff == "on"){
      $("#display").val("Easy!")
      $("#hard").css("color", "#000");
      strictMode = false;

    }
});
$( "#red" )
  .mouseup(function() {
    $("#red").css( "background-color", "#660000" );
  })
  .mousedown(function() {
    if(onOff == "on" && playerTurn == true){
      audio1.play();
       $("#red").css( "background-color","red" );
    }
  });
  $( "#blue" )
    .mouseup(function() {
      $("#blue").css( "background-color", "#000066" );
    })
    .mousedown(function() {
    if(onOff == "on" && playerTurn == true){
     audio2.play();
      $("#blue").css( "background-color","blue" );
    }
    });
    $( "#yellow" )
      .mouseup(function() {
        $("#yellow").css( "background-color", "#666600" );
      })
      .mousedown(function() {
            if(onOff == "on"  && playerTurn == true){
        audio3.play();
        $("#yellow").css( "background-color","yellow" );
      }
      });
      $( "#green" )
        .mouseup(function() {
          $("#green").css( "background-color", "#006600" );
        })
        .mousedown(function() {
              if(onOff == "on" && playerTurn == true){
          audio4.play();
          $("#green").css( "background-color","#00ff00" );
        }
        });
