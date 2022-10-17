// namespace object
const app = {};

// selectors
app.menuOpen = document.querySelector(".menuOpen");
app.menuClose = document.querySelector(".menuClose");
app.slideOut = document.querySelector(".slideOut");
app.searchButton = document.querySelector(".fa-magnifying-glass");

// opens mobile menu on click
app.menuOpen.addEventListener('click', function(){
    slide();
}); 

// closes mobile menu on click
app.menuClose.addEventListener('click', function(){
    slide();
}); 

// function to toggle slide out menu display
function slide(){
    app.slideOut.classList.toggle("displayNone"); 
}

// open searchPage
app.searchButton.addEventListener('click', function(){
    document.querySelector(".searchPage").classList.toggle("displayNone");
})
