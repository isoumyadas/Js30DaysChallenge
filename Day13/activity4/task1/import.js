import _ from "lodash";

let arr = [
  [1, 2, 3],
  [4, 5, 6, 7, 8],
  [9, 10, 1, 2],
];

console.log(`After: `, _.chunk(arr, 2));

const object = { p: [{ q: { r: 7 } }, 9] };

let at_elem = _.at(object, ["p[0].q.r", "p[1]"]);

console.log(at_elem);
