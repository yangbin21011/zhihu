function animate(obj, json,t,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            var leader = parseInt(getStyle(obj, k)) || 0;
            var target = json[k];
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style[k] = leader + "px";
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {//如果有才调用
                fn();//动画执行完成后执行
            }
        }
    }, t);
}

function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}
// function animate(obj, attr, target,t) {
//     clearInterval(obj.timer);
//     obj.timer = setInterval(function () {
//         //var leader = obj.offsetLeft;//只能获取left只
//         var leader = parseInt(getStyle(obj, attr)) || 0;//获取任意样式属性
//         var step = (target - leader) / 10;
//         step = step > 0 ? Math.ceil(step) : Math.floor(step);
//         leader = leader + step;
//         //obj.style.left = leader + "px";//只能设置left
//         obj.style[attr] = leader + "px";//可以设置任意属性
//         if (leader === target) {
//             clearInterval(obj.timer);
//         }
//     }, t);
// }
//
// function getStyle(obj, attr) {
//     if (window.getComputedStyle) {
//         return window.getComputedStyle(obj, null)[attr];
//     } else {
//         return obj.currentStyle[attr];
//     }
// }