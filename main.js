/*скрипт должен выполнять следующее
    При начале ввода в поле ввода становиться активной кнопка "Отправить"
    При начале ввода отображается счетчик введенных символов
    При начале ввода исчезает placeholder
    При превышении лимита символов система должна запрещать пользователю добавлять комментарий (сообщение об ошибке
    и кнопка "Отправить" не активна)
    При нажатии кнопки "Отправить" комментарий перемещается в блок divCommentOutput
     */
import { InputNickName } from "./inputNickName";
import { CommentObj } from "./commentObj";
const listOfComments = new Array(); // массив объектов-комментариев
const rt = new InputNickName();
const areaInputNickName = document.getElementById('inputNickName');
const divAvatarInput = document.getElementById('divAvatarInput');
const areaButton = document.getElementById('divButton');
//При нажатии кнопки "Отправить" сохраняется новый комментарий
areaButton.addEventListener('click', function (event) {
    if ((areaInputNickName) && (divAvatarInput)) {
        let comObj = new CommentObj(areaInputNickName.value, divAvatarInput.src);
        const jsonString = JSON.stringify(comObj); //чтобы сохранить объект, надо преобразовать в json string
        localStorage.setItem(comObj.timeOfComment.toLocaleString(), jsonString); //сохранили объект-комментарий в localStorage
        //listOfComments.push(comObj); //записать в конец массива объект
        //
        //
        //localStorage.setItem(reaInputNickName.value, divAvatarInput.src);
        comObj.render(); //выводим комментарий в блоке вывода комментариев
    }
});
//При загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    // прочитаем с localStorage все комментарии и покажем на странице
    let strValue = localStorage.getItem("listOfComments");
    console.log(strValue);
    //if (strValue) { let storedComments: string = JSON.parse(strValue); console.log(storedComments) } ;
    //console.log("data loaded");
    console.log("кол-во записей", localStorage.length);
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key)
            console.log(`${key}: ${localStorage.getItem(key)}`);
    }
});
