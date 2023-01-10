export class CommentObj {
    constructor() {
        // Создаем объект с параметрами комментария.
        this.timeOfComment = new Date(); // сохраняем время ввода комментария.
        const elementAvatar = document.querySelector(".divAvatar");
        if (elementAvatar)
            this.avatar = elementAvatar.style.backgroundImage;
        this.nickName = document.getElementById("nickName").value;
        this.textOfComment = document.getElementById("comment").value;
    }
    render() {
        const divCommentInput = document.createElement("divCommentInput");
        divCommentInput.className = "divCommentInput";
        const divAvatar = document.createElement("divAvatar");
        divAvatar.className = "divAvatar";
        divAvatar.style.backgroundImage = this.avatar;
        divCommentInput.appendChild(divAvatar);
        const divCommentInputCenter = document.createElement("divCommentInputCenter");
        divCommentInputCenter.className = "divCommentInputCenter";
        divCommentInput.appendChild(divCommentInputCenter);
        const divCommentInputTop = document.createElement("divCommentInputTop");
        divCommentInputTop.className = "divCommentInputTop";
        divCommentInputCenter.appendChild(divCommentInputTop);
        const divNickName = document.createElement("divNickName");
        divNickName.innerHTML = this.nickName;
        divNickName.className = "nickName";
        const divTimeOfComment = document.createElement("divTimeOfComment");
        divTimeOfComment.innerHTML = this.timeOfComment.toLocaleString();
        divTimeOfComment.className = "divTimeOfComment";
        const divCounter = document.createElement("divCounter");
        const divWarning = document.createElement("divWarning");
        divCommentInputTop.appendChild(divNickName);
        divCommentInputTop.appendChild(divTimeOfComment);
        divCommentInputTop.appendChild(divCounter);
        divCommentInputTop.appendChild(divWarning);
        const divCommentInputBottom = document.createElement("divCommentInputBottom");
        divCommentInputBottom.className = "divCommentInputBottom";
        divCommentInputCenter.appendChild(divCommentInputBottom);
        const textComment = document.createElement("textComment");
        textComment.innerHTML = this.textOfComment;
        divCommentInputBottom.appendChild(textComment);
        const divOutputWrapper = document.querySelector(".divCommentOutputWrapper");
        divOutputWrapper === null || divOutputWrapper === void 0 ? void 0 : divOutputWrapper.appendChild(divCommentInput);
        return;
    }
}
