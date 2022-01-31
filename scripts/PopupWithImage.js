import { Popup } from "./popup.js";

export class PopupWithImage extends Popup {
    constructor(popupImageSelector) {
        super(popupImageSelector);

    }
    open = (item) => {
        super.open();
        const bigPopupImage = this._popupElement.querySelector('.popup__image');
        const popupImageText = this._popupElement.querySelector('.popup__image-text');
        bigPopupImage.src = item.link;
        bigPopupImage.alt = item.name;
        popupImageText.textContent = item.name;
        super.open();
    }
}