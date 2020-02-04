function completedLink(quest) {
    const span = document.createElement('span');
    span.classList.add('completed');
    span.classList.add('quest');

    span.style.top = quest.map.top;
    span.style.left = quest.map.left;
    span.textContent = quest.title;

    return span;
}

export default completedLink;
