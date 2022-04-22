import { Popup } from "./popup.js";

export class PopupWithImage extends Popup {
    constructor(popupImageSelector) {
        super(popupImageSelector);
        this._bigPopupImage = this._popupElement.querySelector('.popup__image');
        this._popupImageText = this._popupElement.querySelector('.popup__image-text');
    }
    open = (item) => {
        super.open();
        this._bigPopupImage.src = item.link;
        this._bigPopupImage.alt = item.name;
        this._popupImageText.textContent = item.name;
        super.open();

    }
}