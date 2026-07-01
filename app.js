const sqr = document.querySelectorAll('.sqr')
const result = document.querySelector('#result')
const board = document.querySelector('.board')
const resetBT = document.querySelector('#reset')
const startBT = document.querySelector('#start')
const time = document.querySelector('#timer')
const bottom = document.querySelector('.bottom')

let userChoice = [];
let gameStarte = false;

let pairsFound = 0
let timerOn = 30;
let runTimer


const emojis = ['🍎', '🍎', '🍌', '🍌', '🍇', '🍇', '🍒', '🍒', '🍉',
  '🍉', '🍍', '🍍'];

let randomImoji = emojis.sort(function () {
  return 0.5 - Math.random()
})

sqr.forEach(function (card, arry) {
  card.textContent = randomImoji[arry]

  card.addEventListener('click', function () {
    if (card.textContent !== "" || userChoice.length === 2) {
      return
    } else {
      card.textContent = randomImoji[arry]
    }

    userChoice.push(card)
    if (userChoice.length === 2) {
      let firstCard = userChoice[0]
      let secondCard = userChoice[1]

      if (firstCard.textContent === secondCard.textContent) {
        firstCard.style.backgroundColor = 'lightgreen'
        secondCard.style.backgroundColor = 'lightgreen'
        pairsFound = pairsFound + 1
        if (pairsFound === 6 ) {
          result.textContent = "You win"
          bottom.style.backgroundColor = 'lightgreen'
          clearInterval(runTimer)


        }
        console.log(pairsFound);
        userChoice = []
      } else {
        if (firstCard.textContent !== secondCard.textContent) {
          setTimeout(function () {
            firstCard.textContent = ''
            secondCard.textContent = ''
            userChoice = []
          }, 500)
        }
      }
    }


  })
})

startBT.addEventListener('click', function () {
  if (gameStarte === true) return
  gameStarte = true
  time.textContent = `Time Remain ${timerOn}`

  sqr.forEach(function (card) {
    card.textContent = ""
    result.textContent = "Find the matching pairs"

  })

  runTimer = setInterval(function () {
    if (result.textContent !== 'You win' && gameStarte === true) {
      timerOn= timerOn-1
      time.textContent = `Time Remain ${timerOn}`
      
      if (timerOn <= 0) {
        result.textContent = "Game Over"
        gameStarte = false
        bottom.style.backgroundColor = 'rgb(254, 114, 114)'
      sqr.forEach(function(card) {
        card.style.backgroundColor = 'rgb(254, 114, 114)'
      })
         
      }
    } else {
      time.textContent = `Time Remain ${timerOn}`
    }
  }, 1000)
})



resetBT.addEventListener('click', function () {
  clearInterval(runTimer)
  randomImoji = emojis.sort(function () {
    return 0.5 - Math.random()
  })


  sqr.forEach(function (card, arry) {
    card.textContent = randomImoji[arry]
    timerOn = 30;
    time.textContent = "Time Remain "
    bottom.style.backgroundColor = 'rgb(248, 240, 240)'
    pairsFound = 0
    gameStarte = false
    result.textContent = "Look carefully! Press 'Start Play' begin"
    card.style.backgroundColor = ""
  })
})



