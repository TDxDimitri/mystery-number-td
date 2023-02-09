  
var random = Math.floor(Math.random() * (10 - 1)) + 1; 
var test = document.querySelector(".test");
test.addEventListener("click",comparer);
let tries = 0;
function comparer(){
    var choix = document.querySelector("#choix").value;
    var res1 = document.querySelector(".res1");
    var res2 = document.querySelector(".res2");
    var res3 = document.querySelector(".res3");
    tries++;
    console.log(tries)

    if(choix < random && tries==1){
        res1.innerHTML = "<p> 1ère tentative : \n"+choix+"<br> c'est plus...</p><hr><br>";

    }
    else if(choix > random && tries == 1){
        res1.innerHTML = "<p> 1ère tentative :\n"+choix+"<br> c'est moins...</p><hr>";
    }
    else if(choix < random && tries==2){
        res2.innerHTML = "<p> 2ème tentative :\n"+choix+"<br> c'est plus...</p><hr>";

    }
    else if(choix > random && tries == 2){
        res2.innerHTML = "<p> 2ème tentative :\n"+choix+"<br> c'est moins...</p><hr>";
    }
    else if(choix == random){
        res3.innerHTML = "<h3>c'est gagné 🏆😀 <br><br> le numéro mystère était <br> bien le:     "+random+"</h3><br><a href='' type='button' class='btn btn-primary'>Rejouer</a>"
        document.querySelector("#choix").classList.add("d-none");
        document.querySelector("#devine").classList.add("d-none");
        document.querySelector("#t1").classList.add("d-none");
        document.querySelector("#t2").classList.add("d-none");
        document.querySelector("#he1").classList.add("d-none");
        document.querySelector("#he2").classList.add("d-none");
        document.querySelector("#retour").classList.remove("bg-dark");
        document.querySelector("#retour").classList.add("bg-success");

    }
    else if(choix != random && tries == 3){
        res3.innerHTML = "<h3>c'est perdu ...😕 <br><br> le numéro mystère était:     "+random+" </h3><br><a href='' type='button' class='btn btn-primary'>Rejouer</a>"
        document.querySelector("#choix").classList.add("d-none");
        document.querySelector("#devine").classList.add("d-none");
        document.querySelector("#t1").classList.add("d-none");
        document.querySelector("#t2").classList.add("d-none");
        document.querySelector("#he1").classList.add("d-none");
        document.querySelector("#he2").classList.add("d-none");
    }
    
}