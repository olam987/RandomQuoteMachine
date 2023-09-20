window.onload = init;
function init() {
  generatedQuote()
  setRandomColor()
}
function generatedQuote() {
    const quoteElement = document.querySelector('#text');
    const authorElement = document.querySelector('#author');
    const link = `https://api.quotable.io/random`;
    fetch(link)
        .then(response => {
            let data = response.json();
            return data;
        })
        .then(data => {
            quoteElement.innerText = `${data.content}`;
            authorElement.innerText = `${data.author}`;
        })
        .catch(error => {
            console.log(error);
        });
    let twitterLink = "https://twitter.com/intent/tweet";
    let tumblrLink = "https://www.tumblr.com/";
    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("tumblr-quote").href = tumblrLink;
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
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