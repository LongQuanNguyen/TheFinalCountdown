// Nguyen, Long Quan - iqm026 - 11314875

const countDownDate = new Date("2023-12-09T23:59:59").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const timerElement = document.getElementById("timer");
    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        timerElement.innerHTML = "EXPIRED";
    }
}, 1000);
