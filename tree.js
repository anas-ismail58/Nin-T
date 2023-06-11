// Create the side menu container
const pageWrapper = document.createElement('div');
pageWrapper.classList.add('form-nintex__wrapper');


const Topheader = document.createElement('div');
Topheader.classList.add('top-header');

Topheader.innerHTML += `<div class="header-top__logo">
<div class="header-top__logo__img">
    <img src="https://energy-utilities.com/1-comp292538.png" alt="" width="100%">
</div>
<div class="header-top__user">
    <div class="header-top__user__avatar">
        <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="" width="100%">
    </div>
    <div class="header-top__user__name">
        <span>عبدالرحمن سلامة</span>
        <span class="position-title"></span>
    </div>
</div>
</div>`


const logoWrapper = document.createElement('div');
logoWrapper.classList.add('logo-wrapper');


const formWrapper = document.createElement('div');
formWrapper.classList.add("form-wrapper", 'no-margin');
const forms = document.querySelector('.theme-entry .runtime-form');
formWrapper.appendChild(forms);

document.body.appendChild(pageWrapper);

pageWrapper.appendChild(Topheader);

pageWrapper.appendChild(formWrapper);


var btnPopup = document.querySelectorAll('.popup a.SourceCode-Forms-Controls-Web-Button');
for (let i = 0; i < btnPopup.length; i++) {
    btnPopup[0].innerHTML = "نعم";
    btnPopup[1].innerHTML = "الغاء";
}


var tree = document.querySelector('span.SFC.SourceCode-Forms-Controls-Web-DataLabel.empty');
var row = document.querySelectorAll('.row');
tree.closest('.view').classList.add('tree-wrapper__row__form');

// tree.closest('.row').classList.add('tree-wrapper__row__form');

for (let i = 0; i < row.length; i++) {
    row[i].classList.add('row' + i);
}


document.addEventListener("DOMContentLoaded", () => {
    var textContentPosition = document.querySelector('[name="Position_Title"]').textContent;
    var positionText = document.querySelector('.position-title');
    positionText.textContent = textContentPosition;
});

var textContentPosition = document.querySelector('[name="Position_Title"]').textContent;
var positionText = document.querySelector('.position-title');
positionText.textContent = textContentPosition;