const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const player = new Player(canvas.width / 2, canvas.height / 2, 50, 'tomato');
player.draw();
