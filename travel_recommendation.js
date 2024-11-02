document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const searchInput = document.getElementById('searchInput');
    const resultsDiv = document.getElementById('results');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        
        fetch('./travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                console.log('data from the API is', data);
                let results = [];

                if (query === 'beach' ) {
                    results = data.beaches;
                } else if (query === 'temple') {
                    results = data.temples;
                } else if (query === 'country' ) {
                    results = data.countries.map(country => country.cities).flat();
                }

                displayResults(results);
            })
            .catch(error => console.error('Error fetching data:', error));
    });

    clearButton.addEventListener('click', function() {
        document.getElementById('results').innerHTML = '';
              
    });

    function displayResults(results) {
        resultsDiv.innerHTML = '';

        if (results.length === 0) {
            resultsDiv.innerHTML = '<p>No results found</p>';
            return;
        }

        results.forEach(item => {
            const div = document.createElement('div');
            div.className = 'result-item';
            div.innerHTML = `
                <h3>${item.name}</h3>
                <img src="${item.imageUrl}" alt="${item.name}">
                <p>${item.description}</p>
            `;
            resultsDiv.appendChild(div);
        });
    }
});
