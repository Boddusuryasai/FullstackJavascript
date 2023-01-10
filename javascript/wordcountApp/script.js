let input =  document.getElementById("input");
let count = document.getElementById("count");


input.oninput =  function(){
       count.textContent=input.value.trim().length
}
