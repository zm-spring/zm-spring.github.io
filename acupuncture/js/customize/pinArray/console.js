let consoleTagOne = false;


function consoleFun(tagName, tagCarrier) {
    appendTag(tagName, tagCarrier, consoleTagOne);
    consoleTagOne = true;

    $("#" + tagCarrier).html(
    );

}