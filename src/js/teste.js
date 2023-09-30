const buttons = document.querySelectorAll(".botao");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const buttonComSelecionado = document.querySelector(".botao.selecionado");
        const personagemComSelecionado = document.querySelector(".personagem.selecionado");

        buttonComSelecionado.classList.remove("selecionado");
        personagemComSelecionado.classList.remove("selecionado");

        button.classList.add("selecionado");

        const personagens = document.querySelectorAll(".personagem");
        personagens[index].classList.add("selecionado");
    });
});