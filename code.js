const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
    "Direto pra Lua!",
    "Na Terra mesmo!",
    "Seu lugar é onde você está.",
    "O Sol",
    "A Terra",
    "Em Marte",
    "Diretamente pra Galáxia.",
    "Você combina com o Sistema Solar!",
    "Via Láctea",
    "Melhor você não saber.",
    "Não sei, pergunte novamente.",
    "Vozes do universo diz que você vai pra Lua.",
    "Buraco Negro!",
    "Uma viagem fantástica com destino ao universo.",
    "Dar a volta na terra dentro de um foguete mágico.",
    "Lugar nenhum",
    "Sem destino!",
    "Uma volta nos Planetas",
    "Pergunte novamente",
    "Sinais apontam que sim.",
    "Saturno",
    "Mercúrio",
    "Plutão",
    "Vênus",
    "Netuno",
    "Urano",
]

function fazerPergunta() {

    if(inputPergunta.value == "") {
        alert("Digite sua pergunta")
        return
    }

    buttonPerguntar.setAttribute("disabled", true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

    elementoResposta.style.opacity = 1;

    setTimeout(function() {
        elementoResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled")
    }, 3000)
}