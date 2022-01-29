var i = 0;
var images = [];
var slideTime = 10000; // 10 seconds

images[0] = 'images/GemsEn/zooEN.jpg';
images[1] = 'images/GemsEn/botanicalEN.jpg';
images[2] = 'images/GemsEn/bakkenEN.jpg';
images[3] = 'images/GemsEn/cisternsEN.jpg';
images[4] = 'images/GemsEn/planet.jpg';
images[5] = 'images/GemsEn/rundetaarnEN.jpg';
images[6] = 'images/GemsEn/smkEN.jpg';
images[7] = 'images/GemsEn/zoologisk.jpg';

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
