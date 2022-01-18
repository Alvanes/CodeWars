function narcissistic(value) {
    arr = value.toString(10).split('')
    let num = 0
    for (let i = 0; i < arr.length; i++) {
        num = num + (Math.pow(JSON.parse(arr[i]),arr.length))
    }
    if (num === value) {return true}
    return false
}