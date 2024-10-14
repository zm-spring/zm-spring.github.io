//阳历 阴历
let solar, lunar;

//八字
let baZi;

//自定义时间
let customizeTime;

//用户八字时间
let userTime;

//空格
let nbsp = '&nbsp;';

//穴位密钥
let KEY;

let firstTag = false;

//天干
let tianGan = ['', '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']

//地支
let diZhi = ['', '子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']

//方向
let position = ['', '北', '北偏东', '东偏北', '东', '东偏南', '南偏东',
    '南', '南偏西', '西偏南', '西', '西偏北', '北偏西']

//十二经
// let twelveClassics = ['', '足少阳胆经', '足厥阴肝经', '手太阴肺经', '手阳明大肠经', '足阳明胃经', '足太阴脾经',
//     '手少阴心经', '手太阳小肠经', '足太阳膀胱经', '足少阴肾经', '手厥阴心包经', '手少阳三焦经'
// ]

//回阳九针
// let huiYangPoint = ['', '哑门', '劳宫', '三阴交', '涌泉', '太溪', '中脘', '环跳', '足三里', '合谷'];


//时间填充
function timeFilling() {

    if ($("#cusBir option:selected").val() === "阳历") {
        $("#cusBirOvertOrShade").attr("value",
            solar.getYear() + "."
            + solar.getMonth() + "."
            + solar.getDay() + "."
            + solar.getHour() + "."
            + solar.getMinute()
        )
    } else {
        $("#cusBirOvertOrShade").attr("value",
            lunar.getYear() + "."
            + lunar.getMonth() + "."
            + lunar.getDay() + "."
            + lunar.getHour() + "."
            + lunar.getMinute()
        )
    }

}

/**
 * 天干转数字
 * @param num
 * @returns {number}
 */
function tianGanTurnNumber(num) {
    for (let i = 0; i < tianGan.length; i++) {
        if (tianGan[i] === num) return i;
    }
}

/**
 * 地支转数字
 * @param num
 * @returns {number}
 */
function diZhiTurnNumber(num) {
    for (let i = 0; i < diZhi.length; i++) {
        if (diZhi[i] === num) return i;
    }
}

/**
 * 数字转地支
 * @param num
 * @returns {string}
 */
function numberTurnDiZhi(num) {
    for (let i = 0; i < diZhi.length; i++) {
        if (i === num) return diZhi[i];
    }
}

/**
 * 穴位转链接
 * @param val
 * @returns {string}
 */
function holeChangeUrl(val) {
    return "<a href='https://www.sogou.com/web?query="
        + val + "穴" + "'>"
        + val + "穴</a>"
}

/**
 * TD拼接
 * @param val1
 * @param val2
 * @param val3
 * @param val4
 * @param val5
 * @returns {string}
 */
function tdSplice(val1, val2, val3, val4, val5,) {
    return "<td>"
        + val1 + "</td><td>"
        + val2 + "</td><td>"
        + val3 + "</td><td>"
        + val4 + "</td><td>"
        + val5 + "</td>"
}


/**
 * 穴位解密方法
 * @param str 密文
 * @param key 密钥
 * @param mask 无法解析返回值
 * @returns {string|*}
 */
function decryptHole(str, key, mask) {
    if (mask == null) mask = "***";
    if (key.length !== 7) return mask;
    if (CryptoJS.AES.decrypt(str, key).toString(CryptoJS.enc.Utf8) === "") {
        return mask;
    } else {
        return CryptoJS.AES.decrypt(str, key).toString(CryptoJS.enc.Utf8);
    }
}


