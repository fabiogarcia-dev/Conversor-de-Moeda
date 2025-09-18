const ButtonConvert = document.querySelector(".convert")
const moeda = document.querySelector(".select-valor")

async function clickconvert(){
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    console.log(data)
    const valorbr = document.querySelector(".input-valor").value
    const dolartoday = data.USDBRL.high
    const eurotoday = data.EURBRL.high
    const libratoday = 8.50
    const bitcointoday = data.BTCBRL.high

    
    

    if (moeda.value == "dolar"){
    const repet = document.querySelector(".repet-valor")
    repet.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorbr) 
    const Rvalor = document.querySelector(".valor-convertido")
    Rvalor.innerHTML = new Intl.NumberFormat('eu-US', { style: 'currency', currency: 'USD' }).format(valorbr/dolartoday)
    }

    if (moeda.value == "euro"){
        const repet = document.querySelector(".repet-valor")
        repet.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorbr) 
        const Rvalor = document.querySelector(".valor-convertido")
        Rvalor.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorbr/eurotoday)
        }
    
    if (moeda.value == "libra"){
        const repet = document.querySelector(".repet-valor")
        repet.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorbr) 
        const Rvalor = document.querySelector(".valor-convertido")
        Rvalor.innerHTML = new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(valorbr/libratoday)
    }

    if (moeda.value == "bitcoin"){
        const repet = document.querySelector(".repet-valor")
        repet.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorbr) 
        const Rvalor = document.querySelector(".valor-convertido")
        Rvalor.innerHTML = new Intl.NumberFormat('es-SV', { style: 'currency', currency: 'BTC' }).format(valorbr/bitcointoday)
    }
               
}

    function changeimg(){
        const name = document.getElementById("nome-valor")
        const imgnw = document.querySelector(".image-valor")

        if(moeda.value=="dolar"){
        name.innerHTML = "Dolar americano"
        imgnw.src = "./Assets/pictures/USA.png"
        }

        if(moeda.value=="euro"){
            name.innerHTML = "Euro"
            imgnw.src = "./Assets/pictures/Euro.png"
        }

        if(moeda.value=="libra"){
            name.innerHTML = "Libra Esterlina"
            imgnw.src = "./Assets/pictures/Libra.png"
        }

        if(moeda.value=="bitcoin"){
            name.innerHTML = "Bitcoin"
            imgnw.src = "./Assets/pictures/bitcoin.png"
        }

        clickconvert()
    }

ButtonConvert.addEventListener("click", clickconvert)
moeda.addEventListener("change", changeimg)



