

export function activateProtection() {
 
  // 1. BLOQUEAR CLIQUE DIREITO
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
 
  // 2. BLOQUEAR ATALHOS DE TECLADO
  document.addEventListener('keydown', (e) => {
    // F12
    if (e.key === 'F12') {
      e.preventDefault();
    }
    // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) {
      e.preventDefault();
    }
    // Ctrl+U (ver fonte)
    if (e.ctrlKey && ['U', 'u'].includes(e.key)) {
      e.preventDefault();
    }
    // Ctrl+S (salvar página)
    if (e.ctrlKey && ['S', 's'].includes(e.key)) {
      e.preventDefault();
    }
    // Ctrl+A (selecionar tudo)
    if (e.ctrlKey && ['A', 'a'].includes(e.key)) {
      e.preventDefault();
    }
  });
 
  // 3. TELA BRANCA QUANDO DEVTOOLS ABRIR
  const threshold = 160;
  let devtoolsOpen = false;
 
  const checkDevTools = () => {
    const widthDiff = window.outerWidth - window.innerWidth > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;
 
    if (widthDiff || heightDiff) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        document.body.innerHTML = '';
        document.body.style.background = '#ffffff';
      }
    } else {
      devtoolsOpen = false;
    }
  };
 
  setInterval(checkDevTools, 500);
 
  // 4. BLOQUEAR SELEÇÃO DE TEXTO
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
  });
 
  // 5. BLOQUEAR ARRASTAR IMAGENS
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });
 
  // 6. BLOQUEAR CÓPIA DE CONTEÚDO
  document.addEventListener('copy', (e) => {
    e.preventDefault();
  });
 
  // 7. CSS — DESABILITAR SELEÇÃO VISUAL
  const style = document.createElement('style');
  style.innerHTML = `
    * {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
      -webkit-user-drag: none !important;
    }
    img {
      pointer-events: none !important;
      -webkit-user-drag: none !important;
    }
  `;
  document.head.appendChild(style);
}
