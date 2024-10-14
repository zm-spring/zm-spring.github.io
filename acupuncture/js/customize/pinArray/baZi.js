function baZiFun() {

    //判断生辰输入框是否为12
    if ($("#birOvert").val().split(".").length !== 5) return;

    solar = Solar.fromDate(trueSunUtil());

    //选择框判断
    if ($("#cusBir option:selected").val() === "阳历") {
        $("#cusBirOvertOrShade").attr("placeholder",
            solar.getYear() + "."
            + solar.getMonth() + "."
            + solar.getDay() + "."
            + solar.getHour() + "."
            + solar.getMinute()
        )
        //判断是否自定义阳历时间
        if ($("#cusBirOvertOrShade").val().split(".").length === 5) {
            solar = Solar.fromYmdHms(
                $("#cusBirOvertOrShade").val().split(".")[0],
                $("#cusBirOvertOrShade").val().split(".")[1],
                $("#cusBirOvertOrShade").val().split(".")[2],
                $("#cusBirOvertOrShade").val().split(".")[3],
                $("#cusBirOvertOrShade").val().split(".")[4],
                1
            );
        }
        lunar = solar.getLunar()
        baZi = lunar.getEightChar();
    } else {
        lunar = solar.getLunar()
        baZi = lunar.getEightChar();
        //阴历赋值
        $("#cusBirOvertOrShade").attr("placeholder",
            lunar.getYear() + "."
            + lunar.getMonth() + "."
            + lunar.getDay() + "."
            + lunar.getHour() + "."
            + lunar.getMinute()
        )

        //判断是否自定义阴历时间
        if ($("#cusBirOvertOrShade").val().split(".").length === 5) {
            lunar = Lunar.fromYmdHms(
                parseInt($("#cusBirOvertOrShade").val().split(".")[0]),
                parseInt($("#cusBirOvertOrShade").val().split(".")[1]),
                parseInt($("#cusBirOvertOrShade").val().split(".")[2]),
                parseInt($("#cusBirOvertOrShade").val().split(".")[3]),
                parseInt($("#cusBirOvertOrShade").val().split(".")[4])
            );
        }
    }


    //自定义天干地支
    $("#customizePatientCharacter").html(
        lunar.getYearInGanZhi() + nbsp
        + lunar.getMonthInGanZhi() + nbsp
        + lunar.getDayInGanZhi() + nbsp
        + lunar.getTimeInGanZhi() + nbsp
    );


    //患者八字字符切割
    userTime = Lunar.fromYmdHms(
        parseInt($("#birOvert").val().split(".")[0]),
        parseInt($("#birOvert").val().split(".")[1]),
        parseInt($("#birOvert").val().split(".")[2]),
        parseInt($("#birOvert").val().split(".")[3]),
        parseInt($("#birOvert").val().split(".")[4])
    );

    //生辰天干地支
    $("#tianGanDiZhi").html(
        userTime.getYearInGanZhi() + nbsp
        + userTime.getMonthInGanZhi() + nbsp
        + userTime.getDayInGanZhi() + nbsp
        + userTime.getTimeInGanZhi() + nbsp
    );
}