function arraysSimilar(arr1, arr2) {
  let sum1 =0;
  let sum2 =0;
  if (arr1.length != arr2.length) {return false;}
  for (let i=0;i<arr1.length;i++){
    if (Number.isInteger(arr1[i]) == false || Number.isInteger(arr2[i]) == false)
      {return false;}
    sum1 += arr1[i];
    sum2 += arr2[i];
  }
  if (sum1 != sum2)  {return false;}
  return true;
}