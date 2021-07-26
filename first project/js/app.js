// helpers

/**
 * Calculate whether the element is in the viewport
 * Credits: https://stackoverflow.com/a/7557433
 */





 function isInViewport(elem) {
  const rect = elem.getBoundingClientRect();

  return (
    rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) / 2 &&
    rect.right >=
      (window.innerWidth || document.documentElement.clientWidth) / 2 &&
    rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) / 2 &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) / 2
  );
}

// ----

const sections = document.querySelectorAll("section");

// scroll to the section being selected
function myFunction() {
      
  const links = document.querySelectorAll("")    
  var link = document.getElementById(x);

  link.addEventListener('click',link.scrollIntoView({behavior:"smooth", block: "center", inline: "nearest"}));
  };


// add class active for both, sections and links
function addAcitveClass() {
  const activation = (isInViewport) => {
    document.addEventListener("scroll", () => {
      sections.forEach((section) => {
        isInViewport(section)
          ? (section.classList.add("your-active-class"))
          : (section.classList.remove("your-active-class"));
      });
    });
  };
  activation(isInViewport);
}



function Do() {
  

  addAcitveClass();
}

Do();
