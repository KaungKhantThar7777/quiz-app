export const formatQuestions = (results) => {
  const questions = results.map((q) => {
    const newQ = {};
    newQ["question"] = q.question;
    newQ["choices"] = q.incorrect_answers;
    const ran = Math.floor(Math.random() * (q.incorrect_answers.length + 1));
    newQ["choices"].splice(ran, 0, q.correct_answer);
    newQ["answer"] = ran;
    return newQ;
  });

  return questions;
};
