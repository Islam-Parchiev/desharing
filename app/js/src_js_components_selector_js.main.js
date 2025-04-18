"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_selector_js"],{

/***/ "./src/js/components/selector.js":
/*!***************************************!*\
  !*** ./src/js/components/selector.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const selectorBtn = document.querySelector('.selector__btn');
const selector = document.querySelector('.successes__selector');
selectorBtn.addEventListener("click", () => {
  console.log('click');
  selector.classList.toggle('active');
});

/***/ })

}]);
//# sourceMappingURL=src_js_components_selector_js.main.js.map