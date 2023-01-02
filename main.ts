/*скрипт должен выполнять следующее
При начале ввода в поле ввода становиться активной кнопка "Отправить"
При начале ввода отображается счетчик введенных символов
При начале ввода исчезает плейсхолдер
При превышении лимита символов система должна запрещать пользователю добавлять комментарий (сообщение об ошибке
и кнопка "Отправить" не активна)
При нажатии кнопки "Отправить" комментарий перемещается в блок divCommentOutput
 */
const container: HTMLElement = document.querySelector(".formInput");

const area = document.getElementById('comment') as HTMLInputElement | null;
    if (area != null) {

        area?.addEventListener('input', function (event) {
            const target = event.target as HTMLInputElement;
            const currentLength = target.value.length;
            let button: HTMLElement = container.querySelector('.divButton');
            button.removeAttribute('disabled');
            const divCounter: HTMLElement = document.querySelector(".divCounter");
            const maxLength = 1000;
            const divWarning: HTMLElement = document.querySelector(".divWarning");
            if (currentLength >= maxLength) {
                divWarning.style.color = "red";
                button.setAttribute("disabled", "true")
                divWarning.innerHTML = "Слишком длинное сообщение";
            } else divWarning.innerHTML = "";
            divCounter.style.marginLeft = "500px";
            divCounter.innerHTML = `${currentLength}/${maxLength}`;
        })


};
