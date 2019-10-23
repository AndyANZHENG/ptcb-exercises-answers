var xccelerateStudent = {
  name: 'Olivia Cheung',
  course: 'Full Immersive Web Dev',
  enrollmentStatus: true,
  'fav language': 'JavaScript',
  greet: function() {
    return 'Hello!';
  }
};

// dot notion
console.log(xccelerateStudent.name); // Olivia Cheung
console.log(xccelerateStudent.enrollmentStatus); // true
console.log(xccelerateStudent.greet()); // Hello!

// bracket notion
console.log(xccelerateStudent['name']); // Olivia Cheung
console.log(xccelerateStudent['greet']());
console.log(xccelerateStudent['fav language']); // JavaScript

var drumbeats = 0; // 1 2
var drumkit = {
  bass: function() {
    drumbeats++; // drumbeats = drumbeats + 1
    return 'the drum goes boom!';
  },
  cymbals: function() {
    drumbeats++; // drumbeats = drumbeats + 1
    return 'the cymbals go clang!';
  }
};
console.log(drumkit.bass()); // the drum goes boom!
console.log(drumbeats); // 1
console.log(drumkit.cymbals()); // => console.log('the cymbals go clang!')
console.log(drumbeats); // 2

// Creating objects

// object literal
var obj = {
  name: 'some object name'
};

var secondObj = new Object();
secondObj.name = 'second object name';
secondObj.method = function() {
  return 'this is a method for the second obj';
};
console.log(secondObj.name); // second object name
console.log(secondObj.method()); // this is a method for the second obj

delete secondObj.method;

// Nested Objects

var ourClass = {
  students: {
    jimmy: {
      background: 'accountant',
      studied: 'USA'
    },
    tom: {
      background: 'student',
      studied: 'HK'
    }
  }
};

console.log(ourClass.students.jimmy.background); // accountant
