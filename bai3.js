let pass = "admin";
let input = prompt("nhap pass");
for (let i = 1; i <= 3; i++){
    if (input == pass) {
        console.log("ok");
        break;
    } else {
        console.log("sai mk roi");
    }
}