let canvas = document.getElementById("canvas");
let button = document.getElementById("button");
 function randomColorGenerator(){
    const letters = '0123456789ABCDEF';
    let color = "#"
    for(let i =0; i<=5 ; i++){
        color+=letters[Math.floor(Math.random()*16)];
    } 
    canvas.style.backgroundColor = color;
 }
button.onclick = function(){
randomColorGenerator()
}
