// First Task
const canvas = document.getElementById('firstTask');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 3;
ctx.strokeStyle = 'white';

ctx.beginPath();
ctx.moveTo(150, 10);
ctx.lineTo(10, 300);
ctx.lineTo(300, 300);
ctx.lineTo(150, 10);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(525, 10);
ctx.lineTo(350, 300);
ctx.lineTo(700, 300);
ctx.lineTo(525, 10);
ctx.fillStyle = 'orange';
ctx.fill();