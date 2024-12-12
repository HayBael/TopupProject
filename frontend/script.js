document.getElementById("topup-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const game = document.getElementById("game").value;
    const playerId = document.getElementById("player-id").value;
    const nominal = document.getElementById("nominal").value;

    alert(`Top-Up untuk ${game} ID ${playerId} sebesar ${nominal} berhasil!`);
});