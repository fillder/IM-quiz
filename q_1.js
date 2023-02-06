// Spørsmål 1
// Koden for riktig svaralternativ på spørsmål 1, score++ øker poengsummen før brukeren blir sent til neste spørsmål.
document.getElementById("enSvarEn").addEventListener("click", function() {
    score++; //flytt denne koden til det svaret som er riktig
    window.location.href = "quiz_2.html";
});
// Koden for feil svar, hvor brukeren blir sent videre uten at poengsummen øker
document.getElementById("enSvarTo").addEventListener("click", function() {
    window.location.href = "quiz_2.html";
});
document.getElementById("enSvarTre").addEventListener("click", function() {
    window.location.href = "quiz_2.html";
});
