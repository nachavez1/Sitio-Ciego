const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  console.log(firstCard.dataset.framework);
  var word = firstCard.dataset.framework
  isMatch ? disableCards() : unflipCards();
  if(isMatch){
    if(word === "glaucoma"){
        alert("¡Descubriste una nueva palabra! Glaucoma");
        var text1 = document.getElementById("glaucoma-text");
        text1.style.color = 'white';
    }
    else if(word === "macular"){
        alert("¡Descubriste una nueva palabra! Degeneración Macular");
        var text2 = document.getElementById("macular-text");
        text2.style.color = 'white';
    }
    else if(word === "catarats"){
        alert("¡Descubriste una nueva palabra! Cataratas");
        var text3 = document.getElementById("catarats-text");
        text3.style.color = 'white';
    }
    else if(word === "retinopathy"){
        alert("¡Descubriste una nueva palabra! Retinopatía Diabética");
        var text4 = document.getElementById("retinopathy-text");
        text4.style.color = 'white';
    }
    else if(word === "achromatopsia"){
        alert("¡Descubriste una nueva palabra! Acromatopsia");
        var text5 = document.getElementById("achromatopsia-text");
        text5.style.color = 'white';
    }
    else if(word === "blindness"){
        alert("¡Descubriste una nueva palabra! Otros");
        var text6 = document.getElementById("blindness-text");
        text6.style.color = 'white';
    }
  }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));