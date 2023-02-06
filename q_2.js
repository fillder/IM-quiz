// Spørsmål 2
// Koden for riktig svaralternativ på spørsmål 1, score++ øker poengsummen før brukeren blir sent til neste spørsmål.
document.getElementById("toSvarEn").addEventListener("click", function() {
    score++;
    window.location.href = "quiz_3.html";
});
document.getElementById("toSvarTo").addEventListener("click", function() {
    window.location.href = "quiz_3.html";
});
document.getElementById("toSvarTre").addEventListener("click", function() {
    window.location.href = "quiz_3.html";
});