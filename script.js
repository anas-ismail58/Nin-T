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
        <span>Salama</span>
    </div>
</div>
</div>`


const logoWrapper = document.createElement('div');
logoWrapper.classList.add('logo-wrapper');

const logoWrapperImg = document.createComment('img');
// logoWrapperImg.setAttribute('src','https://www.swcc.gov.sa/media/images/swcc-logo.png');
logoWrapper.appendChild(logoWrapperImg);

const sideMenu = document.createElement('div');
sideMenu.classList.add('side-menu');
// Add an ID to the side menu for easier DOM selection later
sideMenu.setAttribute('id', 'side-menu');



const formWrapper = document.createElement('div');
formWrapper.classList.add("form-wrapper");
const forms = document.querySelector('.theme-entry .runtime-form');
formWrapper.appendChild(forms);


// forms.style.display = 'none';

let noData = document.createElement('div');
noData.classList.add('no-date-content');

formWrapper.appendChild(noData);
noData.style.display = "none";
noData.textContent = 'هذه الخدمه غير متوفره الان';

// Create the main category list
const mainList = document.createElement('ul');

mainList.classList.add('main-list-wrapper')



// Create the first main category and its subcategories
const mainItem1 = document.createElement('li');
mainItem1.classList.add('main-item-one');

const mainLink1 = document.createElement('a');
mainLink1.classList.add('main-link-one');
mainLink1.textContent = 'ادارة القضايا و التحقيقات';
// Add an event listener to the main category link to toggle the 'collapsed' class on the page wrapper

const subList1 = document.createElement('ul');
subList1.classList.add('sub-list__Catog');

mainLink1.addEventListener('click', function () {
    const subListCat = document.querySelector('.sub-list__Catog');
    subListCat.classList.toggle('collapsed');
});

// subcatog one with subitems
let subItem = document.createElement('li');
let subLink = document.createElement('a');
subLink.textContent = `اجراء من المؤسسة`;

subItem.appendChild(subLink);
subList1.appendChild(subItem);



subLink.addEventListener('click', function () {
    forms.style.display = 'none';
    subLink.classList.add('active');
    noData.style.display = 'block';
});



subItem = document.createElement('li');
subLink = document.createElement('a');
subLink.textContent = 'اجراء ضد المؤسسة';

subItem.appendChild(subLink);
subList1.appendChild(subItem);

subLink.addEventListener('click', function () {
    forms.style.display = 'none';
    subLink.classList.add('active');
    noData.style.display = 'block';
});


subItem = document.createElement('li');
let subLink3 = document.createElement('a');
subLink3.textContent = 'اجراء التحقيق';

subLink3.classList.add('sub-item', 'active');

subItem.appendChild(subLink3);
subList1.appendChild(subItem);

subLink3.addEventListener('click', function () {
    forms.style.display = 'block';
    noData.style.display = 'none';
    // subLink3.classList.add('active');
});




// for (let i = 1; i <= 3; i++) {

// }
mainItem1.appendChild(mainLink1);
mainItem1.appendChild(subList1);



// Create the second main category and its subcategories
const mainItem2 = document.createElement('li');
const mainLink2 = document.createElement('a');
mainLink2.textContent = 'الشؤون القانونية';


mainLink2.addEventListener('click', function () {
    const pageWrapper = document.querySelector('.form-nintex__wrapper');
    pageWrapper.classList.toggle('collapsed');
});


const subList2 = document.createElement('ul');
// for (let i = 1; i <= 3; i++) {
//     const subItem = document.createElement('li');
//     const subLink = document.createElement('a');
//     subLink.textContent = `Subcategory 2.${i}`;
//     subItem.appendChild(subLink);
//     subList2.appendChild(subItem);
// }
mainItem2.appendChild(mainLink2);
mainItem2.appendChild(subList2);



// Create the third main category and its subcategories
const mainItem3 = document.createElement('li');
const mainLink3 = document.createElement('a');
mainLink3.textContent = ' الحوكمة';
mainLink3.addEventListener('click', function () {
    const pageWrapper = document.querySelector('.form-nintex__wrapper');
    pageWrapper.classList.toggle('collapsed');
});
const subList3 = document.createElement('ul');
// for (let i = 1; i <= 3; i++) {
//     const subItem = document.createElement('li');
//     const subLink = document.createElement('a');
//     subLink.textContent = `Subcategory 3.${i}`;
//     subItem.appendChild(subLink);
//     subList3.appendChild(subItem);
// }
mainItem3.appendChild(mainLink3);
mainItem3.appendChild(subList3);



// Add the main categories to the list
mainList.appendChild(mainItem1);
mainList.appendChild(mainItem2);
mainList.appendChild(mainItem3);



// Add the list to the side menu container
sideMenu.appendChild(mainList);



// Add the side menu container to the page
document.body.appendChild(pageWrapper);

pageWrapper.appendChild(Topheader);

pageWrapper.appendChild(sideMenu);

pageWrapper.appendChild(formWrapper);



// Add some CSS to style the collapsed state of the page wrapper
const style = document.createElement('style');
style.textContent = `
  .form-nintex__wrapper .collapsed {
    width: 100%;
  }
  .side-menu .collapsed {
    display: none;
  }
  .sub-item.active {
    background: rgba(0, 102, 204, 0.7);
  }
`;
document.head.appendChild(style);
