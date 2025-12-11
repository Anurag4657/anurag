//arithmatic operators
let a = 10;
let b = 5;
console.log(a-b);
console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
//assignment operators
let c = 20;
c += 5;
console.log(c);
c -= 5;
console.log(c);
c *= 2;
console.log(c);
c /= 5;
console.log(c);
c %= 3;
console.log(c);
c **= 2;
console.log(c);
//comparison operators
let x = 10;
let y = 20;
console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);

console.log(x > y);

console.log(x < y);

console.log(x >= y);
console.log(x <= y);
//logical operators
let p = true;
let q = false;
console.log(p && q);
console.log(p || q);
console.log(!p);
console.log(!q);
//bitwise operators
let m = 5;
let n = 3;
console.log(m & n);
console.log(m | n);
console.log(m ^ n);
console.log(~m);
console.log(m << 1);
console.log(m >> 1);
console.log(m >>> 1);
//conditional satements
let age = 16;
if (age > 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
