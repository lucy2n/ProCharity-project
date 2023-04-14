import Tagify from '@yaireo/tagify'
import '../pages/index.css'
import img from '../images/path.svg'

function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

const inputElm = document.querySelector('input[name=tags-manual-suggestions]')

let whitelistValue = [
    {
        value: 'Социальные сети',
        group: 'Маркетинг и коммуникации'
    },
    {
        value: 'Работа с текстами',
        group: 'Маркетинг и коммуникации'
    },
    {
        value: 'Email-рассылки',
        group: 'Маркетинг и коммуникации'
    },
    {
        value: 'Организация мероприятий',
        group: 'Маркетинг и коммуникации'
    },
    {
        value: 'Реклама',
        group: 'Маркетинг и коммуникации'
    },
    {
        value: 'Верстка',
        group: 'Дизайн и верстка'
    },
    {
        value: 'Что-то',
        group: 'IT'
    },
    {
        value: 'То-то',
        group: 'IT'
    },
    {
        value: 'Еще что-то',
        group: 'IT'
    },
    {
      value: 'Финансирую',
      group: 'Финансы и фандрайзинг'
    },
    {
      value: 'Умею включать камеру',
      group: 'Фото и видео'
    },
    {
      value: 'Знаю законы',
      group: 'Юридические услуги'
    },
    {
      value: 'Стратегии-стратегии',
      group: 'Стратегический консалтинг'
    },
    {
      value: 'Чему-нибудь да обучу',
      group: 'Обучение и тренинги'
    },
    {
      value: 'Контролирую работу других',
      group: 'Менеджемент'
    },
    {
      value: 'Пускай что-то будет',
      group: 'HR'
    },
]
whitelistValue = whitelistValue.map(item => ({ ...item, class: `group_${hashCode(item.group)}` }));

function tagTemplate(tagData){
    return `
        <tag title="${tagData.value}"
                contenteditable='false'
                spellcheck='false'
                tabIndex="-1"
                class="tagify__tag ${tagData.class ? tagData.class : ""}"
                ${this.getAttributes(tagData)}>
            <x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>
            <div>
                <span class='tagify__tag-text'>${tagData.value}</span>
            </div>
        </tag>
    `
}

function suggestionItemTemplate(tagData){
    console.log("tag data :", tagData)
    return `
        <div ${this.getAttributes(tagData)}
            class='tagify__dropdown__item ${tagData.class ? tagData.class : ""}'
            tabindex="0"
            role="option">
              <div class="main__checkbox">
              <label class="main__checkbox-content">
                <input type="checkbox" class="main__checkbox-input" />
                <span class="main__checkbox-stile"></span>
                ${tagData.value}
              </label>
              </div>
        </div>
    `
}

let tagify = new Tagify(inputElm, {
    tagTextProp: 'name', // very important since a custom template is used with this property as text
    // enforceWhitelist: true,
    dropdown: {
        closeOnSelect: false,
        enabled: 0,
        maxItems: Infinity,
        classname: 'groupList',
        searchKeys: ['group']
    },
    templates: {
        tag: tagTemplate,
        dropdownItem: suggestionItemTemplate,
    },
    whitelist: whitelistValue,
    duplicates: true,
})

tagify.dropdown.createListHTML = sugegstionsList  => {
    // MARK: Split data into groups
    const groupOfActivity = sugegstionsList.reduce((acc, suggestion) => {
        const group = suggestion.group || 'Not Assigned';

        if( !acc[group] )
            acc[group] = [suggestion]
        else
            acc[group].push(suggestion)

        return acc
    }, {})
    console.log("GroupOfActivities : ", groupOfActivity)

    const getGroupSuggestionsHTML = group => group.map((suggestion, idx) => {
        if( typeof suggestion == 'string' || typeof suggestion == 'number' )
            suggestion = { value: suggestion }
        suggestion.idx = idx
        suggestion.value = tagify.dropdown.getMappedValue.call(tagify, suggestion)
        console.log("Someting : ", tagify.settings.templates.dropdownItem.apply(tagify, [suggestion]))
        return tagify.settings.templates.dropdownItem.apply(tagify, [suggestion]);
    }).join("")

    // assign the user to a group
    return `<div class="multi-level">
      <div class="items">
        ${ Object.entries(groupOfActivity).map(([group, activities]) => {
            return `<div class="tagify__dropdown__itemsGroup" data-title="Group ${group}:">
                        <div style="display: flex; justify-content: space-between;">
                            <span class="group__span">${ group }</span>
                            <img src=${img} style="padding: 20px;">
                        </div>
                        <div class="items">
                            <div class="tagify_subgroup group_${ group } ">
                                ${ getGroupSuggestionsHTML(activities) }
                            </div>
                        </div>
                    </div>`
        }).join("")}
      </div>
    </div>`;
}

function renderSuggestionsList(){
    tagify.dropdown.show() // load the list
    tagify.DOM.scope.parentNode.appendChild(tagify.DOM.dropdown)
}

renderSuggestionsList();

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