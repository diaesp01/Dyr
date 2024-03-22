// JavaScript for Burger Menu
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    const navToggle = document.querySelector('.navToggle');
    console.log(navToggle); // Should log the element to the console
    const navbar_menu = document.getElementById('navbar_menu');
 
    navToggle.addEventListener('click', function() {
        console.log("Burger-menu icon clicked");
        const isDisplayed = window.getComputedStyle(navbar_menu).display !== 'none';
        navbar_menu.style.display = isDisplayed ? 'none' : 'block';
    });
});