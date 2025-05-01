

$('.main-slider').slick({
  centerMode: true,
  arrows: false,
  autoplay: true,
  autoplay: Infinity,
  autoplayspeed: 2000,
  dots: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
      }
    }
  ]
});

