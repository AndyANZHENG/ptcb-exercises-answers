// Write a function that takes an id as a parameter, it should look for an element with that id and remove all it’s child elements.

// correct
function clearHtml(id) {
  document.getElementById(id).innerHTML = '';
}

// correct
let removeIt = c => {
  var parent = document.getElementsByClassName(c);
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

// The followiong solution is wrong
// can you debug this?
function deleteAllChildById(n) {
  let elements = document.querySelector(n);
  let allChild = elements.children;
  for (var i = 0; i < allChild.length; i++) {
    elements.removeChild(allChild[i]);
  }
}
deleteAllChildById('#info-field');
