const button = document.querySelector(".convert") //variavel para chamar class do botão
const selectopt = document.querySelector(".select-valor")

    function convertvalue() {
        const inputvalue = document.querySelector(".input-valor").value //variavel para capturar o valor digitado.
        const Vconvertido = document.querySelector(".valor-convertido") //variavel para mostrar o resultado final no html

        const Dolartoday = 5.2 //variavel para guardar o cotação do dia.
        const Eurotoday = 6.2 //variavel para guardar o cotação do dia.
        const libratoday  = 7.2 //variavel para guardar o cotação do dia.
        const bitcointoday = 15.2 //variavel para guardar o cotação do dia.

        const Rvalue = document.querySelector(".repet-valor") //variavel para capturar e repetir o valor abaixo. 
        Rvalue.innerHTML = new Intl.NumberFormat("pt-BR", { 
            style: "currency", 
            currency: "BRL" }).format(inputvalue)
            
        if(selectopt.value=="dolar") //se for dolar, entrar nessa condição
        Vconvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "USD" }).format(inputvalue / Dolartoday)

        if(selectopt.value=="euro") //se for euro, entrar nessa condição
            Vconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", 
            currency: "EUR" }).format(inputvalue / Eurotoday)

        if(selectopt.value=="libra") //se for libra, entrar nessa condição
        Vconvertido.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency", 
            currency: "GBP" }).format(inputvalue / libratoday)

        if(selectopt.value=="bitcoin") //se for bitcoin, entrar nessa condição
            Vconvertido.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency", 
            currency: "BTC" }).format(inputvalue / bitcointoday)

}

    function mudarmoeda(){
        const valorNome = document.getElementById("nome-valor") //quando for utilizar ID não utilizar o ponto
        const imageValor = document.querySelector(".image-valor")

        if(selectopt.value=="dolar"){
            valorNome.innerHTML = "Dólar amricano"
            imageValor.src = "./Assets/pictures/USA.png"
        }

        if(selectopt.value=="euro"){
            valorNome.innerHTML = "Euro"
            imageValor.src = "./Assets/pictures/Euro.png"
        }

        if(selectopt.value=="libra"){
            valorNome.innerHTML = "Libra esterlina"
            imageValor.src = "./Assets/pictures/Libra.png"
        }

        if(selectopt.value=="bitcoin"){
            valorNome.innerHTML = "Bitcoin"
            imageValor.src = "./Assets/pictures/bitcoin.png"
        }

        convertvalue()
        
    }

button.addEventListener("click", convertvalue)
selectopt.addEventListener("change", mudarmoeda)
