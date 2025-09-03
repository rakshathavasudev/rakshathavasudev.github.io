(function() {
	function clamp(value, min, max) {
		return Math.max(min, Math.min(max, value));
	}

	function getItemsPerView() {
		var width = window.innerWidth || document.documentElement.clientWidth;
		if (width <= 736) return 1;
		if (width <= 1140) return 2;
		return 3;
	}

	function initCarousel(root) {
		var track = root.querySelector('.carousel-track');
		var prev = root.querySelector('.carousel-button.prev');
		var next = root.querySelector('.carousel-button.next');
		var items = Array.prototype.slice.call(track.children);
		var index = 0;

		function update() {
			var perView = getItemsPerView();
			var maxIndex = Math.max(0, items.length - perView);
			index = clamp(index, 0, maxIndex);
			var firstItem = items[0];
			if (!firstItem) return;
			var itemWidth = firstItem.getBoundingClientRect().width;
			var gap = parseFloat(getComputedStyle(track).gap) || 0;
			var offset = index * (itemWidth + gap);
			track.style.transform = 'translateX(' + (-offset) + 'px)';
			prev.disabled = index === 0;
			next.disabled = index === maxIndex;
		}

		prev.addEventListener('click', function() {
			index -= getItemsPerView();
			update();
		});

		next.addEventListener('click', function() {
			index += getItemsPerView();
			update();
		});

		window.addEventListener('resize', function() {
			// Keep index within range when items per view changes
			update();
		});

		update();
	}

	document.addEventListener('DOMContentLoaded', function() {
		var carousels = document.querySelectorAll('.projects-carousel');
		Array.prototype.forEach.call(carousels, initCarousel);
	});
})();


