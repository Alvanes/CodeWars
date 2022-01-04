function warnTheSheep(queue) {
    let wo = 0;
    for (let i=0; i< queue.length; i++){
        if (queue[i] == "wolf")
            wo = queue.length - i
    }
    if (wo == 1) return "Pls go away and stop eating my sheep";
    return "Oi! Sheep number " + (wo-1) + "! You are about to be eaten by a wolf!";
};