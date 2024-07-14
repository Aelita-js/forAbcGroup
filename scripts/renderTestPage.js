const renderTestPage = (state, renderPage) => {
    const app = document.getElementById('app');
    const currentQuestion = state.questions[state.currentQuestion];
    let questionContent = `
        <div class="progressBar">
            <div class="progressBarInner" style="width: ${(state.currentQuestion / state.questions.length) * 100}%"></div>
        </div>
        <div class="question">
            <p>${currentQuestion.question}</p>
        </div>
        <ul class="answers">
            ${currentQuestion.options.map((option, index) => `
                <li>
                    <label>
                        <input type="radio" name="answer" value="${index}">
                        ${option}
                    </label>
                </li>
            `).join('')}
        </ul>
        <button id="nextQuestion" disabled>Далее</button>
    `;

    // Добавляем изображение, если оно есть для текущего вопроса
    if (currentQuestion.image) {
        questionContent = `
            <div class="progressBar">
                <div class="progressBarInner" style="width: ${(state.currentQuestion / state.questions.length) * 100}%"></div>
            </div>
            <div class="question">
                <p>${currentQuestion.question}</p>
            </div>
            <div class="questionImage">
                <img src="${currentQuestion.image}" alt="Question Image">
            </div>
            <ul class="answers">
                ${currentQuestion.options.map((option, index) => `
                    <li>
                        <label>
                            <input type="radio" name="answer" value="${index}">
                            ${option}
                        </label>
                    </li>
                `).join('')}
            </ul>
            <button id="nextQuestion" disabled>Далее</button>
        `
    }

    app.innerHTML = questionContent;

    const answerInputs = document.querySelectorAll('input[name="answer"]');
    answerInputs.forEach(input => {
        input.addEventListener('change', () => {
            document.getElementById('nextQuestion').disabled = false;
        });
    });

    document.getElementById('nextQuestion').addEventListener('click', () => {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
        state.answers.push(selectedAnswer);
        state.currentQuestion++;
        if (state.currentQuestion < state.questions.length) {
            renderTestPage(state, renderPage);
        } else {
            state.currentPage = 'loading';
            renderPage(state);
        }
    });
};
