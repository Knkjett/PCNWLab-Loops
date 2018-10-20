/*
    @func getMiddle
    @param {array} arr
    @return {array}
    @desc - get the middle item of an array
            if even number of elements, return the middle TWO items
            
    @example - getMiddle([1,2,3); // [3]
               getMiddle([1,2,3,4]); // [2,3]
*/
const getMiddle = arr => {
    let bound = Math.floor(arr.length/2);
    arr.splice(0,bound);
    arr.splice(bound,arr.length)
    return arr;
}
console.log('---getMiddle---');
console.log("The Middle of [1,2,3] is",getMiddle([1,2,3]));
console.log("The Middle of [1,2,3,4] is",getMiddle([1,2,3,4]));
/*
    @func addToMiddle
    @param {array} arr
    @param {anything} element
    @return {array}
    @desc - add element to the middle of array
            if odd number of elements, add after middle
            
    @example - addToMiddle([1,2,3], 0); // [1,2,0,3];
               addToMiddle([1,2,3,4], 0); // [1,2,0,3,4]
*/
const addToMiddle = (arr,val) => {
    let bound = Math.ceil(arr.length/2);
    arr.splice(bound,0,val);
    //arr.splice(bound,arr.length)
    return arr;
}
console.log('\n---addToMiddle---');
console.log("Adding 0 to the Middle of [1,2,3] is",addToMiddle([1,2,3],0));
console.log("Adding 0 to the Middle of [1,2,3,4] is",addToMiddle([1,2,3,4],0));
/*
    @func hasAtSymbol
    @param {string} email
    @return {boolean}
    @desc - return true if '@' present in string
    @example - hasAtSymbol('taq@karim.com'); // true
               hasAtSymbol('foobar'); // false
*/
const hasAtSymbol = str => {
    for(let i = 0; i < str.length; i++){
        if(str[i] =='@')
            return true;
    }
    return false;
}
console.log('\n---hasAtSymbol---');
console.log("Does 'taq@karim.com' have a symbol?",hasAtSymbol('taq@karim.com'));
console.log("Does 'foobar' have a symbol?",hasAtSymbol('foobar'));
/*
    @func capitalize
    @param {string} str
    @returns {string}
    
    @desc - capitalize the FIRST letter of string
    @example - capitalize('taq'); // 'Taq'
               capitalize('Taq'); // 'Taq'
*/
const capitalize = str => {
    if(str[0] > String.fromCharCode(90))
        str[0].charcode()-32;
    return str;
}
let test = 
console.log(String.fromCharCode('87'))
console.log('taq');
/*
    @func isAllUpperCased
    @param {string} str
    @returns {boolean}
    
    @desc - return true if all caps else false
    @example isAllUpperCased('TAQ'); // true
             isAllUpperCased('tAq'); // false
*/

/*
    @func capitalizeEachWord
    @param {string} str
    @returns {string}
    
    @desc - returns string with each WORD capitalized
    @example - capitalizeEachWord('the cow jumped over the fence')
               // 'The Cow Jumped Over The Fence'
*/

/*
    @func capitalizeEachWordWithExceptions
    @param {string} str
    @param {array} exceptions
    @returns {string}
    
    @desc - returns string with each WORD capitalized EXCEPT the exceptions
    @example - capitalizeEachWord(
                'the cow and a fox went on the trip', 
                ['the', 'and', 'a', 'on']
               )
               // 'The Cow and a Fox Went on the Trip'
*/

/*
    @func findAtMentions
    @param {string} tweet
    @returns {array}
    
    @desc - returns array with all the @mentions
    @example - 
        findAtMentions('@the_taqquikarim @someOtherGuy @etc this was a cool event @foobar')
        // ['the_taqquikarim', 'someOtherGuy', 'etc', 'foobar']
*/

/*
    @func roundToN
    @param {number} num
    @param {number} decimalPlaces
    @returns {number}
    
    @desc - rounds to the decimalPlaces
    @example - roundToN(1123.1234, 3); // 1123.123
*/

/*
    @func addArrays
    @param {array} arrays
    @returns {array}
    
    @desc - adds arrays together
    @example - addArrays([
        [1,2,3],
        [4,5],
        [6,7,8,9]
    ]); // [1,2,3,4,5,6,7,8,9]
*/


