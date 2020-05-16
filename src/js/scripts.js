/* eslint-disable no-invalid-this */
/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
// Freelancer Theme JavaScript

function showModal(id) {
  $('.modal').modal('hide');
  $('.loading').addClass('show');
  setTimeout(function() {
    $('#'+id).modal({
      backdrop: 'static', // to disable click close
    });
  }, 400);
  setTimeout(function() {
    $('.loading').removeClass('show');
  }, 550);
}

(function($) {
  'use strict'; // Start of use strict

  // Link directly to a modal
  $(window.location.hash).modal('show');
  // Update URL when modal is opened
  $('.modal').on('show.bs.modal', function() {
    window.location.hash=$(this).attr('id');
  });
  // Update URL when modal is closed
  function revertToOriginalURL() {
    const original = window.location.href.substr(0,
        window.location.href.indexOf('#'));
    history.replaceState({}, document.title, original);
  }
  $('.modal').on('hidden.bs.modal', function() {
    revertToOriginalURL();
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('.page-scroll a').bind('click', function(event) {
    const $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50),
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51,
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });

  // Offset for Main Navigation
  $('#mainNav').affix({
    offset: {
      top: 100,
    },
  });

  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Floating label headings for the contact form
  $(function() {
    $('body').on('input propertychange', '.floating-label-form-group', 
        function(e) {
          $(this).toggleClass('floating-label-form-group-with-value', 
              !!$(e.target).val());
        }).on('focus', '.floating-label-form-group', function() {
      $(this).addClass('floating-label-form-group-with-focus');
    }).on('blur', '.floating-label-form-group', function() {
      $(this).removeClass('floating-label-form-group-with-focus');
    });
  });
})(jQuery); // End of use strict
