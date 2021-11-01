init();

function init() {
    const forms = [...document.querySelectorAll('.popup__form')];
    forms.forEach(addListenersToForm);
}



function addListenersToForm(form) {
    const inputs = [...form.querySelectorAll('.popup__input')];


    inputs.forEach((input) => {
        addListenersToInput(input)
    });
    form.addEventListener('input', toggleButtonState)
    setButtonState(form);
}

function addListenersToInput(input) {
    input.addEventListener('input', handleFieldValidation)
}

function handleFieldValidation(event) {
    const element = event.target;

    const errorContainer = document.querySelector(`#${element.id}-error`)
        // console.log(errorContainer);
    errorContainer.textContent = element.validationMessage;

    element.classList.toggle('popup__error_activity', !element.validity.valid);
    setButtonState(form)
}

//фунукия по заменне цвета кнопки 

function toggleButtonState(event) {
    // console.log(toggleButtonState)
    const { currentTarget: form } = event;
    setButtonState(form)
}

function setButtonState(form) {
    const button = form.querySelector('.popup__button');
    button.disabled = !form.checkValidity();
    button.classList.toggle('popup__button_disabled', !form.checkValidity())
}