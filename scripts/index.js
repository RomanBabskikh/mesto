const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__button');
const popupCloseButton = document.querySelector('.popup__close');
const title = document.querySelector('.profile__name');
const subTitle = document.querySelector('.profile__description');
const form = document.querySelector('.popup__form');
const nameField = document.querySelector('.popup__input_name');
const nameField2 = document.querySelector('.popup__input_info');


function showPopup(){
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click' , showPopup);


function closePopup(){
    popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click' , closePopup);



function submitForm(event){
    event.preventDefault();
    title.textContent = nameField.value;
    subTitle.textContent = nameField2.value;
    closePopup();
}

form.addEventListener('submit', submitForm)


// function submitForm2(event){
//     event.preventDefault();
//    subTitle.textContent = nameField2.value;

// }

// form.addEventListener('submit', submitForm2);




