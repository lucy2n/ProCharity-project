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
    })
    const options = dropdownContent.querySelectorAll(".input-case__option");

    options.forEach((option) => {
        option.addEventListener('click', () => {
            clearOptions(options)

            const optionImage = option.querySelector(".input-case__image");
            optionImage.classList.add("input-case__image_active");
            const optionTitle = option.querySelector(".option__title");
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

const firstInput = document.querySelector("#first_input");
handleSelect(firstInput);

const secondInput = document.querySelector("#second_input");
handleSelect(secondInput);

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