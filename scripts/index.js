const popup = document.querySelector('.popup');
const popupFoto = document.querySelector('.popup__foto');
const editButton = document.querySelector('.profile__button');
const editButton2 = document.querySelector('.profile__add-button');
const popupCloseButton = document.querySelector('.popup__close');
const title = document.querySelector('.profile__name');
const subTitle = document.querySelector('.profile__description');
const form = document.querySelector('.popup__form');
const nameField = document.querySelector('.popup__input_name');
const infoField = document.querySelector('.popup__input_info');

//функция по открытию попапа//
function showPopup(){
    popup.classList.add('popup_opened');
    nameField.value = title.textContent;
    infoField.value = subTitle.textContent;
}
editButton.addEventListener('click' , showPopup);


//функция по открытию попапа 2//
function showPopupFoto(){
    popupFoto.classList.add('popup_opened');
}
editButton2.addEventListener('click' , showPopupFoto);


//функция по закрытию попапа//
function closePopup(){
    popup.classList.remove('popup_opened');
}
popupCloseButton.addEventListener('click' , closePopup);

//функция по закрытию попапа 2//
function closePopupFoto(){
    popupFoto.classList.remove('popup_opened');
}
popupFotoCloseButton.addEventListener('click' , closePopupFoto);





//функция по форме//
function submitForm(event){
    event.preventDefault();
    title.textContent = nameField.value;
    subTitle.textContent = infoField.value;
    closePopup();
}

form.addEventListener('submit', submitForm)






