function onBallClick() {
    var ball = document.querySelector('.ball')
    
    // var currentSize = parseInt(window.getComputedStyle(ball).width)

   
    var increment = Math.floor(Math.random() * (60 - 20 )) + 20
    var newSize = increment

    ball.style.width = newSize + 'px'
    ball.style.height = newSize + 'px'
    ball.style.lineHeight = newSize + 'px'

    // Change the ball color to a random color
    ball.style.backgroundColor = getRandomColor()
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}