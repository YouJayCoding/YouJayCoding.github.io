const API_URL = 'https://api.publicapis.org/entries'
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.publicapis.org/entries?category='

const mySection = document.querySelector(".apiContent")
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
getAPIs(API_URL)

async function getAPIs(url) {
    const res = await fetch(url)
    const data = await res.json()

    displayAPIs(data.entries)
}

function displayAPIs(items) {
    mySection.innerHTML = ''

    items.forEach((item) => {
        const { Link, API, Category, Description, Auth, HTTPS } = item

        const apiEl = document.createElement('div')
        // movieEl.classList.add('movie')

        apiEl.innerHTML = `
        <div class="my-api">
        <div class="my-api-name">
            <a href="${Link}" target="_blank">${API} (${Category})</a>
        </div>
        <div class="my-api-description">${Description}</div>
        <div class="my-api-auth">Auth: ${Auth ? Auth : 'None'}</div>
        <div class="my-api-https">HTTPS? ${HTTPS}</div>
    </div>
        `
        mySection.appendChild(apiEl)
    })
}

// function getClassByRate(vote) {
//     if(vote >= 8) {
//         return 'green'
//     } else if(vote >= 5) {
//         return 'orange'
//     } else {
//         return 'red'
//     }
// }

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getAPIs(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})