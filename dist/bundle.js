/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("\r\n\r\nconst apiUrl = 'http://localhost:3000/api/users';\r\n\r\nconst createUser = async (username, password) => {\r\n    try {\r\n        const response = await fetch(apiUrl, {\r\n            method: 'POST',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify({ username, password })\r\n        });\r\n\r\n        if (!response.ok) {\r\n            const errorMessage = await response.text();\r\n            throw new Error(errorMessage);\r\n        }\r\n\r\n        const data = await response.json();\r\n        console.log(data.message); // Komunikat z serwera\r\n    } catch (error) {\r\n        console.error('Błąd podczas tworzenia użytkownika:', error);\r\n    }\r\n};\r\n\r\n// Wywołanie funkcji createUser() po kliknięciu przycisku \"Zarejestruj\"\r\nconst registerButton = document.getElementById('registerButton');\r\nregisterButton.addEventListener('click', () => {\r\n    const username = document.getElementById('username').value;\r\n    const password = document.getElementById('password').value;\r\n    createUser(username, password);\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;