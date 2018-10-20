/*
    @func removeNegatives
    @param {array} arr
    @returns {array}
    @desc - takes all engative numbers and makes positive
    @example - removeNegatives([-3,-2,1,2,3,-4]); // [3,2,1,2,3,4]
*/
const removeNegatives = arr => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0)
            arr[i]*= -1;
    }
    return arr
}
console.log("---remove negatives---");
console.log("Remove negatives from [-3,-2,1,2,3,-4] is" , removeNegatives([-3,-2,1,2,3,-4]));
/*
    @func findVal
    @param {array} arr
    @param {anything} val
    @returns {number}
    @desc - checks each value of array and compares to val
            if found, returns the INDEX at which val was found
            otherwise, returns -1
    @example
        findVal([1,2,3,4], 1); // 0
        findVal([1,2,3,4], 4); // 3
        findVal([1,2,3,4], 9); // -1
*/
const findVal = (arr,val) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i]== val){
            return i;
        }
    }
    return -1;
}
console.log('\n---find val---');
console.log("Find 1 in [1,2,3,4] is at position:", findVal([1,2,3,4], 1));
console.log("Find 4 in [1,2,3,4] is at position:", findVal([1,2,3,4], 4));
console.log("Find 9 in [1,2,3,4] is at position:", findVal([1,2,3,4], 9));
/*
    @func removeOdds
    @param {array} arr
    @returns {array}
    @desc - checks each value of array
            if odd, remove from array
            otherwise, keep in array
    @example
        removeOdds([1,2,3,4]); // [2,4]
        removeOdds([1,"2",3,4]); // [4]
*/
const removeOdds = arr => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2 != 0)
             arr.splice(i,1);
    }
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] == 'string')
             arr.splice(i,1);
    }
    return arr;
}
console.log('\n---removeOdds---');
console.log("Remove odds from [1,2,3,4] is", removeOdds([1,2,3,4]));
console.log("Remove odds and string from [1,'2',3,4] is", removeOdds([1,"2",3,4]));
/*
    @func addSquares
    @param {array} arr
    @returns {array}
    @desc - for each value in array, square it then add to array
    @example - 
        addSquares([1,2,3,4); // [1,2,3,4,1,4,9,16]
*/
const addSquares = arr => {
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        let val = arr[i]**2;
        arr2.push(val);
    }
    return arr.concat(arr2);
}
console.log("\n---add squares---");
console.log("Add Squared values of [1,2,3,4]:", addSquares([1,2,3,4]));
/*
    @func doubleify
    @param {array} arr
    @returns {array}
    @desc - take each value of array, add same value right after
    @example - doubleify([1,2,3,4); // [1,1,2,2,3,3,4,4]
*/
const doubleify = arr => {
    for(let i = 0; i < arr.length; i+=2){
        arr.splice(i,0,arr[i]);
    }
    return arr;
}
console.log("\n---doubleify---");
console.log(doubleify([1,2,3,4]))
/*
    @func findMax
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99 
*/
const findMax = arr => {
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > max)
            max = arr[i]
    }
    return max;
}
console.log("\n---findmax---");
console.log("Largest number of [1,2,3,99,4] is", findMax([1,2,3,99,4]));