// AOS
AOS.init({
  duration: 1000,
})

jQuery(document).ready(function ($) {
  'use strict';
  
  $('[data-toggle="popover"]').popover({
    html: true,
    content: function() {
      return $('#popover-content').html();
    }
  });

  // Animsition
  $(".animsition").animsition();

  // Scrollax
  $.Scrollax();

  // Smooth scroll
  var $root = $('html, body');

  $('a.js-smoothscroll[href^="#"]').click(function () {
    $root.animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 40
    }, 500);

    return false;
  });



  // Show menu 
  if ($(window).width() > 768) {
    $('body').removeClass('menu-open');
    $('.js-templateux-menu').css('display', 'block');
  }
  // Window Resize
  $(window).resize(function () {
    var $this = $(this);
    $('.js-templateux-menu li').removeClass('staggard');
    $('.js-toggle-menu').removeClass('is-active');
    if ($this.width() > 768) {
      $('body').removeClass('menu-open');
      $('.js-templateux-menu').css('display', 'block');

    } else {
      if ($this.width() < 768) {
        $('.js-templateux-menu').css('display', 'none');
      }
    }
  });

  // Hamburger Button 
  $('.js-toggle-menu').on('click', function (e) {
    e.preventDefault();

    var $this = $(this);

    if ($('body').hasClass('menu-open')) {
      $this.removeClass('is-active');
      $('body').removeClass('menu-open');
      $('.js-templateux-menu li').removeClass('staggard');
    } else {
      $this.addClass('is-active');
      $('body').addClass('menu-open');

      $('.js-templateux-menu li').each(function (k) {
        var $this = $(this);
        setTimeout(function () {
          $this.addClass('staggard');
        }, 100 * k);
      });

    }

    if ($('.templateux-menu').is(':visible')) {
      $('.js-templateux-menu').fadeOut(300);
    } else {
      $('.js-templateux-menu').fadeIn(300);
    }
  })
});

// Slick menu

$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});

$.fn.extend({
  treed: function (o) {
    
    var openedClass = 'fa-minus-square'; 
    var closedClass = 'fa-plus-square';
    
    if (typeof o != 'undefined'){
      if (typeof o.openedClass != 'undefined'){
      openedClass = o.openedClass;
      }
      if (typeof o.closedClass != 'undefined'){
      closedClass = o.closedClass;
      }
    };
    
      //initialize each of the top levels
      var tree = $(this);
      tree.addClass("tree");
      tree.find('li').has("ul").each(function () {
          var branch = $(this); //li with children ul
          branch.prepend("<i class='indicator far " + closedClass + "'></i>");
          branch.addClass('branch');
          branch.on('click', function (e) {
              if (this == e.target) {
                  var icon = $(this).children('i:first');
                  icon.toggleClass(openedClass + " " + closedClass);
                  $(this).children().children().toggle();
              }
          })
          branch.children().children().toggle();
      });
      //fire event from the dynamically added icon
    tree.find('.branch .indicator').each(function(){
      $(this).on('click', function () {
          $(this).closest('li').click();
      });
    });
      //fire event to open branch if the li contains an anchor instead of text
      tree.find('.branch>a').each(function () {
          $(this).on('click', function (e) {
              $(this).closest('li').click();
              e.preventDefault();
          });
      });
      //fire event to open branch if the li contains a button instead of text
      tree.find('.branch>button').each(function () {
          $(this).on('click', function (e) {
              $(this).closest('li').click();
              e.preventDefault();
          });
      });
  }
});

//Initialization of treeviews

$('#tree1').treed();

$('#tree2').treed({openedClass:'far fa-folder-open', closedClass:'far fa-folder'});

$('#tree3').treed({openedClass:'fas fa-chevron-right', closedClass:'fas fa-chevron-down'});

