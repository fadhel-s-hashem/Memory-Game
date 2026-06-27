const sqr = document.querySelectorAll('.sqr')
const result = document.querySelector('#result')
const board = document.querySelector('.board')
const resetBT = document.querySelector('#reset')
const startBT = document.querySelector('#start')

const emojis = ['🍎' ,'🍎','🍌','🍌','🍇', '🍇','🍒','🍒','🍉',
    '🍉','🍍','🍍'];

let randomImoji = emojis.sort(function() {
return 0.5-Math.random() 
}
)

sqr.forEach(function(card,arry){
    card.addEventListener('click', function(){
        if(card.textContent !=="") {return}}
    )
    card.textContent=randomImoji[arry];
})
