"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ListOfComments = exports.CommentObj = void 0;
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
        var divAvatar = document.createElement("divAvatar");
        divCommentInput.appendChild(divAvatar);
        var divCommentInputCenter = document.createElement("divCommentInputCenter");
        divCommentInput.appendChild(divCommentInputCenter);
        var divCommentInputTop = document.createElement("divCommentInputTop");
        divCommentInputCenter.appendChild(divCommentInputTop);
        var divNickName = document.createElement("divNickName");
        var textNickName = document.createTextNode("Максим Авдеенко");
        var divCounter = document.createElement("divCounter");
        var divWarning = document.createElement("divWarning");
        divCommentInputTop.appendChild(divNickName);
        divCommentInputTop.appendChild(textNickName);
        divCommentInputTop.appendChild(divCounter);
        divCommentInputTop.appendChild(divWarning);
        var divCommentInputBottom = document.createElement("divCommentInputBottom");
        divCommentInputCenter.appendChild(divCommentInputBottom);
        var textComment = document.createElement("textComment");
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
    };
    return CommentObj;
}());
exports.CommentObj = CommentObj;
var ListOfComments = /** @class */ (function (_super) {
    __extends(ListOfComments, _super);
    function ListOfComments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ListOfComments;
}(CommentObj));
exports.ListOfComments = ListOfComments;
exports["default"] = CommentObj;
