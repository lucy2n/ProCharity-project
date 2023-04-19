export function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

export function closeNotification() {
    const popup = document.querySelector(".popup__notification");
    const closeButton = popup.querySelector(".popup__button-close");
    closeButton.addEventListener('click', () => {
        console.log(popup)
        popup.classList.remove("popup__notification_opened")
    })
}