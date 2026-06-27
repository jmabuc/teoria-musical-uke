document.querySelectorAll("[data-quiz]").forEach((quiz) => {
  const feedback = quiz.querySelector("[data-feedback]");
  quiz.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const isCorrect = button.dataset.answer === "correct";
      feedback.textContent = isCorrect ? button.dataset.correct : button.dataset.incorrect;
      feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
    });
  });
});
