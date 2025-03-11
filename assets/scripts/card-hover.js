function handleMouseEnter() {
    this.classList.add('s-card--hovered');
    document.body.id =`${this.id}--hovered`;
}

function handleMouseLeave() {
 this.classList.remove('s-card--hovered')
 document.body.id = ''
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('s-card');

    //loop pra quando eu colocar o mouse ensima do card
    for (let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i];
        card.addEventListener("mouseenter", handleMouseEnter);//adciona um evento ao colocar o mouse encima
        card.addEventListener("mouseleave", handleMouseLeave);//remove a classe ao tirar o mouse de cima do card
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false)