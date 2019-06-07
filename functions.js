/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

 function numberToString(n) {
    let num = n.toString();
    return num;
}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

 function increase(n) {
     return n+=1;
 }

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

 function decrease(n) {
     return n-=1;
 }

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function add(x,y) {
    return x+=y;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

function subtract(x,y) {
    return x-=y;
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

 function multiply(x,y) {
     return x*=y;
 }

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

 function divide(x,y) {
     return x/=y;
 }

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

 function square(x) {
     return x*x;
 }

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

// function calculate(operation, x, y) {
//     let result;
//    if(operation === "add") {
//      let sum = add(x,y);
//      result = x + " + " + y + " = " + sum;
//      return result
//    } else if(operation === "subtract") {
//      let difference = subtract(x,y);
//      result = x + " - " + y + " = " + difference;
//      return result
//    } else if(operation === "multiply") {
//      let product = multiply(x,y);
//      result = x + " * " + y + " = " + product;
//      return result
//    } else if(operation === "divide") {
//      let quotient = divide(x,y);
//      result = x + " / " + y + " = " + quotient;
//      return result
//    };
//   }

//   console.log(calculate("add",4,2));

 function calculate(operation, x, y) {
    switch(operation) {
        case 'add':
            let sum = add(x,y)
            console.log(x + " + " + y + " = " + sum);
            return sum;
            break;
        case 'subtract':
            let difference = subtract(x,y)
            console.log(x + " - " + y + " = " + difference);
            return difference;
            break;
        case 'multiply':
            let product = multiply(x,y)
            console.log(x + " * " + y + " = " + product);
            return product;
            break;
        case 'divide':
            let quotient = divide(x,y)
            console.log(x + " / " + y + " = " + quotient);
            return quotient;
            break;
    }
 }

 calculate(subtract,1,2)
/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

 function isGreaterThan(a,b) {
     if (a > b) {
         return true;
     } else {
         return false;
     }
 }
console.log(isGreaterThan(7,3));
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function isLessThan(a,b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function areEqual(x,y) {
    if (x === y){
        return true;
    } else {
        return false;
    }
}
areEqual(5,5)

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum(x,y) {
    return Math.min(x,y);
 }
 console.log(minimum(10,3));

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function maximum(x,y) {
    return Math.max(x,y);
 }
 console.log(maximum(10,3));

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

 function isEven(n) {
     if (n%2 === 0) {
         return true;
     } else {
         return false;
     }
 }
 console.log(isEven(3));

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

 function isOdd(n) {
     if (n%2 !== 0) {
         return true;
     } else {
         return false;
     }
 }
console.log(isOdd(2));

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

function letterGrade(score, total) {
    let grade = "";
    let calcGrade = score/total * 100;
    let gradingScale = {
        "A": 90,
        "B": 80,
        "C": 70,
        "D": 60,
        "F": 0,
    }
    // console.log(gradingScale)
    for (var letterGrade in gradingScale ) {
        // console.log(gradingScale[x])
        // console.log(letterGrade)
        if (calcGrade >= gradingScale[letterGrade]) {
            grade += letterGrade;
            return grade;
        } 
    }
}
console.log(letterGrade(90,1000));

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

 function incrementReviews(restaurant) {
    if (restaurant.reviews === undefined) {
        restaurant.reviews = 1;
    } else {
        restaurant.reviews++
    }
    return restaurant;
 }
 console.log(incrementReviews({}));

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

 function combine(word1, word2) {
    let wholeWord = word1 + " " + word2;
    return wholeWord
 }
combine("hello","world")

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

 function createCircle(radius) {
    let circle = {
        circumference: 0,
        area: 0,
    }
    circle.circumference = 2 * Math.PI * radius
    circle.area = Math.PI * square(radius);
    return circle;

 }
createCircle(10);