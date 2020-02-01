function completedLink(quest) {
    const span = document.createElement('span');
    span.classList.add('completed');
    span.classList.add('quest');

    span.style.top = quest.style.top;
    span.style.left = quest.style.left;
    span.textContent = quest.title;

    return span;
}

export default completedLink;
