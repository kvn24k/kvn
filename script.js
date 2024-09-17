// Função para mostrar a página correspondente e esconder as outras
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none'); // Ocultar todas as páginas

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.style.display = 'block'; // Mostrar a página selecionada
    }
}

// Função para configurar os botões de navegação
function setupNavigation() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const pageId = button.getAttribute('onclick').match(/'([^']+)'/)[1];
            showPage(pageId);
        });
    });
}

// Inicialização da página
document.addEventListener('DOMContentLoaded', () => {
    showPage('page1'); // Mostrar a página inicial
    setupNavigation(); // Configurar os botões de navegação
});
