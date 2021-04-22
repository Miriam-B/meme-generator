var gCanvas;
var gCtx;
var ogCanvasSize;

(function init() {
    gCanvas = document.querySelector('.my-canvas');
    gCtx = gCanvas.getContext('2d');
    ogCanvasSize = { 
        width: 600,
        height: 600
    };
    renderMeme();
    renderLineEditor();
})();


function onAddLine() {
    addLine(gCanvas.width/2, gCanvas.width/2);
    renderMeme();
    onChangeFocus();
}

function onRemoveLine() {
    let currLine = getLine();
    removeLine();
    renderMeme();
}

function onChangeLine() {
    changeLine(document.querySelector('.line-text').value);
    renderMeme();
    renderLineEditor();
}

function renderMeme(forDownload) {
    let meme = getMeme();
    let img = getImgById(meme.selectedImgId);
    renderImg(img.url, function() {
        meme.lines.forEach(line => {
            renderLine(line, forDownload);
        });
    });
}

function onChangeFocus() {
    changeFocus();
    renderLineEditor();
    renderMeme();
}

function renderLineEditor() {
    if (!getLine()) return;

    document.querySelector('.line-text').value = getLine().txt;
    document.querySelector('.border-color').value = getLine().strokeColor;
    document.querySelector('.filling-color').value = getLine().fillingColor;
    document.querySelector('.line-font').value = getLine().font;
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

function onChangeFillingColor() {
    changeFillingColor(document.querySelector('.filling-color').value);
    renderMeme();
}

function onChangeBorderColor() {
    changeBorderColor(document.querySelector('.border-color').value);
    renderMeme();
}

function onChangeFont(value) {
    changeFont(value);
    renderMeme();
}

function renderLine(line, forDownload) {
    if (!forDownload &&
        getMeme().selectedLineIdx == getMeme().lines.indexOf(line)) {
        gCtx.lineWidth = 10;
        gCtx.strokeStyle = 'red';
        gCtx.font = '' + line.size + 'px ' + line.font;
        gCtx.textAlign = 'center';
        gCtx.strokeText(line.txt, line.position.x, line.position.y);
        
    }
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = line.strokeColor;
    gCtx.fillStyle = line.fillingColor;
    gCtx.font = '' + line.size + 'px ' + line.font;
    gCtx.textAlign = 'center';

    gCtx.fillText(line.txt, line.position.x, line.position.y);
    gCtx.strokeText(line.txt, line.position.x, line.position.y);

    
}

function renderImg(src, callback) {
    var img = new Image();
    img.src = src;
    img.onload = function() {
        gCanvas.height = img.height * (ogCanvasSize.width / img.width);
        gCanvas.width = ogCanvasSize.width;
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        callback();
    };
}

function onDownloadCanvas() {
    renderMeme(true);
    setTimeout(() => {
        var link = document.createElement('a');
        link.download = 'meme.png';
        link.href = gCanvas.toDataURL();
        link.click();
        renderMeme();
    }, 100);
}