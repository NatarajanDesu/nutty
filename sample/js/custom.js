(function($, jQuery) {

$('.trm-prod-slider').slick({
	infinite: false,
	arrows: true,
	speed: 800,
	slidesToShow: 2,
	slidesToScroll: 2,
	autoplay: false,
	autoplaySpeed: 5000,
	dots:false,
	prevArrow: '<button type="button" data-role="none" class="slick-prev trackMe" omniTag="Product Slider_Previous" omniInt="Interaction"></button>',
	nextArrow: '<button type="button" data-role="none" class="slick-next trackMe" omniTag="Product Slider_Next" omniInt="Interaction"></button>',
	dotsClass: 'carousel-paginator-list',
	customPaging: function(slider, i) {
		return '<button type="button" data-role="none" class="carousel-paginator-item trackMe" omniint="Interaction" omnitag="POV pagination_' + (i + 1) + '">' + (i + 1) + '</button>';
	},
	responsive: [
    {
      breakpoint: 737,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ] 
});

$('.trm-dypricing-products .trm-full-prod-slider').slick({
	infinite: false,
	arrows: true,
	speed: 800,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 5000,
	dots:false,
	prevArrow: '<button type="button" data-role="none" class="slick-prev trackMe" omniTag="Product Slider_Previous" omniInt="Interaction"></button>',
	nextArrow: '<button type="button" data-role="none" class="slick-next trackMe" omniTag="Product Slider_Next" omniInt="Interaction"></button>',
	dotsClass: 'carousel-paginator-list',
	customPaging: function(slider, i) {
		return '<button type="button" data-role="none" class="carousel-paginator-item trackMe" omniint="Interaction" omnitag="POV pagination_' + (i + 1) + '">' + (i + 1) + '</button>';
	},
	responsive: [
    {
      breakpoint: 737,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ] 
});

})(TRM.$, TRM.$);