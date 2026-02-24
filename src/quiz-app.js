import { massageQuizData, resultsData, resultsMap } from "./quiz-data.js";
const quizScreen = document.querySelectorAll(".quiz-screen");
const quizFinalScreen = document.querySelector(".quiz-final-screen");
const btnNext = document.querySelector(".next-question-btn");
const userAnswers = [];

if (btnNext) {
  btnNext.disabled = true;

  function generateAnswerLayout(answerText) {
    if (answerText === undefined) return;
    return `<div class="answer">${answerText}</div>`;
  }

  // Функция переключение экранов
  function swichAnswer(currentScreenIndex = 0) {
    if (currentScreenIndex === 0) localStorage.clear();
    btnNext.addEventListener("click", () => {
      // само переключение

      quizScreen[currentScreenIndex].style.display = "none";
      currentScreenIndex++;
      if (quizScreen[currentScreenIndex] === undefined) {
        btnNext.style.display = "none";
        quizFinalScreen.style.display = "block";
        return;
      }
      quizScreen[currentScreenIndex].style.display = "block";
      btnNext.disabled = true;
    });
  }

  // основная логика квиза
  swichAnswer();
  quizScreen.forEach((element, index) => {
    // помещаем вопросв в разметку
    if (!massageQuizData[index]) return;
    if (index === 0) element.style.display = "block";

    const questionElement = element.querySelector(".quiz-question");

    if (questionElement) {
      questionElement.textContent = massageQuizData[index].question;
    }

    // работа с ответами
    const answersContainer = element.querySelector(".quiz-answers");

    if (answersContainer) {
      answersContainer.innerHTML = "";

      const quizAnswers = massageQuizData[index].answers;

      // создаем разметку для ответов и помещаем ответы туда

      quizAnswers.forEach((answer) => {
        const answerHTML = generateAnswerLayout(answer.answer);

        if (answerHTML) {
          answersContainer.insertAdjacentHTML("beforeend", answerHTML);
        }
      });
    }

    // обработчик кликов на ответа
    const answerButton = element.querySelectorAll(".answer");

    answerButton.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        answerButton.forEach((ans) => {
          ans.classList.remove("selected");
        });
        btn.classList.add("selected");

        // выключаем кнопку пока не выбран ответ
        btnNext.disabled = false;

        // помещаем пользовательский ответ в массив
        const userSelectedAnswerId = massageQuizData[index].answers[idx].id;
        userAnswers[index] = userSelectedAnswerId;

        // Преобразуем массив в строку
        let userAnswersString = userAnswers.join("-");

        // помещаем строку с ответами в localStorage

        localStorage.setItem("userAnswers", userAnswersString);
        const result = localStorage.getItem("userAnswers");

        // Ничего не делаем пока нет окончательного результата
        if (result.length < 5) return;

        // создаем ключ для объекта с результатами
        const keyForResultsData = resultsMap[result];

        console.log(keyForResultsData);

        // отображение финального экрана

        if (keyForResultsData) {
          quizFinalScreen.innerHTML = `
        <div class="quiz-result">
          <h2 class="text-xl pb-5 text-center font-bold">${resultsData[keyForResultsData].title}</h2>
          <p class="font-another pb-4 text-center">${resultsData[keyForResultsData].description}</p>
          <a href="https://mst.link/sabirova_liliya" class="button bg-[#FA6403] text-white mx-auto text-center" >${resultsData[keyForResultsData].button}</a>
        </div>
      `;
        } else {
          quizFinalScreen.innerHTML = `
        <div class="quiz-result text-center">
          <h2 class="text-xl pb-5 text-center  font-bold">Спасибо за ответы!</h2>
          <p class="font-another pb-4">На основе ваших ответов рекомендуем классический оздоровительный массаж.</p>
           <a href="https://mst.link/sabirova_liliya" class="button bg-[#FA6403] text-white mx-auto text-center" >Записаться на массаж</a>
        </div>`;
        }
      });
    });
  });
}
