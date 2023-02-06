// Update score on result page
window.onload = function() {
    document.getElementById("score").innerHTML = score;
};

// Lar brukeren gjenta quizen, og tilbakestiller poengsummen.
document.getElementById("gjentaKnapp").addEventListener("click", function() {
    score = 0;
    window.location.href = "index.html";
});