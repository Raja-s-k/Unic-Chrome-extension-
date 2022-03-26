document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
let media = document.querySelector("img,picture,video");

          media.forEach(mediaItems => {
            media.style.filter = "invert(1) hue-rotate(180deg)";
          });