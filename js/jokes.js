const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10/";
const jokesResults = document.querySelector(".results");
const title = document.querySelector("title");
const errorMessage = document.querySelector("h1");

async function getJokes() {

    try {
        const response = await fetch(url);
        const results = await response.json();
        
        const jokes = results.jokes;
        
        jokesResults.innerHTML = "";
        
        title.innerHTML = "";
        
        
        for(let i = 0; i < jokes.length; i++ ) {
            if(i === 5) {
                break;
            }
        
        
        jokesResults.innerHTML += `<div class="joke-detail">
                                   <h4 class="type">${jokes[i].category}</h4>
                                   <div class="setup">${jokes[i].setup}</div>
                                   <div class="punchline">${jokes[i].delivery}</div>
                                   </div>`;
        }
        
        title.innerHTML += `${jokes[2].setup}`;
    
    } catch (error) {
        errorMessage.innerHTML = "Error occurd. Try again!";
    }
}

getJokes();



