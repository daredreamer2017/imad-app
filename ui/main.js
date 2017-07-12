console.log('Loaded!');
//changing main text by js
var element = document.getElementById('main');
element;
element.innerHTML = "Text has gone";

//Moving image
var image = document.getElementById("main-img");
image.onClick =function(){
  image.style.marginleftt = "100px";  
};