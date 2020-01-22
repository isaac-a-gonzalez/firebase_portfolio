/*

Vanilla Template

https://templatemo.com/tm-526-vanilla

*/

jQuery(document).ready(function ($) {

  'use strict';

  var top_header = $('.parallax-content');
  top_header.css({ 'background-position': 'center center' }); // better use CSS

  $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({ 'background-position': 'center calc(50% + ' + (st * .5) + 'px)' });
    // top_header.css({ 'background-position': 'center calc(0% + ' + (st * .5) + 'px)' });
  });


  $('body').scrollspy({
    target: '.fixed-side-navbar',
    offset: 200
  });

  // hide contact_me form and display thank you for your submission

  // function SubForm() {
  //   $.ajax({
  //     url: '/Person/Edit/@Model.Id/',
  //     type: 'post',
  //     data: $('#myForm').serialize(),
  //     success: function () {
  //       alert("worked");
  //     }
  //   });
  // }

  // smoothscroll on sidenav click

  $('.tabgroup > div').hide();
  $('.tabgroup > div:first-of-type').show();
  $('.tabs a').click(function (e) {
    e.preventDefault();
    var $this = $(this),
      tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
      others = $this.closest('li').siblings().children('a'),
      target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();

  })

  var owl = $("#owl-testimonials");

  owl.owlCarousel({

    pagination: true,
    paginationNumbers: false,
    autoPlay: 6000, //Set AutoPlay to 3 seconds
    items: 3, //10 items above 1000px browser width
    itemsDesktop: [1000, 3], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option

  });

  // thank you for submission section

  $('#contact').on('submit', function (e) {
    e.preventDefault();

    //get the name field value
    var name = $('#name').val();
    //get the name field value
    // var email = $('#email').val();
    // //get the comments
    var message = $('#message').val();

    //pretend we don't need validation

    //send to formspree
    $.ajax({
      url: 'https://formspree.io/xwklygkj',
      method: 'POST',
      data: {
        name: name,
        // _replyto: email,
        // email: email,
        message: message,
        _subject: 'My Form Submission',
      },
      dataType: "json",
      success: function () {
        console.log('success');
        $('#formBlock').hide();
        $('#thankyouBlock').show();
      }

    });

  });


});
