$(document).ready(function () {
    $('#holidayCarousel, #trendingCarousel').on('slid.bs.carousel', function () {

    });
  });

$(document).ready(function(){

    document.getElementById('cartBtn').addEventListener('click', function() {
        var cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
        cartModal.show();
    });

});

$(document).ready(function () {
    
  $('form.needs-validation').on('submit', function (event) {
    
      if (!this.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
      }

     
      $(this).addClass('was-validated');
  });

 
  $('#validationCustomUsername').on('input', function () {
      if ($(this).val().trim() === '') {
          $(this).addClass('is-invalid').removeClass('is-valid');
      } else {
          $(this).addClass('is-valid').removeClass('is-invalid');
      }
  });

  
  $('#invalidCheck').on('change', function () {
      if (!this.checked) {
          $(this).addClass('is-invalid').removeClass('is-valid');
      } else {
          $(this).addClass('is-valid').removeClass('is-invalid');
      }
  });
});

$(document).ready(function () {

  $('form.needs-validation').on('submit', function (event) {
      let formIsValid = true;

      
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const username = $('#validationTooltipUsername');
      if (!emailPattern.test(username.val())) {
          username.addClass('is-invalid').removeClass('is-valid');
          formIsValid = false;
      } else {
          username.addClass('is-valid').removeClass('is-invalid');
      }

      
      const password = $('#validationTooltipPassword');
      if (password.val().trim() === '') {
          password.addClass('is-invalid').removeClass('is-valid');
          formIsValid = false;
      } else {
          password.addClass('is-valid').removeClass('is-invalid');
      }

    
      if (!formIsValid) {
          event.preventDefault();
          event.stopPropagation();
      }
      
     
      $(this).addClass('was-validated');
  });
});

//add to cart

const products = [
    { id: 1, name: "Crochet Hat 1", price: 179.99, img: "img/hat1.jpg", description: "Black & White Beat"},
    { id: 2, name: "Crochet Hat 2", price: 159.99, img: "img/hat2.jpg", description: "Blissful Hues"},
    { id: 3, name: "Crochet Hat 3", price: 135.99, img: "img/hat3.jpg", description: "Reggae Rhythm"},
    { id: 4, name: "Crochet Hat 4", price: 120.99, img: "img/hat4.jpg", description: "Grape Smoke"},
    { id: 5, name: "Crochet Hat 5", price: 105.99, img: "img/hat5.jpg", description: "Pacific Blues"},
    { id: 6, name: "Crochet Hat 6", price: 99.99, img: "img/hat6.jpg", description: "Peachy Keen"},
    { id: 7, name: "Crochet Scarf 1", price: 199.99, img: "img/scarf1.jpg", description: "Rustic Warmth"},
    { id: 8, name: "Crochet Scarf 2", price: 169.99, img: "img/scarf2.jpg", description: "Blushed Mocha"},
    { id: 9, name: "Crochet Scarf 3", price: 140.99, img: "img/scarf3.jpg", description: "Midnight Scarlet"},
    { id: 9, name: "Crochet Scarf 4", price: 125.99, img: "img/scarf4.jpg", description: "Ethereal Beige"},
    { id: 10, name: "Crochet Scarf 5", price: 110.99, img: "img/scarf5.jpg", description: "Cloud Nine"},
    { id: 11, name: "Crochet Scarf 6", price: 99.99, img: "img/scarf6.jpg", description: "Dawn Fog"},
]

// Add to Cart functionality
$(document).ready(function(){

    $(".add-to-cart").off("click").on("click", function () {
        const productName = $(this).data("name");
        const productPrice = $(this).data("price");
        const productImg = $(this).data("img");
    
        const cartItem = `
            <li class="list-group-item d-flex align-items-center">
        <img src="${productImg}" alt="${productName}" class="me-3" style="width: 50px; height: 50px;">
        <div class="flex-grow-1">
            <strong>${productName}</strong>
            <p class="mb-0">PHP ${productPrice.toFixed(2)}</p>
        </div>
        <button class="btn btn-warning btn-sm ms-auto checkout-btn" 
            data-name="${productName}" 
            data-price="${productPrice}">
            Checkout
        </button>
        <button class="btn btn-danger btn-sm ms-2 delete-btn">Delete</button>
    </li>
        `;
    
        const $cartItems = $("#cart-items");
        if ($cartItems.find("li").first().text() === "Your cart is empty") {
            $cartItems.empty();
        }
    
        $cartItems.append(cartItem);

        $(this).closest(".modal").modal("hide");
    
        alert(`${productName} has been added to your cart!`);
    });

    $(document).on("click", ".checkout-btn", function () {
       
        const productName = $(this).data("name");
        const productPrice = $(this).data("price");
    
       
        $("#checkoutProductName").text(productName);
        $("#checkoutProductPrice").text(productPrice.toFixed(2));
    
        $("#checkoutModal").data("currentItem", $(this).closest("li"));

        $("#checkoutModal").modal("show");
    });
    
    //check-out button function
    $("#confirmCheckout").on("click", function () {
        const userName = $("#userName").val();
        const userAddress = $("#userAddress").val();
    
        if (userName && userAddress) {
            
            const $currentItem = $("#checkoutModal").data("currentItem");
          
            $currentItem.remove();
           
            const $cartItems = $("#cart-items");
            if ($cartItems.children().length === 0) {
                $cartItems.html('<li class="list-group-item">Your cart is empty</li>');
            }
              
            $("#userName").val("");
            $("#userAddress").val("");
         
            $("#checkoutModal").modal("hide");
    
            alert(`Thank you, ${userName}! Your order for ${$("#checkoutProductName").text()} has been placed and will be shipped to ${userAddress}.`);
        } else {
            alert("Please fill in all required fields.");
        }

        $("#userName").val("");
        $("#userAddress").val("");
        $("#checkoutProductName").text("");
        $("#checkoutProductPrice").text("");
        $(this).removeData("currentItem");

    });


    //delete button function
    $(document).on("click", ".delete-btn", function () {
        
        $(this).closest("li").remove();
    
        
        const $cartItems = $("#cart-items");
        if ($cartItems.children().length === 0) {
            $cartItems.html('<li class="list-group-item">Your cart is empty</li>');
        }
    });
    
    
    
});
