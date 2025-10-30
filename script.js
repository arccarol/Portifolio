// --- Google Analytics (GA4) --- //
(function() {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-73HCTKS4C4';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ window.dataLayer.push(arguments); }; // <- define gtag global

  script.onload = function() {
    gtag('js', new Date());
    gtag('config', 'G-73HCTKS4C4');
    console.log('✅ GA4 carregado');
  };
})();


//baixar curriculo automaticamente

    function downloadPDF() {
        const link = document.createElement('a');
        link.href = './Curriculo.pdf';
        link.download = 'Curriculo.pdf';
        link.click();
    }
//menu
    const menuIcon = document.querySelector('.fa-bars');  // Seleciona o ícone do menu usando a classe Font Awesome
    const navLinks = document.querySelector('.nav-links');
    
    menuIcon.onclick = () => {
        navLinks.classList.toggle('active');
    };
    

  const cards = document.querySelectorAll('.skill-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(cards).indexOf(entry.target);
        const directionClass = index % 2 === 0 ? 'slide-in-left' : 'slide-in-right';
        entry.target.classList.add(directionClass);
        observer.unobserve(entry.target); // Remove após animar
      }
    });
  }, {
    threshold: 0.1 // 10% visível já ativa
  });

  cards.forEach(card => observer.observe(card));

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.skill-card');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
          observer.unobserve(entry.target); // remove o observer após animação
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
  });

  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const index = Array.from(cards).indexOf(card);
  
          if (index % 2 === 0) {
            card.classList.add('slide-in-right'); // índice par = da direita
          } else {
            card.classList.add('slide-in-left'); // índice ímpar = da esquerda
          }
  
          observer.unobserve(card); // Para de observar depois da animação
        }
      });
    }, {
      threshold: 0.1 // 10% do card visível para ativar
    });
  
    cards.forEach(card => observer.observe(card));
  });
  


  document.addEventListener("DOMContentLoaded", () => {
    const leftItems = document.querySelectorAll('.project-card.horizontal:nth-child(odd)');
    const rightItems = document.querySelectorAll('.project-card.horizontal:nth-child(even)');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (leftItems.includes(entry.target)) {
            entry.target.classList.add('slide-in-left');
          } else if (rightItems.includes(entry.target)) {
            entry.target.classList.add('slide-in-right');
          }
          observer.unobserve(entry.target); // só anima uma vez
        }
      });
    }, {
      threshold: 0.1
    });
  
    leftItems.forEach(item => observer.observe(item));
    rightItems.forEach(item => observer.observe(item));
  });

  
  function openPDF() {
    window.open('Curriculo.pdf', '_blank');
}

//botao CV
document.addEventListener('DOMContentLoaded', () => {
  const botaoCV = document.querySelector('a[href="Curriculo.pdf"]');

  if (botaoCV) {
    botaoCV.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'abrir_cv', {
          event_category: 'Currículo',
          event_label: 'Botão Abrir CV',
          value: 1
        });
        console.log('📄 Evento enviado: abrir_cv');
      } else {
        console.warn('⚠️ gtag ainda não foi carregado.');
      }
    });
  } else {
    console.warn('⚠️ Botão "Abrir CV" não encontrado.');
  }
});

