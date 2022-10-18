var countBits = function(n) {
    let arr = n.toString(2).split("")
    let sum = 0
    arr.map(u => u === "1" ? sum++ : sum)
    return sum
};