// material de apoio: https://www.freecodecamp.org/news/javascript-math-random-method-explained/
//https://pt.stackoverflow.com/questions/52418/como-limpar-campos-de-formulario-html

const numeroInformado = document.getElementById('numero-informado')
const mensagemPopUp = document.querySelector('.pop-up')



function alertaNumero(){
    if(numeroInformado.value != ''){
        return alert(`O número informado foi ${numeroInformado.value}`)
        
    }else{
        return alert('Você não informou nenhum número')
    }
}

function popUpErro(){
   
    mensagemPopUp.innerHTML = '<p>Você errou!</p>'
    mensagemPopUp.classList.remove('acerto-pop-up')

    mensagemPopUp.classList.add('erro-pop-up')
    mensagemPopUp.classList.add('pop-up-ativado')
   
}

function popUpNone(){
    mensagemPopUp.classList.remove('pop-up-ativado')
}

function popUpAcerto(){
    mensagemPopUp.classList.remove('erro-pop-up')   
    mensagemPopUp.innerHTML = '<p>Você Acertou!! Parabéns!</p>'

    mensagemPopUp.classList.add('pop-up-ativado')
    mensagemPopUp.classList.add('acerto-pop-up')
}




// criando a lógica do número aleátorio com math random e floor
function numeroAleatorio(){
    let numeroEscolhido =  Math.floor(Math.random() * 10 + 1)

    if(numeroInformado.value == numeroEscolhido){
        popUpAcerto()
        setTimeout(() =>{
            popUpNone()
        }, 2500)
        numeroInformado.value = ''
    }else if(numeroInformado.value == ''){
        alert('Você não informou nenhum número')
    }else if(numeroInformado.value > 10){
        alert(`O número ${numeroInformado.value} é maior que 10! Informe um número entre 1 e 10`)
        numeroInformado.value = ''
    }else{
        // alert(`Não foi dessa vez! O número sorteado foi: ${numeroEscolhido}`)
        popUpErro()
        setTimeout(() =>{
            popUpNone()
        }, 2500)
        numeroInformado.value = ''
    }
        
}

