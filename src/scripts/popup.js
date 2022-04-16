export class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._popupCloseBiutton = this._popupElement.querySelector('.popup__close');
    }
    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', (e) => this._handleEscClose(e));
    }
    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', (e) => this._handleEscClose(e));
    }
    _handleEscClose(evt) {
        const ESC_CODE = 'Escape';
        if (evt.key === ESC_CODE) {
            this.close();
        }
    }
    _setEventListeners() {
        this._popupCloseBiutton.addEventListener('click', (e) => this.close());
    }
}