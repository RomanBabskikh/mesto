const popup = document.querySelector('.popup');
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
editButton2.addEventListener('click' , showPopup);



//функция по закрытию попапа//
function closePopup(){
    popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click' , closePopup);


//функция по форме//
function submitForm(event){
    event.preventDefault();
    title.textContent = nameField.value;
    subTitle.textContent = infoField.value;
    closePopup();
}

form.addEventListener('submit', submitForm)






