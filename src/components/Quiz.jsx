import React, { useState } from "react";

const questions = [
  {
    question: "1. What is Hagrid's name?",
    options: ["Rubeus", "Remus", "Frank"],
    answer: "Rubeus",
  },
  {
    question: "2. What is Hermione's patronus?",
    options: ["tabby cat", "stag", "otter"],
    answer: "otter",
  },
  {
    question: "3. Which spell is the most evil spell in the Wizarding World?",
    options: ["Avada Kedavra", "Bombardo", "Disapparate"],
    answer: "Avada Kedavra",
  },
  {
    question: "4. What  does Accio spell do?",
    options: ["Summons animals", "Summons water", "Summons objects"],
    answer: "Summons water",
  },
  {
    question: "5. What is the title of second Harry Potter film?",
    options: [
      "Harry Potter and the Philosopher's Stone",
      "Harry Potter and the Chamber of Secrets",
      "Harry Potter and the Goblet of Fire",
    ],
    answer: "Harry Potter and the Chamber of Secrets",
  },
  {
    question: "6. Who was a director of fifth Harry Potter film?",
    options: ["Mike Newell", "Alfonso Cuarón", "David Yates"],
    answer: "David Yates",
  },
  {
    question: "7. Which spell unlocks doors?",
    options: ["Anapneo", "Alohomora", "Confundo"],
    answer: "Alohomora",
  },
  {
    question: "8. Which spell creates light at the tip of the wand?",
    options: ["Nox", "Engorgio", "Lumos"],
    answer: "Lumos",
  },
  {
    question: "9. Who is the headmaster of Hogwarts in most of the books?",
    options: ["Albus Dumbledore", "Minerva McGonagall", "Severus Snape"],
    answer: "Albus Dumbledore",
  },
  {
    question: "10. How many Harry Potter movies are there in total?",
    options: ["8", "9", "10"],
    answer: "8",
  },
];

function Quiz() {
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null) // tablica odpowiedzi użytkownika. Na początku jest wypełniona null dla każdego pytania, bo jeszcze nic nie wybrał.
  );

  const handleAnswer = (questionIndex, selectedOption) => {
    if (userAnswers[questionIndex] === null) {
      const newAnswers = [...userAnswers];
      newAnswers[questionIndex] = selectedOption;
      setUserAnswers(newAnswers);
    }
  };


  const allAnswered = userAnswers.every((ans) => ans !== null);
  const score = userAnswers.reduce((acc, answer, index) => {
    if (answer === questions[index].answer) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div className="quiz">
      {questions.map((q, index) => {
        const isAnswered = userAnswers[index] !== null;
        return (
          <div className="question" key={index}>
            <h3>{q.question}</h3>
            <div className="option">
              {q.options.map((option, i) => {
                const isSelected = userAnswers[index] === option;
                const isCorrect = option === q.answer;

                let className = "option--button";
                if (isAnswered) {
                  if (isSelected && isCorrect) className += " correct";
                  else if (isSelected && !isCorrect) className += " incorrect";
                }

                return (
                  <button
                    key={i}
                    className={className}
                    onClick={() => handleAnswer(index, option)}
                    disabled={isAnswered}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      {allAnswered && (
        <div className="score">
          <h2>
            Your score: {score} out of {questions.length}
          </h2>
        </div>
      )}
    </div>
  );
}

export default Quiz;
