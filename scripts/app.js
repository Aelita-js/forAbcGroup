document.addEventListener('DOMContentLoaded', () => {
    const renderHomePage = (state, renderPage) => {
        const app = document.getElementById('app');
        app.innerHTML = `
            <h1>IQ Test</h1>
            <button id="startTest">Пройти тест</button>
        `;

        document.getElementById('startTest').addEventListener('click', () => {
            state.currentPage = 'test';
            state.currentQuestion = 0;
            state.answers = [];
            renderPage(state);
        });
    };

    const renderPage = (state) => {
        if (state.currentPage === 'home') {
            renderHomePage(state, renderPage);
        } else if (state.currentPage === 'test') {
            renderTestPage(state, renderPage);
        } else if (state.currentPage === 'loading') {
            renderLoadingPage();
            fetchApi(state, renderPage);
        } else if (state.currentPage === 'results') {
            renderResultsPage(state);
        }
    };

    renderPage(state);
});
