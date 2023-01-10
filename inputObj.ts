/* объект использующийся для ввода комментария

 */
import {get} from "https";

export class InputObj {

    constructor() {
        const areaNickName = document.getElementById('nickName') as HTMLInputElement | null;
        if (areaNickName != null) { //Если есть поле ввода никнейма, то
            areaNickName?.addEventListener('blur', function (event) { //Ждем событие ввода
                let target = event.target as HTMLInputElement;
                let resultOfSearch = localStorage.getItem(target.value);
                const divAvatar = document.querySelector('.divAvatar') as HTMLInputElement | null;
                if (resultOfSearch) console.log("нашел в локалсторадж", JSON.parse(resultOfSearch));
                else
                if (divAvatar) divAvatar.style.backgroundImage = "URL('https://picsum.photos/85/128')";
                let currentLength = target.value.length; //считываем длину введенной строки
                const area = document.getElementById('comment') as HTMLInputElement | null;
                if (currentLength > 1) { //Если длина строки больше 1, то ждем ввода комментария
                  area?.removeAttribute('disabled'); //открываем для ввода комментария блок ввода
                    if (area != null) { //Ожидаем ввода комментария
                        area?.addEventListener('input', function (event) {
                            target = event.target as HTMLInputElement;
                            currentLength = target.value.length;
                            let button: HTMLElement | null = document.querySelector('.divButton');
                            if (button) {
                                if (currentLength > 1) { //если введено больше одного символа, то разблокируем кнопку отправить
                                    button.style.backgroundColor = "#ABD873";
                                    button.style.borderRadius = "5px";
                                    button.removeAttribute('disabled');
                                    const maxLength = 1000;
                                    const divWarning: HTMLElement | null = document.querySelector(".divWarning");
                                    if (divWarning) {
                                        if (currentLength >= maxLength) { //Если символов больше 1000, то блокируем кнопку отправить
                                            divWarning.style.color = "red";
                                            divWarning.innerHTML = "Слишком длинное сообщение";
                                            button.setAttribute("disabled", "true")
                                            button.style.backgroundColor = "#A2A2A2";
                                        } else divWarning.innerHTML = "";
                                    }
                                    const divCounter: HTMLElement | null = document.querySelector(".divCounter");
                                        if (divCounter) {
                                            divCounter.style.marginLeft = "416px";
                                            divCounter.innerHTML = `${currentLength}/${maxLength}`; //Выводим счетчик символов
                                        }
                                } else {
                                    button.setAttribute("disabled", "true"); //иначе блокируем кнопку
                                    button.style.backgroundColor = "#A2A2A2"
                                    }
                            }
                        })
                    };
                } else area?.setAttribute('disabled', 'true'); //иначе блокируем область ввода
            })
        };
    }

    finder() { //производит поиск пользователя в localStorage

    }
}