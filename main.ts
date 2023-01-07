/*скрипт должен выполнять следующее
При начале ввода в поле ввода становиться активной кнопка "Отправить"
При начале ввода отображается счетчик введенных символов
При начале ввода исчезает плейсхолдер
При превышении лимита символов система должна запрещать пользователю добавлять комментарий (сообщение об ошибке
и кнопка "Отправить" не активна)
При нажатии кнопки "Отправить" комментарий перемещается в блок divCommentOutput
 */
const areaNickName = document.getElementById('nickName') as HTMLInputElement | null;
if (areaNickName != null) { //Если есть поле ввода никнейма, то
    areaNickName?.addEventListener('input', function (event) { //Ждем событие ввода
        let target = event.target as HTMLInputElement;
        let currentLength = target.value.length; //считываем длину введенной строки
        const area = document.getElementById('comment') as HTMLInputElement | null;
        if (currentLength > 1) { //Если длина строки больше 1, то ждем ввода комментария
            const container: HTMLElement = document.querySelector(".formInput");
            area.removeAttribute('disabled'); //открываем для ввода комментария блок ввода
            if (area != null) { //Ожидаем ввода комментария
                area?.addEventListener('input', function (event) {
                target = event.target as HTMLInputElement;
                currentLength = target.value.length;
                let button: HTMLElement = container.querySelector('.divButton');
                if (currentLength > 1) { //если введено больше одного символа, то разблокируем кнопку отправить
                    button.removeAttribute('disabled');
                    button.style.backgroundColor = "#ABD873";
                    button.style.borderRadius = "5px";
                    const divCounter: HTMLElement = document.querySelector(".divCounter");
                    const maxLength = 1000;
                    const divWarning: HTMLElement = document.querySelector(".divWarning");
                    if (currentLength >= maxLength) { //Если символов больше 1000, то блокируем кнопку отправить
                        divWarning.style.color = "red";
                        button.setAttribute("disabled", "true")
                        button.style.backgroundColor = "#A2A2A2";
                        divWarning.innerHTML = "Слишком длинное сообщение";
                    } else divWarning.innerHTML = "";
                    divCounter.style.marginLeft = "416px";
                    divCounter.innerHTML = `${currentLength}/${maxLength}`; //Выводим счетчик символов
                } else { button.setAttribute("disabled", "true"); //иначе блокируем кнопку
                    button.style.backgroundColor = "#A2A2A2" }
                })
            };
        } else { area.setAttribute('disabled', 'true')}; //иначе блокируем область ввода
    })};

const areaButton = document.getElementById('divButton') as HTMLElement; // Обработка нажатия кнопки
areaButton.addEventListener('click', function (event) {
//  const areaList = document.getElementById('divCommentOutputWrapper') as HTMLElement;
const comObj  = new CommentObj();
comObj.render();
//areaList.appendChild(divCommentInput);
})

class CommentObj { // Сущность, которая хранит свойства и методы комментария.
    // Сущность появляется после нажатия кнопки Отправить. Производит отрисовку объекта.
    avatar: string;
    nickName: string;
    timeOfComment: Date;
    textOfComment: string;

    constructor() {
        // Создаем объект с параметрами комментария.
        this.timeOfComment = new Date(); // сохраняем время ввода комментария.
        const elementAvatar: HTMLElement = document.querySelector(".divAvatar");
        this.avatar = elementAvatar.getAttribute("background-image");
        this.nickName = (<HTMLElement>document.getElementById("divNickName")).textContent
        this.textOfComment = (<HTMLInputElement>document.getElementById("comment")).value
    }

    render() {
        const divCommentInput: HTMLElement = document.createElement("divCommentInput");
        divCommentInput.className ="divCommentInput";
        const divAvatar: HTMLElement = document.createElement("divAvatar");
        divAvatar.className = "divAvatar";
        divCommentInput.appendChild(divAvatar);

        const divCommentInputCenter: HTMLElement = document.createElement("divCommentInputCenter");
        divCommentInputCenter.className ="divCommentInputCenter";
        divCommentInput.appendChild(divCommentInputCenter);
        const divCommentInputTop: HTMLElement = document.createElement("divCommentInputTop");
        divCommentInputTop.className = "divCommentInputTop";
        divCommentInputCenter.appendChild(divCommentInputTop);

        const divNickName: HTMLElement = document.createElement("divNickName");
        divNickName.innerHTML = this.nickName;
        const divCounter: HTMLElement = document.createElement("divCounter");
        const divWarning: HTMLElement = document.createElement("divWarning");
        divCommentInputTop.appendChild(divNickName);
        divCommentInputTop.appendChild(divCounter);
        divCommentInputTop.appendChild(divWarning);
        const divCommentInputBottom: HTMLElement = document.createElement("divCommentInputBottom");
        divCommentInputBottom.className = "divCommentInputBottom";
        divCommentInputCenter.appendChild(divCommentInputBottom);
        const textComment: HTMLElement = document.createElement("textComment");
        textComment.innerHTML = this.textOfComment;
        divCommentInputBottom.appendChild(textComment);
        const divOutputWrapper: HTMLElement = document.querySelector(".divCommentOutputWrapper");
        divOutputWrapper.appendChild(divCommentInput);
        return
        /*
            <div class="divCommentInput">
                <div class="divAvatar"></div>
                <div class="divCommentInputCenter">
                    <div class="divCommentInputTop">
                        <div class="divNickName" id="divNickName">
                            <p style="display: inline">Максим Авдеенко</p>
                        </div>
                        <div class="divCounter">
                            Макс. 1000 символов
                        </div>
                        <div class="divWarning"></div>
                    </div>
                    <div class="divCommentInputBottom">
                        <form action="main.js" class="formInput" id="commentForm">
                            <textarea datatype="text" class="textComment" placeholder="Введите текст сообщения"
                            name="comment" id="comment" cols="40" rows="3" required form="commentForm"></textarea>
                            <input class="divButton" id="divButton" type="submit" value="Отправить" disabled>
                        </form>
                    </div>
                </div>
            </div>
        */
    }
}

//export class ListOfComments extends CommentObj{ // Сущность, которая хранит список комментариев.
//  ListOfComments: { id: number, avatar: string, nickName: string, textOfComment: string, timeOfComment: Date }[]

//}

//export default CommentObj;
