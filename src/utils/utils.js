export function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

export function inputTextDelete() {
    const deleteButtons = document.querySelectorAll('.input-case__ico_type_cross');
    deleteButtons.forEach(deleteButton => {
        deleteButton.addEventListener('click', (element) => {
            const targetInput = element.target.closest('.input-case').querySelector('.input');
            const targetTextArea = element.target.closest('.input-case').querySelector('textarea');
            if (targetTextArea === null) {
                targetInput.value = '';
            } else {
                targetTextArea.value = '';
            }
        })
    });
}

export function handleClosePopup() {
    const popups = document.querySelectorAll(".popup");
    popups.forEach((popup) => {
        const closeButton = popup.querySelector(".popup__button-close");
        closeButton.addEventListener('click', () => {
            popup.classList.remove("popup_opened")
        })
    })
}