let menuItems = document.querySelectorAll(".navbar-nav li a");
menuItems.forEach(
    (element) => {
        element.addEventListener('click', e => menuItems.forEach(elementsNested => {
            if(elementsNested == element){
                elementsNested.className = "px-3 p-2 text-dark bg-light rounded-pill";
            } else {
                elementsNested.className = "px-3 p-2 text-light";
            }
        }))
    }
);

let menuItemsOffcanvas = document.querySelectorAll(".offcanvas-header > .navbar-nav > li > a");
menuItemsOffcanvas.forEach(
    (element) => {
        element.addEventListener('click', e => menuItemsOffcanvas.forEach(elementsNested => {
            if(elementsNested == element){
                elementsNested.className = "mx-3 px-3 py-2 text-dark bg-light rounded-pill fs-4";
            } else {
                elementsNested.className = "px-3 p-2 text-light fs-4";
            }
        }))
    }
);