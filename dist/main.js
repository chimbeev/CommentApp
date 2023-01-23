/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/commentObj.js":
/*!***************************!*\
  !*** ./src/commentObj.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommentObj\": () => (/* binding */ CommentObj)\n/* harmony export */ });\nclass CommentObj {\r\n    constructor(nickName, avatar, timeOfComment, textOfComment, rating) {\r\n        // Сущность появляется после нажатия кнопки Отправить. Производит отрисовку объекта.\r\n        this.avatar = \"\";\r\n        this.nickName = \"\";\r\n        this.rating = 0;\r\n        // Создаем объект с параметрами комментария.\r\n        this.timeOfComment = timeOfComment; // сохраняем время ввода комментария.\r\n        this.nickName = nickName;\r\n        this.avatar = avatar;\r\n        this.textOfComment = textOfComment;\r\n        this.rating = rating;\r\n    }\r\n    render() {\r\n        const divAvatar = document.createElement(\"img\");\r\n        let resultOfSearch = localStorage.getItem(this.nickName); //ищем в локалсторадж по никнейму\r\n        divAvatar.crossOrigin = \"anonymous\";\r\n        if (resultOfSearch)\r\n            divAvatar.src = this.avatar; //если находим, то выводим аватар\r\n        const divCommentInput = document.createElement(\"div\");\r\n        divCommentInput.className = \"divCommentInput\";\r\n        divAvatar.className = \"divAvatar\";\r\n        divCommentInput.appendChild(divAvatar);\r\n        const divCommentInputCenter = document.createElement(\"div\");\r\n        divCommentInputCenter.className = \"divCommentInputCenter\";\r\n        divCommentInput.appendChild(divCommentInputCenter);\r\n        const divCommentInputTop = document.createElement(\"div\");\r\n        divCommentInputTop.className = \"divCommentInputTop\";\r\n        divCommentInputCenter.appendChild(divCommentInputTop);\r\n        const divNickName = document.createElement(\"div\");\r\n        divNickName.innerHTML = this.nickName;\r\n        divNickName.className = \"nickName\";\r\n        const divTimeOfComment = document.createElement(\"div\");\r\n        divTimeOfComment.innerHTML = this.timeOfComment.toLocaleString();\r\n        divTimeOfComment.className = \"divTimeOfComment\";\r\n        const divCounter = document.createElement(\"div\");\r\n        const divWarning = document.createElement(\"div\");\r\n        divCommentInputTop.appendChild(divNickName);\r\n        divCommentInputTop.appendChild(divTimeOfComment);\r\n        divCommentInputTop.appendChild(divCounter);\r\n        divCommentInputTop.appendChild(divWarning);\r\n        const divCommentInputBottom = document.createElement(\"div\");\r\n        divCommentInputBottom.className = \"divCommentInputBottom\";\r\n        divCommentInputCenter.appendChild(divCommentInputBottom);\r\n        const textComment = document.createElement(\"p\");\r\n        textComment.innerHTML = this.textOfComment;\r\n        divCommentInputBottom.appendChild(textComment);\r\n        const divOutputWrapper = document.querySelector(\".divCommentOutputWrapper\");\r\n        divOutputWrapper === null || divOutputWrapper === void 0 ? void 0 : divOutputWrapper.appendChild(divCommentInput);\r\n        return;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://commentapp/./src/commentObj.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _inputNickName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputNickName */ \"./src/inputNickName.js\");\n/* harmony import */ var _commentObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentObj */ \"./src/commentObj.js\");\n/*скрипт должен выполнять следующее\r\n    При начале ввода в поле ввода становиться активной кнопка \"Отправить\"\r\n    При начале ввода отображается счетчик введенных символов\r\n    При начале ввода исчезает placeholder\r\n    При превышении лимита символов система должна запрещать пользователю добавлять комментарий (сообщение об ошибке\r\n    и кнопка \"Отправить\" не активна)\r\n    При нажатии кнопки \"Отправить\" комментарий перемещается в блок divCommentOutput\r\n     */\r\n\r\n\r\nconst listOfComments = new Array(); // массив объектов-комментариев\r\nconst rt = new _inputNickName__WEBPACK_IMPORTED_MODULE_0__.InputNickName();\r\nconst areaInputNickName = document.getElementById('inputNickName');\r\nconst divAvatarInput = document.getElementById('divAvatarInput');\r\nconst areaButton = document.getElementById('divButton');\r\nconst textOfCommentArea = document.getElementById(\"comment\");\r\n//При нажатии кнопки \"Отправить\" сохраняется новый комментарий\r\nareaButton.addEventListener('click', function (event) {\r\n    if ((areaInputNickName) && (divAvatarInput)) {\r\n        let textOfComment = textOfCommentArea.value;\r\n        let comObj = new _commentObj__WEBPACK_IMPORTED_MODULE_1__.CommentObj(areaInputNickName.value, divAvatarInput.src, new Date(), textOfComment, 0);\r\n        listOfComments.push(comObj); //записать в конец массива объект\r\n        const jsonString = JSON.stringify(listOfComments); //чтобы сохранить объект, надо преобразовать в json string\r\n        localStorage.setItem('listOfComments', jsonString); //сохранили массив комментариев в localStorage\r\n        comObj.render(); //выводим комментарий в блоке вывода комментариев\r\n    }\r\n});\r\n//При загрузке страницы\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    // прочитаем с localStorage все комментарии и покажем на странице\r\n    let strValue = localStorage.getItem(\"listOfComments\");\r\n    if (strValue) {\r\n        let storedComments = JSON.parse(strValue);\r\n        let elem;\r\n        for (let i = 0; i < storedComments.length; i++) {\r\n            elem = JSON.parse(JSON.stringify(storedComments[i]));\r\n            listOfComments.push(elem);\r\n        }\r\n    }\r\n    listOfComments.forEach(function (element) {\r\n        if ((areaInputNickName) && (divAvatarInput)) {\r\n            let resultOfSearch = localStorage.getItem(areaInputNickName.value); //ищем в локалсторадж по никнейму\r\n            if (resultOfSearch) { //если находим\r\n                if (divAvatarInput)\r\n                    element.avatar = resultOfSearch;\r\n            } //выводим аватар\r\n            let comObj = new _commentObj__WEBPACK_IMPORTED_MODULE_1__.CommentObj(element.nickName, element.avatar, element.timeOfComment.toLocaleString(), element.textOfComment, element.rating);\r\n            comObj.render(); //выводим комментарий в блоке вывода комментариев\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://commentapp/./src/index.js?");

/***/ }),

