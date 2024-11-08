$(document).ready(function () {
    $('#holidayCarousel, #trendingCarousel').on('slid.bs.carousel', function () {
      console.log('Carousel slide finished');
      // You can add any custom functionality here, such as animations after slide
    });
  });

$(document).ready(function(){

    document.getElementById('cartBtn').addEventListener('click', function() {
        var cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
        cartModal.show();
    });

});