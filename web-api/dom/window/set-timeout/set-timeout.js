setTimeout(() => {
    eat("早餐");
    setTimeout(() => {
        eat("午餐");
        setTimeout(() => {
            eat("晚餐");
            let supperId = setTimeout(() => {
                eat("夜宵");
            }, 2000);
            cancelSupper(supperId);
        }, 2000);
    }, 2000);
}, 2000);


/**
 * 用餐
 *
 * @param {string} meal
 */
function eat(meal) {
    console.log(meal);
}


/**
 * 取消夜宵
 *
 * @param {number} supperId
 */
function cancelSupper(supperId) {
    clearTimeout(supperId);
    console.log(`${supperId} 夜宵已取消`);
}