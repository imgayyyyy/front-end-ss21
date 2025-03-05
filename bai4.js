let a = +prompt("nhap a");
let b = +prompt("nhap b");
let c = +prompt("nhap c");
let delta = b * b - (4 * a * c);

if (delta < 0) {
    console.log("pt vô nghiệm");
} else if (delta > 0) {
    let n1 = (-b - Math.sqrt(delta)) / (2 * a);
    let n2 = (-b + Math.sqrt(delta)) / (2 * a);
    console.log("n1 : ", n1);
    console.log("n2 : ", n2);
} else if ( delta == 0) {
    let n = -b / (2 * a);
    console.log("n : ", n);
}
