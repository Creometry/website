/**
 * @name testimonial carousel
 * @function handle carousel tag
 */

$(function() {
  var showSlide = 4;
  var $carousel = $('#testimonial_carousel');
  // Slick go to the last slide
  if (window.innerWidth > 1279) {
    var limit = window.innerWidth > 1400 ? 0 : 1
    var lastSlide = Math.floor($carousel.data('length') - showSlide + limit)
    setTimeout(function() {
      $carousel.slick('slickGoTo', lastSlide);
    }, 100)
  }
  // Handle carousel tag
  $carousel.slick({
    dots: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
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
  var sliderArt = $('#art_testimonials');
  $carousel.on('afterChange', function(slick, currentSlide){
    var edge = Math.floor($carousel.data('length') - showSlide - 1);
    if (currentSlide.currentSlide <= edge) {
      sliderArt.addClass('faded');
    } else {
      sliderArt.removeClass('faded');
    }
  });
});
