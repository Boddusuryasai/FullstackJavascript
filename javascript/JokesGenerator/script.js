const jokes =
 ["What did the mountain climber name his son? Cliff.",
 "Whenever the cashier at the grocery store asks my dad if he would like the milk in a bag he replies, ‘No, just leave it in the carton!’",
 "What did the dog say to the two trees? Bark bark.",
 "What's red and bad for your teeth? A Brick.",
 "What do you call a fish with no eyes? A fsh.","Why was the math book sad? Because it had too many problems.",  "Why couldn't the bicycle stand up by itself? Because it was two-tired.",  "Why was the computer cold? Because it left its Windows open.",  "Why was the tomato blushing? Because it saw the salad dressing.",  "Why did the scarecrow win an award? Because he was outstanding in his field.",  "Why did the cookie go to the doctor? Because it was feeling crumbly.",  "Why was the cat sitting on the computer? It wanted to keep an eye on the mouse.",  "Why did the belt go to jail? Because it was holding up a pair of pants.",  "Why did the bread go to the party? Because it was a slice.",  "Why did the elephant paint himself different colors? He wanted to hide in the rainbow.",  "Why did the chicken go to outer space? To see the cosmos.",  "Why did the tomato turn red? Because it saw the salad dressing.",  "Why did the banana go to the doctor? Because it was peeling poorly.",  "Why did the dog sit in the shade? Because it didn't want to be a hot dog.",  "Why did the frog call his insurance company? He had a jump in his car.",  "Why did the mushroom go to the party? Because he was a fungi.",  "Why did the bicycle fall over? Because it was two-tired.",  "Why did the cow go to outer space? To see the moooon.",  "Why did the sheep go to the barber? For a haircut.",  "Why did the melon go to the doctor? Because it was feeling cantaloupe.",  "Why did the dinosaur go to the party? Because he was a reptile.",  "Why did the frog call his lawyer? He needed representation.",  "Why did the penguin go to the bar? For a cool drink.",  "Why did the jellybean go to the doctor? Because it was feeling jelly.",  "Why did the snake go to the party? To slither on the dance floor.",  "Why did the cookie go to therapy? Because it was feeling crumbly.",  "Why did the astronaut go to the bar? For a space-tini.",  "Why did the cheese go to the party? Because it was feeling gouda.",  "Why did the giraffe go to the bar? For a long neck beer.",  "Why did the duck go to the bar? For a quacktail."]

 function generateRandomJoke(){
        return jokes[Math.floor(Math.random()*35)]
    
 }
let btn = document.getElementById("jokeBtn")
btn.onclick = function(){
    let joke = generateRandomJoke()
    document.getElementById("joke").innerHTML= joke
}
 