import { openPopup, closePopup } from './index.js'

export class Card {
    constructor(data, cardSelector, popupImageSelector) {
        this._image = data.link;
        this._text = data.name;
        this._cardSelector = cardSelector;

        this._popupImageElement = document.querySelector(popupImageSelector);
    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector) //нашел template-элемент с классом horizontal-card ^ а потои подготовиk к маштабированию
            .content // извлек его содержимое
            .querySelector('.element') //в содержимом найдём элемент с классом card
            .cloneNode(true); //клонируем его

        return cardElement; //возврашаем карточку
    }

    _showPopuCardImage() {
        const bigPopupImage = this._popupImageElement.querySelector('.popup__image');
        const popupImageText = this._popupImageElement.querySelector('.popup__image-text');
        bigPopupImage.src = this._image;
        bigPopupImage.alt = this._text;
        popupImageText.textContent = this._text;
        openPopup(this._popupImageElement)

    }
    generateCard() { // метод который вставит данные в разметку и подготовит карточку к публикации
        this._element = this._getTemplate();
        this._element.querySelector('.element__image').src = this._image //data-информация из массива
        this._element.querySelector('.element__image').addEventListener('click', (e) => this._showPopuCardImage());
        this._element.querySelector('.element__image').alt = 'Название карртинки';
        this._element.querySelector('.element__text').textContent = this._text; //data-информация из массива
        this._element.querySelector('.element__button-like').addEventListener('click', function(event) {
            event.target.classList.toggle('element__button-like_active'); //добавление лайка без присвоения переменной
        });

        this._element.querySelector('.element__button-delete').addEventListener('click', function(event) {
            event.target.closest('.element').remove(); //удаление карточки без присвоения переменной
        });


        return this._element; // карточки готовы ,осталось их опубликовать
    }


}


// function showPopupImage(data) {

//     const bigPopupImage = document.querySelector('.popup__image');
//     const popupImageText = document.querySelector('.popup__image-text');
//     // popupImage.classList.add('popup_opened');
//     openPopup(popupImage);
//     bigPopupImage.src = data.link;
//     bigPopupImage.alt = data.name;
//     popupImageText.textContent = data.name;

// }
// butoonClosePopupImage.addEventListener('click', closePopupImage);

// //функция по закрытию 3 попапа
// function closePopupImage() {
//     closePopup(popupImage);
// }