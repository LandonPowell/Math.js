// The missing parts of JavaScript's math library.

Math.avg = function(li) {
    var sum = 0;
    for (var x in li) sum += li[x];
    return sum / li.length;
};

Math.mad = function(li) {
    var avg = Math.avg(li);
    var d = [];
    for (var x in li) d.push(Math.abs(avg - li[x]));
    return Math.avg(d);
};

Math.range = function(min, max, step) {
    var li = [];
    for (var x = min; x <= max; x += step || 1) {
        li.push(x);
    }
    return li;
};
