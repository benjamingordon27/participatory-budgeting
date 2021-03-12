module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RXBc");


/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "6bAQ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Loader": "Spinner_Loader__3bVk-",
	"load5": "Spinner_load5__1bAGu"
};


/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "D7Az":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Dropdown": "Dropdown_Dropdown__3qDUW"
};


/***/ }),

/***/ "E/xK":
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "M0XP":
/***/ (function(module) {

module.exports = JSON.parse("{\"panControl\":false,\"mapTypeControl\":false,\"scrollwheel\":false,\"scaleControl\":false,\"navigationControl\":false,\"streetViewControl\":false,\"zoomControl\":false,\"styles\":[{\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#f5f5f5\"}]},{\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#616161\"}]},{\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"color\":\"#f5f5f5\"}]},{\"featureType\":\"administrative.country\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"administrative.land_parcel\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"administrative.land_parcel\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"administrative.land_parcel\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#bdbdbd\"}]},{\"featureType\":\"administrative.locality\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"administrative.province\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#eeeeee\"}]},{\"featureType\":\"poi\",\"elementType\":\"labels.text\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#757575\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#e5e5e5\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#9e9e9e\"}]},{\"featureType\":\"road\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#ffffff\"}]},{\"featureType\":\"road.arterial\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#757575\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#dadada\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#616161\"}]},{\"featureType\":\"road.local\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road.local\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#9e9e9e\"}]},{\"featureType\":\"transit.line\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#e5e5e5\"}]},{\"featureType\":\"transit.station\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#eeeeee\"}]},{\"featureType\":\"water\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#c9c9c9\"}]},{\"featureType\":\"water\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#9e9e9e\"}]}]}");

/***/ }),

/***/ "Q64X":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Input": "Input_Input__3HuU-"
};


/***/ }),

/***/ "RXBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/containers/ParticipatoryBudgetMap/ParticipatoryBudgetMap.module.css
var ParticipatoryBudgetMap_module = __webpack_require__("cDys");
var ParticipatoryBudgetMap_module_default = /*#__PURE__*/__webpack_require__.n(ParticipatoryBudgetMap_module);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./src/store/actions/actionTypes.js
const FETCH_PARTICIPATORY_BUDGET_ITEM_START = 'FETCH_PARTICIPATORY_BUDGET_ITEM_START';
const FETCH_PARTICIPATORY_BUDGET_ITEM_SUCCESS = 'FETCH_PARTICIPATORY_BUDGET_ITEM_SUCCESS';
const FETCH_PARTICIPATORY_BUDGET_ITEM_FAIL = 'FETCH_PARTICIPATORY_BUDGET_ITEM_FAIL';
const FETCH_COUNCIL_MEMBER_START = 'FETCH_COUNCIL_MEMBER_START';
const FETCH_COUNCIL_MEMBER_SUCCESS = 'FETCH_COUNCIL_MEMBER_SUCCESS';
const FETCH_COUNCIL_MEMBER_FAIL = 'FETCH_COUNCIL_MEMBER_FAIL';
const FETCH_DISTRICTS_START = 'FETCH_DISTRICTS_START';
const FETCH_DISTRICTS_SUCCESS = 'FETCH_DISTRICTS_SUCCESS';
const FETCH_DISTRICTS_FAIL = 'FETCH_DISTRICTS_FAIL';
const BUDGET_FILTER = 'BUDGET_FILTER';
const BUDGET_BY_YEAR = 'BUDGET_BY_YEAR';
const BUDGET_BY_DISTRICT = 'BUDGET_BY_DISTRICT';
const BUDGET_BY_CATEGORY = 'BUDGET_BY_CATEGORY';
const RESET_SELECTED_ITEMS = 'RESET_SELECTED_ITEMS';
const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
const SET_MAP = 'SET_MAP';
const UPDATE_MAP = 'UPDATE_MAP';
const RESET_MAP = 'RESET_MAP';
const ZOOM_MARKER = 'ZOOM_MARKER';
const ZOOM_IN = 'ZOOM_IN';
const ZOOM_OUT = 'ZOOM_OUT';
const CENTER = 'CENTER';
const SHOW_DISTRICTS = 'SHOW_DISTRICTS';
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./src/axios-order.js

const instance = external_axios_default.a.create({
  baseURL: 'https://data.cityofnewyork.us',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded' // "Access-Control-Allow-Origin": "*", 
    // "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",

  }
});
/* harmony default export */ var axios_order = (instance);
// CONCATENATED MODULE: ./src/store/actions/getRequests.js
const participatoryBudget = '/resource/wwhr-5ven.json';
const cityCouncilMembers = 'resource/uvw5-9znb.json';
const cityCouncilDistricts = 'api/geospatial/yusd-j4xi?method=export&format=GeoJSON';
// CONCATENATED MODULE: ./src/store/actions/initBudget.js


 //For the axios get request: /resource/wwhr-5ven.json

const fetchCouncilMemberStart = () => {
  return {
    type: FETCH_COUNCIL_MEMBER_START
  };
};
const fetchCouncilMemberSuccess = councilMembers => {
  return {
    type: FETCH_COUNCIL_MEMBER_SUCCESS,
    councilMembers: councilMembers
  };
};
const fetchCouncilMemberFail = error => {
  return {
    type: FETCH_COUNCIL_MEMBER_FAIL,
    error: error
  };
};
const fetchDistrictsFail = error => {
  return {
    type: FETCH_DISTRICTS_FAIL,
    error: error
  };
};
const fetchDistrictsStart = () => {
  return {
    type: FETCH_DISTRICTS_START
  };
};
const fetchDistrictsSuccess = data => {
  return {
    type: FETCH_DISTRICTS_SUCCESS,
    districts: data
  };
};
const fetchParticipatoryBudgetItemFail = error => {
  return {
    type: FETCH_PARTICIPATORY_BUDGET_ITEM_FAIL,
    error: error
  };
};
const fetchParticipatoryBudgetItemStart = () => {
  return {
    type: FETCH_PARTICIPATORY_BUDGET_ITEM_START
  };
};
const fetchParticipatoryBudgetItemSuccess = data => {
  return {
    type: FETCH_PARTICIPATORY_BUDGET_ITEM_SUCCESS,
    data: data
  };
};
const initBudget = () => {
  return dispatch => {
    dispatch(fetchCouncilMemberStart());
    axios_order.get(cityCouncilMembers).then(response => {
      // console.log("COUNCIL MEMBER CALL",response.data)
      dispatch(fetchCouncilMemberSuccess(JSON.stringify(response.data)));
    }).then(() => {
      dispatch(fetchParticipatoryBudgetItemStart());
      axios_order.get(participatoryBudget).then(response => {
        // console.log(response.data)
        dispatch(fetchParticipatoryBudgetItemSuccess(JSON.stringify(response.data)));
      }).then(() => {
        dispatch(fetchDistrictsStart());
        axios_order.get(cityCouncilDistricts).then(response => {
          // console.log('FETCH DISTRICTS',response.data);
          dispatch(fetchDistrictsSuccess(JSON.stringify(response.data)));
        }).catch(error => dispatch(fetchDistrictsFail(error)));
      });
    }).catch(error => dispatch(fetchCouncilMemberFail(error)));
  };
}; // export const fetchCouncilMember = (district) => {
//     return dispatch => {
//         dispatch(fetchCouncilMemberStart());
//         axios.get(getRequests.cityCouncilMembers)
//             .then(response => {
//                 console.log("COUNCIL MEMBER CALL",response.data)
//                 dispatch(fetchCouncilMemberSuccess(JSON.stringify(response.data), district))                
//             })
//             .catch(error => dispatch(fetchCouncilMemberFail(error)))
//     }
// }
// CONCATENATED MODULE: ./src/store/actions/setMap.js

const zoomMarker = (center, item) => {
  return {
    type: ZOOM_MARKER,
    center: center,
    item: item
  };
};
const zoomOut = () => {
  return {
    type: ZOOM_OUT
  };
};
const zoomIn = () => {
  return {
    type: ZOOM_IN
  };
};
const setMap_center = () => {
  return {
    type: CENTER
  };
};
const showDistrictsHelper = () => {
  console.log('show districts helper');
  return {
    type: SHOW_DISTRICTS
  };
};
const setMap_showDistricts = () => {
  console.log('show districts');
  return dispatch => {
    setTimeout(() => dispatch(showDistrictsHelper(), 50));
  };
};
const setMap = (districts, selectedDistricts, councilMembers, selectedBudgetItems) => {
  return {
    type: SET_MAP,
    districts: districts,
    selectedDistricts: selectedDistricts,
    councilMembers: councilMembers,
    selectedBudgetItems: selectedBudgetItems
  };
};
const updateHelper = (districts, selectedDistricts, councilMembers, selectedBudgetItems) => {
  return {
    type: UPDATE_MAP,
    districts: districts,
    selectedDistricts: selectedDistricts,
    councilMembers: councilMembers,
    selectedBudgetItems: selectedBudgetItems
  };
};
const updateMap = (districts, selectedDistricts, councilMembers, selectedBudgetItems) => {
  return dispatch => {
    setTimeout(() => dispatch(updateHelper(districts, selectedDistricts, councilMembers, selectedBudgetItems), 50));
  };
};
const resetHelper = () => {
  return {
    type: RESET_MAP
  };
};
const resetMap = () => {
  return dispatch => {
    setTimeout(() => dispatch(resetHelper(), 50));
  };
};
// CONCATENATED MODULE: ./src/store/actions/calculateSubsets.js

const resetSelectedItems = () => {
  return {
    type: RESET_SELECTED_ITEMS
  };
};
const budgetFilter = (budget, councilMembers, category, year, district, minCost, maxCost, minVotes, maxVotes, councilMember) => {
  return {
    type: BUDGET_FILTER,
    budget: budget,
    councilMembers: councilMembers,
    category: category,
    year: year,
    district: district,
    minCost: minCost,
    maxCost: maxCost,
    minVotes: minVotes,
    maxVotes: maxVotes,
    councilMember: councilMember
  };
};
// CONCATENATED MODULE: ./src/store/actions/index.js



// EXTERNAL MODULE: ./src/components/UI/Spinner/Spinner.module.css
var Spinner_module = __webpack_require__("6bAQ");
var Spinner_module_default = /*#__PURE__*/__webpack_require__.n(Spinner_module);

// CONCATENATED MODULE: ./src/components/UI/Spinner/Spinner.js




const spinner = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
  className: Spinner_module_default.a.Loader,
  children: "Loading..."
});

/* harmony default export */ var Spinner = (spinner);
// EXTERNAL MODULE: ./src/components/UI/Dropdown/Dropdown.module.css
var Dropdown_module = __webpack_require__("D7Az");
var Dropdown_module_default = /*#__PURE__*/__webpack_require__.n(Dropdown_module);

// CONCATENATED MODULE: ./src/components/UI/Dropdown/Dropdown.js





const dropdown = props => {
  let options = '';
  if (props.list) options = props.list.map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
    value: item,
    children: item
  }, item));
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Dropdown_module_default.a.Dropdown,
    children: [props.title, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
      onChange: props.handleChange,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
        value: '',
        children: ''
      }), options]
    })]
  });
};

/* harmony default export */ var Dropdown = (dropdown);
// EXTERNAL MODULE: ./src/components/UI/Button/Button.module.css
var Button_module = __webpack_require__("RxTV");
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);

// CONCATENATED MODULE: ./src/components/UI/Button/Button.js




const Button_button = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
  className: Button_module_default.a.Button,
  onClick: props.clicked,
  children: props.message
});

/* harmony default export */ var Button = (Button_button);
// EXTERNAL MODULE: ./src/components/UI/Input/Input.module.css
var Input_module = __webpack_require__("Q64X");
var Input_module_default = /*#__PURE__*/__webpack_require__.n(Input_module);

// CONCATENATED MODULE: ./src/components/UI/Input/Input.js





const input = props => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
  className: Input_module_default.a.Input,
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
    htmlFor: "id",
    style: {
      display: 'block'
    },
    children: props.label
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
    style: {
      fontSize: '15px'
    },
    children: "$"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
    id: "id",
    type: "number",
    min: "0",
    step: props.step,
    onChange: props.handleChange,
    placeholder: props.placeholder
  })]
});

