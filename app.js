const sqr = document.querySelectorAll('.sqr')
const result = document.querySelector('#result')
const board = document.querySelector('.board')
const resetBT = document.querySelector('#reset')
const startBT = document.querySelector('#start')

let userChoice = [];

let gameStarte = false;

const emojis = ['🍎' ,'🍎','🍌','🍌','🍇', '🍇','🍒','🍒','🍉',
    '🍉','🍍','🍍'];

let randomImoji = emojis.sort(function() {
return 0.5-Math.random() 
})

sqr.forEach(function(card,arry){     
    card.textContent=randomImoji[arry];

     card.addEventListener('click', function() {
if (card.textContent !== "" || userChoice.length === 2) {
    return
 } else {
    card.textContent = randomImoji[arry];
  }
 

    if(userChoice.length === 2){
        userChoice[0].textContent= ''
        userChoice[1].textContent= ''
        userChoice =[]
    }
      userChoice.push(card)


      if (userChoice.length === 2) {
        let firstCard = userChoice[0]
        let secondCard = userChoice[1]
    
      if(firstCard.textContent===secondCard.textContent){
        firstCard.style.backgroundColor = 'lightgreen'
        secondCard.style.backgroundColor = 'lightgreen'
        userChoice = []
      }} 
    
            
 })    
})

startBT.addEventListener('click',function(){
    gameStarte= true
    sqr.forEach(function(card) {
    card.textContent = ""
    })
    result.textContent="Find the Matching pairs"
})



