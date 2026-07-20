console.log(message);
var message = "Hello";

function testScope() {
  var innerVariable = "Inside function";
}

testScope();
console.log(innerVariable);
