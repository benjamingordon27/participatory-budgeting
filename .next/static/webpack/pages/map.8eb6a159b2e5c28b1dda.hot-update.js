webpackHotUpdate_N_E("pages/map",{

/***/ "./containers/ParticipatoryBudgetMap/BudgetMap/BudgetMap.js":
/*!******************************************************************!*\
  !*** ./containers/ParticipatoryBudgetMap/BudgetMap/BudgetMap.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_UI_MapMarker_MapMarker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/UI/MapMarker/MapMarker */ \"./components/UI/MapMarker/MapMarker.js\");\n/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/actions/index */ \"./store/actions/index.js\");\n/* harmony import */ var _util_translateCategory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../util/translateCategory */ \"./util/translateCategory.js\");\n/* harmony import */ var _components_Map_Map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/Map/Map */ \"./components/Map/Map.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/benjamingordon/Documents/civic-alley-visualization/data-vis/containers/ParticipatoryBudgetMap/BudgetMap/BudgetMap.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar DEFAULT_CENTER = {\n  lat: 40.635,\n  lng: -73.94\n};\n\nvar BudgetMap = /*#__PURE__*/function (_Component) {\n  Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(BudgetMap, _Component);\n\n  var _super = _createSuper(BudgetMap);\n\n  function BudgetMap() {\n    var _this;\n\n    Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, BudgetMap);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"state\", {\n      firstPageLoad: false\n    });\n\n    Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"markerClicked\", function (center, item) {\n      _this.props.onZoomMarker(center, item); // this.props.history.replace(this.props.url);\n\n    });\n\n    return _this;\n  }\n\n  Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(BudgetMap, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (this.props.districts) {\n        this.props.onSetMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);\n      }\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps, prevState) {\n      //when first loaded, set the map up properly to the full map, and we have now loaded\n      if (!this.state.firstPageLoad && this.props.loaded) {\n        console.log('we loaded and the first page hasnt loaded'); // this.props.onSetMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);\n\n        this.setState({\n          firstPageLoad: true\n        });\n      } // if((prevProps.selectedBudgetItems !== this.props.selectedBudgetItems)){\n      //     console.log('selected budget items changed')\n      //     // if(this.props.router.query){\n      //     //     if(this.props.router.query.id === '')\n      //     // }\n      //     // this.props.onResetMap();                        \n      //     // this.props.onUpdateMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);     \n      //     // this.props.onResetClickedItem();\n      //     // this.props.onResetFindItem();\n      //     // this.props.onCenter();            \n      // }    \n      // if(this.props.participatoryBudget && this.props.router.query && !this.props.clickedItem){\n      //     console.log('router and no clicked item')\n      //     if(this.props.router.query.id === '1'){            \n      //         console.log('did we load', this.props.router.query.id)    \n      //         console.log('did we load', this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title)    \n      //         this.props.onFindItem(this.props.participatoryBudget, this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title);\n      //     }\n      // }\n      // if(this.props.participatoryBudget && this.props.router.query && (this.props.participatoryBudget !== prevProps.participatoryBudget)){            \n      //     console.log('router?')\n      //     if(this.props.router.query.id === '1'){            \n      //         console.log('did we load', this.props.router.query.id)    \n      //         this.props.onFindItem(this.props.participatoryBudget, this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title);\n      //     }else if(this.props.router.query.id === '2'){                \n      //         console.log('did we load', this.props.router.query.id)    \n      //         this.props.onBudgetFilterFromURL(this.props.participatoryBudget, this.props.router.query);            \n      //     }            \n      // }\n      // if((this.props.showDistricts !== prevProps.showDistricts)){\n      //     console.log('[BudgetMap.js] show districts')\n      // }  \n\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      console.log('[BudgetMap.js]', this.props);\n      var markers = [];\n\n      if (this.props.selectedBudgetItems) {\n        this.props.selectedBudgetItems.filter(function (item) {\n          return item.latitude && item.longitude;\n        }).map(function (item, idx) {\n          markers.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_UI_MapMarker_MapMarker__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            center: _this2.props.center,\n            lat: item.latitude,\n            lng: item.longitude,\n            item: Object(_util_translateCategory__WEBPACK_IMPORTED_MODULE_12__[\"translateCategory\"])(item),\n            width: '30px',\n            height: '30px',\n            zoom: _this2.props.zoom ////figure out how to change on zoom change, might have to be rendered not in an array in component but in render itself\n            ,\n            clicked: function clicked() {\n              return _this2.markerClicked({\n                lat: item.latitude,\n                lng: item.longitude\n              }, item);\n            }\n          }, idx, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 30\n          }, _this2));\n        });\n      }\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          height: '87vh',\n          width: '100%'\n        },\n        children: this.props.mapProps ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Map_Map__WEBPACK_IMPORTED_MODULE_13__[\"default\"], _objectSpread(_objectSpread({}, this.props.mapProps), {}, {\n          zoom: this.props.zoom,\n          center: this.props.center,\n          defaultCenter: DEFAULT_CENTER,\n          markers: markers,\n          showDistricts: this.props.showDistricts\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 21\n        }, this) : null\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return BudgetMap;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    currItem: state.participatoryBudget.currItem,\n    participatoryBudget: state.participatoryBudget.participatoryBudget,\n    councilMemberLoading: state.participatoryBudget.councilMemberLoading,\n    error: state.participatoryBudget.error,\n    councilMembers: state.participatoryBudget.councilMembers,\n    districts: state.participatoryBudget.districts,\n    districtsLoading: state.participatoryBudget.districtsLoading,\n    selectedDistricts: state.participatoryBudget.selectedDistricts,\n    loaded: state.participatoryBudget.loaded,\n    showDistricts: state.setMap.showDistricts,\n    mapProps: state.setMap.mapProps,\n    center: state.setMap.center,\n    zoom: state.setMap.zoom,\n    clickedItem: state.setMap.clickedItem,\n    // item: state.setMap.item,\n    selectedBudgetItems: state.setMap.selectedBudgetItems,\n    url: state.setMap.url\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onSetMap: function onSetMap(districts, selectedDistricts, councilMembers, selectedBudgetItems) {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"setMap\"](districts, selectedDistricts, councilMembers, selectedBudgetItems));\n    },\n    onUpdateMap: function onUpdateMap(districts, selectedDistricts, councilMembers, selectedBudgetItems, showDistricts) {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"updateMap\"](districts, selectedDistricts, councilMembers, selectedBudgetItems, showDistricts));\n    },\n    onResetMap: function onResetMap() {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"resetMap\"]());\n    },\n    onZoomMarker: function onZoomMarker(center, item) {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"zoomMarker\"](center, item));\n    },\n    onFindItem: function onFindItem(budget, lat, lng, title) {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"findItem\"](budget, lat, lng, title));\n    },\n    onBudgetFilterFromURL: function onBudgetFilterFromURL(budget, query) {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"budgetFilterFromURL\"](budget, query));\n    },\n    onResetClickedItem: function onResetClickedItem() {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"resetClickedItem\"]());\n    },\n    onResetFindItem: function onResetFindItem() {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"resetFindItem\"]());\n    },\n    onCenter: function onCenter() {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"center\"]());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"connect\"])(mapStateToProps, mapDispatchToProps)(BudgetMap));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9QYXJ0aWNpcGF0b3J5QnVkZ2V0TWFwL0J1ZGdldE1hcC9CdWRnZXRNYXAuanM/MDg2OCJdLCJuYW1lcyI6WyJERUZBVUxUX0NFTlRFUiIsImxhdCIsImxuZyIsIkJ1ZGdldE1hcCIsImZpcnN0UGFnZUxvYWQiLCJjZW50ZXIiLCJpdGVtIiwicHJvcHMiLCJvblpvb21NYXJrZXIiLCJkaXN0cmljdHMiLCJvblNldE1hcCIsInNlbGVjdGVkRGlzdHJpY3RzIiwiY291bmNpbE1lbWJlcnMiLCJzZWxlY3RlZEJ1ZGdldEl0ZW1zIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic3RhdGUiLCJsb2FkZWQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJtYXJrZXJzIiwiZmlsdGVyIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJtYXAiLCJpZHgiLCJwdXNoIiwidHJhbnNsYXRlQ2F0ZWdvcnkiLCJ6b29tIiwibWFya2VyQ2xpY2tlZCIsImhlaWdodCIsIndpZHRoIiwibWFwUHJvcHMiLCJzaG93RGlzdHJpY3RzIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiY3Vyckl0ZW0iLCJwYXJ0aWNpcGF0b3J5QnVkZ2V0IiwiY291bmNpbE1lbWJlckxvYWRpbmciLCJlcnJvciIsImRpc3RyaWN0c0xvYWRpbmciLCJzZXRNYXAiLCJjbGlja2VkSXRlbSIsInVybCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWN0aW9ucyIsIm9uVXBkYXRlTWFwIiwib25SZXNldE1hcCIsIm9uRmluZEl0ZW0iLCJidWRnZXQiLCJ0aXRsZSIsIm9uQnVkZ2V0RmlsdGVyRnJvbVVSTCIsInF1ZXJ5Iiwib25SZXNldENsaWNrZWRJdGVtIiwib25SZXNldEZpbmRJdGVtIiwib25DZW50ZXIiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7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RCxHQUFULEVBQWNDLEdBQWQsRUFBbUJrRCxLQUFuQjtBQUFBLGFBQTZCTixRQUFRLENBQUNDLDhEQUFBLENBQWlCSSxNQUFqQixFQUF5QmxELEdBQXpCLEVBQThCQyxHQUE5QixFQUFtQ2tELEtBQW5DLENBQUQsQ0FBckM7QUFBQSxLQU5UO0FBT0hDLHlCQUFxQixFQUFFLCtCQUFDRixNQUFELEVBQVNHLEtBQVQ7QUFBQSxhQUFtQlIsUUFBUSxDQUFDQyx5RUFBQSxDQUE0QkksTUFBNUIsRUFBb0NHLEtBQXBDLENBQUQsQ0FBM0I7QUFBQSxLQVBwQjtBQVNIQyxzQkFBa0IsRUFBRTtBQUFBLGFBQU1ULFFBQVEsQ0FBQ0Msc0VBQUEsRUFBRCxDQUFkO0FBQUEsS0FUakI7QUFVSFMsbUJBQWUsRUFBRTtBQUFBLGFBQU1WLFFBQVEsQ0FBQ0MsbUVBQUEsRUFBRCxDQUFkO0FBQUEsS0FWZDtBQVlIVSxZQUFRLEVBQUU7QUFBQSxhQUFNWCxRQUFRLENBQUNDLDREQUFBLEVBQUQsQ0FBZDtBQUFBO0FBWlAsR0FBUDtBQWNILENBZkQ7O0FBaUJlVywwSEFBTyxDQUFDdEIsZUFBRCxFQUFrQlMsa0JBQWxCLENBQVAsQ0FBNkMxQyxTQUE3QyxDQUFmIiwiZmlsZSI6Ii4vY29udGFpbmVycy9QYXJ0aWNpcGF0b3J5QnVkZ2V0TWFwL0J1ZGdldE1hcC9CdWRnZXRNYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgTWFwTWFya2VyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvVUkvTWFwTWFya2VyL01hcE1hcmtlcic7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHt0cmFuc2xhdGVDYXRlZ29yeX0gZnJvbSAnLi4vLi4vLi4vdXRpbC90cmFuc2xhdGVDYXRlZ29yeSc7XG5cbmltcG9ydCBNYXAgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9NYXAvTWFwJztcblxuY29uc3QgREVGQVVMVF9DRU5URVIgPSB7IGxhdDogNDAuNjM1LCBsbmc6IC03My45NCB9O1xuXG5jbGFzcyBCdWRnZXRNYXAgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGZpcnN0UGFnZUxvYWQ6IGZhbHNlLFxuICAgIH0gXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpeyAgICAgICAgICAgICAgIFxuICAgICAgICBpZih0aGlzLnByb3BzLmRpc3RyaWN0cyl7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2V0TWFwKHRoaXMucHJvcHMuZGlzdHJpY3RzLCB0aGlzLnByb3BzLnNlbGVjdGVkRGlzdHJpY3RzLCB0aGlzLnByb3BzLmNvdW5jaWxNZW1iZXJzLCB0aGlzLnByb3BzLnNlbGVjdGVkQnVkZ2V0SXRlbXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKXtcbiAgICAgICAgLy93aGVuIGZpcnN0IGxvYWRlZCwgc2V0IHRoZSBtYXAgdXAgcHJvcGVybHkgdG8gdGhlIGZ1bGwgbWFwLCBhbmQgd2UgaGF2ZSBub3cgbG9hZGVkXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmZpcnN0UGFnZUxvYWQgJiYgdGhpcy5wcm9wcy5sb2FkZWQpeyAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3ZSBsb2FkZWQgYW5kIHRoZSBmaXJzdCBwYWdlIGhhc250IGxvYWRlZCcpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHRoaXMucHJvcHMub25TZXRNYXAodGhpcy5wcm9wcy5kaXN0cmljdHMsIHRoaXMucHJvcHMuc2VsZWN0ZWREaXN0cmljdHMsIHRoaXMucHJvcHMuY291bmNpbE1lbWJlcnMsIHRoaXMucHJvcHMuc2VsZWN0ZWRCdWRnZXRJdGVtcyk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmaXJzdFBhZ2VMb2FkOiB0cnVlfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmKChwcmV2UHJvcHMuc2VsZWN0ZWRCdWRnZXRJdGVtcyAhPT0gdGhpcy5wcm9wcy5zZWxlY3RlZEJ1ZGdldEl0ZW1zKSl7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgYnVkZ2V0IGl0ZW1zIGNoYW5nZWQnKVxuICAgICAgICAvLyAgICAgLy8gaWYodGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkpe1xuICAgICAgICAvLyAgICAgLy8gICAgIGlmKHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmlkID09PSAnJylcbiAgICAgICAgLy8gICAgIC8vIH1cblxuICAgICAgICAvLyAgICAgLy8gdGhpcy5wcm9wcy5vblJlc2V0TWFwKCk7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICAvLyB0aGlzLnByb3BzLm9uVXBkYXRlTWFwKHRoaXMucHJvcHMuZGlzdHJpY3RzLCB0aGlzLnByb3BzLnNlbGVjdGVkRGlzdHJpY3RzLCB0aGlzLnByb3BzLmNvdW5jaWxNZW1iZXJzLCB0aGlzLnByb3BzLnNlbGVjdGVkQnVkZ2V0SXRlbXMpOyAgICAgXG4gICAgICAgIC8vICAgICAvLyB0aGlzLnByb3BzLm9uUmVzZXRDbGlja2VkSXRlbSgpO1xuICAgICAgICAvLyAgICAgLy8gdGhpcy5wcm9wcy5vblJlc2V0RmluZEl0ZW0oKTtcbiAgICAgICAgLy8gICAgIC8vIHRoaXMucHJvcHMub25DZW50ZXIoKTsgICAgICAgICAgICBcbiAgICAgICAgLy8gfSAgICBcblxuICAgICAgICAvLyBpZih0aGlzLnByb3BzLnBhcnRpY2lwYXRvcnlCdWRnZXQgJiYgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkgJiYgIXRoaXMucHJvcHMuY2xpY2tlZEl0ZW0pe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3JvdXRlciBhbmQgbm8gY2xpY2tlZCBpdGVtJylcblxuICAgICAgICAvLyAgICAgaWYodGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkuaWQgPT09ICcxJyl7ICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2RpZCB3ZSBsb2FkJywgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkuaWQpICAgIFxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdkaWQgd2UgbG9hZCcsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmxhdCwgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkubG5nLCB0aGlzLnByb3BzLnJvdXRlci5xdWVyeS50aXRsZSkgICAgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wcm9wcy5vbkZpbmRJdGVtKHRoaXMucHJvcHMucGFydGljaXBhdG9yeUJ1ZGdldCwgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkubGF0LCB0aGlzLnByb3BzLnJvdXRlci5xdWVyeS5sbmcsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LnRpdGxlKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGlmKHRoaXMucHJvcHMucGFydGljaXBhdG9yeUJ1ZGdldCAmJiB0aGlzLnByb3BzLnJvdXRlci5xdWVyeSAmJiAodGhpcy5wcm9wcy5wYXJ0aWNpcGF0b3J5QnVkZ2V0ICE9PSBwcmV2UHJvcHMucGFydGljaXBhdG9yeUJ1ZGdldCkpeyAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3JvdXRlcj8nKVxuICAgICAgICAvLyAgICAgaWYodGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkuaWQgPT09ICcxJyl7ICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2RpZCB3ZSBsb2FkJywgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkuaWQpICAgIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMucHJvcHMub25GaW5kSXRlbSh0aGlzLnByb3BzLnBhcnRpY2lwYXRvcnlCdWRnZXQsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmxhdCwgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkubG5nLCB0aGlzLnByb3BzLnJvdXRlci5xdWVyeS50aXRsZSk7XG4gICAgICAgIC8vICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnJvdXRlci5xdWVyeS5pZCA9PT0gJzInKXsgICAgICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2RpZCB3ZSBsb2FkJywgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkuaWQpICAgIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMucHJvcHMub25CdWRnZXRGaWx0ZXJGcm9tVVJMKHRoaXMucHJvcHMucGFydGljaXBhdG9yeUJ1ZGdldCwgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkpOyAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgICAgICAvLyBpZigodGhpcy5wcm9wcy5zaG93RGlzdHJpY3RzICE9PSBwcmV2UHJvcHMuc2hvd0Rpc3RyaWN0cykpe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ1tCdWRnZXRNYXAuanNdIHNob3cgZGlzdHJpY3RzJylcblxuICAgICAgICAvLyB9ICBcbiAgICB9XG5cbiAgICBtYXJrZXJDbGlja2VkID0gKGNlbnRlciwgaXRlbSkgPT4geyAgICAgICAgXG4gICAgICAgIHRoaXMucHJvcHMub25ab29tTWFya2VyKGNlbnRlciwgaXRlbSk7ICAgICAgICBcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UodGhpcy5wcm9wcy51cmwpO1xuICAgIH1cblxuICAgIHJlbmRlcigpeyAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1tCdWRnZXRNYXAuanNdJywgdGhpcy5wcm9wcylcblxuICAgICAgICBsZXQgbWFya2VycyA9IFtdOyAgICBcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zZWxlY3RlZEJ1ZGdldEl0ZW1zKXsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZEJ1ZGdldEl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0ubGF0aXR1ZGUgJiYgaXRlbS5sb25naXR1ZGUpLm1hcCgoaXRlbSxpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBtYXJrZXJzLnB1c2goPE1hcE1hcmtlciBcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyPXt0aGlzLnByb3BzLmNlbnRlcn1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9IFxuICAgICAgICAgICAgICAgICAgICBsYXQ9e2l0ZW0ubGF0aXR1ZGV9IFxuICAgICAgICAgICAgICAgICAgICBsbmc9e2l0ZW0ubG9uZ2l0dWRlfSBcbiAgICAgICAgICAgICAgICAgICAgaXRlbT17dHJhbnNsYXRlQ2F0ZWdvcnkoaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsnMzBweCd9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17JzMwcHgnfVxuICAgICAgICAgICAgICAgICAgICB6b29tPXt0aGlzLnByb3BzLnpvb219IC8vLy9maWd1cmUgb3V0IGhvdyB0byBjaGFuZ2Ugb24gem9vbSBjaGFuZ2UsIG1pZ2h0IGhhdmUgdG8gYmUgcmVuZGVyZWQgbm90IGluIGFuIGFycmF5IGluIGNvbXBvbmVudCBidXQgaW4gcmVuZGVyIGl0c2VsZlxuICAgICAgICAgICAgICAgICAgICBjbGlja2VkPXsoKSA9PiB0aGlzLm1hcmtlckNsaWNrZWQoeyBsYXQ6IGl0ZW0ubGF0aXR1ZGUsIGxuZzogaXRlbS5sb25naXR1ZGUgfSwgaXRlbSl9Lz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSAgICAgICAgICAgIFxuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnODd2aCcsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubWFwUHJvcHMgPyAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxNYXAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5tYXBQcm9wc30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgem9vbT17dGhpcy5wcm9wcy56b29tfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI9e3RoaXMucHJvcHMuY2VudGVyfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2VudGVyPXtERUZBVUxUX0NFTlRFUn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXJzPXttYXJrZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dEaXN0cmljdHM9e3RoaXMucHJvcHMuc2hvd0Rpc3RyaWN0c30vPiBcbiAgICAgICAgICAgICAgICAgICAgOm51bGx9XG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjdXJySXRlbTogc3RhdGUucGFydGljaXBhdG9yeUJ1ZGdldC5jdXJySXRlbSxcbiAgICAgICAgcGFydGljaXBhdG9yeUJ1ZGdldDogc3RhdGUucGFydGljaXBhdG9yeUJ1ZGdldC5wYXJ0aWNpcGF0b3J5QnVkZ2V0LCAgIFxuICAgICAgICBjb3VuY2lsTWVtYmVyTG9hZGluZzogc3RhdGUucGFydGljaXBhdG9yeUJ1ZGdldC5jb3VuY2lsTWVtYmVyTG9hZGluZyxcbiAgICAgICAgZXJyb3I6IHN0YXRlLnBhcnRpY2lwYXRvcnlCdWRnZXQuZXJyb3IsXG4gICAgICAgIGNvdW5jaWxNZW1iZXJzOiBzdGF0ZS5wYXJ0aWNpcGF0b3J5QnVkZ2V0LmNvdW5jaWxNZW1iZXJzLFxuICAgICAgICBkaXN0cmljdHM6IHN0YXRlLnBhcnRpY2lwYXRvcnlCdWRnZXQuZGlzdHJpY3RzLFxuICAgICAgICBkaXN0cmljdHNMb2FkaW5nOiBzdGF0ZS5wYXJ0aWNpcGF0b3J5QnVkZ2V0LmRpc3RyaWN0c0xvYWRpbmcsICAgXG4gICAgICAgIHNlbGVjdGVkRGlzdHJpY3RzOiBzdGF0ZS5wYXJ0aWNpcGF0b3J5QnVkZ2V0LnNlbGVjdGVkRGlzdHJpY3RzLCAgIFxuICAgICAgICBsb2FkZWQ6IHN0YXRlLnBhcnRpY2lwYXRvcnlCdWRnZXQubG9hZGVkLFxuICAgICAgICBcbiAgICAgICAgc2hvd0Rpc3RyaWN0czogc3RhdGUuc2V0TWFwLnNob3dEaXN0cmljdHMsXG4gICAgICAgIG1hcFByb3BzOiBzdGF0ZS5zZXRNYXAubWFwUHJvcHMsICAgICAgICBcbiAgICAgICAgY2VudGVyOiBzdGF0ZS5zZXRNYXAuY2VudGVyLFxuICAgICAgICB6b29tOiBzdGF0ZS5zZXRNYXAuem9vbSxcbiAgICAgICAgY2xpY2tlZEl0ZW06IHN0YXRlLnNldE1hcC5jbGlja2VkSXRlbSxcbiAgICAgICAgLy8gaXRlbTogc3RhdGUuc2V0TWFwLml0ZW0sXG4gICAgICAgIHNlbGVjdGVkQnVkZ2V0SXRlbXM6IHN0YXRlLnNldE1hcC5zZWxlY3RlZEJ1ZGdldEl0ZW1zLFxuXG4gICAgICAgIHVybDogc3RhdGUuc2V0TWFwLnVybCwgICAgICAgIFxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7ICAgICAgICBcbiAgICAgICAgb25TZXRNYXA6IChkaXN0cmljdHMsIHNlbGVjdGVkRGlzdHJpY3RzLCBjb3VuY2lsTWVtYmVycywgc2VsZWN0ZWRCdWRnZXRJdGVtcykgPT4gZGlzcGF0Y2goYWN0aW9ucy5zZXRNYXAoZGlzdHJpY3RzLCBzZWxlY3RlZERpc3RyaWN0cywgY291bmNpbE1lbWJlcnMsIHNlbGVjdGVkQnVkZ2V0SXRlbXMpKSwgIFxuICAgICAgICBvblVwZGF0ZU1hcDogKGRpc3RyaWN0cywgc2VsZWN0ZWREaXN0cmljdHMsIGNvdW5jaWxNZW1iZXJzLCBzZWxlY3RlZEJ1ZGdldEl0ZW1zLCBzaG93RGlzdHJpY3RzKSA9PiBkaXNwYXRjaChhY3Rpb25zLnVwZGF0ZU1hcChkaXN0cmljdHMsIHNlbGVjdGVkRGlzdHJpY3RzLCBjb3VuY2lsTWVtYmVycywgc2VsZWN0ZWRCdWRnZXRJdGVtcywgc2hvd0Rpc3RyaWN0cykpLCAgXG4gICAgICAgIG9uUmVzZXRNYXA6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucmVzZXRNYXAoKSksXG4gICAgICAgIG9uWm9vbU1hcmtlcjogKGNlbnRlciwgaXRlbSkgPT4gZGlzcGF0Y2goYWN0aW9ucy56b29tTWFya2VyKGNlbnRlciwgaXRlbSkpLCAgIFxuICAgICAgICBcbiAgICAgICAgb25GaW5kSXRlbTogKGJ1ZGdldCwgbGF0LCBsbmcsIHRpdGxlKSA9PiBkaXNwYXRjaChhY3Rpb25zLmZpbmRJdGVtKGJ1ZGdldCwgbGF0LCBsbmcsIHRpdGxlKSksXG4gICAgICAgIG9uQnVkZ2V0RmlsdGVyRnJvbVVSTDogKGJ1ZGdldCwgcXVlcnkpID0+IGRpc3BhdGNoKGFjdGlvbnMuYnVkZ2V0RmlsdGVyRnJvbVVSTChidWRnZXQsIHF1ZXJ5KSksXG5cbiAgICAgICAgb25SZXNldENsaWNrZWRJdGVtOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLnJlc2V0Q2xpY2tlZEl0ZW0oKSksXG4gICAgICAgIG9uUmVzZXRGaW5kSXRlbTogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5yZXNldEZpbmRJdGVtKCkpLFxuXG4gICAgICAgIG9uQ2VudGVyOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmNlbnRlcigpKSxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEJ1ZGdldE1hcCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./containers/ParticipatoryBudgetMap/BudgetMap/BudgetMap.js\n");

/***/ })

})