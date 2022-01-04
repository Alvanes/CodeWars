function smallEnough(a, limit){
    for (let i=0;i<a.length;i++){
        if (limit < a[i])
            return false
    }
    return true
}