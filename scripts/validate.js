const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__error',
    errorClass: 'popup__error_activity'
}

enableValidation();

function enableValidation() {
    const forms = [...document.querySelectorAll(config.formSelector)];
    forms.forEach((f) => addListenersToForm(f));
}



function addListenersToForm(form) {
    const inputs = [...form.querySelectorAll(config.inputSelector)];

    inputs.forEach((input) => {
        addListenersToInput(input, form)
    });
    form.addEventListener('input', toggleButtonState)
    setButtonState(form);
}

function addListenersToInput(input, form) {
    input.addEventListener('input', (e) => handleFieldValidation(e, form))
}

function handleFieldValidation(event, form) {
    const element = event.target;

    const errorContainer = document.querySelector(`#${element.id}-error`)
        // console.log(errorContainer);
    errorContainer.textContent = element.validationMessage;

    element.classList.toggle(config.errorClass, !element.validity.valid);

    setButtonState(form)
}

//фунукия по заменне цвета кнопки 

function toggleButtonState(event) {
    // console.log(toggleButtonState)
    const { currentTarget: form } = event;
    setButtonState(form)
}

function setButtonState(form) {
    const button = form.querySelector(config.submitButtonSelector);
    button.disabled = !form.checkValidity();
    button.classList.toggle(config.inactiveButtonClass, !form.checkValidity())
}