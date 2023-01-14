/*Объект для ввода никнейма; Позволяет ввести свой никнейм. Затем производит поиск в локалсторадж по никнейму.
Если находит, то в поле avatar ставит найденное значение avatar. Если не находит, то скачивает новую картинку*/
export class InputNickName {
    constructor() {
        const divLoginButton = document.getElementById('divLoginButton');
        const divInputNickName = document.querySelector('.divInputNickName');
        const divAvatarInput = document.getElementById('divAvatarInput');
        const divAvatarOutput = document.getElementById('divAvatarOutput');
        const areaInputNickName = document.getElementById('inputNickName');
        function getBase64Image(img) {
            let canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            let ctx = canvas.getContext("2d");
            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(img, 0, 0, canvas.width, canvas.height = img.height);
            let dataURL = canvas.toDataURL("image/jpeg");
            //return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
            return dataURL;
        }
        function exitFromCommentBlock() {
            if (divAvatarInput)
                divAvatarInput.src = "";
            if (areaInputNickName)
                areaInputNickName.disabled = false;
            if (divLoginButton)
                divLoginButton.value = 'Войти';
        }
        function settingsAfterLogin() {
            if (areaInputNickName)
                areaInputNickName.disabled = true;
            if (divLoginButton)
                divLoginButton.value = 'Выйти';
        }
        //localStorage.clear();
        if (areaInputNickName != null) { //Если есть поле ввода никнейма, то
            if (divLoginButton) {
                divLoginButton.addEventListener('click', function (event) {
                    let target = event.target;
                    if (divLoginButton.value == 'Выйти')
                        exitFromCommentBlock(); //выход из блока комментирования
                    else {
                        let resultOfSearch = localStorage.getItem(areaInputNickName.value); //ищем в локалсторадж по никнейму
                        if (resultOfSearch) { //если находим
                            settingsAfterLogin();
                            console.log("нашел в localstorage", resultOfSearch);
                            if (divAvatarInput) {
                                divAvatarInput.src = resultOfSearch;
                                console.log("divAvatar.src ", divAvatarInput.src);
                            }
                        }
                        else { //если не находим, то получаем новый аватар
                            if (divAvatarInput) {
                                divAvatarInput.src = "https://picsum.photos/85/128";
                                console.log("Не нашел в localstorage, сохраняю аватар");
                                let imgData;
                                if (divInputNickName) {
                                    divAvatarInput.addEventListener('load', function (event) {
                                        let divAvatarInput2 = document.getElementById('divAvatarInput');
                                        console.log("divAvatarInput", divAvatarInput2);
                                        imgData = getBase64Image(divAvatarInput2);
                                        console.log("imgData", imgData);
                                        localStorage.setItem(areaInputNickName === null || areaInputNickName === void 0 ? void 0 : areaInputNickName.value, imgData); //записываем никнейм и аватар
                                        console.log("areaInputNickName?.value", areaInputNickName === null || areaInputNickName === void 0 ? void 0 : areaInputNickName.value);
                                        divLoginButton.value = 'Выйти';
                                        resultOfSearch = localStorage.getItem(areaInputNickName.value);
                                        if ((resultOfSearch) && (divAvatarOutput)) {
                                            console.log("Найден аватар!", resultOfSearch);
                                            divAvatarOutput.src = resultOfSearch;
                                        }
                                    });
                                }
                            }
                        }
                    }
                });
            }
        }
    }
}
