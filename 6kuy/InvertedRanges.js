function invertedRanges(ranges) {
    let arr = []
    switch (true) {
        case(ranges.length === 0):
            arr.push([0,100])
            return arr
            break
        case(ranges.length === 1):
            if (ranges[0][1] - ranges[0][0] === 100){
                return arr
            }
            if (ranges[0][0] !== 0 && ranges[0][1] !== 100) {
                arr.push([0,ranges[0][0] - 1])
                arr.push([ranges[0][1] + 1,100])
                return arr
            }
            if (ranges[0][0] !== 0 && ranges[0][1] == 100) {
                arr.push([0,ranges[0][0] - 1])
                return arr
            }
            break
        case(ranges.length === 2):
            if ((ranges[0][1] - ranges[0][0]) + (ranges[1][1] - ranges[1][0]) === 99){
                return arr
            }
            if (ranges[0][0] !== 0 && (ranges[1][0]-ranges[0][1] === 1) && ranges[1][1] === 100){
                arr.push(0,ranges[0][0]-1)
                return arr
            }
            if (ranges[0][0] !== 0 && (ranges[1][0]-ranges[0][1] === 1) && ranges[1][1] !== 100){
                arr.push([0,ranges[0][0]-1])
                arr.push([ranges[1][1]+1,100])
                return arr
            }
            if (ranges[0][0] !== 0 && (ranges[1][0]-ranges[0][1] !== 1) && ranges[1][1] !== 100){
                arr.push([0,ranges[0][0]-1])
                arr.push([ranges[0][1]+1,ranges[1][0]-1])
                arr.push([ranges[1][1]+1,100])
                return arr
            }
            if (ranges[0][0] == 0 && (ranges[1][0]-ranges[0][1] !== 1) && ranges[1][1] !== 100){
                arr.push([ranges[0][1]+1,ranges[1][0]-1])
                arr.push([ranges[1][1]+1,100])
                return arr
            }
            if (ranges[0][0] !== 0 && (ranges[1][0]-ranges[0][1] !== 1) && ranges[1][1] == 100){
                arr.push([0,ranges[0][0]-1])
                arr.push([ranges[0][1]+1,ranges[1][0]-1])
                return arr
            }
            break
        case(ranges.length === 3):
            if (ranges[0,0] !== 0) {
                arr.push([0,ranges[0][0] - 1])
            }
            if (ranges[0][1] !== ranges[1][0]) {
                arr.push([ranges[0][1]+1,ranges[1][0]-1])
            }
            if (ranges[1][1] !== ranges[2][0]) {
                arr.push([ranges[1][1]+1,ranges[2][0]-1])
            }
            if (ranges[2,1] !== 100) {
                arr.push([ranges[2][1]+1,100])
            }
            return arr
            break
        default: return arr
    }
}