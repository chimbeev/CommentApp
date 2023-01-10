//Объект для ввода никнейма
export class InputNickName {
    nickName: any;
    constructor() {
        const areaInputNickName = document.getElementById('inputNickName') as HTMLInputElement | null;
        if (areaInputNickName != null) { //Если есть поле ввода никнейма, то
            areaInputNickName.addEventListener('blur', function (event) { //Ждем событие ввода
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
    }
}