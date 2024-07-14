const fetchApi = (state, renderPage) => {
    fetch('https://swapi.dev/api/people/1/')
        .then(response => response.json())
        .then(data => {
            state.apiData = data;
            state.currentPage = 'results';
            renderPage(state);
        })
        .catch(error => {
            console.error('Error fetching API data:', error);
            state.apiData = null;
            state.currentPage = 'results';
            renderPage(state);
        });
};
