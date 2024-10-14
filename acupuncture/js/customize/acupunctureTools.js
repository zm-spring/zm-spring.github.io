/**
 * 附加标签
 * @param tagName
 * @param tagId
 */
function appendTag(tagName, tagId, tagOne) {
    if (tagOne) return;
    $(".card-container").append(
        "<div class='card'> "
        + "<div class='card-header'>" + tagName + "</div> <div class='card-content'> <div class='card-content-inner'> "
        + "<text id='" + tagId + "'></text> </div> </div> </div>"
    )
}

/**
 * 批量加密方法
 */
function bulkEncryption(miYao) {

    let time = xueJi

    for (let i = 0; i < time.length; i++) {
        console.log("'" + CryptoJS.AES.encrypt(time[i], miYao) + "',")
    }
}