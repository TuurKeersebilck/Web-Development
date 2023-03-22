const setup = () => {

const nieuwElement = document.createElement('p');
nieuwElement.textContent = 'Good Job?';

const oudElement = document.querySelectorAll('p')[0];
oudElement.replaceWith(nieuwElement);

    
    
}

window.addEventListener("load", setup);