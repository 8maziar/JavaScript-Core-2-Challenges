const form = document.getElementById("form");
const inputNumber = document.getElementById("input-number");
const btnSubmit = document.getElementById("btn-submit");
const btnReset = document.getElementById("btn-reset");
const counterS = document.getElementById("counter-s");
const counterL = document.getElementById("counter-l");
const count = document.getElementById("counter");

let amountS = 0;
let amountL = 0;
let gameTime;
let myinterval;

// on submit start counter and also show winner
form.addEventListener("submit", (e) => {
  clearInterval(myinterval);
  e.preventDefault();
  const value = inputNumber.value;
  if (value) {
    gameTime = value;
    myinterval = setInterval(() => {
      gameTime--;
      count.innerText = gameTime;
      if (gameTime <= 0) {
        clearInterval(myinterval);
        showWinner();
      }
    }, 1000);
    inputNumber.value = "";
  }
});

// listen for keypress
document.addEventListener("keypress", keyBoardEvents);
function keyBoardEvents(e) {
  if (gameTime) {
    if (e.keyCode === 115) {
      amountS++;
      counterS.innerText = amountS;
    } else if (e.keyCode === 108) {
      amountL++;
      counterL.innerText = amountL;
    }
  }
}

// show winner
function showWinner() {
  const winner =
    amountS > amountL ? "player S is winner" : "player L is winner";
  const elem = document.createElement("p");
  elem.innerText = winner;
  count.parentElement.appendChild(elem);
}

//reset game
btnReset.addEventListener("click", () => location.reload());
