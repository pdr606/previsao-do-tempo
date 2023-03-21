const APIkey = '4bdebe3f6b67aa9a49266cc15d9aae01'

 
 async function puxarDados(){
    try{
        const cidade = "Linhares"
        const responseDados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${APIkey}&lang=pt_br`)
        const jsonDados = await responseDados.json()
        console.log(jsonDados.main.temp)
        
    } catch(erro){
        console.log(erro)
    }

 }

 puxarDados()