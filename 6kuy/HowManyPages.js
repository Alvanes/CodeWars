function amountOfPages(summary) {
    let newArr = []
    let newStr = ''
    let finishNum = 0
    for (let i = 0; i <= summary; i++) {
        newArr.push(i)
    }
    for (let i = 0; i <= summary; i++) {
        if (newStr.length >= summary) {
            if (summary < 10) {finishNum = newArr[i]}
            else {finishNum = newArr[i] - 1}
            break
        }
        newStr += newArr[i]
    }
    return finishNum
}