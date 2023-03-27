const APIkey = '4bdebe3f6b67aa9a49266cc15d9aae01'

 
 async function puxarDados(cidade){
    try{
        const responseDados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${APIkey}&lang=pt_br`)
        const jsonDados = await responseDados.json()
        
        princContainer.classList.add('moreHeight')
        mostrarClima.innerText = jsonDados.main.temp
        mostrarCidade.innerText = jsonDados.name
        
    } catch(erro){
        console.log(erro)
    }

 }

const btnPesquisa = document.getElementById('btn')
const cidadePesquisa = document.getElementById('pesquisa')
const mostrarClima = document.getElementById('clima')
const mostrarCidade = document.getElementById('cidade')
const princContainer = document.getElementById('princ')


function minhaFunc(){
    cidade = cidadePesquisa.value.trim()
    puxarDados(cidade)
    
}

btnPesquisa.addEventListener('click', minhaFunc)

