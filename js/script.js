const heading = document.querySelector("h2");
const setUp = document.querySelector(".setup");
const punchLine = document.querySelector(".punchline");
const url =  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";
const title = document.querySelector("title");

async function fetchJoke() {

    try {
        const response = await fetch(url);
        const joke = await response.json();

        displayJoke(joke);
      
    }
    catch(error) {
        heading.innerHTML = "Error has occurd.";
    }
}


fetchJoke();


function displayJoke(joke) {

    const jokes = "jokes";

    heading.innerHTML = `<h2>${joke.category} ${jokes}</h2>`;
    setUp.innerHTML = `<p>${joke.setup}</p>`;
    punchLine.innerHTML = `<p>${joke.delivery}</p>`;
    title.innerHTML = `${joke.setup}`;
}