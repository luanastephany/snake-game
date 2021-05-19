let canvas = document.getElementById('snake')
let context = canvas.getContext('2d') //renderiza o desenho dentro do canvas
let box = 32

let snake = []
snake[0] = {
  x: 8 * box, //8 para ficar bem no meio da caixa
  y: 8 * box
}

let direction = 'right'

function criarBG() {
  context.fillStyle = 'lightgreen'
  context.fillRect(0, 0, 16 * box, 16 * box) //posição de x, y, largura e altura
}

function criarCobrinha() {
  for (i = 0; i < snake.length; i++) {
    context.fillStyle = 'green' //cor da cobrinha
    context.fillRect(snake[i].x, snake[i].y, box, box) //tamanho
  }
}

document.addEventListener('keydown', update)
//fazendo a cobrinha andar para todos os lados
function update(event) {
  if (event.code == 'ArrowLeft' && direction != 'right') direction = 'left'
  if (event.code == 'ArrowUp' && direction != 'down') direction = 'up'
  if (event.code == 'ArrowRight' && direction != 'left') direction = 'right'
  if (event.code == 'ArrowDown' && direction != 'up') direction = 'down'
}

function iniciarJogo() {

  //cobrinha passando pelas paredes
  if (snake[0].x > 15 * box && direction == 'right') snake[0].x = 0
  if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box
  if (snake[0].y > 15 * box && direction == 'down') snake[0].y = 0
  if (snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box


  criarBG()
  criarCobrinha()

  let snakeX = snake[0].x
  let snakeY = snake[0].y

  if (direction == 'right') snakeX += box
  if (direction == 'left') snakeX -= box
  if (direction == 'up') snakeY -= box
  if (direction == 'down') snakeY += box

  snake.pop() //retira um espaço da cobrinha

  let newHead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead) //add elementos no inicio do array e att
}

let jogo = setInterval(iniciarJogo, 100)