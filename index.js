  

    var randomvariable1 = Math.floor(Math.random()*6)+1;
    var randomimg = "dice" + randomvariable1 + ".png";
    var randomimgsource = "images/" + randomimg ;
    
     var img1 = document.querySelectorAll("img")[0];
     img1.setAttribute("src", randomimgsource);


    var random_variable2 = Math.floor(Math.random()*6+1);
    var random_img = "dice" + random_variable2 + ".png";
    var random_img_source = "images/"+ random_img;

     var img2 = document.querySelector(".dice .img2")
     img2.setAttribute("src",random_img_source)

    if ( randomvariable1 > random_variable2)
     {
    document.querySelector("h1").innerHTML = "player 1 wins";
     }
    else if ( randomvariable1 < random_variable2) 
     {
    document.querySelector("h1").innerHTML ="player 2 wins";
     } 
    else 
     {
    document.querySelector("h1").innerText ="draw do it again";
     }









// --------------------------------------------- didnt work --------------------------------------------------------
  
//   function diceimg()
//    {
//     var randomvariable1 = [];
//     randomvariable1.push('/images/dice1.png');
//     randomvariable1.push('/images/dice2.png');
//     randomvariable1.push('/images/dice3.png');
//     randomvariable1.push('/images/dice4.png');
//     randomvariable1.push('/images/dice5.png');
//     randomvariable1.push('/images/dice6.png');
//     var randomimg = diceimg[Math.floor(Math.random()*randomvariable1.length)];
//     return randomimg;
//   }
//   document.querySelector(".dice .img2").setAttribute("src",diceimg())
// -----------------------------------------------------------------------------------------------------------------
    // let mydice1 = new Image;
    // mydice1.src = '/images/dice1.png';
    // randomvariable1.push(mydice1);
// -----------------------------------------------------------------------------------------------------------------
    // {Image.src :"dice1.png"},{Image.src:"dice2.png"},{Image:"dice3.png"},{Image:"dice4.png"},{Image:"dice5.png"},{Image:"dice6.png"}
// -----------------------------------------------------------------------------------------------------------------
    // document.querySelector(".dice .img2").setAttribute("src","diceimg()")
// -----------------------------------------------------------------------------------------------------------------
// function DiceImg()
// {
//     var Dice = [];
//     Dice[0] = new Image1;
//     Image.src = "dice1.png";

    
//     var randomimg =  Math.floor(Math.random()*Dice.length);
//     return randomimg;
// }
// DiceImg.push();
// -----------------------------------------------------------------------------------------------------------------