/***/ "./src/inputNickName.js":
/*!******************************!*\
  !*** ./src/inputNickName.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InputNickName\": () => (/* binding */ InputNickName)\n/* harmony export */ });\n/* harmony import */ var _inputObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputObj */ \"./src/inputObj.js\");\n/*Объект для ввода никнейма; Позволяет ввести свой никнейм. Затем производит поиск в локалсторадж по никнейму.\r\nЕсли находит, то в поле avatar ставит найденное значение avatar. Если не находит, то скачивает новую картинку*/\r\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nclass InputNickName {\r\n    constructor() {\r\n        this.nickName = \"\";\r\n        this.avatar = \"\";\r\n        const divLoginButton = document.getElementById('divLoginButton');\r\n        const cleanButton = document.getElementById('cleanStorageButton');\r\n        const divAvatarInput = document.getElementById('divAvatarInput');\r\n        const areaInputNickName = document.getElementById('inputNickName');\r\n        if (areaInputNickName)\r\n            this.nickName = areaInputNickName.value;\r\n        if (divAvatarInput)\r\n            this.avatar = divAvatarInput.src;\r\n        function toDataURL(url, callback) {\r\n            let xhRequest = new XMLHttpRequest();\r\n            xhRequest.onload = function () {\r\n                let reader = new FileReader();\r\n                reader.onloadend = function () {\r\n                    if (divAvatarInput)\r\n                        divAvatarInput.src = URL.createObjectURL(xhRequest.response); //показываем аватар\r\n                    settingsAfterLogin(); //настройки после входа в комментарии\r\n                    //вызываем объект для ввода комментария\r\n                    if (divAvatarInput && areaInputNickName) {\r\n                        const ft = new _inputObj__WEBPACK_IMPORTED_MODULE_0__.InputObj(areaInputNickName.value, divAvatarInput.src);\r\n                        ft.render();\r\n                    }\r\n                    ;\r\n                    callback(reader.result); //передаем в функцию, конвертированную в строку, картинку для сохранения в localstorage\r\n                };\r\n                reader.readAsDataURL(xhRequest.response);\r\n            };\r\n            xhRequest.open('GET', url);\r\n            xhRequest.responseType = 'blob';\r\n            xhRequest.send();\r\n        }\r\n        function exitFromCommentBlock() {\r\n            if (divAvatarInput)\r\n                divAvatarInput.src = \"\";\r\n            if (areaInputNickName)\r\n                areaInputNickName.disabled = false;\r\n            if (divLoginButton)\r\n                divLoginButton.value = 'Войти';\r\n            if (divAvatarInput) {\r\n                const ft = new _inputObj__WEBPACK_IMPORTED_MODULE_0__.InputObj(\"\", \"\");\r\n                ft.render();\r\n            }\r\n            ;\r\n        }\r\n        function settingsAfterLogin() {\r\n            if (areaInputNickName)\r\n                areaInputNickName.disabled = true;\r\n            if (divLoginButton)\r\n                divLoginButton.value = 'Выйти';\r\n        }\r\n        if (cleanButton) { //очистить localStorage\r\n            cleanButton.addEventListener('click', function (event) {\r\n                localStorage.clear();\r\n                console.log(\"Очистка выполнена\");\r\n            });\r\n        }\r\n        if (areaInputNickName != null) { //Если есть поле ввода никнейма, то\r\n            if (divLoginButton) { //Ожидаем нажатия кнопки\r\n                divLoginButton.addEventListener('click', function (event) {\r\n                    return __awaiter(this, void 0, void 0, function* () {\r\n                        if (divLoginButton.value == 'Выйти')\r\n                            exitFromCommentBlock(); //выход из блока комментирования\r\n                        else { //если нажата кнопка Войти\r\n                            let resultOfSearch = localStorage.getItem(areaInputNickName.value); //ищем в локалсторадж по никнейму\r\n                            if (resultOfSearch) { //если находим\r\n                                if (divAvatarInput) {\r\n                                    divAvatarInput.src = resultOfSearch;\r\n                                }\r\n                                ; //выводим аватар\r\n                                settingsAfterLogin(); //настройки после входа в комментарии\r\n                                //вызываем объект для ввода комментария\r\n                                if (divAvatarInput) {\r\n                                    const ft = new _inputObj__WEBPACK_IMPORTED_MODULE_0__.InputObj(areaInputNickName.value, divAvatarInput.src);\r\n                                    ft.render();\r\n                                }\r\n                                ;\r\n                            }\r\n                            else { //если не находим, то указываем на новый аватар\r\n                                if (divAvatarInput) {\r\n                                    // Делаем запрос за картинкой\r\n                                    toDataURL('https://picsum.photos/85/128', function (dataUrl) {\r\n                                        //записываем аватар в localstorage\r\n                                        localStorage.setItem(areaInputNickName.value, dataUrl);\r\n                                    });\r\n                                }\r\n                            }\r\n                        }\r\n                    });\r\n                });\r\n            }\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://commentapp/./src/inputNickName.js?");

