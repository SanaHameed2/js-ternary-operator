// // Description: This code calculates Simple Interest and Compound Interest based on user input.
// // Simple Iterest Calculation

// let P= prompt ("Enter Priiciple amount (P):");
// let R= prompt ("Enter Priiciple amount (R):");
// let T= prompt ("Enter Priiciple amount (T):");
// let SI=(P>0 && R>0 && T>0) ? (P*R*T)/100 :0;
// alert("Simple Interest is: " + SI);

// Compound Interest Calculation
let P = +prompt("Enter Principal amount (P):");
let R = +prompt("Enter Annual Interest Rate (R%):");
let T = +prompt("Enter Time in years (T):");

let CI = (P > 0 && R > 0 && T > 0)
  ? P * Math.pow((1 + R / 100), T) - P
  : 0;

alert("Compound Interest is: " + CI.toFixed(2));
