/*Объект для ввода никнейма; Позволяет ввести свой никнейм. Затем производит поиск в локалсторадж по никнейму.
Если находит, то в поле avatar ставит найденное значение avatar. Если не находит, то скачивает новую картинку*/
export class InputNickName {
    constructor() {
        const areaInputNickName = document.getElementById('inputNickName');
        if (areaInputNickName != null) { //Если есть поле ввода никнейма, то
            areaInputNickName.addEventListener('blur', function (event) {
                let target = event.target;
                let resultOfSearch = localStorage.getItem(target.value); //ищем в локалсторадж по никнейму
                const divInputNickName = document.querySelector('.divInputNickName');
                const divAvatar = divInputNickName === null || divInputNickName === void 0 ? void 0 : divInputNickName.querySelector('.divAvatar');
                if (resultOfSearch) {
                    console.log("нашел в локалсторадж", JSON.parse(resultOfSearch)); //если находим в локалсторадж
                    let resObj = JSON.parse(resultOfSearch); // то результат поиска сохраняем в переменную-объект
                    if (divAvatar)
                        divAvatar.style.backgroundImage = resObj.avatar;
                }
                else //если не находим, то получаем новый аватар
                 if (divAvatar)
                    divAvatar.style.backgroundImage = "URL('https://picsum.photos/85/128')";
                const divLoginButton = document.getElementById('divLoginButton');
                if (divLoginButton) {
                    divLoginButton === null || divLoginButton === void 0 ? void 0 : divLoginButton.removeAttribute('disabled'); //открываем для нажатия кнопку Войти
                    divLoginButton.addEventListener('click', function (event) {
                        areaInputNickName.setAttribute('disabled', 'true'); //блокируем ввод никнейма
                        divLoginButton.value = 'Выйти';
                    });
                }
            });
        }
    }
}
