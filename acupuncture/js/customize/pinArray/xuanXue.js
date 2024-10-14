let xuanXueHole = [
    'U2FsdGVkX1/X39LjwUXm1rpHUnALOMrrOcwn603xQtY=',
    'U2FsdGVkX1/SqbWIOUQMVa0fHkIcKIyhQT1umeOW6v4Ton8/evpJeSTesXgZ6dqhdZG1M99nup2+fpEO5ycq1Q==',
    'U2FsdGVkX1+I6JjG++CElG3CTqDo+L+IFemeX79N1Gc3vHyU8yF5v6HY2DfNLefISgJdYUjGcDgqKOS7TIIYqA==',
    'U2FsdGVkX1/JahN0kdEXRhrf+oRm1PdyxZvF1iYideaYXpVeS6hSLpUoF6ikPVEaWOSNa2XuRa0eJhBBpor2tw==',
    'U2FsdGVkX1/d23cKj6hxh2aNMJbxYkwgvo+g3EQ4oU+W3Ya0ywXiXQWpgUUcwlRKwmPAABfCFy9jzif4GEkZsg==',
    'U2FsdGVkX18iwezhhzc0VPyyYI22Q4E3qklIT0GQR0AJ46A0Odbz0AYWu5/maDl/d9RbFCCDa/Tc0El8igHiXg==',
    'U2FsdGVkX19BL8vJD0r7kjRZ65XfXOvx7Al/SOjQ7i1jB8sJDO1isJlS5g75a2RUZ/b1LXhBCri1x+NQqKK8mQ==',
    'U2FsdGVkX19RJjQ+ulLByFm/UWvADU+zm5xQnUOzVFMvUyzH7d+TYL48CXrsNY/lCy9EIo+6+DL05An6fC0ztnFlHLdXU2JHElQXIBn/iPoDgjsaagZV2XffGOHJVGPo',
    'U2FsdGVkX1+KY4LCe/QEl48mBmpJCiW47V9vk2OZ84DviXrpXvNnwgoIWI9mFd2FgJvm0Qmq296Y2/J8/A9bKg==',
    'U2FsdGVkX19vlcM8++4335IZhZ/X87pYxVYKK4lvx0OQg12OGX1JQWwgL9YP5hOj62GGkrjcgfg2+lRlnJnVEw==',
    'U2FsdGVkX19v44f38OqEyZv1wgJAlO3K7QOLgf9Blf+RW0Wiuti+A9uCVtX4DTZP45S0OGiII7uL7fHwhA+e/A==',
    'U2FsdGVkX1+pHPpsX1VYDSWepJAJ+TevQrIcpCel5sNpiy79/MO2/9UjLS6MhRrBhziAgI8mnKboseGt+JUq5g==',
    'U2FsdGVkX1/c5VpVovXMQnB6JweENzugV4/8tALy9PqqxgW6oPzkT9XxdlIInnYiOfpuhK2HSyFOfYJ736O+gw==',
    'U2FsdGVkX1+/m1GDL2SYZD3kV+HSsnJR7tryOcksxe9llvpvb3mUdBvafAFPUiVo8mu3+c1o7ReRUTlgSRL0mA==',
    'U2FsdGVkX1949wXQ+AjBX9LAIvyPNceDmGAg/Ob13F4h22lUq3Z6OCEXSehBQ4RVRLvehmY/lcEy9bpczBziFAg7Cka7BhkxregvxtOQoZI=',
    'U2FsdGVkX1+RZhwjUVy+cO/K863AKuO9xVK5PgbW1PLziuqUqEUSlRB0HKxzZTsZzAOUejEEN0vuSspm4e/ZMLx+MggwRtlPY+NN4hZBy7E=',
    'U2FsdGVkX1//c4x+9F2EtJk30+9ucj06PKqMlC+OF7hpupJEowZUOjgh7Ewz3sRD9kEYMNLV+pUCWrpmmT2p2UioxjoAwfCRFOr8w9M0Z1s=',
    'U2FsdGVkX18nxYpZqZx69KVfr1xWuP+pz3dHe4k4cieyNQkXTVvMrBqI3AY6/JOkjKdWrFeDeADFVZMiT6KoiAGlvXkU4JjR/MvhDjMy7MQ=',
    'U2FsdGVkX1/qc8jISTB0FbkSPTXbNQ549dQNxoxeJIElqq72fu9gc9mTOO+gDIO1vJZqx8O6lPehhcYuItb8mQ==',
    'U2FsdGVkX1/cwyD/MsEZTjnuEsJmeTW7W9feLAYgec5AN1LDt/yUIZrhheWD3/oWaSF9Atn97K2lkuqwxPFXQb5ldUGwp/bTDNHtG0E4L7Q=',
    'U2FsdGVkX1/HVghSlGoSw7EGe2inmttvPGCiUYkX/a/w6JQjG+6NLoEuiWqQV2w94/Lvf+gdVy4oXXANURWBt1KdTGPabiyA0HpbQy1xxxM=',
    'U2FsdGVkX19FgMQt0NlqAhr2Mp5LhgQAZ6su23iNPJTSeXJe1Qrhy+QARgm0LpQ1rowg5jplocBFFrA+sZNltkc0J5awyXzuNsCpQ1t4ytg=',
    'U2FsdGVkX18SI8cO//VeesGU61065J8otDT2WcL8G6W+JyDWxRoAj3Jk82HgPrjpuhDRPqQ2la/zSrlDFA9rX5ZaxVQeeBrvcKHPetThd8YoZrJMzVga4bBQtCgNgtqW',
    'U2FsdGVkX18NXV3B485KIrJfjtKmbMQL/r3xDGGv/1Q3pl5r2WxluluTdQPJ/eTjGNAr8mH2foGOyj+iOfO+Xg==',
    'U2FsdGVkX18BBE/fgdRExtFDAHaQmwX0NybKy8y/O59mYrFSFAYIyhkeqn4nOYm35NO1Bs7oe9u44xmeTtw7wPxQU2ofF62cyIj6in+98TICatS+Z7LX9C3HC4xSCq5V6jX797xez/6yJzwTdKT/ag==',
    'U2FsdGVkX1/Fy8iKYtZ4TXSoyPKhHGY2zwOqdkQlqydmIVF2XPzxXaoBG22zQMYK+RvVHfnf140xOSTud6FUQfkbgKcqQwVL0gsZ4YUfygk=',
    'U2FsdGVkX19FA23E2npv+8jPllRWuVdCUFT0oYSOcdesoycd/xrEyFhSPJy7dquzJYCZAWZJ4rSZbtIVCtM9lw==',
    'U2FsdGVkX1+fZ4oAGTqMuFZxDETdSDAMnn/vA+o1WUtLOI57xTSfl/3pjViAe2vZnl1vpR4vjthhkRprIhl7Tg==',
    'U2FsdGVkX1+5wLx/qWrgE4u7V0mr6OnMK/08p8o9YzKLIMFQnMTSVl65ilexgSd2YFtlWGLe0Xj/KEEiHNTXB4aiR1gkM48r1wwq6zdUQj8=',
    'U2FsdGVkX1/BPXWjDhxEzMyIi78eRpSG9kz/5gikTAZU+r5gO9yb6pX7ejxeGZtVISCrmFgWbWvXiYRboWVCR/BB+9+g+i7vg1j1Idb4KlxzuSHFodi6K99wETyh9luT',
    'U2FsdGVkX18Ev6WXPsREaGaAYrQWAwHjGWbTaUD8CAJLFg5DAnBqUcqnWrV2U05K8aaTTtYiuvadOEcU3ZsNNczcSzL9Co7zCy7uwlE8GdE=',]
