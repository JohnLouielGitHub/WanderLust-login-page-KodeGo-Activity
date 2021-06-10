let a;
document.getElementById("coin-display-id").style.display = "none";

document.getElementById("try-btn").disabled = true;
document.getElementById("cup-1").addEventListener("click", function () {
  a = 1;
  document.getElementById("result").innerHTML = "You picked cup " + a;
});
document.getElementById("cup-2").addEventListener("click", function () {
  a = 2;
  document.getElementById("result").innerHTML = "You picked cup " + a;
});
document.getElementById("cup-3").addEventListener("click", function () {
  a = 3;
  document.getElementById("result").innerHTML = "You picked cup " + a;
});


//Reset
document.getElementById("try-btn").addEventListener("click", reset);

//Reset When win
document.getElementById("coin-btn").addEventListener("click", reset);

//Function Reset 
function reset() {
  document.getElementById("coin-display-id").style.display = "none";
  document.getElementById("cup-image-1").src = "../images/cup.png";
  document.getElementById("cup-image-2").src = "../images/cup.png";
  document.getElementById("cup-image-3").src = "../images/cup.png";
  document.getElementById("cup-1").checked = false;
  document.getElementById("cup-2").checked = false;
  document.getElementById("cup-3").checked = false;
  document.getElementById("cup-1").disabled = false;
  document.getElementById("cup-2").disabled = false;
  document.getElementById("cup-3").disabled = false;
  document.getElementById("result").innerHTML = "Please pick a cup!";
  document.getElementById("confirm-btn").disabled = false;
  document.getElementById("try-btn").disabled = true;
}




let coin = 100;

document.getElementById("confirm-btn").addEventListener("click", function () {
  if(a){
      //Random coin on cup
  coin = Math.floor((Math.random() * 3) + 1);
  document.getElementById("result").innerHTML = "You picked cup " + a + " and the coin is on cup " + coin;
    //win condition
    if(a === coin){
    document.getElementById("result").innerHTML = "The coin is on cup " + coin +" You win!";
    document.getElementById("confirm-btn").disabled = true;
    document.getElementById("try-btn").disabled = false;
    document.getElementById("coin-display-id").style.display = "block";
    }
    else{
    document.getElementById("result").innerHTML = "The coin is on cup " + coin +" You lose!";
    document.getElementById("confirm-btn").disabled = true;
    document.getElementById("try-btn").disabled = false;
    }
  }
  else{
    document.getElementById("result").innerHTML = "Pick a cup first";
  }

  //Cup Flip open and button disable when confirmed
  if (a === 1) {
    document.getElementById("cup-2").disabled = true;
    document.getElementById("cup-3").disabled = true;
    let image = document.getElementById("cup-image-1");
    if (image.src.match("/open-cup.png")) {
      image.src = "../images/cup.png";
    } else {
      image.src = "../images/open-cup.png";
    }
  } else if (a === 2) {
    document.getElementById("cup-1").disabled = true;
    document.getElementById("cup-3").disabled = true;
    let image = document.getElementById("cup-image-2");
    if (image.src.match("/open-cup.png")) {
      image.src = "../images/cup.png";
    } else {
      image.src = "../images/open-cup.png";
    }
  } else if(a === 3) {
    document.getElementById("cup-2").disabled = true;
    document.getElementById("cup-1").disabled = true;
    let image = document.getElementById("cup-image-3");
    if (image.src.match("/open-cup.png")) {
      image.src = "../images/cup.png";
    } else {
      image.src = "../images/open-cup.png";
    }
  }
});



