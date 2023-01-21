// объект используется для ввода комментария
export class InputObj {
    constructor(nickName, avatar) {
        this.nickName = nickName;
        this.avatar = avatar;
    }
    render() {
        const areaNickName = document.getElementById('divNickName');
        const divAvatar = document.querySelector('.divAvatar');
        const area = document.getElementById('comment');
        const areaButton = document.getElementById('divButton');
        // Обработка нажатия кнопки добавления комментария
        if ((this.avatar == "") || (this.nickName == "")) { //если выход, то блокируем область ввода и чистим
            if (area) {
                area.value = "";
                area.setAttribute('disabled', 'true');
            }
            ;
            if (areaButton)
                areaButton.setAttribute("disabled", "true");
            if (areaButton)
                areaButton.style.backgroundColor = "#A2A2A2";
            if (divAvatar)
                divAvatar.src = "";
            if (areaNickName)
                areaNickName.innerHTML = "";
            return;
        } //при выходе из блока комментариев
        if (divAvatar)
            divAvatar.src = this.avatar; //передаем аватар
        if (areaNickName)
            areaNickName.innerHTML = this.nickName; //передаем никнейм
        area === null || area === void 0 ? void 0 : area.removeAttribute('disabled'); //открываем для ввода комментария блок ввода
        if (area != null) { //Ожидаем ввода комментария
            area === null || area === void 0 ? void 0 : area.addEventListener('input', function (event) {
                let target = event.target;
                let currentLength = target.value.length;
                if (areaButton) {
                    if (currentLength > 1) { //если введено больше одного символа, то разблокируем кнопку отправить
                        areaButton.style.backgroundColor = "#ABD873";
                        areaButton.style.borderRadius = "5px";
                        areaButton.removeAttribute('disabled');
                        const maxLength = 1000;
                        const divWarning = document.querySelector(".divWarning");
                        if (divWarning) {
                            if (currentLength >= maxLength) { //Если символов больше 1000, то блокируем кнопку отправить
                                divWarning.style.color = "red";
                                divWarning.innerHTML = "Слишком длинное сообщение";
                                areaButton.setAttribute("disabled", "true");
                                areaButton.style.backgroundColor = "#A2A2A2";
                            }
                            else
                                divWarning.innerHTML = "";
                        }
                        const divCounter = document.querySelector(".divCounter");
                        if (divCounter) {
                            divCounter.style.marginLeft = "416px";
                            divCounter.innerHTML = `${currentLength}/${maxLength}`; //Выводим счетчик символов
                        }
                    }
                    else {
                        areaButton.setAttribute("disabled", "true"); //иначе блокируем кнопку
                        areaButton.style.backgroundColor = "#A2A2A2";
                    }
                }
            });
        }
        ;
    }
}
