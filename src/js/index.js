const buttons = document.querySelectorAll(".botao")

buttons.forEach((button) =>{
    button.addEventListener("click", ()=>{
        const buttonComSelecionado = document.querySelector(".botao.selecionado")

        buttonComSelecionado.classList.remove("selecionado")
    
        if(button.classList !== "selecionado"){
         button.classList.add("selecionado")
        }

        const personagemComSelecionado = document.querySelector(".personagem.selecionado")

        personagemComSelecionado.classList.remove("selecionado")
    
        const idButton = button.id
        const personagemParaAbrir = document.getElementById(`personagem-${idButton}`)
        
        personagemParaAbrir.classList.add("selecionado")
    })
})

