var buttons = document.querySelectorAll(".drum");

for(let i=0; i<buttons.length ;i++){
    document.querySelectorAll('.drum')[i].addEventListener("click",function(e){

        var innerHtml = this.innerHTML;
        makeSound(innerHtml);  
        buttonAnimation(innerHtml);
    });

    document.addEventListener("keydown",function(e){
       makeSound(e.key);
       buttonAnimation(e.key);
    })
    
}

function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        
        case "s":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        
        case "d":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(clickedKey){
    var currButton = document.querySelector("."+clickedKey);

    currButton.classList.add("pressed");

    setTimeout(function(){
        currButton.classList.remove("pressed");
    },200);
}