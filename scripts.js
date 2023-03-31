// namespace object
const app = {};

// app.init
app.init = () => {
    app.eventListeners();
    app.arrowFunctions();
    app.arrowColor(); 
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

// array with different quotes
app.clientQuotes = [
    `Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion.`,
    `Dragée sesame snaps liquorice shortbread jelly. Bear claw sugar plum macaroon biscuit gummi bears bonbon. Tart topping apple pie biscuit cake. Cake toffee cake cupcake jelly-o chocolate cake cupcake. Biscuit cookie brownie fruitcake gummies oat cake gummi bears cookie oat cake. Sweet marzipan.`, 
    `Bacon ipsum dolor amet corned beef swine salami ham hamburger chuck jowl shoulder pig. Short loin chuck hamburger turducken ball tip. Cow tri-tip pig, capicola fatback porchetta pancetta. Pork loin flank corned beef, rump spare ribs short loin short ribs buffalo pastrami fatback tongue beef chislic.`
]

app.arrowFunctions = () => {
    // app.index default value & selectors
    app.index = 0;
    const leftArrow = document.querySelector('.leftArrow');
    const rightArrow = document.querySelector('.rightArrow');

    // on leftArrow click, decrease app.index
    leftArrow.addEventListener('click', function (e) {
        e.preventDefault();
        rightArrow.style.color = '';
        leftArrow.style.color = '#64A604'; 
        app.index--;
        // if app.index is less than 0, app.index = 2 to cycle to last index
        if (app.index < 0) {
            app.index = 2;
        } 
        // display quote on page
        app.displayQuote();    
    })

    rightArrow.addEventListener('click', function (e) {
        e.preventDefault();
        leftArrow.style.color = ''; 
        rightArrow.style.color = '#64A604'; 
        app.index++;
        // if app.index reaches end of available indexes, right click will make app.index = 0 to cycle to first index
        if (app.index === app.clientQuotes.length) {
            app.index = 0;
        }
        // display quote on page
        app.displayQuote();
    })
}

// display quote on page
app.displayQuote = () => {
    const paragraph = document.querySelector(".quote");
    paragraph.textContent = `${app.clientQuotes[app.index]}`;
}

app.init(); 