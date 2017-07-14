console.log('Loaded!');
//changing main text by js
var element = document.getElementById('main');
element;
element.innerHTML = "Text has gone";

//Moving image
var image = document.getElementById('madi');
image.onClick = function(){
  image.style.marginLeft = '100px';  
};

