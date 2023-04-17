import './index.css';
import Cropper from 'cropperjs';

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