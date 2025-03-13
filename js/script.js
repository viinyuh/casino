const reloadButton = document.querySelector('.relod-page')
const buttonClass = document.querySelector('.launch');
const launchPoint = document.querySelector('.launch-point')
const winPoint = document.querySelector('.win-point')
const imagesDoc1 = document.querySelector('.images1')
const imagesDoc2 = document.querySelector('.images2')
const imagesDoc3 = document.querySelector('.images3')
const audioWin = new Audio("../song/victory.mp3")
const images = ["img/7.png", "img/cerises.png", "img/de.png", "img/diamant.png", "img/coeur.png"];
let PointLaunch = 10;
let WinPoint2 = 0;

reloadButton.addEventListener('click', () => {
    location.reload();
})

buttonClass.addEventListener('click', () => {
    removePointLaunch()
});

function removePointLaunch() {
    launchButton(true)
    PointLaunch -= 1;
    launchPoint.textContent = PointLaunch;
    reloadButton.disabled = true;
    if (PointLaunch == 0) {
        buttonClass.disabled = true;
        reloadButton.disabled = false;
        launchButton(false)
    }
}

function launchButton(value) {
    if (value == true) {
        randomImage(1)
        randomImage(2)
        randomImage(3)
        imagePoint()
    } else {
        alert('Vous n\'avez plus de jetons !')
    }
}

function randomImage(let) {
    const randomIndex = Math.floor(Math.random()*images.length);
    if (let == 1) {
        imagesDoc1.src = images[randomIndex];
    } else if (let == 2) {
        imagesDoc2.src = images[randomIndex];
    } else if (let == 3) {
        imagesDoc3.src = images[randomIndex];
    }
    index = randomIndex;
}

function imagePoint() {
    if (imagesDoc1.src.endsWith('img/7.png') && imagesDoc2.src.endsWith('img/7.png') && imagesDoc3.src.endsWith('img/7.png')) {
        addPoint(10000);
    } else if (imagesDoc1.src.endsWith('img/cerises.png') && imagesDoc2.src.endsWith('img/cerises.png') && imagesDoc3.src.endsWith('img/cerises.png')) {
        addPoint(10);
    } else if (imagesDoc1.src.endsWith('img/diamant.png') && imagesDoc2.src.endsWith('img/diamant.png') && imagesDoc3.src.endsWith('img/diamant.png')) {
        addPoint(1000);
    } else if (imagesDoc1.src.endsWith('img/coeur.png') && imagesDoc2.src.endsWith('img/coeur.png') && imagesDoc3.src.endsWith('img/coeur.png')) {
        addPoint(100);
    } else if (imagesDoc1.src.endsWith('img/de.png') && imagesDoc2.src.endsWith('img/de.png') && imagesDoc3.src.endsWith('img/de.png')) {
        PointLaunch += 1
        launchPoint.textContent = PointLaunch;
    }
}

function addPoint(number) {
    WinPoint2 += number;
    winPoint.textContent = WinPoint2;
    winPoint.classList.add('win-effect');
    if (number >= 1000) {
        audioWin.play();
    }
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    setTimeout(() => {
        audioWin.stop();
    }, 2000);
}