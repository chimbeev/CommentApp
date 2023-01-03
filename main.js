"use strict";
/*скрипт должен выполнять следующее
При начале ввода в поле ввода становиться активной кнопка "Отправить"
При начале ввода отображается счетчик введенных символов
При начале ввода исчезает плейсхолдер
При превышении лимита символов система должна запрещать пользователю добавлять комментарий (сообщение об ошибке
и кнопка "Отправить" не активна)
При нажатии кнопки "Отправить" комментарий перемещается в блок divCommentOutput
 */
exports.__esModule = true;
//import {CommentObj} from "./CommentObj.js";
var CommentObj_1 = require("./CommentObj");
var container = document.querySelector(".formInput");
var area = document.getElementById('comment');
if (area != null) {
    area === null || area === void 0 ? void 0 : area.addEventListener('input', function (event) {
        var target = event.target;
        var currentLength = target.value.length;
        var button = container.querySelector('.divButton');
        button.removeAttribute('disabled');
        var divCounter = document.querySelector(".divCounter");
        var maxLength = 1000;
        var divWarning = document.querySelector(".divWarning");
        if (currentLength >= maxLength) {
            divWarning.style.color = "red";
            button.setAttribute("disabled", "true");
            divWarning.innerHTML = "Слишком длинное сообщение";
        }
        else
            divWarning.innerHTML = "";
        divCounter.style.marginLeft = "500px";
        divCounter.innerHTML = "".concat(currentLength, "/").concat(maxLength);
    });
}
;
var areaButton = document.getElementById('divButton'); // Обработка нажатия кнопки
areaButton.addEventListener('click', function (event) {
    var areaList = document.getElementById('divCommentOutputWrapper');
    var comObj = new CommentObj_1["default"]();
    comObj.render();
    //areaList.appendChild("comObj.")
});
