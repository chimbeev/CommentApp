/*скрипт должен выполнять следующее
При начале ввода в поле ввода становиться активной кнопка "Отправить"
При начале ввода отображается счетчик введенных символов
При начале ввода исчезает плейсхолдер
При превышении лимита символов система должна запрещать пользователю добавлять комментарий (сообщение об ошибке
и кнопка "Отправить" не активна)
При нажатии кнопки "Отправить" комментарий перемещается в блок divCommentOutput
 */
const container: HTMLElement = document.querySelector(".formInput");
let area: HTMLElement = container.querySelector('.textComment');
//if (area.addEventListener) {
    area.addEventListener('input', function(evt) {
        // event handling code for sane browsers
        let button: HTMLElement = container.querySelector('.divButton');
        button.removeAttribute('disabled');
        const length = evt.target. target.value.length
    }, false);
//}
