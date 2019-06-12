/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first context of this is the window binding/console context. The value of this is the is the window or console object if it is the global scope.
* 2. When a function is called using a dot before the function. The object before the dot is 'this'
* 3. The third context is when constructing a new object using a constructor, the the this method refers to the object itself within the constructor
* 4. The last context of this is explicit and happens when you use call() and apply().
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
var sayAge = function (){
    console.log(this.age);
}
window.age = 25;
sayAge();

// Principle 2

const someObj = {
    food : "sushi",
    sayFavFood : function(pref){
        console.log('I' + pref + this.food);
    }
}

someObj.sayFavFood("love");

// code example for Implicit Binding

// Principle 3

// code example for New Binding

function Student(badWord){
    this.yell = "Hey ";
    this.badWord = badWord;
    this.insult = function(){
        console.log(this.yell+ this.badWord);
    }
}
const Trang = new Student('Jerk!');

Trang.insult();


// Principle 4

// code example for Explicit Binding

const Lisa = new Student('Two Face!')
Trang.insult.call(Lisa);
