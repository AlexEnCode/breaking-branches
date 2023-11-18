
// Initial solution


function  hacheTest(students , objective){
  // your code 
}
// Complete solution
function  hacheTest(students , objective){
  return ((objective/students)/7) <=80 ? "let's go the restaurant!" : "No meal for you !!";
}
T// est case


const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;

describe("Test Suite",()=>{
  
  
it("Fixed tests",()=>{
      
    assert.strictEqual(hacheTest(12,1000), "let's go the restaurant!");
    assert.strictEqual(hacheTest(1,3000), "No meal for you !!");
  })

  
it("Random tests", () => {  
function  hacheTestSol(students , objective){
  return (((objective/students)/7) <=80) ? "let's go the restaurant!" : "No meal for you !!";
}
  
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
for (var i = 0; i < 50; i++) {
  var students = getRandomNumber(1, 10000); // generator for students number
  var objective = getRandomNumber(1, 10000); // // generator for objectives even inputs
  console.log() ;
  Test.assertEquals(hacheTest(students, objective), hacheTestSol(students, objective));
}
})
})
// Exemple test case
const chai = require("chai");
const assert = chai.assert;

describe("Fixed Tests", function() {
  it("Basic Test Cases", function() {        
    assert.strictEqual(hacheTest(12,3000), "let's go the restaurant!");
    assert.strictEqual(hacheTest(6,1500), "let's go the restaurant!");
    assert.strictEqual(hacheTest(12,1000), "let's go the restaurant!");
    assert.strictEqual(hacheTest(1,3000), "No meal for you !!");
    assert.strictEqual(hacheTest(0,3000), "No meal for you !!");
    assert.strictEqual(hacheTest(1,0), "let's go the restaurant!");
  })
});