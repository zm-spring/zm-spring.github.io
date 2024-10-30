let tianYiRiFang = [
    ['立春', '雨水', 'U2FsdGVkX1+H5GJM6H9dmtdXgYVJD0JolWFSDufuk64='],
    ['惊蛰', '春分', 'U2FsdGVkX1+HpIPQNcmmtLl4MZz9X7MitQ0uEueXRU0='],
    ['清明', '谷雨', 'U2FsdGVkX19li9uvbliOfPDBll8j9bWu0QWv0smdQHY='],
    ['立夏', '小满', 'U2FsdGVkX1+TzXUwH7M9xLQq7degiC8hUEUtpGp98oY='],
    ['芒种', '夏至', 'U2FsdGVkX18e4gclWdmYsf8/CfGZLzTrf/9nT+Qmygs='],
    ['小暑', '大暑', 'U2FsdGVkX1+4vGP/5omODxZU3tnMErKwxQWpOvYA5g0='],
    ['立秋', '处暑', 'U2FsdGVkX1+7RJ3Ky1Y3Lfm3gsiZ5YvV1qayS/4MD9E='],
    ['白露', '秋分', 'U2FsdGVkX195dnYSiXH0dqEwUSIJ7jSiWX1a//EyTSw='],
    ['寒露', '霜降', 'U2FsdGVkX19oJ50wrCNcmlEsAPSVccBaHZC0L0EZylg='],
    ['立冬', '小雪', 'U2FsdGVkX1++ekr0plthaKh+DRDtY0fdqdjlHgw0e/g='],
    ['大雪', '冬至', 'U2FsdGVkX1/a3fWFebgeCjedJDXfdWkSTOxUW+Cmibg='],
    ['小寒', '大寒', 'U2FsdGVkX19tkRedOaZeWySS51xrf9toqzGNqZBAQxE=']
]

let tianYiRiFangPassWord
    = "U2FsdGVkX1+4r3dl3c5Q2Dno/vETEZADnHDzBpz3t1qjfrdDu92f6ueBE2r8V8YCU/iiErU8C71XCHLmFTFU0tFkLEYKkiQdLDkvQ2xDw3068CSP7OCdYF+vy/pUfl7kq4G0vf8YNB16Qw+QMmXCQd1hP+86KQtayDKzp5l4kRwGibscfAtSGZ2WsUKFfTqeCVfCSAWl8awsDhwclgaLyIC0SoC9AkEQ6R+6uoxR1luy7V+yAWG8KBRkFvJZ3zhR";

let tianYiRiFangOne = false;

function tianYiRiFangCount() {
    for (let i = 0; i < tianYiRiFang.length; i++) {
        if (tianYiRiFang[i][0] === lunar.getPrevJieQi().getName() || tianYiRiFang[i][1] === lunar.getPrevJieQi().getName()) {
            return decryptHole(tianYiRiFang[i][2], KEY);
        }
    }
}

function tianYiRiFangFun(tagName, tagCarrier) {
    appendTag(tagName, tagCarrier, tianYiRiFangOne);
    tianYiRiFangOne = true;


    $("#" + tagCarrier).html(
        "天医日方：" + (lunar.getDayZhi() === tianYiRiFangCount() ? "<text style='color: green'>" : "<text>") + tianYiRiFangCount() + "日" + tianYiRiFangCount() + "方" + "</text>" +
        "</br>" + decryptHole(tianYiRiFangPassWord, KEY,"")
    )
}