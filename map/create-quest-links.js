function createLinks(quest) {
    const link = document.createElement('a');
    link.classList.add('quest');

    link.textContent = quest.title;
    link.href = '../quest/?id=' + quest.id;

    link.style.top = quest.map.top;
    link.style.left = quest.map.left;

    return link;
}

export default createLinks;