let div
div = document.createElement('div')
div.id='vue_chrome'
document.body.appendChild(div);
// 通过Chrome插件的API加载字体文件
(function insertElementIcons() {
    let elementIcons = document.createElement('style')
    elementIcons.type = 'text/css';
    elementIcons.textContent = `
        @font-face {
            font-family: "element-icons";
            src: url('${ window.chrome.extension.getURL("fonts/element-icons.woff")}') format('woff'),
            url('${ window.chrome.extension.getURL("fonts/element-icons.ttf ")}') format('truetype'); /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        }
    `
    document.head.appendChild(elementIcons);
})();
// console.log('===================================')
// MessageBox.alert('这是一段内容', '标题名称', {
//     confirmButtonText: '确定',
//     callback: action => {
//         Message({
//             type: 'info',
//             message: `action: ${ action }`
//         });
//     }
// })
import Vue from "vue";
import AppComponent from "./App/app.vue";

import {
    Card,
    Button,
    Image
} from 'element-ui';

Vue.use(Card);
Vue.use(Button);
Vue.use(Image);
new Vue({
    el: div,
    render: createElement => createElement(AppComponent)
});