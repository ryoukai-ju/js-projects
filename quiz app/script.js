const questions = [
  {
    question: 'Which is largest animal in the world?',
    answers: [
      {
        text: 'Shark',
        correct: false
      },
      {
        text: 'Blue whale',
        correct: true
      },
      {
        text: 'Elephant',
        correct: false
      },
      {
        text: 'Giraffe',
        correct: false
      }
    ]
  },
  {
    question: 'Which is the smallest country in the world?',
    answers: [
      {
        text: 'Vatican City',
        correct: true
      },
      {
        text: 'Bhutan',
        correct: false
      },
      {
        text: 'Nepal',
        correct: false
      },
      {
        text: 'Sri Lanka',
        correct: false
      }
    ]
  },
  {
    question: 'Which is the largest desert in the world?',
    answers: [
      {
        text: 'Kalahari',
        correct: false
      },
      {
        text: 'Gobi',
        correct: false
      },
      {
        text: 'Sahara',
        correct: false
      },
      {
        text: 'Antarctica',
        correct: true
      }
    ]
  },
  {
    question: 'Which is the smallest continent in the world?',
    answers: [
      {
        text: 'Asia',
        correct: false
      },
      {
        text: 'Australia',
        correct: true
      },
      {
        text: 'Arctic',
        correct: false
      },
      {
        text: 'Africa',
        correct: false
      }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next'
  showQuestion();
}

function showQuestion() {
  resetState();
  // displays quesiton
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    // append the button to the last answerButtons div
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer);
  })
}

function resetState() {
  nextButton.style.display = 'none';
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  // 'e' is the event object passed to the function when an event is triggered
  const selectedBtn = e.target; // Get the element that triggered the event (the clicked button)
  const isCorrect = selectedBtn.dataset.correct === 'true'; // Check if the button's data-correct attribute is 'true'

  if (isCorrect) {
    selectedBtn.classList.add('correct'); // Add 'correct' class if the answer is correct
    score++;
  } else {
    selectedBtn.classList.add('incorrect'); // Add 'incorrect' class if the answer is incorrect
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  })
  nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length){
    handleNextButton();
  } else {
    startQuiz();
  }
})

function handleNextButton() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Play Again';
  nextButton.style.display = 'block';
}

startQuiz();