import './index.css';
import Cropper from 'cropperjs';

const popup = document.querySelector(".popup");
const avatarButton = document.querySelector(".avatar-box__link")
const closeButton = document.querySelector(".popup__button-close")

avatarButton.addEventListener('click', () => {
    popup.classList.add('popup_opened');
});

closeButton.addEventListener('click', () => {
    popup.classList.remove('popup_opened')
});

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