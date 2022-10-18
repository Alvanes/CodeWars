function duplicateCount(text){
    let str = text.toLowerCase().split("")
    let secStr = []
    for (let i = 0; i < str.length; i++) {
        for (let j = 1; j < str.length; j++) {
            if (str[i] == str[j] && !secStr.includes(str[i]) && i != j) {
                secStr.push(str[i])
            }
        }
    }
    return secStr.length
}