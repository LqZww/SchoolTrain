//绘制刻度
var oul = document.querySelector('ul')
var str = ''
for (var i = 0; i < 60; i++) {
    str += '<li style="transform:rotate(' + i * 6 + 'deg)"></li>'
}
oul.innerHTML = str

//对接系统时间
var oS = document.querySelector('.second')
var oM = document.querySelector('.minu')
var oH = document.querySelector('.hour')

setInterval(function () {
    var myDate = new Date()
    var s = myDate.getSeconds()
    var m = myDate.getMinutes()
    var h = myDate.getHours()

    oS.style.transform = 'rotate(' + s * 6 + 'deg)'
    oM.style.transform = 'rotate(' + m * 6 + 'deg)'
    oH.style.transform = 'rotate(' + (h * 30 + m * 0.5) + 'deg)'
}, 1000)