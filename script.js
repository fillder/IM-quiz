// script.js
var score = 0;

// Starter quizen og bestemmer hvor brukeren blir sendt.
document.getElementById("startBtn").addEventListener("click", function() {
  window.location.href = "quiz_1.html";
});

// Lar brukeren gjenta quizen, og tilbakestiller poengsummen.
document.getElementById("retakeBtn").addEventListener("click", function() {
  score = 0;
  window.location.href = "index.html";
});

// Spørsmål 1
// Koden for riktig svaralternativ på spørsmål 1, score++ øker poengsummen før brukeren blir sent til neste spørsmål.
document.getElementById("svar1").addEventListener("click", function() {
    score++;
    window.location.href = "quiz_2.html";
});
// Koden for feil svar, hvor brukeren blir sent videre uten at poengsummen øker
document.getElementById("svar2").addEventListener("click", function() {
    window.location.href = "quiz_2.html";
});
document.getElementById("svar3").addEventListener("click", function() {
    window.location.href = "quiz_2.html";
});

// Spørsmål 2
document.getElementById("svar1").addEventListener("click", function() {
    score++;
    window.location.href = "quiz_3.html";
});
document.getElementById("svar2").addEventListener("click", function() {
    window.location.href = "quiz_3.html";
});
document.getElementById("svar3").addEventListener("click", function() {
    window.location.href = "quiz_3.html";
});

// Spørsmål 3
document.getElementById("svar1").addEventListener("click", function() {
    score++;
    window.location.href = "resultat.html";
});
document.getElementById("svar2").addEventListener("click", function() {
    window.location.href = "resultat.html";
});
document.getElementById("svar3").addEventListener("click", function() {
    window.location.href = "resultat.html";
});

// Update score on result page
document.getElementById("score").innerHTML = score;