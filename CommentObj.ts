export class CommentObj { // Сущность, которая хранит свойства и методы комментария.
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
        const divCommentInput:HTMLElement = document.createElement("divCommentInput");
        const divAvatar:HTMLElement = document.createElement("divAvatar");
        divCommentInput.appendChild(divAvatar);

        const divCommentInputCenter:HTMLElement = document.createElement("divCommentInputCenter");
        divCommentInput.appendChild(divCommentInputCenter);
        const divCommentInputTop:HTMLElement = document.createElement("divCommentInputTop");
        divCommentInputCenter.appendChild(divCommentInputTop);

        const divNickName:HTMLElement = document.createElement("divNickName");
        const textNickName:Text = document.createTextNode("Максим Авдеенко");
        const divCounter:HTMLElement = document.createElement("divCounter");
        const divWarning:HTMLElement = document.createElement("divWarning");
        divCommentInputTop.appendChild(divNickName);
        divCommentInputTop.appendChild(textNickName);
        divCommentInputTop.appendChild(divCounter);
        divCommentInputTop.appendChild(divWarning);
        const divCommentInputBottom:HTMLElement = document.createElement("divCommentInputBottom");
        divCommentInputCenter.appendChild(divCommentInputBottom);
        const textComment:HTMLElement = document.createElement("textComment");
        divCommentInputBottom.appendChild(textComment);
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

export class ListOfComments extends CommentObj{ // Сущность, которая хранит список комментариев.
    ListOfComments: { id: number, avatar: string, nickName: string, textOfComment: string, timeOfComment: Date }[]

}

export default CommentObj;
