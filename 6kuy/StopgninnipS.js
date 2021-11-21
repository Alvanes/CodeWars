function spinWords(string){
  let arr = string.split(" ");
  let i;
  let newarr = "";
  for (i=0;i<arr.length;i++){
  
    if (arr[i].length >=5){
      for (let j=arr[i].length - 1;j >= 0;j--){
        newarr += arr[i][j];                  }
           } 
    else newarr += arr[i];
    
    if (i !== arr.length - 1) newarr += " ";
  } 
  return newarr;
}