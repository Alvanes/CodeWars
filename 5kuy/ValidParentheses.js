function validParentheses(parens) {
    arr = parens.split("")
    if (arr.length % 2 !== 0) {return false}
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(`(`)) sum += 1
        if (arr[i].includes(`)`)) sum -= 1
        if (sum < 0) return false
    }
    if (sum !== 0) return false
    return true
}