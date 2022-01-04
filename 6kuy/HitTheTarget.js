const solution = courses => {
    let a,b = 0;
    let a1,b1 = 0;
    let result = false;
    for (let i=0;i<courses.length;i++) {
        for (let j=0;j<courses.length;j++) {
            if (courses[i][j] === "x") {
                a=i;
                b=j;
                break
            }
        }
    }
    for (let i=0;i<courses.length;i++) {
        for (let j=0;j<courses.length;j++) {
            if (courses[i][j] === "^" || courses[i][j] === ">" || courses[i][j] === "v" || courses[i][j] === "<" ) {
                a1=i;
                b1=j;
                break
            }
        }
    }
    if  (b===b1 && a<a1 && courses[a1][b1]=== "^") { result = true }
    if  (b===b1 && a>a1 && courses[a1][b1]=== "v") { result = true }
    if  (a===a1 && b>b1 && courses[a1][b1]=== ">") { result = true }
    if  (a===a1 && b<b1 && courses[a1][b1]=== "<") { result = true }
    return result
}