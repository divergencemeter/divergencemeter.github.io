/* savi2 */

window.onload = () => {
  getRandomDivergence()
}

window.onkeypress = e => e.key === 'Enter' ? getRandomDivergence() : null

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min
}

const getRandomDivergence = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      for (let i = 0; i < 6; i++) {
        if (getRandomIntInclusive(1, 200) === 20) {
          document.getElementById('digit').src = 'assets/1.png'
          document.getElementById('digit0').src = 'assets/0.png'
          document.getElementById('digit1').src = 'assets/4.png'
          document.getElementById('digit2').src = 'assets/8.png'
          document.getElementById('digit3').src = 'assets/5.png'
          document.getElementById('digit4').src = 'assets/9.png'
          document.getElementById('digit5').src = 'assets/6.png'
          return null
        }

        document.getElementById('digit').src = 'assets/0.png'
        document.getElementById(`digit${i}`).src = `assets/${getRandomIntInclusive(0, 9)}.png`
      }
    }, 50 * i)
  }
}