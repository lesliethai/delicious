const app = {};

const slideOut = document.querySelector(".slideOut");
const menuClose = document.querySelector(".menuClose");

app.init = () => {
    console.log('test');

    $('.menuOpen').on('click', function(event) {
        event.preventDefault();
        slideOut.classList.remove("displayNone");
    })

    $('.menuClose').on('click', function (event) {
        event.preventDefault();
        slideOut.classList.add("displayNone");
    })
}

$(document).ready(function () {
    app.init();
});  