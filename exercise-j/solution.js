// incorrect, but why?
function deleteAllChildById(id) {
  var element = document.getElementById(id);
  var allChild = element.childNodes;
  console.log(allChild);
  for (var i = 0; i < allChild.length; i++) {
    element.removeChild(allChild[i]);
  }
}
deleteAllChildById('body');

// correct version 1
function removeChildrenById(id) {
  document.getElementById(id).innerHTML = '';
}

// correct version 2
function removeChildrenById2(id) {
  var parent = document.getElementById(id);
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
