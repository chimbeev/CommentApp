export class CommentObj {
    constructor(nickName, avatar, timeOfComment, textOfComment, rating) {
        // Сущность появляется после нажатия кнопки Отправить. Производит отрисовку объекта.
        this.avatar = "";
        this.nickName = "";
        this.rating = 0;
        // Создаем объект с параметрами комментария.
        this.timeOfComment = timeOfComment; // сохраняем время ввода комментария.
        this.nickName = nickName;
        this.avatar = avatar;
        this.textOfComment = textOfComment;
        this.rating = rating;
    }
    render() {
        const divAvatar = document.createElement("img");
        let resultOfSearch = localStorage.getItem(this.nickName); //ищем в локалсторадж по никнейму
        divAvatar.crossOrigin = "anonymous";
        if (resultOfSearch)
            divAvatar.src = this.avatar; //если находим, то выводим аватар
        const divCommentInput = document.createElement("div");
        divCommentInput.className = "divCommentInput";
        divAvatar.className = "divAvatar";
        divCommentInput.appendChild(divAvatar);
        const divCommentInputCenter = document.createElement("div");
        divCommentInputCenter.className = "divCommentInputCenter";
        divCommentInput.appendChild(divCommentInputCenter);
        const divCommentInputTop = document.createElement("div");
        divCommentInputTop.className = "divCommentInputTop";
        divCommentInputCenter.appendChild(divCommentInputTop);
        const divNickName = document.createElement("div");
        divNickName.innerHTML = this.nickName;
        divNickName.className = "nickName";
        const divTimeOfComment = document.createElement("div");
        divTimeOfComment.innerHTML = this.timeOfComment.toLocaleString();
        divTimeOfComment.className = "divTimeOfComment";
        const divCounter = document.createElement("div");
        const divWarning = document.createElement("div");
        divCommentInputTop.appendChild(divNickName);
        divCommentInputTop.appendChild(divTimeOfComment);
        divCommentInputTop.appendChild(divCounter);
        divCommentInputTop.appendChild(divWarning);
        const divCommentInputBottom = document.createElement("div");
        divCommentInputBottom.className = "divCommentInputBottom";
        divCommentInputCenter.appendChild(divCommentInputBottom);
        const textComment = document.createElement("p");
        textComment.innerHTML = this.textOfComment;
        divCommentInputBottom.appendChild(textComment);
        const divOutputWrapper = document.querySelector(".divCommentOutputWrapper");
        divOutputWrapper === null || divOutputWrapper === void 0 ? void 0 : divOutputWrapper.appendChild(divCommentInput);
        return;
    }
}
