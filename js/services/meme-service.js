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

// ADDING TAGS TO IMAGES

gImgs[0].keywords = ['Trump', 'trump'];
gImgs[1].keywords = ['dogs', 'dog'];
gImgs[2].keywords = ['dog', 'baby', 'cute'];
gImgs[3].keywords = ['cat', 'keyboard', 'sleepy'];
gImgs[4].keywords = ['frustration'];
gImgs[5].keywords = ['aliens'];
gImgs[6].keywords = ['shock'];
gImgs[7].keywords = ['Tell me more', 'tell me more'];
gImgs[8].keywords = ['cunning', 'laughter'];
gImgs[9].keywords = ['laughter', 'obama', 'Obama'];
gImgs[10].keywords = ['kiss','sports'];
gImgs[11].keywords = ['Haim Hecht', 'haim'];
gImgs[12].keywords = ['cheers'];
gImgs[13].keywords = ['matrix'];
gImgs[14].keywords = ['one does not simply', 'lord of the rings', 'Lord of the rings'];
gImgs[15].keywords = ['star trek', 'laughter'];
gImgs[16].keywords = ['Toy story', 'toy story'];


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

function getImgsFiltered(str) {
    return gImgs.filter((currImage) => {
        return currImage.keywords.some((currStr) => {
            return currStr.toLowerCase().includes(str.toLowerCase());
        });
    });
}