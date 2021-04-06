var x = 10;
var y = x; // created a copy of our original data
           // pass by value
           // primitive types are not passed by reference and are instead copied
y += 10;
x += 30;
console.log(x); // 40?
console.log(y); // 20?


var a = [1, 2, 3];
var b = a; // did not create a copy
           // pass by reference
var c = b;
var d = c;
a.push(10);
// b.push(30);
console.log(a); // [1, 2, 3, 10]
console.log(d); // [1, 2, 3, 10]
console.log(c); // [1, 2, 3, 10]
console.log(b); // [1, 2, 3, 30]



// classes - blueprints
// - methods
//      honk
//      steer
//      gas pedal
//      break
//      radio
// - attributes
//    color
//    size
//    milage
//    fuel tank
//    current speed

// objects, instances
// car
// new keyword

var myCar = new Car();