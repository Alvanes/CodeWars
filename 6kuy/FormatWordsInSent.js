function formatWords(words){
 let newarr = [];
  if (words == null) {return "";}
  for (let i=0;i<words.length;i++){
    if (words[i] != '') newarr.push(words[i]);
  }
  switch (true) {
      case (newarr.length == 0): return ""; break;
        case (newarr.length == 1): return newarr[0]; break;
         case (newarr.length == 2): return newarr[0] + " and " + newarr[1]; break;
          case (newarr.length >= 3): return words[0] + ", " + words[1] +
             ", " + words[2] + " and " + words[3]  ; break;
  }
  return newarr;
}