// const API_URL = 'https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
// const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const API_URL = 'https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=35a8ac580261b38dcd9ce742f8203093&page='
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=35a8ac580261b38dcd9ce742f8203093&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
const pageText = document.getElementById("pageNumber");
const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");
let page = 1;

// Get initial movies
getMovies(API_URL+page)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    // pagination
    pageText.innerText = page;
    
    if(page === 1) {
        prevPage.disabled = true;
    } else {
        prevPage.disabled = false;
    }
    // if(movies.length < 20) {
    //     nextPage.disabled = true;
    // } else {
    //     nextPage.disabled = false;
    // }

    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        // const sub_image = 'https://cdn.pixabay.com/photo/2017/07/27/15/24/movie-2545676_960_720.jpg';

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path }" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})

// pagination
prevPage.addEventListener('click', () => {
    page--;
    getMovies(API_URL+page);
});
nextPage.addEventListener('click', () => {
    page++;
    getMovies(API_URL+page);
});
