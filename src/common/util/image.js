/**
 * 图片操作方法
 * 1.将图片保存到本地
 * 2.发送照片到服务器端
 */

export default {
	exportCanvasAsPNG(id, fileName) {
        let canvasElement = document.getElementById(id)
        let MIME_TYPE = "image/png"
        let imgURL = canvasElement.toDataURL(MIME_TYPE)
        let dlLink = document.createElement('a')

        dlLink.download = fileName
        dlLink.href = imgURL
        dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':')

        document.body.appendChild(dlLink)
        dlLink.click()
        document.body.removeChild(dlLink)
	}
}