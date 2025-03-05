console.log("Tam giác a:");  
document.write("Tam giác a:<br>"); 
for (let i = 8; i >= 1; i--) {  
  let sao = "";  
  for (let j = 0; j < i; j++) {  
    sao += "*";  
  }  
  console.log(sao);  
  document.write(sao + "<br>");  
}  
 
console.log("Tam giác b:");  
document.write("Tam giác b:<br>");  
for (let i = 1; i <= 8; i++) { 
  let sao = "";  
  for (let j = 0; j < i; j++) {  
    sao += "*";  
  }  
  console.log(sao);  
  document.write(sao + "<br>");  
}  

console.log("Tam giác c:");  
document.write("Tam giác c:<br>");  
for (let i = 1; i <= 8; i++) {  
  let khoangTrang = "";  
  for (let k = 0; k < 8 - i; k++) {   
    khoangTrang += " ";  
  }  
  let sao = "";  
  for (let j = 0; j < i; j++) {  
    sao += "*";  
  }  
  console.log(khoangTrang + sao);  
  document.write(khoangTrang + sao + "<br>");  
}  

console.log("Tam giác d:");  
document.write("Tam giác d:<br>");  
for (let i = 8; i >= 1; i--) {  
  let khoangTrang = "";  
  for (let k = 0; k < 8 - i; k++) {  
    khoangTrang += " ";  
  }  
  let sao = "";  
  for (let j = 0; j < i; j++) {  
    sao += "*";  
  }  
  console.log(khoangTrang + sao);  
  document.write(khoangTrang + sao + "<br>");  
}  