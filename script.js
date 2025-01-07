
const targetDate = new Date("January 20, 2025 00:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = `${days}d`;
    document.getElementById("hours").innerText = `${hours}h`;
    document.getElementById("minutes").innerText = `${minutes}m`;
    document.getElementById("seconds").innerText = `${seconds}s`;

    if (timeRemaining < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "The event has started!";
    }

}, 1000);
