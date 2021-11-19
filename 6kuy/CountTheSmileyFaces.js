function countSmileys(arr) {
   let col = 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i].length <2 || arr[i].length >3) {continue}
    if (arr[i].length == 3) {
      if (arr[i].includes(":")||arr[i].includes(";")) {
        if (arr[i].includes("-")||arr[i].includes("~")) {
            if (arr[i].includes(')')||arr[i].includes("D")) {  col++; }         
        } 
      } 
    }
    else 
    if (arr[i].includes(":")||arr[i].includes(";")) { 
            if (arr[i].includes(')')||arr[i].includes("D")) {  col++;  }
       } 
  }
    return col;
}