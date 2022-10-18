function validateBattlefield(arr) {
    let soloCheckCount = 0
    let doubleCheckCount = 0
    let tripleCheckCount = 0
    let fourthCheckCount = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] === 0) {
                continue
            }
            if (i !== 0 && arr[i-1][j] === 1) {
                continue
            }
            if (j !== 0 && arr[i][j-1] === 1) {
                continue
            }

            if (arr[i][j] === 1 && i !== 9) {
                if (arr[i][j+1] === 1 && arr[i+1][j] === 1) {return false}
                if ((arr[i+1][j+1] === 1 && i !== 9) || (arr[i+1][j-1] === 1 && i !== 9)) {return false}
                if ((arr[i][j+1] === 0 && arr[i+1][j] === 0) || (j === 9 && arr[i+1][j] === 0) || (i === 9 && arr[i][j+1] === 0))
                {fourthCheckCount++}

                if (arr[i][j+1] === 1 && arr[i][j+2] === 0) {
                    tripleCheckCount++
                }
                if (arr[i][j+1] === 1 && arr[i][j+2] === 1 && arr[i][j+3] === 0) {
                    doubleCheckCount++
                }
                if (arr[i][j+1] === 1 && arr[i][j+2] === 1 && arr[i][j+3] === 1 && arr[i][j+4] === 0) {
                    soloCheckCount++
                }

                if (arr[i + 1][j] === 1 && arr[i + 2][j] === 0) {
                    tripleCheckCount++
                }
                if (arr[i + 1][j] === 1 && arr[i + 2][j] === 1 && arr[i + 3][j] === 0) {
                    doubleCheckCount++
                }
                if (arr[i + 1][j] === 1 && arr[i + 2][j] === 1 && arr[i + 3][j] === 1 && arr[i + 4][j] === 0) {
                    soloCheckCount++
                }
            }
            if (arr[9][j] === 1) {
                if (arr[8][j+1] === 1) {return false}
                if (arr[9][j+1] !== 1) {fourthCheckCount++}
                if (arr[9][j+1] === 1 && arr[9][j+2] === 0) {
                    tripleCheckCount++
                }
                if (arr[9][j+1] === 1 && arr[9][j+2] === 1 && arr[9][j+3] === 0) {
                    doubleCheckCount++
                }
                if (arr[9][j+1] === 1 && arr[9][j+2] === 1 && arr[9][j+3] === 1 && arr[9][j+4] === 0) {
                    soloCheckCount++
                }
            }
        }
    }
    if (soloCheckCount !== 1 || doubleCheckCount !== 2 || tripleCheckCount !== 3 || fourthCheckCount !== 4) {
        return false
    } else return true
}