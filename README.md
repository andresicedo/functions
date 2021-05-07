# Functions

> This repository gives an explanation of the differences between Arrow functions(ES6) and Regular functions in Javascript.

---

### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [References](#references)
- [License](#license)
- [Author Info](#author-info)

---

## Description

We all know the syntax of a regular Javascript function.

The function's name is declared, the arguments are passed into the parenthesis,
and whatever you want the function to execute is written inside the curly braces 
with proper syntax. Just like the example below:

function myName(name) {
   return name;
};


What do we know about arrow functions?

At first glance, an arrow function looks pretty intimidating for a new programmer.
Like, what is that equal sign and greater than sign doing there?

If you keep looking at the syntax, it might start to become a little more clear
about what is going on.
And when you start to write arrow functions, you'll begin to realize that you are 
writing less code than before. Let's rewrite the above code into arrow function format:

let myName = name => name;

Three lines of code suddenly turns into one line of code. Isn't that great?

Another major difference between between regular and arrow functions is how "this" is used in an arrow function. The scope of "this" in an arrow function, is similar to how other programming languages work. "this" does not get redefined in an arrow function. It gets defined in the same scope that you call the function in. As opposed to regular functions that redefines the "this" keyword, depending on where the function is called. 


### Technologies

- Javascript

[Back To The Top](#Functions)

---

## How To Use

- The JS file in the repository gives an example of how the regular and arrow functions work differently, in relation to the "this" keyword.


## References



## License

* [MIT](https://opensource.org/licenses/MIT)

[Back To The Top](#Functions)

## Author Info

- Website - [AndresIcedo.com](https://AndresIcedo.com/)
- LinkedIn - [andres-icedo](https://www.linkedin.com/in/andres-icedo/)
- GitHub - [andresicedo](https://github.com/andresicedo)


[Back To The Top](#Functions)
