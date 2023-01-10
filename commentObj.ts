export class CommentObj { // Сущность, которая хранит свойства и методы комментария.
    // Сущность появляется после нажатия кнопки Отправить. Производит отрисовку объекта.
    avatar: any;
    nickName: any;
    timeOfComment: Date;
    textOfComment: string;

    constructor() {
        // Создаем объект с параметрами комментария.
        this.timeOfComment = new Date(); // сохраняем время ввода комментария.
        const elementAvatar = document.querySelector(".divAvatar") as HTMLElement | null;
        if (elementAvatar) this.avatar = elementAvatar.style.backgroundImage;
        this.nickName = (<HTMLInputElement>document.getElementById("nickName")).value;
        this.textOfComment = (<HTMLInputElement>document.getElementById("comment")).value;

    }

    render() {
        const divCommentInput: HTMLElement = document.createElement("divCommentInput");
        divCommentInput.className ="divCommentInput";
        const divAvatar: HTMLElement = document.createElement("divAvatar");
        divAvatar.className = "divAvatar";
        divAvatar.style.backgroundImage = this.avatar;
        divCommentInput.appendChild(divAvatar);

        const divCommentInputCenter: HTMLElement = document.createElement("divCommentInputCenter");
        divCommentInputCenter.className ="divCommentInputCenter";
        divCommentInput.appendChild(divCommentInputCenter);
        const divCommentInputTop: HTMLElement = document.createElement("divCommentInputTop");
        divCommentInputTop.className = "divCommentInputTop";
        divCommentInputCenter.appendChild(divCommentInputTop);

        const divNickName: HTMLElement = document.createElement("divNickName");
        divNickName.innerHTML = this.nickName;
        divNickName.className = "nickName";
        const divTimeOfComment: HTMLElement = document.createElement("divTimeOfComment");
        divTimeOfComment.innerHTML = this.timeOfComment.toLocaleString();
        divTimeOfComment.className = "divTimeOfComment";
        const divCounter: HTMLElement = document.createElement("divCounter");
        const divWarning: HTMLElement = document.createElement("divWarning");
        divCommentInputTop.appendChild(divNickName);
        divCommentInputTop.appendChild(divTimeOfComment);
        divCommentInputTop.appendChild(divCounter);
        divCommentInputTop.appendChild(divWarning);
        const divCommentInputBottom: HTMLElement = document.createElement("divCommentInputBottom");
        divCommentInputBottom.className = "divCommentInputBottom";
        divCommentInputCenter.appendChild(divCommentInputBottom);
        const textComment: HTMLElement | null = document.createElement("textComment");
        textComment.innerHTML = this.textOfComment;
        divCommentInputBottom.appendChild(textComment);
        const divOutputWrapper: HTMLElement | null = document.querySelector(".divCommentOutputWrapper");
        divOutputWrapper?.appendChild(divCommentInput);
        return

    }
}