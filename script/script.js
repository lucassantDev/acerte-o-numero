// material de apoio: https://www.freecodecamp.org/news/javascript-math-random-method-explained/

const numeroInformado = document.getElementById('numero-informado')

function alertaNumero(){
    if(numeroInformado.value != ''){
        return alert(`O número informado foi ${numeroInformado.value}`)
        
    }else{
        return alert('Você não informou nenhum número')
    }
}


// criando a lógica do número aleátorio com math random e floor
function numeroAleatorio(){
    let numeroEscolhido =  Math.floor(Math.random() * 9 + 1)

    if(numeroInformado.value == numeroEscolhido){
        return alert (`Parabéns!! Você acertou o número: ${numeroEscolhido} `)
    }else{
        return alert(`Não foi dessa vez! O número sorteado foi: ${numeroEscolhido}`)
    }
        
}