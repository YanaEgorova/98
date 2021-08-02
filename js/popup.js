const allBtns = document.querySelectorAll('.js_nav-btn');
const overlay = document.querySelector('.js_popup__overlay');
const popupContents = document.querySelectorAll('.js_popup-content');
const allCloseBtns = document.querySelectorAll('.js_popup-content-btn');
const body = document.body;

allBtns.forEach(btn => {
    btn.addEventListener('click', showPopup);
});
allCloseBtns.forEach(btn => {
    btn.addEventListener('click', closePopup);
})
overlay.addEventListener('click',closePopupOverlay);



function showPopup(e) {
    const btn = e.currentTarget.getAttribute('data-btn-id');
    body.classList.add('popup--active');
    popupContents.forEach(content => {
        if(content.getAttribute('data-id') === btn) {
            content.classList.add('popup-content--active');
        }
    })
    window.addEventListener('keydown', handleKeyPress);
}

function closePopup() {
    body.classList.remove('popup--active');
    popupContents.forEach(content => {
            content.classList.remove('popup-content--active');
    });
    window.removeEventListener('keydown', handleKeyPress);
}

function closePopupOverlay(e) {
    if(e.target !== e.currentTarget) {
        return;
    }
    closePopup();
}

function handleKeyPress(e) {
    if(e.code !== 'Escape') {
        return;
    }
    closePopup();
}


