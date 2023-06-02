// Create the side menu container
const pageWrapper = document.createElement('div');
pageWrapper.classList.add('form-nintex__wrapper');



const sideMenu = document.createElement('div');
sideMenu.classList.add('side-menu');
// Add an ID to the side menu for easier DOM selection later
sideMenu.setAttribute('id', 'side-menu');



const formWrapper = document.createElement('div');
formWrapper.classList.add("form-wrapper");
const forms = document.querySelector('.theme-entry .runtime-form');
formWrapper.appendChild(forms);


forms.style.display = 'none';


// Create the main category list
const mainList = document.createElement('ul');



// Create the first main category and its subcategories
const mainItem1 = document.createElement('li');
const mainLink1 = document.createElement('a');
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

subItem = document.createElement('li');
subLink = document.createElement('a');
subLink.textContent = 'اجراء ضد المؤسسة';

subItem.appendChild(subLink);
subList1.appendChild(subItem);

subItem = document.createElement('li');
let subLink3 = document.createElement('a');
subLink3.textContent = 'اجراء التحقيق';

subLink.classList.add('sub-item');
var subItmes = document.querySelector('.sub-item');

subItem.appendChild(subLink3);
subList1.appendChild(subItem);

subLink3.addEventListener('click', function (e) {
    forms.style.display = 'block';
    this.classList.add = 'active';
});




// for (let i = 1; i <= 3; i++) {

// }
mainItem1.appendChild(mainLink1);
mainItem1.appendChild(subList1);



// Create the second main category and its subcategories
const mainItem2 = document.createElement('li');
const mainLink2 = document.createElement('a');
mainLink2.textContent = 'Main Category 2';


mainLink2.addEventListener('click', function () {
    const pageWrapper = document.querySelector('.form-nintex__wrapper');
    pageWrapper.classList.toggle('collapsed');
});


const subList2 = document.createElement('ul');
for (let i = 1; i <= 3; i++) {
    const subItem = document.createElement('li');
    const subLink = document.createElement('a');
    subLink.textContent = `Subcategory 2.${i}`;
    subItem.appendChild(subLink);
    subList2.appendChild(subItem);
}
mainItem2.appendChild(mainLink2);
mainItem2.appendChild(subList2);



// Create the third main category and its subcategories
const mainItem3 = document.createElement('li');
const mainLink3 = document.createElement('a');
mainLink3.textContent = 'Main Category 3';
mainLink3.addEventListener('click', function () {
    const pageWrapper = document.querySelector('.form-nintex__wrapper');
    pageWrapper.classList.toggle('collapsed');
});
const subList3 = document.createElement('ul');
for (let i = 1; i <= 3; i++) {
    const subItem = document.createElement('li');
    const subLink = document.createElement('a');
    subLink.textContent = `Subcategory 3.${i}`;
    subItem.appendChild(subLink);
    subList3.appendChild(subItem);
}
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
pageWrapper.appendChild(sideMenu)
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
`;
document.head.appendChild(style);
