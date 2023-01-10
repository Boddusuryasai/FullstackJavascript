let inputValue = document.getElementById("input")
console.log(inputValue);
let button = document.getElementById("checkButton");
let h3 = document.getElementById("h3")
console.log(button);
button.addEventListener("click" , function(){

      if( checkPolindrome(inputValue.value)){
        h3.innerText = 'Polindrome'
      }
      else{
        h3.innerText = " Not a Polindrome"
      }
})


function checkPolindrome(value){
  value=value.toLowerCase().replace(/[\W_]/g,"");
    let right = value.length -1;
    let left = 0;
    while(left < right){
       if(value[left]!==value[right]){
        return false;
       }
       left++;
       right--;
  }
  return true;
}