// namespace object
const app = {};

// selectors
app.menuOpen = document.querySelector(".menuOpen");
app.menuClose = document.querySelector(".menuClose");
app.searchButton = document.querySelector(".fa-magnifying-glass");
app.searchClose = document.querySelector(".closeSearch"); 

// function to toggle slide out menu display
function slide() {
    document.querySelector(".slideOut").classList.toggle("displayNone");
}

// function to toggle search page display
function toggleSearch() {
    document.querySelector(".searchPage").classList.toggle("displayNone");
}

// opens mobile menu on click
app.menuOpen.addEventListener('click', function(){
    slide();
}); 

// closes mobile menu on click
app.menuClose.addEventListener('click', function(){
    slide();
}); 

// open searchPage when magnifying glass is clicked
app.searchButton.addEventListener('click', toggleSearch);

// close searchPage when x is clicked
app.searchClose.addEventListener('click', toggleSearch);