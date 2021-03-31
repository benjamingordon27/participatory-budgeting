webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/setMap.js":
/*!**********************************!*\
  !*** ./store/reducers/setMap.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actionTypes */ \"./store/actions/actionTypes.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility */ \"./store/utility.js\");\n/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ \"./components/UI/Spinner/Spinner.js\");\n/* harmony import */ var _util_translateCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/translateCategory */ \"./util/translateCategory.js\");\n\n\n\nvar _jsxFileName = \"/Users/benjamingordon/Documents/civic-alley-visualization/data-vis/store/reducers/setMap.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar DEFAULT_CENTER = {\n  lat: 40.635,\n  lng: -73.94\n};\nvar initialState = {\n  map: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 10\n  }, undefined),\n  mapProps: {},\n  zoom: 11,\n  markers: [],\n  center: DEFAULT_CENTER,\n  showDistricts: false,\n  clickedItem: null,\n  url: '/',\n  selectedBudgetItems: null,\n  selectedDistricts: null,\n  action: {},\n  loading: false // item: null, \n\n};\n\nvar setMap = function setMap(state, districts, selectedDistricts, councilMembers, selectedBudgetItems) {\n  return {\n    zoom: state.zoom,\n    districts: districts,\n    selectedDistricts: selectedDistricts,\n    councilMembers: councilMembers,\n    selectedBudgetItems: selectedBudgetItems\n  };\n};\n\nvar zoomMarker = function zoomMarker(state, action) {\n  return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n    zoom: 14,\n    center: action.center,\n    clickedItem: action.item\n  });\n};\n\nvar filterBudget = function filterBudget(participatoryBudget, councilMembers, category, year, district, minCost, maxCost, minVotes, maxVotes, councilMember) {\n  var newBudget = [];\n  var newCouncil = [];\n  Object.keys(participatoryBudget).map(function (key) {\n    newBudget.push(participatoryBudget[key]);\n  });\n  Object.keys(councilMembers).map(function (key) {\n    newCouncil.push(councilMembers[key]);\n  });\n  if (year !== '') newBudget = newBudget.filter(function (item) {\n    return Number(item.vote_year) === Number(year);\n  });\n  if (category !== '') newBudget = newBudget.filter(function (item) {\n    return Object(_util_translateCategory__WEBPACK_IMPORTED_MODULE_5__[\"translateCategoryText\"])(item.category) === category;\n  });\n  if (district !== '') newBudget = newBudget.filter(function (item) {\n    return item.council_district === district;\n  });\n  if (minCost !== '') newBudget = newBudget.filter(function (item) {\n    return Number(item.cost) >= Number(minCost);\n  });\n  if (maxCost !== '') newBudget = newBudget.filter(function (item) {\n    return Number(item.cost) <= Number(maxCost);\n  });\n  if (minVotes !== '') newBudget = newBudget.filter(function (item) {\n    return Number(item.votes) >= Number(minVotes);\n  });\n  if (maxVotes !== '') newBudget = newBudget.filter(function (item) {\n    return Number(item.votes) <= Number(maxVotes);\n  });\n\n  if (councilMember !== '') {\n    var councilMemberNew = councilMember.split(': ')[1];\n    var currDistrict = newCouncil.filter(function (member) {\n      return member.name === councilMemberNew;\n    })[[0]].district;\n    newBudget = newBudget.filter(function (item) {\n      return item.council_district === currDistrict;\n    });\n  }\n\n  return newBudget;\n};\n\nvar findItem = function findItem(budget, lat, lng, title) {\n  console.log('findItem', budget, lat, lng, title); //var clickedItem = budget.filter(item => Number(item.latitude) === Number(lat) && Number(item.longitude) === Number(lng) && item.title === title)[0];\n\n  var clickedItem = budget.filter(function (item) {\n    return item.title === title;\n  });\n  console.log('clickedItem', clickedItem);\n  return {\n    clickedItem: clickedItem,\n    center: {\n      latitude: clickedItem.latitude,\n      longitude: clickedItem.longitude\n    },\n    zoom: 14\n  };\n};\n\nvar budgetFilterFromURL = function budgetFilterFromURL(budget, query) {\n  var newBudget = [];\n  Object.keys(budget).map(function (key) {\n    newBudget.push(budget[key]);\n  });\n  if (query.year) newBudget = newBudget.filter(function (item) {\n    return Number(item.vote_year) === Number(query.year);\n  });\n  if (query.category) newBudget = newBudget.filter(function (item) {\n    return Object(_util_translateCategory__WEBPACK_IMPORTED_MODULE_5__[\"translateCategoryText\"])(item.category) === query.category;\n  });\n  if (query.district) newBudget = newBudget.filter(function (item) {\n    return item.council_district === query.district;\n  });\n  if (query.minCost) newBudget = newBudget.filter(function (item) {\n    return Number(item.cost) >= Number(query.minCost);\n  });\n  if (query.maxCost) newBudget = newBudget.filter(function (item) {\n    return Number(item.cost) <= Number(query.maxCost);\n  });\n  if (query.minVotes) newBudget = newBudget.filter(function (item) {\n    return Number(item.votes) >= Number(query.minVotes);\n  });\n  if (query.maxVotes) newBudget = newBudget.filter(function (item) {\n    return Number(item.votes) <= Number(query.maxVotes);\n  });\n  return {\n    selectedBudgetItems: newBudget\n  };\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"SET_MAP\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n        mapProps: setMap(state, action.districts, action.selectedDistricts, action.councilMembers, action.selectedBudgetItems)\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"UPDATE_MAP\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n        mapProps: setMap(state, action.districts, action.selectedDistricts, action.councilMembers, action.selectedBudgetItems)\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"RESET_MAP\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n        map: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 70\n        }, _this),\n        clickedItem: null\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"ZOOM_MARKER\"]:\n      return zoomMarker(state, action);\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"RESET_CLICKED_ITEM\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n        clickedItem: null,\n        zoom: 11,\n        center: DEFAULT_CENTER\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"ZOOM_IN\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n        zoom: state.zoom + 1\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"ZOOM_OUT\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n        zoom: state.zoom - 1\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"CENTER\"]:\n      console.log('centering!!!');\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n        zoom: 11,\n        center: DEFAULT_CENTER,\n        clickedItem: null\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"SHOW_DISTRICTS\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n        map: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 75\n        }, _this)\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"BUDGET_FILTER\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, {\n        selectedBudgetItems: filterBudget(action.budget, action.councilMembers, action.category, action.year, action.district, action.minCost, action.maxCost, action.minVotes, action.maxVotes, action.councilMember),\n        action: _objectSpread({}, action),\n        loading: false\n      });\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"BUDGET_FILTER_FROM_URL\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, budgetFilterFromURL(action.budget, action.query));\n\n    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"FIND_ITEM\"]:\n      return Object(_utility__WEBPACK_IMPORTED_MODULE_3__[\"updateObject\"])(state, findItem(action.budget, action.lat, action.lng, action.title));\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvc2V0TWFwLmpzPzVkNTEiXSwibmFtZXMiOlsiREVGQVVMVF9DRU5URVIiLCJsYXQiLCJsbmciLCJpbml0aWFsU3RhdGUiLCJtYXAiLCJtYXBQcm9wcyIsInpvb20iLCJtYXJrZXJzIiwiY2VudGVyIiwic2hvd0Rpc3RyaWN0cyIsImNsaWNrZWRJdGVtIiwidXJsIiwic2VsZWN0ZWRCdWRnZXRJdGVtcyIsInNlbGVjdGVkRGlzdHJpY3RzIiwiYWN0aW9uIiwibG9hZGluZyIsInNldE1hcCIsInN0YXRlIiwiZGlzdHJpY3RzIiwiY291bmNpbE1lbWJlcnMiLCJ6b29tTWFya2VyIiwidXBkYXRlT2JqZWN0IiwiaXRlbSIsImZpbHRlckJ1ZGdldCIsInBhcnRpY2lwYXRvcnlCdWRnZXQiLCJjYXRlZ29yeSIsInllYXIiLCJkaXN0cmljdCIsIm1pbkNvc3QiLCJtYXhDb3N0IiwibWluVm90ZXMiLCJtYXhWb3RlcyIsImNvdW5jaWxNZW1iZXIiLCJuZXdCdWRnZXQiLCJuZXdDb3VuY2lsIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInB1c2giLCJmaWx0ZXIiLCJOdW1iZXIiLCJ2b3RlX3llYXIiLCJ0cmFuc2xhdGVDYXRlZ29yeVRleHQiLCJjb3VuY2lsX2Rpc3RyaWN0IiwiY29zdCIsInZvdGVzIiwiY291bmNpbE1lbWJlck5ldyIsInNwbGl0IiwiY3VyckRpc3RyaWN0IiwibWVtYmVyIiwibmFtZSIsImZpbmRJdGVtIiwiYnVkZ2V0IiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJidWRnZXRGaWx0ZXJGcm9tVVJMIiwicXVlcnkiLCJyZWR1Y2VyIiwidHlwZSIsImFjdGlvblR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBRztBQUFFQyxLQUFHLEVBQUUsTUFBUDtBQUFlQyxL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QUQsRUFBUTtBQUFDTCwyQkFBbUIsRUFBRVcsWUFBWSxDQUFDVCxNQUFNLENBQUNzQyxNQUFSLEVBQWdCdEMsTUFBTSxDQUFDSyxjQUF2QixFQUF1Q0wsTUFBTSxDQUFDVyxRQUE5QyxFQUF3RFgsTUFBTSxDQUFDWSxJQUEvRCxFQUFxRVosTUFBTSxDQUFDYSxRQUE1RSxFQUFzRmIsTUFBTSxDQUFDYyxPQUE3RixFQUFzR2QsTUFBTSxDQUFDZSxPQUE3RyxFQUFzSGYsTUFBTSxDQUFDZ0IsUUFBN0gsRUFBdUloQixNQUFNLENBQUNpQixRQUE5SSxFQUF3SmpCLE1BQU0sQ0FBQ2tCLGFBQS9KLENBQWxDO0FBQWlObEIsY0FBTSxvQkFBTUEsTUFBTixDQUF2TjtBQUFzT0MsZUFBTyxFQUFFO0FBQS9PLE9BQVIsQ0FBbkI7O0FBQ2hDLFNBQUsrQywyRUFBTDtBQUF5QyxhQUFPekMsNkRBQVksQ0FBQ0osS0FBRCxFQUFReUMsbUJBQW1CLENBQUM1QyxNQUFNLENBQUNzQyxNQUFSLEVBQWdCdEMsTUFBTSxDQUFDNkMsS0FBdkIsQ0FBM0IsQ0FBbkI7O0FBQ3pDLFNBQUtHLDhEQUFMO0FBQTRCLGFBQU96Qyw2REFBWSxDQUFDSixLQUFELEVBQVFrQyxRQUFRLENBQUNyQyxNQUFNLENBQUNzQyxNQUFSLEVBQWdCdEMsTUFBTSxDQUFDYixHQUF2QixFQUE0QmEsTUFBTSxDQUFDWixHQUFuQyxFQUF3Q1ksTUFBTSxDQUFDdUMsS0FBL0MsQ0FBaEIsQ0FBbkI7O0FBRTVCO0FBQ0ksYUFBT3BDLEtBQVA7QUFoQlI7QUFrQkgsQ0FuQkQ7O0FBcUJlMkMsc0VBQWYiLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9zZXRNYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcbmltcG9ydCB7dXBkYXRlT2JqZWN0fSBmcm9tICcuLi91dGlsaXR5JztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyJztcbmltcG9ydCB7dHJhbnNsYXRlQ2F0ZWdvcnlUZXh0fSBmcm9tICcuLi8uLi91dGlsL3RyYW5zbGF0ZUNhdGVnb3J5JztcblxuY29uc3QgREVGQVVMVF9DRU5URVIgPSB7IGxhdDogNDAuNjM1LCBsbmc6IC03My45NCB9O1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgbWFwOiA8U3Bpbm5lciAvPixcbiAgICBtYXBQcm9wczoge30sXG4gICAgem9vbTogMTEsXG4gICAgbWFya2VyczogW10sXG4gICAgY2VudGVyOiBERUZBVUxUX0NFTlRFUixcbiAgICBzaG93RGlzdHJpY3RzOiBmYWxzZSxcbiAgICBjbGlja2VkSXRlbTogbnVsbCxcbiAgICB1cmw6ICcvJyxcblxuICAgIHNlbGVjdGVkQnVkZ2V0SXRlbXM6IG51bGwsXG4gICAgc2VsZWN0ZWREaXN0cmljdHM6IG51bGwsXG4gICAgYWN0aW9uOiB7fSwgICAgXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgLy8gaXRlbTogbnVsbCwgXG59XG5cbmNvbnN0IHNldE1hcCA9IChzdGF0ZSxkaXN0cmljdHMsIHNlbGVjdGVkRGlzdHJpY3RzLCBjb3VuY2lsTWVtYmVycywgc2VsZWN0ZWRCdWRnZXRJdGVtcykgPT4geyAgXG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB6b29tOiBzdGF0ZS56b29tLFxuICAgICAgICAgICAgICAgIGRpc3RyaWN0czogZGlzdHJpY3RzLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRGlzdHJpY3RzOiBzZWxlY3RlZERpc3RyaWN0cyxcbiAgICAgICAgICAgICAgICBjb3VuY2lsTWVtYmVyczogY291bmNpbE1lbWJlcnMsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRCdWRnZXRJdGVtczogc2VsZWN0ZWRCdWRnZXRJdGVtcywgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG59XG5cbmNvbnN0IHpvb21NYXJrZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4geyAgICBcblxuICAgIHJldHVybiB1cGRhdGVPYmplY3QgKHN0YXRlLCB7XG4gICAgICAgIHpvb206IDE0LCBcbiAgICAgICAgY2VudGVyOiBhY3Rpb24uY2VudGVyLCBcbiAgICAgICAgY2xpY2tlZEl0ZW06IGFjdGlvbi5pdGVtLCAgICAgICAgXG4gICAgfSk7XG59XG5cbmNvbnN0IGZpbHRlckJ1ZGdldCA9IChwYXJ0aWNpcGF0b3J5QnVkZ2V0LCBjb3VuY2lsTWVtYmVycywgY2F0ZWdvcnksIHllYXIsIGRpc3RyaWN0LCBtaW5Db3N0LCBtYXhDb3N0LCBtaW5Wb3RlcywgbWF4Vm90ZXMsIGNvdW5jaWxNZW1iZXIpID0+IHtcbiAgICBsZXQgbmV3QnVkZ2V0ID0gW107XG4gICAgbGV0IG5ld0NvdW5jaWwgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhwYXJ0aWNpcGF0b3J5QnVkZ2V0KS5tYXAoa2V5ID0+IHtcbiAgICAgICAgbmV3QnVkZ2V0LnB1c2gocGFydGljaXBhdG9yeUJ1ZGdldFtrZXldKVxuICAgIH0pXG5cbiAgICBPYmplY3Qua2V5cyhjb3VuY2lsTWVtYmVycykubWFwKGtleSA9PiB7XG4gICAgICAgIG5ld0NvdW5jaWwucHVzaChjb3VuY2lsTWVtYmVyc1trZXldKVxuICAgIH0pXG5cblxuICAgIGlmKHllYXIgIT09JycpXG4gICAgICAgIG5ld0J1ZGdldCA9IG5ld0J1ZGdldC5maWx0ZXIoaXRlbSA9PiBOdW1iZXIoaXRlbS52b3RlX3llYXIpID09PSBOdW1iZXIoeWVhcikpO1xuICAgIGlmKGNhdGVnb3J5ICE9PScnKVxuICAgICAgICBuZXdCdWRnZXQgPSBuZXdCdWRnZXQuZmlsdGVyKGl0ZW0gPT4gdHJhbnNsYXRlQ2F0ZWdvcnlUZXh0KGl0ZW0uY2F0ZWdvcnkpID09PSBjYXRlZ29yeSk7ICAgIFxuICAgIGlmKGRpc3RyaWN0ICE9PScnKVxuICAgICAgICBuZXdCdWRnZXQgPSBuZXdCdWRnZXQuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jb3VuY2lsX2Rpc3RyaWN0ID09PSBkaXN0cmljdCk7XG4gICAgaWYobWluQ29zdCAhPT0nJylcbiAgICAgICAgbmV3QnVkZ2V0ID0gbmV3QnVkZ2V0LmZpbHRlcihpdGVtID0+IE51bWJlcihpdGVtLmNvc3QpID49IE51bWJlcihtaW5Db3N0KSk7XG4gICAgaWYobWF4Q29zdCAhPT0nJylcbiAgICAgICAgbmV3QnVkZ2V0ID0gbmV3QnVkZ2V0LmZpbHRlcihpdGVtID0+IE51bWJlcihpdGVtLmNvc3QpIDw9IE51bWJlcihtYXhDb3N0KSk7XG4gICAgaWYobWluVm90ZXMgIT09JycpXG4gICAgICAgIG5ld0J1ZGdldCA9IG5ld0J1ZGdldC5maWx0ZXIoaXRlbSA9PiBOdW1iZXIoaXRlbS52b3RlcykgPj0gTnVtYmVyKG1pblZvdGVzKSk7XG4gICAgaWYobWF4Vm90ZXMgIT09JycpXG4gICAgICAgIG5ld0J1ZGdldCA9IG5ld0J1ZGdldC5maWx0ZXIoaXRlbSA9PiBOdW1iZXIoaXRlbS52b3RlcykgPD0gTnVtYmVyKG1heFZvdGVzKSk7XG4gICAgaWYoY291bmNpbE1lbWJlciAhPT0nJyl7ICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXIgY291bmNpbE1lbWJlck5ldyA9IGNvdW5jaWxNZW1iZXIuc3BsaXQoJzogJylbMV07ICAgICAgICBcbiAgICAgICAgdmFyIGN1cnJEaXN0cmljdCA9IG5ld0NvdW5jaWwuZmlsdGVyKG1lbWJlciA9PiBtZW1iZXIubmFtZSA9PT0gY291bmNpbE1lbWJlck5ldylbWzBdXS5kaXN0cmljdDsgICAgICAgIFxuICAgICAgICBuZXdCdWRnZXQgPSBuZXdCdWRnZXQuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jb3VuY2lsX2Rpc3RyaWN0ID09PSBjdXJyRGlzdHJpY3QpO1xuICAgIH0gICAgXG5cbiAgICByZXR1cm4gbmV3QnVkZ2V0O1xufVxuXG5jb25zdCBmaW5kSXRlbSA9IChidWRnZXQsIGxhdCwgbG5nLCB0aXRsZSkgPT4geyAgXG4gICAgY29uc29sZS5sb2coJ2ZpbmRJdGVtJyxidWRnZXQsIGxhdCwgbG5nLCB0aXRsZSkgICAgICBcbiAgICAvL3ZhciBjbGlja2VkSXRlbSA9IGJ1ZGdldC5maWx0ZXIoaXRlbSA9PiBOdW1iZXIoaXRlbS5sYXRpdHVkZSkgPT09IE51bWJlcihsYXQpICYmIE51bWJlcihpdGVtLmxvbmdpdHVkZSkgPT09IE51bWJlcihsbmcpICYmIGl0ZW0udGl0bGUgPT09IHRpdGxlKVswXTtcbiAgICB2YXIgY2xpY2tlZEl0ZW0gPSBidWRnZXQuZmlsdGVyKGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gdGl0bGUpO1xuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkSXRlbScsY2xpY2tlZEl0ZW0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsaWNrZWRJdGVtOiBjbGlja2VkSXRlbSxcbiAgICAgICAgY2VudGVyOiB7bGF0aXR1ZGU6IGNsaWNrZWRJdGVtLmxhdGl0dWRlLCBsb25naXR1ZGU6IGNsaWNrZWRJdGVtLmxvbmdpdHVkZX0sXG4gICAgICAgIHpvb206IDE0XG4gICAgfVxufVxuXG5jb25zdCBidWRnZXRGaWx0ZXJGcm9tVVJMID0gKGJ1ZGdldCwgcXVlcnkpID0+IHtcbiAgICBsZXQgbmV3QnVkZ2V0ID0gW107XG4gICAgXG4gICAgT2JqZWN0LmtleXMoYnVkZ2V0KS5tYXAoa2V5ID0+IHtcbiAgICAgICAgbmV3QnVkZ2V0LnB1c2goYnVkZ2V0W2tleV0pXG4gICAgfSlcblxuICAgIGlmKHF1ZXJ5LnllYXIpXG4gICAgICAgIG5ld0J1ZGdldCA9IG5ld0J1ZGdldC5maWx0ZXIoaXRlbSA9PiBOdW1iZXIoaXRlbS52b3RlX3llYXIpID09PSBOdW1iZXIocXVlcnkueWVhcikpO1xuICAgIGlmKHF1ZXJ5LmNhdGVnb3J5KVxuICAgICAgICBuZXdCdWRnZXQgPSBuZXdCdWRnZXQuZmlsdGVyKGl0ZW0gPT4gdHJhbnNsYXRlQ2F0ZWdvcnlUZXh0KGl0ZW0uY2F0ZWdvcnkpID09PSBxdWVyeS5jYXRlZ29yeSk7ICAgIFxuICAgIGlmKHF1ZXJ5LmRpc3RyaWN0KVxuICAgICAgICBuZXdCdWRnZXQgPSBuZXdCdWRnZXQuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jb3VuY2lsX2Rpc3RyaWN0ID09PSBxdWVyeS5kaXN0cmljdCk7XG4gICAgaWYocXVlcnkubWluQ29zdClcbiAgICAgICAgbmV3QnVkZ2V0ID0gbmV3QnVkZ2V0LmZpbHRlcihpdGVtID0+IE51bWJlcihpdGVtLmNvc3QpID49IE51bWJlcihxdWVyeS5taW5Db3N0KSk7XG4gICAgaWYocXVlcnkubWF4Q29zdClcbiAgICAgICAgbmV3QnVkZ2V0ID0gbmV3QnVkZ2V0LmZpbHRlcihpdGVtID0+IE51bWJlcihpdGVtLmNvc3QpIDw9IE51bWJlcihxdWVyeS5tYXhDb3N0KSk7XG4gICAgaWYocXVlcnkubWluVm90ZXMpXG4gICAgICAgIG5ld0J1ZGdldCA9IG5ld0J1ZGdldC5maWx0ZXIoaXRlbSA9PiBOdW1iZXIoaXRlbS52b3RlcykgPj0gTnVtYmVyKHF1ZXJ5Lm1pblZvdGVzKSk7XG4gICAgaWYocXVlcnkubWF4Vm90ZXMpXG4gICAgICAgIG5ld0J1ZGdldCA9IG5ld0J1ZGdldC5maWx0ZXIoaXRlbSA9PiBOdW1iZXIoaXRlbS52b3RlcykgPD0gTnVtYmVyKHF1ZXJ5Lm1heFZvdGVzKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RlZEJ1ZGdldEl0ZW1zOiBuZXdCdWRnZXQsICAgICAgICBcbiAgICB9XG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuU0VUX01BUDogcmV0dXJuIHVwZGF0ZU9iamVjdChzdGF0ZSwge21hcFByb3BzOiBzZXRNYXAoc3RhdGUsYWN0aW9uLmRpc3RyaWN0cywgYWN0aW9uLnNlbGVjdGVkRGlzdHJpY3RzLCBhY3Rpb24uY291bmNpbE1lbWJlcnMsIGFjdGlvbi5zZWxlY3RlZEJ1ZGdldEl0ZW1zKX0pICAgICAgICBcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5VUERBVEVfTUFQOiByZXR1cm4gdXBkYXRlT2JqZWN0KHN0YXRlLCB7bWFwUHJvcHM6IHNldE1hcChzdGF0ZSxhY3Rpb24uZGlzdHJpY3RzLCBhY3Rpb24uc2VsZWN0ZWREaXN0cmljdHMsIGFjdGlvbi5jb3VuY2lsTWVtYmVycywgYWN0aW9uLnNlbGVjdGVkQnVkZ2V0SXRlbXMpfSkgICAgICAgIFxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlJFU0VUX01BUDogcmV0dXJuIHVwZGF0ZU9iamVjdChzdGF0ZSwge21hcDogPFNwaW5uZXIgLz4sIGNsaWNrZWRJdGVtOiBudWxsfSkgICAgICAgIFxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlpPT01fTUFSS0VSOiByZXR1cm4gem9vbU1hcmtlcihzdGF0ZSwgYWN0aW9uKVxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLlJFU0VUX0NMSUNLRURfSVRFTTogcmV0dXJuIHVwZGF0ZU9iamVjdChzdGF0ZSwge2NsaWNrZWRJdGVtOiBudWxsLCB6b29tOiAxMSwgY2VudGVyOiBERUZBVUxUX0NFTlRFUn0pXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuWk9PTV9JTjogcmV0dXJuIHVwZGF0ZU9iamVjdChzdGF0ZSwge3pvb206IHN0YXRlLnpvb20gKyAxfSlcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5aT09NX09VVDogcmV0dXJuIHVwZGF0ZU9iamVjdChzdGF0ZSwge3pvb206IHN0YXRlLnpvb20gLSAxfSlcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5DRU5URVI6IGNvbnNvbGUubG9nKCdjZW50ZXJpbmchISEnKTsgcmV0dXJuIHVwZGF0ZU9iamVjdChzdGF0ZSwge3pvb206IDExLCBjZW50ZXI6IERFRkFVTFRfQ0VOVEVSLCBjbGlja2VkSXRlbTogbnVsbH0pXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuU0hPV19ESVNUUklDVFM6IHJldHVybiB1cGRhdGVPYmplY3Qoc3RhdGUsIHttYXA6IDxTcGlubmVyIC8+fSlcblxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkJVREdFVF9GSUxURVI6IHJldHVybiB1cGRhdGVPYmplY3Qoc3RhdGUsIHtzZWxlY3RlZEJ1ZGdldEl0ZW1zOiBmaWx0ZXJCdWRnZXQoYWN0aW9uLmJ1ZGdldCwgYWN0aW9uLmNvdW5jaWxNZW1iZXJzLCBhY3Rpb24uY2F0ZWdvcnksIGFjdGlvbi55ZWFyLCBhY3Rpb24uZGlzdHJpY3QsIGFjdGlvbi5taW5Db3N0LCBhY3Rpb24ubWF4Q29zdCwgYWN0aW9uLm1pblZvdGVzLCBhY3Rpb24ubWF4Vm90ZXMsIGFjdGlvbi5jb3VuY2lsTWVtYmVyKSwgYWN0aW9uOiB7Li4uYWN0aW9ufSwgbG9hZGluZzogZmFsc2V9KVxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkJVREdFVF9GSUxURVJfRlJPTV9VUkw6IHJldHVybiB1cGRhdGVPYmplY3Qoc3RhdGUsIGJ1ZGdldEZpbHRlckZyb21VUkwoYWN0aW9uLmJ1ZGdldCwgYWN0aW9uLnF1ZXJ5KSlcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5GSU5EX0lURU06IHJldHVybiB1cGRhdGVPYmplY3Qoc3RhdGUsIGZpbmRJdGVtKGFjdGlvbi5idWRnZXQsIGFjdGlvbi5sYXQsIGFjdGlvbi5sbmcsIGFjdGlvbi50aXRsZSkpXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/reducers/setMap.js\n");

/***/ })

})