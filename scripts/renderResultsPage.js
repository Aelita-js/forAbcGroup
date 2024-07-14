const renderResultsPage = (state) => {
    const app = document.getElementById('app');
    if (state.apiData) {
        app.innerHTML = `
            <h1>Test Completed</h1>
            <p>Your answers: ${state.answers.join(', ')}</p>
            <div id="apiData">
                <p>Name: ${state.apiData.name}</p>
                <p>Height: ${state.apiData.height}</p>
                <p>Mass: ${state.apiData.mass}</p>
                <p>Hair Color: ${state.apiData.hair_color}</p>
                <p>Skin Color: ${state.apiData.skin_color}</p>
                <p>Eye Color: ${state.apiData.eye_color}</p>
                <p>Birth Year: ${state.apiData.birth_year}</p>
                <p>Gender: ${state.apiData.gender}</p>
            </div>
        `;
    } else {
        app.innerHTML = `
            <h1>Test Completed</h1>
            <p>Your answers: ${state.answers.join(', ')}</p>
            <p>Failed to fetch API data.</p>
        `;
    }
};
