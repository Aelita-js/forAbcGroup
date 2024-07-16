document.addEventListener('DOMContentLoaded', () => {
    const renderHomePage = (state, renderPage) => {
        const app = document.getElementById('app');
        app.innerHTML = `
            <div id="homePageContent">
                <header id="header">${header}</header>
                <section id="intro">${intro}</section>
                <section id="about">${about}</section>
                <section id="info">${info}</section>
                <section id="footer">${footer}</section>
            </div>
        `;

        const startTest = document.getElementsByClassName('startTest');

        for (i = 0; i < startTest.length; i++) {
            startTest[i].addEventListener('click', () => {
                state.currentPage = 'test';
                state.currentQuestion = 0;
                state.answers = [];
                renderPage(state);
            });
        }
    };


    // function toggleMenu() {
    //     const menu = document.getElementById('burgerMenu');
    //     menu.classList.toggle('active');
    // }
    // document.querySelector('#openMenuButton').addEventListener('click', toggleMenu);


    const header = `
        <img id="openMenuButton" class="headerMenu" src="../assets/menu.svg">
        <img class="headerLogo" src="../assets/logo.png">
        <h4 class="headerTitle">Тест на определение IQ</h4>

        <nav class="burgerMenu" id="burgerMenu">
            <button class="closeButton"><img src="../assets/closeIcon.svg"></button>
            <ul>
                <li><a href="#header" class="active">Главная</a></li>
                <li><a href="#info">Информация о тесте</a></li>
                <li><a class="startTest">Пройти тест</a></li>
            </ul>
        </nav>
    `

    const intro = `
        <div class="introTitle">
            <h4>Пройдите точный и быстрый</h4>
            <h1>Тест на определение IQ</h1>
        </div>
        <div class="introImage">
            <img src="../assets/introBrainImg.png">
        </div>
        <button class="startTest introButton">Пройти Тест</button>
        <div class="introText">
            <p>
                И получите рекомендации по развитию своего интеллекта и
                <span>улучшению финансового благосостояния и личной жизни</span>
            </p>
        </div>
        <div class="introArrow">
            <img src="../assets/iconArrow.svg">
            <p><a href="#info">Подробнее</a></p>
        </div>
    `

    const about = `
        <img class="aboutQuote aboutQuoteLeft" src="../assets/aboutQuoteLeft.svg"></img>
        <h4 class="aboutText">Профессиональный <br> IQ-тест позволяет не только определить коэффициент вашего интеллекта, но и выработать список рекомендаций для повышения этого показателя. </h4>
        <img class="aboutQuote aboutQuoteRight" src="../assets/aboutQuoteRight.svg"></img>
    `

    const info = `
        <p class="infoText"> 
            Также по результатам теста <br>
            <span>вы получите</span> 
            подробные <br>
            <span>советы</span> 
            по определению наиболее перспективной
            <span>для вашего типа <b>интеллекта</b> сферы деятельности,</span> <br>
            которая принесет вам скорейший финансовый результат.
        </p>
        <img class="infoImage" src="../assets/iqBrain.png">
        <button class="startTest infoButton">Пройти тест</button>
    `

    const footer = `
        <p class="footerTitle">
            Прохождение теста займет у вас не более 
            <span>12 минут</span>
            , а его 
            <b>результаты</b>
            вы сможете 
            <span>использовать всю жизнь.</span>
        </p>
        <div class="footerText">
            Профессиональная интерпретация и детально 
            <b>проработанные рекомендации</b>
            позволят вам качественно 
            <b>изменить все аспекты своей жизни:</b>
            от финансового до любовного.
        </div>
        <button class="startTest footerButton">Пройти тест</button>
        <div class="footerImages">
            <img class="footerImage2" src="../assets/footerLightning2.png">
            <img class="footerImage1" src="../assets/footerLightning.png">
        </div>
        <h6 class="footerCopyright">&copy; 2019</h6>
    `


    const renderPage = (state) => {
        // renderHeader(state.currentPage);

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
