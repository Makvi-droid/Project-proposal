$(document).ready(function () {
  const $sign_in_btn = $('#sign-in-btn');
  const $sign_up_btn = $('#sign-up-btn');
  const $container = $('.container');

  $sign_up_btn.on('click', function () {
    $container.addClass('sign-up-mode');
  });

  $sign_in_btn.on('click', function () {
    $container.removeClass('sign-up-mode');
  });
});


$(document).ready(function () {
  
  $('#login-form').on('submit', function (event) {
    event.preventDefault();  
    let form = this;
    
    // Check if the form is valid
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Handle successful form submission here (e.g., login process)
      alert('Logging in...');
    }

    form.classList.add('was-validated');
  });

  // Sign up form validation
  $('#signup-form').on('submit', function (event) {
    event.preventDefault();  // Prevent form submission to allow validation
    let form = this;

    // Custom validation for password confirmation
    let password = $('#signup-password').val();
    let confirmPassword = $('#signup-confirm-password').val();

    // Check if passwords match
    if (password !== confirmPassword) {
      $('#signup-confirm-password')[0].setCustomValidity('Passwords do not match');
      // Prevent form submission if passwords don't match
      event.stopPropagation();
    } else {
      $('#signup-confirm-password')[0].setCustomValidity('');
    }

    // Check if the form is valid and proceed with submission
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Handle successful form submission here (e.g., account creation)
      alert('Signing up...');
    }

    form.classList.add('was-validated');
  });
});