/* harmony default export */ var Input = (input);
// CONCATENATED MODULE: ./src/containers/ParticipatoryBudgetMap/MapControlsManager/MapControlsManager.js



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class MapControlsManager_MapControlsManager extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      firstPageLoad: false,
      selectedYear: '',
      selectedCategory: '',
      selectedDistrict: '',
      minCost: '',
      maxCost: '',
      minVotes: '',
      maxVotes: '',
      councilMember: ''
    });

    _defineProperty(this, "itemsByYear", event => {
      this.setState({
        selectedYear: event.target.value
      });
    });

    _defineProperty(this, "itemsByDistrict", event => {
      this.setState({
        selectedDistrict: event.target.value
      });
    });

    _defineProperty(this, "itemsByCategory", event => {
      this.setState({
        selectedCategory: event.target.value
      });
    });

    _defineProperty(this, "minCostState", event => {
      this.setState({
        minCost: event.target.value
      });
    });

    _defineProperty(this, "maxCostState", event => {
      this.setState({
        maxCost: event.target.value
      });
    });

    _defineProperty(this, "minVotesState", event => {
      this.setState({
        minVotes: event.target.value
      });
    });

    _defineProperty(this, "maxVotesState", event => {
      this.setState({
        maxVotes: event.target.value
      });
    });

    _defineProperty(this, "councilMemberState", event => {
      this.setState({
        councilMember: event.target.value
      });
    });

    _defineProperty(this, "councilMemberWithDistricts", (districts, councilMembers) => {
      console.log(districts);
      console.log(councilMembers); // return districts.forEach((value, idx) => value = value + ': ' + councilMembers[idx])
    });

    _defineProperty(this, "clearInput", () => {
      // console.log('clearing input ', document.querySelectorAll("select"))
      Array.from(document.querySelectorAll("Input")).forEach(input => input.value = '');
      Array.from(document.querySelectorAll("select")).forEach(select => select.value = '');
      this.setState({
        selectedYear: '',
        selectedCategory: '',
        selectedDistrict: '',
        minCost: '',
        maxCost: '',
        minVotes: '',
        maxVotes: '',
        councilMember: ''
      });
      this.props.onResetSelectedItems();
    });
  }

  componentDidMount() {
    if (!this.props.participatoryBudget && !this.props.districts && !this.props.councilMembers) this.props.onInitBudget();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.firstPageLoad && this.props.participatoryBudget) {
      this.props.onBudgetFilter(this.props.participatoryBudget, this.props.councilMembers, this.state.selectedCategory, this.state.selectedYear, this.state.selectedDistrict, this.state.minCost, this.state.maxCost, this.state.minVotes, this.state.maxVotes, this.state.councilMember);
      this.setState({
        firstPageLoad: true
      });
    }
  }

  render() {
    let data = '';

    if (this.props.loading) {
      data = /*#__PURE__*/Object(jsx_runtime_["jsx"])(Spinner, {});
    } // console.log('state',this.state)


    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button, {
        message: 'Zoom In',
        clicked: this.props.onZoomIn
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button, {
        message: 'Zoom Out',
        clicked: this.props.onZoomOut
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button, {
        message: 'Center',
        clicked: this.props.onCenter
      }), this.props.participatoryBudget && this.props.districts && this.props.councilMembers && this.props.itemCategories ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Dropdown, {
          message: 'Items by Council Member',
          title: 'Council Member',
          list: this.props.councilMembersList,
          handleChange: this.councilMemberState
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Dropdown, {
          message: 'Items by district',
          title: 'Districts',
          list: this.props.itemDistricts,
          handleChange: this.itemsByDistrict
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Dropdown, {
          message: 'Items by year',
          title: 'Year',
          list: this.props.itemYears,
          handleChange: this.itemsByYear
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Dropdown, {
          message: 'Items by category',
          title: 'Category',
          list: this.props.itemCategories,
          handleChange: this.itemsByCategory
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input, {
          label: "Minimum cost",
          handleChange: this.minCostState,
          step: "0.01"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input, {
          label: "Maximum cost",
          handleChange: this.maxCostState,
          step: "0.01"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input, {
          label: "Minimum votes",
          handleChange: this.minVotesState,
          step: "1"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input, {
          label: "Maximum votes",
          handleChange: this.maxVotesState,
          step: "1"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button, {
          message: 'Submit',
          clicked: () => this.props.onBudgetFilter(this.props.participatoryBudget, this.props.councilMembers, this.state.selectedCategory, this.state.selectedYear, this.state.selectedDistrict, this.state.minCost, this.state.maxCost, this.state.minVotes, this.state.maxVotes, this.state.councilMember)
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button, {
          message: 'Clear',
          clicked: () => this.clearInput()
        })]
      }) : null, data]
    });
  }

}

const mapStateToProps = state => {
  return {
    currItem: state.participatoryBudget.currItem,
    participatoryBudget: state.participatoryBudget.participatoryBudget,
    loading: state.participatoryBudget.loading,
    councilMemberLoading: state.participatoryBudget.councilMemberLoading,
    error: state.participatoryBudget.error,
    councilMembers: state.participatoryBudget.councilMembers,
    councilMembersList: state.participatoryBudget.councilMembersList,
    districts: state.participatoryBudget.districts,
    districtsLoading: state.participatoryBudget.districtsLoading,
    itemCategories: state.participatoryBudget.itemCategories,
    itemYears: state.participatoryBudget.itemYears,
    itemDistricts: state.participatoryBudget.itemDistricts,
    selectedBudgetItems: state.subsets.selectedBudgetItems,
    mapLoading: state.subsets.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onResetSelectedItems: () => dispatch(resetSelectedItems()),
    onInitBudget: () => dispatch(initBudget()),
    onZoomIn: () => dispatch(zoomIn()),
    onZoomOut: () => dispatch(zoomOut()),
    onCenter: () => dispatch(setMap_center()),
    onShowDistricts: () => dispatch(setMap_showDistricts()),
    onBudgetFilter: (budget, councilMembers, category, year, district, minCost, maxCost, minVotes, maxVotes, councilMember) => dispatch(budgetFilter(budget, councilMembers, category, year, district, minCost, maxCost, minVotes, maxVotes, councilMember))
  };
};

/* harmony default export */ var ParticipatoryBudgetMap_MapControlsManager_MapControlsManager = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(MapControlsManager_MapControlsManager));
// EXTERNAL MODULE: ./src/components/UI/MapMarker/MapMarker.module.css
var MapMarker_module = __webpack_require__("hoej");
var MapMarker_module_default = /*#__PURE__*/__webpack_require__.n(MapMarker_module);

// CONCATENATED MODULE: ./public/markers/facilities-small.png
/* harmony default export */ var facilities_small = ("data:image/png;base64,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");
// CONCATENATED MODULE: ./public/markers/facilities-dot.png
/* harmony default export */ var facilities_dot = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAv5JREFUeNrcWUFvElEQnn2CGIMKoUbjRUhM21MDB8+tPXkS49kD3HrUoyfSX6D/oD14l/UHVLiZeCjpDWNSGpMmRomiDZG2VmfWhy7I7pt97HvYfskLBB4zH9/OzpuZdWAK3Ck/zODLCq5lXEVcebn86MjVwtXE1XjlPv+i69PRJFrBlzKu+5p+67hcJL5plLAkWpugoi5I+fUoxB0mUbrcG/KymwCFSxWJt1QbzzHIPsKXF7iugzmQ7bXC4lKv0955ra0wkiVVK2AXm6h0NbLCMyJLKKLSeVTaZROeIVklaScgZp9GsT53fACFoy7cOOpBDt+nfh57nw+cBHQTadhPXoHdZA4+4fuIeIzh8SyQsMwG21xrC4MPcLu/B5dOvrP2fxMX4M3Fm9BOXYtCuuTPHomxLzc4Fojg6sFbVDTagfX7d21YxD+6lZ73/gADxKn0TwzLQ2GNc/kf9FqQ/dHXDlAiTlfnfTILfXFemfIwnvcwnj2Vhe+LGofsva87f2J0GpANskU2GaiNKCzVrahUIWXjIPs3Hk/g1uFHeJe6CodOImxrZqjyUOGyyjjFbJxk/UqTbQY8jo4sET+rsgHdLCaxlV7gZI+skPVsKCh1mQbTx4qQxXfojcbNs9OAfDBuwGWhKhnpBLMFhq+iUBXjdNzaAsNXXkk4x8uTsYDhKy84accWOL4EnDIoCQ/CT6BYwfElZOcaiG70GlYbDF8dJWEqvm2B4csjHNpaU6dgCwxfXvHTDNtBbQ2z0J4K5IPRQjWJcEO1i9oa02D6aAg5mKuH7aIqaj+ZMRi7GU6lVieuw7Tmqsu/eSMpjmySbQbcka4Z6+Jd1TEdZ4s0JPvy8hIndjuobmH84FhX/YoMk4M4lI5AdoTb+FxiGxgTSt023x+zEdr8FqpbCppLVDmDFHLkojqWBinVszOq8pGe9TCQMHHsOnF6SVNDmh6CuYm7FtlAwjMmrTfQ9pGmRuuuJbIUs0/CNpy6hzJn87FXAPH//8HiBOLWH93+EmAAUDVlMfLN4JkAAAAASUVORK5CYII=");
// CONCATENATED MODULE: ./public/markers/education-small.png
/* harmony default export */ var education_small = ("data:image/png;base64,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");
// CONCATENATED MODULE: ./public/markers/education-dot.png
/* harmony default export */ var education_dot = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAvVJREFUeNrcWb1OG0EQntu4sEIkLgqR6WyqWEIC+wWAdFQ4DxAhm4oyKaksniB5AxBKHx8vEJsqHTYFggLFLq0IYUtYsqIUmTntobPx3c7u/TjwSas72Xsz3303Nzs7Z0EEvK98tPGwhWMTRwlHQQ4/unK0cbRwNH843wamPi1DolU8VHB8MPTbwOEg8eNECUui9RkqmoKUP9QhbjGJ0uM+ko89CVC41JB4WzXxBYPsJzx8x7EMyYFs768U14bd64ufxgojWVK1CuniGJWuaSs8J7KEEipdQKUdNuE5klWStgJi9ouO9Ve5HLwpFsHO52EBzzPZrPv73/EYRv0+DHo9uL26gns818RnDI+vgYRlNjjnWsutr0N+YwOyts2aPx4MoHd2Bv1OR4d02Z89MlN/HnEsEMF3OzuwiIrqwLtuGW/0+vTUvQEGiFP5UQzLRWGf8/hLe3vwcmnJOECJOD2du5sb+DMaKVMexnMP49lVWfj+qHPIru3uPsRoFJANskU2GahPKCzVrapUIWXjIOtBZDLwdnUVfl9eui9oCGxPZU/hiso4xV6cZP1Kk20GXI6WLBHvVNmAadQY9BIyssdrIevZUFDqShpMH1tCFt+hLxo3z0YB+WC8gJtCVTLSCpYWGL5KQlWM25qLQxQwfBWUhBd4eTIWMHwVBCftpAWOLwFPDErCihUoVnB8CblzDcRIv4Y1BsNXV0mYiu+0wPDlEg7dWtNOIS0wfLnFTytsBm1rmIV2JJAPxhaqRYSbqlm0rUkaTB9NIRtzjbBZVEUNE4xlss2o1BrE1UtrDqf8SyLFkU2yzYAzsWvGuviXapmOc4vkkb04OeHEbhfVXZleOA5VV5FhchCH0hpkJ7hN9yXOgdGhNN3m+2NWY5vfRnXLQX2JGqeRQo46qE5KjZTa82lV+UjPuxlImNl2ndm9pK4hdQ8huY67EdlAwnMmbdbQ9pEe4ul2SmQpZg/CJjy5jzLP87NXAPH//8PiDOKpf7r9J8AA965f08/WO+8AAAAASUVORK5CYII=");
// CONCATENATED MODULE: ./public/markers/tree-small.png
/* harmony default export */ var tree_small = ("data:image/png;base64,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");
// CONCATENATED MODULE: ./public/markers/tree-dot.png
/* harmony default export */ var tree_dot = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAupJREFUeNrcmTFv01AQx88vTYkoiDBQgWCwNyQQShYY2yIGtvABGJqtI4xMVT8BfIN2YCfZEU03YGmE6NApRgIJhYEEUVQ1ELizHpEbYr+/X2yn9C89JUqcu1/O5/O9s0NTaKX2sMwvy7yWeFV4uXqF5evV5rXDq7XdfN6z9elYgq7yS43XA0u/DV5NBt/KFFiDrk+Ioq0k8htJwB0QVE73pj7tWUjSpc7gbdOBBQD2Eb+84HWZspPYXvOu3+r7++9eW0eYYSWqq5SvtjjS9cQRnhGsqMKRdjnSTRh4hrBGaCciZ58msT5X7tH81Y9UXOwG753iUfD578E8/eyVadBdpKNP14L3CfWY0+NZJLCuBruotZLbobM33pNaOICOHx4s0I+9m3Toe0mgq+HqMTf25SZiocCA526/oeKlbqJwKf27M16Hvr+9Q7/4DwASpuo/OaxvCmvI6S/fe0mF89+sE1T+cMnzafD5Cg0PS8aSx/n8gfM5iLIKfbGOwF5YeTXK0WkkNsSW2AQ0YlOh6LqmqKQFOw5dMF8DrmYcRbhm+oXkXpqwYWixDShgdHSL+NVUDUCj1pKLEKgeF5XuZ2MlpStrgT6WlW6+Yy80tM5OI/EBXIBLytQyyh0sLwG+KspUHeR2m5cAX64RGKyTqQjw5Sqk7OQlxJei/0xGYGkR8xLiS+mda6QselhrAb58I7A033kJ8BUAx26tZaeQlwBfbaXHR7GnaYg12lNJfAApsSPALdNRsq3JWqCPltKDuUbcUdJFDb5kl8tiG+jUGsL6t6w1kfYvixInNsU2oOaxXTP3xR3kNp3mrkNg+9t3oXLG0fXGbxwbSJ0UB2lEOgHsMbbxucQuARNK221+OGcTbPPbHN1q1FyijgxSxJFEJ6dBSv30jKpC0LMeBoomjl0nTi9laijTQ8pu4m4FGwk8Y2i7gXYIus9v7+cEKzn7JHZXglg5SQ9lTudjrwjwk/9gcQJ47o9u/wgwAB+8W6G+AEXdAAAAAElFTkSuQmCC");
// CONCATENATED MODULE: ./public/markers/health-small.png
/* harmony default export */ var health_small = ("data:image/png;base64,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");
// CONCATENATED MODULE: ./public/markers/health-dot.png
/* harmony default export */ var health_dot = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAvxJREFUeNrcmc9rE1EQx2df1UqptBaE6qFu0YInTc6irSeLIPEPEGxuPVov4qn02It68N4K3s1eCj01rQiCh6zeRMVEpBaEaLDW3+B842vYxuy+2U32xfYLjw3J25lPZt/Ozpt1qA1dyF0d5MMEj3EeGR6uHkGV9fB5rPIorngPPiX16SQEneJDjseVhH4LPDwGX0wVWIPOtohiUiHyc3HAHSEoLveCvuxpCMslz+C+aWKPAPY6Hx7yGKb0BNvTo6dO18ovnj9JHGGGRVSnyK4WOdL52BHuEiyU4Ui7HGlPDNxFWCO0E7Jm78SxfvLgEJ09dJwyfUfpRO8Q9fccqH+/+fsHvf5eJX/rPT3+XKFX36pxwWd4edwNBdbZoCS1dnFgjK4dydLw/n7R/I2fm3T/Q4mWay/jQGeD2WNf048LoluaAW8eO09n+uIljr/nnaPJwTGaX1+r/wGBwJT9Zw3rh8K05PLfcy/TSO9A8hzG4Lg6T7+8o+qvr8bpvJ4rvJ7rUVaBH2YlsLdHLjXWaDuCDdiCTYEabCoQXdcUlU7BNkML7gFXMzYinDOdgTXbSdggNGwLVGd0dIn40ZQNcLOkqfn1R5LscVjpejZSSF1pS+hjQuniO/JGk+bZtqof9iG4AceVqWTEE8yWBL4yypQd8Li1VkCYfblGYNQGtiTw5SpJ2rEliS9Fu0xGYJSItiTxpfTONVSoZ21J4KtsBEbxbUsCX3XgyK01dgq2JPDlK90+ChW2NcJCuy3Bh2ALtQrgomkWtjVpS+ijqHRjrhA1C1XUs62N1GBhW1CpFcC6ndY8c/m3lkqKg03YFsjbsWvmuviN6THdyS3SNuyNt0uStVvm6I42PzjmTGfBMBx0ItIxYHewNfclSiToUCbd5gfXbIxtvs/RzYb1JfKSRgoczVSWbDVS8nunVRWA7nYzEGrZdm3ZvUTXEN1DSq/jngg2FLjL0Mka2gHoGn+ctASLNXsrasKueymzN197hYD//y8WW4Bbf3X7R4ABANvoV4KEIcWfAAAAAElFTkSuQmCC");
// CONCATENATED MODULE: ./public/markers/housing-small.png
/* harmony default export */ var housing_small = ("data:image/png;base64,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");
// CONCATENATED MODULE: ./public/markers/housing-dot.png
/* harmony default export */ var housing_dot = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAvpJREFUeNrcmT1MFFEQx2cfeIpKcqACGhOPK5SEYCCxsBKMNlZnbSyOzhJLqwuVFfF6CiiM9V2v8S42QoxcJBZa4JIYRYweERBjwDjz8tbsLce+2bcf3PlPXvY+3r353ezs7MxbC0Loeu5uGg8TOMZxjOLIqOGWrUYNRxVH5Xn58YapTcsQNI+HHI7bhnZLOMoIPh8rsAItNPGiqcjz00HALSYone45ddrjEIXLJILXQgMj7BQeHkEyuo/QRWNghCWv5iFZzSP0ZGDgQ4LVQlstCOsLbUURs9nNLrj6NQ0j37vl6xO7HfLz7c49WOnegeXeTXh5ZkO+DhvTVpNssMRd7eanU3Bn5Sz07aRY89e7fsOT7Gd4eu5bEOgxd/bo9Hw5x1mhHwGn3mZgpH4ykLv65O8uwA38o8VhG77gH2CImMacNx2em8I9zumfWRyC8z+PGQdn/6+UPDuvT/+A+tFd3fSBwaHLq/a7N9LLwvVFgQP78NXFfzEaRrQGrUVrMlRo8LDybl4XBuTZKGAdpf4IuLbWCy8G6rB9ZM9vatrxsuPhnG5xitkoYd2eprUZkoyWKhHrumxAF0ucKg6vcrJHj1D1rK8odcUtpo0JoYpv3wuNm2fDiGwwLsBxoSsZ6Q6WlBi2RoWuGKfbbVJi2MpogZl5MhIxbGUEJ+0kJY4tAW0mLTCViEmJY0uozvVAGdSwxmLYsrXAVHwnJYYtCezbWlOnkJQYtmTxU9WdpnVeoR1KZIMRElUCruhmUVsTt5g2KkJtzJX8ZlEVtdyzFV/s4tqMSq1ErE5aK+vLPzuWFEdr0toMlRu6ZqyLP3Bu01G1SA7sgyvvWekMvTvovXFMc/IkGYjC0wFgG9i8+xJLwNihNG3z3TEboM2voXf3t/kkbPQWOK0+NYzP8CKhVJTdOs4OEZo/e+mjHJqm061b2Hyu/R9bVS7o9tkMbBHoYNuthwxttqEdJqZDKNwjAxd0+zyU8YBTeLT+Y68DwFv/wWIT8MQf3f4VYABKI136HzeNwwAAAABJRU5ErkJggg==");
// CONCATENATED MODULE: ./public/markers/playground-small.png
/* harmony default export */ var playground_small = ("data:image/png;base64,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");
// CONCATENATED MODULE: ./public/markers/playground-dot.png
/* harmony default export */ var playground_dot = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAuNJREFUeNrcmUFrE1EQx+e9blsCKrWKVURIFcFTaC4WvKQe6jV+AIXk5lFBvYZeRbDfoAX9AMnZg8lFiiANuYmoESxYQSvaErQmcWZ5K5sl2Tf7dvc18Q+PJcnuzC+zs+/NvBUQQ9eLt+bwsIKjgGMJR1YNv9pqNHE0cNRf1J59N/UpDEFLeCjiuGnot4qjhuCbqQIr0MqQKJqKIr8WBVwwQel2b6jbnoYoXcoI3owNjLB38fAE7OgeQq8bAyMsRbUEdrWJ0OXIwEcEq4UWYwgbCi2SyNlL8gdcc75AbuorXJQ/4Zg4dL/f70/D+95xaHVPwcs/Z+Bd70TsnBZDZoNtrrXV6R24PfMWFkSHdf5uPwNPf1+G54fno0Dn/bOHE/hxg2NhQXbg/mwLI/otUrjoj9F1N5xP8PhXDnZ7Gc5lxJT3PkwFFoU7nNu/ntmCC/LAODnpD686O/C6exr2+rO6088uXsl9bL9puVGWvh8qHNhHmVf/cjSOyAbZIpsMVQYirKJb0kWFIpsErKcZ0YOC8xka3XNwgA9oiOa8KHsRLuqMU+4lCeuPNNlmyGUUqkTc080GTKPGooeQMXuclKqeDRVNXWmL6WNFquI79EHjzrNxRD4YD2BB6kpGWsFsieFrSeqKcVpubYnhK6sFptrAlhi+spIz7dgSx5eECZMWeD98BUpUHF9Sda4jRfWsLTF8tbXAVHzbEsOXCxzaWlOnYEsMX27x0wg7g9oa6hTSFvlgtFANAq7rzqK2Jm0xfdSl2pirhp1FVVSrO59i7s5zKrUqsXrTWo1T/qUxxZFNss1QbaBrxrr4g26ZTrJF8mAfdq5ycreN0V0MLhxruqvIMDlIItIRYAfYgvsS28DYoTRt8/05G6HNb2J086P2JcqcjRRy9KCzbGsjpfz/bFX5oCdnM3BMoKNttx4xtNmGdpycjqF4rwx80JPzUiYATukx/q+9RoCP/4vFIeDWX93+FWAA6uJXYHNd0/4AAAAASUVORK5CYII=");
// CONCATENATED MODULE: ./public/markers/safety-small.png
/* harmony default export */ var safety_small = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAYAAAAkNenBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACy1JREFUeNq8mntQVPcVx78su7AssMubVXCFEQkgDzFaM0YHrdHaTtKaTDqmdtpMJ860o7VpmjZjmzZjpukjaTu1kzhpx6T+kUfTaCcz1X8kD7XFxhgqSogShICosAjssssi7IOl5/z23uXucncXlt2emTv3x937+H7u7/x+5/zOJWVmZgaJsPKqhiraNZVX1a+mfS1tpbSZadNLp0zRZqXtJm0dvZ3tl2h/trfzcmcinp+yGBAWn1NQ/FhuQfHD9GdZnLfps48MHR8bGXp1MVBxgRAAv/mfU/M+td9z07ywZE6JfZomcH+PPwV2jw79E3qxj2DvUU89R0BnkwqSW2Aua9y47UVq3q88XpDuwT0FDqzNd6LW5IIpzRf1Pg6PFh2OLLSOGnF+xIQRd1r4KSfbWt7dbx+x9iUcpHHj9n3kQr+lZpZ8rD5nHF9fPoR1+Q6kpsTnEtP0+I9HTTh2vRjtY9nKn1zkcgfaWpoPJwSEeiGLeuEoNR+Wj1UZJ7Cn4iYacl1IpF22Z+GV7lJ0OjOVh49T73yHescVNwhBmAniBDXX8t86jR/fJYD7S4fj7oH59NDJm4X4CwF5/Rr5cCvBPEAw1gWDSBCnuQP472K9Gwfre1CRPYn/h3WPZ+Bg+woMTaXLhzoJZkskGFUQyZ3+TU2OCagmVzpY3428dF/ShE9jBv/MsKNDdwe6mRRsn8pBmctEMBW4Outqlwhmk5qbadQH9rbXlBDPN3bFDcEzFG+x7NXM23jbMIr+7Bl0Grz4nXEAN7Ic4tmsQbLVkjbEBKHZ6XHa7eT20owp0RMZWv+CAW7dScefOi3Y1VIvNm7zMTW7qJvAab0TFeYleGzzdnxr0xboUlNxSu8Qz2YNrEWynZLGyK5Fge4uCnScOuh5YB9edxXlWVPzFj/p0+DccA7et+ah1WZSPWdtngNbzTbcWzgmRE6kTOOpnH54DFrs3rAZGWlp8M/4ceSDZlTc0eJpZ4m4rtelx76Pq+UJYIoCZx0Fzm75vtrQiF1/SM6NeHaKBWFza9E1nokup4Gmzmzhy4qZRtjSIrfYD9wO9AYD8sYvil3GsP48bBofvlpzt4Bga+v7HFNeD9Z6Zl8Ga2FNL3VZ+E89aeXA/OU5IFLasUOOE19bNhwi6JXuEjG/T1OqMezWwUZpRrhopa2pceGBLTZsXOMUf7dcNOLE6TxcvBKIp3xtZ9YYjKZRVJcsQ3lRsTg+7HTgXNdVeEfzcb27BqgYCN6TNb1nzZfjzA7WLKczCpD6g3J7b+WNEFHDUzr8/bo5au9kpPtRWzmBdXUuNK11ojDPG/J70zqn2IZtOpxtNaKlXY+bK1qRpdejqapWnMMu1fxJG/y+FLgurMexcSMepJhVqJ+9F2v7QWuVUvOWIAiRraKDm2UfrjZNhAWp2ehnzPKhvNQNE+1ZrGWJB5Vlk6iwTILGZ0zjax7ePorrBf0YsLrxxZr1SNcFksgLPdcwMu7ETFctpgki/NliFiVtrFEag5tZO/XKpwKEUvE98okPWW5HFfLgfTY8uvP2omLG+UEHPrI657jUhZ4urDSkYkVhOl6Pcj1rlCcTSfsTmkAAFOsJkcWuy3cmNWI7PT4c6RhQdSktBcW9yw2U/kTPf1gja1Vq11DXrJZWc2JKTLYxxLh3mlyqYY5LPbJEjxJ96rzuo9BaygzcI03BOT7JvRHLpb5SlD7ve4VpbdJKa2xhvCiKO1fyz+CvVwZw5uYYDdAZfKHYiL31pdBrNQlzKaUptTKDRs5ueVmapZuOG+TNz4bwbr8d5tx8lBWacZ7e/OH2mwl3KdlYK2uWl0haqdIh1tjze/XqsP+9PY7CbCMeWrdB/H3myif4qL9XuBMbu1SDpXyOS9WY9AtyKaWxZmn9b9bKA11BF92maD3C+VmYG/BCy+XzwkegWgooGyqr0TtsFT0h4k9GhjjGxuecar+IdE0K9q4qRuqkIy4QheZSjRwU5WpHTPP7AzBhtqMsH87JSXx4LVDRSdNqsa2uUbgTb9zmY2x8zqhrHLvvKkZRmiZud1Zo1sZ3FxIRbtsseajJy0Tb9c8xOGYPvKa8AuFOvHGbjX/jc/hchofXk5AZkUHE8Hd4Iy9+TLrZRZVtnDJUciG1XtlbXyLc5V2aiXzSWGJ3UroU/yZcqr5EctW5Y3PYoQ+289Iju7xCs0sjlTFhd0cG4XWDUYLpHZJKNjRYEbZMLjKkCXexT7hCXEzpUvybcCk6F26C8M+dPLoHs4P1smgur9BsZRBRBLs1GX3mqMwOJJJdt4zweOmyaQKbcKmOlXAXU3WpCC7qmNChZzCQMNbmRI9rCs19GvvIUAe3JnzaiEtRtobcwEM9vlRc6Ar4OygGCDeL4mJur1dsc1yKe8PjnnPtB+1LxJpHrGlyx6MupVmz6Bli0IyNDLXKP3aMZUW8cFPRbB524sIyqUXdbreputijNUuEGx05fUps3OZjwqV45nPYVbKDFPzjXKAWzivITUX2iHqUWpmBkYIF41abEV9aOqp6YYnBjcZcJ9rsRnzcVYgr/SbUWByBHmFROXkh529dloucdC3+M+Cg1aAfTaW5uLtIHl9jqoH1nQ8tGBg1iPb9JcNRMw3WqrCzGlqUcB5xSSR1IyZRQIhk3ywfDLYPn6wOugAm7wTcLMxY+P7VpfjRGsssBI8LPj/MrPYMHG1eKdr61Gk8stwatcjBWuVaFzNoJB8T65ip6VRRAYk8TlyUdQai8NUbOXj9gxWK2OJUHfyhChh4bhTnyePgG6sxKdW/vk0vLFodjTWyVqV2AdLX2f6G9EUJx/rNov4ayR6/q1+8MbbXT6+YHfiyyzjG5owZYXdo1huzqd7z12/X02wYeMOrKKt9yDIUtTbMGuWESdIOqUdEPfUtUbahKe19a37EG5kzPHiy+npwcD5Lb/KTvlyFYOoV20joGODecqgP3MMnq/CvDnMwd3qmridqgZy1DcxOu2/JteDggOjtbP8VB1+59OPyRk6rNxfbsUvyYXaHA0fvDoXhaZUSRgHFvaAyfvglPH+sLjhLcS8/1xC9vsyaWJtkPkkzwkAud5O/HRI9RKnxy9eWRXX3PRW3CMgWAvNhZ+HsCexe7GYqA3vSnYpfvLYGpy6WBCF+s/oaKo13oj6TNcmf7VirstIYMkWRvz0rR/rmwXw0D+RHvfGBVb3Yah4NwjxD4kImALVARtPrvpfvwXkJmlMfhqjNmYh6HWthTbJUSWvkzwq0kL+Xlo5nODXmoPRCY1fMhxztWYo3+5bMVjlWjuBnuy7DlBka9Vs+LcILx+vgmgq8VS5M/7KhJ+airmMsE0+1VcqVTXapzdQb52J+H2ncuP3J3ILi3yu7PRbM+4N5OPSZJTgtGg0ePLHzCprqrGJ6PXKqMjgexDMouD5d2xvzwylD/PTSSuV0++O2luY/zPuLFcG8SDDfXwgMV8yf/7QcPS7DbNmmZkgEOzkRTE2Zwe6yQRFcY32+U4F4iSD2L/TTm7Zx47a/yR9B5wvD39PZ1d65UTyn3Mlp+U9q+rAmbzzmQikcQvoo+g2abn3xfAyNC0ak+06D+LjDnx0CdSgHDhBELFeKByImiAxTVlXPbva9hcJwFD4zFEh5+OPOfEzFnf5MM9T+aBDzAlGMmT8SzA8XCrMQU4E4RGPiiflcu6B/4UgmzGIgFgySLJjFQsQFkmiYREDEDZIomERBLApksTCJhFg0SLwwiYZICMhCYZIBkTCQ+cIkCyKhILFgkgmRcJBIMGzJhEgKiBqMXGpKFkTSQMJhgtXzJEEkFSQcJpkQSQeRYXifTAi2/wkwAC/7Wu+IEHFKAAAAAElFTkSuQmCC");
// CONCATENATED MODULE: ./public/markers/safety-dot.png
/* harmony default export */ var safety_dot = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAupJREFUeNrcmc9rE0EUx99Oq/ir2iKi9iBbBREPNRE8eWi9FG/xDxBpbj1a0IOn0rOCxX+gRbybvXoxPQgexMYeRAU1XhSRmpaIlGDB912mYRuzO28nuxPbLwwJyeS9T97OvH3z1qMedK10c5hfJnlM8Cjw8PWIqq5Hjccyj+rz4Mm6rU/PEnSaX0o8blj6rfAIGHwpV2ANOtclirZC5OfTgHtCUFzuRX3Z8xCWS5nBa6aJAwLY2/zylMcpyk+wPTN2YXyj/n71pXWEGRZRnSa3WuJIl1NHuE+wUIEj7XOkAzFwH2GN0F7Mmn2Yxvq5od909cQGjQ83w/dHBrfCz3/9GaCPzUO0uj5EL34cC9+n1Cwvj4VYYJ0NVqTWpk6v0a2zX+nkgZZo/vfN/fT40yg9+3Y8DXQxmj0GO75clFgA4N2Ldbo00kwVru3f4Y/ef+uHf0AgMBX/WcP6pjAjufyPrryjM4c37XPYwRZNja7Rq59HqdHaZ5zO6/kLr+cwyiryxZwE9sHlD+012otgA7ZgU6A2m4pE1zddzqxgO6EFe8DXjO0Il0y/wNrLEjYKDdsChYyeLhEbpmwgNGotbEJB9hhRup5NFFJX3hL6mFS6+E7caNI824vgQ7ABJ5SpZMQdzJUEvgrKlB1wu3UlgS/fCCzMk5lI4MtXkrTjShJfinaZjMAoEV1J4ssIbFHDWkvgq24ERvHtSgJfIfBC0gycFFxJ4KumdPso8TIJC+2eBB+CJbEM4KppFo41eUvoo6p0Y66SNAtV1JtGfmsZtgWVWgWs25sukJR/eaQ42IRtgYIdp2auiz9LbtNZnjoAe+f1eVE64+iOdebheUmehIMsIp0CdgdbZ19ihQQdSttjfnTNpjjm1zi6xbi+RFnSSIEjRMdRI6W8d1pVEeh+NwOhrm3XrrsHXUN0Dym/jrsVbCxwn6HtGtoRaJwMrzuCxZq9lzRh1z2U2ZuPvWLA//8Hi13AnT+6/SvAAJODW1r4FrY3AAAAAElFTkSuQmCC");
// CONCATENATED MODULE: ./public/markers/seniors-small.png
/* harmony default export */ var seniors_small = ("data:image/png;base64,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");
// CONCATENATED MODULE: ./public/markers/seniors-dot.png
/* harmony default export */ var seniors_dot = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwRJREFUeNrcWc9rE1EQnmxLvVhMrWCrIAkt0pMmgicPqXpQRFjBq4fk1qMePYX+BfoftAfvZqGXHqrJoSAINnpSKXb91SqkaqlYzMn51peyidl9s5vsi+0Hj12Sl5kv35udN282RT3gsn0nzZdZHgUeOR4ZNfxw1ajzqPGoPnUe/YjrMxWTaJEvNo9bMf1WeDhMfDFRwopouYuKcQHl56MQTwmJYrkX1LInAYRLiYnXdROHBGTv8uUxjwlKDrA9l505t+O+efUstsJMFqoWySwWWelSZIUHRBbIsdIZVtoREx4gWS3pVEDMPohi/fj4CTqTydLJydN8P04jI0e8z5vN3/Rte5u+bn2mD+4G3zeiEr/H4fEwkLDKBmtSa9NnZ+j8hYt0dHRUNP/n7i69fPGc1t++jkI6788ewx1fLkgsgOClwlWamDwVSa6/v7tCU/xHV2sr3h8QAJzy/8Sw2hTmJMt/w75Nx9JjsQMUxLE6m58+0t7eL23K43h+z/HsqWz5vihLyF67ae/HaC+ADdiCTQHKbQordYs6VaBsP8juOx8apuzUNLnv1vkBbYZNTbdUbils64wjZvtJ1q80bAvgcUypEvG7LhvgYUkSq7UnkuwxZql6NhRIXUlD6GPWUsV36IMmzbO9AD4ED2DB0pWM2MFMQeArZ+mKcWy3piDwldESRm1gCgJfGUuSdkxB4suiAwYtYZSIpiDxZamTayBQz5qCwJerJYzi2xQEvjzCoUdrnBRMQeDLK35q4cvUkBbaPQE+BEeoGghXdbNwrEkaQh9VSzXmKmGzUEV92dpMjCxsCyq1Cri20pqjL/9WEklxsAnbAjhtp2auizf023T/jkgtsstLjiR2XVY327lxzOvzZMNz0A+lI5Bt49bZl1gjQYcy7jHfH7MRjvl1Vjcf1JcoSRopcLS8VDHVSCkdnlaVj/Sgm4FA17Zr1+4luoboHlJyHfdYZAMJD5h0vIa2j/QO3143RBYxez9swoF7KXM4X3sFEP//Xyx2IW781e0fAQYA055fwoXInkYAAAAASUVORK5CYII=");
// CONCATENATED MODULE: ./public/markers/street-sidewalk-small.png
/* harmony default export */ var street_sidewalk_small = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAYAAAAkNenBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABopJREFUeNrUml1sFFUUgM/O/m+3/2Xb0oI01lgFS5s2EklNi6EoBBFifTDhQaMPGkOUNx580EQTX4yNYMKL4cGfkFAfTFAi1ChNjVDF/oCkKkj5Ke3WpWy72+7u7J/n3J07TNv935nd9iQ3c2c6P+fbc+49555bXTQaBTWkoWlrEx46G5qaW/C4BVs9thpsFukWP7ZpbHewXbkxPjaCx/M3xkfH1fi+LhcQUr6sqvq18qrqHjzdlOVrJu67nH1ul/PzXKCyAkEA+uXfxe7OeH8XBD3oDUYQ9ALodDp2jb4TCUcgHApCJBJO9Op+tNQHCHReU5DyqppNrR3dR7G7d4niej2YzFYwWaxgNJkZSDIhkKAYANHvA//iAmEuv+X08OC5Q/dd0xOqg7R27HoLXegj7Nr5NVLaai9hEPyXz1TuOSehqKgIbNicU3eVf/Kiyx0ZHjz7mSogaAU7WuEEdnv4tcc2uKGuxgyjk005D1ICcTgc8Oze/TB9dxIu/XYBXDNO5S19aJ1X0TreZO8RUkDUIMRPHEIvROHQvqvw6RsX4ZE6L6gtNevrYPfzB2Db9qdBr5fds4d0IF2yAlFAtMfGgQEe3lQMB566xYC0EkEQoGnzE7DnhRfBbi/ml9tTwQhJ3OkMdpnvGIwmusaO+ZKKyioGU+Wo5peaSCfSLW0QfOALPLRwiLLKajYz5VusNhvs2rNPCdMi6ZYaBGent/Gwn40JdKfSCgfoBAEKJUajEZ7p3g3FJaX80n5Jx8QgGOgelaZYmtCgpGJdQSwRzzI7up+TJwDSEXVtTALS3MtzI3tpeV7HRMpgXFEJ7du281ML6no0bhyR0o6f5cG9rnalH+oiUGlfYP2FgAkWRbOqcSQd+e7bb+Q4g+lMF09nDAprvMf79tKK+KlFVID/PMWq/9ohzMHmvQtp3ft4cxsM9H+v1HmH7Fpojc146KK+yWxhqUd+BRPKSHqtHKdlR20df7BL0j1mEUzFX5cHVlFJ3v3fgIO4rMSe9v3NW1uhf2oSFLofFqRZoEfOYjGDXe1St2EjSzKX6I6maZFWcwhhg7UiGx9q4N16YiCLdPIrZrN1zYCQVRTSKUhr7Jiv5n2QZy+O6lpl/Gsx8MSQVnVCilTEZgrAnpbLrH91cj1rhRKTGRd1Vhv4fIssoTRIlQ62xk4lRWYRXtp2ifVPXYSCgpCUlpVxkBqBD3QqFKw1sVjlyale4LEk2zV3IUVvkBMTw9ozQ6KgStUKSq+o5lQoCYbCMOuez/g5r8cjdwmEypiNSYpmmosg6MBsMmb8XCDg591pAqEiWGM4FCqcr+O0X2TLPBgvemWLTBjuu5xXMF/ZGY3GypnJpmFag5y62CbHkULK/NwciKLI+sRgcLucvyNIzFfFQFIQWkj1DbWvisE945yS+8RAs5ZcMBYDvjUzS03evqU8PS/gUpH2K0YYiN8H0Uhk1UMEg0G4c+smPx0hBkHysS/ZOg3X737fwqoH+ffa3xDC8azUnYFMjI99BbEdJfB550GtXSwtJIIe8yfb7GLil3QHySLTFEtOUj8cDkFgFVuFrOGZn+OnJyXdH9S1boyPfUgFDTbNzrsZ+WoTMRCAP4YuyMUXSWdYBjJ6Df2tN2a+MCzMzcata60r9rBGaxPV3AVdOYgBOVUb+nWQp+00NnpJZ2WuJQv62/vlHd1sY5MGvdFsAYvtQXWDinPHXvlaWo+0qRZTwpjnebyLSe+5PXEdrv/zl6wq6brkR1ae0K4QmusgdzGPexaCD/IZ7VIUfSxFSdTI1ccuDSld6uDyHawVaTya6xfau+OFs7nZGc1hBF0saYzX3LMuGPjxB3knmHQjHVe8I96LhwfPfowPHOOxJR8w8cQ5PQX9Z04rY8Yx0i3uj5HoJeiDh/HQtwRG9BcMgnSRdIKMQNAHQ8OD515Wwty87YXLE+UFgSBdSKeMQZQwaNLjbB4PCXDkRJumMHHc6XgqiBXTbyIYPLzZ2rHLj+n+Oz7RwGCe3BLNB0QvjonDaU0Y6X6EXsgDJsEMDJtUnQBygWBVoEwTRLTMJ2QZXkKizVIKnNkK7VhZLGZMP8SsIbICURuGQCLhkMKVM4fIGkQtGHJN970Z4P8dlC1ETiC5whAExSb+/VwgcgbJFkZtCFVAMoXRAkI1kHRhtIJQFSQVjJYQqoMkgiHREkITkHgwPOnUCkIzkOUwuQa7goIsh9ESQnMQDsOTTi2/878AAwBspMl4h+8w3wAAAABJRU5ErkJggg==");
// CONCATENATED MODULE: ./public/markers/street-sidewalk-dot.png
/* harmony default export */ var street_sidewalk_dot = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAv5JREFUeNrcmTFv01AQx88vLUVMrQRSM4CciTKAYgaWIrUwsQUxMyQw0BEWJMQQdYSFfgHaDsw0/gKQDEiIJREg0UpINTB0QaKREKKAU+6s58oJsd/5xX6h/UtPjqKXu1/unZ/vnS0YQVcqN6fxsohjAUcZhy1HVJ4cHRwtHM2X7rNdXZ+WJmgVLxUc1zX9NnC4CL6eK7AErQ+Joq4o8stpwC0mKC33mlz2PETpUkPwjmpigQF7Fy8bOGYhP5HtpdLcha639fa1doQRlqJaBbNax0jXUkd4TLCkMkbaxki7bOAxwiqhrZicfZLGevFMD845PthzPSie7sHxE/vB9z9/WLDzRYC3KeBDuwA7n0Va8HuYHiuxwHI3aHOtOfN/4GrlN0yf3GfN3/1qwQt3EtqvJtJAO9HdY/CXaxwLBHjj9i8onfVThSv8nXPZh+dPjwV/gCFicv7JYflQWOIs/52He3Cq2NNO0BkEvzjvw8f3BfjeVULPYj5/wnwOohxNqjoH9tb9vYMcHUVkg2yRTYbqfRGW0a2qlpMimwXsQT5OApy/5MO7NxPBDZrkPoxyGOGKyjjlXpaw0UiTbYYCRkuWiN9UuwHTqLboJmTsHjNC1rOJoq0rbzF9LApZfCfeaNx9dhSRD8YNuCBUJSM9wUyJ4assVMU4PW5NieHLVgJTbWBKDF+24Gw7psTxJeCQSQmseAJlKo4vJTDVs6bE8OWpZ2yaA2b4CoBXkmbQScGUGL6C4qeVuEx4rGEW2iOJfDCOUC2a0VTNomNN3mL6aArZmGskzaIqansrv9Qg24xKrUGs4Rq4nPIvjy2ObJJthty+UzPWxdvKx3SGR6QQdvXxFCd3PYxuaXAfXlbuk2iYHGQR6RSwfWyDfYk2MDqUusf8aM6mOOZ3MLpOXF+ixmmkkKPVR1OmGim1o9OqikCPuxlIGtp2Hbq5UteQuoeQX8ddCzYWeMzQeg3tCHQXP14zBEs5+yBpwqF7KXM0X3vFgP//LxaHgBt/dftXgAEAUelgp4t9nfkAAAAASUVORK5CYII=");
// CONCATENATED MODULE: ./public/markers/sanitation-dot.png
/* harmony default export */ var sanitation_dot = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAvpJREFUeNrcWc9rE1EQnt1YD02tKVJUSmSrIOKhJAcPLUIjIvQW/wAPya1HPfYU+hfof9AevJs9ezC5qNBDQw+CgpgSrL+QtmKl2ovzLS9lE7P7Zl92N7YfPHZJ3s58++3svHmzFg2BO+UHOT6UeCzyKPBw1PCjrUaLR5NH44X7dM/Up2VItMKHMo/7hn7rPFwmvp4oYUW0NkBFU0D51SjELSFRPO419diTAMKlysRbuokZAdmHfHjG4xIlB9henr0xt99+u/XaWGEmC1UrlC7WWelqZIVHRBYosNIOK+2KCY+QrJa0FRCzj6NYn8xN0eWZPF2Yvuidj42d9X4/OvpDP/Z26fu3L/TpY8c7j4hHHB5PAgmrbLAptZZ3rtH1m3M0ns2K5v86OKB3b7ao034fhXTRnz3O9P25JrEwnp2gwq15T9EowI3hurxzlVobr/gGfkouA6fiPzGsFoVlyeO/fXeJJs6dNw5Q3DBIf/28Q78PD7Upj+N5m+PZU9n2/VGTkF0o3TuO0WEAG7AFmwLUehRW6lZ0qkDZOMgeO89kaOaKQzudbe8FDUGuq3JX4bI2z3DsxUnWrzRsC+BxtFSJuKvLBkKj5sUEv4SC7DFlq3o2FEhdSUPoo2Sr4jv0RZPm2WEAH4IXcNHWlYxYwdKCwFfB1hXjUReHYSDw5WgJC/NkLBD4cmxJ2kkLEl82nTBoCWtWoFgh8WWrnWsgDGpYYwh8tbWEUXynBYEvj3Do1ho7hbQg8OUVP03dY8JOIWnAhyAkmiDc0M3CtiZpCH00bNWYq4fNQhWVZCzDtqBSq4NrN625kvIviRQHm7AtgNuza+a6+INkmY5ri9Ql+7LxXJTOWN3Z/oVjVZIn4SAOpSOQ7eHW35fYJEGH0nSb74/ZCNv8FqtbDOpLVCWNFDiCOik1Uqqnp1XlIz3qZiAwsO06sHuJriG6h5Rcx92IbCDhEZM2a2j7SO/z6VJKZBGzK2ETTtxHmdP52SuA+P//YXEA8dQ/3f4VYAAQ+197uhV+jQAAAABJRU5ErkJggg==");
// CONCATENATED MODULE: ./public/markers/transit-small.png
/* harmony default export */ var transit_small = ("data:image/png;base64,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");
// CONCATENATED MODULE: ./public/markers/transit-dot.png
/* harmony default export */ var transit_dot = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAu5JREFUeNrcmTFrFFEQx2dfjsRg4IyFSRPZKIKFhrtSLBKLQEhztoJCrkuppVXIJ9BvkBSCpbeNjYWXQrTLEWxEJKcBQZt4YCAJSc75L89jc97um323+87kD49d7nZnfjs7O/verEd96F7l4SXezPGY5VHi4esRVVOPBo8NHvW3wYtftj49S9Al3lR43Lf0W+MRMPh6rsAadKVHFG2FyK+mAfeEoLjda/q25yGkS5XBG6YDhwSwj3nzisck5SfYXp6+OdNqftr6YB1hhkVUl8it1jnS1dQRHhAsVOJI+xzpQAw8QFgjtBeTs8/SWL+ixulGYYquqolwf8QbDn8/aB/Sz5Nd+nbygz4f7YT7KfWE0+N5LLCuBptSa7cK1+nu8AwVvYui41vtPXp3uEUfj76kgS5Hq0eh6881iYWiN0aLI3doamgiVbhwYTjvduEavT54zxfwW3IamMr/5LB+KSxLbv+j0QW6rIrWCVpUYyH09vF32mvvG0se5/NXzucwyiryx4oE9sGF+U6O9iPYgC3YFKjDpiLR9U1pkBVsNzRsG+Rrxk6EK6YzkHtZwkahYVugkNHTU8RdUzUQGrUWHkJB9RhXej6bKJSuvCX0Maf05DvxQZPW2X4EH4IHcFaZpox4g7mSwFdJmaoDXreuJPDlG4GFdTITCXz5SlJ2XEniS9EZkxEYU0RXkvhSeuUaK4s5rLUEvppGYEy+XUngKwROXFpjpeBKAl8NpdtHibcJK4W8BR+ClNgAcN10FJY1eUvoo650Y66WdBRmUTvH+eUybAtmajWw/i1rgWT6l0eJg03YFig4tWrmefG25DWd5aoDsC/334jKGUd3uvvFsSqpk3CQRaRTwJ5i6+5LbJKgQ2m7zI/mbIplfoOjW47rS1QljRQ4QnQcNVKq56dVFYEedDMQ6tl27dm9RNcQ3UPKr+NuBRsLPGBou4Z2BLrFuwuOYJGzT5MOOHMfZc7nZ68Y8P//w2IPcOefbv8IMACn6laDwgFvCQAAAABJRU5ErkJggg==");
// CONCATENATED MODULE: ./public/markers/youth-small.png
/* harmony default export */ var youth_small = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAYAAAAkNenBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACkdJREFUeNrEWgtQFecVPtx7RYw8REBQBEERUBHRqBkrPmIwoW1qTUJN7ZjaTOokM4k2TtJqZmLqVKd1Ok50YpOSODHpaMeMY1trnGjV1JCgGLXykCgyKCiCXCGCBgWRR8/33/2Xn8vuvQvca87Mzu7dXXbP95/Xd84S0NXVRb6QxNQpqbybl5iansH7NN5G8xbDW5B2Sytvdbxd4620sqykiPd5lWXFZb54f8BAgED5YZHRL4RHRufwz4R+PqaqscG5t6nB+eFAQPULCAPAyr/Jh1lG14cH36O4EXfEPtDRKc61tdvoZvNgqr4xVOxN5ChbaiMDyvMrkPDImISpmQu38eGT6vnI0FaaNaGeZiTX0+QxjRQ29L7H59y6M4jOXQmn0+VRVHAhihpuB7nfcqAw/8jKxoa6Kp8DmZr5+MvsQpv4MFiem5J4k5bMqaSZKQ1kt/XPRTs6A+jUxUja81UiFVcOVy81s8utLcw//K5PgLAVgtkKH/Fhjjw3Ia6JVmSXU8bYm+RLKbo8nLYfSqYL1cPU03vZOs+zdZr7DYRBxDCIT/lwOn4HOjroxR9dpEWPVPfbAlYstP/rOHr/sxSOK7s8fYbB/ITB1PUZiAbiGB8irVJ0eAttWHaWkkZ95xOF628FUc23D1F8FCeFkHu9rlfUhtC6XdPI2ThEnipjMI+agTEEornTV3yYIV1pw3Nn+YVtPgHxKa/4O/snitWHZV97upSyH67pdd/N7wJp3c5pqqsVMZg5Rm5mMw7shTtVEJtfOO0zEC337CIOAEK60nsHUqntfm9V8E68GzpokqHpRl6BcHb6De8W43hUxF1hiSGDO3wWAxXXQ6m5dVCPc/hdcT3E8H68GzpAF00WazqaA+FCl6KlWBHYvnQnNZiNRAlsQ8tAF+jkcv3oTaxrkgcg6VslN0J2SoxutqQcChyC14oguN0zHn4njbztmU2wLtBJkyDWdZshENAO3mXLuHhq1lVLiuVymnxq42P07Kb5tOaj6SIGPElw0H1ateg8JUR3Z7+Xn7xAwUPavb4LOinxkq3p7A4kfb36YCty/mqYqMhSTpdH0r6CeNP7T/H1pX+eR1v2TaIqZ3dMfHw0SSyImdupouqm6mzTrDGJd/NxDL40Mf6WJSDV9cG9zl01OAcFdxweT2vZYo0GhPH23UCxIMhm3gS6QUdN5mu6u4AwFf+1vPLM7CuWA1fJJLokj77VK92u2TGddh0b5/V5/zieIIqkN1F1lLrbtCyQI1nszOQGy0AmJzTS3LTuQgv//fH0az0sgYJ29lKER/Dq/bv+6x0wdISuqu42Nk2G1s1R5iSn14c0tzjoXxwHG3ZPodXbZ9LFa2H6tTU/O0eBgzr133u+TNRBAMDvf1EoCpwnOVo0SlR0b6LoOhoYYBE98md4scb/KiJo2ea5tI3pxbGSkVTMbNXZpHMhAU6t0HFR3el7y4pTNG+yk+q6uZOpVXI/S/UKxE3XeTatx3a5CjdFZlLpDKa3dk4VgWkml7hq5x5M6eECQwLbdYoua46ZSHeBVfK/GeHZrRVdgcEm2S3aUrNcjlXGare0Obyu1L6CMbrScLO5aS4X+LI0WuxrPQTzginXdeB/2pOuP8ewHrGu0FmTVJs26RA9tpnsPxWn5/1xXIHf/HmxRzCoE7ImZE2tFfuTZSOENS7WhJn+HTLWG0tKRKXHov32wxmcycaY3q/oHGOTga6g6yUodBLEOy9+zS/qNCZ42mpW1w/lQE8QlrxwdZju++eZjstnmb0HmXDT82conPXB37x7YAKtyn2Ek0qo4ZBDBjyAOFwksdN8XlPnssbr3DeAjbr11rq89vQ3+vHfPk+inD8+SjuOjBe/QUnKOcN5ck8QxyMcHw8nfUs7Xs2nJ6a5epTSK+G0+Z9pve5XdHY4rNSL5lYHZ6A7lDLaRewKLhgH4qzUG7R03mXanTdWKBUZdo8WMz9ChpkY30TL357j9V27vxhLi2ZWi0kM0vnyrAph3RkpnjMqgCBHBt+6O8g0HQ4J7OCWM0ikTvixmnJ7ZrYQMZRAXHR0BPRoi5GFai1UbVAYxMXS+ZUu5+cWe9VPjbmfonOzTRtjchEyHprBNzFQwwojWMGZzORsRYROud17e/h+cqw1DpdXGmPpPkXnOlgEQ7Aks9UCSUNFRmwgv6ujmtCH2kSGkUQQ7HbZgkuG7S1iBnVGrRlIz2iW0DihuML6GHLkvlJgCYiic5WjscFZynwlC+0m3CbWgAsBBDgQgk5thtYtLRbTjvcPuioxQEJptTUG3QCVUZky+Bn+Vm2wkJnwfExN4MJwKU8CXWXLDAy2pgbnGXnxXFV4j1UEp1r+dqag3yoIyO9yzonsgumHbEGxohXKqiP9otnyBsK1WO09qJA3UXUFBsRInnu9ADFExwdO5d5zgD/9YdlZWqgVOmQXlfeU13QD2f6f5B7u9MzsKkMQsgV2jzVP4laP8hyVZcXXFix+Dt8qMk6WRQlLoPyrLwNzXZB+Xaym0YAONOT4+WgtObgqdwE/C/2FdMMVT1ykJXPNZ9KYI8v7PVET6S3QVc66gMGh+dgujpMMFCsUJIxE0zjLwHyg3d6mi5kTnUJZuBbIJUBsZG4me/Q3ni3hGlPvtcdANUfiwIbYM3svdJSFFbrrjVVVWcnftS9KouWEQimxtykxptnSiBTBnaaxUWSSY8UjxYsA4oNVJ7yCkATzpe4pSY9mzL2uKXOCVk13FxBtnvqJVORI4SiaMvYmxQxr6VO3KMzOAKS/4+NOVFir5Wcg7uBiroA35mTQTUm7n8hZsD77xcCLeT1KqAMmXv+rKgoKtKwDFV0Kob/+exTJgbccPr/1y8sUG3nf8nOKL4fSe/tGiky4PKuKwkI6aXhoF0WEdVFrG9H6jxNk3WqvLCuZwPFRISmKi17wiamZj2/lWHkdN35wcDz98AfWR6XtyqivpS2IkuI6qbI2gE6Wx1N6H76K2QZ3E8jth8bRIEcXxY7oopzHOujgCTuDsMnY2CpB9JrGa1P4c6R92MxmIGnjOi0rUX4lQLx0qEbF7rBn2u3UJ8sKXlZkYwCc6qO7KCaii2yse+klGx06oQ//qgrzj0xWp/K9Piuwi81mF/sC1rLbu2hJVodQ7vuUmhsc4EftgohqLjWfrXHc4zQeN+DbncgQ/Id7P7eLB32fIKCDBgIutdYdhMcvVhwv2zheXsEx/BQ++qAtI0Hcb9dB/KUw//BKS99HdCcsK1nNu704xoMetGXcQUAXTSdD8fYx1MHBv5u0L7oPyjJGIDi4l3Jwt/cLiASTkJoON3vpQYAxcKdctsRKTyAsAVFiZguDedWfYAxAbOWYWG3lb/v0Lxz+BDMQEH0G4i8wAwXRLyC+BuMLEP0G4iswvgIxICADBeNLEAMG0l8wvgbhEyB9BeMPED4DYhWMv0D4FIg3MP4E4XMgZmAEWfIjCL8AMQIjGbS/QPgNiDsY/ZOBn0D4FYg7GH+C8DsQCQZ7f4KA/F+AAQDYF6uuwv8gmQAAAABJRU5ErkJggg==");
// CONCATENATED MODULE: ./public/markers/youth-dot.png
/* harmony default export */ var youth_dot = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAArJJREFUeNrcmTFoFEEUht8OCgoJGBs1aTaaTsQ7hTQWiVgk3VlYCsk21omNZbjSRq21uAiWFnelheRS2AghG8QummtitEmECAZsfP8xdyzr7c7b2d3JnT8MC5fd9768fTvz5o1HOXS39vACX+Z5zPGo8PD1iKqjR8hjk0d7o/Xmp61PzxJ0mS81Hvct/TZ5tBh8vVRgDbo2IIq2QuTrWcA9IShed0O/9jKEdAkYPMwNzLArfHlObrTK0C+sgRkWUV0mt1pn6CAz8CnBGqG9IYRNhfaKyNmZK8d05/oPqkwf0rXJYxo796f7+6+Ts/Tl2ziFexfpw+dLtHswnjunvQGzwbbU2sLtfVq6t0uXJ36L7v9+dJ5ev5+hd1tTWaCr0dnjTOyPDYkFAD558IluXj3MFK7ec4u39unp2xvdf0AgMFX/ibBeFBqS1//s0cf+a7cV0uXxy1lpmgS9xUVFflxzBQvBBmzBpkB9NhWJrm96nUXBxqEF34CvGfsRrpmeQO4VCRuFhm2BuoyeLhGPTLOB0Ki18BEKZo8JpevZVGHqKltCH/NKF9+pH5p0ns0j+BB8gHPKVDJiBXMlga+KMs0OWG5dSeDLNwKjNnAlgS9fSaYdV5L4UjRiMgJjzXcliS+ld66JQj3rSgJfHSMwim9XEvjqAqdurbFTcCWBr1Dp9lGiUK8KC+1cgg9BbbwJ4LbpLmxrypbQR1vpxlwz7S5UUTtfy8tl2BZUak2w9qa1lqT8K2OKg03YFqgV39PtmZbpIrdIGfd1HY7udHzhqJuegmE4KCLSGTeh9aS+xDYJOpS22/xozmbY5occ3WpSXyKQNFLgaPXVrKtGSvD/tKoi0KPTDBwS6Gzt1lOGtmto58npHMp3ZBCBHp1DmRg40mP4j70SwIf/YHEAuPOj278CDADOOk+tikv6hAAAAABJRU5ErkJggg==");
// CONCATENATED MODULE: ./src/components/UI/MapMarker/mapMarkerImgs.js























const mapMarkerImgs = {
  'Culture and Community Facilities': {
    img: '../../../../public/markers/facilities-small.png',
    dot: '../../../../public/markers/facilities-dot.png'
  },
  'Schools and Education': {
    img: '../../../../public/markers/education-small.png',
    dot: '../../../../public/markers/education-dot.png'
  },
  'Environment': {
    img: '../../../../public/markers/tree-small.png',
    dot: '../../../../public/markers/tree-dot.png'
  },
  'Housing': {
    img: '../../../../public/markers/housing-small.png',
    dot: '../../../../public/markers/housing-dot.png'
  },
  'Parks and Recreation': {
    img: '../../../../public/markers/playground-small.png',
    dot: '../../../../public/markers/playground-dot.png'
  },
  'Public Health': {
    img: '../../../../public/markers/health-small.png',
    dot: '../../../../public/markers/health-dot.png'
  },
  'Public Safety': {
    img: '../../../../public/markers/safety-small.png',
    dot: '../../../../public/markers/safety-dot.png'
  },
  'Sanitation': {
    img: '../../../../public/markers/street-sidewalk-small.png',
    dot: '../../../../public/markers/sanitation-dot.png'
  },
  'Seniors': {
    img: '../../../../public/markers/seniors-small.png',
    dot: '../../../../public/markers/seniors-dot.png'
  },
  'Streets and Sidewalks': {
    img: '../../../../public/markers/street-sidewalk-small.png',
    dot: '../../../../public/markers/street-sidewalk-dot.png'
  },
  'Transit and Transportation': {
    img: '../../../../public/markers/transit-small.png',
    dot: '../../../../public/markers/transit-dot.png'
  },
  'Youth': {
    img: '../../../../public/markers/youth-small.png',
    dot: '../../../../public/markers/youth-dot.png'
  }
}; // export const mapMarkerImgs = {
//     'Culture and Community Facilities': {
//       img: facilitiesImg,
//       dot: facilitiesDot
//     },
//     'Schools and Education': {
//       img: educationImg,
//       dot: educationDot
//     },
//     'Environment': {
//       img: environmentImg,
//       dot: environmentDot
//     },
//     'Housing': {
//       img: housingImg,
//       dot: housingDot
//     },
//     'Parks and Recreation': {
//       img: playgroundImg,
//       dot: playgroundDot
//     },
//     'Public Health': {
//       img: healthImg,
//       dot: healthDot
//     },
//     'Public Safety': {
//       img: safetyImg,
//       dot: safetyDot
//     },
//     'Sanitation': {
//       img: streetsImg,
//       dot: sanitationDot
//     },
//     'Seniors': {
//       img: seniorsImg,
//       dot: seniorsDot
//     },
//     'Streets and Sidewalks': {
//       img: streetsImg,
//       dot: streetsDot
//     },
//     'Transit and Transportation': {
//       img: transitImg,
//       dot: transitDot
//     },
//     'Youth': {
//       img: youthImg,
//       dot: youthDot
//     }
// }
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// CONCATENATED MODULE: ./src/components/UI/MapMarker/MapMarker.js






const MapMarker = props => {
  let width = props.width;
  let height = props.height;
  let transform = 'translate(-50%, -50%)'; //if the marker is the center, double the width and update the transform

  if (props.center.lat === props.lat && props.center.lng === props.lng) {
    width = width.split('px')[0] * 2 + 'px';
    height = height.split('px')[0] * 2 + 'px';
    transform = 'translate(-50%, -100%)';
  }

  return (
    /*#__PURE__*/
    // <div className={classes.MapMarker} lat={props.lat} lng={props.lng} onClick={props.clicked}>
    //   {props.zoom >= 13 ?
    //     <img style={{
    //         width: width, height: height, 
    //         position: 'absolute', top: "50%", left: "50%", transform: transform,
    //       }} 
    //       src={mapMarkerImgs[props.item.pinCategory].img}
    //       alt={props.item.title}/>          
    //     :
    //     <img style={{
    //         width: '10px', height: '10px', 
    //         position: 'absolute', transform: 'translate(-50%, -50%)'
    //       }} 
    //       src={mapMarkerImgs[props.item.pinCategory].dot}
    //       alt={props.item.title}/>                  
    //   }
    // </div>
    Object(jsx_runtime_["jsx"])("div", {
      className: MapMarker_module_default.a.MapMarker,
      lat: props.lat,
      lng: props.lng,
      onClick: props.clicked,
      children: props.zoom >= 13 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
        style: {
          // width: width, height: height, 
          position: 'absolute',
          top: "50%",
          left: "50%",
          transform: transform
        },
        width: width,
        height: height,
        src: mapMarkerImgs[props.item.pinCategory].img,
        alt: props.item.title
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
        style: {
          position: 'absolute',
          transform: 'translate(-50%, -50%)'
        },
        width: '10px',
        height: '10px',
        src: mapMarkerImgs[props.item.pinCategory].dot,
        alt: props.item.title
      })
    })
  );
};

