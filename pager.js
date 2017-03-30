// 假设后端传的数据是这样的
var data = [1, 2, 3, 4, 5]

var log = function() {
    console.log.apply(console, arguments)
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

var insertBtns = function(data) {
    for (let i = 0; i < data.length; i++) {
        insertTpl('.pager', btnTpl(data[i]))
    }
}

var __main = function() {
    btnContainer()
    insertBtns(data)
}

__main()
