const NUM_IMAGES = 18;
const CANVAS_SIZE = 500;
const MEME_KEY = 'meme';
const DEFAULT_MEME = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: []
};

var gImgs = [];

var gKeywords = {
    'happy': 12,
    'funny puk': 1
};

var gImgs = [];

for (let i = 1; i <= NUM_IMAGES; i++) {
    gImgs.push({
        id: i,
        url: '../img/memes/' + i + '.jpg',
        keywords: []
    });
}

var gMeme = loadMeme();

if (!gMeme) {
    gMeme = DEFAULT_MEME;
    saveMeme();
}

function loadMeme() {
    return loadFromStorage(MEME_KEY);
}

function saveMeme() {
    saveToStorage(MEME_KEY, gMeme);
}

function getMeme() {
    return gMeme;
}

function getImgById(id) {
    return gImgs.find((img) => img.id == id);
}

function getImgs() {
    return gImgs;
}