/* harmony default export */ var MapMarker_MapMarker = (MapMarker);
// CONCATENATED MODULE: ./src/util/translateCategory.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { translateCategory_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function translateCategory_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const translateCategory = item => {
  let category = item.category;
  if (category.includes('Health and Environment')) return _objectSpread(_objectSpread({}, item), {}, {
    pinCategory: 'Public Health'
  });
  if (category === 'Public Safety & Public Health') return _objectSpread(_objectSpread({}, item), {}, {
    pinCategory: 'Public Safety'
  });
  if (category.includes('Safety')) return _objectSpread(_objectSpread({}, item), {}, {
    pinCategory: 'Public Safety'
  });
  if (category.includes('Communit') || category.includes('Cultur') || category.includes('District-Wide Priorities')) return _objectSpread(_objectSpread({}, item), {}, {
    pinCategory: 'Culture and Community Facilities'
  });
  if (category.includes('School') || category.includes('Education') || category.includes('Librar')) return _objectSpread(_objectSpread({}, item), {}, {
    pinCategory: 'Schools and Education'
  });
  if (category.includes('Environment')) return _objectSpread(_objectSpread({}, item), {}, {
    pinCategory: 'Environment'
  });
  if (category.includes('Recreation') || category.includes('Parks')) return _objectSpread(_objectSpread({}, item), {}, {
    pinCategory: 'Parks and Recreation'
  });
  if (category.includes('Health')) return _objectSpread(_objectSpread({}, item), {}, {
    pinCategory: 'Public Health'
  }); // if( category.includes('')) return {...item, pinCategory: 'Previously funded'};

  if (category.includes('Housing')) return _objectSpread(_objectSpread({}, item), {}, {
    pinCategory: 'Housing'
  });
  if (category.includes('Sanitation')) return _objectSpread(_objectSpread({}, item), {}, {
    pinCategory: 'Sanitation'
  });
  if (category.includes('Senior')) return _objectSpread(_objectSpread({}, item), {}, {
    pinCategory: 'Seniors'
  });
  if (category.includes('Streets')) return _objectSpread(_objectSpread({}, item), {}, {
    pinCategory: 'Streets and Sidewalks'
  });
  if (category.includes('Transit') || category.includes('Transportation')) return _objectSpread(_objectSpread({}, item), {}, {
    pinCategory: 'Transit and Transportation'
  });
  if (category.includes('Youth')) return _objectSpread(_objectSpread({}, item), {}, {
    pinCategory: 'Youth'
  }); // if( category.includes('Save your money') || category.includes('Save your money')) return {...item, pinCategory: 'Previously funded'}
  // default)
  //     return item;
};
const translateCategoryText = category => {
  if (category.includes('Health and Environment')) return 'Public Health';
  if (category === 'Public Safety & Public Health') return 'Public Safety';
  if (category.includes('Safety')) return 'Public Safety';
  if (category.includes('Communit') || category.includes('Cultur') || category.includes('District-Wide Priorities')) return 'Culture and Community Facilities';
  if (category.includes('School') || category.includes('Education') || category.includes('Librar')) return 'Schools and Education';
  if (category.includes('Environment')) return 'Environment';
  if (category.includes('Recreation') || category.includes('Parks')) return 'Parks and Recreation';
  if (category.includes('Health')) return 'Public Health'; // if( category.includes('')) return {...item, pinCategory: 'Previously funded'};

  if (category.includes('Housing')) return 'Housing';
  if (category.includes('Sanitation')) return 'Sanitation';
  if (category.includes('Senior')) return 'Seniors';
  if (category.includes('Streets')) return 'Streets and Sidewalks';
  if (category.includes('Transit') || category.includes('Transportation')) return 'Transit and Transportation';
  if (category.includes('Youth')) return 'Youth';else return category; // if( category.includes('Save your money') || category.includes('Save your money')) return {...item, pinCategory: 'Previously funded'}
  // default)
  //     return item;
};
// EXTERNAL MODULE: external "google-map-react"
var external_google_map_react_ = __webpack_require__("E/xK");
var external_google_map_react_default = /*#__PURE__*/__webpack_require__.n(external_google_map_react_);

