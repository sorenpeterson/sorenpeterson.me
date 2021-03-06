Template.PortfolioItem.events({
	'click .portfolio-item-container': function(evt, tmpl) {
		$(tmpl.find('.portfolio-item-expanded')).removeClass('closed').addClass('open');
	},
	'click .portfolio-item-expanded .close': function(evt, tmpl) {
		$(tmpl.find('.portfolio-item-expanded')).removeClass('open').addClass('closed');
	},
	'click .portfolio-item-expanded .directional-button.right': function(evt, tmpl) {
		var $open_container = $(tmpl.find('.screenshot-container.open'));
		$open_container.removeClass('open');
		var $next = $open_container.next();
		if(!$next[0]) {
			$next = $open_container;
		}
		$next.addClass('open');
	},
	'click .portfolio-item-expanded .directional-button.left': function(evt, tmpl) {
		var $open_container = $(tmpl.find('.screenshot-container.open'));
		$open_container.removeClass('open');
		var $prev = $open_container.prev();
		if(!$prev[0]) {
			$prev = $open_container;
		}
		$prev.addClass('open');
	}
});

Template.PortfolioItem.onRendered(function() {
	$('.screenshot-container').height(
		$('.portfolio-item-expanded').height() - 100
	);
	$(window).resize(function() {
		$('.screenshot-container').height(
			$('.portfolio-item-expanded').height() - 100
		);
	});
});

Template.HobbiesItem.events({
	'click .right': function(evt, tmpl) {
		var video = tmpl.find('.hobbies-content-item.open video');
		if(video) {
			video.pause();
		}
		var $open_container = $(tmpl.find('.hobbies-content-item.open'));
		$open_container.removeClass('open');
		var $next = $open_container.next();
		if(!$next[0]) {
			$next = $open_container;
		}
		$next.addClass('open');
	},
	'click .left': function(evt, tmpl) {
		tmpl.find('.hobbies-content-item.open video').pause();
		var $open_container = $(tmpl.find('.hobbies-content-item.open'));
		$open_container.removeClass('open');
		var $prev = $open_container.prev();
		if(!$prev[0]) {
			$prev = $open_container;
		}
		$prev.addClass('open');
	}
});

