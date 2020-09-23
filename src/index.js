module.exports = function reverse (n) {
    let temp = n.toString().split('');

    temp.reverse();
    n = parseInt(temp.join(''));
    return n;
}
