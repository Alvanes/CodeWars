function pigIt(str){
    let arr = str.split(" ")
    let newStr = ""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "!" || arr[i] === "?") {continue}
        arr[i] = `${arr[i].substr(1)}${arr[i][0]}ay`
    }
    return(arr.join(" "))
}