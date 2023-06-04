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
    </div>
</div>
</div>`


const logoWrapper = document.createElement('div');
logoWrapper.classList.add('logo-wrapper');


const formWrapper = document.createElement('div');
formWrapper.classList.add("form-wrapper");
const forms = document.querySelector('.theme-entry .runtime-form');
formWrapper.appendChild(forms);



let noData = document.createElement('div');
noData.classList.add('no-date-content');

formWrapper.appendChild(noData);
noData.style.display = "none";
noData.textContent = 'هذه الخدمه غير متوفره الان';




// Add the side menu container to the page
document.body.appendChild(pageWrapper);

pageWrapper.appendChild(Topheader);

// pageWrapper.appendChild(sideMenu);

pageWrapper.appendChild(formWrapper);




let navlist = document.querySelectorAll('.sub-item');

for (let i = 0; i < navlist.length; i++) {
    navlist[i].addEventListener('click', function () {
        for (let x = 0; x < navlist.length; x++) {
            if (navlist[x] == this) {
                navlist[x].classList.add('active');
            } else {
                navlist[x].classList.remove('active');
            }
        }
    });
}


var btnPopup = document.querySelectorAll('.popup a.SourceCode-Forms-Controls-Web-Button');
for (let i = 0; i < btnPopup.length; i++) {
    btnPopup[0].innerHTML = "نعم";
    btnPopup[1].innerHTML = "الغاء";
}