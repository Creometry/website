/**
 * @name services carouses
 * @function handle slick carousel for services lit
 */

$(document).ready(function(){
  var showSlide = 4;
  var $carousel = $('#services_carousel');
  // Slick go to the last slide
  if (window.innerWidth > 1200) {
    var prop = window.innerWidth > 1400 ? 0 : 1;
    var lastSlide = Math.floor($carousel.data('length') - showSlide + prop);
    setTimeout(function() {
      $carousel.slick('slickGoTo', lastSlide);
    }, 100)
  }

  // slick carousel config
  $carousel.slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: showSlide,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  
  // Fade effect
  var sliderArt = $('#art_services');
  $carousel.on('afterChange', function(slick, currentSlide){
    var prop = window.innerWidth > 1400 ? 1 : 0;
    var edge = Math.floor($carousel.data('length') - showSlide - prop);
    if (currentSlide.currentSlide <= edge) {
      sliderArt.addClass('faded');
    } else {
      sliderArt.removeClass('faded');
    }
  });

  // Handle slick navigation
  $('#prev_services').click(function() {
    $carousel.slick('slickPrev');
  });
  $('#next_services').click(function() {
    $carousel.slick('slickNext');
  });
})