;

let xueJi = [
    '',
    'U2FsdGVkX18i8aM7EuKYOoDQr0nx90AjyvoHkQtG/sQ=',
    'U2FsdGVkX19xdgaC+ocHMsj491Ugo8BeKMbLo0SBSh0=',
    'U2FsdGVkX1/3MrT5Kw9wTU84N6O0l8n84al29uhOxUs=',
    'U2FsdGVkX19jUVl+jaTRix2X9YJUZBVjgc3Mu7td7Uc=',
    'U2FsdGVkX18fm2HiciGLwPZ5whJYqLiN1/OIy3JjM38=',
    'U2FsdGVkX1+/d3ml+l5UboP8YG/XItnIwADxG+AbwTk=',
    'U2FsdGVkX19khjhDb9kF4s16zyJPqcoO++/ItKvcovk=',
    'U2FsdGVkX181dYx8PU42z5mIMuw30aY7SBN/r/lFv0Y=',
    'U2FsdGVkX18mJLZcdH0K3nBhqpLuVYZS8pkFPpUjTws=',
    'U2FsdGVkX1/Y1RcVhlrGVZm167mKp/LI5T0/emZekoM=',
    'U2FsdGVkX19XI+ATuXea0Ig8yIEzpximtJDLinyiqb8=',
    'U2FsdGVkX19GCcVQL9FPoaOky8rxo+U8XAV+NPiFKQU=',
]

let xuanXueTagOne = false;

let tuiGong = "U2FsdGVkX18zrF2exSGhtCW9vztltVwQsCYXCvP+7p9zWjDqoEgzPQX6KuYXH3BwHVJ3/wVn936StuxjUJcZSgvZ9/n7/KjZ7HRlJJAORhs=";

function xuanXueFun(tagName, tagCarrier) {
    appendTag(tagName, tagCarrier, xuanXueTagOne);
    xuanXueTagOne = true;
    let holeSplit = decryptHole(xuanXueHole[lunar.getDay()], KEY, "***#***#***#").split('#');

    let jiRi = "***";
    if (decryptHole(xueJi[lunar.getMonth()], KEY) != "***") {
        jiRi = decryptHole(xueJi[lunar.getMonth()], KEY) === lunar.getDayZhi() ? "<span style='color: red'>忌日</span>" : "非忌日"
    }

    $("#" + tagCarrier).html(
        "出血忌日：" + jiRi
        + "</br>玄血流注：" + holeSplit[0] + "（静脉 / 络穴 / 穴位）"
        + "</br>气血交会：" + holeSplit[1]
        + "</br>赤精至顶：" + holeSplit[2] + "（此时扎百会升阳穴）"
        + "</br>推宫换血：" + decryptHole(tuiGong, KEY, "***")
        + "</br>时辰划分：时辰一分为三（时初，时中，时尾）"
    );
}

/**
 *
 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
 ww1A37VmyPPd9IKpCJDg0g==
 */