let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-item");
const dots = document.getElementsByClassName("dot");
const prevButton = document.querySelector(".carousel-control.prev");
const nextButton = document.querySelector(".carousel-control.next");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].className = "carousel-item";
    }

    slides[slideIndex].classList.add("active");

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";

    // Disable/Enable buttons based on slide position
    prevButton.style.display = slideIndex === 0 ? 'none' : 'inline-block';
    nextButton.style.display = slideIndex === slides.length - 1 ? 'none' : 'inline-block';
}

function nextSlide() {
    if (slideIndex < slides.length - 1) {
        slideIndex++;
        showSlides();
    }
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
        showSlides();
    }
}

function currentSlide(index) {
    slideIndex = index - 1;
    showSlides();
}

// Initialize carousel
showSlides();
