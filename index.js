const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name")
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");



//random quote function 
const randomQuote = () => {
    quoteBtn.classList.add("Loading");
    quoteBtn.innerText = "Loading Quote...";
    //fetching random quotes/data from the API and parsing it into result
    fetch("http://api.quotable.io/random")
.then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");

    }); 
}

soundBtn.addEventListener("click", ()=> {
    //SpeechSynthesisUttrance is a web speech api that represents a speech request
   let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${ authorName.innerText}`); 
   speechSynthesis.speak(utterance); // speak method of speechSythesis speak the uttrance
})

copyBtn.addEventListener("click", ()=> {
   //copying the quote text on copyBtn click
    // writeText( property writes the specific text string to the system clipboard)
    navigator.clipboard.writeText(quoteText.innerText);
 })
 twitterBtn.addEventListener("click", ()=> {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank"); //opening a new twitter tab with passing quote
  })


quoteBtn.addEventListener("click", randomQuote);