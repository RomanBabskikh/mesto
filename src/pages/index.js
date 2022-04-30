import { Card } from '../components/card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/section.js';
import { UserInfo } from '../components/userinfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import './index.css';
import { initialCards, config, profileFormNameSelector, profileFormInfoSelector, mestoFormNameSelector, urlFormSelector } from '../utils/constants.js';

/** ПРоектная работа 4 */
const editButton = document.querySelector('.profile__button');
const nameField = document.querySelector('.popup__input_type_name');
const infoField = document.querySelector('.popup__input_type_info');
const formEditCard = document.querySelector('.popup__form_type_name');
const formAddCard = document.querySelector('.popup__form_type_mesto');
//const elements = document.querySelector('.elements');

// создаем экземпляр класса форм
const addFormValidator = new FormValidator(config, formAddCard);
const editFormValidator = new FormValidator(config, formEditCard);

const userInfo = new UserInfo({ nameSelector: '.profile__name', descriptionSelector: '.profile__description' });
const popupFormProfile = new PopupWithForm('.popup_type_profile', (e, formData) => {
    userInfo.setUserInfo(formData[profileFormNameSelector], formData[profileFormInfoSelector]);
    popupFormProfile.close()
});
popupFormProfile.setEventListeners();
editButton.addEventListener('click', (e) => {
    const info = userInfo.getUserInfo();
    nameField.value = info.title;
    infoField.value = info.subTitle;
    popupFormProfile.open()
});


// добавляем в разметку карточки
const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

function createCard(data) {
    const card = new Card(data, '#element-template', popupWithImage.open);
    return card.generateCard();
}

const section = new Section({ items: initialCards, renderer: createCard }, '.elements');
section.drawElements();

const popupFormMesto = new PopupWithForm('.popup_type_mesto', (e, formData) => {
    const card = createCard({ name: formData[mestoFormNameSelector], link: formData[urlFormSelector] });
    section.addItem(card);
    e.target.reset();
    popupFormMesto.close()
});
popupFormMesto.setEventListeners();
const addMestoButton = document.querySelector('.profile__add-button');
addMestoButton.addEventListener('click', (e) => {
    const submitButton = formAddCard.querySelector('.popup__button');
    submitButton.disabled = true;
    submitButton.classList.add('popup__button_disabled');
    addFormValidator.toggleButtonState()
    popupFormMesto.open()
});


// функции проверки форм
addFormValidator.enableValidation();
editFormValidator.enableValidation();