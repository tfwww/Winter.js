function winterpage(settings) {
    new Page(settings)
}

var Page = function(settings) {
    var that = this
    that.config = settings || {}
    var config = that.config
    that.render()
}

// 渲染分页
Page.prototype.render = function(load) {
    var that = this
    var conf = that.config
    var view = that.view()
}

// 分页视图
Page.prototype.view = function(){
    var that = this
    var conf = that.config
    var view = []

    conf.curr = conf.curr || 1
    conf.groups = 'groups' in conf ? conf.groups : 5
    conf.first = 'first' in conf ? conf.first : 1
    conf.last = 'last' in conf ? conf.last : '尾页'
    conf.prev = 'prev' in conf ? conf.prev : '上一页'
    conf.next = 'next' in conf ? conf.next : '下一页'

    // 页码组件容器
    for (var i = 1; i <= conf.pages; i++) {
        var tpl = pageTpl(i)
        insertTpl(conf.cont, tpl)
    }

}

//  插入 html 元素，container 为选择器，如 '#xxx', tpl 元素表情段
function insertTpl(container, tpl) {
    var ctnEle = document.querySelector(container)
    ctnEle.insertAdjacentHTML('beforeEnd', tpl)
}
// 辅助函数
function pageTpl(index) {
    return `<a href="javascript:;">${index}</a>`
}

function dotTpl() {
    return '<span>…</span>'
}

// 为了方便以后注释掉 log 语句
function log() {
    console.log.apply(console, arguments);
}
