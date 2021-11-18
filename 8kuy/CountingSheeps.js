function countSheeps(arrayOfSheep) {
 let trueSheeps = 0;
  for (let i=0;i<arrayOfSheep.length;i++){
    if (arrayOfSheep[i] == true) {trueSheeps++}; 
  }
  return trueSheeps;
}