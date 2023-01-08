/* объект использующийся для ввода комментария

 */
export class InputObj {
    constructor() {
        const areaNickName = document.getElementById('nickName');
        if (areaNickName != null) { //Если есть поле ввода никнейма, то
            areaNickName === null || areaNickName === void 0 ? void 0 : areaNickName.addEventListener('input', function (event) {
                let target = event.target;
                let currentLength = target.value.length; //считываем длину введенной строки
                const area = document.getElementById('comment');
                if (currentLength > 1) { //Если длина строки больше 1, то ждем ввода комментария
                    area === null || area === void 0 ? void 0 : area.removeAttribute('disabled'); //открываем для ввода комментария блок ввода
                    if (area != null) { //Ожидаем ввода комментария
                        area === null || area === void 0 ? void 0 : area.addEventListener('input', function (event) {
                            target = event.target;
                            currentLength = target.value.length;
                            let button = document.querySelector('.divButton');
                            if (button) {
                                if (currentLength > 1) { //если введено больше одного символа, то разблокируем кнопку отправить
                                    button.style.backgroundColor = "#ABD873";
                                    button.style.borderRadius = "5px";
                                    button.removeAttribute('disabled');
                                    const maxLength = 1000;
                                    const divWarning = document.querySelector(".divWarning");
                                    if (divWarning) {
                                        if (currentLength >= maxLength) { //Если символов больше 1000, то блокируем кнопку отправить
                                            divWarning.style.color = "red";
                                            divWarning.innerHTML = "Слишком длинное сообщение";
                                            button.setAttribute("disabled", "true");
                                            button.style.backgroundColor = "#A2A2A2";
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
                                    button.setAttribute("disabled", "true"); //иначе блокируем кнопку
                                    button.style.backgroundColor = "#A2A2A2";
                                }
                            }
                        });
                    }
                    ;
                }
                else
                    area === null || area === void 0 ? void 0 : area.setAttribute('disabled', 'true'); //иначе блокируем область ввода
            });
        }
        ;
    }
}