/***/ }),

/***/ "./src/inputObj.js":
/*!*************************!*\
  !*** ./src/inputObj.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InputObj\": () => (/* binding */ InputObj)\n/* harmony export */ });\n// объект используется для ввода комментария\r\nclass InputObj {\r\n    constructor(nickName, avatar) {\r\n        this.nickName = nickName;\r\n        this.avatar = avatar;\r\n    }\r\n    render() {\r\n        const areaNickName = document.getElementById('divNickName');\r\n        const divAvatar = document.querySelector('.divAvatar');\r\n        const area = document.getElementById('comment');\r\n        const areaButton = document.getElementById('divButton');\r\n        // Обработка нажатия кнопки добавления комментария\r\n        if ((this.avatar == \"\") || (this.nickName == \"\")) { //если выход, то блокируем область ввода и чистим\r\n            if (area) {\r\n                area.value = \"\";\r\n                area.setAttribute('disabled', 'true');\r\n            }\r\n            ;\r\n            if (areaButton)\r\n                areaButton.setAttribute(\"disabled\", \"true\");\r\n            if (areaButton)\r\n                areaButton.style.backgroundColor = \"#A2A2A2\";\r\n            if (divAvatar)\r\n                divAvatar.src = \"\";\r\n            if (areaNickName)\r\n                areaNickName.innerHTML = \"\";\r\n            return;\r\n        } //при выходе из блока комментариев\r\n        if (divAvatar)\r\n            divAvatar.src = this.avatar; //передаем аватар\r\n        if (areaNickName)\r\n            areaNickName.innerHTML = this.nickName; //передаем никнейм\r\n        area === null || area === void 0 ? void 0 : area.removeAttribute('disabled'); //открываем для ввода комментария блок ввода\r\n        if (area != null) { //Ожидаем ввода комментария\r\n            area === null || area === void 0 ? void 0 : area.addEventListener('input', function (event) {\r\n                let target = event.target;\r\n                let currentLength = target.value.length;\r\n                if (areaButton) {\r\n                    if (currentLength > 1) { //если введено больше одного символа, то разблокируем кнопку отправить\r\n                        areaButton.style.backgroundColor = \"#ABD873\";\r\n                        areaButton.style.borderRadius = \"5px\";\r\n                        areaButton.removeAttribute('disabled');\r\n                        const maxLength = 1000;\r\n                        const divWarning = document.querySelector(\".divWarning\");\r\n                        if (divWarning) {\r\n                            if (currentLength >= maxLength) { //Если символов больше 1000, то блокируем кнопку отправить\r\n                                divWarning.style.color = \"red\";\r\n                                divWarning.innerHTML = \"Слишком длинное сообщение\";\r\n                                areaButton.setAttribute(\"disabled\", \"true\");\r\n                                areaButton.style.backgroundColor = \"#A2A2A2\";\r\n                            }\r\n                            else\r\n                                divWarning.innerHTML = \"\";\r\n                        }\r\n                        const divCounter = document.querySelector(\".divCounter\");\r\n                        if (divCounter) {\r\n                            divCounter.style.marginLeft = \"416px\";\r\n                            divCounter.innerHTML = `${currentLength}/${maxLength}`; //Выводим счетчик символов\r\n                        }\r\n                    }\r\n                    else {\r\n                        areaButton.setAttribute(\"disabled\", \"true\"); //иначе блокируем кнопку\r\n                        areaButton.style.backgroundColor = \"#A2A2A2\";\r\n                    }\r\n                }\r\n            });\r\n        }\r\n        ;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://commentapp/./src/inputObj.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;