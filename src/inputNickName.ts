/*Объект для ввода никнейма; Позволяет ввести свой никнейм. Затем производит поиск в локалсторадж по никнейму.
Если находит, то в поле avatar ставит найденное значение avatar. Если не находит, то скачивает новую картинку*/

import InputObj from 'inputObj';

export default class InputNickName {
    nickName: string = "";
    avatar: string = "";

    constructor() {
        const divLoginButton = document.getElementById('divLoginButton') as HTMLInputElement | null;
        const cleanButton = document.getElementById('cleanStorageButton') as HTMLInputElement | null;
        const divAvatarInput = document.getElementById('divAvatarInput') as HTMLImageElement | null;
        const areaInputNickName = document.getElementById('inputNickName') as HTMLInputElement | null;
        if (areaInputNickName) this.nickName = areaInputNickName.value;
        if (divAvatarInput) this.avatar = divAvatarInput.src;

        function toDataURL(url: any, callback: any) { //производит загрузку картинки аватара, показ на странице
            let xhRequest = new XMLHttpRequest();
            xhRequest.onload = function () {
                let reader = new FileReader();
                reader.onloadend = function () {
                    if (divAvatarInput) divAvatarInput.src = URL.createObjectURL(xhRequest.response); //показываем аватар
                    settingsAfterLogin();//настройки после входа в комментарии
                    //вызываем объект для ввода комментария
                    if (divAvatarInput && areaInputNickName) {
                        const ft = new InputObj(areaInputNickName.value, divAvatarInput.src);
                        ft.render();
                    };
                    callback(reader.result); //передаем в функцию, конвертированную в строку, картинку для сохранения в localstorage
                }
                reader.readAsDataURL(xhRequest.response);
            };
            xhRequest.open('GET', url);
            xhRequest.responseType = 'blob';
            xhRequest.send();
        }

        function exitFromCommentBlock() { //выход из блока комментариев
            if (divAvatarInput) divAvatarInput.src = "";
            if (areaInputNickName) areaInputNickName.disabled = false;
            if (divLoginButton) divLoginButton.value = 'Войти';
            if (divAvatarInput) {
                const ft = new InputObj("", "");
                ft.render()};
        }

        function settingsAfterLogin() { //настройки после входа
            if (areaInputNickName) areaInputNickName.disabled = true;
            if (divLoginButton) divLoginButton.value = 'Выйти';
        }

        if (cleanButton) { //очистить localStorage
            cleanButton.addEventListener('click', function (event) {
                localStorage.clear();
                console.log("Очистка выполнена");
            })
        }

        if (areaInputNickName != null) { //Если есть поле ввода никнейма, то
            if (divLoginButton) { //Ожидаем нажатия кнопки
                divLoginButton.addEventListener('click', async function (event) {
                    if (divLoginButton.value == 'Выйти') exitFromCommentBlock() //выход из блока комментирования
                    else { //если нажата кнопка Войти
                        let resultOfSearch = localStorage.getItem(areaInputNickName.value) as string | null; //ищем в локалсторадж по никнейму
                        if (resultOfSearch) { //если находим
                            if (divAvatarInput) {
                              divAvatarInput.src = resultOfSearch };//выводим аватар
                              settingsAfterLogin();//настройки после входа в комментарии
                              //вызываем объект для ввода комментария
                              if (divAvatarInput) {
                                  const ft = new InputObj(areaInputNickName.value, divAvatarInput.src);
                                  ft.render();
                              };
                        } else { //если не находим, то указываем на новый аватар
                            if (divAvatarInput) {
                                // Делаем запрос за картинкой
                                toDataURL('https://picsum.photos/85/128', function (dataUrl:any) {
                                    //записываем аватар в localstorage
                                    localStorage.setItem(areaInputNickName.value, dataUrl);
                                })
                            }
                        }
}
                })
            }
        }
    }
}
