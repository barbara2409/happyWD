let wrapper = document.getElementById('wrapper');
let smallBox = document.getElementById('smallBox');
let largeBox = document.getElementById('largeBox');

for (let i = 1; i < 7; i++) {
    let sImg = document.createElement('img');
    let lImg = document.createElement('img');
    sImg.setAttribute('src', `./assets/images/img${i}.jpg`);
    lImg.setAttribute('src', `./assets/images/img${6 + i}.jpg`);
    smallBox.appendChild(sImg);
    largeBox.appendChild(lImg);
}
let degs = [0, 180, 90, -90, 90, -90];
let pixel = [60, 125, 220];
if(window.innerWidth >= 426 && window.innerWidth <= 1024){
    pixel = [60*2/3, 125*2/3, 220*2/3];
} 
if(window.innerWidth <= 425){
    pixel = [60*0.5, 125*0.5, 220*0.5];
}

let smallImgs = smallBox.childNodes;
let largeImgs = largeBox.childNodes;
for (let i = 0; i < 6; i++) {

    if (i === 0) {
        smallImgs[i].style.transform = `translateZ(${pixel[0]}px)`;
        largeImgs[i].style.transform = `translateZ(${pixel[1]}px)`;
    } else if (i > 0 && i < 4) {
        smallImgs[i].style.transform = `rotateX(${degs[i]}deg) translateZ(${pixel[0]}px)`;
        largeImgs[i].style.transform = `rotateX(${degs[i]}deg) translateZ(${pixel[1]}px)`;
    }
    else {
        smallImgs[i].style.transform = `rotateY(${degs[i]}deg) translateZ(${pixel[0]}px)`;
        largeImgs[i].style.transform = `rotateY(${degs[i]}deg) translateZ(${pixel[1]}px)`;
    }
}
wrapper.onmousemove = function () {
    for (let i = 0; i < 6; i++) {
        if (i === 0) {
            smallImgs[i].style.transform = `translateZ(${pixel[0]}px)`;
            largeImgs[i].style.transform = `translateZ(${pixel[2]}px)`;
        } else if (i > 0 && i < 4) {
            smallImgs[i].style.transform = `rotateX(${degs[i]}deg) translateZ(${pixel[0]}px)`;
            largeImgs[i].style.transform = `rotateX(${degs[i]}deg) translateZ(${pixel[2]}px)`;
        }
        else {
            smallImgs[i].style.transform = `rotateY(${degs[i]}deg) translateZ(${pixel[0]}px)`;
            largeImgs[i].style.transform = `rotateY(${degs[i]}deg) translateZ(${pixel[2]}px)`;
        }
    }
}
wrapper.onmouseleave = function () {
    for (let i = 0; i < 6; i++) {
        if (i === 0) {
            smallImgs[i].style.transform = `translateZ(${pixel[0]}px)`;
            largeImgs[i].style.transform = `translateZ(${pixel[1]}px)`;
        } else if (i > 0 && i < 4) {
            smallImgs[i].style.transform = `rotateX(${degs[i]}deg) translateZ(${pixel[0]}px)`;
            largeImgs[i].style.transform = `rotateX(${degs[i]}deg) translateZ(${pixel[1]}px)`;
        }
        else {
            smallImgs[i].style.transform = `rotateY(${degs[i]}deg) translateZ(${pixel[0]}px)`;
            largeImgs[i].style.transform = `rotateY(${degs[i]}deg) translateZ(${pixel[1]}px)`;
        }
    }
}