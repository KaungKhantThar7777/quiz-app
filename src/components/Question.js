import React, { useState } from "react";

const Question = ({
  question: { question, choices, answer },
  nextQuestion,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [answering, setAnswering] = useState(false);
  const [classToApply, setClassToApply] = useState("");

  const checkAnswer = (chooseAnswer) => {
    if (answering) return;

    setAnswering(true);
    setSelectedAnswer(chooseAnswer);

    const isCorrect = chooseAnswer === answer;
    const bonus = isCorrect ? 10 : 0;
    setClassToApply(isCorrect ? "correct" : "incorrect");

    setTimeout(() => {
      setAnswering(false);
      setSelectedAnswer(-1);
      setClassToApply("");

      nextQuestion && nextQuestion(bonus);
    }, 1000);
  };

  return (
    <div>
      <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
      {choices.map((choice, index) => (
        <div
          className={`choice-container ${
            index === selectedAnswer && classToApply
          } ${selectedAnswer !== -1 && answer === index && "correct"}`}
          key={index}
          onClick={() => checkAnswer(index)}
        >
          <p className="choice-prefix">{index + 1}</p>
          <p
            className="choice-text"
            dangerouslySetInnerHTML={{ __html: choice }}
          ></p>
        </div>
      ))}
    </div>
  );
};

export default Question;
