

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

  