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


//creating a dynamiclly navbar
function createNavMenu() {
  const navbar = document.getElementById("navbar__list");
  // creating a h4 element within a div inside the navbar
  const div1 = document.createElement("div")
  div1.classList.add("div1")
  div1.innerHTML = `<h4 class ="h4">The Nav</h4>`;
  navbar.appendChild(div1);


  // creating a div for the links 
  const div2 = document.createElement("div");
  div2.classList.add("div2");
  navbar.appendChild(div2);

  // craeting a link for each existing section element
  sections.forEach((section) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#${section.id}" class='navbar__item'>${section.id}</a>`;
    div2.appendChild(li);
  });
}





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
  createNavMenu();
  addAcitveClass();

}

Do();
