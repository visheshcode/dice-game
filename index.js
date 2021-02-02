var imageArray = new Array();
imageArray[0] = new Image();
imageArray[0].src = "images/dice1.png";

imageArray[1] = new Image();
imageArray[1].src = "images/dice2.png";

imageArray[2] = new Image();
imageArray[2].src = "images/dice3.png";

imageArray[3] = new Image();
imageArray[3].src = "images/dice4.png";

imageArray[4] = new Image();
imageArray[4].src = "images/dice5.png";

imageArray[5] = new Image();
imageArray[5].src = "images/dice6.png";


var r = Math.random();
r = Math.floor(r*6);

var s = Math.random();
s = Math.floor(s*6);



function image_change(){
  for (i = 0; i<imageArray.length;i++){

      document.getElementById("dice-1").src = imageArray[r].src;
      document.getElementById("dice-2").src = imageArray[s].src;

  }

}


if(r === s ){
  document.querySelector("h1").innerText = "😐DRAW🤷‍♂️"
}
else if(r>s){
  document.querySelector("h1").innerText = "🙌PLayer 1 wins🎉"
}
else{
  document.querySelector("h1").innerText = "🙌PLayer 2 wins🐱‍🏍"
}
document.onload = image_change();
