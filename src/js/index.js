
document.addEventListener('DOMContentLoaded', () => {
  // (Aqui dentro já tem o código do Filtro e do Carrossel...)
  // Adicione o código abaixo no final, mas ainda dentro do 'DOMContentLoaded'

  // =============================================
  // LÓGICA PARA ABRIR E FECHAR O MENU MOBILE
  // =============================================
  const btnMenu = document.getElementById('btn-menu');
  const menu = document.getElementById('menu-mobile');
  const overlay = document.getElementById('overlay-menu');

  if (btnMenu && menu && overlay) {
    // Evento para abrir o menu
    btnMenu.addEventListener('click', () => {
      menu.classList.add('abrir-menu');
    });

    // Função para fechar o menu
    function fecharMenu() {
      menu.classList.remove('abrir-menu');
    }

    // Eventos que fecham o menu
    menu.addEventListener('click', fecharMenu);
    overlay.addEventListener('click', fecharMenu);
  }
});