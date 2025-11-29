// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const musicBtn = document.getElementById('musicBtn');
    const bgMusic = document.getElementById('bgMusic');
    
    // Variables
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 5000; // 5 seconds
    
    // Initialize
    initSlideshow();
    
    // Functions
    function initSlideshow() {
        // Show first slide
        showSlide(currentSlide);
        
        // Start automatic slideshow
        startSlideShow();
        
        // Add event listeners
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
        
        // Dot navigation
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const slideIndex = parseInt(this.getAttribute('data-slide'));
                goToSlide(slideIndex);
            });
        });
        
        // Music control
        musicBtn.addEventListener('click', toggleMusic);
        
        // Pause slideshow on hover
        const slideshowContainer = document.querySelector('.slideshow-container');
        slideshowContainer.addEventListener('mouseenter', pauseSlideShow);
        slideshowContainer.addEventListener('mouseleave', startSlideShow);
    }
    
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current slide
        slides[index].classList.add('active');
        
        // Activate current dot
        dots[index].classList.add('active');
        
        // Update current slide index
        currentSlide = index;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        resetSlideShow();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
        resetSlideShow();
    }
    
    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
        resetSlideShow();
    }
    
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, slideDuration);
    }
    
    function pauseSlideShow() {
        clearInterval(slideInterval);
    }
    
    function resetSlideShow() {
        pauseSlideShow();
        startSlideShow();
    }
    
    function toggleMusic() {
        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.classList.add('playing');
            musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            bgMusic.pause();
            musicBtn.classList.remove('playing');
            musicBtn.innerHTML = '<i class="fas fa-music"></i>';
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === ' ') {
            e.preventDefault();
            toggleMusic();
        }
    });
    
    // Add some visual effects on load
    setTimeout(() => {
        document.querySelector('.container').style.opacity = '1';
        document.querySelector('.container').style.transform = 'translateY(0)';
    }, 100);
    
    // Initial styles for animation
    document.querySelector('.container').style.opacity = '0';
    document.querySelector('.container').style.transform = 'translateY(20px)';
    document.querySelector('.container').style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});