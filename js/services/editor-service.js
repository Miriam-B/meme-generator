const NUM_IMAGES = 18;
const CANVAS_SIZE = 500;
const MEME_KEY = 'meme';

const DEFAULT_MEME = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        txt: 'Your Text Here',
        size: 60,
        position: {
            x: CANVAS_SIZE / 2,
            y: CANVAS_SIZE / 2
        },
        fillingColor: '#000000',
        strokeColor: '#ffffff',
        font: 'Impact'
    }]
};

var gImgs = [];

for (let i = 1; i <= NUM_IMAGES; i++) {
    gImgs.push({
        id: i,
        url: '../img/memes/' + i + '.jpg',
        keywords: []
    });
}

if (!getMeme()) {
    saveMeme();
}

var gMeme = loadMeme();

function loadMeme() {
    return loadFromStorage(MEME_KEY);
}

function saveMeme() {
    saveToStorage(MEME_KEY, DEFAULT_MEME);
}

function getMeme() {
    return gMeme;
}

function getImgById(id) {
    return gImgs.find((currImg) => currImg.id == id);
}

function getLine() {
    return gMeme.lines[gMeme.selectedLineIdx];
}


function addLine(x, y) {
    gMeme.lines.push({
        txt: 'Your Text Here',
        size: 60,
        position: {
            x: x,
            y: y
        },
        fillingColor: '#000000',
        strokeColor: '#ffffff',
        font: 'Impact'
    });
}

function removeLine() {
    if (!gMeme.lines.length) return;

    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    changeFocus();
}

function changeFocus() {
    if (!gMeme.lines.length) return;

    gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length;
}

function increaseTextSize() {
    if (!gMeme.lines.length) return;

    gMeme.lines[gMeme.selectedLineIdx].size++;
}

function decreaseTextSize() {
    if (!gMeme.lines.length) return;

    gMeme.lines[gMeme.selectedLineIdx].size--;
}

function moveUp() {
    if (!gMeme.lines.length) return;

    gMeme.lines[gMeme.selectedLineIdx].position.y -= 10;
}

function moveDown() {
    if (!gMeme.lines.length) return;

    gMeme.lines[gMeme.selectedLineIdx].position.y += 10;
}

function moveLeft() {
    if (!gMeme.lines.length) return;

    gMeme.lines[gMeme.selectedLineIdx].position.x -= 10;
}

function moveRight() {
    if (!gMeme.lines.length) return;

    gMeme.lines[gMeme.selectedLineIdx].position.x += 10;
}

function changeLine(value) {
    if (!gMeme.lines.length) return;
    
    gMeme.lines[gMeme.selectedLineIdx].txt = value;
}

function changeFont(value) {
    if (!gMeme.lines.length) return;

    gMeme.lines[gMeme.selectedLineIdx].font = value;
}

function changeFillingColor(value) {
    if (!gMeme.lines.length) return;

    gMeme.lines[gMeme.selectedLineIdx].fillingColor = value;
}

function changeBorderColor(value) {
    if (!gMeme.lines.length) return;
    gMeme.lines[gMeme.selectedLineIdx].fillingColor = value;
}



// function draw(ev) {
//     const offsetX = ev.offsetX;
//     const offsetY = ev.offsetY;
//     const { offsetX, offsetY } = ev
//     switch (gCurrShape) {
//         case 'triangle':
//             drawTriangle(offsetX, offsetY)
//             break;
//         case 'rect':
//             drawRect(offsetX, offsetY)
//             break;
//         case 'text':
//             drawText('Puki', offsetX, offsetY)
//             break;
//         case 'line':
//             drawLine(offsetX, offsetY)
//             break;
//     }
// }