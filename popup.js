

if (document.querySelector(".popup")){
  function darktheme(){
    alert("gd");
  }
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
        chrome.scripting.executeScript({
          file: "lighttheme.js"
        })
      }
      else{
        chrome.scripting.executeScript({
          file: "darktheme.js"})
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