function updateClock () {
  var currentTime = new Date()

  // var timeOfDay = ''
  var currentHours = currentTime.getHours()
  var currentMinutes = currentTime.getMinutes()
  // var currentSeconds = currentTime.getSeconds()

  currentMinutes = (currentMinutes < 10 ? '0' : '') + currentMinutes
  // currentSeconds = (currentSeconds < 10 ? '0' : '') + currentSeconds

  // timeOfDay = (currentHours < 12) ? 'am' : 'pm'
  currentHours = (currentHours > 12) ? currentHours - 12 : currentHours
  currentHours = (currentHours == 0) ? 12 : currentHours

  document.getElementById('hours').innerHTML = currentHours
  document.getElementById('minutes').innerHTML = currentMinutes
  // document.getElementById('seconds').innerHTML = currentSeconds
  // document.getElementById('timeOfDay').innerHTML = timeOfDay
}

window.addEventListener('load', () => {
    updateClock()

    setInterval(() => {
        updateClock()
    }, 1000)
})
