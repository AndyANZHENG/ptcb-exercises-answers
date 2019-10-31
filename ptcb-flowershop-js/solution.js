document.getElementById('learn-more').addEventListener('click', function(e) {
  document.getElementById('banner-overlay').remove();
  document.getElementById('title').innerHTML = 'Welcome to my flower shop';
  document.getElementById('title').style.backgroundColor = 'blue';

  e.target.innerHTML = 'buy flowers';
  e.target.style.backgroundColor = 'red';
});

// increase size icon by 40% hint:
// mouseenter, mouseleave
// element.style.tranform -> 'scale(1.4)'
// var str = 'hello';
// var aString = 'a string';
// var arr = document.getElementsByClassName('some class name');
// arr.length // 4

// solution:
// get all icon images(we want the <img> html elements) and
// store them into an array
var icons = document.getElementsByClassName('icon-imgs');
console.log(icons);
// iterate over the icon images array
for (var i = 0; i < icons.length; i++) {
  // get the current element in the array
  console.log(icons[i]);
  // attatch a mouseenter event listener to the element
  icons[i].addEventListener('mouseenter', function(e) {
    // increase size by 40%
    e.target.style.transform = 'scale(1.4)';
  });
  // attatch a mouseleave event listener to the element
  // decrease size to normal
}
