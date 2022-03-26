

if (document.querySelector(".popup")){
  const themebtn = document.querySelector('#themebtn');        
  const radioButtons = document.querySelectorAll('input[name="theme"]');
  themebtn.addEventListener("click", () => {
      let selectedtheme;
      for (const radioButton of radioButtons) {
          if (radioButton.checked) {
              selectedtheme = radioButton.value;
              break;
          }
      }
      if (selectedtheme == "Light"){
        document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";
          let media = document.querySelector("img,picture,video");

          media.forEach(mediaItems => {
            media.style.filter = "invert() hue-rotate(0deg)";
          });
      }
      else{
          document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
          let media = document.querySelector("img,picture,video");

          media.forEach(mediaItems => {
            media.style.filter = "invert(1) hue-rotate(180deg)";
          });
  }
})
}










    

/*
$('Dark').click(function() {
  if($('Dark').is(':checked')) 
  { 
    alert(document.querySelector('input[name="theme"]:checked').value);
  }                      
});

document.getElementsByName("theme-button")
.forEach(radio => {
    if (radio.checked){
        alert(radio.value);
    }
});

alert(document.querySelector('input[name="theme"]:checked').value)

/*
let btnShow = document.querySelector('radio');
let result = document.querySelector('h1');

btnShow.addEventListener('click', () =>{
    let selected = document.querySelector('input[type="radio"]:checked');
    alert(selected.parentElement.textContent)
});


function Changetheme(){   
    var checkbox1 = document.getElementById("theme");
    if (checkbox1.checked){
       alert("hi")
    }
    else{
        chrome.tabs.executeScript({
            File: lighttheme.js
        })
    }
}  
/*
('#theme').on('change', function() {
  if ($('#theme').is(":checked")) {
    alert("Checkbox is checked.");
  } else if ($('#theme').is(":not(:checked)")) {
    alert("Checkbox is unchecked.");
  }
});
*/