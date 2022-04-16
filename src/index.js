import { Card } from './scripts/card.js';
import { FormValidator } from './scripts/FormValidator.js';
import { Section } from './scripts/section.js';
import { UserInfo } from './scripts/userinfo.js';
import { PopupWithImage } from './scripts/PopupWithImage.js';
import { PopupWithForm } from './scripts/PopupWithForm.js';
import './index.css';

/** ПРоектная работа 4 */
const popupProfile = document.querySelector('.popup_type_profile');
const editButton = document.querySelector('.profile__button');
const popupProfileCloseButton = document.querySelector('.popup__close_type_profile');
const title = document.querySelector('.profile__name');
const subTitle = document.querySelector('.profile__description');
const profileForm = document.querySelector('.popup__form');
const nameField = document.querySelector('.popup__input_type_name');
const infoField = document.querySelector('.popup__input_type_info');
const ESC_CODE = 'Escape';
const modalPopups = document.querySelectorAll('.popup');
const formEditCard = document.querySelector('.popup__form_type_name');
const formAddCard = document.querySelector('.popup__form_type_mesto');
const initialCards = [{
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'

    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'

    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'

    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    }
];

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__error',
    errorClass: 'popup__error_activity'
}





//функция закрытия попапаов по esc 
function closeByEsc(evt) {
    if (evt.key === ESC_CODE) {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}



// функция по открытию всех попапов
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);

}

//функция по запкрытыю всех попапов
export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);

}



//функция по открытию попапа/ редактирования/
// function showPopupProfile() {
//     openPopup(popupProfile);
//     nameField.value = title.textContent;
//     infoField.value = subTitle.textContent;
// }
const profileFormNameSelector = 'input-name';
const profileFormInfoSelector = 'input-info';
let userInfo = new UserInfo({ nameSelector: '.profile__name', descriptionSelector: '.profile__description' });
const popupFormProfile = new PopupWithForm('.popup_type_profile', (e, formData) => {
    e.preventDefault();
    userInfo.setUserInfo(formData[profileFormNameSelector], formData[profileFormInfoSelector]);
    popupFormProfile.close()
});
popupFormProfile._setEventListeners();
editButton.addEventListener('click', (e) => {
    const info = userInfo.getUserInfo();
    nameField.value = info.title;
    infoField.value = info.subTitle;
    popupFormProfile.open()
});




//функция по закрытию попапа редактирования//
// function closePopupProfile() {
//     closePopup(popupProfile);
// }
// popupProfileCloseButton.addEventListener('click', closePopupProfile);



//закрытие по оверлай 

modalPopups.forEach((popup) => {
    popup.addEventListener('click', function(evt) {
        if (evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup')) {
            closePopup(popup);
        }
    });
})


//функция по форме//
// function submitFormEdit(event) {
//     event.preventDefault();
//     title.textContent = nameField.value;
//     subTitle.textContent = infoField.value;
//     closePopup(popupProfile);
// }

// profileForm.addEventListener('submit', submitFormEdit)

/** Конец */

/**Проектная работа 5**/


const popupMesto = document.querySelector('.popup_type_mesto');
const addMesto = document.querySelector('.profile__add-button');
const popupMestoCloseButton = document.querySelector('.popup__close_type_mesto');
const urlField = document.querySelector('.popup__input_type_url');
const mestoField = document.querySelector('.popup__input_type_mesto');
const formMesto = document.querySelector('.popup__form_type_mesto');

function showPopupMesto() {
    const submitButton = formMesto.querySelector('.popup__button');
    submitButton.disabled = true;
    submitButton.classList.add('popup__button_disabled');
    openPopup(popupMesto);

}

// ОТКРЫТЫИЕ ВОТОРОГО ПОПАП
addMesto.addEventListener('click', showPopupMesto); // открывает второй попап


//ЗАКРЫТЫЕ ВТОРОГО ПОПАП
function closePopupMesto() {
    closePopup(popupMesto);
}
popupMestoCloseButton.addEventListener('click', closePopupMesto);

//ФОРМА ВТОРОГО ПОПАП


function submitFormMesto(event) {
    event.preventDefault();
    const card = createCard({ name: mestoField.value, link: urlField.value });
    elements.prepend(card);
    event.target.reset();
    closePopup(popupMesto); //работает
}
formMesto.addEventListener('submit', submitFormMesto);



// создаем экземпляр класса форм
const addFormValidator = new FormValidator(config, formAddCard);
const editFormValidator = new FormValidator(config, formEditCard);

// функции проверки форм
addFormValidator.enableValidation();
editFormValidator.enableValidation();
// добавляем в разметку карточки

const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;

const popupWithImage = new PopupWithImage('.popup_type_image');

function createCard(data) {
    const card = new Card(data, '#element-template', popupWithImage.open);
    return card.generateCard();
}
popupWithImage._setEventListeners();

const section = new Section({ items: initialCards, renderer: createCard }, '.elements');
section.drawElements();

// initialCards.forEach(function(data) { //отрисовываем карточки(перебиранием массива)
//     const card = createCard(data);
//     elements.prepend(card);


// });