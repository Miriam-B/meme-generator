const NUM_IMAGES = 18;

var gImgs = [];

for (let i = 1; i <= NUM_IMAGES; num++) {
    gImgs.push({id: i, url: 'img/' + i + '.jpg', keywords: []});
}

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [ {
        txt: 'Your Text Here',
        size: 20,
        align: 'left',
        color: 'red'
    }]
};

function getImgById(id) {
    return gImgs.find((currImg) => currImg.id == id);
}


function addText() {

}

function changeFocus() {

}

function removeText() {

}

function increaseTextSize() {

}

function decreaseTextSize() {

}

function alignTextRight() {

}

function alignTextCenter() {

}

function alignTextLeft() {

}

function changeFont() {

}

function changeFillingColor() {

}

function changeBordercolor() {

}

function save() {
    gCtx.save();
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'puki';
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