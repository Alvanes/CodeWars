var moveZeros = function (arr) {
  let newarr = arr.filter((item)=>item === 0)
  let newarr2 = arr.filter((item)=>item !== 0)
  return newarr2.concat(newarr)
}