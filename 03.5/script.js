// Second Task
const canvas = document.getElementById('secondTask');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 3;
ctx.strokeStyle = 'white';

// D
ctx.beginPath();
ctx.moveTo(200, 80);
ctx.lineTo(200, 230);
ctx.lineTo(240, 230);
ctx.arc(240, 190, 40, 89.7, 270, Math.PI / 2, true);
ctx.lineTo(280, 120);
ctx.arc(240, 120, 40, 0, 300, Math.PI / 2, true);
ctx.lineTo(200, 80);
ctx.stroke();
// m
ctx.beginPath();
ctx.moveTo(330, 230);
ctx.lineTo(330, 130);
ctx.lineTo(400, 130);
ctx.arc(400, 150, 20, 5,  Math.PI / 15, false);
ctx.lineTo(420, 230);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(375, 230);
ctx.lineTo(375, 130);
ctx.stroke();
// y
ctx.beginPath();
ctx.moveTo(470, 270);
ctx.lineTo(490, 270);
ctx.lineTo(540, 130);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(470, 130);
ctx.lineTo(505, 230);
ctx.stroke();
// t
ctx.beginPath();
ctx.moveTo(600, 80);
ctx.lineTo(600, 270);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(580, 130);
ctx.lineTo(640, 130);
ctx.stroke();
// r
ctx.beginPath();
ctx.moveTo(680, 130);
ctx.lineTo(680, 230);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(680, 140);
ctx.lineTo(730, 130);
ctx.lineTo(730, 140);
ctx.stroke();
// o
ctx.beginPath();
ctx.arc(810, 180, 50, 0,  Math.PI * 2);
ctx.stroke();

//V
ctx.beginPath();
ctx.moveTo(160, 330);
ctx.lineTo(210, 480);
ctx.lineTo(260, 330);
ctx.stroke();
// o
ctx.beginPath();
ctx.arc(335, 430, 50, 0,  Math.PI * 2);
ctx.stroke();
//z
ctx.beginPath();
ctx.moveTo(410, 370);
ctx.lineTo(480, 370);
ctx.lineTo(410, 480);
ctx.lineTo(480, 480);
ctx.stroke();
//n
ctx.beginPath();
ctx.moveTo(530, 480);
ctx.lineTo(530, 370);
ctx.lineTo(570, 370);
ctx.arc(570, 390, 20, 5,  Math.PI / 15, false);
ctx.lineTo(590, 480);
ctx.stroke();
//i
ctx.beginPath();
ctx.moveTo(640, 370);
ctx.lineTo(640, 480);
ctx.stroke();
//a
ctx.beginPath();
ctx.moveTo(740, 370);
ctx.lineTo(700, 370);
ctx.arc(700, 390, 20, 5,  Math.PI / 1, true);
ctx.lineTo(680, 460);
ctx.arc(700, 460, 20, 3.3,  Math.PI / 2, true);
ctx.lineTo(720, 480);
ctx.arc(720, 460, 20, 1,  Math.PI / 25, true);
ctx.lineTo(740, 370);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(740, 460);
ctx.lineTo(760, 480);
ctx.stroke();
//k
ctx.beginPath();
ctx.moveTo(810, 330);
ctx.lineTo(810, 480);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(810, 420);
ctx.lineTo(880, 380);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(835, 405);
ctx.lineTo(880, 480);
ctx.stroke();