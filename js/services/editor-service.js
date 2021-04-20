function getLine() {
    return getMeme().lines[getMeme().selectedLineIdx];
}

function addLine(x, y) {
    getMeme().lines.push({
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
    if (!getMeme().lines.length) return;

    getMeme().lines.splice(getMeme().selectedLineIdx, 1);
    changeFocus();
}

function changeFocus() {
    if (!getMeme().lines.length) return;

    getMeme().selectedLineIdx = (getMeme().selectedLineIdx + 1) % getMeme().lines.length;
}

function increaseTextSize() {
    if (!getMeme().lines.length) return;

    getMeme().lines[getMeme().selectedLineIdx].size++;
}

function decreaseTextSize() {
    if (!getMeme().lines.length) return;

    getMeme().lines[getMeme().selectedLineIdx].size--;
}

function moveUp() {
    if (!getMeme().lines.length) return;

    getMeme().lines[getMeme().selectedLineIdx].position.y -= 10;
}

function moveDown() {
    if (!getMeme().lines.length) return;

    getMeme().lines[getMeme().selectedLineIdx].position.y += 10;
}

function moveLeft() {
    if (!getMeme().lines.length) return;

    getMeme().lines[getMeme().selectedLineIdx].position.x -= 10;
}

function moveRight() {
    if (!getMeme().lines.length) return;

    getMeme().lines[getMeme().selectedLineIdx].position.x += 10;
}

function changeLine(value) {
    if (!getMeme().lines.length) return;
    
    getMeme().lines[getMeme().selectedLineIdx].txt = value;
}

function changeFont(value) {
    if (!getMeme().lines.length) return;

    getMeme().lines[getMeme().selectedLineIdx].font = value;
}

function changeFillingColor(value) {
    if (!getMeme().lines.length) return;

    getMeme().lines[getMeme().selectedLineIdx].fillingColor = value;
}

function changeBorderColor(value) {
    if (!getMeme().lines.length) return;
    getMeme().lines[getMeme().selectedLineIdx].fillingColor = value;
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