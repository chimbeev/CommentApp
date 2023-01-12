/*Объект для ввода никнейма; Позволяет ввести свой никнейм. Затем производит поиск в локалсторадж по никнейму.
Если находит, то в поле avatar ставит найденное значение avatar. Если не находит, то скачивает новую картинку*/

export class InputNickName {

    constructor() {
        const areaInputNickName = document.getElementById('inputNickName') as HTMLInputElement | null;
        if (areaInputNickName != null) { //Если есть поле ввода никнейма, то
            const divLoginButton = document.getElementById('divLoginButton') as HTMLInputElement | null;
            const divInputNickName = document.querySelector('.divInputNickName') as HTMLInputElement | null;
            const divAvatar = divInputNickName?.querySelector('.divAvatar') as HTMLInputElement | null;
            if (divLoginButton) { divLoginButton.addEventListener('click', function (event) {

                let target = event.target as HTMLInputElement;
                if (divLoginButton.value == 'Выйти') { if (divAvatar) divAvatar.style.backgroundImage = "";
                    areaInputNickName.disabled = false;
                    target.value = 'Войти'; divLoginButton.value = 'Войти'}
                else {
                    let resultOfSearch = localStorage.getItem(areaInputNickName.value); //ищем в локалсторадж по никнейму
                    areaInputNickName.disabled = true;
                    //if (resultOfSearch) { console.log("нашел в локалсторадж", JSON.parse(resultOfSearch)); //если находим в локалсторадж
                    if (resultOfSearch) { console.log("нашел в локалсторадж", resultOfSearch); //если находим в локалсторадж
                        const reader = new FileReader();
                        reader.readAsDataURL(resultOfSearch)
                        let resObj = JSON.parse(resultOfSearch); // то результат поиска сохраняем в переменную-объект
                        if (divAvatar) divAvatar.style.backgroundImage = resObj.avatar }
                    else { //если не находим, то получаем новый аватар
                        if (divAvatar) { divAvatar.style.backgroundImage = "URL('https://picsum.photos/85/128')";
                            console.log("Не нашел в сторадже");
                            if (divInputNickName) localStorage.setItem(areaInputNickName?.value, divAvatar.style.backgroundImage); //записываем никнейм и аватар
                            divLoginButton.value = 'Выйти'
                        }
                        }

                    }



                //        if (divLoginButton.value = 'Выйти') { if (divAvatar) divAvatar.style.backgroundImage = "";
                            //areaInputNickName.setAttribute('disabled', 'false');
                  //          divLoginButton.value = 'Войти';}
                    //    else { //areaInputNickName.setAttribute('disabled', 'true'); //блокируем ввод никнейма
                      //      divLoginButton.value = 'Выйти';}

                    })
                }

        }
    }
}