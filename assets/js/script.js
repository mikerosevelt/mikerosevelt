const sections = [...document.querySelectorAll('section')];
const link = (id) => document.querySelector(`a[href="#${id}"]`);

const inView = (element) => {
	var top = element.offsetTop;
	var height = element.offsetHeight;

	while (element.offsetParent) {
		element = element.offsetParent;
		top += element.offsetTop;
	}
	return (
		top < window.pageYOffset + window.innerHeight &&
		top + height > window.pageYOffset
	);
};

const init = () => {
	function update() {
		let next = false;

		sections.forEach((section) => {
			const current = link(section.id);

			if (inView(section) && !next) {
				current.classList.add('current', 'active');
				next = true;
			} else {
				current.classList.remove('current', 'active');
			}
		});
	}

	update();
	window.addEventListener('scroll', update);
};

init();

$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
		$('body,html').animate(
			{
				scrollTop: 0,
			},
			400
		);
		return false;
	});

	$(window).scroll(function () {
		if ($(document).scrollTop() > 1) {
			// Navigation Bar
			$('.navbar').removeClass('fadeIn');
			$('body').addClass('shrink');
			$('.navbar').addClass('animated fadeInDown');
		} else {
			$('.navbar').removeClass('fadeInDown');
			$('body').removeClass('shrink');
			$('.navbar').addClass('animated fadeIn');
		}
	});

	$(window).on('load', function () {
		if ($(document).scrollTop() > 1) {
			// Navigation Bar
			$('.navbar').removeClass('fadeIn');
			$('body').addClass('shrink');
			$('.navbar').addClass('animated fadeInDown');
			$('#back-to-top').fadeIn();
		} else {
			$('.navbar').removeClass('fadeInDown');
			$('body').removeClass('shrink');
			$('.navbar').addClass('animated fadeIn');
			$('#back-to-top').fadeOut();
		}
	});
});
