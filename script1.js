let slideIndex = 1;
showSlides(slideIndex, "mySlides");
showSlides(slideIndex, "mySlides1");
showSlides(slideIndex, "mySlides2");
showSlides(slideIndex, "mySlides3");


function plusSlides(n, className) {
    showSlides(slideIndex += n, className);
}
function currentSlide(n, className) {
    showSlides(slideIndex = n, className);
}
function showSlides(n, className) {
    const slides = document.getElementsByClassName(className);

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
setInterval(() => {
    plusSlides(1, "mySlides");
}, 4000);
setInterval(() => {
    plusSlides(1, "mySlides1");
}, 4000);
setInterval(() => {
    plusSlides(1, "mySlides2");
}, 4000);
setInterval(() => {
    plusSlides(1, "mySlides3");
}, 4000);

