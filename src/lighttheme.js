document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";
let media = document.querySelector("img,picture,video");

    media.forEach(mediaItems => {
    media.style.filter = "invert(0) hue-rotate(0deg)";
    });