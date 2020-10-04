(function () {
	const $images = document.querySelectorAll('.graphic-item');
	const $texts = document.querySelectorAll('.step');

	let $currentImage = document.querySelector('.visible');

	function setIndex() {
		$images.forEach((image, index) => {
			image.setAttribute('data-index', index);
			$texts[index].dataset.index = index;
		});
	}

	function showImage(index) {
		$currentImage = $images[index];
		$currentImage.classList.add('visible');
	}

	function hideImage() {
		$currentImage.classList.remove('visible');
	}

	function handleScroll() {
		$texts.forEach((text, index) => {
			const textPosY = text.getBoundingClientRect().top;
			console.log(textPosY);
			const currentIndex = text.dataset.index;
			if (textPosY > window.innerHeight * 0.1 && textPosY < window.innerHeight * 0.8) {
				hideImage();
				showImage(currentIndex);
			}
		});
	}

	function init() {
		setIndex();
		window.addEventListener('scroll', handleScroll);
	}

	init();
})();
