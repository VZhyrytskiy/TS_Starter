/// <reference path="utility-functions.ts" />
var num = Utility.MaxBooksAllowed(20);
console.log(num);
var util = Utility.Fees;
var fee = util.CalculateLateFee(10);
console.log("Fee: " + fee);
