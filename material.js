var botaoAtividade = document.querySelector('#botao_atividade')

function irAtividade() {
    botaoAtividade.addEventListener("click", function() {
        window.location.href = "atividade.html";
    })
};