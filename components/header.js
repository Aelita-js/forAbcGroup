// const renderHeader = (currentPage) => {
//     const app = document.getElementById('app');
//     const header = document.createElement('header');
//     header.classList.add('header');

//     const headerLogo = document.createElement('img');
//     headerLogo.src = '../assets/logo.png';
//     headerLogo.alt = 'logo';
//     headerLogo.classList.add('headerLogo');

//     const headerTitle = document.createElement('div');
//     headerTitle.classList.add('headerTitle');

//     if (currentPage === 'test') {
//         headerTitle.textContent = "Тест на определение IQ";
//     } else if (currentPage === 'results') {
//         headerTitle.textContent = "Готово!"
//     }


//     // ! Append elements
//     header.appendChild(headerLogo);
//     app.appendChild(header);

// };

// renderHeader('home');