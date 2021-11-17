function positiveSum(arr) {
        var summ = 0;
        if (arr.length == 0) {return summ}
        for(var i = 0; i < arr.length; i++){
          if (arr[i] <0) {continue}
            summ = summ + arr[i];
        }
        return summ;
    }