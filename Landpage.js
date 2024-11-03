$(document).ready(function() {
    const itemsPerPage = 3;  // Set the number of items per page
    const totalItems = $('.product-item').length;  // Count total items
    const totalPages = Math.ceil(totalItems / itemsPerPage);  // Calculate total pages

    function showPage(page) {
        $('.product-item').hide();  // Hide all items
        let start = (page - 1) * itemsPerPage; // Calculate starting index
        $('.product-item').slice(start, start + itemsPerPage).show();  // Show items for current page
    }

    // Initially show the first page
    showPage(1);

    // Pagination click event
    $('.pagination .page-link').on('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const pageNum = parseInt($(this).text());  // Get the page number from text

        // Handle previous and next buttons
        if ($(this).parent().hasClass('page-item') && $(this).text() === '«') {
            // Previous button logic
            const currentPage = $('.pagination .active').text();
            const newPage = Math.max(1, currentPage - 1);
            showPage(newPage);
        } else if ($(this).parent().hasClass('page-item') && $(this).text() === '»') {
            // Next button logic
            const currentPage = $('.pagination .active').text();
            const newPage = Math.min(totalPages, parseInt(currentPage) + 1);
            showPage(newPage);
        } else {
            // For number links
            if (!isNaN(pageNum)) {
                showPage(pageNum);  // Show selected page
            }
        }

        // Highlight active page
        $('.pagination .page-item').removeClass('active'); // Remove active class
        $(this).parent().addClass('active'); // Add active class to current page
    });
});
