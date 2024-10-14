let midGong = ['U2FsdGVkX19EIB25ShUjydyMViiSmNw870n45escDaI=',
    'U2FsdGVkX1/D0N2bjYvmCLargknEJq6Ehl4YpofZZF8='
];
let dingZhongGongTagOne = false;

function dingZhongGongFun(tagName, tagCarrier) {

    let carrierHtml =
        "开穴："
        + holeChangeUrl(decryptHole(midGong[0], KEY)) + nbsp + "+" + nbsp
        + holeChangeUrl(decryptHole(midGong[1], KEY)) + nbsp

    appendTag(tagName, tagCarrier, dingZhongGongTagOne)
    dingZhongGongTagOne = true;
    $("#" + tagCarrier).html(carrierHtml)
}