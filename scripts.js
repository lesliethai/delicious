// namespace object
const app = {};

// selectors
const menuOpen = document.querySelector(".menuOpen");
const menuClose = document.querySelector(".menuClose");
const slideOut = document.querySelector(".slideOut");

menuOpen.addEventListener('click', function(event){
    event.preventDefault();
    slideOut.classList.remove("displayNone");
});

menuClose.addEventListener('click', function(event){
    event.preventDefault();
    slideOut.classList.add("displayNone");
}); 

