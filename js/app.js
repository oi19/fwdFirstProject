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
const sections = [...document.getElementsByTagName('section')]

/**
 * Define Global Variables
 * 
*/

/**
 * declaring section variabls 
 */

/**
 * functions to add active-style to this class(section) and removing it from the other classes(sections)
 */

// myFunction is set to add active-class to the section choesen (links clicked on by the user ) and scroll into that section using a helper function
// removeFunction
    function myFunction(x) {
      
      
      var link = document.getElementById(x);
      removeFunction(x)
      
      link.classList.add("your-active-class");
      
      link.addEventListener('click',link.scrollIntoView({behavior:"smooth", block: "center", inline: "nearest"}));
      }
      
    
      // adding scroll event to the window activating a function
    window.addEventListener('scroll', function () {
      // decalring the pageYoffset as scrollFromTop
        const scrollFromTop = window.pageYOffset
      // iterating by the number of sections
        for (let i = 0; sections.length > i; i++) {
          // checking if the section is in the viewport 
          if (scrollFromTop <= sections[i].offsetTop) {
            // then add the active class to that section
            sections[i].classList.add("your-active-class")
            
           
          }
          
      }
    });
        





  /** *
    function scroll(){
      var sec1 = document.getElementById("section1");
      var dims = sec1.getBoundingClientRect();
      var bottom1 = dims.bottom;
      var bottom2 = bottom1 + (dims.height *.5);

      var viewPortHeight = window.innerHeight;

      if (viewPortHeight >= bottom2)
      {
        document.getElementById('section2').classList.add("your-active-class");
        removeFunction(2)
        bottom2 = bottom2 + bottom1
      }
      else if(window >= bottom2)
      {
        document.getElementById('section3').classList.add("your-active-class");
        removeFunction(3)
        bottom2 += bottom1
      }
      else if (window  >= bottom2)
      {
        document.getElementById('section4').classList.add("your-active-class");
        removeFunction(4)
        bottom2 += bottom1
      }
    }

   */

 
 

   
 
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// this function removes active class from every section except for the chosen on(link clicked on by the user)
    function removeFunction(x)
    {

      // iterating by the number  of  sections
      for(let i = 1; i<=sections.length; i++)
      {
        // if it is not the chosen section , then remove the active class 
        if (sections[i-1] != x)
        {
          //then get that section and remove the active class from it 
          var links = document.getElementById(sections[i]);
          links.classList.remove("your-active-class");
        }
      }
    }






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
//
/**      const sections = [...document.getElementsByTagName('section')]

        window.addEventListener('scroll', function () {

        const scrollFromTop = window.pageYOffset

        for (let i = 0; sections.length > i; i++) {

          if (scrollFromTop <= sections[i].offsetTop) {
            sections[i].classList.add("your-active-class")
            if(i > 0)
            sections[i-1].classList.remove("your-active-class")
            
            
          } 
          

        }

        }) */
