function createChoice(choice) {
    let label = document.createElement('label');
    choice.className = 'choice';

    let radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = choice.id;
    radio.required = true;
    
    label.appendChild(radio);
    
    const description = document.createElement('span');
    description.textContent = choice.description;

    label.appendChild(description);

    return label;
}

export default createChoice;