export class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._popupCloseBiutton = this._popupElement.querySelector('.popup__close');
    }
    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose = (evt) => {
        const ESC_CODE = 'Escape';
        if (evt.key === ESC_CODE) {
            this.close();
        }
    }
    setEventListeners() {
        this._popupElement.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
                this.close();
            }
        });
    }
}