const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
// const URL = 'https://api.chucknorris.io/jokes/random';

const URL = 'https://api.chucknorris.io/jokes/random?category=food';

btn.addEventListener('click', () => {
  fetch(URL)
    .then((data) => data.json())
    .then((response) => displayData(response))
    .catch((err) => console.log(err));
    img.classList.add('shake-img');

});

function displayData({ value: joke }) {
 // img.classList.add('shake-img');
  // const { value: joke } = data;
  content.textContent = joke;
  img.classList.remove('shake-img');
}
