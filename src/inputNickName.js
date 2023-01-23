/*Объект для ввода никнейма; Позволяет ввести свой никнейм. Затем производит поиск в локалсторадж по никнейму.
Если находит, то в поле avatar ставит найденное значение avatar. Если не находит, то скачивает новую картинку*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { InputObj } from "./inputObj";
export class InputNickName {
    constructor() {
        this.nickName = "";
        this.avatar = "";
        const divLoginButton = document.getElementById('divLoginButton');
        const cleanButton = document.getElementById('cleanStorageButton');
        const divAvatarInput = document.getElementById('divAvatarInput');
        const areaInputNickName = document.getElementById('inputNickName');
        if (areaInputNickName)
            this.nickName = areaInputNickName.value;
        if (divAvatarInput)
            this.avatar = divAvatarInput.src;
        function toDataURL(url, callback) {
            let xhRequest = new XMLHttpRequest();
            xhRequest.onload = function () {
                let reader = new FileReader();
                reader.onloadend = function () {
                    if (divAvatarInput)
                        divAvatarInput.src = URL.createObjectURL(xhRequest.response); //показываем аватар
                    settingsAfterLogin(); //настройки после входа в комментарии
                    //вызываем объект для ввода комментария
                    if (divAvatarInput && areaInputNickName) {
                        const ft = new InputObj(areaInputNickName.value, divAvatarInput.src);
                        ft.render();
                    }
                    ;
                    callback(reader.result); //передаем в функцию, конвертированную в строку, картинку для сохранения в localstorage
                };
                reader.readAsDataURL(xhRequest.response);
            };
            xhRequest.open('GET', url);
            xhRequest.responseType = 'blob';
            xhRequest.send();
        }
        function exitFromCommentBlock() {
            if (divAvatarInput)
                divAvatarInput.src = "";
            if (areaInputNickName)
                areaInputNickName.disabled = false;
            if (divLoginButton)
                divLoginButton.value = 'Войти';
            if (divAvatarInput) {
                const ft = new InputObj("", "");
                ft.render();
            }
            ;
        }
        function settingsAfterLogin() {
            if (areaInputNickName)
                areaInputNickName.disabled = true;
            if (divLoginButton)
                divLoginButton.value = 'Выйти';
        }
        if (cleanButton) { //очистить localStorage
            cleanButton.addEventListener('click', function (event) {
                localStorage.clear();
                console.log("Очистка выполнена");
            });
        }
        if (areaInputNickName != null) { //Если есть поле ввода никнейма, то
            if (divLoginButton) { //Ожидаем нажатия кнопки
                divLoginButton.addEventListener('click', function (event) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (divLoginButton.value == 'Выйти')
                            exitFromCommentBlock(); //выход из блока комментирования
                        else { //если нажата кнопка Войти
                            let resultOfSearch = localStorage.getItem(areaInputNickName.value); //ищем в локалсторадж по никнейму
                            if (resultOfSearch) { //если находим
                                if (divAvatarInput) {
                                    divAvatarInput.src = resultOfSearch;
                                }
                                ; //выводим аватар
                                settingsAfterLogin(); //настройки после входа в комментарии
                                //вызываем объект для ввода комментария
                                if (divAvatarInput) {
                                    const ft = new InputObj(areaInputNickName.value, divAvatarInput.src);
                                    ft.render();
                                }
                                ;
                            }
                            else { //если не находим, то указываем на новый аватар
                                if (divAvatarInput) {
                                    // Делаем запрос за картинкой
                                    toDataURL('https://picsum.photos/85/128', function (dataUrl) {
                                        //записываем аватар в localstorage
                                        localStorage.setItem(areaInputNickName.value, dataUrl);
                                    });
                                }
                            }
                        }
                    });
                });
            }
        }
    }
}
