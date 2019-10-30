document.getElementById('learn-more').addEventListener('click', function(e) {
  document.getElementById('banner-overlay').remove();
  document.getElementById('title').innerHTML = 'Welcome to my flower shop';
  document.getElementById('title').style.backgroundColor = 'blue';

  e.target.innerHTML = 'buy flowers';
  e.target.style.backgroundColor = 'red';
});
