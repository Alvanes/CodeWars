function solution(str){
   let newstr = str.match(/.{1,2}/g);
   if (str.length% 2 != 0) { newstr[newstr.length-1] += "_" }
   if (str == "") {return [];}
   return newstr;
}