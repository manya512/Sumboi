let count = 0;

function updateDisplay() {
    document.getElementById('counter').textContent = count;
}

function increaseCounter() {
    count++;
    updateDisplay();
}

function decreaseCounter() {
    count--;
    updateDisplay();
}

let totalSeconds = 0;

function updateTimer() {
    totalSeconds++;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    document.getElementById('sessionTime').textContent =
        `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

setInterval(updateTimer, 1000);

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === '-' || e.key === 'Subtract') {
        decreaseCounter();
    }
    if (e.key === ' ') {
        e.preventDefault();
        increaseCounter();
    }
});