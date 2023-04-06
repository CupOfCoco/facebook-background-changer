var css =document.querySelector('h2')
var colour = document.querySelector('.colour');
var body =document.getElementById('body')


colour.addEventListener('input', function(){
// console.log(colour.value);
  body.style.background = colour.value;
});