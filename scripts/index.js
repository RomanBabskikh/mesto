
/** ПРоектная работа 4 */
const popupProfile = document.querySelector('.popup__profile');
const popupFoto = document.querySelector('.popup__foto');
const editButton = document.querySelector('.profile__button');
const editAddButton = document.querySelector('.profile__add-button');
const popupProfileCloseButton = document.querySelector('.popup__close_profile');
const popupFotoCloseButton = document.querySelector('.popup__close_foto');
const title = document.querySelector('.profile__name');
const subTitle = document.querySelector('.profile__description');
const form = document.querySelector('.popup__form');
const nameField = document.querySelector('.popup__input_name');
const infoField = document.querySelector('.popup__input_info');

//функция по открытию попапа//
function showPopupProfile(){
    popupProfile.classList.add('popup_opened');
    nameField.value = title.textContent;
    infoField.value = subTitle.textContent;
}
editButton.addEventListener('click' , showPopupProfile);


//функция по открытию попапа 2//
function showPopupFoto(){
    popupFoto.classList.add('popup_opened');
}
editAddButton.addEventListener('click' , showPopupFoto);


//функция по закрытию попапа//
function closePopup(){
    let openedPopup = document.querySelector('.popup_opened');
    openedPopup.classList.remove('popup_opened');
}
popupProfileCloseButton.addEventListener('click' , closePopup);
popupFotoCloseButton.addEventListener('click' , closePopup);



//функция по форме//
function submitForm(event){
    event.preventDefault();
    title.textContent = nameField.value;
    subTitle.textContent = infoField.value;
    closePopup();
}

form.addEventListener('submit', submitForm)

/** Конец */


/** Проектная работа 5 */


const placeList = document.querySelector('.elements');
const initialCards = [
  {
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

// функция которая вставляет карточку в html
// function insertCard(name, link){
//   placeList.insertAdjacentHTML('afterbegin' , `<div class="element">
//     <img class="element__image" src="${link}" alt="${name}">
//     <div class="element__info">
//         <h2 class="element__text">${name}</h2>
//         <button type="button" class="element__button-like"></button>
//     </div>
// </div>`)

// }

function insertCard(name, link) {
  const cardTemplate = document.querySelector('#element-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src=link;
  cardElement.querySelector('.element__text').textContent = name;
  cardElement.querySelector('.element__button-like').addEventListener('click', function (evt){
    evt.target.classList.toggle('element__button-like-active');
  })
  placeList.prepend(cardElement);/
  
}




//Для каждого элемента массива initialCards делаем вставку в блок elements
function drawCards(){
for (let i=0;i<initialCards.length;i++){
  insertCard(initialCards[i].name, initialCards[i].link);

}

}
window.addEventListener('DOMContentLoaded' , drawCards);

//Добавляем карточку и закрываем попап по отправке карточки
const fotoInputNAme = document.querySelector('.popup__foto_input-name');
const fotoInputLink = document.querySelector('.popup__foto_input-link'); 
const fotoForm = document.querySelector('.popup__foto_form');

function addCards(event){
  event.preventDefault();
  insertCard(fotoInputNAme.value,fotoInputLink.value);
  closePopup();
}
fotoForm.addEventListener('submit' , addCards);

