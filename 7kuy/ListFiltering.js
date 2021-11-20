function filter_list(l) {
  let newarr = l.filter(item => typeof item === 'number');
  return newarr;
}