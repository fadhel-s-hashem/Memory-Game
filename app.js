const sqr = document.querySelectorAll('.sqr')
const result = document.querySelector('#result')
const board = document.querySelector('.board')
const resetBT = document.querySelector('#reset')
const startBT = document.querySelector('#start')
const time = document.querySelector('#timer')

let userChoice = [];
let gameStarte = false;

let timeRemain;
let timerOn= 60;

const emojis = ['🍎' ,'🍎','🍌','🍌','🍇', '🍇','🍒','🍒','🍉',
    '🍉','🍍','🍍'];

let randomImoji = emojis.sort(function() {
return 0.5-Math.random() 
})

sqr.forEach(function(card,arry){     
    card.textContent=randomImoji[arry]

     card.addEventListener('click', function() {
    if (card.textContent !== "" || userChoice.length === 2) {
     return
    } else {
        card.textContent = randomImoji[arry]
    }

      
      userChoice.push(card)
      if (userChoice.length === 2) {
        let firstCard = userChoice[0]
        let secondCard = userChoice[1]
    
      if(firstCard.textContent===secondCard.textContent){
        firstCard.style.backgroundColor = 'lightgreen'
        secondCard.style.backgroundColor = 'lightgreen'
        userChoice = []
      } else{ if(firstCard.textContent !== secondCard.textContent){
        setTimeout(function(){
            firstCard.textContent='' 
            secondCard.textContent=''
            userChoice = []
        },500)
      }}
    }
        
    
            
 })    
})

startBT.addEventListener('click',function(){
    sqr.forEach(function(card) {
    card.textContent = ""
    result.textContent="Find the matching pairs"
    
    })

    const calculate = setInterval(displayTime, 1000)

    function displayTime() {
      time.textContent = timerOn = timerOn-1

      
    }
})


