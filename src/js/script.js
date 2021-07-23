function updateClock () {
  const date = new Date()
  const time = {
    'hours': date.getHours(),
    'minutes': date.getMinutes(),
    'seconds': date.getSeconds(),
    'period': 'am',
  }

  time.seconds = (time.seconds < 10 ? '0' : '') + time.seconds
  time.minutes = (time.minutes < 10 ? '0' : '') + time.minutes
  time.hours = (time.hours > 12) ? time.hours - 12 : time.hours
  time.hours = (time.hours == 0) ? 12 : time.hours
  time.period = (time.hours < 12) ? 'am' : 'pm'

  document.getElementById('hours').innerHTML = time.hours
  document.getElementById('minutes').innerHTML = time.minutes
  // document.getElementById('seconds').innerHTML = time.seconds
  // document.getElementById('period').innerHTML = time.period
}

window.addEventListener('load', () => {
  updateClock()
  setInterval(updateClock, 1000)
})
