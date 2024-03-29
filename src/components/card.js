export class Card {
    constructor(data, cardSelector, openPopupFn) {
        this._image = data.link;
        this._text = data.name;
        this._cardSelector = cardSelector;
        this._openPopupFn = openPopupFn;
        //this._popupImageElement = document.querySelector(popupImageSelector);
    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector) //нашел template-элемент с классом horizontal-card ^ а потои подготовиk к маштабированию
            .content // извлек его содержимое
            .querySelector('.element') //в содержимом найдём элемент с классом card
            .cloneNode(true); //клонируем его

        return cardElement; //возврашаем карточку
    }

    _toggleLike(e) {
        e.target.classList.toggle('element__button-like_active');
    }
    _deleteCard(cardElement) {
        cardElement.remove()
        cardElement = null;
    }
    generateCard() { // метод который вставит данные в разметку и подготовит карточку к публикации
        this._element = this._getTemplate();
        const elementImage = this._element.querySelector('.element__image');
        elementImage.src = this._image //data-информация из массива
        elementImage.addEventListener('click', this._handleCardClick);
        elementImage.alt = this._text;
        this._element.querySelector('.element__text').textContent = this._text; //data-информация из массива
        this._element.querySelector('.element__button-like').addEventListener('click', this._toggleLike); //добавление лайка без присвоения переменной
        this._element.querySelector('.element__button-delete').addEventListener('click', (e) => this._deleteCard(this._element)); //удаление карточки без присвоения переменной
        return this._element; // карточки готовы ,осталось их опубликовать
    }
    _handleCardClick = () => {
        this._openPopupFn({ name: this._text, link: this._image });
    }


}