import React, { useState, useEffect } from "react";
import Question from "./Question";
import { formatQuestions } from "../utils/QuestionUtils";
import HUD from "./HUD";

const Game = () => {
  const [questions, setQuestions] = useState(0);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [bonus, setBonus] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    fetchQuestions();

    async function fetchQuestions() {
      const url = "https://opentdb.com/api.php?amount=10";
      const res = await fetch(url);
      const { results } = await res.json();

      const formattedQuestions = formatQuestions(results);

      setQuestions(formattedQuestions);
      setCurrent(0);
      setLoading(false);
    }
  }, []);

  const nextQuestion = (bonus) => {
    if (current < questions.length - 1) {
      setCurrent((current) => current + 1);
      setBonus((b) => b + bonus);
    } else {
      setDone(true);
    }
  };
  return (
    <>
      {loading && <div id="loader"></div>}
      {!loading && !done && <HUD score={bonus} questionNumber={current + 1} />}
      {!loading && !done && (
        <Question question={questions[current]} nextQuestion={nextQuestion} />
      )}
      {done && <h1>Done Quiz</h1>}
    </>
  );
};

export default Game;
