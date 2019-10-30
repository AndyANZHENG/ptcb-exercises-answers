/**
 * Does not work (for loop)
 */
// function removeChildren(id) {
//   var element = document.getElementById(id); // div info-field
//   var elemChildren = element.children;
//   // TODO: probably a loop over all children of a selected element
//   for (var i = 0; i < elemChildren.length; i++) {
//   element.removeChild(elemChildren[i]);
//   }
// }
// removeChildren('info-field');

/**
 * while loop
 */

function removeChildrenWhileLoop(id) {
  var element = document.getElementById(id);
  // TODO: while loop
  console.log(element.children);
  while (element.firstChild) {
    console.log(element.firstChild);
    element.removeChild(element.firstChild);
  }
}
removeChildrenWhileLoop('info-field');
