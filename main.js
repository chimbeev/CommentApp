/*скрипт должен выполнять следующее
При начале ввода в поле ввода становиться активной кнопка "Отправить"
При начале ввода отображается счетчик введенных символов
При начале ввода исчезает плейсхолдер
При превышении лимита символов система должна запрещать пользователю добавлять комментарий (сообщение об ошибке
и кнопка "Отправить" не активна)
При нажатии кнопки "Отправить" комментарий перемещается в блок divCommentOutput
 */
var container = document.querySelector(".formInput");
var area = document.getElementById('comment');
if (area != null) {
    area === null || area === void 0 ? void 0 : area.addEventListener('input', function (event) {
        var target = event.target;
        var currentLength = target.value.length;
        var button = container.querySelector('.divButton');
        button.removeAttribute('disabled');
        var divCounter = document.querySelector(".divCounter");
        var maxLength = 1000;
        var divWarning = document.querySelector(".divWarning");
        if (currentLength >= maxLength) {
            divWarning.style.color = "red";
            button.setAttribute("disabled", "true");
            divWarning.innerHTML = "Слишком длинное сообщение";
        }
        else
            divWarning.innerHTML = "";
        divCounter.style.marginLeft = "500px";
        divCounter.innerHTML = "".concat(currentLength, "/").concat(maxLength);
    });
}
;
var areaButton = document.getElementById('divButton'); // Обработка нажатия кнопки
areaButton.addEventListener('click', function (event) {
    //  const areaList = document.getElementById('divCommentOutputWrapper') as HTMLElement;
    var comObj = new CommentObj();
    comObj.render();
    //areaList.appendChild(divCommentInput);
});
var CommentObj = /** @class */ (function () {
    function CommentObj() {
        // Создаем объект с параметрами комментария.
        this.timeOfComment = new Date(); // сохраняем время ввода комментария.
        var elementAvatar = document.querySelector(".divAvatar");
        this.avatar = elementAvatar.getAttribute("background-image");
        this.nickName = document.getElementById("divNickName").textContent;
        this.textOfComment = document.getElementById("comment").value;
    }
    CommentObj.prototype.render = function () {
        var divCommentInput = document.createElement("divCommentInput");
        divCommentInput.className = "divCommentInput";
        var divAvatar = document.createElement("divAvatar");
        //divAvatar.style.backgroundImage = "url('https://picsum.photos/85/128')";
        divAvatar.className = "divAvatar";
        divCommentInput.appendChild(divAvatar);
        var divCommentInputCenter = document.createElement("divCommentInputCenter");
        divCommentInputCenter.className = "divCommentInputCenter";
        divCommentInput.appendChild(divCommentInputCenter);
        var divCommentInputTop = document.createElement("divCommentInputTop");
        divCommentInputTop.className = "divCommentInputTop";
        divCommentInputCenter.appendChild(divCommentInputTop);
        var divNickName = document.createElement("divNickName");
        divNickName.innerHTML = this.nickName;
        var divCounter = document.createElement("divCounter");
        var divWarning = document.createElement("divWarning");
        divCommentInputTop.appendChild(divNickName);
        divCommentInputTop.appendChild(divCounter);
        divCommentInputTop.appendChild(divWarning);
        var divCommentInputBottom = document.createElement("divCommentInputBottom");
        divCommentInputBottom.className = "divCommentInputBottom";
        divCommentInputCenter.appendChild(divCommentInputBottom);
        var textComment = document.createElement("textComment");
        textComment.innerHTML = this.textOfComment;
        divCommentInputBottom.appendChild(textComment);
        var divOutputWrapper = document.querySelector(".divCommentOutputWrapper");
        divOutputWrapper.appendChild(divCommentInput);
        return;
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
    };
    return CommentObj;
}());
//export class ListOfComments extends CommentObj{ // Сущность, которая хранит список комментариев.
//  ListOfComments: { id: number, avatar: string, nickName: string, textOfComment: string, timeOfComment: Date }[]
//}
//export default CommentObj;
