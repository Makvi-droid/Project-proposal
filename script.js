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
