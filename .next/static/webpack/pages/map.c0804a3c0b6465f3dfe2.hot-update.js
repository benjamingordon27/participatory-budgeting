webpackHotUpdate_N_E("pages/map",{

/***/ "./containers/ParticipatoryBudgetMap/BudgetMap/BudgetMap.js":
/*!******************************************************************!*\
  !*** ./containers/ParticipatoryBudgetMap/BudgetMap/BudgetMap.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_UI_MapMarker_MapMarker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/UI/MapMarker/MapMarker */ \"./components/UI/MapMarker/MapMarker.js\");\n/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/actions/index */ \"./store/actions/index.js\");\n/* harmony import */ var _util_translateCategory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../util/translateCategory */ \"./util/translateCategory.js\");\n/* harmony import */ var _components_Map_Map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/Map/Map */ \"./components/Map/Map.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/benjamingordon/Documents/civic-alley-visualization/data-vis/containers/ParticipatoryBudgetMap/BudgetMap/BudgetMap.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar DEFAULT_CENTER = {\n  lat: 40.635,\n  lng: -73.94\n};\n\nvar BudgetMap = /*#__PURE__*/function (_Component) {\n  Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(BudgetMap, _Component);\n\n  var _super = _createSuper(BudgetMap);\n\n  function BudgetMap() {\n    var _this;\n\n    Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, BudgetMap);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"state\", {\n      firstPageLoad: false\n    });\n\n    Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"markerClicked\", function (center, item) {\n      _this.props.onZoomMarker(center, item); // this.props.history.replace(this.props.url);\n\n    });\n\n    return _this;\n  }\n\n  Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(BudgetMap, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (this.props.districts) {\n        this.props.onSetMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);\n      }\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps, prevState) {\n      //when first loaded, set the map up properly to the full map, and we have now loaded\n      if (!this.state.firstPageLoad && this.props.loaded) {\n        console.log('we loaded and the first page hasnt loaded'); // this.props.onSetMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);\n\n        this.setState({\n          firstPageLoad: true\n        });\n\n        if (this.props.router.query) {\n          if (this.props.router.query.id === '1') {\n            console.log('did we load', this.props.router.query.id);\n            console.log('did we load', this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title);\n            this.props.onFindItem(this.props.participatoryBudget, this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title);\n          } else if (this.props.router.query.id === '2') {\n            console.log('did we load', this.props.router.query.id);\n            this.props.onBudgetFilterFromURL(this.props.participatoryBudget, this.props.router.query);\n          }\n        }\n      } // if((prevProps.selectedBudgetItems !== this.props.selectedBudgetItems)){\n      //     console.log('selected budget items changed')\n      //     // if(this.props.router.query){\n      //     //     if(this.props.router.query.id === '')\n      //     // }\n      //     // this.props.onResetMap();                        \n      //     // this.props.onUpdateMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);     \n      //     // this.props.onResetClickedItem();\n      //     // this.props.onResetFindItem();\n      //     // this.props.onCenter();            \n      // }    \n      // if(this.props.participatoryBudget && this.props.router.query && !this.props.clickedItem){\n      //     console.log('router and no clicked item')\n      //     if(this.props.router.query.id === '1'){            \n      //         console.log('did we load', this.props.router.query.id)    \n      //         console.log('did we load', this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title)    \n      //         this.props.onFindItem(this.props.participatoryBudget, this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title);\n      //     }\n      // }\n      // if(this.props.participatoryBudget && this.props.router.query && (this.props.participatoryBudget !== prevProps.participatoryBudget)){            \n      //     console.log('router?')\n      //     if(this.props.router.query.id === '1'){            \n      //         console.log('did we load', this.props.router.query.id)    \n      //         this.props.onFindItem(this.props.participatoryBudget, this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title);\n      //     }else if(this.props.router.query.id === '2'){                \n      //         console.log('did we load', this.props.router.query.id)    \n      //         this.props.onBudgetFilterFromURL(this.props.participatoryBudget, this.props.router.query);            \n      //     }            \n      // }\n      // if((this.props.showDistricts !== prevProps.showDistricts)){\n      //     console.log('[BudgetMap.js] show districts')\n      // }  \n\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      console.log('[BudgetMap.js]', this.props);\n      var markers = [];\n\n      if (this.props.selectedBudgetItems) {\n        this.props.selectedBudgetItems.filter(function (item) {\n          return item.latitude && item.longitude;\n        }).map(function (item, idx) {\n          markers.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_UI_MapMarker_MapMarker__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            center: _this2.props.center,\n            lat: item.latitude,\n            lng: item.longitude,\n            item: Object(_util_translateCategory__WEBPACK_IMPORTED_MODULE_12__[\"translateCategory\"])(item),\n            width: '30px',\n            height: '30px',\n            zoom: _this2.props.zoom,\n            clicked: function clicked() {\n              return _this2.markerClicked({\n                lat: item.latitude,\n                lng: item.longitude\n              }, item);\n            }\n          }, idx, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 30\n          }, _this2));\n        });\n      }\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          height: '87vh',\n          width: '100%'\n        },\n        children: this.props.mapProps ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Map_Map__WEBPACK_IMPORTED_MODULE_13__[\"default\"], _objectSpread(_objectSpread({}, this.props.mapProps), {}, {\n          zoom: this.props.zoom,\n          center: this.props.center,\n          defaultCenter: DEFAULT_CENTER,\n          markers: markers,\n          showDistricts: this.props.showDistricts\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 21\n        }, this) : null\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return BudgetMap;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    currItem: state.participatoryBudget.currItem,\n    participatoryBudget: state.participatoryBudget.participatoryBudget,\n    councilMemberLoading: state.participatoryBudget.councilMemberLoading,\n    error: state.participatoryBudget.error,\n    councilMembers: state.participatoryBudget.councilMembers,\n    districts: state.participatoryBudget.districts,\n    districtsLoading: state.participatoryBudget.districtsLoading,\n    selectedDistricts: state.participatoryBudget.selectedDistricts,\n    loaded: state.participatoryBudget.loaded,\n    showDistricts: state.setMap.showDistricts,\n    mapProps: state.setMap.mapProps,\n    center: state.setMap.center,\n    zoom: state.setMap.zoom,\n    clickedItem: state.setMap.clickedItem,\n    // item: state.setMap.item,\n    selectedBudgetItems: state.setMap.selectedBudgetItems,\n    url: state.setMap.url\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onSetMap: function onSetMap(districts, selectedDistricts, councilMembers, selectedBudgetItems) {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"setMap\"](districts, selectedDistricts, councilMembers, selectedBudgetItems));\n    },\n    onUpdateMap: function onUpdateMap(districts, selectedDistricts, councilMembers, selectedBudgetItems, showDistricts) {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"updateMap\"](districts, selectedDistricts, councilMembers, selectedBudgetItems, showDistricts));\n    },\n    onResetMap: function onResetMap() {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"resetMap\"]());\n    },\n    onZoomMarker: function onZoomMarker(center, item) {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"zoomMarker\"](center, item));\n    },\n    onFindItem: function onFindItem(budget, lat, lng, title) {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"findItem\"](budget, lat, lng, title));\n    },\n    onBudgetFilterFromURL: function onBudgetFilterFromURL(budget, query) {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"budgetFilterFromURL\"](budget, query));\n    },\n    onResetClickedItem: function onResetClickedItem() {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"resetClickedItem\"]());\n    },\n    onResetFindItem: function onResetFindItem() {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"resetFindItem\"]());\n    },\n    onCenter: function onCenter() {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"center\"]());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"connect\"])(mapStateToProps, mapDispatchToProps)(BudgetMap));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9QYXJ0aWNpcGF0b3J5QnVkZ2V0TWFwL0J1ZGdldE1hcC9CdWRnZXRNYXAuanM/MDg2OCJdLCJuYW1lcyI6WyJERUZBVUxUX0NFTlRFUiIsImxhdCIsImxuZyIsIkJ1ZGdldE1hcCIsImZpcnN0UGFnZUxvYWQiLCJjZW50ZXIiLCJpdGVtIiwicHJvcHMiLCJvblpvb21NYXJrZXIiLCJkaXN0cmljdHMiLCJvblNldE1hcCIsInNlbGVjdGVkRGlzdHJpY3RzIiwiY291bmNpbE1lbWJlcnMiLCJzZWxlY3RlZEJ1ZGdldEl0ZW1zIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic3RhdGUiLCJsb2FkZWQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJyb3V0ZXIiLCJxdWVyeSIsImlkIiwidGl0bGUiLCJvbkZpbmRJdGVtIiwicGFydGljaXBhdG9yeUJ1ZGdldCIsIm9uQnVkZ2V0RmlsdGVyRnJvbVVSTCIsIm1hcmtlcnMiLCJmaWx0ZXIiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIm1hcCIsImlkeCIsInB1c2giLCJ0cmFuc2xhdGVDYXRlZ29yeSIsInpvb20iLCJtYXJrZXJDbGlja2VkIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXBQcm9wcyIsInNob3dEaXN0cmljdHMiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjdXJySXRlbSIsImNvdW5jaWxNZW1iZXJMb2FkaW5nIiwiZXJyb3IiLCJkaXN0cmljdHNMb2FkaW5nIiwic2V0TWFwIiwiY2xpY2tlZEl0ZW0iLCJ1cmwiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJvblVwZGF0ZU1hcCIsIm9uUmVzZXRNYXAiLCJidWRnZXQiLCJvblJlc2V0Q2xpY2tlZEl0ZW0iLCJvblJlc2V0RmluZEl0ZW0iLCJvbkNlbnRlciIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBTUhtQixjQUFVLEVBQUUsb0JBQUMrQixNQUFELEVBQVN2RCxHQUFULEVBQWNDLEdBQWQsRUFBbUJzQixLQUFuQjtBQUFBLGFBQTZCNEIsUUFBUSxDQUFDQyw4REFBQSxDQUFpQkcsTUFBakIsRUFBeUJ2RCxHQUF6QixFQUE4QkMsR0FBOUIsRUFBbUNzQixLQUFuQyxDQUFELENBQXJDO0FBQUEsS0FOVDtBQU9IRyx5QkFBcUIsRUFBRSwrQkFBQzZCLE1BQUQsRUFBU2xDLEtBQVQ7QUFBQSxhQUFtQjhCLFFBQVEsQ0FBQ0MseUVBQUEsQ0FBNEJHLE1BQTVCLEVBQW9DbEMsS0FBcEMsQ0FBRCxDQUEzQjtBQUFBLEtBUHBCO0FBU0htQyxzQkFBa0IsRUFBRTtBQUFBLGFBQU1MLFFBQVEsQ0FBQ0Msc0VBQUEsRUFBRCxDQUFkO0FBQUEsS0FUakI7QUFVSEssbUJBQWUsRUFBRTtBQUFBLGFBQU1OLFFBQVEsQ0FBQ0MsbUVBQUEsRUFBRCxDQUFkO0FBQUEsS0FWZDtBQVlITSxZQUFRLEVBQUU7QUFBQSxhQUFNUCxRQUFRLENBQUNDLDREQUFBLEVBQUQsQ0FBZDtBQUFBO0FBWlAsR0FBUDtBQWNILENBZkQ7O0FBaUJlTywwSEFBTyxDQUFDakIsZUFBRCxFQUFrQlEsa0JBQWxCLENBQVAsQ0FBNkNoRCxTQUE3QyxDQUFmIiwiZmlsZSI6Ii4vY29udGFpbmVycy9QYXJ0aWNpcGF0b3J5QnVkZ2V0TWFwL0J1ZGdldE1hcC9CdWRnZXRNYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgTWFwTWFya2VyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvVUkvTWFwTWFya2VyL01hcE1hcmtlcic7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHt0cmFuc2xhdGVDYXRlZ29yeX0gZnJvbSAnLi4vLi4vLi4vdXRpbC90cmFuc2xhdGVDYXRlZ29yeSc7XG5cbmltcG9ydCBNYXAgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9NYXAvTWFwJztcblxuY29uc3QgREVGQVVMVF9DRU5URVIgPSB7IGxhdDogNDAuNjM1LCBsbmc6IC03My45NCB9O1xuXG5jbGFzcyBCdWRnZXRNYXAgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGZpcnN0UGFnZUxvYWQ6IGZhbHNlLFxuICAgIH0gXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpeyAgICAgICAgICAgICAgIFxuICAgICAgICBpZih0aGlzLnByb3BzLmRpc3RyaWN0cyl7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2V0TWFwKHRoaXMucHJvcHMuZGlzdHJpY3RzLCB0aGlzLnByb3BzLnNlbGVjdGVkRGlzdHJpY3RzLCB0aGlzLnByb3BzLmNvdW5jaWxNZW1iZXJzLCB0aGlzLnByb3BzLnNlbGVjdGVkQnVkZ2V0SXRlbXMpOyAgICAgICAgICAgIFxuICAgICAgICB9ICAgICAgICBcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpe1xuICAgICAgICAvL3doZW4gZmlyc3QgbG9hZGVkLCBzZXQgdGhlIG1hcCB1cCBwcm9wZXJseSB0byB0aGUgZnVsbCBtYXAsIGFuZCB3ZSBoYXZlIG5vdyBsb2FkZWRcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuZmlyc3RQYWdlTG9hZCAmJiB0aGlzLnByb3BzLmxvYWRlZCl7ICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dlIGxvYWRlZCBhbmQgdGhlIGZpcnN0IHBhZ2UgaGFzbnQgbG9hZGVkJylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5vblNldE1hcCh0aGlzLnByb3BzLmRpc3RyaWN0cywgdGhpcy5wcm9wcy5zZWxlY3RlZERpc3RyaWN0cywgdGhpcy5wcm9wcy5jb3VuY2lsTWVtYmVycywgdGhpcy5wcm9wcy5zZWxlY3RlZEJ1ZGdldEl0ZW1zKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpcnN0UGFnZUxvYWQ6IHRydWV9KVxuXG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnJvdXRlci5xdWVyeSl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkuaWQgPT09ICcxJyl7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkaWQgd2UgbG9hZCcsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmlkKSAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RpZCB3ZSBsb2FkJywgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkubGF0LCB0aGlzLnByb3BzLnJvdXRlci5xdWVyeS5sbmcsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LnRpdGxlKSAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZpbmRJdGVtKHRoaXMucHJvcHMucGFydGljaXBhdG9yeUJ1ZGdldCwgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkubGF0LCB0aGlzLnByb3BzLnJvdXRlci5xdWVyeS5sbmcsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LnRpdGxlKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnJvdXRlci5xdWVyeS5pZCA9PT0gJzInKXsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkaWQgd2UgbG9hZCcsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmlkKSAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkJ1ZGdldEZpbHRlckZyb21VUkwodGhpcy5wcm9wcy5wYXJ0aWNpcGF0b3J5QnVkZ2V0LCB0aGlzLnByb3BzLnJvdXRlci5xdWVyeSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZigocHJldlByb3BzLnNlbGVjdGVkQnVkZ2V0SXRlbXMgIT09IHRoaXMucHJvcHMuc2VsZWN0ZWRCdWRnZXRJdGVtcykpe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3NlbGVjdGVkIGJ1ZGdldCBpdGVtcyBjaGFuZ2VkJylcbiAgICAgICAgLy8gICAgIC8vIGlmKHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5KXtcbiAgICAgICAgLy8gICAgIC8vICAgICBpZih0aGlzLnByb3BzLnJvdXRlci5xdWVyeS5pZCA9PT0gJycpXG4gICAgICAgIC8vICAgICAvLyB9XG5cbiAgICAgICAgLy8gICAgIC8vIHRoaXMucHJvcHMub25SZXNldE1hcCgpOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgLy8gdGhpcy5wcm9wcy5vblVwZGF0ZU1hcCh0aGlzLnByb3BzLmRpc3RyaWN0cywgdGhpcy5wcm9wcy5zZWxlY3RlZERpc3RyaWN0cywgdGhpcy5wcm9wcy5jb3VuY2lsTWVtYmVycywgdGhpcy5wcm9wcy5zZWxlY3RlZEJ1ZGdldEl0ZW1zKTsgICAgIFxuICAgICAgICAvLyAgICAgLy8gdGhpcy5wcm9wcy5vblJlc2V0Q2xpY2tlZEl0ZW0oKTtcbiAgICAgICAgLy8gICAgIC8vIHRoaXMucHJvcHMub25SZXNldEZpbmRJdGVtKCk7XG4gICAgICAgIC8vICAgICAvLyB0aGlzLnByb3BzLm9uQ2VudGVyKCk7ICAgICAgICAgICAgXG4gICAgICAgIC8vIH0gICAgXG5cbiAgICAgICAgLy8gaWYodGhpcy5wcm9wcy5wYXJ0aWNpcGF0b3J5QnVkZ2V0ICYmIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5ICYmICF0aGlzLnByb3BzLmNsaWNrZWRJdGVtKXtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdyb3V0ZXIgYW5kIG5vIGNsaWNrZWQgaXRlbScpXG5cbiAgICAgICAgLy8gICAgIGlmKHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmlkID09PSAnMScpeyAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdkaWQgd2UgbG9hZCcsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmlkKSAgICBcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnZGlkIHdlIGxvYWQnLCB0aGlzLnByb3BzLnJvdXRlci5xdWVyeS5sYXQsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmxuZywgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkudGl0bGUpICAgIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMucHJvcHMub25GaW5kSXRlbSh0aGlzLnByb3BzLnBhcnRpY2lwYXRvcnlCdWRnZXQsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmxhdCwgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkubG5nLCB0aGlzLnByb3BzLnJvdXRlci5xdWVyeS50aXRsZSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBpZih0aGlzLnByb3BzLnBhcnRpY2lwYXRvcnlCdWRnZXQgJiYgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkgJiYgKHRoaXMucHJvcHMucGFydGljaXBhdG9yeUJ1ZGdldCAhPT0gcHJldlByb3BzLnBhcnRpY2lwYXRvcnlCdWRnZXQpKXsgICAgICAgICAgICBcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdyb3V0ZXI/JylcbiAgICAgICAgLy8gICAgIGlmKHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmlkID09PSAnMScpeyAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdkaWQgd2UgbG9hZCcsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmlkKSAgICBcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnByb3BzLm9uRmluZEl0ZW0odGhpcy5wcm9wcy5wYXJ0aWNpcGF0b3J5QnVkZ2V0LCB0aGlzLnByb3BzLnJvdXRlci5xdWVyeS5sYXQsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmxuZywgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkudGl0bGUpO1xuICAgICAgICAvLyAgICAgfWVsc2UgaWYodGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkuaWQgPT09ICcyJyl7ICAgICAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdkaWQgd2UgbG9hZCcsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmlkKSAgICBcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnByb3BzLm9uQnVkZ2V0RmlsdGVyRnJvbVVSTCh0aGlzLnByb3BzLnBhcnRpY2lwYXRvcnlCdWRnZXQsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5KTsgICAgICAgICAgICBcbiAgICAgICAgLy8gICAgIH0gICAgICAgICAgICBcbiAgICAgICAgLy8gfVxuICAgICAgICBcbiAgICAgICAgLy8gaWYoKHRoaXMucHJvcHMuc2hvd0Rpc3RyaWN0cyAhPT0gcHJldlByb3BzLnNob3dEaXN0cmljdHMpKXtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdbQnVkZ2V0TWFwLmpzXSBzaG93IGRpc3RyaWN0cycpXG5cbiAgICAgICAgLy8gfSAgXG4gICAgfVxuXG4gICAgbWFya2VyQ2xpY2tlZCA9IChjZW50ZXIsIGl0ZW0pID0+IHsgICAgICAgIFxuICAgICAgICB0aGlzLnByb3BzLm9uWm9vbU1hcmtlcihjZW50ZXIsIGl0ZW0pOyAgICAgICAgXG4gICAgICAgIC8vIHRoaXMucHJvcHMuaGlzdG9yeS5yZXBsYWNlKHRoaXMucHJvcHMudXJsKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXsgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdbQnVkZ2V0TWFwLmpzXScsIHRoaXMucHJvcHMpXG5cbiAgICAgICAgbGV0IG1hcmtlcnMgPSBbXTsgICAgXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2VsZWN0ZWRCdWRnZXRJdGVtcyl7ICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkQnVkZ2V0SXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5sYXRpdHVkZSAmJiBpdGVtLmxvbmdpdHVkZSkubWFwKChpdGVtLGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIG1hcmtlcnMucHVzaCg8TWFwTWFya2VyIFxuICAgICAgICAgICAgICAgICAgICBjZW50ZXI9e3RoaXMucHJvcHMuY2VudGVyfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH0gXG4gICAgICAgICAgICAgICAgICAgIGxhdD17aXRlbS5sYXRpdHVkZX0gXG4gICAgICAgICAgICAgICAgICAgIGxuZz17aXRlbS5sb25naXR1ZGV9IFxuICAgICAgICAgICAgICAgICAgICBpdGVtPXt0cmFuc2xhdGVDYXRlZ29yeShpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyczMHB4J31cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsnMzBweCd9XG4gICAgICAgICAgICAgICAgICAgIHpvb209e3RoaXMucHJvcHMuem9vbX1cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tlZD17KCkgPT4gdGhpcy5tYXJrZXJDbGlja2VkKHsgbGF0OiBpdGVtLmxhdGl0dWRlLCBsbmc6IGl0ZW0ubG9uZ2l0dWRlIH0sIGl0ZW0pfS8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gICAgICAgICAgICBcblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzg3dmgnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm1hcFByb3BzID8gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8TWFwIFxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHMubWFwUHJvcHN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb209e3RoaXMucHJvcHMuem9vbX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyPXt0aGlzLnByb3BzLmNlbnRlcn0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENlbnRlcj17REVGQVVMVF9DRU5URVJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2Vycz17bWFya2Vyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93RGlzdHJpY3RzPXt0aGlzLnByb3BzLnNob3dEaXN0cmljdHN9Lz4gXG4gICAgICAgICAgICAgICAgICAgIDpudWxsfVxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3Vyckl0ZW06IHN0YXRlLnBhcnRpY2lwYXRvcnlCdWRnZXQuY3Vyckl0ZW0sXG4gICAgICAgIHBhcnRpY2lwYXRvcnlCdWRnZXQ6IHN0YXRlLnBhcnRpY2lwYXRvcnlCdWRnZXQucGFydGljaXBhdG9yeUJ1ZGdldCwgICBcbiAgICAgICAgY291bmNpbE1lbWJlckxvYWRpbmc6IHN0YXRlLnBhcnRpY2lwYXRvcnlCdWRnZXQuY291bmNpbE1lbWJlckxvYWRpbmcsXG4gICAgICAgIGVycm9yOiBzdGF0ZS5wYXJ0aWNpcGF0b3J5QnVkZ2V0LmVycm9yLFxuICAgICAgICBjb3VuY2lsTWVtYmVyczogc3RhdGUucGFydGljaXBhdG9yeUJ1ZGdldC5jb3VuY2lsTWVtYmVycyxcbiAgICAgICAgZGlzdHJpY3RzOiBzdGF0ZS5wYXJ0aWNpcGF0b3J5QnVkZ2V0LmRpc3RyaWN0cyxcbiAgICAgICAgZGlzdHJpY3RzTG9hZGluZzogc3RhdGUucGFydGljaXBhdG9yeUJ1ZGdldC5kaXN0cmljdHNMb2FkaW5nLCAgIFxuICAgICAgICBzZWxlY3RlZERpc3RyaWN0czogc3RhdGUucGFydGljaXBhdG9yeUJ1ZGdldC5zZWxlY3RlZERpc3RyaWN0cywgICBcbiAgICAgICAgbG9hZGVkOiBzdGF0ZS5wYXJ0aWNpcGF0b3J5QnVkZ2V0LmxvYWRlZCxcbiAgICAgICAgXG4gICAgICAgIHNob3dEaXN0cmljdHM6IHN0YXRlLnNldE1hcC5zaG93RGlzdHJpY3RzLFxuICAgICAgICBtYXBQcm9wczogc3RhdGUuc2V0TWFwLm1hcFByb3BzLCAgICAgICAgXG4gICAgICAgIGNlbnRlcjogc3RhdGUuc2V0TWFwLmNlbnRlcixcbiAgICAgICAgem9vbTogc3RhdGUuc2V0TWFwLnpvb20sXG4gICAgICAgIGNsaWNrZWRJdGVtOiBzdGF0ZS5zZXRNYXAuY2xpY2tlZEl0ZW0sXG4gICAgICAgIC8vIGl0ZW06IHN0YXRlLnNldE1hcC5pdGVtLFxuICAgICAgICBzZWxlY3RlZEJ1ZGdldEl0ZW1zOiBzdGF0ZS5zZXRNYXAuc2VsZWN0ZWRCdWRnZXRJdGVtcyxcblxuICAgICAgICB1cmw6IHN0YXRlLnNldE1hcC51cmwsICAgICAgICBcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4geyAgICAgICAgXG4gICAgICAgIG9uU2V0TWFwOiAoZGlzdHJpY3RzLCBzZWxlY3RlZERpc3RyaWN0cywgY291bmNpbE1lbWJlcnMsIHNlbGVjdGVkQnVkZ2V0SXRlbXMpID0+IGRpc3BhdGNoKGFjdGlvbnMuc2V0TWFwKGRpc3RyaWN0cywgc2VsZWN0ZWREaXN0cmljdHMsIGNvdW5jaWxNZW1iZXJzLCBzZWxlY3RlZEJ1ZGdldEl0ZW1zKSksICBcbiAgICAgICAgb25VcGRhdGVNYXA6IChkaXN0cmljdHMsIHNlbGVjdGVkRGlzdHJpY3RzLCBjb3VuY2lsTWVtYmVycywgc2VsZWN0ZWRCdWRnZXRJdGVtcywgc2hvd0Rpc3RyaWN0cykgPT4gZGlzcGF0Y2goYWN0aW9ucy51cGRhdGVNYXAoZGlzdHJpY3RzLCBzZWxlY3RlZERpc3RyaWN0cywgY291bmNpbE1lbWJlcnMsIHNlbGVjdGVkQnVkZ2V0SXRlbXMsIHNob3dEaXN0cmljdHMpKSwgIFxuICAgICAgICBvblJlc2V0TWFwOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLnJlc2V0TWFwKCkpLFxuICAgICAgICBvblpvb21NYXJrZXI6IChjZW50ZXIsIGl0ZW0pID0+IGRpc3BhdGNoKGFjdGlvbnMuem9vbU1hcmtlcihjZW50ZXIsIGl0ZW0pKSwgICBcbiAgICAgICAgXG4gICAgICAgIG9uRmluZEl0ZW06IChidWRnZXQsIGxhdCwgbG5nLCB0aXRsZSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5maW5kSXRlbShidWRnZXQsIGxhdCwgbG5nLCB0aXRsZSkpLFxuICAgICAgICBvbkJ1ZGdldEZpbHRlckZyb21VUkw6IChidWRnZXQsIHF1ZXJ5KSA9PiBkaXNwYXRjaChhY3Rpb25zLmJ1ZGdldEZpbHRlckZyb21VUkwoYnVkZ2V0LCBxdWVyeSkpLFxuXG4gICAgICAgIG9uUmVzZXRDbGlja2VkSXRlbTogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5yZXNldENsaWNrZWRJdGVtKCkpLFxuICAgICAgICBvblJlc2V0RmluZEl0ZW06ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucmVzZXRGaW5kSXRlbSgpKSxcblxuICAgICAgICBvbkNlbnRlcjogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5jZW50ZXIoKSksXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShCdWRnZXRNYXApOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./containers/ParticipatoryBudgetMap/BudgetMap/BudgetMap.js\n");

/***/ })

})