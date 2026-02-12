// Selecionar o botão pelo ID
const botao = document.getElementById('botaoMudar');

// Selecionar o corpo (body) da página
const corpo = document.body;

// Adicionar um evento de 'click' ao botão
botao.addEventListener('click', function() {
    
    // Alternar a classe CSS 'modo-escuro' no body
    corpo.classList.toggle('modo-escuro');

    // Mudar o texto do botão dependendo do tema
    if (corpo.classList.contains('modo-escuro')) {
        botao.textContent = "Voltar ao Claro";
    } else {
        botao.textContent = "Mudar Tema";
    }
});
