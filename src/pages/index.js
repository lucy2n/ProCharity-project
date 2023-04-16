import Tagify from '@yaireo/tagify'
//import Cropper from 'cropperjs';
import '../pages/index.css'

import img from '../images/path.svg'

import { whitelistValue, inputElm } from '../utils/constants.js';
import { tagTemplate, suggestionItemTemplate } from '../utils/tagify_templates.js';

let tagify = new Tagify(inputElm, {
    enforceWhitelist: true,
    dropdown: {
        closeOnSelect: false,
        enabled: 0,
        maxItems: Infinity,
        placeAbove: false,
        includeSelectedTags: true,
        classname: 'groupList',
        searchKeys: ['group']
    },
    templates: {
        tag: tagTemplate,
        dropdownItem: suggestionItemTemplate,
    },
    whitelist: whitelistValue,
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

    const getGroupSuggestionsHTML = group => group.map((suggestion, idx) => {
        if( typeof suggestion == 'string' || typeof suggestion == 'number' )
            suggestion = { value: suggestion }
        suggestion.value = tagify.dropdown.getMappedValue.call(tagify, suggestion)
        return tagify.settings.templates.dropdownItem.apply(tagify, [suggestion]);
    }).join("")

    return `<div class="multi-level">
      <div class="items">
        ${ Object.entries(groupOfActivity).map(([group, activities]) => {
            return `<div class="tagify__dropdown__itemsGroup" data-title="Group ${group}:">
                          <div style="display: flex; justify-content: space-between">
                            <span class="group__span">${ group }</span>
                            <img src=${img} style="padding: 20px;">
                        
                            <div class="items">
                              <div class="tagify_subgroup group_${ group }">
                                  ${ getGroupSuggestionsHTML(activities) }
                              </div>
                            </div>
                          </div>
                    </div>`
        }).join("")}
      </div>
    </div>`;
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