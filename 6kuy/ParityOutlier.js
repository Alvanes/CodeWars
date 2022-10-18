function findOutlier(integers){
    let min=0, max = 0, minCount=0, maxCount=0
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            min = integers[i]
            minCount++
        } else {
            max = integers[i]
            maxCount++
        }
    }
    if (minCount > maxCount)  {return max}
    return min;
}