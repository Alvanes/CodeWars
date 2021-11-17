function highAndLow(numbers){
   var maxmin = "";
        var max = 0;
        var min = 0;
        const arr = numbers.split(" ").map(Number);
        min = arr[0];
        max = min;
        for (var i = 1; i < arr.length; ++i) {
            if (arr[i] > max) max = arr[i];
            if (arr[i] < min) min = arr[i];
        }
        maxmin = max.toString() + " " + min.toString();
        return maxmin;
}