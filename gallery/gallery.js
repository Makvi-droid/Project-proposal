$(document).ready(function() {
    function startCarousel(sectionId) {
        let currentIndex = 0;
        const images = $(sectionId).find('.carousel-image');
        images.eq(currentIndex).addClass('active');

        setInterval(function() {
            images.eq(currentIndex).removeClass('active');
            currentIndex = (currentIndex + 1) % images.length;
            images.eq(currentIndex).addClass('active');
        }, 3000); // Change image every 3 seconds
    }

    // Initialize carousel for each section
    startCarousel('#holiday-sale');
    startCarousel('#trending');
});
