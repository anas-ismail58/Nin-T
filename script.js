// Create the side menu container
const sideMenu = document.createElement('div');
sideMenu.classList.add('side-menu');


const formWrapper = document.createElement('div');
formWrapper.classList.add("form-wrapper");

const forms = document.querySelector('.theme-entry .runtime-form');
formWrapper.appendChild(forms);

// Create the main category list
const mainList = document.createElement('ul');

// Create the first main category and its subcategories
const mainItem1 = document.createElement('li');
const mainLink1 = document.createElement('a');
mainLink1.textContent = 'Main Category 1';
const subList1 = document.createElement('ul');
for (let i = 1; i <= 3; i++) {
    const subItem = document.createElement('li');
    const subLink = document.createElement('a');
    subLink.textContent = `Subcategory 1.${i}`;
    subItem.appendChild(subLink);
    subList1.appendChild(subItem);
}
mainItem1.appendChild(mainLink1);
mainItem1.appendChild(subList1);

// Create the second main category and its subcategories
const mainItem2 = document.createElement('li');
const mainLink2 = document.createElement('a');
mainLink2.textContent = 'Main Category 2';
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
document.body.appendChild(sideMenu);
document.body.appendChild(formWrapper);
