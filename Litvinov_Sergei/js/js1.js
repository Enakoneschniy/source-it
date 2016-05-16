//
function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function arrGenerator(n){
    var arr = [];
    for( var i = 0; i < n ; i++) {
        arr.push(getRandomInt(0,10))
    }
    return arr;
}
