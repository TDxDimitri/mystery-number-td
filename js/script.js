  
var random = Math.floor(Math.random() * (10 - 1)) + 1; 
var test = document.querySelector(".test");
test.addEventListener("click",comparer);
console.log(random)
let tries = 0;
function comparer(){
    var choix = document.querySelector("#choix").value;
    var res1 = document.querySelector(".res1");
    var res2 = document.querySelector(".res2");
    var res3 = document.querySelector(".res3");
    tries++;
    console.log(tries)

    if(choix < random && tries==1){
        res1.innerHTML = "<p>c'est plus...</p>";

    }
    if(choix > random && tries == 1){
        res1.innerHTML = "<p>c'est moins...</p>";
    }
    if(choix < random && tries==2){
        res2.innerHTML = "<p>c'est plus...</p>";

    }
    if(choix > random && tries == 2){
        res2.innerHTML = "<p>c'est moins...</p>";
    }
    if(choix == random){
        res3.innerHTML = "<p>c'est gagné</p>";

    }
    if(choix != random && tries == 3){
        res3.innerHTML = "<p>c'est perdu</p>";
    }
    
}