let soarHole = [
    {},
    {
        "hole": ['U2FsdGVkX1/rUjNp0SdbsGDmMWJnp3Ol6yA7YUcm7jE=',
            'U2FsdGVkX19bf8MK9YEdK2tv5w47M27arii3kBEkEFk=',
            'U2FsdGVkX19hjPs1FTSx4leay671qy9BDcKOJbwyeFo='
        ],
        "order": [1, 2, 4, 8, 6, 5, 7, 3]
    },
    {
        "hole": ['U2FsdGVkX1/+ZqeIrEjhBtOyf5yfrxS/IDpbMtx9C84=',
            'U2FsdGVkX19AgZVEcUYF++VtOgS6/BRaI++Pls6iQps=',
            'U2FsdGVkX1/PbpeU0LiQe7UGjF0K3akiezzKKE2i+r8='
        ],
        "order": [2, 4, 8, 6, 5, 7, 3, 1,]
    },
    {
        "hole": ['U2FsdGVkX1+mRkfo6WO5xpPUgqUCVvbNs3nMqIDy84A=',
            'U2FsdGVkX1/rUjNp0SdbsGDmMWJnp3Ol6yA7YUcm7jE=',
            'U2FsdGVkX19jJir5ySP+9cg6QQKBDkcl0ElMwbssJJA='
        ],
        "order": [3, 1, 2, 4, 8, 6, 5, 7,]
    },
    {
        "hole": ['U2FsdGVkX1/p0n1N8giP5bOL0tzboyCWDR2nkKdcEBA=',
            'U2FsdGVkX18D2gTDfRV7FIur8h/cG1h5pHuPYfM2KYI=',
            'U2FsdGVkX1/trU6PPYMlvbrI7Fea/s1AIQ2HT6JLN64='
        ],
        "order": [4, 8, 6, 5, 7, 3, 1, 2,]
    },
    {
        "hole": ['U2FsdGVkX1+W9d8a9KEbIDCjFg/s37BoVPR7+VmlPeM=',
            'U2FsdGVkX18uwGqgzGsVP1b3zfj9+l4yrWcuExRdBTI=',
            'U2FsdGVkX1822N5AmSppJB6f9+9PB4xVuQsQdY5ftIg='
        ],
        "order": [5, 7, 3, 1, 2, 4, 8, 6,]
    },
    {
        "hole": ['U2FsdGVkX18D2gTDfRV7FIur8h/cG1h5pHuPYfM2KYI=',
            'U2FsdGVkX1/p0n1N8giP5bOL0tzboyCWDR2nkKdcEBA=',
            'U2FsdGVkX1/tUZKFzkc/dAn1kc8zLdpjQBbJl490+hg='
        ],
        "order": [6, 5, 7, 3, 1, 2, 4, 8]
    },
    {
        "hole": ['U2FsdGVkX18uwGqgzGsVP1b3zfj9+l4yrWcuExRdBTI=',
            'U2FsdGVkX1+W9d8a9KEbIDCjFg/s37BoVPR7+VmlPeM=',
            'U2FsdGVkX1+4W0U2GJP23UPYUZccT6P9SFqD8IP5Ujo='
        ],
        "order": [7, 3, 1, 2, 4, 8, 6, 5,]
    },
    {
        "hole": ['U2FsdGVkX19AgZVEcUYF++VtOgS6/BRaI++Pls6iQps=',
            'U2FsdGVkX1/+ZqeIrEjhBtOyf5yfrxS/IDpbMtx9C84=',
            'U2FsdGVkX19TlXHmaT3CRPVlizKeJnnpJBi0anDh+Lk='
        ],
        "order": [8, 6, 5, 7, 3, 1, 2, 4,]
    },
    {
        "hole": ['U2FsdGVkX1/rUjNp0SdbsGDmMWJnp3Ol6yA7YUcm7jE=',
            'U2FsdGVkX19bf8MK9YEdK2tv5w47M27arii3kBEkEFk=',
            'U2FsdGVkX19hjPs1FTSx4leay671qy9BDcKOJbwyeFo='
        ],
        "order": [1, 2, 4, 8, 6, 5, 7, 3]
    },
    {
        "hole": ['U2FsdGVkX1/+ZqeIrEjhBtOyf5yfrxS/IDpbMtx9C84=',
            'U2FsdGVkX19AgZVEcUYF++VtOgS6/BRaI++Pls6iQps=',
            'U2FsdGVkX1/PbpeU0LiQe7UGjF0K3akiezzKKE2i+r8='
        ],
        "order": [2, 4, 8, 6, 5, 7, 3, 1,]
    }
]

let feiTenTagOne = false;

function feiTenFun(tagName, tagCarrier) {

    appendTag(tagName, tagCarrier, feiTenTagOne)
    feiTenTagOne = true;

    //接经顺序
    function eightVeinStitching(num) {
        let splice = "";

        for (let i = 0; i < soarHole[num].order.length; i++) {
            splice
                += "<tr><td>" + (i + 1) + "</td><td>"
                + holeChangeUrl(decryptHole(soarHole[soarHole[num].order[i]].hole[0], KEY, "***"))
                + "</td><td>"
                + decryptHole(soarHole[soarHole[num].order[i]].hole[2], KEY, "***")
                + "</td></tr>"
        }
        return "<table><tr><td colspan='4'>奇经八脉接经顺序</td></tr><tr><td>顺序</td><td>主穴</td><td>经脉</td></tr>" + splice + "</table>";
    }

    $("#" + tagCarrier).html(
        "配穴：" + holeChangeUrl(decryptHole(soarHole[soarHole[tianGanTurnNumber(lunar.getTimeGan())].order[1]].hole[0], KEY, "***"))
        + "</br>注意：配合定中宫，第一针不拔，之后七针不留"
        + eightVeinStitching(tianGanTurnNumber(lunar.getTimeGan()))
    )
}