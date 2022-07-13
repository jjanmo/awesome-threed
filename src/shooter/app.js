const canvas = document.querySelector('#canvas');

function init() {
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

init();
