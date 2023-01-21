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
const textOfCommentArea = document.getElementById("comment") as HTMLInputElement;

//При нажатии кнопки "Отправить" сохраняется новый комментарий
areaButton.addEventListener('click', function (event) {
    if ((areaInputNickName) && (divAvatarInput))
    {   let textOfComment = textOfCommentArea.value;
        let comObj  = new CommentObj(areaInputNickName.value, divAvatarInput.src, new Date(), textOfComment, 0);
        listOfComments.push(comObj); //записать в конец массива объект
        const jsonString = JSON.stringify(listOfComments); //чтобы сохранить объект, надо преобразовать в json string
        localStorage.setItem('listOfComments', jsonString); //сохранили массив комментариев в localStorage
        comObj.render(); //выводим комментарий в блоке вывода комментариев
    }
});

//При загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    console.log("hello");
    // прочитаем с localStorage все комментарии и покажем на странице
    let strValue = localStorage.getItem("listOfComments");
    if (strValue) { let storedComments = JSON.parse(strValue);
        let elem;
        for(let i=0; i<storedComments.length; i++) {
            elem = JSON.parse(JSON.stringify(storedComments[i]));
            listOfComments.push(elem);
        }
    }
    listOfComments.forEach( function (element) {
        if ((areaInputNickName) && (divAvatarInput)) {
            let resultOfSearch = localStorage.getItem(areaInputNickName.value) as string | null; //ищем в локалсторадж по никнейму
            if (resultOfSearch) { //если находим
                if (divAvatarInput) element.avatar = resultOfSearch; }//выводим аватар
            let comObj  = new CommentObj(element.nickName, element.avatar, element.timeOfComment, element.textOfComment, element.rating);
            comObj.render(); //выводим комментарий в блоке вывода комментариев
        }
    })
})

