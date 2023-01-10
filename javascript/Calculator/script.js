const inputElement = document.form.textview
function insert(num){
  inputElement.value +=  num
  }
  
  function equals(){
   let result= eval(inputElement.value)
   inputElement.value = result
      
  }
  
  function clean(){
    inputElement.value = ""
  }
  
  function back(){
 
    inputElement.value = inputElement.value.substring(0, inputElement.value.length - 1);
  }