// EXTERNAL MODULE: ./src/components/Map/mapConfig.json
var mapConfig = __webpack_require__("M0XP");

// CONCATENATED MODULE: ./src/components/Map/Map.js


 // import polygonCenter from 'geojson-polygon-center';



const renderDistricts = (map, maps, coords, selectedDistricts, councilMembers, showDistricts) => {
  let allDistrictPolygons = {}; // let polygonCoords = [];

  console.log('show districts?', showDistricts);
  console.log(coords);

  if (showDistricts) {
    Object.keys(coords.features).map(key => {
      let districtPolygons = [];
      let currDistrict = coords.features[key].properties.coun_dist;
      coords.features[key].geometry.coordinates.map(arr => {
        let coordArr = [];
        arr[0].map(coordinate => coordArr.push({
          lat: coordinate[1],
          lng: coordinate[0]
        }));
        var councilDistrictPolygon = new maps.Polygon({
          paths: coordArr,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
          indexID: currDistrict
        }); // var center = polygonCenter(polygon.geometry)
        // console.log('center', polygonCenter(coords.features[key].geometry));

        districtPolygons.push(councilDistrictPolygon); // polygonCoords.push(coordArr);

        var districtInfo = councilMembers.filter(item => item.district === currDistrict); // addListenersOnPolygon(map,maps,councilDistrictPolygon, districtInfo);
      });
      allDistrictPolygons[key] = {
        district: coords.features[key].properties.coun_dist,
        polygons: districtPolygons
      };
    });
  }

  Object.keys(allDistrictPolygons).map(key => {
    // if(selectedDistricts.includes(Number(allDistrictPolygons[key].district)))
    allDistrictPolygons[key].polygons.map(polygon => polygon.setMap(map));
  });
};

