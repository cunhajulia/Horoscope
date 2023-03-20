const monthInput = document.querySelector('#month') // input with the id month
const dayInput = document.querySelector('#day') // input with the id day
const checkBtn = document.querySelector('#check') // button with the id check
const message = document.querySelector('#message')

function checkZodiacSign() {
  const month = Number(monthInput.value)
  const day = Number(dayInput.value)
  if (month === 01 && day >= 20 || month === 02 && day <= 18) {
    message.innerText = 'Aquarius'
  } else if (month === 02 && day >= 19 || month === 03 && day <= 20) {
    message.innerText = 'Pisces'
  } else if (month === 03 && day >= 21 || month === 04 && day <= 19) {
    message.innerText = 'Aries'
  } else if (month === 04 && day >= 20 || month === 05 && day <= 20) {
    message.innerText = 'Taurus'
  } else if (month === 05 && day >= 21 || month === 06 && day <= 20) {
    message.innerText = 'Gemini'
  } else if (month === 06 && day >= 21 || month === 07 && day <= 22) {
    message.innerText = 'Cancer'
  } else if (month === 07 && day >= 23 || month === 08 && day <= 22) {
    message.innerText = 'Leo'
  } else if (month === 08 && day >= 23 || month === 09 && day <= 20) {
    message.innerText = 'Virgo'
  } else if (month === 09 && day >= 21 || month === 10 && day <= 22) {
    message.innerText = 'Libra'
  } else if (month === 10 && day >= 23 || month === 11 && day <= 22) {
    message.innerText = 'Scorpio'
  } else if (month === 11 && day >= 23 || month === 12 && day <= 21) {
    message.innerText = 'Sagittarius'
  } else if (month === 12 && day >= 22 || month === 01 && day <= 19) {
    message.innerText = 'Capricorn'
  }
}
checkBtn.addEventListener('click', checkZodiacSign)