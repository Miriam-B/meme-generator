var gCanvas;
var gCtx;

(function init() {
    gCanvas = document.querySelector('.main-container');
    gCtx = gCanvas.getContext('2d');
})();

function renderText(text, x, y) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'red';
    gCtx.fillStyle = 'white';
    gCtx.font = '40px Arial';
    gCtx.textAlign = 'center';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function renderImg() {
    var img = new Image();
    img.src = 'img/1.jpg';
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
}