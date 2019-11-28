/// <reference path="utility-functions.ts" />

const num = Utility.MaxBooksAllowed(20);
console.log(num);

import util = Utility.Fees;

let fee = util.CalculateLateFee(10);
console.log(`Fee: ${fee}`);
