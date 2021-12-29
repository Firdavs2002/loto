const startBtn = document.querySelector('#start')
const barrelList = document.querySelector('#barrel-list')
const barrelsEl = document.querySelector('.barrels')
const barrelBtn = document.querySelector('#choose-new-barrel')
const board = document.querySelector('#board')
const screens = document.querySelectorAll('.screen')
const currentBarrel = screens[2].querySelector('.current-barrel')
const colors = ['#63DD8D', '#FFEC73', '#8F6DD7', '#FF8973', '#62B4CF']

let interval
let barrel = 0
let barrels = []
let barrelsChoose = []
let barrelsChooses = {}
let score = 0

startBtn.addEventListener('click', event => {
  event.preventDefault()
  screens[0].classList.add('up')
})

barrelList.addEventListener('click', event => {
  if (event.target.classList.contains('barrel-btn')) {
    barrel = +event.target.dataset.barrel 
    barrels[barrel-1] = barrel
    screens[1].classList.add('up')
    chooseBarrel()
  }
})

function chooseBarrel() {
  for (let i = 0; i < barrels.length; i++) {
    barrels[i] = i+1   
  }
  barrelsChooses = {...barrels}
}

barrelBtn.addEventListener('click', () => {
  if (barrels.length === 0) {
    endGame()
    return
  }
  const random = randomChooseBarrel(barrels)
  currentBarrel.textContent = random
  barrelsChoose.push(random)
  delete barrelsChooses[random]
  barrels = barrels.filter(b => b !== random)
  renderBarrels(barrelsEl, random)
})

function endGame() {
  currentBarrel.textContent = '-'
}

function renderBarrels(barrelsEl, content) {
  const item = document.createElement('div')
  item.classList.add('barrel-item')
  item.textContent = content
  barrelsEl.append(item)
}

function randomChooseBarrel(barrels) {
  // const shuffled = barrels.sort(() => 0.5 - Math.random());
  // console.log(shuffled)
  let randoms = {...barrels}

  const randomObj = (obj) => {
    const keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
  }

  randoms = randomObj(randoms)
  return randoms
}