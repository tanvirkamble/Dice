  

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











    
