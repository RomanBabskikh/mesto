
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

//обьявили переменную 
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


// функция по отрисовке карточки
function insertCard(name, link) {
  const cardTemplate = document.querySelector('#element-template').content; // получаем template
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true); // из шаблона содаем элемент
  // получить элемент картинку из карточки
  // начало
  const image = cardElement.querySelector('.element__image'); // получаем картинку
  image.src = link; // у эелемента картинки присваиваем свойсту src значение из переменной link
  image.alt = name; // у элемента картинки присваиваем свойству alt значение из переменной name 
  // навешиваем слушатель для клика
  image.addEventListener('click' , function(evt){ 
    const popupImageTemplate = document.querySelector('#image-template').content;// получаем шаблон попапа
    const popupImageElement = popupImageTemplate.querySelector('.popup_opened').cloneNode(true);// из шаблона создаем элемент
    const popupOpenedImageElement = popupImageElement.querySelector('.popup__image');// получаем снова картинку БОЛЬШУЮ(попапа)
    popupOpenedImageElement.src = evt.target.src; // присваиваем  свойсту src элемента попапа значение из элемента который был передан внутри event 
    popupOpenedImageElement.alt = evt.target.alt; // тоже самое что выше,только с alt
    placeList.append(popupImageElement); // добавляме попап в в конец секции elements 
    const closeImagePopupButton = popupImageElement.querySelector('.popup__close'); // получаем кнопку закрытия попапа
    // навешивам слушатель для клика  и в функции удаляем элемент попап
    closeImagePopupButton.addEventListener('click' , function(evt){
      popupImageElement.remove();
    })
  })
  // конец

  cardElement.querySelector('.element__text').textContent = name; // получаем элемент и свойству элемента присваиваем значение из переменной name
  //добавлние лайка
  const buttonLikeElement = cardElement.querySelector('.element__button-like') // получили элемент(кнопку лайк)
  buttonLikeElement.addEventListener('click', function (evt){ // навесили слушателя на клик ,при помощи удалени/добавления стиля
    evt.target.classList.toggle('element__button-like-active');
  })

  //удаление карточки
  const deleteButton = cardElement.querySelector('.element__button-delete');
  deleteButton.addEventListener('click', function (evt){
  // удаление ближайшего ээлемента с классом element
  //  const cardToRemove = deleteButton.closest('.element');
  //  cardToRemove.remove();
  // удаление карточки
  cardElement.remove();
  })

  //
  placeList.prepend(cardElement);

  
  
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



