(function () {
	const $images = document.querySelectorAll('.graphic-item');
	const $texts = document.querySelectorAll('.step');

	let $currentImage = document.querySelector('.visible');
	let actionObj;

	function setIndex() {
		$images.forEach((image, index) => {
			image.setAttribute('data-index', index);
			$texts[index].dataset.index = index;
		});
	}

	function showImage(index) {
		$currentImage = $images[index];
		$currentImage.classList.add('visible');
		if ($currentImage.dataset.action) {
			const key = $currentImage.dataset.action;
			actionObj[key](true);
		}
	}

	function hideImage() {
		$currentImage.classList.remove('visible');
		if ($currentImage.dataset.action) {
			const key = $currentImage.dataset.action;
			actionObj[key](false);
		}
	}

	function handleScroll() {
		$texts.forEach((text) => {
			const textPosY = text.getBoundingClientRect().top;
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

		actionObj = {
			bird: document.querySelector('[data-index="2"] .bird'),
			bird2: document.querySelector('[data-index="5"] .bird'),
			flyStraight(flag) {
				if (flag) this.bird.style.transform = 'translateX(110vw)';
				else this.bird.style.transform = 'translateX(-100%)';
			},
			flyDiagonally(flag) {
				if (flag) this.bird2.style.transform = `translate(${window.innerWidth}px, -${window.innerHeight * 0.8}px)`;
				else this.bird2.style.transform = '';
			},
		};
	}

	init();
})();
