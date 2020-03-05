let countdown
//getting buttons
const timerButtons = document.querySelectorAll('.timer__btn')

//getting the timer display
const timerDisplay = document.querySelector('.remaining__time')

//adding event listener to the form
document.timerForm.addEventListener('submit', function(e) {
  e.preventDefault()
  const seconds = (e.target.elements.minutes.value) * 60
  timer(seconds)
  e.target.elements.minutes.value = ''
})

timerButtons.forEach((button) => {
  button.addEventListener('click', function(e) {
    timer(e.target.dataset.time)
  })
})


//function that changes the title at the top and timer in the document
function runTimer(seconds) {
  //get minutes and remaining seconds
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60
  //display it with padding
  const display = `${String(minutes).padStart(2, '0')}:${String(remainderSeconds).padStart(2, '0')}`
  timerDisplay.textContent = display
  document.title = `B r e a t h e ~ ${display}`
}

//timer function
const timer = (seconds) => {
  clearInterval(countdown)
  //get current date
  const now = Date.now()
  //calculate end time
  const then = now + seconds * 1000
  //update doc title
  runTimer(seconds)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)
    //check if it should be stopped
    if (secondsLeft < 0) {
      clearInterval(countdown)
      return
    }
    runTimer(secondsLeft)
  }, 1000)
}

