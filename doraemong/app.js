const $leftEye = document.querySelector('.left');
const $rightEye = document.querySelector('.right');

function moveEyes(target, mouse) {
  const $pupil = target.querySelector('.pupil'); // 눈동자
  const pupilArea = $pupil.getBoundingClientRect();
  const { x, y, width, height } = pupilArea;
  const centerX = x + width * 0.5;
  const centerY = y + height * 0.5;

  const degree =
    (Math.atan2(mouse.y - centerY, mouse.x - centerX) * 180) / Math.PI;
  $pupil.style.transform = `rotate(${degree + 90}deg)`; // + 90도 : 최초 위치 보정
}

window.addEventListener('mousemove', (e) => {
  const posX = e.clientX;
  const posY = e.clientY;
  const mouse = {
    x: posX,
    y: posY,
  };

  moveEyes($leftEye, mouse);
  moveEyes($rightEye, mouse);
});
