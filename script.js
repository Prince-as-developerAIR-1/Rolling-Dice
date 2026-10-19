const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const total = document.getElementById('total');
const rollBtn = document.getElementById('rollBtn');
const historyList = document.getElementById('historyList');

let diceFaces = ['⚀','⚁','⚂','⚃','⚄','⚅'];

function rollDice() {
    dice1.classList.add('rolling');
    dice2.classList.add('rolling');
    rollBtn.textContent = "Rolling...";
    total.textContent = "---";

    setTimeout(()=> {
        let num1 = Math.floor(Math.random()*6);
        let num2 = Math.floor(Math.random()*6);

        dice1.textContent = diceFaces[num1];
        dice2.textContent = diceFaces[num2];

        let sum = (num1+1) + (num2+1);
        total.textContent = sum;

        dice1.classList.remove('rolling');
        dice2.classList.remove('rolling');
        rollBtn.textContent = "Roll Dice";

        let span = document.createElement('span');
        span.textContent = sum;
        historyList.prepend(span);
    }, 600);
}

rollBtn.addEventListener('click', rollDice);