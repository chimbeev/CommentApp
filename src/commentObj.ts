export default class CommentObj { // Сущность, которая хранит свойства и методы комментария.
    // Сущность появляется после нажатия кнопки Отправить. Производит отрисовку объекта.
    avatar: string = "";
    nickName: string = "";
    timeOfComment: Date;
    textOfComment: string;
    rating: number = 0;

    constructor(nickName: string, avatar: string, timeOfComment: Date, textOfComment: string, rating: number ) {
        // Создаем объект с параметрами комментария.
        this.timeOfComment = timeOfComment; // сохраняем время ввода комментария.
        this.nickName = nickName;
        this.avatar = avatar;
        this.textOfComment = textOfComment;
        this.rating = rating;
    }

    render() {
        const divAvatar = document.createElement("img") as HTMLImageElement;
        let resultOfSearch = localStorage.getItem(this.nickName) as string | null; //ищем в локалсторадж по никнейму
        divAvatar.crossOrigin = "anonymous";
        if (resultOfSearch) divAvatar.src = this.avatar; //если находим, то выводим аватар
        const divCommentInput: HTMLElement = document.createElement("div");
        divCommentInput.className ="divCommentInput";
        divAvatar.className = "divAvatar";
        divCommentInput.appendChild(divAvatar);

        const divCommentInputCenter: HTMLElement = document.createElement("div");
        divCommentInputCenter.className ="divCommentInputCenter";
        divCommentInput.appendChild(divCommentInputCenter);
        const divCommentInputTop: HTMLElement = document.createElement("div");
        divCommentInputTop.className = "divCommentInputTop";
        divCommentInputCenter.appendChild(divCommentInputTop);

        const divNickName: HTMLElement = document.createElement("div");
        divNickName.innerHTML = this.nickName;
        divNickName.className = "nickName";
        const divTimeOfComment: HTMLElement = document.createElement("div");
        divTimeOfComment.innerHTML = this.timeOfComment.toLocaleString();
        divTimeOfComment.className = "divTimeOfComment";
        const divCounter: HTMLElement = document.createElement("div");
        const divWarning: HTMLElement = document.createElement("div");
        divCommentInputTop.appendChild(divNickName);
        divCommentInputTop.appendChild(divTimeOfComment);
        divCommentInputTop.appendChild(divCounter);
        divCommentInputTop.appendChild(divWarning);
        const divCommentInputBottom: HTMLElement = document.createElement("div");
        divCommentInputBottom.className = "divCommentInputBottom";
        divCommentInputCenter.appendChild(divCommentInputBottom);
        const textComment: HTMLElement | null = document.createElement("p");
        textComment.innerHTML = this.textOfComment;
        divCommentInputBottom.appendChild(textComment);
        const divOutputWrapper: HTMLElement | null = document.querySelector(".divCommentOutputWrapper");
        divOutputWrapper?.appendChild(divCommentInput);
        return
    }
}