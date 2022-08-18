let app = () => {
  let grid1 = document.querySelector('.grid1');
  let grid2 = document.querySelector('.grid2');
  let res = document.querySelector('#res');
  const crom = localStorage.getItem('Timep')
  //res.innerHTML= `Seu melhor tempo: ${crom}`
  let characters = [
    'Luffy', 'Luffy', 'Nami', 'Nami','Newgate','Newgate', 'Robin','Robin','Roger','Roger','Shanks', 'Shanks','Usopp','Usopp', 'Zoro','Zoro',
  ];
  let createCard = (character) => {
    let card = createElement('div', 'card'); let front = createElement('div', 'face front'); let back = createElement('div', 'face back');
    front.style.backgroundImage = `url('../Imagens/${character}.jpg')`;
    card.appendChild(front); card.appendChild(back); card.addEventListener('click', revelarCard);
    card.setAttribute('data-character', character)
    return card;
  }
  let finalCharacters = [...characters];
  let createElement = (tag, className) => {
    let element = document.createElement(tag);
    element.className = className;
    return element;
  }
  let firstCard = '';
  let secondCard = '';
  let FimJogo = () => {
    let disabledCards = document.querySelectorAll('.disabled-card');
    if (disabledCards.length === 16) {
      timerDoJogo.stop();
      let tim = timerDoJogo.control
      localStorage.setItem("Timep", `${tim}`)
    }
  }
  let checkCards = () => {
    let firstCharacter = firstCard.getAttribute('data-character');
    let secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter) {
      firstCard.firstChild.classList.add('disabled-card');
      secondCard.firstChild.classList.add('disabled-card');
      firstCard = '';
      secondCard = '';
      FimJogo();
    } else {
      setTimeout(() => {
        firstCard.classList.remove('revelar-card');
        secondCard.classList.remove('revelar-card');
        firstCard = '';
        secondCard = '';
      }, 1500);
    }
  }
  let revelarCard = ({ target }) => {
    if (target.parentNode.className.includes('revelar-card')) {
      return;
    }

    if (firstCard === '') {
      target.parentNode.classList.add('revelar-card');
      firstCard = target.parentNode;

    } else if (secondCard === '') {
      target.parentNode.classList.add('revelar-card');
      secondCard = target.parentNode;

      checkCards();
    }
  }
  let botao = document.getElementById('btnIniciar');
  function previa() {
    finalCharacters.forEach((character) => {
      let card = createCard(character);
      card.classList.add('revelar-card')
      grid2.appendChild(card);
    });
  }
  const timerDoJogo = new Timer('#timer');
  function Timer(e) {
    this.element = e; this.time = 0; this.control = null
    this.start = () => {
      this.control = setInterval(() => {
        this.time++;
        const minutes = Math.trunc(this.time / 60);
        const seconds = this.time % 60;
        document.querySelector(this.element).innerText =
          (minutes < 10 ? "0" : "") + minutes + ':' + (seconds < 10 ? "0" : "") + seconds;
      }, 1000);
    }
    this.stop = () => {
      clearInterval(this.control);
      this.control = null;
    }
  }
  function exibirTemporariamente() {
    let cards = grid1.children;
    for (const divcad of cards) {
      divcad.classList.add('revelar-card');
    }
    setTimeout(() => {
      for (const divcad of cards) {
        divcad.classList.remove('revelar-card');
      }
    }, 3000);
  }
  function loadGame() {
    grid2.style.display = 'none';
    let shuffledArray = finalCharacters.sort(() => Math.random() - 0.5);
    shuffledArray.forEach((character) => {
      let card = createCard(character);
      grid1.appendChild(card);
    });
    exibirTemporariamente();
    botao = botao.disabled = true;
    timerDoJogo.start()
  }
  return { load: loadGame, prev: previa };
};
(() => app().prev())();