const addListenersOnPolygon = (map, maps, polygon, info) => {
  var infoWindow = new maps.InfoWindow();
  maps.event.addListener(polygon, 'click', function (event) {
    infoWindow.setContent('District: ' + polygon.indexID + '<br>Council Member: ' + info[0].name + '<br>Political Party: ' + info[0].political_party);
    var latLng = event.latLng;
    infoWindow.setPosition(latLng);
    infoWindow.open(map);
  });
};

const handleApiLoaded = (map, maps, coords, selectedDistricts, councilMembers, budget) => {
  console.log('handleAPILoaded called');
  renderDistricts(map, maps, coords, selectedDistricts, councilMembers);
};

const map = props => {
  console.log('map props', props);

  let output = /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_google_map_react_default.a, {
    bootstrapURLKeys: {
      key: process.env.REACT_APP_GOOGLE_MAPS_TOKEN,
      v: '3.31'
    },
    defaultCenter: props.defaultCenter,
    center: {
      lat: Number(props.center.lat),
      lng: Number(props.center.lng)
    },
    zoom: props.zoom,
    options: mapConfig,
    yesIWantToUseGoogleMapApiInternals: true,
    onGoogleApiLoaded: ({
      map,
      maps
    }) => {
      handleApiLoaded(map, maps, props.districts, props.selectedDistricts, props.councilMembers, props.selectedBudgetItems, props.showDistricts);
    },
    children: props.markers
  });

  return output;
};

