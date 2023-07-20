
//ES5 version
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

//ES2015
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

// findMin version1
//findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

//findMin version2
const findMin = (...args) => Math.min(...args);

//mergeObj version1
// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

//mergeObj version2
const mergeObjects = (obj1, obj2) =>({...obj1, ...obj2});

//doubleAndReturnArgs version1
// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

//doubleAndReturnArgs version2
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

//Slice and Dice!
/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = items => {
    let idx = Math.floor(Math.random() * iterms.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}


/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}


