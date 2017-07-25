/**
 * 图片操作方法
 * 1.将图片保存到本地
 */

export default {
	exportCanvasAsPNG(id, fileName) {
    var canvasElement = document.getElementById(id)
    var MIME_TYPE = "image/png"
    var imgURL = canvasElement.toDataURL(MIME_TYPE)
    var dlLink = document.createElement('a')

    dlLink.download = fileName
    dlLink.href = imgURL
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':')

    document.body.appendChild(dlLink)
    dlLink.click()
    document.body.removeChild(dlLink)
	}
}