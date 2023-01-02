class CommentObj { // Сущность, которая хранит свойства и методы комментария.
    // Сущность появляется после нажатия кнопки Отправить.
    avatar: string;
    nickName: string;
    timeOfComment: Date;
    textOfComment: string;
    constructor( avatar: string, nickName: string, timeOfComment: Date, textOfComment: string ) {
        // Создаем объект с параметрами комментария.
        this.timeOfComment = new Date(); // сохраняем время ввода комментария.

    }
}