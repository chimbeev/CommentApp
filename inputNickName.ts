/*Объект для ввода никнейма; Позволяет ввести свой никнейм. Затем производит поиск в локалсторадж по никнейму.
Если находит, то в поле avatar ставит найденное значение avatar. Если не находит, то скачивает новую картинку*/

import {InputObj} from "./inputObj";


export class InputNickName {
    nickName: string = "";
    avatar: string = "";

    constructor() {
        const divLoginButton = document.getElementById('divLoginButton') as HTMLInputElement | null;
        const cleanButton = document.getElementById('cleanStorageButton') as HTMLInputElement | null;
        const divAvatarInput = document.getElementById('divAvatarInput') as HTMLImageElement | null;
        const areaInputNickName = document.getElementById('inputNickName') as HTMLInputElement | null;
        if (areaInputNickName) this.nickName = areaInputNickName.value;
        if (divAvatarInput) this.avatar = divAvatarInput.src;

        function getBase64Image(img:any) {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx?.drawImage(img, 0, 0, canvas.width, canvas.height = img.height);
            const dataURL = canvas.toDataURL("image/jpeg");
            return dataURL;
        }

        function exitFromCommentBlock() { //выход из блока комментариев
            if (divAvatarInput) divAvatarInput.src = "";
            if (areaInputNickName) areaInputNickName.disabled = false;
            if (divLoginButton) divLoginButton.value = 'Войти';
            if (divAvatarInput) {const ft = new InputObj("", ""); ft.render()};
        }

        function settingsAfterLogin() { //настройки после входа
            if (areaInputNickName) areaInputNickName.disabled = true;
            if (divLoginButton) divLoginButton.value = 'Выйти';
        }

        if (cleanButton) { //очистить localStorage
            cleanButton.addEventListener('click', function (event){
                localStorage.clear();
                console.log("Очистка выполнена");
            })
        }

        let imgData: string;
        if (areaInputNickName != null) { //Если есть поле ввода никнейма, то
            if (divLoginButton) { //Ожидаем нажатия кнопки
                divLoginButton.addEventListener('click', async function (event) {
                    if (divLoginButton.value == 'Выйти') exitFromCommentBlock() //выход из блока комментирования
                    else {
                        let resultOfSearch = localStorage.getItem(areaInputNickName.value) as string | null; //ищем в локалсторадж по никнейму
                        if (resultOfSearch) { //если находим
                            if (divAvatarInput) {
                                divAvatarInput.src = resultOfSearch;
                            };//выводим аватар
                            console.log("нашли такого", resultOfSearch)
                        } else { //если не находим, то указываем на новый аватар
                            if (divAvatarInput) {
                                // Делаем запрос за данными
                                const response = await fetch(`https://picsum.photos/85/128`)
                                const responseBlob = await response.blob()
                                divAvatarInput.src = URL.createObjectURL(responseBlob);
                                imgData = divAvatarInput.src;
                                localStorage.setItem(areaInputNickName.value, imgData); //записываем никнейм и аватар
                                console.log(" Не нашли. загрузили новый аватар")
                            }
                        }
                        settingsAfterLogin();
                        //вызываем объект для ввода комментария
                        if (divAvatarInput) {
                            const ft = new InputObj(areaInputNickName.value, divAvatarInput.src);
                            ft.render();
                        }
                        ;
                    }
                })
            }
        }
    }
}
