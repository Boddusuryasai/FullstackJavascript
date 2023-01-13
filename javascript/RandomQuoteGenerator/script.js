

async function generateRandomQuote(){
    try {
        // Use the Fetch API to get a quote from the Ron Swanson Quotes API
        const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
        const data = await response.json();
        // Extract the quote from the returned data
        let quote = data[0];
        return quote;
    } catch (error) {
        return error;
    }
}

let btn = document.getElementById("quoteBtn")
async function render(){
    let quote = await generateRandomQuote();
    if(quote instanceof Error){
        document.getElementById("quote").innerHTML= quote.message;
    }else{
    document.getElementById("quote").innerHTML= quote;
    }
}
render()
btn.onclick =  function (){
render()
}



 