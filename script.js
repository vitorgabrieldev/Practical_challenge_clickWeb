function addAnimationClass() {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const margin = 100;

        if (itemPosition < windowHeight - margin) {
            item.classList.add('animate__animated', 'animate__slideInLeft');
        };
    });
}

window.addEventListener('scroll', addAnimationClass);

addAnimationClass();

const secondItem = document.querySelector('.second-item');

function animateSecondItem() {
    const itemPosition = secondItem.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const margin = 100;

    if (itemPosition < windowHeight - margin) {
        // Remove a classe de animação da esquerda, se estiver presente
        secondItem.classList.remove('animate__slideInLeft');
        
        // Adiciona a classe de animação da direita
        secondItem.classList.add('animate__animated', 'animate__slideInRight');
        
        // Remove o ouvinte de evento de rolagem após a animação ser aplicada
        window.removeEventListener('scroll', animateSecondItem);
    }
}

window.addEventListener('scroll', animateSecondItem);