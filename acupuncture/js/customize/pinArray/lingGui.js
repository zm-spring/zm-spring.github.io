let lingGuiHole = [
    '',
    'U2FsdGVkX18jJauRnlpVAvG9WqVkrKWRHjegm7UfLVc=',
    'U2FsdGVkX1+v76Al0izNxztdvIRGzHzKmZIAO5vQ6g8=',
    'U2FsdGVkX1/Dz2d8N02ETar0PVPym7Dexg/JdJxTGuw=',
    'U2FsdGVkX1+L++T+BaUrcm+8ORMmx+o00nTzFXV+Bkg=',
    'U2FsdGVkX18qmW1J4VUnnIbisvacRZrtOHI/rBpB2x0=',
    'U2FsdGVkX1+4MlrnOpqgxxNR3f6LqwHZ8OyEwnmAy8M=',
    'U2FsdGVkX18K4/UQHir2XPdXuBJy9GjrZxEsqDruobg=',
    'U2FsdGVkX1/uu+n0XoP3XJbsm0aXf4Ix8jXEhhcAAA8=',
    'U2FsdGVkX1/SYmDEgr+cHOwj+4F3M/YMTlswpZieiyo='
];
//配穴
let lingGuiMatchHole = [0, 7, 9, 4, 3, 9, 8, 1, 6, 2];


//日干支 甲、乙、丙、丁、戊、己、庚、辛、壬、癸 / 子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥
let riGan = [0, 10, 9, 7, 8, 7, 10, 9, 7, 8, 7];
let riZhi = [0, 7, 10, 8, 8, 10, 7, 7, 10, 9, 9, 10, 7];

//时干支 甲、乙、丙、丁、戊、己、庚、辛、壬、癸 / 子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥
let shiGan = [0, 9, 8, 7, 6, 5, 9, 8, 7, 6, 5];
let shiZhi = [0, 9, 8, 7, 6, 5, 4, 9, 8, 7, 6, 5, 4];

let lingGuiTagOne = false;

function lingGuiFun(tagName, tagCarrier) {

    //方法基础参数
    appendTag(tagName, tagCarrier, lingGuiTagOne);
    lingGuiTagOne = true;

    //9为阳 / 6为阴
    let yinOrYang = tianGanTurnNumber(lunar.getDayGan()) % 2 === 0 ? 6 : 9

    let lingGuiSum = riGan[tianGanTurnNumber(lunar.getDayGan())]
        + riZhi[diZhiTurnNumber(lunar.getDayZhi())]
        + shiGan[tianGanTurnNumber(lunar.getTimeGan())]
        + shiZhi[diZhiTurnNumber(lunar.getTimeZhi())]

    let lingGuiHoleResult = lingGuiSum % yinOrYang === 0 ? yinOrYang : lingGuiSum % yinOrYang;

    $("#" + tagCarrier).html(
        "阴阳日：" + lunar.getDayGan() + lunar.getDayZhi() + (yinOrYang === 6 ? "阴日" : "阳日")
        + "</br>开穴：" + holeChangeUrl(decryptHole(lingGuiHole[lingGuiHoleResult], KEY))
        + "</br>配穴：" + holeChangeUrl(decryptHole(lingGuiHole[lingGuiMatchHole[lingGuiHoleResult]], KEY))
        + "</br>注意：配合定中宫"
    )
}

/**
 *
 U2FsdGVkX1/X9SclPBZQhniJB0BRnpNixeQZGPnGhYwHDCiejezz9kBfE+vVYLE1
 84P1+HWLM8Z4y8JUSR+A6jXrW/pOt1mIw1RWDtXaiqQ0DABNvNDgIgghRk2jpqL2
 DcLzBSwcnASRLTy1iI8rLvlhPYWi56PWkbqW3fuEjJxe5Vizx9I3OFGCqNnlvNGu
 ZKMoYY/uqXZB6kh04psn3uvEqJ+HDLasm8iZshHgT9M=
 */