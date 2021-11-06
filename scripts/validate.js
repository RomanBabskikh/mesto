const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__error',
    errorClass: 'popup__error_activity'
}

enableValidation(config);

function enableValidation(config) {
    const forms = [...document.querySelectorAll(config.formSelector)];
    forms.forEach((f) => addListenersToForm(f, config));
}



function addListenersToForm(form, config) {
    const inputs = [...form.querySelectorAll(config.inputSelector)];

    inputs.forEach((input) => {
        addListenersToInput(input, form, config)
    });
    form.addEventListener('input', (e) => toggleButtonState(e, config))
    setButtonState(form, config);
}

function addListenersToInput(input, form, config) {
    input.addEventListener('input', (e) => handleFieldValidation(e, form, config))
}

function handleFieldValidation(event, form, config) {
    const element = event.target;

    const errorContainer = document.querySelector(`#${element.id}-error`)
        // console.log(errorContainer);
    errorContainer.textContent = element.validationMessage;

    element.classList.toggle(config.errorClass, !element.validity.valid);

    setButtonState(form, config)
}

//фунукия по заменне цвета кнопки 

function toggleButtonState(event, config) {
    // console.log(toggleButtonState)
    const { currentTarget: form } = event;
    setButtonState(form, config)
}

function setButtonState(form, config) {
    const button = form.querySelector(config.submitButtonSelector);
    button.disabled = !form.checkValidity();
    button.classList.toggle(config.inactiveButtonClass, !form.checkValidity())
}