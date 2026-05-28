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

function resetCounter() {
    count = 0;
    updateDisplay();
}
