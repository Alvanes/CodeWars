const flip=(d, a)=>{
    a.sort(function(ad, bd) {
        if (d == "R") return ad - bd;
        if (d == "L") return bd - ad;
    });
    return a;
}