let input = +prompt("");
let n = " ";
for (let i = 0; i < input; i++){
    if (input % i == 0) {
        n += i + ",";
    }
}
console.log(n.slice(0, n.length - 1));
