/*скрипт должен выполнять следующее
    При начале ввода в поле ввода становиться активной кнопка "Отправить"
    При начале ввода отображается счетчик введенных символов
    При начале ввода исчезает placeholder
    При превышении лимита символов система должна запрещать пользователю добавлять комментарий (сообщение об ошибке
    и кнопка "Отправить" не активна)
    При нажатии кнопки "Отправить" комментарий перемещается в блок divCommentOutput
     */
import {InputNickName} from "./inputNickName";
import {CommentObj} from "./commentObj";

const listOfComments = new Array(); // массив объектов-комментариев
const rt = new InputNickName();
const areaInputNickName = document.getElementById('inputNickName') as HTMLInputElement | null;
const divAvatarInput = document.getElementById('divAvatarInput') as HTMLInputElement | null;
const areaButton = document.getElementById('divButton') as HTMLElement;

areaButton.addEventListener('click', function (event) {
    if ((areaInputNickName) && (divAvatarInput)) { let comObj  = new CommentObj(areaInputNickName.value, divAvatarInput.src);
        listOfComments.push(comObj); //записать в конец массива объект
        localStorage.setItem("listOfComments", JSON.stringify(listOfComments)); //сохранили массив в localStorage
//                  const jsonString = JSON.stringify(comObj); //чтобы сохранить объект, надо преобразовать в json string
        comObj.render(); //выводим комментарий в блоке вывода комментариев
    }
});

document.onload = function () {
    // прочитаем с localStorage все комментарии и покажем на странице
    let storedNames = JSON.parse(localStorage.getItem("listOfComments") ); }
}



