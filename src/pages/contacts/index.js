import './index.css';
import Cropper from 'cropperjs';

/* Popup open/close */

const popup = document.querySelector(".popup");
const avatarButton = document.querySelector(".avatar-box__link")
const closeButton = document.querySelector(".popup__button-close")

avatarButton.addEventListener('click', () => {
    popup.classList.add('popup_opened');
});

closeButton.addEventListener('click', () => {
    popup.classList.remove('popup_opened')
});

/* Dropdown */

function handleSelect(input) {
    const dropdown = input.closest(".input-case__dropdown");
    const dropdownContent = dropdown.querySelector(".input-case__dropdown-content");
    input.addEventListener('click', () => {
        dropdownContent.classList.add('input-case__dropdown-content_active');
    });
    document.addEventListener('click', (evt) => {
        if (evt.target !== input) {
            dropdownContent.classList.remove('input-case__dropdown-content_active');
        }
    });
    const options = dropdownContent.querySelectorAll(".input-case__option");

    options.forEach((option) => {
        option.addEventListener('click', () => {
            clearOptions(options)

            const optionImage = option.querySelector(".input-case__image");
            optionImage.classList.add("input-case__image_active");
            const optionTitle = option.querySelector(".input-case__option-title");
            input.value = optionTitle.textContent;

            dropdownContent.classList.remove("input-case__dropdown-content_active");
        })
    })
}

function clearOptions(options) {
    options.forEach((option) => {
        const optionImage = option.querySelector(".input-case__image");
        optionImage.classList.remove("input-case__image_active");
    });
}

const contactsInput = document.querySelector("#contacts_input");
handleSelect(contactsInput);

const companyInput = document.querySelector("#company_input");
const proffessionInput = document.querySelector("#proffession_input");
handleSelect(companyInput);

/* Radio buttons */
const radioButtons = document.querySelectorAll(".radio-box__button")
radioButtons.forEach((button) => {
    button.addEventListener('click', () => {
        clearRadioButtons(radioButtons);
        button.classList.add('radio-box__button_active');
        if (button.id === "radio_company") {
            activateInputs([companyInput, proffessionInput]);
        } else {
            blockInputs([companyInput, proffessionInput]);
        }
    })
});

function activateInputs(inputs) {
    inputs.forEach((input) => {
        input.disabled = false;
        input.classList.remove('input_disabled');
    })
}

function blockInputs(inputs) {
    inputs.forEach((input) => {
        input.value = ""
        input.disabled = true;
        input.classList.add('input_disabled');
    })
}

function clearRadioButtons(radioButtons) {
    radioButtons.forEach((button) => {
        button.classList.remove('radio-box__button_active');
    })
}

/* Cropper */

const image = document.getElementById('popup__avatar');
const cropper = new Cropper(image, {
    aspectRatio: 1/1,
    autoCropArea: 1
});

cropper.options.highlight = false;
cropper.options.dragMode = "move";
cropper.options.guides = false;
cropper.options.center = false;
cropper.options.cropBoxMovable = false;
cropper.options.background = false;
cropper.options.minContainerWidth = 472;
cropper.options.minContainerHeight = 298;