

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
    