console.log("Các số Armstrong có 3 chữ số là:");
for (let i = 100; i <= 999; i++) {
    let numStr = i.toString();

    let digit1 = parseInt(numStr[0]);
    let digit2 = parseInt(numStr[1]);
    let digit3 = parseInt(numStr[2]);

    let sumOfCubes =
        Math.pow(digit1, 3) + Math.pow(digit2, 3) + Math.pow(digit3, 3);
    if (sumOfCubes === i) {
        console.log(i);
    }
}