/* harmony default export */ var Map = (map);
// CONCATENATED MODULE: ./src/containers/ParticipatoryBudgetMap/BudgetMap/BudgetMap.js


function BudgetMap_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function BudgetMap_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { BudgetMap_ownKeys(Object(source), true).forEach(function (key) { BudgetMap_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { BudgetMap_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BudgetMap_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const DEFAULT_CENTER = {
  lat: 40.635,
  lng: -73.94
};

class BudgetMap_BudgetMap extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    BudgetMap_defineProperty(this, "state", {
      firstPageLoad: false
    });

    BudgetMap_defineProperty(this, "markerClicked", (center, item) => {
      this.props.onZoomMarker(center, item);
      console.log('url', this.props.url); // this.props.history.replace(this.props.url);
    });
  }

  componentDidMount() {
    if (this.props.districts) {
      this.props.onSetMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.firstPageLoad && this.props.loaded) {
      this.props.onSetMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);
      this.setState({
        firstPageLoad: true
      });
    }

    if (prevProps.selectedBudgetItems !== this.props.selectedBudgetItems) {
      this.props.onResetMap();
      this.props.onUpdateMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);
    }

    if (this.props.showDistricts !== prevProps.showDistricts) {
      console.log('[BudgetMap.js] show districts');
    }
  }

  render() {
    let markers = [];

    if (this.props.selectedBudgetItems) {
      this.props.selectedBudgetItems.filter(item => item.latitude && item.longitude).map((item, idx) => {
        markers.push( /*#__PURE__*/Object(jsx_runtime_["jsx"])(MapMarker_MapMarker, {
          center: this.props.center,
          lat: item.latitude,
          lng: item.longitude,
          item: translateCategory(item),
          width: '30px',
          height: '30px',
          zoom: this.props.zoom ////figure out how to change on zoom change, might have to be rendered not in an array in component but in render itself
          ,
          clicked: () => this.markerClicked({
            lat: item.latitude,
            lng: item.longitude
          }, item)
        }, idx));
      });
    }

    console.log('[BudgetMap.js] params', this.props.match.params);
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        height: '87vh',
        width: '100%'
      },
      children: this.props.mapProps ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Map, BudgetMap_objectSpread(BudgetMap_objectSpread({}, this.props.mapProps), {}, {
        zoom: this.props.zoom,
        center: this.props.center,
        defaultCenter: DEFAULT_CENTER,
        markers: markers,
        showDistricts: this.props.showDistricts
      })) : null
    });
  }

}

