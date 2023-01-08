import {InputObj} from "./inputObj.js" ;
import {CommentObj} from "./commentObj";

/*скрипт должен выполнять следующее
При начале ввода в поле ввода становиться активной кнопка "Отправить"
При начале ввода отображается счетчик введенных символов
При начале ввода исчезает placeholder
При превышении лимита символов система должна запрещать пользователю добавлять комментарий (сообщение об ошибке
и кнопка "Отправить" не активна)
При нажатии кнопки "Отправить" комментарий перемещается в блок divCommentOutput
 */
const listOfComments = new Array(); // массив объектов-комментариев
const ft = new InputObj(); //отрисовка формы ввода комментария
const areaButton = document.getElementById('divButton') as HTMLElement; // Обработка нажатия кнопки
areaButton.addEventListener('click', function (event) {
    const comObj  = new CommentObj(); //выводим комментарий в блоке вывода комментариев
    const jsonString = JSON.stringify(comObj); //чтобы сохранить объект, надо преобразовать в json string
    localStorage.setItem(comObj.nickName, jsonString); //сохраняем комментарий в localStorage
    listOfComments.push(comObj); //записать в конец массива объект
    comObj.render();
})




