//24节气
let solarTerm = ['', '大寒/立春', '冬至/小寒', '小雪/大雪', '霜降/立冬', '秋分/寒露', '处暑/白露',
    '大暑/立秋', '夏至/小暑', '小满/芒种', '谷雨/立夏', '春分/清明', '雨水/惊蛰',]

//二十四节气 对应 仁督二脉穴
let solarHole = [
    ['冬至', '小寒', 'U2FsdGVkX1/NDE6LycWsvl2pJ0qlfex0iwuoV2/75Fs='],
    ['大寒', '立春', 'U2FsdGVkX18CuS4MkOKwt4H4lLSOWfudkZ13MHma0hM='],
    ['雨水', '惊蛰', 'U2FsdGVkX1/rq3Tz/UiVDFZ77RM/m24u0Wrucacmt/g='],
    ['春分', '清明', 'U2FsdGVkX1/9jtvW9cfp6l9rgnqHSzFXvCS8Q8H/JSs='],
    ['谷雨', '立夏', 'U2FsdGVkX18niJRfLFil/JkPkMAB9axWEA5iNSNpOfE='],
    ['小满', '芒种', 'U2FsdGVkX1/u/OPK3DiKPS2+rCfAhOh1fhZ9cpez2QI='],
    ['夏至', '小暑', 'U2FsdGVkX1/+4TOYj9AdWrIWZKB8EJVt8MOo8hOmLkQ='],
    ['大暑', '立秋', 'U2FsdGVkX1/30f0NqNKnoRsJ6vbf3Uh+PHWpWZSYj1w='],
    ['处暑', '白露', 'U2FsdGVkX18ECHC2WUHv6wyTuYkD3ADqsLL7DT5F05E='],
    ['秋分', '寒露', 'U2FsdGVkX18xuFzZmApf4RusGr3WJPM8RjsM6kY013k='],
    ['霜降', '立冬', 'U2FsdGVkX1+bcxhlyei1lWe288pDC+I/Gd2OXILzBpQ='],
    ['小雪', '大雪', 'U2FsdGVkX1+7rA3SHVwo3mNiz6AkKBwKReIwjcdp1j0=']
]

/**
 * 节气对应12穴位
 * @returns {string}
 */
function tianGangHoleFun() {

    for (let i = 0; i < solarHole.length; i++) {
        if (solarHole[i][0] === lunar.getPrevJieQi().getName() || solarHole[i][1] === lunar.getPrevJieQi().getName()) {
            return holeChangeUrl(decryptHole(solarHole[i][2], KEY));
        }
    }
}

/**
 * 节气转月将
 * @param val 节气
 * @returns {number}
 */
function solarTurnMoonWill(val) {
    for (let i = 0; i < solarTerm.length; i++) {
        if (solarTerm[i].split("/")[0] === val || solarTerm[i].split("/")[1] === val) {
            return i;
        }
    }
}

let tianGangTagOne = false;

function tianGangFun(tagName, tagCarrier) {

    //方法基础参数
    appendTag(tagName, tagCarrier, tianGangTagOne);
    tianGangTagOne = true;

    let yueJiang = diZhi[solarTurnMoonWill(lunar.getPrevJieQi().getName())];

    let tianPan = ['',
        ...diZhi.slice($.inArray(yueJiang, diZhi), 13),
        ...diZhi.slice(1, $.inArray(yueJiang, diZhi))]

    let diPan = ['',
        ...diZhi.slice($.inArray(lunar.getTimeZhi(), diZhi), 13),
        ...diZhi.slice(1, $.inArray(lunar.getTimeZhi(), diZhi))]

    $("#" + tagCarrier).html(
        "当前节气：" + lunar.getPrevJieQi().getName() + ' ' + lunar.getPrevJieQi().getSolar().toYmdHms()
        + "<br>下一节气：" + lunar.getNextJieQi().getName() + ' ' + lunar.getNextJieQi().getSolar().toYmdHms()

        + "<br><br>月将："
        + yueJiang
        + "<br>正时："
        + lunar.getTimeZhi()
        + "<br>天罡："
        + diPan[$.inArray("辰", tianPan)] + "方"
        + "(" + position[$.inArray(diPan[$.inArray("辰", tianPan)], diZhi)] + ")"
        + "<br>开穴：" + tianGangHoleFun()
        + "<br>注意：医者面向天罡方，受术者背向天罡方"
    )
}