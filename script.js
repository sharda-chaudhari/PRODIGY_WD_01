// Script to add 'scrolled' class to navbar when the page is scrolled
window.onscroll = function() {
  let navbar = document.getElementById('navbar');
  
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
};
