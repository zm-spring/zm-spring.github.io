/**
 * daZhouTian
 */
let daZhouTianHole = [
    '',
    'U2FsdGVkX1+0xWhcLbkn2ADX5A+an2bG01d6Z3qJi0o=',
    'U2FsdGVkX18GTJc+xc073NbS+qs33q50xId1rsKwhhc=',
    'U2FsdGVkX1/gB2RHwySHzVLRQZTexLckZdR4RzEUkyY=',
    'U2FsdGVkX1/Zlwv1RsuGuKSOVNjD+x2LArEkoDaA4x8=',
    'U2FsdGVkX1/cDnCGm4UaAs1DmxZ6b+j7O9MiSDZLY5s=',
    'U2FsdGVkX18222DipGwYEkcX+N/s7ebQu1rNs9MvElE=',
    'U2FsdGVkX19w3w/Ejfoysv36G/21sBx3zN3bmXQn3pA=',
    'U2FsdGVkX1917wURE7JP18VCbH4AHbqFyp/Z22d8RRc=',
    'U2FsdGVkX1+m/0mBZYJ3oSci0e8y/Htf6Uw2q7HPohM=',
    'U2FsdGVkX18S5qujNUwAhO8/L9J21+hZUWrNj7xSK+w=',
    'U2FsdGVkX183eFQhLkp4WODVumntlPhZN1EUAU2NBhQ=',
    'U2FsdGVkX18IJVQiuuNfOZSOLIY6AmeHVLetwuRd7QY=',
];

/**
 * 数字转穴位
 * @param num
 * @returns {string}
 */
function numberTurnHole(num) {
    for (let i = 0; i < daZhouTianHole.length; i++) {
        if (i === num)
            return holeChangeUrl(decryptHole(daZhouTianHole[i], KEY)) + nbsp;
    }
}

/**
 * 12位数字处理
 * @param num
 * @returns {number|number|*}
 */
function numProcess(num) {
    num = num > 12 ? num % 12 : num;
    return num === 0 ? 12 : num;
}


let daZhouTianTagOne = false;

/**
 * 字符串拼接
 * @param carrier
 */
function daZhouTianFun(tagName, tagCarrier) {

    appendTag(tagName, tagCarrier, daZhouTianTagOne)
    daZhouTianTagOne = true;
    //紫薇斗君计算
    let douJunNum = numProcess(
        diZhiTurnNumber(lunar.getYearZhi())
        + 12 - userTime.getMonth()
        + diZhiTurnNumber(userTime.getTimeZhi())
    );

    //大周天灵穴计算
    let innateAfter = numProcess(
        douJunNum
        + lunar.getMonth()
        + lunar.getDay()
        + diZhiTurnNumber(lunar.getTimeZhi()) - 3
    );

    let carrierHtml =
        "斗君："
        + numberTurnDiZhi(douJunNum) + douJunNum
        + "</br>推演："
        + lunar.getYearZhi() + diZhiTurnNumber(lunar.getYearZhi()) + "&nbsp;←&nbsp;"
        + userTime.getMonthZhi() + userTime.getMonth() + "&nbsp;→&nbsp;"
        + userTime.getTimeZhi() + diZhiTurnNumber(userTime.getTimeZhi())
        + "<br/>开穴："
        + numberTurnHole(innateAfter) + "·" + nbsp
        + numberTurnDiZhi(innateAfter) + innateAfter
        + "<br/>推演："
        + numberTurnDiZhi(douJunNum) + douJunNum + "&nbsp;→&nbsp;"
        + lunar.getMonthZhi() + lunar.getMonth() + "&nbsp;→&nbsp;"
        + lunar.getDayZhi() + lunar.getDay() + "&nbsp;→&nbsp;"
        + lunar.getTimeZhi() + diZhiTurnNumber(lunar.getTimeZhi())
        + "<br/>详情：" + "<a href='#' data-popup='.popup-about' class='open-popup'>当日开穴表</a>"

    $("#" + tagCarrier).html(carrierHtml);

    let innateAfterAll = "";
    let time = 23;
    for (let i = 1; i < 13; i++) {
        let innateAfters = numberTurnHole(numProcess(
            douJunNum
            + lunar.getMonth()
            + lunar.getDay()
            + diZhiTurnNumber(numberTurnDiZhi(i)) - 3
        ));
        let startTime = (i == 1 ? 23 : (i * 2 - 3)) + ":00"
        let endTime = (i * 2 - 1) + ":00"
        innateAfterAll += startTime + " —— "+endTime + "【" + innateAfters + "】</br>";
        time -= 2;
    }
    $("#window").html(innateAfterAll)
    console.log()
}

/**
 * Rabbit daZhouTian

 U2FsdGVkX18u5DEW2BNcwWdha19wRmFfyNJvL76RBhzemoO7D/JJDfl+tvoHLVF5
 v6et9LtYsuNtgYfUCroYsGNkQ2VCBiWOWzqZRagOjkWTfRDI5NhyjVep5ZJpdGOh
 qPzR4gP3wx//wXO1Gd+Wvg5Pxmop5k5gXNHeyEzn+5ZakxAw2Dkneb4JNuHdch4o

 */