// material de apoio: https://www.freecodecamp.org/news/javascript-math-random-method-explained/
//https://pt.stackoverflow.com/questions/52418/como-limpar-campos-de-formulario-html

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
        alert (`Parabéns!! Você acertou o número: ${numeroEscolhido} `)
        numeroInformado.value = ''
    }else if(numeroInformado.value == ''){
        alert('Você não informou nenhum número')
    }else if(numeroInformado.value > 10){
        alert(`O número ${numeroInformado.value} é maior que 10! Informe um número entre 1 e 10`)
        numeroInformado.value = ''
    }else{
        alert(`Não foi dessa vez! O número sorteado foi: ${numeroEscolhido}`)
        numeroInformado.value = ''
    }
        
}