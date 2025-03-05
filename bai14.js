let chieuNgang = +prompt("Nhập chiều ngang của hình chữ nhật:");  
let chieuDoc = +prompt("Nhập chiều dọc của hình chữ nhật:");
if (chieuNgang <= 0 || chieuDoc <= 0) {  
  document.write("Vui lòng nhập chiều ngang và chiều dọc là số dương.");  
} else {  
  document.write("<pre>"); 
  for (let i = 0; i < chieuNgang; i++) {  
    document.write("*");  
  }  
  document.write("<br>");  
  for (let i = 0; i < chieuDoc - 2; i++) {  
    document.write("*"); 
    for (let j = 0; j < chieuNgang - 2; j++) {  
      document.write(" "); 
    }  
    document.write("*<br>"); 
  }  
  if (chieuDoc > 1) {  
    for (let i = 0; i < chieuNgang; i++) {  
      document.write("*");  
    }  
    document.write("<br>");  
  }  
  document.write("</pre>");
}  