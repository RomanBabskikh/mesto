/** ПРоектная работа 4 */
const popupProfile = document.querySelector('.popup_profile');
const editButton = document.querySelector('.profile__button');
const popupProfileCloseButton = document.querySelector('.popup__close_profile');
const title = document.querySelector('.profile__name');
const subTitle = document.querySelector('.profile__description');
const form = document.querySelector('.popup__form');
const nameField = document.querySelector('.popup__input_name');
const infoField = document.querySelector('.popup__input_info');

//функция по открытию попапа//
function showPopupProfile() {
    popupProfile.classList.toggle('popup_opened');
    nameField.value = title.textContent;
    infoField.value = subTitle.textContent;
}
editButton.addEventListener('click', showPopupProfile);


//функция по закрытию попапа//
function closePopup() {
    popupProfile.classList.toggle('popup_opened');
}
popupProfileCloseButton.addEventListener('click', closePopup);




//функция по форме//
function submitForm(event) {
    event.preventDefault();
    title.textContent = nameField.value;
    subTitle.textContent = infoField.value;
    closePopup();
}

form.addEventListener('submit', submitForm)

/** Конец */