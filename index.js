ocument.querySelector('.rules-btn').addEventListener('click', (e) =>{
    e.preventDefault();
    document.querySelector('.rules-popup').classList.toggle('rules-popup--active');
    document.querySelector('.overlay').classList.toggle('overlay--active');
});
document.querySelector('.close-icon').addEventListener('click', () =>{
    document.querySelector('.rules-popup').classList.remove('rules-popup--active');
    document.querySelector('.overlay').classList.toggle('overlay--active');
});

let gameItemsCont = Array.from(document.querySelectorAll("div[class^='game-body__circle-container'"));
let tempoV;
let tempoArr = [];
let stateFlag = false;
let score = document.querySelector('.header__value');

setScore(state = 'init', tar = score);
// Loop through Each Game Item
gameItemsCont.forEach((e) =>{
    // Listen For Click Event
    e.addEventListener('click', function(){
        // Store The Clicked Item in Variable
        tempoV = e;
        // Trigger Game Fuction
        swipe(flag = stateFlag, arr = gameItemsCont, slim = tempoV, tmpArr = tempoArr);
        // Swipe Game State Flag
        stateFlag = true;
        // Play Again
        
    });
});
// Stage 1 to 2 trigger Function
function swipe(flag, arr, slim, tmpArr){
    // Stage 2 If TRUE
    if (flag === true){
        
    }
    // Stage 1 if FALSE. And Go To Stage 2
    else{
        // Add Stage 2 Class to Element
        document.querySelector('.bg-triangle').classList.add('bg-triangle--s2');
        document.querySelector('.choosed-item--com__bg-circle').classList.add('choosed-item--com__bg-circle--s2');
        
        // Separation of the elements of an array
        arr.filter((e)=>{
            // Make Sure of Regarding Clicked Item
            if(slim !== arr[arr.indexOf(e)]){
                // Add NotClicked Items
                tmpArr.push(e);
            }
        });