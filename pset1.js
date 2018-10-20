/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/
const average = arr => {
    let avg = 0 
    for(let i = 0; i < arr.length; i++){
        avg += arr[i];
    }
    return avg/arr.length;
}
console.log("---average---")
console.log("average of the numbers [1,2,3,4] is " , average([1,2,3,4]));
/*
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/
const squareEach = arr => {
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i]*arr[i];
    }
    return arr;
}
console.log("---square each---")
console.log("[1,2,3,4] squared is " , squareEach([1,2,3,4]));
/*
    @func averageSquare
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            square each element
            find the average of the 
            SQUARES of each element in this array
    @example - 
        // turn [1,2,3,4] to [1,4,9,16]
        // then find the averate of the array to the right
        averageSquare([1,2,3,4); // 7.5
*/
const averageSquare = arr => {
    let avg = 0;
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i]*arr[i];
        avg += arr[i];
    }
    return avg/arr.length;
}
console.log("---average square---");
console.log("Average of Squared [1,2,3,4] is ", averageSquare([1,2,3,4]));
/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/
const negateArr = arr => {
    for(let i = 0; i < arr.length; i++){
        arr[i] *= -1;
    }
    return arr;
}
console.log("---negate arr---");
console.log("Negating [1,2,3,4] is ", negateArr([1,2,3,4]));
/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/
const reverseArr = arr => {
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        arr2[arr.length-1-i] = arr[i];
    }
    return arr2;
}
console.log("---reverse arr---");
console.log("Array [1,2,3,4] reversed is ", reverseArr([1,2,3,4]));
/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/
const negateBackwards = arr => {
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        arr2[arr.length-1-i] = arr[i]*-1;
    }
    return arr2;
}
console.log("---negate backwards---");
console.log("Array [1,2,3,4] reversed and backwards is ", negateBackwards([1,2,3,4]));