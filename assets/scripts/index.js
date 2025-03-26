/**
 * Função chamada quando o mouse entra em um card.
 * Adiciona a classe 's-card--hovered' ao elemento e atualiza o ID do body.
 */
function handleMouseEnter() {
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}--hovered`;
}

/**
 * Função chamada quando o mouse sai de um card.
 * Remove a classe 's-card--hovered' e reseta o ID do body.
 */
function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}

/**
 * Adiciona eventos de "mouseenter" e "mouseleave" a todos os cards.
 */
function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('s-card');
    
    // Itera sobre todos os elementos com a classe 's-card' e adiciona os eventos
    for (let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i];
        card.addEventListener("mouseenter", handleMouseEnter); // Quando o mouse entra
        card.addEventListener("mouseleave", handleMouseLeave); // Quando o mouse sai
    }
}

// Adiciona os eventos aos cards assim que o DOM for carregado
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

/**
 * Seleciona um item do carrossel e ajusta a rotação com base no botão clicado.
 * @param {HTMLElement} selectButtomElement - Elemento do botão que foi clicado.
 */
function selectCarouselItem(selectButtomElement) {
    const selectedItem = selectButtomElement.id; // Obtém o ID do botão selecionado
    const carousel = document.querySelector('.s-card-carousel'); // Seleciona o carrossel
    const transform = carousel.style.transform; // Obtém o valor atual do transform
    
    // Captura o valor da rotação Y dentro da string transform
    const rotateY = transform.match(/rotateY\((-?\d+)deg\)/i);
    
    // Calcula o novo valor da rotação baseado no ID do botão
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    
    // Substitui o valor atual da rotação pelo novo valor calculado
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
    carousel.style.transform = newTransform; // Aplica a nova rotação ao carrossel
    
    // Atualiza o botão ativo no controle
    const activeButtonElement = document.querySelector('.s-controller__button--active');
    activeButtonElement.classList.remove('s-controller__button--active');
    selectButtomElement.classList.add('s-controller__button--active');
}
