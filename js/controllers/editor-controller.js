var gCanvas;
var gCtx;

(function init() {
    gCanvas = document.querySelector('.my-canvas');
    gCtx = gCanvas.getContext('2d');

    renderMeme();
})();


function onAddLine() {
    addLine(gCanvas.width/2, gCanvas.width/2);
    renderMeme();
}

function onChangeLine(value) {
    changeLine(value);
    renderMeme();
    renderLineEditor();
}

function renderMeme() {
    let meme = getMeme();
    let img = getImgById(meme.selectedImgId);
    renderImg(img.url, function() {
        lineCount = 1;
        meme.lines.forEach(line => {
            renderLine(line, lineCount++);
        });
    });
}

function onChangeFocus() {
    changeFocus();
    renderLineEditor();
}

function renderLineEditor() {
    document.querySelector('.line-text').value = getLine().txt;
}

function onIncreaseTextSize() {
    increaseTextSize();
    renderMeme();
}

function onDecreaseTextSize() {
    decreaseTextSize();
    renderMeme();
}

function onMoveUp() {
    moveUp();
    renderMeme();
}

function onMoveDown() {
    moveDown();
    renderMeme();
}

function onMoveLeft() {
    moveLeft();
    renderMeme();
}

function onMoveRight() {
    moveRight();
    renderMeme();
}

function renderLine(line, lineCount) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = line.strokeColor;
    gCtx.fillStyle = line.fillStyle;
    gCtx.font = '' + line.size + 'px Arial';
    gCtx.textAlign = line.align;

    var mt = gCtx.measureText(line.txt);

    gCtx.fillText(line.txt, line.position.x, line.position.y);
    gCtx.strokeText(line.txt, line.position.x, line.position.y);
}

function renderImg(src, callback) {
    var img = new Image();
    img.src = src;
    img.onload = function() {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        callback();
    };
}

function onDownloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-meme.jpg';
}