const toggles = document.querySelectorAll('.faq-toggle')

const setupDiv = document.querySelector(".setup");
const punchlineDiv = document.querySelector(".punchline");
const newJokeBtn = document.getElementById("newJokeBtn");
// let punchline;

newJokeBtn.addEventListener('click', getJoke);

async function getJoke() {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    const joke = await jokePromise.json();
    console.log(joke)
    
    setupDiv.innerHTML = joke[0].setup;
    
    punchlineDiv.innerHTML= joke[0].punchline;
    
    // Clear the punchline div and remove the "bubble" class from the punchline div
    //punchlineDiv.innerHTML = "";

}

getJoke();


toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})