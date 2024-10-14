let zhuangZhenYuanHole = [
    'U2FsdGVkX195Dnq/uCPjV6ueoINM9ubdFW0KAvaowHk=', 'U2FsdGVkX18cSoe6FRcPYv6L+YxMrgIAHuqAgpjzvUU='
]

let zhuangZhenYuanTagOne = false;

function zhuangZhenYuanFun(tagName, tagCarrier) {
    appendTag(tagName, tagCarrier, zhuangZhenYuanTagOne);
    zhuangZhenYuanTagOne = true;

    $("#" + tagCarrier).html(
        "开穴：" + holeChangeUrl(decryptHole(zhuangZhenYuanHole[0], KEY)) + nbsp + "+" + nbsp + holeChangeUrl(decryptHole(zhuangZhenYuanHole[1], KEY))
    );
}