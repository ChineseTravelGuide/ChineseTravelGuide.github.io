var i = 0;
var images = [];
var slideTime = 10000; // 10 seconds

images[0] = 'images/GemsCN/zooCN.jpg';
images[1] = 'images/GemsCN/botanicalCN.jpg';
images[2] = 'images/GemsCN/bakkenCN.jpg';
images[3] = 'images/GemsCN/cisternsCN.jpg';
images[4] = 'images/GemsCN/planetCN.jpg';
images[5] = 'images/GemsCN/rundetaarnCN.jpg';
images[6] = 'images/GemsCN/smkCN.jpg';
images[7] = 'images/GemsCN/zoologiskCN.jpg';

function changePicture() {
    document.body.style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;