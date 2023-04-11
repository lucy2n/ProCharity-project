import Tagify from '@yaireo/tagify'
import '../pages/index.css'

let inputElement = document.querySelector('.input_tags-manual-suggestions');

// init Tagify script on the above inputs
var tagify = new Tagify(inputElement, {
  whitelist: ["Аудит сайта", "Создание", "доработка сайта"," Настройка сайта", "Аналитика", "Администрирование", "Создание чат-ботов"],
  dropdown: {
    position: "manual",
    maxItems: Infinity,
    enabled: 0,
    classname: "customSuggestionsList"
  },
  enforceWhitelist: true
})

tagify.on("dropdown:show", onSuggestionsListUpdate)
  .on("dropdown:hide", onSuggestionsListHide)
  .on('dropdown:scroll', onDropdownScroll)

renderSuggestionsList()

// ES2015 argument destructuring
function onSuggestionsListUpdate({ detail: suggestionsElm }) {
  // console.log(suggestionsElm)
}

function onSuggestionsListHide() {
  // console.log("hide dropdown")
}

function onDropdownScroll(e) {
  // console.log(e.detail)
}

// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
function renderSuggestionsList() {
  tagify.dropdown.show.call(tagify) // load the list
  tagify.DOM.scope.parentNode.appendChild(tagify.DOM.dropdown)
}

/* Cropper */

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