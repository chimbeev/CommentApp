/*скрипт должен выполнять следующее
При начале ввода в поле ввода становиться активной кнопка "Отправить"
При начале ввода отображается счетчик введенных символов
При начале ввода исчезает плейсхолдер
При превышении лимита символов система должна запрещать пользователю добавлять комментарий (сообщение об ошибке
и кнопка "Отправить" не активна)
При нажатии кнопки "Отправить" комментарий перемещается в блок divCommentOutput
 */
var container = document.querySelector(".formInput");
//const area: HTMLInputElement | null = document.getElementById("comment");
var area = document.getElementById('comment');
if (area != null) {
    console.log("step1");
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
