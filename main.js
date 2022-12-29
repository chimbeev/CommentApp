/*скрипт должен выполнять следующее
При начале ввода в поле ввода становиться активной кнопка "Отправить"
При начале ввода отображается счетчик введенных символов
При начале ввода исчезает плейсхолдер
При превышении лимита символов система должна запрещать пользователю добавлять комментарий (сообщение об ошибке
и кнопка "Отправить" не активна)
При нажатии кнопки "Отправить" комментарий перемещается в блок divCommentOutput
 */
var container = document.querySelector(".formInput");
var area = container.querySelector('.textComment');
if (area.addEventListener) {
    area.addEventListener('input', function () {
        // event handling code for sane browsers
        var button = container.querySelector('.divButton');
        button.removeAttribute('disabled');
    }, false);
}
