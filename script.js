

function onBallClick() {
    var ball = document.querySelector('.ball')
    var newSize = prompt("Enter the new  size of the ball:")

    if (isNaN(newSize)) {
        alert("Please enter a valid number.")
    } else if (newSize > 1000) {
        alert("Too big!")
    } else {
      //  const ball = document.getElementById('resizeBall')
        ball.style.width = newSize + 'px'
        ball.style.height = newSize + 'px'
        ball.style.lineHeight = newSize + 'px'
    }
}
