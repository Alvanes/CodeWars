function multiTable(number) {
  let line = "";
  for (let i=1;i<11;i++){
    let newnum = i*number;
    if (i==10) { line += i + " * " + number + " = " + newnum;  break;   }
    line += i + " * " + number + " = " + newnum + "\n"; 
  }
    return line;
}