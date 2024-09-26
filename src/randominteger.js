function randomInt() {
    // 生成1到10之间的随机整数
    return Math.floor(Math.random() * 100) + 1;
}

function randomRange(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}