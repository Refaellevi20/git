function onBallClick() {
    var ball = document.querySelector('.ball');
    var newSize = prompt("Enter the new size of the ball:");

    if (isNaN(newSize) || newSize < 0) {
        console.log("Please enter a valid number.");
    } else if (newSize > 400) {
        console.log("Size too large! Resetting to 100px.");
        newSize = 100; // Reset to 100px if the size exceeds 400px
    }

    ball.style.width = newSize + 'px';
    ball.style.height = newSize + 'px';
    ball.style.lineHeight = newSize + 'px';
}
