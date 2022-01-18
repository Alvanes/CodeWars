function formatDuration(seconds) { // 130
    if (seconds === 0) {return "now"}
    let sec = seconds % 60
    let secstr = `${sec} ${sec === 1 ? "second" : "seconds"}`
    let min = (Math.floor(seconds / 60) % 60)
    let minstr = `${min} ${min === 1 ? "minute" : "minutes"}`
    let hours = (Math.floor(seconds / 3600) % 24)
    let hoursstr = `${hours} ${hours === 1 ? "hour" : "hours"}`
    let days = (Math.floor(seconds / 86400) % 365)
    let daysstr = `${days} ${days === 1 ? "day" : "days"}`
    let years = (Math.floor(seconds / 31536000))
    let yearsstr = `${years} ${years === 1 ? "year" : "years"}`
    let secCheck = `${sec === 0 ? "" : secstr}`
    let minCheck = `${min === 0 ? "" : minstr}`
    let hoursCheck = `${hours === 0 ? "" : hoursstr}`
    let daysCheck = `${days === 0 ? "" : daysstr}`
    let yearsCheck = `${years === 0 ? "" : yearsstr}`
    let arrSec = [yearsCheck, daysCheck, hoursCheck, minCheck, secCheck]
    let newArrSec = []
    for (let i = 0; i < arrSec.length; i++) {
        if (arrSec[i]) {
            newArrSec.push(arrSec[i])
        }
    }
    if (newArrSec.length === 1) {
        return newArrSec.toString()
    } else if (newArrSec.length === 2) {
        return `${newArrSec[0]} and ${newArrSec[1]}`
    } else if (newArrSec.length > 2) {
        let temp = newArrSec.pop()
        return `${newArrSec.join(", ")} and ${temp}`
    }


    // console.log(`${yearsCheck}${daysCheck}${hoursCheck}${minCheck}${secCheck}`)
}