
// Constantes //

const APIkey = '4bdebe3f6b67aa9a49266cc15d9aae01'
const btnPesquisa = document.getElementById('btn')
const cidadePesquisa = document.getElementById('pesquisa')
const mostrarClima = document.getElementById('climaSelec')
const mostrarCidade = document.getElementById('cidade')
const princContainer = document.getElementById('princ')
const imagemClima = document.querySelector('#imagem img')
const slideInSelec = document.querySelectorAll('#imagem img, #cidade, #climaSelec, .parteFinal')
const moreClima = document.querySelector('.parteFinal')
const mostrarHumidade = document.getElementById('humidade')
const mostrarVento = document.getElementById('vento')
const inputPesquisa = document.querySelector('#inputPesquisa');

// Função Principal //

 async function puxarDados(cidade){
    try{
        const responseDados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${APIkey}&lang=pt_br`)
        const jsonDados = await responseDados.json()

        
        slideInSelec.forEach((elemento) =>{
          elemento.classList.add('slideIn')
        })
        princContainer.classList.add('moreHeight')

        mostrarClima.classList.add('clima')
        mostrarClima.innerText = parseInt(jsonDados.main.temp)
        mostrarCidade.innerText = jsonDados.name

        moreClima.style.display = 'flex';
        mostrarHumidade.innerText = `${jsonDados.main.humidity} %`
        mostrarVento.innerText = `${parseInt(jsonDados.wind.speed)} Km/h`

        
        switch(jsonDados.weather[0].main){
            case 'Clear':
                imagemClima.src = "imagens/clear.png"
                break;

            case 'Rain':
                imagemClima.src = "imagens/rain.png"
                break;

            case 'Snow':
                imagemClima.src = "imagens/snow.png"
                break;

            case 'Clouds':
                imagemClima.src = "imagens/cloud.png"
                break;

            case 'Haze':
                imagemClima.src = "imagens/haze.png"
                break;

            default:
                imagemClima.src = ''
                    
        }


      

    } catch(erro){
        princContainer.classList.add('errorHeight')
        mostrarClima.classList.remove('clima')
        slideInSelec.forEach((elemento) =>{
          elemento.classList.add('slideIn')
        })


        setTimeout(() =>{
            princContainer.classList.add('errorHeight')
        },0)




        imagemClima.src = "imagens/404.png"
        mostrarCidade.innerText = 'Error 404';
        mostrarClima.innerText = '';
        moreClima.style.display = 'none';
        
    }

    


 }


// Pegar o valor do input (cidade)

function minhaFunc(){
    cidade = cidadePesquisa.value.trim()
    princContainer.classList.remove('errorHeight')
    slideInSelec.forEach((elemento) =>{
      elemento.classList.remove('slideIn')
    })
    puxarDados(cidade)
    
    
}

// Ativar minha função ao clique.

btnPesquisa.addEventListener('click', minhaFunc)



