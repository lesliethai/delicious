// namespace object
const app = {};

// app.init
app.init = () => {
    app.eventListeners();
    app.arrowFunctions();
}

// event listeners for clicks 
app.eventListeners = () => {
    // selectors 
    const menuOpen = document.querySelector(".menuOpen");
    const menuClose = document.querySelector(".menuClose");
    const searchButton = document.querySelector(".fa-magnifying-glass");
    const searchClose = document.querySelector(".closeSearch");

    // opens mobile menu on click
    menuOpen.addEventListener('click', app.slide);
    // closes mobile menu on click
    menuClose.addEventListener('click', app.slide);

    // open searchPage when magnifying glass is clicked
    searchButton.addEventListener('click', app.toggleSearch);
    // close searchPage when x is clicked
    searchClose.addEventListener('click', app.toggleSearch);
}

// function to toggle slide out menu display
app.slide = () => {
    document.querySelector(".slideOut").classList.toggle("displayNone");
}

// function to toggle search page display
app.toggleSearch = () => {
    document.querySelector(".searchPage").classList.toggle("displayNone");
} 

app.init(); 