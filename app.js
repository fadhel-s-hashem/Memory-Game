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
}
)

sqr.forEach(function(card,arry){     
    card.textContent=randomImoji[arry];
})

startBT.addEventListener('click',function(){
    gameStarte= true
    sqr.forEach(function(card) {
    card.textContent = ""
    })
    result.textContent="Game started find the Matching pairs"
})

sqr.forEach(function(){

})

