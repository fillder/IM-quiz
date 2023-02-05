const quizForm = document.getElementById("quiz-form");
const sections = document.querySelectorAll("section");
const currentPageDisplay = document.getElementById("current-page");

let currentPage = 1;
let score = 0;

// Hide all sections except the first
for (let i = 1; i < sections.length; i++) {
  sections[i].style.display = "none";
}

quizForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the selected answer for the current page
  const currentQuestion = `q${currentPage}`;
  const selectedAnswer = document.querySelector(`input[name="${currentQuestion}"]:checked`).value;

  // Check if the answer is correct
  switch (currentQuestion) {
    case "q1":
      if (selectedAnswer === "Paris") {
        score++;
      }
      break;
    case "q2":
      if (selectedAnswer === "Rome") {
        score++;
      }
      break;
    // Add more cases for the other questions
    case "q5":
      if (selectedAnswer === "Madrid") {
        score++;
      }
      break;
  }

  // Show the next page or display the final score
  if (currentPage < sections.length) {
    sections[currentPage - 1].style.display = "none";
    sections[currentPage].style.display = "block";
    currentPageDisplay.textContent = `Page ${++currentPage}`;
  } else {
    alert(`Your final score is: ${score}/${sections.length}`);
  }
});