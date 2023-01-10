//Объект для ввода никнейма
export class InputNickName {
    constructor() {
        const areaInputNickName = document.getElementById('inputNickName');
        if (areaInputNickName != null) { //Если есть поле ввода никнейма, то
            areaInputNickName.addEventListener('blur', function (event) {
                let target = event.target;
                let resultOfSearch = localStorage.getItem(target.value);
                const divAvatar = document.querySelector('.divAvatar');
                if (resultOfSearch)
                    console.log("нашел в локалсторадж", JSON.parse(resultOfSearch));
                else if (divAvatar)
                    divAvatar.style.backgroundImage = "URL('https://picsum.photos/85/128')";
                let currentLength = target.value.length; //считываем длину введенной строки
                const area = document.getElementById('comment');
                if (currentLength > 1) { //Если длина строки больше 1, то ждем ввода комментария
                    area === null || area === void 0 ? void 0 : area.removeAttribute('disabled'); //открываем для ввода комментария блок ввода
                    if (area != null) { //Ожидаем ввода комментария
                        area === null || area === void 0 ? void 0 : area.addEventListener('input', function (event) {
                        });
                    }
                }
            });
        }
    }
}
