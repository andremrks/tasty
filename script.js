/* Function to change nav when scroll */

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

/*Function to show mobile menu*/

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.nav');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');

}