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




//функция закрытия попапаов по esc 
function closeByEsc(evt) {
    if (evt.key === ESC_CODE) {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}



// функция по открытию всех попапов
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);

}

//функция по запкрытыю всех попапов
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);

}



//функция по открытию попапа/ редактирования/
function showPopupProfile() {
    openPopup(popupProfile);
    nameField.value = title.textContent;
    infoField.value = subTitle.textContent;
}
editButton.addEventListener('click', showPopupProfile);




//функция по закрытию попапа редактирования//
function closePopupProfile() {
    closePopup(popupProfile);
}
popupProfileCloseButton.addEventListener('click', closePopupProfile);



//закрытие по оверлай 

modalPopups.forEach((popup) => {
    popup.addEventListener('click', function(evt) {
        if (evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup')) {
            closePopup(popup);
        }
    });
})


//функция по форме//
function submitFormEdit(event) {
    event.preventDefault();
    title.textContent = nameField.value;
    subTitle.textContent = infoField.value;
    closePopup(popupProfile);
}

profileForm.addEventListener('submit', submitFormEdit)

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
    drawCard({ name: mestoField.value, link: urlField.value });
    event.target.reset();

    closePopup(popupMesto); //работает
}
formMesto.addEventListener('submit', submitFormMesto);




// добавляем в разметку карточки

const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;


function drawCard(data) {
    const cardElement = createCard(data);



    elements.prepend(cardElement);

}

function createCard(data) {
    const cardElement = elementTemplate.querySelector('.element').cloneNode(true);

    cardElement.querySelector('.element__image').src = data.link; //data-информация из массива
    cardElement.querySelector('.element__image').addEventListener('click', (e) => showPopupImage(data));
    cardElement.querySelector('.element__image').alt = 'Название карртинки';
    cardElement.querySelector('.element__text').textContent = data.name; //data-информация из массива
    cardElement.querySelector('.element__button-like').addEventListener('click', function(event) {
        event.target.classList.toggle('element__button-like_active'); //добавление лайка без присвоения переменной
    });

    cardElement.querySelector('.element__button-delete').addEventListener('click', function(event) {
        event.target.closest('.element').remove(); //удаление карточки без присвоения переменной
    });

    return cardElement;
}



initialCards.forEach(function(data) { //отрисовываем карточки(перебиранием массива)
    drawCard(data);
});



// ФУНКЦИЯ ПОТ ОТКРЫТЫЮ ПОПАП - 3(КАРТИНКА)

const butoonClosePopupImage = document.querySelector('.popup__close_type_image');
const popupImage = document.querySelector('.popup_type_image');




function showPopupImage(data) {

    const bigPopupImage = document.querySelector('.popup__image');
    const popupImageText = document.querySelector('.popup__image-text');
    // popupImage.classList.add('popup_opened');
    openPopup(popupImage);
    bigPopupImage.src = data.link;
    bigPopupImage.alt = data.name;
    popupImageText.textContent = data.name;

}
butoonClosePopupImage.addEventListener('click', closePopupImage);

//функция по закрытию 3 попапа
function closePopupImage() {
    closePopup(popupImage);
}