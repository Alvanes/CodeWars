function padIt(str,n){
  let i = 1;
  while (i<=n){
    if (Math.floor(i / 2) == i / 2) {str =  str + "*"; i++; continue;}
   str =  "*" + str;
    i++;
  }
  return str;
}