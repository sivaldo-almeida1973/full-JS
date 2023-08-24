//encapisular a lógica que recupera a altura e a largura do palco do jogo dentro de uma função,para atualizar,sempre que o evento de redimensionamento ocorrer

//criar a variavel dentro do escopo global
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
     altura = window.innerHeight
     largura = window.innerWidth

    console.log(altura, largura)

}

//chamar a função
ajustaTamanhoPalcoJogo()


//ajustar posicão do mosquito
//math.floor ira arredondar para baixo os numeros altura e largura

var posicaoX = Math.floor(Math.random() * altura) - 90
var posicaoY = Math.floor(Math.random() * largura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY


console.log(posicaoX, posicaoY)


//criar o elemento html (img)
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className =' mosquito1'
mosquito.style.left = 0 + 'px'
mosquito.style.top = 0 + 'px'
mosquito.style.position = 'absolute'

// atraves do objeto document acessar o body da nossa pagina
//incluir nossa img dentro do body atraves do metodo appendChild
document.body.appendChild(mosquito)




