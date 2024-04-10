let slideIndex = 1;
showSlides(slideIndex, "mySlides");

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
