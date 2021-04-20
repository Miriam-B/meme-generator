(() => {
    renderGallery();
})();

function renderGallery() {
    var html = '';
    var elImgContainer = document.querySelector('.img-container');
    var images = getImgsFiltered(document.querySelector('.filtering').value);
    images.forEach((currImg) => {
        html += `<button class='btn' onclick='onImgSelect(${currImg.id})'><img class="img" src='${currImg.url}'></button>`;
    });

    elImgContainer.innerHTML = html;
}

function onImgSelect(id) {
    getMeme().selectedImgId = id;
    saveMeme();
    window.location.href = 'editor.html';
}