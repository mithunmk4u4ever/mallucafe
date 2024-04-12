

(function ($) {
  "use strict";

    // ========================= Header Hide Click On Body Js Start =====================
    $(document).on('click', function(event) {
      if (!$(event.target).closest("#header").length) {
        if($('.navbar-collapse').hasClass('show')){
          document.getElementById("hiddenNav").click();
        }
      }
    });
    // ========================= Header Hide Click On Body Js End =====================
  
  // ==========================================
  //      Start Document Ready function
  // ==========================================
  $(document).ready(function () {
    
    // ========================= Toggle Search Js Start =====================
      $('.search-icon').on('click', function(){
          $('.search-input').toggleClass('show')
          $('.search-icon').toggleClass('close');
      });
    // ========================= Toggle Search Js End =====================
    
  // ========================= Odometer Counter Js Start =====================
  // Odometer Counter
  $(".counterup-item").each(function () {
    $(this).isInViewport(function (status) {
      if (status === "entered") {
        for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
          var el = document.querySelectorAll('.odometer')[i];
          el.innerHTML = el.getAttribute("data-odometer-final");
        }
      }
    });
  });
  // ========================= Counter Js End =====================

  // ========================= Fr Audio Js Start =====================
    $('.circle-audio').parent('.fraudio-container').addClass('circle-audio-container'); 
    // Home Two Banner
    $('.center-position').parent('.fraudio-container').addClass('center-position-container'); 
    // Chart Bottom
    $('.chart-audio').parent('.fraudio-container').addClass('chart-audio-container'); 
    // Chart Single 
    $('.chart-single').parent('.fraudio-container').addClass('chart-single-container'); 
  // ========================= Fr Audio Js End =====================

    // ========================= Slick Slider Js Start =====================
    $('.event-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1500,
      dots: false,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><span class="icon-left-arrow-4"></span></button>',
      nextArrow: '<button type="button" class="slick-next"><span class="icon-right-arrow-4"></span></button>',
      responsive: [
          {
            breakpoint: 1199,
            settings: {
              arrows: true,
              slidesToShow: 2,
              dots: false,
            }
          },
          {
            breakpoint: 991,
            settings: {
              arrows: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              arrows: true,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 575,
            settings: {
              arrows: false,
              dots: true,
              slidesToShow: 1
            }
          }
        ]
    });
  // ========================= Slick Slider Js End =====================

    // ========================= Team Slider Js Start =====================
    $('.team-item-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1500,
      dots: true,
      arrows: false,
      prevArrow: '<button type="button" class="slick-prev"><span class="icon-left-arrow-4"></span></button>',
      nextArrow: '<button type="button" class="slick-next"><span class="icon-right-arrow-4"></span></button>',
      responsive: [
          {
            breakpoint: 1199,
            settings: {
              arrows: false,
              slidesToShow: 2,
              dots: true,
            }
          },
          {
            breakpoint: 991,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 575,
            settings: {
              arrows: false,
              dots: true,
              slidesToShow: 1
            }
          }
        ]
    });
  // ========================= Team Slider Js End =====================

    // ========================= Chart Single Slider Js Start =====================
    $('.chart-single-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1500,
      dots: true,
      arrows: false,
      prevArrow: '<button type="button" class="slick-prev"><span class="icon-left-arrow-4"></span></button>',
      nextArrow: '<button type="button" class="slick-next"><span class="icon-right-arrow-4"></span></button>',
      responsive: [
          {
            breakpoint: 1199,
            settings: {
              arrows: false,
              slidesToShow: 2,
              dots: true,
            }
          },
          {
            breakpoint: 991,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 575,
            settings: {
              arrows: false,
              dots: true,
              slidesToShow: 1
            }
          }
        ]
    });
  // ========================= Chart Single Slider Js End =====================

  // ========================= Testimonails Home One Slick Slider Js Start =====================
 $('.testimonials-content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: true,
  asNavFor: '.testimonials-thumb-slider',
  speed: 1000,
  autoplaySpeed: 2000,
});
$('.testimonials-thumb-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.testimonials-content',
  arrows: false,
  dots: false,
  focusOnSelect: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
});
  // ========================= Testimonails Home One Slick Slider Js End =====================

  // ========================= Magnific Popup Js Start =====================
  $('.event-item-two__plus').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
  });
  // ========================= Magnific Popup Js End =====================

  // ========================= Magnific Popup Of Galley Js Start =====================
  $('.gallery-item__popup').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
  });
  // ========================= Magnific Popup Of Galley Js End =====================

  // ========================= Testimonails Home Two Slick Slider Js Start =====================
  $('.testimonial-two-thumbs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: '.testimonials-two-content',
    centerMode: true,
    speed: 1000,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: false,
          slidesToShow: 3,
          dots: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.testimonials-two-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.testimonial-two-thumbs',
    arrows: false,
    dots: true,
    focusOnSelect: true,
    speed: 1000,
    autoplaySpeed: 2000,
  });
    // ========================= Testimonails Home Two Slick Slider Js End =====================

    // ========================= Nice Select Js Start =====================
    //Nice Select Js\
    $('select').niceSelect();
    // ========================= Nice Select Js End =====================

      // ========================= Password Show Hide Js Start ==========================
      $(".toggle-password").click(function() {
        $(this).toggleClass("fa-eye-slash");
        var input = $($(this).attr("id"));
        if (input.attr("type") == "password") {
        input.attr("type", "text");
        } else {
        input.attr("type", "password");
        }
      });
    // ========================= Password Show Hide Js End ==========================

  });
  // ==========================================
  //      End Document Ready function
  // ==========================================

  // ========================= Preloader Js Start =====================
  $(window).on("load", function(){
    $('.preloader1').fadeOut(); 
  })
    // $(window).on("load", function(){
    //   $('.preloader').fadeOut(); 
    // })
    // ========================= Preloader Js End=====================

    // ========================= Header Sticky Js Start =====================
    $(window).on('scroll', function(){
      if ($(window).scrollTop() >= 300) {
          $('.header-bottom').addClass('fixed-header');
      }
      else {
          $('.header-bottom').removeClass('fixed-header');
      }
    });
    // ========================= Header Sticky Js End=====================

    //================================= Scroll To Top Icon Js Start =========================
    var btn = $('.scroll-top');

    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
//================================= Scroll To Top Icon Js End ===========================

})(jQuery);

