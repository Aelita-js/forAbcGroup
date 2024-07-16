const fetchApi = (state, renderPage) => {     // ? функция получения данных из API
    fetch('https://swapi.dev/api/people/1/')  // GET запрос по ссылке API
        .then(response => response.json())    // прием и парсинг ответа через метод .json()
        .then(data => {
            state.apiData = data;             // передача в state данные (data) полученные из API
            state.currentPage = 'results';    // изменение статуса текущей страницы на статус страницы результата
            renderPage(state);                // вызов функции renderPage, передав (обновленный) state
        })
        .catch(error => {                     // обработка ошибок
            console.error('Error fetching API data:', error);  // выведение ошибки в консоль
            state.apiData = null;             // передача null в state 
            state.currentPage = 'results';    // изменение статуса текущей страницы на статус страницы результата
            renderPage(state);                // вызов функции renderPage, передав (обновленный) state
        });
};
