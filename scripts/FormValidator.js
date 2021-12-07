export class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
        this._inputList = [...this._formElement.querySelectorAll(this._config.inputSelector)];
        this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    }

    // Функция проверяет валидность поля
    _handleFieldValidation(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, errorElement);
        } else {
            this._hideInputError(inputElement, errorElement);
        }
    }

    // Функция добавляет класс с ошибкой
    _showInputError(inputElement, errorElement) {
        inputElement.classList.add(this._config.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._config.errorClass);
    }

    // Функция удаляет класс с ошибкой
    _hideInputError(inputElement, errorElement) {
        inputElement.classList.remove(this._config.inputErrorClass);
        errorElement.classList.remove(this._config.errorClass);
        errorElement.textContent = '';
    };

    // функция проверяет кнопку
    _toggleButtonState() {

        this._buttonElement.disabled = !this._formElement.checkValidity();
        this._buttonElement.classList.toggle(this._config.inactiveButtonClass, !this._formElement.checkValidity());
    }

    // функция обработчик для всех полей формы
    _setFormListeners() {

        this._inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._handleFieldValidation(inputElement);
                this._toggleButtonState();
            });
        });
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
    }

    // функция обработчик для всех форм
    enableValidation() {
        this._setFormListeners();
    }
}