function likes(names) {
  let rar = names.length - 2;
  if (names.length == 0) {return 'no one likes this';}
  switch (true){
      case (names.length == 1): return names[0] + " likes this"; break;
      case (names.length == 2): return names[0] + " and " + names[1] + " like this"; break;
      case (names.length == 3): return names[0] + ", " +
       names[1] + " and " + names[2] + " like this"; break;
      case (names.length >= 4): return names[0] +", " + names[1] + 
      " and " + rar + " others like this"; break;
  }
}