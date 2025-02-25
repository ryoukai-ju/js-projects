const monthName = document.querySelector('#month-name')
const dayName = document.querySelector('#day-name')
const dayNumber = document.querySelector('#day-number')
const yearName = document.querySelector('#year')

const date = new Date()

const month = date.getMonth()

monthName.innerHTML = date.toLocaleString('en', {
  month: 'long'
})

dayName.innerHTML = date.toLocaleString('en', {
  weekday: 'long'
})

dayNumber.innerHTML = date.getUTCDate()

yearName.innerHTML = date.getFullYear()