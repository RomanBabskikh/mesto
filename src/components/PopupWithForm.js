import { Popup } from "./popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormCallback) {
        super(popupSelector);
        this._submitFormCallback = submitFormCallback;
        this._form = this._popupElement.querySelector('.popup__form');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    }
    _getInputValues() {
        let _formData = {};
        this._inputList.forEach(element => {
            _formData[element.name] = element.value;
        });
        return _formData;
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const fData = this._getInputValues()
            this._submitFormCallback(evt, fData);
        });
    }
    close() {
        super.close();
        this._form.reset();
    }
}