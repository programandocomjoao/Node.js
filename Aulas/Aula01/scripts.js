const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')
const gameover = document.querySelector('.gameover')
const cima = document.querySelector('.cima')
const reset = document.querySelector('.reset')

const pular = () => {
  mario.classList.add('pulo')

  setTimeout(() => { mario.classList.remove('pulo') } , 500)
}

const colidir = setInterval(() => {
  const posCano = cano.offsetLeft
  const posMario = +window.getComputedStyle(mario).bottom.replace('px', '')

  if(posCano > 0 && posCano <= 60 && posMario < 40) {
    gameover.style.visibility = 'visible'

    cano.style.animation = 'none'
    cano.style.left = `${posCano}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${posMario}px`
    mario.src = 'imagens/game-over.png'
    mario.style.width = '38px'
    mario.style.marginLeft = '25px'

    clearInterval(colidir)
  }
}, 10)

document.addEventListener('keydown', pular)
cima.addEventListener('click', pular)
reset.addEventListener('click', () => { location.reload() })