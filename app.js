const QUOTEBANK = [
    {
        quote:"He who conquers others is strong; He who conquers himself is mighty.",
        author:"Thomas Fuller"
    },
    {
        quote:"If you have one true friend, you have more than your share.",
        author:"Laozi"
    },
    {
        quote:"If you smile when no one else is around, you really mean it.",
        author:"Andy Rooney"
    }
    
]
window.onload = init;
function init() {
  generatedQuote()
  setRandomColor()
}
function generatedQuote() {
    let quotesSize = QUOTEBANK.length;
    let randomIndx = Math.floor(Math.random() * quotesSize);
    let randomQuoteData= QUOTEBANK[randomIndx];
    let twitterLink = "https://twitter.com/intent/tweet";
    let tumblrLink = "https://www.tumblr.com/";
    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("tumblr-quote").href = tumblrLink;
    document.getElementById("text").innerText = randomQuoteData.quote;
    document.getElementById("author").innerText = randomQuoteData.author;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function setRandomColor() {
    const color = getRandomColor();
    const body = document.querySelector("body");
    const quoteText = document.querySelector("#quote-box .quote-text");
    const quoteAuthor = document.querySelector(".quote-author");
    const buttons = document.querySelectorAll("a, button");
    
    body.style.background = color;
    quoteText.style.color = color;
    quoteAuthor.style.color = color;
    buttons.forEach(el => {
        el.style.background = color
    });
  }