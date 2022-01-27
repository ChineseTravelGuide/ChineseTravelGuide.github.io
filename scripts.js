var i = 0;
var images = [];
var slideTime = 10000; // 10 seconds

images[0] = 'images/GemsEN/zooEN.jpg';
images[1] = 'images/GemsEN/botanicalEN.jpg';
images[2] = 'images/GemsEN/bakkenEN.jpg';
images[3] = 'images/GemsEN/cisternsEN.jpg';
images[4] = 'images/GemsEN/planet.jpg';
images[5] = 'images/GemsEN/rundetaarnEN.jpg';
images[6] = 'images/GemsEN/smkEN.jpg';
images[7] = 'images/GemsEN/zoologisk.jpg';

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