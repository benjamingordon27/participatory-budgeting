webpackHotUpdate_N_E("pages/map",{

/***/ "./containers/ParticipatoryBudgetMap/BudgetMap/BudgetMap.js":
/*!******************************************************************!*\
  !*** ./containers/ParticipatoryBudgetMap/BudgetMap/BudgetMap.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_UI_MapMarker_MapMarker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/UI/MapMarker/MapMarker */ \"./components/UI/MapMarker/MapMarker.js\");\n/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/actions/index */ \"./store/actions/index.js\");\n/* harmony import */ var _util_translateCategory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../util/translateCategory */ \"./util/translateCategory.js\");\n/* harmony import */ var _components_Map_Map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/Map/Map */ \"./components/Map/Map.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/benjamingordon/Documents/civic-alley-visualization/data-vis/containers/ParticipatoryBudgetMap/BudgetMap/BudgetMap.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar DEFAULT_CENTER = {\n  lat: 40.635,\n  lng: -73.94\n};\n\nvar BudgetMap = /*#__PURE__*/function (_Component) {\n  Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(BudgetMap, _Component);\n\n  var _super = _createSuper(BudgetMap);\n\n  function BudgetMap() {\n    var _this;\n\n    Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, BudgetMap);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"state\", {\n      firstPageLoad: false\n    });\n\n    Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"markerClicked\", function (center, item) {\n      _this.props.onZoomMarker(center, item); // this.props.history.replace(this.props.url);\n\n    });\n\n    return _this;\n  }\n\n  Object(_Users_benjamingordon_Documents_civic_alley_visualization_data_vis_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(BudgetMap, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (this.props.districts) {\n        this.props.onSetMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);\n      }\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps, prevState) {\n      //when first loaded, set the map up properly to the full map, and we have now loaded\n      if (!this.state.firstPageLoad && this.props.loaded) {\n        console.log('we loaded and the first page hasnt loaded'); // this.props.onSetMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);\n\n        this.setState({\n          firstPageLoad: true\n        });\n\n        if (this.props.router.query) {\n          if (this.props.router.query.id === '1') {\n            console.log('did we load', this.props.router.query.id);\n            console.log('did we load', this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title);\n            this.props.onFindItem(this.props.participatoryBudget, this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title);\n          }\n        }\n      } // if((prevProps.selectedBudgetItems !== this.props.selectedBudgetItems)){\n      //     console.log('selected budget items changed')\n      //     // if(this.props.router.query){\n      //     //     if(this.props.router.query.id === '')\n      //     // }\n      //     // this.props.onResetMap();                        \n      //     // this.props.onUpdateMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);     \n      //     // this.props.onResetClickedItem();\n      //     // this.props.onResetFindItem();\n      //     // this.props.onCenter();            \n      // }    \n      // if(this.props.participatoryBudget && this.props.router.query && !this.props.clickedItem){\n      //     console.log('router and no clicked item')\n      //     if(this.props.router.query.id === '1'){            \n      //         console.log('did we load', this.props.router.query.id)    \n      //         console.log('did we load', this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title)    \n      //         this.props.onFindItem(this.props.participatoryBudget, this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title);\n      //     }\n      // }\n      // if(this.props.participatoryBudget && this.props.router.query && (this.props.participatoryBudget !== prevProps.participatoryBudget)){            \n      //     console.log('router?')\n      //     if(this.props.router.query.id === '1'){            \n      //         console.log('did we load', this.props.router.query.id)    \n      //         this.props.onFindItem(this.props.participatoryBudget, this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title);\n      //     }else if(this.props.router.query.id === '2'){                \n      //         console.log('did we load', this.props.router.query.id)    \n      //         this.props.onBudgetFilterFromURL(this.props.participatoryBudget, this.props.router.query);            \n      //     }            \n      // }\n      // if((this.props.showDistricts !== prevProps.showDistricts)){\n      //     console.log('[BudgetMap.js] show districts')\n      // }  \n\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      console.log('[BudgetMap.js]', this.props);\n      console.log('center:', this.props.center);\n      console.log('default center:', {\n        lat: 40.635,\n        lng: -73.94\n      });\n      var markers = [];\n\n      if (this.props.selectedBudgetItems) {\n        console.log('huh?', this.props.center);\n        this.props.selectedBudgetItems.filter(function (item) {\n          return item.latitude && item.longitude;\n        }).map(function (item, idx) {\n          markers.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_UI_MapMarker_MapMarker__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            center: _this2.props.center,\n            lat: item.latitude,\n            lng: item.longitude,\n            item: Object(_util_translateCategory__WEBPACK_IMPORTED_MODULE_12__[\"translateCategory\"])(item),\n            width: '30px',\n            height: '30px',\n            zoom: _this2.props.zoom ////figure out how to change on zoom change, might have to be rendered not in an array in component but in render itself\n            ,\n            clicked: function clicked() {\n              return _this2.markerClicked({\n                lat: item.latitude,\n                lng: item.longitude\n              }, item);\n            }\n          }, idx, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 30\n          }, _this2));\n        });\n      }\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          height: '87vh',\n          width: '100%'\n        },\n        children: this.props.mapProps ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Map_Map__WEBPACK_IMPORTED_MODULE_13__[\"default\"], _objectSpread(_objectSpread({}, this.props.mapProps), {}, {\n          zoom: this.props.zoom,\n          center: this.props.center,\n          defaultCenter: DEFAULT_CENTER,\n          markers: markers,\n          showDistricts: this.props.showDistricts\n        }), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 21\n        }, this) : null\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return BudgetMap;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    currItem: state.participatoryBudget.currItem,\n    participatoryBudget: state.participatoryBudget.participatoryBudget,\n    councilMemberLoading: state.participatoryBudget.councilMemberLoading,\n    error: state.participatoryBudget.error,\n    councilMembers: state.participatoryBudget.councilMembers,\n    districts: state.participatoryBudget.districts,\n    districtsLoading: state.participatoryBudget.districtsLoading,\n    selectedDistricts: state.participatoryBudget.selectedDistricts,\n    loaded: state.participatoryBudget.loaded,\n    showDistricts: state.setMap.showDistricts,\n    mapProps: state.setMap.mapProps,\n    center: state.setMap.center,\n    zoom: state.setMap.zoom,\n    clickedItem: state.setMap.clickedItem,\n    // item: state.setMap.item,\n    selectedBudgetItems: state.setMap.selectedBudgetItems,\n    url: state.setMap.url\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onSetMap: function onSetMap(districts, selectedDistricts, councilMembers, selectedBudgetItems) {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"setMap\"](districts, selectedDistricts, councilMembers, selectedBudgetItems));\n    },\n    onUpdateMap: function onUpdateMap(districts, selectedDistricts, councilMembers, selectedBudgetItems, showDistricts) {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"updateMap\"](districts, selectedDistricts, councilMembers, selectedBudgetItems, showDistricts));\n    },\n    onResetMap: function onResetMap() {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"resetMap\"]());\n    },\n    onZoomMarker: function onZoomMarker(center, item) {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"zoomMarker\"](center, item));\n    },\n    onFindItem: function onFindItem(budget, lat, lng, title) {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"findItem\"](budget, lat, lng, title));\n    },\n    onBudgetFilterFromURL: function onBudgetFilterFromURL(budget, query) {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"budgetFilterFromURL\"](budget, query));\n    },\n    onResetClickedItem: function onResetClickedItem() {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"resetClickedItem\"]());\n    },\n    onResetFindItem: function onResetFindItem() {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"resetFindItem\"]());\n    },\n    onCenter: function onCenter() {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_11__[\"center\"]());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"connect\"])(mapStateToProps, mapDispatchToProps)(BudgetMap));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9QYXJ0aWNpcGF0b3J5QnVkZ2V0TWFwL0J1ZGdldE1hcC9CdWRnZXRNYXAuanM/MDg2OCJdLCJuYW1lcyI6WyJERUZBVUxUX0NFTlRFUiIsImxhdCIsImxuZyIsIkJ1ZGdldE1hcCIsImZpcnN0UGFnZUxvYWQiLCJjZW50ZXIiLCJpdGVtIiwicHJvcHMiLCJvblpvb21NYXJrZXIiLCJkaXN0cmljdHMiLCJvblNldE1hcCIsInNlbGVjdGVkRGlzdHJpY3RzIiwiY291bmNpbE1lbWJlcnMiLCJzZWxlY3RlZEJ1ZGdldEl0ZW1zIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwic3RhdGUiLCJsb2FkZWQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJyb3V0ZXIiLCJxdWVyeSIsImlkIiwidGl0bGUiLCJvbkZpbmRJdGVtIiwicGFydGljaXBhdG9yeUJ1ZGdldCIsIm1hcmtlcnMiLCJmaWx0ZXIiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIm1hcCIsImlkeCIsInB1c2giLCJ0cmFuc2xhdGVDYXRlZ29yeSIsInpvb20iLCJtYXJrZXJDbGlja2VkIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXBQcm9wcyIsInNob3dEaXN0cmljdHMiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjdXJySXRlbSIsImNvdW5jaWxNZW1iZXJMb2FkaW5nIiwiZXJyb3IiLCJkaXN0cmljdHNMb2FkaW5nIiwic2V0TWFwIiwiY2xpY2tlZEl0ZW0iLCJ1cmwiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJvblVwZGF0ZU1hcCIsIm9uUmVzZXRNYXAiLCJidWRnZXQiLCJvbkJ1ZGdldEZpbHRlckZyb21VUkwiLCJvblJlc2V0Q2xpY2tlZEl0ZW0iLCJvblJlc2V0RmluZEl0ZW0iLCJvbkNlbnRlciIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QW1Cc0IsS0FBbkI7QUFBQSxhQUE2QjJCLFFBQVEsQ0FBQ0MsOERBQUEsQ0FBaUJHLE1BQWpCLEVBQXlCdEQsR0FBekIsRUFBOEJDLEdBQTlCLEVBQW1Dc0IsS0FBbkMsQ0FBRCxDQUFyQztBQUFBLEtBTlQ7QUFPSGdDLHlCQUFxQixFQUFFLCtCQUFDRCxNQUFELEVBQVNqQyxLQUFUO0FBQUEsYUFBbUI2QixRQUFRLENBQUNDLHlFQUFBLENBQTRCRyxNQUE1QixFQUFvQ2pDLEtBQXBDLENBQUQsQ0FBM0I7QUFBQSxLQVBwQjtBQVNIbUMsc0JBQWtCLEVBQUU7QUFBQSxhQUFNTixRQUFRLENBQUNDLHNFQUFBLEVBQUQsQ0FBZDtBQUFBLEtBVGpCO0FBVUhNLG1CQUFlLEVBQUU7QUFBQSxhQUFNUCxRQUFRLENBQUNDLG1FQUFBLEVBQUQsQ0FBZDtBQUFBLEtBVmQ7QUFZSE8sWUFBUSxFQUFFO0FBQUEsYUFBTVIsUUFBUSxDQUFDQyw0REFBQSxFQUFELENBQWQ7QUFBQTtBQVpQLEdBQVA7QUFjSCxDQWZEOztBQWlCZVEsMEhBQU8sQ0FBQ2xCLGVBQUQsRUFBa0JRLGtCQUFsQixDQUFQLENBQTZDL0MsU0FBN0MsQ0FBZiIsImZpbGUiOiIuL2NvbnRhaW5lcnMvUGFydGljaXBhdG9yeUJ1ZGdldE1hcC9CdWRnZXRNYXAvQnVkZ2V0TWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IE1hcE1hcmtlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1VJL01hcE1hcmtlci9NYXBNYXJrZXInO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7dHJhbnNsYXRlQ2F0ZWdvcnl9IGZyb20gJy4uLy4uLy4uL3V0aWwvdHJhbnNsYXRlQ2F0ZWdvcnknO1xuXG5pbXBvcnQgTWFwIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTWFwL01hcCc7XG5cbmNvbnN0IERFRkFVTFRfQ0VOVEVSID0geyBsYXQ6IDQwLjYzNSwgbG5nOiAtNzMuOTQgfTtcblxuY2xhc3MgQnVkZ2V0TWFwIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIHN0YXRlID0ge1xuICAgICAgICBmaXJzdFBhZ2VMb2FkOiBmYWxzZSxcbiAgICB9IFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXsgICAgICAgICAgICAgICBcbiAgICAgICAgaWYodGhpcy5wcm9wcy5kaXN0cmljdHMpe1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNldE1hcCh0aGlzLnByb3BzLmRpc3RyaWN0cywgdGhpcy5wcm9wcy5zZWxlY3RlZERpc3RyaWN0cywgdGhpcy5wcm9wcy5jb3VuY2lsTWVtYmVycywgdGhpcy5wcm9wcy5zZWxlY3RlZEJ1ZGdldEl0ZW1zKTsgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSl7XG4gICAgICAgIC8vd2hlbiBmaXJzdCBsb2FkZWQsIHNldCB0aGUgbWFwIHVwIHByb3Blcmx5IHRvIHRoZSBmdWxsIG1hcCwgYW5kIHdlIGhhdmUgbm93IGxvYWRlZFxuICAgICAgICBpZighdGhpcy5zdGF0ZS5maXJzdFBhZ2VMb2FkICYmIHRoaXMucHJvcHMubG9hZGVkKXsgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd2UgbG9hZGVkIGFuZCB0aGUgZmlyc3QgcGFnZSBoYXNudCBsb2FkZWQnKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyB0aGlzLnByb3BzLm9uU2V0TWFwKHRoaXMucHJvcHMuZGlzdHJpY3RzLCB0aGlzLnByb3BzLnNlbGVjdGVkRGlzdHJpY3RzLCB0aGlzLnByb3BzLmNvdW5jaWxNZW1iZXJzLCB0aGlzLnByb3BzLnNlbGVjdGVkQnVkZ2V0SXRlbXMpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zmlyc3RQYWdlTG9hZDogdHJ1ZX0pXG5cbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5KXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLnJvdXRlci5xdWVyeS5pZCA9PT0gJzEnKXsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RpZCB3ZSBsb2FkJywgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkuaWQpICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGlkIHdlIGxvYWQnLCB0aGlzLnByb3BzLnJvdXRlci5xdWVyeS5sYXQsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmxuZywgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkudGl0bGUpICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRmluZEl0ZW0odGhpcy5wcm9wcy5wYXJ0aWNpcGF0b3J5QnVkZ2V0LCB0aGlzLnByb3BzLnJvdXRlci5xdWVyeS5sYXQsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmxuZywgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkudGl0bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmKChwcmV2UHJvcHMuc2VsZWN0ZWRCdWRnZXRJdGVtcyAhPT0gdGhpcy5wcm9wcy5zZWxlY3RlZEJ1ZGdldEl0ZW1zKSl7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgYnVkZ2V0IGl0ZW1zIGNoYW5nZWQnKVxuICAgICAgICAvLyAgICAgLy8gaWYodGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkpe1xuICAgICAgICAvLyAgICAgLy8gICAgIGlmKHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmlkID09PSAnJylcbiAgICAgICAgLy8gICAgIC8vIH1cblxuICAgICAgICAvLyAgICAgLy8gdGhpcy5wcm9wcy5vblJlc2V0TWFwKCk7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICAvLyB0aGlzLnByb3BzLm9uVXBkYXRlTWFwKHRoaXMucHJvcHMuZGlzdHJpY3RzLCB0aGlzLnByb3BzLnNlbGVjdGVkRGlzdHJpY3RzLCB0aGlzLnByb3BzLmNvdW5jaWxNZW1iZXJzLCB0aGlzLnByb3BzLnNlbGVjdGVkQnVkZ2V0SXRlbXMpOyAgICAgXG4gICAgICAgIC8vICAgICAvLyB0aGlzLnByb3BzLm9uUmVzZXRDbGlja2VkSXRlbSgpO1xuICAgICAgICAvLyAgICAgLy8gdGhpcy5wcm9wcy5vblJlc2V0RmluZEl0ZW0oKTtcbiAgICAgICAgLy8gICAgIC8vIHRoaXMucHJvcHMub25DZW50ZXIoKTsgICAgICAgICAgICBcbiAgICAgICAgLy8gfSAgICBcblxuICAgICAgICAvLyBpZih0aGlzLnByb3BzLnBhcnRpY2lwYXRvcnlCdWRnZXQgJiYgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkgJiYgIXRoaXMucHJvcHMuY2xpY2tlZEl0ZW0pe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3JvdXRlciBhbmQgbm8gY2xpY2tlZCBpdGVtJylcblxuICAgICAgICAvLyAgICAgaWYodGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkuaWQgPT09ICcxJyl7ICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2RpZCB3ZSBsb2FkJywgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkuaWQpICAgIFxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdkaWQgd2UgbG9hZCcsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmxhdCwgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkubG5nLCB0aGlzLnByb3BzLnJvdXRlci5xdWVyeS50aXRsZSkgICAgXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wcm9wcy5vbkZpbmRJdGVtKHRoaXMucHJvcHMucGFydGljaXBhdG9yeUJ1ZGdldCwgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkubGF0LCB0aGlzLnByb3BzLnJvdXRlci5xdWVyeS5sbmcsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LnRpdGxlKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGlmKHRoaXMucHJvcHMucGFydGljaXBhdG9yeUJ1ZGdldCAmJiB0aGlzLnByb3BzLnJvdXRlci5xdWVyeSAmJiAodGhpcy5wcm9wcy5wYXJ0aWNpcGF0b3J5QnVkZ2V0ICE9PSBwcmV2UHJvcHMucGFydGljaXBhdG9yeUJ1ZGdldCkpeyAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3JvdXRlcj8nKVxuICAgICAgICAvLyAgICAgaWYodGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkuaWQgPT09ICcxJyl7ICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2RpZCB3ZSBsb2FkJywgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkuaWQpICAgIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMucHJvcHMub25GaW5kSXRlbSh0aGlzLnByb3BzLnBhcnRpY2lwYXRvcnlCdWRnZXQsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5LmxhdCwgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkubG5nLCB0aGlzLnByb3BzLnJvdXRlci5xdWVyeS50aXRsZSk7XG4gICAgICAgIC8vICAgICB9ZWxzZSBpZih0aGlzLnByb3BzLnJvdXRlci5xdWVyeS5pZCA9PT0gJzInKXsgICAgICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2RpZCB3ZSBsb2FkJywgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkuaWQpICAgIFxuICAgICAgICAvLyAgICAgICAgIHRoaXMucHJvcHMub25CdWRnZXRGaWx0ZXJGcm9tVVJMKHRoaXMucHJvcHMucGFydGljaXBhdG9yeUJ1ZGdldCwgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkpOyAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgICAgICAvLyBpZigodGhpcy5wcm9wcy5zaG93RGlzdHJpY3RzICE9PSBwcmV2UHJvcHMuc2hvd0Rpc3RyaWN0cykpe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ1tCdWRnZXRNYXAuanNdIHNob3cgZGlzdHJpY3RzJylcblxuICAgICAgICAvLyB9ICBcbiAgICB9XG5cbiAgICBtYXJrZXJDbGlja2VkID0gKGNlbnRlciwgaXRlbSkgPT4geyAgICAgICAgXG4gICAgICAgIHRoaXMucHJvcHMub25ab29tTWFya2VyKGNlbnRlciwgaXRlbSk7ICAgICAgICBcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnJlcGxhY2UodGhpcy5wcm9wcy51cmwpO1xuICAgIH1cblxuICAgIHJlbmRlcigpeyAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1tCdWRnZXRNYXAuanNdJywgdGhpcy5wcm9wcylcbiAgICAgICAgY29uc29sZS5sb2coJ2NlbnRlcjonLCB0aGlzLnByb3BzLmNlbnRlcilcbiAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQgY2VudGVyOicsIHsgbGF0OiA0MC42MzUsIGxuZzogLTczLjk0IH0pXG5cbiAgICAgICAgbGV0IG1hcmtlcnMgPSBbXTsgICAgXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc2VsZWN0ZWRCdWRnZXRJdGVtcyl7ICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaHVoPycsIHRoaXMucHJvcHMuY2VudGVyKVxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkQnVkZ2V0SXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5sYXRpdHVkZSAmJiBpdGVtLmxvbmdpdHVkZSkubWFwKChpdGVtLGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIG1hcmtlcnMucHVzaCg8TWFwTWFya2VyIFxuICAgICAgICAgICAgICAgICAgICBjZW50ZXI9e3RoaXMucHJvcHMuY2VudGVyfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH0gXG4gICAgICAgICAgICAgICAgICAgIGxhdD17aXRlbS5sYXRpdHVkZX0gXG4gICAgICAgICAgICAgICAgICAgIGxuZz17aXRlbS5sb25naXR1ZGV9IFxuICAgICAgICAgICAgICAgICAgICBpdGVtPXt0cmFuc2xhdGVDYXRlZ29yeShpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyczMHB4J31cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsnMzBweCd9XG4gICAgICAgICAgICAgICAgICAgIHpvb209e3RoaXMucHJvcHMuem9vbX0gLy8vL2ZpZ3VyZSBvdXQgaG93IHRvIGNoYW5nZSBvbiB6b29tIGNoYW5nZSwgbWlnaHQgaGF2ZSB0byBiZSByZW5kZXJlZCBub3QgaW4gYW4gYXJyYXkgaW4gY29tcG9uZW50IGJ1dCBpbiByZW5kZXIgaXRzZWxmXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrZWQ9eygpID0+IHRoaXMubWFya2VyQ2xpY2tlZCh7IGxhdDogaXRlbS5sYXRpdHVkZSwgbG5nOiBpdGVtLmxvbmdpdHVkZSB9LCBpdGVtKX0vPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9ICAgICAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc4N3ZoJywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5tYXBQcm9wcyA/ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPE1hcCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLm1hcFByb3BzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6b29tPXt0aGlzLnByb3BzLnpvb219IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcj17dGhpcy5wcm9wcy5jZW50ZXJ9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDZW50ZXI9e0RFRkFVTFRfQ0VOVEVSfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlcnM9e21hcmtlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Rpc3RyaWN0cz17dGhpcy5wcm9wcy5zaG93RGlzdHJpY3RzfS8+IFxuICAgICAgICAgICAgICAgICAgICA6bnVsbH1cbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIFxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJJdGVtOiBzdGF0ZS5wYXJ0aWNpcGF0b3J5QnVkZ2V0LmN1cnJJdGVtLFxuICAgICAgICBwYXJ0aWNpcGF0b3J5QnVkZ2V0OiBzdGF0ZS5wYXJ0aWNpcGF0b3J5QnVkZ2V0LnBhcnRpY2lwYXRvcnlCdWRnZXQsICAgXG4gICAgICAgIGNvdW5jaWxNZW1iZXJMb2FkaW5nOiBzdGF0ZS5wYXJ0aWNpcGF0b3J5QnVkZ2V0LmNvdW5jaWxNZW1iZXJMb2FkaW5nLFxuICAgICAgICBlcnJvcjogc3RhdGUucGFydGljaXBhdG9yeUJ1ZGdldC5lcnJvcixcbiAgICAgICAgY291bmNpbE1lbWJlcnM6IHN0YXRlLnBhcnRpY2lwYXRvcnlCdWRnZXQuY291bmNpbE1lbWJlcnMsXG4gICAgICAgIGRpc3RyaWN0czogc3RhdGUucGFydGljaXBhdG9yeUJ1ZGdldC5kaXN0cmljdHMsXG4gICAgICAgIGRpc3RyaWN0c0xvYWRpbmc6IHN0YXRlLnBhcnRpY2lwYXRvcnlCdWRnZXQuZGlzdHJpY3RzTG9hZGluZywgICBcbiAgICAgICAgc2VsZWN0ZWREaXN0cmljdHM6IHN0YXRlLnBhcnRpY2lwYXRvcnlCdWRnZXQuc2VsZWN0ZWREaXN0cmljdHMsICAgXG4gICAgICAgIGxvYWRlZDogc3RhdGUucGFydGljaXBhdG9yeUJ1ZGdldC5sb2FkZWQsXG4gICAgICAgIFxuICAgICAgICBzaG93RGlzdHJpY3RzOiBzdGF0ZS5zZXRNYXAuc2hvd0Rpc3RyaWN0cyxcbiAgICAgICAgbWFwUHJvcHM6IHN0YXRlLnNldE1hcC5tYXBQcm9wcywgICAgICAgIFxuICAgICAgICBjZW50ZXI6IHN0YXRlLnNldE1hcC5jZW50ZXIsXG4gICAgICAgIHpvb206IHN0YXRlLnNldE1hcC56b29tLFxuICAgICAgICBjbGlja2VkSXRlbTogc3RhdGUuc2V0TWFwLmNsaWNrZWRJdGVtLFxuICAgICAgICAvLyBpdGVtOiBzdGF0ZS5zZXRNYXAuaXRlbSxcbiAgICAgICAgc2VsZWN0ZWRCdWRnZXRJdGVtczogc3RhdGUuc2V0TWFwLnNlbGVjdGVkQnVkZ2V0SXRlbXMsXG5cbiAgICAgICAgdXJsOiBzdGF0ZS5zZXRNYXAudXJsLCAgICAgICAgXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHsgICAgICAgIFxuICAgICAgICBvblNldE1hcDogKGRpc3RyaWN0cywgc2VsZWN0ZWREaXN0cmljdHMsIGNvdW5jaWxNZW1iZXJzLCBzZWxlY3RlZEJ1ZGdldEl0ZW1zKSA9PiBkaXNwYXRjaChhY3Rpb25zLnNldE1hcChkaXN0cmljdHMsIHNlbGVjdGVkRGlzdHJpY3RzLCBjb3VuY2lsTWVtYmVycywgc2VsZWN0ZWRCdWRnZXRJdGVtcykpLCAgXG4gICAgICAgIG9uVXBkYXRlTWFwOiAoZGlzdHJpY3RzLCBzZWxlY3RlZERpc3RyaWN0cywgY291bmNpbE1lbWJlcnMsIHNlbGVjdGVkQnVkZ2V0SXRlbXMsIHNob3dEaXN0cmljdHMpID0+IGRpc3BhdGNoKGFjdGlvbnMudXBkYXRlTWFwKGRpc3RyaWN0cywgc2VsZWN0ZWREaXN0cmljdHMsIGNvdW5jaWxNZW1iZXJzLCBzZWxlY3RlZEJ1ZGdldEl0ZW1zLCBzaG93RGlzdHJpY3RzKSksICBcbiAgICAgICAgb25SZXNldE1hcDogKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5yZXNldE1hcCgpKSxcbiAgICAgICAgb25ab29tTWFya2VyOiAoY2VudGVyLCBpdGVtKSA9PiBkaXNwYXRjaChhY3Rpb25zLnpvb21NYXJrZXIoY2VudGVyLCBpdGVtKSksICAgXG4gICAgICAgIFxuICAgICAgICBvbkZpbmRJdGVtOiAoYnVkZ2V0LCBsYXQsIGxuZywgdGl0bGUpID0+IGRpc3BhdGNoKGFjdGlvbnMuZmluZEl0ZW0oYnVkZ2V0LCBsYXQsIGxuZywgdGl0bGUpKSxcbiAgICAgICAgb25CdWRnZXRGaWx0ZXJGcm9tVVJMOiAoYnVkZ2V0LCBxdWVyeSkgPT4gZGlzcGF0Y2goYWN0aW9ucy5idWRnZXRGaWx0ZXJGcm9tVVJMKGJ1ZGdldCwgcXVlcnkpKSxcblxuICAgICAgICBvblJlc2V0Q2xpY2tlZEl0ZW06ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMucmVzZXRDbGlja2VkSXRlbSgpKSxcbiAgICAgICAgb25SZXNldEZpbmRJdGVtOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLnJlc2V0RmluZEl0ZW0oKSksXG5cbiAgICAgICAgb25DZW50ZXI6ICgpID0+IGRpc3BhdGNoKGFjdGlvbnMuY2VudGVyKCkpLFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQnVkZ2V0TWFwKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./containers/ParticipatoryBudgetMap/BudgetMap/BudgetMap.js\n");

/***/ })

})