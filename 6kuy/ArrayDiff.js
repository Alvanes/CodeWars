function arrayDiff(a, b) {
    let newArr = [...a]
    for (let i = 0; i < b.length ; i++) {
        for (let j = 0; j < a.length; j++) {
            if (b[i] === a[j] && newArr.includes(a[j])) {newArr.splice(newArr.indexOf(b[i]), 1)}
        }
    }
    return newArr
}