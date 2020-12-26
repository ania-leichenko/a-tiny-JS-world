/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const dog = {
   species: 'dog',
   name: 'Jack',
   gender: 'male',
   legs: 4,
   hands: 0,
   saying: 'woof-woof!', 
};

const cat = {
   species: 'cat',
   name: 'Cherry',
   gender: 'female',
   legs: 4,
   hands: 0,
   saying: 'may-may!'
   
};
 
const woman = {
   species: 'woman',
   name: 'Glora',
   gender: 'female',
   legs: 2,
   hands: 2,
   saying: 'Hello, Peter!'
};

const man = {
   species: 'man',
   name: 'Grey',
   gender: 'male',
   legs: 2,
   hands: 2,
   saying: 'Hello, Lusy!'
};

const catWoman = {
   species: 'cat-woman',
   name: 'Rubby',
   gender: 'female',
   legs: 2,
   hands: 2,
   saying: cat.saying
};

dog.friendly = [man.name, woman.name];
cat.friendly = [woman.name, catWoman.name];
woman.friendly = [man.name, dog.name, cat.name];
man.friendly = [dog.name, woman.name];
catWoman.friendly = [cat.name];

const objectToString = function(obj) {
   const arr1 = [obj.species, obj.name, obj.gender, obj.legs, obj.hands, obj.saying, obj.friendly];
   return arr1.join(";");
}
 
const arr = [dog, cat, woman, man, catWoman];
arr.forEach(element => {
   print(objectToString(element));
});

 
// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */


