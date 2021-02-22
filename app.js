/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
let myul = document.getElementById("navbar__list");
let list = document.querySelectorAll('li');
let navlinks= document.getElementsByTagName('a');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// I use this function in the onscroll() to Remove active class from all sections 
function removeAllActiveClasses() {
    sections.forEach((section) => {
        section.classList.remove("your-active-class");
    });
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// This is the function i used to build the navigation menu bar list
// also to creat sections <a> elements to use it in the event listener function of scrollToSection()
sections.forEach( element=>{
    let newli = document.createElement('li');
    let newa = document.createElement('a');
    let navlink = element.getAttribute('id');
    newa.textContent = element.getAttribute('data-nav');
    newli.appendChild(newa);
    myul.appendChild(newli);
    newa.href+= "#"+ navlink; //Here i add the href link of each section anchor element to navigate to it
 }
)


//This is the scrolltoSection function to scroll to the selected section of the navigation menu
function scrollToSection(event){
    event.preventDefault();
    navlinks[id].scrollIntoView({behavior:"smooth",block:"center"});
    
};



//active function
// In this function i detect the postion of the sections on view and add the active class to it 
function onscroll(){
    var scrollPosition = document.documentElement.scrollTop;
    sections.forEach((section) => {

        if (
            scrollPosition>= section.offsetTop - section.offsetHeight*0.20 && 
            scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight*0.20
        ){

        // removing the active class from all sections before adding it to the section on view
            removeAllActiveClasses() 
        // adding the active class to the section on view
            section.classList.add("your-active-class");
        }
        
    });
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// This is an event listener to a mouse click from the user on the navigation menu items, which will scroll down to it's section
document.addEventListener('click',scrollToSection);

// This is an event listener to scroll on the window to mark active section
window.addEventListener('scroll',onscroll);

// This step is for creating the navigation menu bar that i get from the ul of sections
document.body.header.appendChild(myul);







