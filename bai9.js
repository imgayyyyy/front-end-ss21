let a = +prompt("");
let result = 1;
if (a < 2) {
    result = 0;
} else if (a == 2) {
    result = 1;
} else {
    for (let i = 1; i < Math.sqrt(a); i += 2){
        if (a % i == 0) {
            result = 0;
            break;
        }
    }
}

if (result == 1) {
    console.log("la so nguyen to");
} else {
    console.log("khong la so nguyen to");
    
}