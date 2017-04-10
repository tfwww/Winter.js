var log = function() {
    console.log.apply(console, arguments)
}

var Page = function() {

}

var winterPage = function(options) {
    log('ab', options)
    new Page(options)
}

// 有多少页
Page.prototype.makePageBtns = function(pagesData) {
    log('pagesData', pagesData)
    for (let i = 0; i < data.length; i++) {
        insertTpl('.pager', btnTpl(pagesData[i]))
    }
}
// 监听点击按钮获取不同页面的数据
var bindClickEvent =function() {
    var pagerDivEle = document.querySelector('.pager')
    pagerDivEle.addEventListener('click', function(event) {
        log('click target', event.target)
    })
}

var btnContainer = function() {
    var bodyEle = document.querySelector('body')
    bodyEle.insertAdjacentHTML('beforeEnd', '<div class="pager"></div>')
}

var btnTpl = function(inx) {
    var t = `<button type="button" name="button">${inx}</button>`
    return t
}

var insertTpl = function(selStr, tpl) {
    var ele = document.querySelector(selStr)
    ele.insertAdjacentHTML('beforeEnd', tpl)
}

// var insertBtns = function(data) {
//     for (let i = 0; i < data.length; i++) {
//         insertTpl('.pager', btnTpl(data[i]))
//     }
// }
//
// var __main = function() {
//     btnContainer()
//     // insertBtns(data)
//     bindClickEvent()
// }
//
// __main()
