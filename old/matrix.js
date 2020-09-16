// Modified from http://steamcommunity.com/sharedfiles/filedetails/?id=892374811
var canvas = document.getElementById("matrix");
var ctx = canvas.getContext("2d");

canvas.width = screen.width;
canvas.height = screen.height;

// Unicode Russian characters
var matrix = "\u0402\u0403\u040A\u040B\u0411\u0414\u0416\u0419\u041B\u0423\u0424\u0426\u0429\u042A\u042E\u042F\u0434\u0436\u0444\u0452\u0457\u045C\u0461\u0463\u0464\u0466\u0468\u046A\u046E\u0471\u0472\u047A\u0481\u0482\u0483\u0494\u0498\u049C\u04A0\u04A8\u04B0\u04B4\u04FC\u04FD\u04FE\u04C7\u04C3\u04C1";
matrix = matrix.split('');

// TODO: Make font look less blurry on mobile.
var style = window.getComputedStyle(canvas, null).getPropertyValue('font-size');
var font_size = parseFloat(style);
canvas.style.fontSize = (font_size + 1) + 'px';

var num_columns = canvas.width / font_size;
var drops = [];

for (var xCoord = 0; xCoord < num_columns; xCoord++) {
  drops[xCoord] = 1;
}

function draw() {
  var viewportHeight = (typeof window.innerHeight != 'undefined' ? window.innerHeight : document.body.offsetHeight);
  document.getElementById("container").setAttribute("style","height:" + viewportHeight + "px")

  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = font_size + "px arial";

  for (var i = 0; i < drops.length; i++) {
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillRect(i * font_size, drops[i] * font_size, font_size, font_size);

    ctx.fillStyle = "#0F0";
    var text = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(text, i * font_size, drops[i] * font_size);

    // TODO: Make it so there is more overlap on phones!
    // ^ TODO: Set the speed to be 10 on mobile and 40 (dynamic) on desktop?

    if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

// Makes it start off fast (to cover the whole screen) then slow down
var interval = setInterval(draw, 10); // TODO: Figure out some math to make this exactly fit the SCREEN height on every device?
setTimeout(function() { clearInterval(interval); setInterval(draw, 40); }, 1000);
