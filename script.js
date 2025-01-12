// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
// collapse of about me content
const readMoreBtn = document.querySelector('.read-more-btn');
    const moreTexts = document.querySelectorAll('.more-text');

    readMoreBtn.addEventListener('click', () => {
        moreTexts.forEach(text => {
            text.style.display = (text.style.display === 'none' || text.style.display === '') ? 'block' : 'none';
        });
        readMoreBtn.textContent = readMoreBtn.textContent === 'Read More' ? 'Read Less' : 'Read More';
    });
//to toggle extra code in my learning
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        // Toggle visibility of .more-text
        const moreText = this.previousElementSibling.querySelector('.more-text');
        
        // Toggle the display of the extra text
        if (moreText.style.display === "none" || moreText.style.display === "") {
            moreText.style.display = "block";  // Show extra text
            this.textContent = "Read Less";  // Change button text to 'Read Less'
        } else {
            moreText.style.display = "none";  // Hide extra text
            this.textContent = "Read More";  // Change button text to 'Read More'
        }
    });
});

// scroll section link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top<offset+height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        };
    });
// sticky navbar 
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

// remove toggle and navbar when click navbar link while scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
}); 
ScrollReveal().reveal('.home-content , .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img , .service-container , .portfolio-box, .contact-form ', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img  ', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content  ', { origin: 'right'});

// typed js
const typed = new Typed ('.multiple-text',{
    strings: ['Computer Science Engineer' , 'Python Developer' , 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});