const BudgetMap_mapStateToProps = state => {
  return {
    currItem: state.participatoryBudget.currItem,
    participatoryBudget: state.participatoryBudget.participatoryBudget,
    councilMemberLoading: state.participatoryBudget.councilMemberLoading,
    error: state.participatoryBudget.error,
    councilMembers: state.participatoryBudget.councilMembers,
    districts: state.participatoryBudget.districts,
    districtsLoading: state.participatoryBudget.districtsLoading,
    selectedDistricts: state.participatoryBudget.selectedDistricts,
    loaded: state.participatoryBudget.loaded,
    showDistricts: state.setMap.showDistricts,
    mapProps: state.setMap.mapProps,
    center: state.setMap.center,
    zoom: state.setMap.zoom,
    clickedItem: state.setMap.clickedItem,
    selectedBudgetItems: state.subsets.selectedBudgetItems,
    url: state.setMap.url
  };
};

const BudgetMap_mapDispatchToProps = dispatch => {
  return {
    onSetMap: (districts, selectedDistricts, councilMembers, selectedBudgetItems) => dispatch(setMap(districts, selectedDistricts, councilMembers, selectedBudgetItems)),
    onUpdateMap: (districts, selectedDistricts, councilMembers, selectedBudgetItems, showDistricts) => dispatch(updateMap(districts, selectedDistricts, councilMembers, selectedBudgetItems, showDistricts)),
    onResetMap: () => dispatch(resetMap()),
    onZoomMarker: (center, item) => dispatch(zoomMarker(center, item))
  };
};

