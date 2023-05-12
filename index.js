document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  });
  const menuItems = document.querySelectorAll('.menu li a');

menuItems.forEach(item => {
  item.addEventListener('click', hideMenu);
});

function hideMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.remove('active');
}

const about = document.querySelectorAll('.about');
const clothes = document.querySelectorAll('.clothes');
window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
  
    if (scrollValue > 340) {
      about.forEach(about => about.classList.add('show'));
  
    }
    if (scrollValue > 850) {
        clothes.forEach(clothes => clothes.classList.add('show'));
    
      }
});
