const NUM_IMAGES = 18;

var gImgs = [];

for (let i = 1; i <= NUM_IMAGES; i++) {
    gImgs.push({id: i, url: '../img/memes/' + i + '.jpg', keywords: []});
}

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        txt: 'Your Text Here',
        size: 60,
        position: {
            x: 150,
            y: 255
        },
        fillStyle: 'blue',
        strokeColor: 'red'
    }]
};

function getMeme() {
    return gMeme;
}

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
    gMeme.lines[gMeme.selectedLineIdx].size++;
}

function decreaseTextSize() {
    gMeme.lines[gMeme.selectedLineIdx].size--;
}

function align(alignment) {
    gMeme.lines[gMeme.selectedLineIdx].align = alignment;
}

function moveUp() {
    gMeme.lines[gMeme.selectedLineIdx].position.y-=10;
}

function moveDown() {
    gMeme.lines[gMeme.selectedLineIdx].position.y+=10;
}

function changeFont() {

}

function changeFillingColor() {

}

function changeBordercolor() {

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