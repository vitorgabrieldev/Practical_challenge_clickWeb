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
        secondItem.classList.remove('animate__slideInLeft');
        
        secondItem.classList.add('animate__animated', 'animate__slideInRight');
        
        window.removeEventListener('scroll', animateSecondItem);
    }
}

window.addEventListener('scroll', animateSecondItem);