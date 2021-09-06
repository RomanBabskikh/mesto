/** ПРоектная работа 4 */
const popupProfile = document.querySelector('.popup_type_profile');
const editButton = document.querySelector('.profile__button');
const popupProfileCloseButton = document.querySelector('.popup__close_type_profile');
const title = document.querySelector('.profile__name');
const subTitle = document.querySelector('.profile__description');
const form = document.querySelector('.popup__form');
const nameField = document.querySelector('.popup__input_type_name');
const infoField = document.querySelector('.popup__input_type_info');



//функция по открытию попапа//
function showPopup() {
    popupProfile.classList.add('popup_opened');
    nameField.value = title.textContent;
    infoField.value = subTitle.textContent;


}
editButton.addEventListener('click', showPopup);




//функция по закрытию попапа//
function closePopup() {
    popupProfile.classList.remove('popup_opened');
}
popupProfileCloseButton.addEventListener('click', closePopup);




//функция по форме//
function submitFormEdit(event) {
    event.preventDefault();
    title.textContent = nameField.value;
    subTitle.textContent = infoField.value;
    closePopup();
}

form.addEventListener('submit', submitFormEdit)

/** Конец */

/**Проектная работа 5**/


const popupMesto = document.querySelector('.popup_type_mesto');
const addMesto = document.querySelector('.profile__add-button');
const popupMestoCloseButton = document.querySelector('.popup__close_type_mesto');

function showPopupMesto() {
    popupMesto.classList.add('popup_opened');

}

// ОТКРЫТЫИЕ ВОТОРОГО ПОПАП
addMesto.addEventListener('click', showPopupMesto); // открывает второй попап


//ЗАКРЫТЫЕ ВТОРОГО ПОПАП
function closePopupMesto() {
    popupMesto.classList.remove('popup_opened');
}
popupMestoCloseButton.addEventListener('click', closePopupMesto); // закрываем втрой попап

//ФОРМА ВТОРОГО ПОПАП
const urlField = document.querySelector('.popup__input_type_url');
const mestoField = document.querySelector('.popup__input_type_mesto');
const formMesto = document.querySelector('.popup__form_type_mesto');

function submitFormMesto(event) {
    event.preventDefault();
    console.log(urlField.value, mestoField.value); //работает
    drawCard({ name: mestoField.value, link: urlField.value });

    closePopupMesto(); //работает
}
formMesto.addEventListener('submit', submitFormMesto);




// добавляем в разметку карточки


const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];





const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;


function drawCard(data) { // добавляем карточки с содержимым
    const cardElement = elementTemplate.querySelector('.element').cloneNode(true);

    cardElement.querySelector('.element__image').src = data.link; //data-информация из массива

    cardElement.querySelector('.element__image').alt = 'Название карртинки';
    cardElement.querySelector('.element__text').textContent = data.name; //data-информация из массива
    cardElement.querySelector('.element__button-like').addEventListener('click', function(event) {
        event.target.classList.toggle('element__button-like_active'); //добавление лайка без присвоения переменной
    });

    cardElement.querySelector('.element__button-delete').addEventListener('click', function(event) {
        // console.log(event);
        event.target.closest('.element').remove(); //удаление карточки без присвоения переменной
    });

    elements.append(cardElement);
}


initialCards.forEach(function(data) { //отрисовываем карточки(перебиранием массива)
    drawCard(data);
});