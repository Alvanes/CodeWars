const prevMultOfThree = n => {
    do {
        if (n % 3 != 0 && n.toString().length == 1) {return null}
        if (n % 3 == 0) {return n}
        (n=Math.trunc(n/10));
    }
    while (n.toString().length = 1)
}