"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_chart_js"],{

/***/ "./src/js/components/chart.js":
/*!************************************!*\
  !*** ./src/js/components/chart.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const chartParent = document.querySelector('.chart__lines');
const maxPoints = 200;
const testData = [{
  id: 1,
  points: 78,
  date: "24 сен"
}, {
  id: 2,
  points: 200,
  date: "25 сен"
}, {
  id: 3,
  points: 11,
  date: "26 сен"
}, {
  id: 4,
  points: 111,
  date: "27 сен"
}, {
  id: 5,
  points: 33,
  date: "28 сен"
}, {
  id: 6,
  points: 79,
  date: "29 сен"
}, {
  id: 7,
  points: 200,
  date: "25 сен"
}, {
  id: 8,
  points: 11,
  date: "26 сен"
}, {
  id: 9,
  points: 111,
  date: "27 сен"
}, {
  id: 10,
  points: 33,
  date: "28 сен"
}, {
  id: 11,
  points: 79,
  date: "29 сен"
}];
testData.forEach(dataValue => {
  const chartLine = document.createElement('div');
  chartLine.classList.add('chart__line');
  const chartCandle = document.createElement('div');
  chartCandle.classList.add('chart__line_candle');
  chartCandle.style.height = dataValue.points / maxPoints * 100 + '%';
  const chartTitle = document.createElement('span');
  chartTitle.classList.add('chart__line_title');
  const chartTitleText = document.createTextNode(dataValue.date);
  chartTitle.appendChild(chartTitleText);
  chartLine.appendChild(chartCandle);
  chartLine.appendChild(chartTitle);
  chartParent.appendChild(chartLine);
});

/***/ })

}]);
//# sourceMappingURL=src_js_components_chart_js.main.js.map