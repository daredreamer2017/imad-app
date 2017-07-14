console.log('Loaded!');
//changing main text by js
var element = document.getElementById('main');
element;
element.innerHTML = "Text has gone";

//Moving image
var image = document.getElementById('madi');
var marginLeft = 0;
function moveRight()
{
  marginLeft = marginLeft +10;
  img.style.marginLeft = marginLeft +'px';
}
image.onClick = function(){
var interval = setInterval(moveRight,50);  
};