/* harmony default export */ var ParticipatoryBudgetMap_BudgetMap_BudgetMap = (Object(external_react_redux_["connect"])(BudgetMap_mapStateToProps, BudgetMap_mapDispatchToProps)(BudgetMap_BudgetMap));
// EXTERNAL MODULE: ./src/components/UI/Legend/Legend.module.css
var Legend_module = __webpack_require__("zojU");
var Legend_module_default = /*#__PURE__*/__webpack_require__.n(Legend_module);

// CONCATENATED MODULE: ./src/components/UI/Legend/Legend.js







class Legend_Legend extends external_react_["Component"] {
  filter(category) {
    this.props.onBudgetFilter(this.props.participatoryBudget, this.props.councilMembers, category, '', '', '', '', '', '', '');
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      class: Legend_module_default.a.Legend,
      children: Object.keys(this.props.legendMarkers).map(key => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        onClick: () => this.filter(key),
        children: [this.props.zoom <= 12 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: this.props.legendMarkers[key].dot,
          alt: key
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: this.props.legendMarkers[key].img,
          alt: key
        }), ' ', key]
      }))
    });
  }

}

const Legend_mapStateToProps = state => {
  return {
    participatoryBudget: state.participatoryBudget.participatoryBudget,
    councilMembers: state.participatoryBudget.councilMembers
  };
};

const Legend_mapDispatchToProps = dispatch => {
  return {
    onBudgetFilter: (budget, councilMembers, category, year, district, minCost, maxCost, minVotes, maxVotes, councilMember) => dispatch(budgetFilter(budget, councilMembers, category, year, district, minCost, maxCost, minVotes, maxVotes, councilMember))
  };
};

/* harmony default export */ var UI_Legend_Legend = (Object(external_react_redux_["connect"])(Legend_mapStateToProps, Legend_mapDispatchToProps)(Legend_Legend));
// CONCATENATED MODULE: ./src/containers/ParticipatoryBudgetMap/LegendManager/LegendManager.js






class LegendManager_LegendManager extends external_react_["Component"] {
  render() {
    console.log('[LegendManager.js]', this.props);
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(UI_Legend_Legend, {
        legendMarkers: mapMarkerImgs,
        zoom: this.props.zoom
      })
    });
  }

}

const LegendManager_mapStateToProps = state => {
  return {
    zoom: state.setMap.zoom
  };
};

const LegendManager_mapDispatchToProps = dispatch => {
  return {};
};

/* harmony default export */ var ParticipatoryBudgetMap_LegendManager_LegendManager = (Object(external_react_redux_["connect"])(LegendManager_mapStateToProps, LegendManager_mapDispatchToProps)(LegendManager_LegendManager));
// EXTERNAL MODULE: ./src/components/BudgetItem/BudgetItem.module.css
var BudgetItem_module = __webpack_require__("p28C");
var BudgetItem_module_default = /*#__PURE__*/__webpack_require__.n(BudgetItem_module);

// CONCATENATED MODULE: ./src/util/numberFormatting.js
const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
const numberFormatter = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
// CONCATENATED MODULE: ./src/components/BudgetItem/BudgetItem.js






const budgetItem = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: BudgetItem_module_default.a.BudgetItem,
    onClick: props.clicked,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
      children: "Name:"
    }), " ", props.title, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
      children: "Description:"
    }), " ", props.description, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
      children: "Cost:"
    }), " ", priceFormatter.format(props.cost), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), props.votes ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
        children: "Votes:"
      }), " ", numberFormatter(props.votes), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {})]
    }) : null, /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
      children: "Year:"
    }), " ", props.vote_year, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
      children: "Category:"
    }), " ", props.category, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
      children: "Council District:"
    }), " ", props.council_district, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), props.councilMember.length > 0 ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
        children: "Borough:"
      }), " ", props.councilMember[0].borough, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
        children: "Current Council Member:"
      }), " ", props.councilMember[0].name, ", ", props.councilMember[0].political_party, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {})]
    }) : null, props.clicked && props.longitude && props.latitude ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_default.a.Fragment, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          style: {
            color: 'blue'
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("u", {
            children: "Click to focus"
          })
        })
      })
    }) : '']
  });
};

/* harmony default export */ var BudgetItem = (budgetItem);
// CONCATENATED MODULE: ./src/containers/ParticipatoryBudgetMap/SelectedBudgetItem/SelectedBudgetItem.js


function SelectedBudgetItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SelectedBudgetItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SelectedBudgetItem_ownKeys(Object(source), true).forEach(function (key) { SelectedBudgetItem_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SelectedBudgetItem_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SelectedBudgetItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class SelectedBudgetItem_SelectedBudgetItem extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    SelectedBudgetItem_defineProperty(this, "setCenter", item => {
      if (item.longitude && item.latitude) {
        this.props.onZoomMarker({
          lat: item.latitude,
          lng: item.longitude
        });
      }
    });

    SelectedBudgetItem_defineProperty(this, "findDistrict", district => {
      if (this.props.councilMembers) {
        var councilMember = this.props.councilMembers.filter(item => item.district === district.match(/\d+/)[0]);
        return councilMember;
      }
    });
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: this.props.clickedItem ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(BudgetItem, SelectedBudgetItem_objectSpread(SelectedBudgetItem_objectSpread({}, this.props.clickedItem), {}, {
        councilMember: this.findDistrict(this.props.clickedItem.council_district) // clicked={() => this.setCenter(this.props.clickedItem)}

      })) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: "Selected item will show up here"
      })
    });
  }

}

const SelectedBudgetItem_mapStateToProps = state => {
  return {
    councilMembers: state.participatoryBudget.councilMembers,
    center: state.setMap.center,
    clickedItem: state.setMap.clickedItem
  };
};

const SelectedBudgetItem_mapDispatchToProps = dispatch => {
  return {
    onZoomMarker: center => dispatch(zoomMarker(center)),
    onZoomIn: () => dispatch(zoomIn()),
    onZoomOut: () => dispatch(zoomOut())
  };
};

/* harmony default export */ var ParticipatoryBudgetMap_SelectedBudgetItem_SelectedBudgetItem = (Object(external_react_redux_["connect"])(SelectedBudgetItem_mapStateToProps, SelectedBudgetItem_mapDispatchToProps)(SelectedBudgetItem_SelectedBudgetItem));
// CONCATENATED MODULE: ./src/containers/ParticipatoryBudgetMap/ParticipatoryBudgetMap.js









class ParticipatoryBudgetMap_ParticipatoryBudgetMap extends external_react_["Component"] {
  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: ParticipatoryBudgetMap_module_default.a.ParticipatoryBudgetMap,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        children: "Welcome to this Participatory Budget viewer. Click on options below to find items on the participatory budget from the years 2012-2017."
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: ["Find current participatory budget requests here: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "http://ideas.pbnyc.org/page/about",
          target: "_blank",
          rel: "noreferrer",
          style: {
            color: 'blue'
          },
          children: "http://ideas.pbnyc.org/page/about"
        }), ", ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "https://council.nyc.gov/pb/",
          target: "_blank",
          rel: "noreferrer",
          style: {
            color: 'blue'
          },
          children: "https://council.nyc.gov/pb/"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ParticipatoryBudgetMap_MapControlsManager_MapControlsManager, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ParticipatoryBudgetMap_LegendManager_LegendManager, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ParticipatoryBudgetMap_BudgetMap_BudgetMap, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            width: '40%',
            height: '100vh',
            left: '0',
            right: '0',
            overflowY: 'scroll'
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ParticipatoryBudgetMap_SelectedBudgetItem_SelectedBudgetItem, {})
        })]
      })]
    });
  }

}

/* harmony default export */ var containers_ParticipatoryBudgetMap_ParticipatoryBudgetMap = (ParticipatoryBudgetMap_ParticipatoryBudgetMap);
// CONCATENATED MODULE: ./src/pages/index.js




const homePage = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(containers_ParticipatoryBudgetMap_ParticipatoryBudgetMap, {})
  });
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (homePage);

/***/ }),

/***/ "RxTV":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Button": "Button_Button__sj3Zl"
};


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDys":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ParticipatoryBudgetMap": "ParticipatoryBudgetMap_ParticipatoryBudgetMap__32LVc"
};


/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    src: loader({
      src,
      quality,
      width: widths[last]
    }),
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ')
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hoej":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"MapMarker": "MapMarker_MapMarker__10J7s"
};


/***/ }),

/***/ "p28C":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"BudgetItem": "BudgetItem_BudgetItem__2pLhT"
};


/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "zojU":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Legend": "Legend_Legend__2o7KG"
};


/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });