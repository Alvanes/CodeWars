const findSquares = num => {
    let max = 0;
    let min = 0;
    max = Math.pow(((num+1)/2),2);
    min = Math.pow(((num-1)/2),2);
    return  max + "-" + min;
};