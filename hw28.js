// const numbers = [1, 2, 3];
// function revr() {
//   return numbers.reverse();
// }

// console.log(revr(numbers));

// function newArray(arraysize, value) {
//   let array = [];
//   for (let i = 0; i < arraysize; i++) array.push(value);
//   return array;
// }

// console.log(newArray(3, "a"));

// function revertsArray(array) {
//   if (Array.isArray(array)) return array.reverse();
//   return "please enter an array";
// }

// console.log(revertsArray([3, 5, 6]));

// function newArray(arraysize, value) {
//   new Array(arraysize).fill(value);
// }

// console.log(newArray(3, "a"));

// const reverse = (array) => {
//   const reversed = [];

//   for (let i = array.length - 1; i >= 0; i -= 1) {
//     reversed.push(array[i]);
//   }

//   return reversed;
// };

// console.log(reverse([1, 2, 3]));

// const filteritems = (array) => {
//   return array.filter(Boolean);
// };

// console.log(filteritems([0, 1, false, 10, undefined, 12, null]));

const compact = (el, array) => {
  return array.filter(el);
};

console.log(compact(Boolean, [22, 1, false, 2, undefined, "", 3, null]));
