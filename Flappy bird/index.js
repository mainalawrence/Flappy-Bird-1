let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let scores=document.getElementById("scores")

let jumping = true;
let count=0

hole.addEventListener("animationiteration", () => {
    
    let random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";

})
setInterval(function () {
    let charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (!jumping) {
        character.style.top = (charactertop + 3) + "px";
    }
    const blocleft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    const holltop=parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    const ctop=-(500-charactertop);
    console.log(blocleft)

    if(charactertop>480 || blocleft<20 && blocleft>-50 && ctop<holltop ||ctop >holltop+130){
        alert("game Over."+"scores :"+count);
        character.style.top=100+"px"; 
        count=0;   
    }
    count++
}, 10)


function jump() {
    jumping = true;
    let jumpcounter = 0;
    let jumpinterval = setInterval(() => {
        let charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if(charactertop>6){
            character.style.top = (charactertop - 5) + "px";
        }
        if(jumpcounter>20){
            clearInterval(jumpinterval);
            jumping=false
        }

        jumpcounter++
    }, 10);

}