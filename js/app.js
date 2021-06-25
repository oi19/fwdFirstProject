
  
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


const name1= "section11"
const name2= "section22"
const name3= "section33"


    document.getElementById(name1).onclick = function() {myFunction1()};
    document.getElementById(name2).onclick = function() {myFunction2()};
    document.getElementById(name3).onclick = function() {myFunction3()};



    function myFunction1() {
        document.getElementById(name1.slice(0,(name1.length-1))).classList.add("your-active-class");
        document.getElementById(name2.slice(0,(name2.length-1))).classList.remove("your-active-class");
        document.getElementById(name3.slice(0,(name3.length-1))).classList.remove("your-active-class");

      }

     



      function myFunction2() {
          document.getElementById(name2.slice(0,(name2.length-1))).classList.add("your-active-class");
          document.getElementById(name3.slice(0,(name3.length-1))).classList.remove("your-active-class");
          document.getElementById(name1.slice(0,(name1.length-1))).classList.remove("your-active-class");
  
        }

        



        function myFunction3() {
            document.getElementById(name3.slice(0,(name3.length-1))).classList.add("your-active-class");
            document.getElementById(name2.slice(0,(name2.length-1))).classList.remove("your-active-class");
            document.getElementById(name1.slice(0,(name1.length-1))).classList.remove("your-active-class");
    
          }

 



 
  

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
