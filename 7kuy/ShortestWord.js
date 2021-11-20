function findShort(s){
  var stringArray = s.split(" ");  
  var shortestWord;
  var shortestLength = stringArray[0].length; 
  for(var i = 0; i < stringArray.length; i++){
   if(stringArray[i].length < shortestLength){
  shortestLength = stringArray[i].length;   
  shortestWord = stringArray[i];            
  }
    }
return shortestLength;
}