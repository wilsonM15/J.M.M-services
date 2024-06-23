/*--------------Dropdown Menu --------------------*/
const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

// Toggle dropdown function
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});




/*----------------------------work work-----------------------------*/


 /*------   typed JS --------------------------------*/

/*const typed = new Typed('.multiple-text', {
  strings: ['J.M.M'],
      typeSpeed: 90,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      
  }); */



  /*================================SCROLL REVEAL=================================== */
ScrollReveal({
  distance: '70px',
  duration: 2000,
  delay: 300,
});

ScrollReveal().reveal('.about-text , .wood-work , .gold-work, .restauration ', {origin: 'left'});
ScrollReveal().reveal('.touches-work , .assembly-work , .work-title h1 ', {origin: 'right'});
ScrollReveal().reveal('.heading', {origin: 'top'});
ScrollReveal().reveal('.carousel__viewport, .footer, .contact-box', {origin: 'bottom'});



