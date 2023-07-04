"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 122);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!*******************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/main.js?{"type":"appStyle"} ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/App.vue?vue&type=style&index=0&lang=scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/hbuilder-workspace/YzKitchen/App.vue?vue&type=style&index=0&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "ql-editor": {
    "minHeight": "200",
    "fontSize": "16"
  },
  "uni-border": {
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#F0F0F0"
  },
  "uni-primary": {
    "color": "#2979ff"
  },
  "uni-primary-bg": {
    "backgroundColor": "#2979ff"
  },
  "uni-primary-disable": {
    "color": "#94bcff"
  },
  "uni-primary-disable-bg": {
    "backgroundColor": "#94bcff"
  },
  "uni-primary-light": {
    "color": "#d4e4ff"
  },
  "uni-primary-light-bg": {
    "backgroundColor": "#d4e4ff"
  },
  "uni-success": {
    "color": "#18bc37"
  },
  "uni-success-bg": {
    "backgroundColor": "#18bc37"
  },
  "uni-success-disable": {
    "color": "#8cde9b"
  },
  "uni-success-disable-bg": {
    "backgroundColor": "#8cde9b"
  },
  "uni-success-light": {
    "color": "#d1f2d7"
  },
  "uni-success-light-bg": {
    "backgroundColor": "#d1f2d7"
  },
  "uni-warning": {
    "color": "#f3a73f"
  },
  "uni-warning-bg": {
    "backgroundColor": "#f3a73f"
  },
  "uni-warning-disable": {
    "color": "#f9d39f"
  },
  "uni-warning-disable-bg": {
    "backgroundColor": "#f9d39f"
  },
  "uni-warning-light": {
    "color": "#fdedd9"
  },
  "uni-warning-light-bg": {
    "backgroundColor": "#fdedd9"
  },
  "uni-error": {
    "color": "#e43d33"
  },
  "uni-error-bg": {
    "backgroundColor": "#e43d33"
  },
  "uni-error-disable": {
    "color": "#f29e99"
  },
  "uni-error-disable-bg": {
    "backgroundColor": "#f29e99"
  },
  "uni-error-light": {
    "color": "#fad8d6"
  },
  "uni-error-light-bg": {
    "backgroundColor": "#fad8d6"
  },
  "uni-info": {
    "color": "#8f939c"
  },
  "uni-info-bg": {
    "backgroundColor": "#8f939c"
  },
  "uni-info-disable": {
    "color": "#c7c9ce"
  },
  "uni-info-disable-bg": {
    "backgroundColor": "#c7c9ce"
  },
  "uni-info-light": {
    "color": "#e9e9eb"
  },
  "uni-info-light-bg": {
    "backgroundColor": "#e9e9eb"
  },
  "uni-main-color": {
    "color": "#3a3a3a"
  },
  "uni-main-color-bg": {
    "backgroundColor": "#3a3a3a"
  },
  "uni-base-color": {
    "color": "#6a6a6a"
  },
  "uni-base-color-bg": {
    "backgroundColor": "#6a6a6a"
  },
  "uni-secondary-color": {
    "color": "#909399"
  },
  "uni-secondary-color-bg": {
    "backgroundColor": "#909399"
  },
  "uni-extra-color": {
    "color": "#c7c7c7"
  },
  "uni-extra-color-bg": {
    "backgroundColor": "#c7c7c7"
  },
  "uni-bg-color": {
    "color": "#f7f7f7"
  },
  "uni-bg-color-bg": {
    "backgroundColor": "#f7f7f7"
  },
  "uni-border-1": {
    "color": "#F0F0F0"
  },
  "uni-border-1-bg": {
    "backgroundColor": "#F0F0F0"
  },
  "uni-border-2": {
    "color": "#EDEDED"
  },
  "uni-border-2-bg": {
    "backgroundColor": "#EDEDED"
  },
  "uni-border-3": {
    "color": "#DCDCDC"
  },
  "uni-border-3-bg": {
    "backgroundColor": "#DCDCDC"
  },
  "uni-border-4": {
    "color": "#B9B9B9"
  },
  "uni-border-4-bg": {
    "backgroundColor": "#B9B9B9"
  },
  "uni-black": {
    "color": "#000000"
  },
  "uni-black-bg": {
    "backgroundColor": "#000000"
  },
  "uni-white": {
    "color": "#ffffff"
  },
  "uni-white-bg": {
    "backgroundColor": "#ffffff"
  },
  "uni-transparent": {
    "color": "rgba(0,0,0,0)"
  },
  "uni-transparent-bg": {
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "uni-shadow-sm": {
    "boxShadow": "0 0 5px rgba(216, 216, 216, 0.5)"
  },
  "uni-shadow-base": {
    "boxShadow": "0 1px 8px 1px rgba(165, 165, 165, 0.2)"
  },
  "uni-shadow-lg": {
    "boxShadow": "0px 1px 10px 2px rgba(165, 164, 164, 0.5)"
  },
  "uni-mask": {
    "backgroundColor": "rgba(0,0,0,0.4)"
  },
  "uni-mt-0": {
    "marginTop": "0"
  },
  "uni-mt-n0": {
    "marginTop": "0"
  },
  "uni-mr-0": {
    "marginRight": "0"
  },
  "uni-mr-n0": {
    "marginRight": "0"
  },
  "uni-mb-0": {
    "marginBottom": "0"
  },
  "uni-mb-n0": {
    "marginBottom": "0"
  },
  "uni-ml-0": {
    "marginLeft": "0"
  },
  "uni-ml-n0": {
    "marginLeft": "0"
  },
  "uni-mx-0": {
    "marginLeft": "0",
    "marginRight": "0"
  },
  "uni-mx-n0": {
    "marginLeft": "0",
    "marginRight": "0"
  },
  "uni-my-0": {
    "marginTop": "0",
    "marginBottom": "0"
  },
  "uni-my-n0": {
    "marginTop": "0",
    "marginBottom": "0"
  },
  "uni-ma-0": {
    "marginTop": "0",
    "marginRight": "0",
    "marginBottom": "0",
    "marginLeft": "0"
  },
  "uni-ma-n0": {
    "marginTop": "0",
    "marginRight": "0",
    "marginBottom": "0",
    "marginLeft": "0"
  },
  "uni-mt-1": {
    "marginTop": "2"
  },
  "uni-mt-n1": {
    "marginTop": "-2"
  },
  "uni-mr-1": {
    "marginRight": "2"
  },
  "uni-mr-n1": {
    "marginRight": "-2"
  },
  "uni-mb-1": {
    "marginBottom": "2"
  },
  "uni-mb-n1": {
    "marginBottom": "-2"
  },
  "uni-ml-1": {
    "marginLeft": "2"
  },
  "uni-ml-n1": {
    "marginLeft": "-2"
  },
  "uni-mx-1": {
    "marginLeft": "2",
    "marginRight": "2"
  },
  "uni-mx-n1": {
    "marginLeft": "-2",
    "marginRight": "-2"
  },
  "uni-my-1": {
    "marginTop": "2",
    "marginBottom": "2"
  },
  "uni-my-n1": {
    "marginTop": "-2",
    "marginBottom": "-2"
  },
  "uni-ma-1": {
    "marginTop": "2",
    "marginRight": "2",
    "marginBottom": "2",
    "marginLeft": "2"
  },
  "uni-ma-n1": {
    "marginTop": "-2",
    "marginRight": "-2",
    "marginBottom": "-2",
    "marginLeft": "-2"
  },
  "uni-mt-2": {
    "marginTop": "4"
  },
  "uni-mt-n2": {
    "marginTop": "-4"
  },
  "uni-mr-2": {
    "marginRight": "4"
  },
  "uni-mr-n2": {
    "marginRight": "-4"
  },
  "uni-mb-2": {
    "marginBottom": "4"
  },
  "uni-mb-n2": {
    "marginBottom": "-4"
  },
  "uni-ml-2": {
    "marginLeft": "4"
  },
  "uni-ml-n2": {
    "marginLeft": "-4"
  },
  "uni-mx-2": {
    "marginLeft": "4",
    "marginRight": "4"
  },
  "uni-mx-n2": {
    "marginLeft": "-4",
    "marginRight": "-4"
  },
  "uni-my-2": {
    "marginTop": "4",
    "marginBottom": "4"
  },
  "uni-my-n2": {
    "marginTop": "-4",
    "marginBottom": "-4"
  },
  "uni-ma-2": {
    "marginTop": "4",
    "marginRight": "4",
    "marginBottom": "4",
    "marginLeft": "4"
  },
  "uni-ma-n2": {
    "marginTop": "-4",
    "marginRight": "-4",
    "marginBottom": "-4",
    "marginLeft": "-4"
  },
  "uni-mt-3": {
    "marginTop": "6"
  },
  "uni-mt-n3": {
    "marginTop": "-6"
  },
  "uni-mr-3": {
    "marginRight": "6"
  },
  "uni-mr-n3": {
    "marginRight": "-6"
  },
  "uni-mb-3": {
    "marginBottom": "6"
  },
  "uni-mb-n3": {
    "marginBottom": "-6"
  },
  "uni-ml-3": {
    "marginLeft": "6"
  },
  "uni-ml-n3": {
    "marginLeft": "-6"
  },
  "uni-mx-3": {
    "marginLeft": "6",
    "marginRight": "6"
  },
  "uni-mx-n3": {
    "marginLeft": "-6",
    "marginRight": "-6"
  },
  "uni-my-3": {
    "marginTop": "6",
    "marginBottom": "6"
  },
  "uni-my-n3": {
    "marginTop": "-6",
    "marginBottom": "-6"
  },
  "uni-ma-3": {
    "marginTop": "6",
    "marginRight": "6",
    "marginBottom": "6",
    "marginLeft": "6"
  },
  "uni-ma-n3": {
    "marginTop": "-6",
    "marginRight": "-6",
    "marginBottom": "-6",
    "marginLeft": "-6"
  },
  "uni-mt-4": {
    "marginTop": "8"
  },
  "uni-mt-n4": {
    "marginTop": "-8"
  },
  "uni-mr-4": {
    "marginRight": "8"
  },
  "uni-mr-n4": {
    "marginRight": "-8"
  },
  "uni-mb-4": {
    "marginBottom": "8"
  },
  "uni-mb-n4": {
    "marginBottom": "-8"
  },
  "uni-ml-4": {
    "marginLeft": "8"
  },
  "uni-ml-n4": {
    "marginLeft": "-8"
  },
  "uni-mx-4": {
    "marginLeft": "8",
    "marginRight": "8"
  },
  "uni-mx-n4": {
    "marginLeft": "-8",
    "marginRight": "-8"
  },
  "uni-my-4": {
    "marginTop": "8",
    "marginBottom": "8"
  },
  "uni-my-n4": {
    "marginTop": "-8",
    "marginBottom": "-8"
  },
  "uni-ma-4": {
    "marginTop": "8",
    "marginRight": "8",
    "marginBottom": "8",
    "marginLeft": "8"
  },
  "uni-ma-n4": {
    "marginTop": "-8",
    "marginRight": "-8",
    "marginBottom": "-8",
    "marginLeft": "-8"
  },
  "uni-mt-5": {
    "marginTop": "10"
  },
  "uni-mt-n5": {
    "marginTop": "-10"
  },
  "uni-mr-5": {
    "marginRight": "10"
  },
  "uni-mr-n5": {
    "marginRight": "-10"
  },
  "uni-mb-5": {
    "marginBottom": "10"
  },
  "uni-mb-n5": {
    "marginBottom": "-10"
  },
  "uni-ml-5": {
    "marginLeft": "10"
  },
  "uni-ml-n5": {
    "marginLeft": "-10"
  },
  "uni-mx-5": {
    "marginLeft": "10",
    "marginRight": "10"
  },
  "uni-mx-n5": {
    "marginLeft": "-10",
    "marginRight": "-10"
  },
  "uni-my-5": {
    "marginTop": "10",
    "marginBottom": "10"
  },
  "uni-my-n5": {
    "marginTop": "-10",
    "marginBottom": "-10"
  },
  "uni-ma-5": {
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10"
  },
  "uni-ma-n5": {
    "marginTop": "-10",
    "marginRight": "-10",
    "marginBottom": "-10",
    "marginLeft": "-10"
  },
  "uni-mt-6": {
    "marginTop": "12"
  },
  "uni-mt-n6": {
    "marginTop": "-12"
  },
  "uni-mr-6": {
    "marginRight": "12"
  },
  "uni-mr-n6": {
    "marginRight": "-12"
  },
  "uni-mb-6": {
    "marginBottom": "12"
  },
  "uni-mb-n6": {
    "marginBottom": "-12"
  },
  "uni-ml-6": {
    "marginLeft": "12"
  },
  "uni-ml-n6": {
    "marginLeft": "-12"
  },
  "uni-mx-6": {
    "marginLeft": "12",
    "marginRight": "12"
  },
  "uni-mx-n6": {
    "marginLeft": "-12",
    "marginRight": "-12"
  },
  "uni-my-6": {
    "marginTop": "12",
    "marginBottom": "12"
  },
  "uni-my-n6": {
    "marginTop": "-12",
    "marginBottom": "-12"
  },
  "uni-ma-6": {
    "marginTop": "12",
    "marginRight": "12",
    "marginBottom": "12",
    "marginLeft": "12"
  },
  "uni-ma-n6": {
    "marginTop": "-12",
    "marginRight": "-12",
    "marginBottom": "-12",
    "marginLeft": "-12"
  },
  "uni-mt-7": {
    "marginTop": "14"
  },
  "uni-mt-n7": {
    "marginTop": "-14"
  },
  "uni-mr-7": {
    "marginRight": "14"
  },
  "uni-mr-n7": {
    "marginRight": "-14"
  },
  "uni-mb-7": {
    "marginBottom": "14"
  },
  "uni-mb-n7": {
    "marginBottom": "-14"
  },
  "uni-ml-7": {
    "marginLeft": "14"
  },
  "uni-ml-n7": {
    "marginLeft": "-14"
  },
  "uni-mx-7": {
    "marginLeft": "14",
    "marginRight": "14"
  },
  "uni-mx-n7": {
    "marginLeft": "-14",
    "marginRight": "-14"
  },
  "uni-my-7": {
    "marginTop": "14",
    "marginBottom": "14"
  },
  "uni-my-n7": {
    "marginTop": "-14",
    "marginBottom": "-14"
  },
  "uni-ma-7": {
    "marginTop": "14",
    "marginRight": "14",
    "marginBottom": "14",
    "marginLeft": "14"
  },
  "uni-ma-n7": {
    "marginTop": "-14",
    "marginRight": "-14",
    "marginBottom": "-14",
    "marginLeft": "-14"
  },
  "uni-mt-8": {
    "marginTop": "16"
  },
  "uni-mt-n8": {
    "marginTop": "-16"
  },
  "uni-mr-8": {
    "marginRight": "16"
  },
  "uni-mr-n8": {
    "marginRight": "-16"
  },
  "uni-mb-8": {
    "marginBottom": "16"
  },
  "uni-mb-n8": {
    "marginBottom": "-16"
  },
  "uni-ml-8": {
    "marginLeft": "16"
  },
  "uni-ml-n8": {
    "marginLeft": "-16"
  },
  "uni-mx-8": {
    "marginLeft": "16",
    "marginRight": "16"
  },
  "uni-mx-n8": {
    "marginLeft": "-16",
    "marginRight": "-16"
  },
  "uni-my-8": {
    "marginTop": "16",
    "marginBottom": "16"
  },
  "uni-my-n8": {
    "marginTop": "-16",
    "marginBottom": "-16"
  },
  "uni-ma-8": {
    "marginTop": "16",
    "marginRight": "16",
    "marginBottom": "16",
    "marginLeft": "16"
  },
  "uni-ma-n8": {
    "marginTop": "-16",
    "marginRight": "-16",
    "marginBottom": "-16",
    "marginLeft": "-16"
  },
  "uni-mt-9": {
    "marginTop": "18"
  },
  "uni-mt-n9": {
    "marginTop": "-18"
  },
  "uni-mr-9": {
    "marginRight": "18"
  },
  "uni-mr-n9": {
    "marginRight": "-18"
  },
  "uni-mb-9": {
    "marginBottom": "18"
  },
  "uni-mb-n9": {
    "marginBottom": "-18"
  },
  "uni-ml-9": {
    "marginLeft": "18"
  },
  "uni-ml-n9": {
    "marginLeft": "-18"
  },
  "uni-mx-9": {
    "marginLeft": "18",
    "marginRight": "18"
  },
  "uni-mx-n9": {
    "marginLeft": "-18",
    "marginRight": "-18"
  },
  "uni-my-9": {
    "marginTop": "18",
    "marginBottom": "18"
  },
  "uni-my-n9": {
    "marginTop": "-18",
    "marginBottom": "-18"
  },
  "uni-ma-9": {
    "marginTop": "18",
    "marginRight": "18",
    "marginBottom": "18",
    "marginLeft": "18"
  },
  "uni-ma-n9": {
    "marginTop": "-18",
    "marginRight": "-18",
    "marginBottom": "-18",
    "marginLeft": "-18"
  },
  "uni-mt-10": {
    "marginTop": "20"
  },
  "uni-mt-n10": {
    "marginTop": "-20"
  },
  "uni-mr-10": {
    "marginRight": "20"
  },
  "uni-mr-n10": {
    "marginRight": "-20"
  },
  "uni-mb-10": {
    "marginBottom": "20"
  },
  "uni-mb-n10": {
    "marginBottom": "-20"
  },
  "uni-ml-10": {
    "marginLeft": "20"
  },
  "uni-ml-n10": {
    "marginLeft": "-20"
  },
  "uni-mx-10": {
    "marginLeft": "20",
    "marginRight": "20"
  },
  "uni-mx-n10": {
    "marginLeft": "-20",
    "marginRight": "-20"
  },
  "uni-my-10": {
    "marginTop": "20",
    "marginBottom": "20"
  },
  "uni-my-n10": {
    "marginTop": "-20",
    "marginBottom": "-20"
  },
  "uni-ma-10": {
    "marginTop": "20",
    "marginRight": "20",
    "marginBottom": "20",
    "marginLeft": "20"
  },
  "uni-ma-n10": {
    "marginTop": "-20",
    "marginRight": "-20",
    "marginBottom": "-20",
    "marginLeft": "-20"
  },
  "uni-mt-11": {
    "marginTop": "22"
  },
  "uni-mt-n11": {
    "marginTop": "-22"
  },
  "uni-mr-11": {
    "marginRight": "22"
  },
  "uni-mr-n11": {
    "marginRight": "-22"
  },
  "uni-mb-11": {
    "marginBottom": "22"
  },
  "uni-mb-n11": {
    "marginBottom": "-22"
  },
  "uni-ml-11": {
    "marginLeft": "22"
  },
  "uni-ml-n11": {
    "marginLeft": "-22"
  },
  "uni-mx-11": {
    "marginLeft": "22",
    "marginRight": "22"
  },
  "uni-mx-n11": {
    "marginLeft": "-22",
    "marginRight": "-22"
  },
  "uni-my-11": {
    "marginTop": "22",
    "marginBottom": "22"
  },
  "uni-my-n11": {
    "marginTop": "-22",
    "marginBottom": "-22"
  },
  "uni-ma-11": {
    "marginTop": "22",
    "marginRight": "22",
    "marginBottom": "22",
    "marginLeft": "22"
  },
  "uni-ma-n11": {
    "marginTop": "-22",
    "marginRight": "-22",
    "marginBottom": "-22",
    "marginLeft": "-22"
  },
  "uni-mt-12": {
    "marginTop": "24"
  },
  "uni-mt-n12": {
    "marginTop": "-24"
  },
  "uni-mr-12": {
    "marginRight": "24"
  },
  "uni-mr-n12": {
    "marginRight": "-24"
  },
  "uni-mb-12": {
    "marginBottom": "24"
  },
  "uni-mb-n12": {
    "marginBottom": "-24"
  },
  "uni-ml-12": {
    "marginLeft": "24"
  },
  "uni-ml-n12": {
    "marginLeft": "-24"
  },
  "uni-mx-12": {
    "marginLeft": "24",
    "marginRight": "24"
  },
  "uni-mx-n12": {
    "marginLeft": "-24",
    "marginRight": "-24"
  },
  "uni-my-12": {
    "marginTop": "24",
    "marginBottom": "24"
  },
  "uni-my-n12": {
    "marginTop": "-24",
    "marginBottom": "-24"
  },
  "uni-ma-12": {
    "marginTop": "24",
    "marginRight": "24",
    "marginBottom": "24",
    "marginLeft": "24"
  },
  "uni-ma-n12": {
    "marginTop": "-24",
    "marginRight": "-24",
    "marginBottom": "-24",
    "marginLeft": "-24"
  },
  "uni-mt-13": {
    "marginTop": "26"
  },
  "uni-mt-n13": {
    "marginTop": "-26"
  },
  "uni-mr-13": {
    "marginRight": "26"
  },
  "uni-mr-n13": {
    "marginRight": "-26"
  },
  "uni-mb-13": {
    "marginBottom": "26"
  },
  "uni-mb-n13": {
    "marginBottom": "-26"
  },
  "uni-ml-13": {
    "marginLeft": "26"
  },
  "uni-ml-n13": {
    "marginLeft": "-26"
  },
  "uni-mx-13": {
    "marginLeft": "26",
    "marginRight": "26"
  },
  "uni-mx-n13": {
    "marginLeft": "-26",
    "marginRight": "-26"
  },
  "uni-my-13": {
    "marginTop": "26",
    "marginBottom": "26"
  },
  "uni-my-n13": {
    "marginTop": "-26",
    "marginBottom": "-26"
  },
  "uni-ma-13": {
    "marginTop": "26",
    "marginRight": "26",
    "marginBottom": "26",
    "marginLeft": "26"
  },
  "uni-ma-n13": {
    "marginTop": "-26",
    "marginRight": "-26",
    "marginBottom": "-26",
    "marginLeft": "-26"
  },
  "uni-mt-14": {
    "marginTop": "28"
  },
  "uni-mt-n14": {
    "marginTop": "-28"
  },
  "uni-mr-14": {
    "marginRight": "28"
  },
  "uni-mr-n14": {
    "marginRight": "-28"
  },
  "uni-mb-14": {
    "marginBottom": "28"
  },
  "uni-mb-n14": {
    "marginBottom": "-28"
  },
  "uni-ml-14": {
    "marginLeft": "28"
  },
  "uni-ml-n14": {
    "marginLeft": "-28"
  },
  "uni-mx-14": {
    "marginLeft": "28",
    "marginRight": "28"
  },
  "uni-mx-n14": {
    "marginLeft": "-28",
    "marginRight": "-28"
  },
  "uni-my-14": {
    "marginTop": "28",
    "marginBottom": "28"
  },
  "uni-my-n14": {
    "marginTop": "-28",
    "marginBottom": "-28"
  },
  "uni-ma-14": {
    "marginTop": "28",
    "marginRight": "28",
    "marginBottom": "28",
    "marginLeft": "28"
  },
  "uni-ma-n14": {
    "marginTop": "-28",
    "marginRight": "-28",
    "marginBottom": "-28",
    "marginLeft": "-28"
  },
  "uni-mt-15": {
    "marginTop": "30"
  },
  "uni-mt-n15": {
    "marginTop": "-30"
  },
  "uni-mr-15": {
    "marginRight": "30"
  },
  "uni-mr-n15": {
    "marginRight": "-30"
  },
  "uni-mb-15": {
    "marginBottom": "30"
  },
  "uni-mb-n15": {
    "marginBottom": "-30"
  },
  "uni-ml-15": {
    "marginLeft": "30"
  },
  "uni-ml-n15": {
    "marginLeft": "-30"
  },
  "uni-mx-15": {
    "marginLeft": "30",
    "marginRight": "30"
  },
  "uni-mx-n15": {
    "marginLeft": "-30",
    "marginRight": "-30"
  },
  "uni-my-15": {
    "marginTop": "30",
    "marginBottom": "30"
  },
  "uni-my-n15": {
    "marginTop": "-30",
    "marginBottom": "-30"
  },
  "uni-ma-15": {
    "marginTop": "30",
    "marginRight": "30",
    "marginBottom": "30",
    "marginLeft": "30"
  },
  "uni-ma-n15": {
    "marginTop": "-30",
    "marginRight": "-30",
    "marginBottom": "-30",
    "marginLeft": "-30"
  },
  "uni-mt-16": {
    "marginTop": "32"
  },
  "uni-mt-n16": {
    "marginTop": "-32"
  },
  "uni-mr-16": {
    "marginRight": "32"
  },
  "uni-mr-n16": {
    "marginRight": "-32"
  },
  "uni-mb-16": {
    "marginBottom": "32"
  },
  "uni-mb-n16": {
    "marginBottom": "-32"
  },
  "uni-ml-16": {
    "marginLeft": "32"
  },
  "uni-ml-n16": {
    "marginLeft": "-32"
  },
  "uni-mx-16": {
    "marginLeft": "32",
    "marginRight": "32"
  },
  "uni-mx-n16": {
    "marginLeft": "-32",
    "marginRight": "-32"
  },
  "uni-my-16": {
    "marginTop": "32",
    "marginBottom": "32"
  },
  "uni-my-n16": {
    "marginTop": "-32",
    "marginBottom": "-32"
  },
  "uni-ma-16": {
    "marginTop": "32",
    "marginRight": "32",
    "marginBottom": "32",
    "marginLeft": "32"
  },
  "uni-ma-n16": {
    "marginTop": "-32",
    "marginRight": "-32",
    "marginBottom": "-32",
    "marginLeft": "-32"
  },
  "uni-pt-0": {
    "paddingTop": "0"
  },
  "uni-pt-n0": {
    "paddingTop": "0"
  },
  "uni-pr-0": {
    "paddingRight": "0"
  },
  "uni-pr-n0": {
    "paddingRight": "0"
  },
  "uni-pb-0": {
    "paddingBottom": "0"
  },
  "uni-pb-n0": {
    "paddingBottom": "0"
  },
  "uni-pl-0": {
    "paddingLeft": "0"
  },
  "uni-pl-n0": {
    "paddingLeft": "0"
  },
  "uni-px-0": {
    "paddingLeft": "0",
    "paddingRight": "0"
  },
  "uni-px-n0": {
    "paddingLeft": "0",
    "paddingRight": "0"
  },
  "uni-py-0": {
    "paddingTop": "0",
    "paddingBottom": "0"
  },
  "uni-py-n0": {
    "paddingTop": "0",
    "paddingBottom": "0"
  },
  "uni-pa-0": {
    "paddingTop": "0",
    "paddingRight": "0",
    "paddingBottom": "0",
    "paddingLeft": "0"
  },
  "uni-pa-n0": {
    "paddingTop": "0",
    "paddingRight": "0",
    "paddingBottom": "0",
    "paddingLeft": "0"
  },
  "uni-pt-1": {
    "paddingTop": "2"
  },
  "uni-pt-n1": {
    "paddingTop": "-2"
  },
  "uni-pr-1": {
    "paddingRight": "2"
  },
  "uni-pr-n1": {
    "paddingRight": "-2"
  },
  "uni-pb-1": {
    "paddingBottom": "2"
  },
  "uni-pb-n1": {
    "paddingBottom": "-2"
  },
  "uni-pl-1": {
    "paddingLeft": "2"
  },
  "uni-pl-n1": {
    "paddingLeft": "-2"
  },
  "uni-px-1": {
    "paddingLeft": "2",
    "paddingRight": "2"
  },
  "uni-px-n1": {
    "paddingLeft": "-2",
    "paddingRight": "-2"
  },
  "uni-py-1": {
    "paddingTop": "2",
    "paddingBottom": "2"
  },
  "uni-py-n1": {
    "paddingTop": "-2",
    "paddingBottom": "-2"
  },
  "uni-pa-1": {
    "paddingTop": "2",
    "paddingRight": "2",
    "paddingBottom": "2",
    "paddingLeft": "2"
  },
  "uni-pa-n1": {
    "paddingTop": "-2",
    "paddingRight": "-2",
    "paddingBottom": "-2",
    "paddingLeft": "-2"
  },
  "uni-pt-2": {
    "paddingTop": "4"
  },
  "uni-pt-n2": {
    "paddingTop": "-4"
  },
  "uni-pr-2": {
    "paddingRight": "4"
  },
  "uni-pr-n2": {
    "paddingRight": "-4"
  },
  "uni-pb-2": {
    "paddingBottom": "4"
  },
  "uni-pb-n2": {
    "paddingBottom": "-4"
  },
  "uni-pl-2": {
    "paddingLeft": "4"
  },
  "uni-pl-n2": {
    "paddingLeft": "-4"
  },
  "uni-px-2": {
    "paddingLeft": "4",
    "paddingRight": "4"
  },
  "uni-px-n2": {
    "paddingLeft": "-4",
    "paddingRight": "-4"
  },
  "uni-py-2": {
    "paddingTop": "4",
    "paddingBottom": "4"
  },
  "uni-py-n2": {
    "paddingTop": "-4",
    "paddingBottom": "-4"
  },
  "uni-pa-2": {
    "paddingTop": "4",
    "paddingRight": "4",
    "paddingBottom": "4",
    "paddingLeft": "4"
  },
  "uni-pa-n2": {
    "paddingTop": "-4",
    "paddingRight": "-4",
    "paddingBottom": "-4",
    "paddingLeft": "-4"
  },
  "uni-pt-3": {
    "paddingTop": "6"
  },
  "uni-pt-n3": {
    "paddingTop": "-6"
  },
  "uni-pr-3": {
    "paddingRight": "6"
  },
  "uni-pr-n3": {
    "paddingRight": "-6"
  },
  "uni-pb-3": {
    "paddingBottom": "6"
  },
  "uni-pb-n3": {
    "paddingBottom": "-6"
  },
  "uni-pl-3": {
    "paddingLeft": "6"
  },
  "uni-pl-n3": {
    "paddingLeft": "-6"
  },
  "uni-px-3": {
    "paddingLeft": "6",
    "paddingRight": "6"
  },
  "uni-px-n3": {
    "paddingLeft": "-6",
    "paddingRight": "-6"
  },
  "uni-py-3": {
    "paddingTop": "6",
    "paddingBottom": "6"
  },
  "uni-py-n3": {
    "paddingTop": "-6",
    "paddingBottom": "-6"
  },
  "uni-pa-3": {
    "paddingTop": "6",
    "paddingRight": "6",
    "paddingBottom": "6",
    "paddingLeft": "6"
  },
  "uni-pa-n3": {
    "paddingTop": "-6",
    "paddingRight": "-6",
    "paddingBottom": "-6",
    "paddingLeft": "-6"
  },
  "uni-pt-4": {
    "paddingTop": "8"
  },
  "uni-pt-n4": {
    "paddingTop": "-8"
  },
  "uni-pr-4": {
    "paddingRight": "8"
  },
  "uni-pr-n4": {
    "paddingRight": "-8"
  },
  "uni-pb-4": {
    "paddingBottom": "8"
  },
  "uni-pb-n4": {
    "paddingBottom": "-8"
  },
  "uni-pl-4": {
    "paddingLeft": "8"
  },
  "uni-pl-n4": {
    "paddingLeft": "-8"
  },
  "uni-px-4": {
    "paddingLeft": "8",
    "paddingRight": "8"
  },
  "uni-px-n4": {
    "paddingLeft": "-8",
    "paddingRight": "-8"
  },
  "uni-py-4": {
    "paddingTop": "8",
    "paddingBottom": "8"
  },
  "uni-py-n4": {
    "paddingTop": "-8",
    "paddingBottom": "-8"
  },
  "uni-pa-4": {
    "paddingTop": "8",
    "paddingRight": "8",
    "paddingBottom": "8",
    "paddingLeft": "8"
  },
  "uni-pa-n4": {
    "paddingTop": "-8",
    "paddingRight": "-8",
    "paddingBottom": "-8",
    "paddingLeft": "-8"
  },
  "uni-pt-5": {
    "paddingTop": "10"
  },
  "uni-pt-n5": {
    "paddingTop": "-10"
  },
  "uni-pr-5": {
    "paddingRight": "10"
  },
  "uni-pr-n5": {
    "paddingRight": "-10"
  },
  "uni-pb-5": {
    "paddingBottom": "10"
  },
  "uni-pb-n5": {
    "paddingBottom": "-10"
  },
  "uni-pl-5": {
    "paddingLeft": "10"
  },
  "uni-pl-n5": {
    "paddingLeft": "-10"
  },
  "uni-px-5": {
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "uni-px-n5": {
    "paddingLeft": "-10",
    "paddingRight": "-10"
  },
  "uni-py-5": {
    "paddingTop": "10",
    "paddingBottom": "10"
  },
  "uni-py-n5": {
    "paddingTop": "-10",
    "paddingBottom": "-10"
  },
  "uni-pa-5": {
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  },
  "uni-pa-n5": {
    "paddingTop": "-10",
    "paddingRight": "-10",
    "paddingBottom": "-10",
    "paddingLeft": "-10"
  },
  "uni-pt-6": {
    "paddingTop": "12"
  },
  "uni-pt-n6": {
    "paddingTop": "-12"
  },
  "uni-pr-6": {
    "paddingRight": "12"
  },
  "uni-pr-n6": {
    "paddingRight": "-12"
  },
  "uni-pb-6": {
    "paddingBottom": "12"
  },
  "uni-pb-n6": {
    "paddingBottom": "-12"
  },
  "uni-pl-6": {
    "paddingLeft": "12"
  },
  "uni-pl-n6": {
    "paddingLeft": "-12"
  },
  "uni-px-6": {
    "paddingLeft": "12",
    "paddingRight": "12"
  },
  "uni-px-n6": {
    "paddingLeft": "-12",
    "paddingRight": "-12"
  },
  "uni-py-6": {
    "paddingTop": "12",
    "paddingBottom": "12"
  },
  "uni-py-n6": {
    "paddingTop": "-12",
    "paddingBottom": "-12"
  },
  "uni-pa-6": {
    "paddingTop": "12",
    "paddingRight": "12",
    "paddingBottom": "12",
    "paddingLeft": "12"
  },
  "uni-pa-n6": {
    "paddingTop": "-12",
    "paddingRight": "-12",
    "paddingBottom": "-12",
    "paddingLeft": "-12"
  },
  "uni-pt-7": {
    "paddingTop": "14"
  },
  "uni-pt-n7": {
    "paddingTop": "-14"
  },
  "uni-pr-7": {
    "paddingRight": "14"
  },
  "uni-pr-n7": {
    "paddingRight": "-14"
  },
  "uni-pb-7": {
    "paddingBottom": "14"
  },
  "uni-pb-n7": {
    "paddingBottom": "-14"
  },
  "uni-pl-7": {
    "paddingLeft": "14"
  },
  "uni-pl-n7": {
    "paddingLeft": "-14"
  },
  "uni-px-7": {
    "paddingLeft": "14",
    "paddingRight": "14"
  },
  "uni-px-n7": {
    "paddingLeft": "-14",
    "paddingRight": "-14"
  },
  "uni-py-7": {
    "paddingTop": "14",
    "paddingBottom": "14"
  },
  "uni-py-n7": {
    "paddingTop": "-14",
    "paddingBottom": "-14"
  },
  "uni-pa-7": {
    "paddingTop": "14",
    "paddingRight": "14",
    "paddingBottom": "14",
    "paddingLeft": "14"
  },
  "uni-pa-n7": {
    "paddingTop": "-14",
    "paddingRight": "-14",
    "paddingBottom": "-14",
    "paddingLeft": "-14"
  },
  "uni-pt-8": {
    "paddingTop": "16"
  },
  "uni-pt-n8": {
    "paddingTop": "-16"
  },
  "uni-pr-8": {
    "paddingRight": "16"
  },
  "uni-pr-n8": {
    "paddingRight": "-16"
  },
  "uni-pb-8": {
    "paddingBottom": "16"
  },
  "uni-pb-n8": {
    "paddingBottom": "-16"
  },
  "uni-pl-8": {
    "paddingLeft": "16"
  },
  "uni-pl-n8": {
    "paddingLeft": "-16"
  },
  "uni-px-8": {
    "paddingLeft": "16",
    "paddingRight": "16"
  },
  "uni-px-n8": {
    "paddingLeft": "-16",
    "paddingRight": "-16"
  },
  "uni-py-8": {
    "paddingTop": "16",
    "paddingBottom": "16"
  },
  "uni-py-n8": {
    "paddingTop": "-16",
    "paddingBottom": "-16"
  },
  "uni-pa-8": {
    "paddingTop": "16",
    "paddingRight": "16",
    "paddingBottom": "16",
    "paddingLeft": "16"
  },
  "uni-pa-n8": {
    "paddingTop": "-16",
    "paddingRight": "-16",
    "paddingBottom": "-16",
    "paddingLeft": "-16"
  },
  "uni-pt-9": {
    "paddingTop": "18"
  },
  "uni-pt-n9": {
    "paddingTop": "-18"
  },
  "uni-pr-9": {
    "paddingRight": "18"
  },
  "uni-pr-n9": {
    "paddingRight": "-18"
  },
  "uni-pb-9": {
    "paddingBottom": "18"
  },
  "uni-pb-n9": {
    "paddingBottom": "-18"
  },
  "uni-pl-9": {
    "paddingLeft": "18"
  },
  "uni-pl-n9": {
    "paddingLeft": "-18"
  },
  "uni-px-9": {
    "paddingLeft": "18",
    "paddingRight": "18"
  },
  "uni-px-n9": {
    "paddingLeft": "-18",
    "paddingRight": "-18"
  },
  "uni-py-9": {
    "paddingTop": "18",
    "paddingBottom": "18"
  },
  "uni-py-n9": {
    "paddingTop": "-18",
    "paddingBottom": "-18"
  },
  "uni-pa-9": {
    "paddingTop": "18",
    "paddingRight": "18",
    "paddingBottom": "18",
    "paddingLeft": "18"
  },
  "uni-pa-n9": {
    "paddingTop": "-18",
    "paddingRight": "-18",
    "paddingBottom": "-18",
    "paddingLeft": "-18"
  },
  "uni-pt-10": {
    "paddingTop": "20"
  },
  "uni-pt-n10": {
    "paddingTop": "-20"
  },
  "uni-pr-10": {
    "paddingRight": "20"
  },
  "uni-pr-n10": {
    "paddingRight": "-20"
  },
  "uni-pb-10": {
    "paddingBottom": "20"
  },
  "uni-pb-n10": {
    "paddingBottom": "-20"
  },
  "uni-pl-10": {
    "paddingLeft": "20"
  },
  "uni-pl-n10": {
    "paddingLeft": "-20"
  },
  "uni-px-10": {
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "uni-px-n10": {
    "paddingLeft": "-20",
    "paddingRight": "-20"
  },
  "uni-py-10": {
    "paddingTop": "20",
    "paddingBottom": "20"
  },
  "uni-py-n10": {
    "paddingTop": "-20",
    "paddingBottom": "-20"
  },
  "uni-pa-10": {
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20"
  },
  "uni-pa-n10": {
    "paddingTop": "-20",
    "paddingRight": "-20",
    "paddingBottom": "-20",
    "paddingLeft": "-20"
  },
  "uni-pt-11": {
    "paddingTop": "22"
  },
  "uni-pt-n11": {
    "paddingTop": "-22"
  },
  "uni-pr-11": {
    "paddingRight": "22"
  },
  "uni-pr-n11": {
    "paddingRight": "-22"
  },
  "uni-pb-11": {
    "paddingBottom": "22"
  },
  "uni-pb-n11": {
    "paddingBottom": "-22"
  },
  "uni-pl-11": {
    "paddingLeft": "22"
  },
  "uni-pl-n11": {
    "paddingLeft": "-22"
  },
  "uni-px-11": {
    "paddingLeft": "22",
    "paddingRight": "22"
  },
  "uni-px-n11": {
    "paddingLeft": "-22",
    "paddingRight": "-22"
  },
  "uni-py-11": {
    "paddingTop": "22",
    "paddingBottom": "22"
  },
  "uni-py-n11": {
    "paddingTop": "-22",
    "paddingBottom": "-22"
  },
  "uni-pa-11": {
    "paddingTop": "22",
    "paddingRight": "22",
    "paddingBottom": "22",
    "paddingLeft": "22"
  },
  "uni-pa-n11": {
    "paddingTop": "-22",
    "paddingRight": "-22",
    "paddingBottom": "-22",
    "paddingLeft": "-22"
  },
  "uni-pt-12": {
    "paddingTop": "24"
  },
  "uni-pt-n12": {
    "paddingTop": "-24"
  },
  "uni-pr-12": {
    "paddingRight": "24"
  },
  "uni-pr-n12": {
    "paddingRight": "-24"
  },
  "uni-pb-12": {
    "paddingBottom": "24"
  },
  "uni-pb-n12": {
    "paddingBottom": "-24"
  },
  "uni-pl-12": {
    "paddingLeft": "24"
  },
  "uni-pl-n12": {
    "paddingLeft": "-24"
  },
  "uni-px-12": {
    "paddingLeft": "24",
    "paddingRight": "24"
  },
  "uni-px-n12": {
    "paddingLeft": "-24",
    "paddingRight": "-24"
  },
  "uni-py-12": {
    "paddingTop": "24",
    "paddingBottom": "24"
  },
  "uni-py-n12": {
    "paddingTop": "-24",
    "paddingBottom": "-24"
  },
  "uni-pa-12": {
    "paddingTop": "24",
    "paddingRight": "24",
    "paddingBottom": "24",
    "paddingLeft": "24"
  },
  "uni-pa-n12": {
    "paddingTop": "-24",
    "paddingRight": "-24",
    "paddingBottom": "-24",
    "paddingLeft": "-24"
  },
  "uni-pt-13": {
    "paddingTop": "26"
  },
  "uni-pt-n13": {
    "paddingTop": "-26"
  },
  "uni-pr-13": {
    "paddingRight": "26"
  },
  "uni-pr-n13": {
    "paddingRight": "-26"
  },
  "uni-pb-13": {
    "paddingBottom": "26"
  },
  "uni-pb-n13": {
    "paddingBottom": "-26"
  },
  "uni-pl-13": {
    "paddingLeft": "26"
  },
  "uni-pl-n13": {
    "paddingLeft": "-26"
  },
  "uni-px-13": {
    "paddingLeft": "26",
    "paddingRight": "26"
  },
  "uni-px-n13": {
    "paddingLeft": "-26",
    "paddingRight": "-26"
  },
  "uni-py-13": {
    "paddingTop": "26",
    "paddingBottom": "26"
  },
  "uni-py-n13": {
    "paddingTop": "-26",
    "paddingBottom": "-26"
  },
  "uni-pa-13": {
    "paddingTop": "26",
    "paddingRight": "26",
    "paddingBottom": "26",
    "paddingLeft": "26"
  },
  "uni-pa-n13": {
    "paddingTop": "-26",
    "paddingRight": "-26",
    "paddingBottom": "-26",
    "paddingLeft": "-26"
  },
  "uni-pt-14": {
    "paddingTop": "28"
  },
  "uni-pt-n14": {
    "paddingTop": "-28"
  },
  "uni-pr-14": {
    "paddingRight": "28"
  },
  "uni-pr-n14": {
    "paddingRight": "-28"
  },
  "uni-pb-14": {
    "paddingBottom": "28"
  },
  "uni-pb-n14": {
    "paddingBottom": "-28"
  },
  "uni-pl-14": {
    "paddingLeft": "28"
  },
  "uni-pl-n14": {
    "paddingLeft": "-28"
  },
  "uni-px-14": {
    "paddingLeft": "28",
    "paddingRight": "28"
  },
  "uni-px-n14": {
    "paddingLeft": "-28",
    "paddingRight": "-28"
  },
  "uni-py-14": {
    "paddingTop": "28",
    "paddingBottom": "28"
  },
  "uni-py-n14": {
    "paddingTop": "-28",
    "paddingBottom": "-28"
  },
  "uni-pa-14": {
    "paddingTop": "28",
    "paddingRight": "28",
    "paddingBottom": "28",
    "paddingLeft": "28"
  },
  "uni-pa-n14": {
    "paddingTop": "-28",
    "paddingRight": "-28",
    "paddingBottom": "-28",
    "paddingLeft": "-28"
  },
  "uni-pt-15": {
    "paddingTop": "30"
  },
  "uni-pt-n15": {
    "paddingTop": "-30"
  },
  "uni-pr-15": {
    "paddingRight": "30"
  },
  "uni-pr-n15": {
    "paddingRight": "-30"
  },
  "uni-pb-15": {
    "paddingBottom": "30"
  },
  "uni-pb-n15": {
    "paddingBottom": "-30"
  },
  "uni-pl-15": {
    "paddingLeft": "30"
  },
  "uni-pl-n15": {
    "paddingLeft": "-30"
  },
  "uni-px-15": {
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "uni-px-n15": {
    "paddingLeft": "-30",
    "paddingRight": "-30"
  },
  "uni-py-15": {
    "paddingTop": "30",
    "paddingBottom": "30"
  },
  "uni-py-n15": {
    "paddingTop": "-30",
    "paddingBottom": "-30"
  },
  "uni-pa-15": {
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30"
  },
  "uni-pa-n15": {
    "paddingTop": "-30",
    "paddingRight": "-30",
    "paddingBottom": "-30",
    "paddingLeft": "-30"
  },
  "uni-pt-16": {
    "paddingTop": "32"
  },
  "uni-pt-n16": {
    "paddingTop": "-32"
  },
  "uni-pr-16": {
    "paddingRight": "32"
  },
  "uni-pr-n16": {
    "paddingRight": "-32"
  },
  "uni-pb-16": {
    "paddingBottom": "32"
  },
  "uni-pb-n16": {
    "paddingBottom": "-32"
  },
  "uni-pl-16": {
    "paddingLeft": "32"
  },
  "uni-pl-n16": {
    "paddingLeft": "-32"
  },
  "uni-px-16": {
    "paddingLeft": "32",
    "paddingRight": "32"
  },
  "uni-px-n16": {
    "paddingLeft": "-32",
    "paddingRight": "-32"
  },
  "uni-py-16": {
    "paddingTop": "32",
    "paddingBottom": "32"
  },
  "uni-py-n16": {
    "paddingTop": "-32",
    "paddingBottom": "-32"
  },
  "uni-pa-16": {
    "paddingTop": "32",
    "paddingRight": "32",
    "paddingBottom": "32",
    "paddingLeft": "32"
  },
  "uni-pa-n16": {
    "paddingTop": "-32",
    "paddingRight": "-32",
    "paddingBottom": "-32",
    "paddingLeft": "-32"
  },
  "uni-radius-0": {
    "borderRadius": 0
  },
  "uni-radius": {
    "borderRadius": "5"
  },
  "uni-radius-lg": {
    "borderRadius": "10"
  },
  "uni-radius-xl": {
    "borderRadius": "30"
  },
  "uni-radius-pill": {
    "borderRadius": "9999"
  },
  "uni-radius-circle": {
    "borderRadius": 50
  },
  "uni-radius-t-0": {
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0
  },
  "uni-radius-t": {
    "borderTopLeftRadius": "5",
    "borderTopRightRadius": "5"
  },
  "uni-radius-t-lg": {
    "borderTopLeftRadius": "10",
    "borderTopRightRadius": "10"
  },
  "uni-radius-t-xl": {
    "borderTopLeftRadius": "30",
    "borderTopRightRadius": "30"
  },
  "uni-radius-t-pill": {
    "borderTopLeftRadius": "9999",
    "borderTopRightRadius": "9999"
  },
  "uni-radius-t-circle": {
    "borderTopLeftRadius": 50,
    "borderTopRightRadius": 50
  },
  "uni-radius-r-0": {
    "borderTopRightRadius": 0,
    "borderBottomRightRadius": 0
  },
  "uni-radius-r": {
    "borderTopRightRadius": "5",
    "borderBottomRightRadius": "5"
  },
  "uni-radius-r-lg": {
    "borderTopRightRadius": "10",
    "borderBottomRightRadius": "10"
  },
  "uni-radius-r-xl": {
    "borderTopRightRadius": "30",
    "borderBottomRightRadius": "30"
  },
  "uni-radius-r-pill": {
    "borderTopRightRadius": "9999",
    "borderBottomRightRadius": "9999"
  },
  "uni-radius-r-circle": {
    "borderTopRightRadius": 50,
    "borderBottomRightRadius": 50
  },
  "uni-radius-b-0": {
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0
  },
  "uni-radius-b": {
    "borderBottomLeftRadius": "5",
    "borderBottomRightRadius": "5"
  },
  "uni-radius-b-lg": {
    "borderBottomLeftRadius": "10",
    "borderBottomRightRadius": "10"
  },
  "uni-radius-b-xl": {
    "borderBottomLeftRadius": "30",
    "borderBottomRightRadius": "30"
  },
  "uni-radius-b-pill": {
    "borderBottomLeftRadius": "9999",
    "borderBottomRightRadius": "9999"
  },
  "uni-radius-b-circle": {
    "borderBottomLeftRadius": 50,
    "borderBottomRightRadius": 50
  },
  "uni-radius-l-0": {
    "borderTopLeftRadius": 0,
    "borderBottomLeftRadius": 0
  },
  "uni-radius-l": {
    "borderTopLeftRadius": "5",
    "borderBottomLeftRadius": "5"
  },
  "uni-radius-l-lg": {
    "borderTopLeftRadius": "10",
    "borderBottomLeftRadius": "10"
  },
  "uni-radius-l-xl": {
    "borderTopLeftRadius": "30",
    "borderBottomLeftRadius": "30"
  },
  "uni-radius-l-pill": {
    "borderTopLeftRadius": "9999",
    "borderBottomLeftRadius": "9999"
  },
  "uni-radius-l-circle": {
    "borderTopLeftRadius": 50,
    "borderBottomLeftRadius": 50
  },
  "uni-radius-tl-0": {
    "borderTopLeftRadius": 0
  },
  "uni-radius-tl": {
    "borderTopLeftRadius": "5"
  },
  "uni-radius-tl-lg": {
    "borderTopLeftRadius": "10"
  },
  "uni-radius-tl-xl": {
    "borderTopLeftRadius": "30"
  },
  "uni-radius-tl-pill": {
    "borderTopLeftRadius": "9999"
  },
  "uni-radius-tl-circle": {
    "borderTopLeftRadius": 50
  },
  "uni-radius-tr-0": {
    "borderTopRightRadius": 0
  },
  "uni-radius-tr": {
    "borderTopRightRadius": "5"
  },
  "uni-radius-tr-lg": {
    "borderTopRightRadius": "10"
  },
  "uni-radius-tr-xl": {
    "borderTopRightRadius": "30"
  },
  "uni-radius-tr-pill": {
    "borderTopRightRadius": "9999"
  },
  "uni-radius-tr-circle": {
    "borderTopRightRadius": 50
  },
  "uni-radius-br-0": {
    "borderBottomRightRadius": 0
  },
  "uni-radius-br": {
    "borderBottomRightRadius": "5"
  },
  "uni-radius-br-lg": {
    "borderBottomRightRadius": "10"
  },
  "uni-radius-br-xl": {
    "borderBottomRightRadius": "30"
  },
  "uni-radius-br-pill": {
    "borderBottomRightRadius": "9999"
  },
  "uni-radius-br-circle": {
    "borderBottomRightRadius": 50
  },
  "uni-radius-bl-0": {
    "borderBottomLeftRadius": 0
  },
  "uni-radius-bl": {
    "borderBottomLeftRadius": "5"
  },
  "uni-radius-bl-lg": {
    "borderBottomLeftRadius": "10"
  },
  "uni-radius-bl-xl": {
    "borderBottomLeftRadius": "30"
  },
  "uni-radius-bl-pill": {
    "borderBottomLeftRadius": "9999"
  },
  "uni-radius-bl-circle": {
    "borderBottomLeftRadius": 50
  },
  "example-info": {
    "fontSize": "14",
    "color": "#333333",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatLog;
exports.log = log;
function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}
function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;
  }
}
function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}
function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();
    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  console[type](msg);
}

/***/ }),
/* 29 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 30 */
/*!**********************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/api/showCooking/showCooking.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 16);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _request = _interopRequireDefault(__webpack_require__(/*! @/api/request */ 31));\n// 引入封装好的request\n/* 视频发布 */\n\n// 1. 新增视频发布\nfunction addVideo(data) {\n  return (0, _request.default)({\n    method: \"POST\",\n    // 请求方式\n    url: '/kitchen/ShowCooking/addVideo',\n    // 请求url\n    data: data\n  });\n}\n// 2. 获取视频详情\nfunction getShowCookingById(query) {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen/ShowCooking/getShowCookingById',\n    // 请求url\n    params: query\n  });\n}\n// 3. 查询视频列表\nfunction listVideo(query) {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen/ShowCooking/listVideo',\n    // 请求url\n    params: query\n  });\n}\n// 4. 查询我的收藏视频列表\nfunction myLikeVideoList(query) {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen/ShowCooking/myLikeVideoList',\n    // 请求url\n    params: query\n  });\n}\n// 5. 查询我的发布视频列表\nfunction myReleaseVideoList(query) {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen/ShowCooking/myReleaseVideoList',\n    // 请求url\n    params: query\n  });\n}\n// 6. 查询我的点赞视频列表\nfunction mySupportVideoList(query) {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen/ShowCooking/mySupportVideoList',\n    // 请求url\n    params: query\n  });\n}\n\n/* 关注 */\n\n// 1. 关注\nfunction ShowCookingFollow(data) {\n  return (0, _request.default)({\n    method: \"POST\",\n    // 请求方式\n    url: '/kitchen/ShowCookingFollow',\n    // 请求url\n    data: data\n  });\n}\n// 2. 取消关注\nfunction cancelFollow(query) {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen/ShowCookingFollow/cancelFollow',\n    // 请求url\n    params: query\n  });\n}\n// 3. 查询我的关注数量和我的粉丝数量\nfunction findFollowedMeCountAndMyFollowerCount() {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen/ShowCookingFollow/findFollowedMeCountAndMyFollowerCount' // 请求url\n  });\n}\n// 4. 查询我的粉丝列表\nfunction findFollowedMeList() {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen​​/ShowCookingFollow​/findFollowedMeList' // 请求url\n  });\n}\n// 5. 查询我是否关注该用户\nfunction findIsFollowUser(query) {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen/ShowCookingFollow/findIsFollowUser',\n    // 请求url\n    params: query\n  });\n}\n// 6. 查询我的关注列表\nfunction findMyFollowerList() {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen​/ShowCookingFollow​/findMyFollowerList' // 请求url\n  });\n}\n\n/* 收藏 */\n\n// 1. 收藏\nfunction ShowCookingMyLike(data) {\n  return (0, _request.default)({\n    method: \"POST\",\n    // 请求方式\n    url: '/kitchen/ShowCookingMyLike',\n    // 请求url\n    data: data\n  });\n}\n// 2. 取消收藏\nfunction cancelLike(query) {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen/ShowCookingMyLike/cancelLike',\n    // 请求url\n    params: query\n  });\n}\n// 3. 查询是否收藏当前\nfunction findIsLikeVideo(query) {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen/ShowCookingMyLike/findIsLikeVideo',\n    // 请求url\n    params: query\n  });\n}\n// 4. 查询我的获收藏数量\nfunction findMyReceiveLikeNum() {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen​/ShowCookingMyLike​/findMyReceiveLikeNum' // 请求url\n  });\n}\n// 5. 查询我的收藏列表\nfunction ShowCookingMyLikeList() {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen​/ShowCookingMyLike​/list' // 请求url\n  });\n}\n\n/* 点赞 */\n\n// 1. 点赞\nfunction ShowCookingSupport(data) {\n  return (0, _request.default)({\n    method: \"POST\",\n    // 请求方式\n    url: '/kitchen/ShowCookingSupport',\n    // 请求url\n    data: data\n  });\n}\n// 2. 取消点赞\nfunction cancelSupport(query) {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen/ShowCookingSupport/cancelSupport',\n    // 请求url\n    params: query\n  });\n}\n// 3. 查询是否点赞当前\nfunction findIsSupportVideo(query) {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen/ShowCookingSupport/findIsSupportVideo',\n    // 请求url\n    params: query\n  });\n}\n// 4. 查询我的获点赞数量\nfunction findMyReceiveSupportNum() {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen/ShowCookingSupport/findMyReceiveSupportNum' // 请求url\n  });\n}\n// 5. 查询我的点赞列表\nfunction ShowCookingSupportList() {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen​/ShowCookingSupport​/list' // 请求url\n  });\n}\n\n/* 评价 */\n\n// 1. 新增评价\nfunction addEvaluation(data) {\n  return (0, _request.default)({\n    method: \"POST\",\n    // 请求方式\n    url: '/kitchen/ShowCookingEvaluation/addEvaluation',\n    // 请求url\n    data: data\n  });\n}\n// 2. 查询当前视频的评价列表\nfunction findEvaluationList(query) {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen/ShowCookingEvaluation/findEvaluationList',\n    // 请求url\n    params: query\n  });\n}\n\n/* 通知 */\n\n// 1. 查询通知详情\nfunction findNoticeById(query) {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen/ShowCookingNotice/findById',\n    // 请求url\n    params: query\n  });\n}\n// 2. 查询我的未读通知数量\nfunction findMyUnReadNoticeCount() {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen/ShowCookingNotice/findMyUnReadNoticeCount' // 请求url\n  });\n}\n// 2. 查询通知列表\nfunction ShowCookingNoticeList(query) {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/kitchen/ShowCookingNotice/list',\n    // 请求url\n    params: query\n  });\n}\nfunction findPercent() {\n  return (0, _request.default)({\n    method: \"GET\",\n    // 请求方式\n    url: '/file/getPercent'\n  });\n}\nvar _default = {\n  //晒厨艺视频发布接口\n  addVideo: addVideo,\n  getShowCookingById: getShowCookingById,\n  listVideo: listVideo,\n  myLikeVideoList: myLikeVideoList,\n  myReleaseVideoList: myReleaseVideoList,\n  mySupportVideoList: mySupportVideoList,\n  //晒厨艺关注接口\n  ShowCookingFollow: ShowCookingFollow,\n  cancelFollow: cancelFollow,\n  findFollowedMeCountAndMyFollowerCount: findFollowedMeCountAndMyFollowerCount,\n  findFollowedMeList: findFollowedMeList,\n  findIsFollowUser: findIsFollowUser,\n  findMyFollowerList: findMyFollowerList,\n  //晒厨艺收藏接口\n  ShowCookingMyLike: ShowCookingMyLike,\n  cancelLike: cancelLike,\n  findIsLikeVideo: findIsLikeVideo,\n  findMyReceiveLikeNum: findMyReceiveLikeNum,\n  ShowCookingMyLikeList: ShowCookingMyLikeList,\n  //晒厨艺点赞接口\n  ShowCookingSupport: ShowCookingSupport,\n  cancelSupport: cancelSupport,\n  findIsSupportVideo: findIsSupportVideo,\n  findMyReceiveSupportNum: findMyReceiveSupportNum,\n  ShowCookingSupportList: ShowCookingSupportList,\n  //晒厨艺评价接口\n  addEvaluation: addEvaluation,\n  findEvaluationList: findEvaluationList,\n  //晒厨艺通知接口\n  findNoticeById: findNoticeById,\n  findMyUnReadNoticeCount: findMyUnReadNoticeCount,\n  ShowCookingNoticeList: ShowCookingNoticeList,\n  findPercent: findPercent\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL3Nob3dDb29raW5nL3Nob3dDb29raW5nLmpzIl0sIm5hbWVzIjpbImFkZFZpZGVvIiwiZGF0YSIsInJlcXVlc3QiLCJtZXRob2QiLCJ1cmwiLCJnZXRTaG93Q29va2luZ0J5SWQiLCJxdWVyeSIsInBhcmFtcyIsImxpc3RWaWRlbyIsIm15TGlrZVZpZGVvTGlzdCIsIm15UmVsZWFzZVZpZGVvTGlzdCIsIm15U3VwcG9ydFZpZGVvTGlzdCIsIlNob3dDb29raW5nRm9sbG93IiwiY2FuY2VsRm9sbG93IiwiZmluZEZvbGxvd2VkTWVDb3VudEFuZE15Rm9sbG93ZXJDb3VudCIsImZpbmRGb2xsb3dlZE1lTGlzdCIsImZpbmRJc0ZvbGxvd1VzZXIiLCJmaW5kTXlGb2xsb3dlckxpc3QiLCJTaG93Q29va2luZ015TGlrZSIsImNhbmNlbExpa2UiLCJmaW5kSXNMaWtlVmlkZW8iLCJmaW5kTXlSZWNlaXZlTGlrZU51bSIsIlNob3dDb29raW5nTXlMaWtlTGlzdCIsIlNob3dDb29raW5nU3VwcG9ydCIsImNhbmNlbFN1cHBvcnQiLCJmaW5kSXNTdXBwb3J0VmlkZW8iLCJmaW5kTXlSZWNlaXZlU3VwcG9ydE51bSIsIlNob3dDb29raW5nU3VwcG9ydExpc3QiLCJhZGRFdmFsdWF0aW9uIiwiZmluZEV2YWx1YXRpb25MaXN0IiwiZmluZE5vdGljZUJ5SWQiLCJmaW5kTXlVblJlYWROb3RpY2VDb3VudCIsIlNob3dDb29raW5nTm90aWNlTGlzdCIsImZpbmRQZXJjZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBcUM7QUFDckM7O0FBRUE7QUFDQSxTQUFTQSxRQUFRLENBQUNDLElBQUksRUFBRTtFQUN2QixPQUFPLElBQUFDLGdCQUFPLEVBQUM7SUFDZEMsTUFBTSxFQUFFLE1BQU07SUFBRTtJQUNoQkMsR0FBRyxFQUFFLCtCQUErQjtJQUFFO0lBQ3RDSCxJQUFJLEVBQUVBO0VBQ1AsQ0FBQyxDQUFDO0FBQ0g7QUFDQTtBQUNBLFNBQVNJLGtCQUFrQixDQUFDQyxLQUFLLEVBQUU7RUFDbEMsT0FBTyxJQUFBSixnQkFBTyxFQUFDO0lBQ2RDLE1BQU0sRUFBRSxLQUFLO0lBQUU7SUFDZkMsR0FBRyxFQUFFLHlDQUF5QztJQUFFO0lBQ2hERyxNQUFNLEVBQUVEO0VBQ1QsQ0FBQyxDQUFDO0FBQ0g7QUFDQTtBQUNBLFNBQVNFLFNBQVMsQ0FBQ0YsS0FBSyxFQUFFO0VBQ3pCLE9BQU8sSUFBQUosZ0JBQU8sRUFBQztJQUNkQyxNQUFNLEVBQUUsS0FBSztJQUFFO0lBQ2ZDLEdBQUcsRUFBRSxnQ0FBZ0M7SUFBRTtJQUN2Q0csTUFBTSxFQUFFRDtFQUNULENBQUMsQ0FBQztBQUNIO0FBQ0E7QUFDQSxTQUFTRyxlQUFlLENBQUNILEtBQUssRUFBRTtFQUMvQixPQUFPLElBQUFKLGdCQUFPLEVBQUM7SUFDZEMsTUFBTSxFQUFFLEtBQUs7SUFBRTtJQUNmQyxHQUFHLEVBQUUsc0NBQXNDO0lBQUU7SUFDN0NHLE1BQU0sRUFBRUQ7RUFDVCxDQUFDLENBQUM7QUFDSDtBQUNBO0FBQ0EsU0FBU0ksa0JBQWtCLENBQUNKLEtBQUssRUFBRTtFQUNsQyxPQUFPLElBQUFKLGdCQUFPLEVBQUM7SUFDZEMsTUFBTSxFQUFFLEtBQUs7SUFBRTtJQUNmQyxHQUFHLEVBQUUseUNBQXlDO0lBQUU7SUFDaERHLE1BQU0sRUFBRUQ7RUFDVCxDQUFDLENBQUM7QUFDSDtBQUNBO0FBQ0EsU0FBU0ssa0JBQWtCLENBQUNMLEtBQUssRUFBRTtFQUNsQyxPQUFPLElBQUFKLGdCQUFPLEVBQUM7SUFDZEMsTUFBTSxFQUFFLEtBQUs7SUFBRTtJQUNmQyxHQUFHLEVBQUUseUNBQXlDO0lBQUU7SUFDaERHLE1BQU0sRUFBRUQ7RUFDVCxDQUFDLENBQUM7QUFDSDs7QUFJQTs7QUFFQTtBQUNBLFNBQVNNLGlCQUFpQixDQUFDWCxJQUFJLEVBQUU7RUFDaEMsT0FBTyxJQUFBQyxnQkFBTyxFQUFDO0lBQ2RDLE1BQU0sRUFBRSxNQUFNO0lBQUU7SUFDaEJDLEdBQUcsRUFBRSw0QkFBNEI7SUFBRTtJQUNuQ0gsSUFBSSxFQUFFQTtFQUNQLENBQUMsQ0FBQztBQUNIO0FBQ0E7QUFDQSxTQUFTWSxZQUFZLENBQUNQLEtBQUssRUFBRTtFQUM1QixPQUFPLElBQUFKLGdCQUFPLEVBQUM7SUFDZEMsTUFBTSxFQUFFLEtBQUs7SUFBRTtJQUNmQyxHQUFHLEVBQUUseUNBQXlDO0lBQUU7SUFDaERHLE1BQU0sRUFBRUQ7RUFDVCxDQUFDLENBQUM7QUFDSDtBQUNBO0FBQ0EsU0FBU1EscUNBQXFDLEdBQUc7RUFDaEQsT0FBTyxJQUFBWixnQkFBTyxFQUFDO0lBQ2RDLE1BQU0sRUFBRSxLQUFLO0lBQUU7SUFDZkMsR0FBRyxFQUFFLGtFQUFrRSxDQUFFO0VBQzFFLENBQUMsQ0FBQztBQUNIO0FBQ0E7QUFDQSxTQUFTVyxrQkFBa0IsR0FBRztFQUM3QixPQUFPLElBQUFiLGdCQUFPLEVBQUM7SUFDZEMsTUFBTSxFQUFFLEtBQUs7SUFBRTtJQUNmQyxHQUFHLEVBQUUsa0RBQWtELENBQUU7RUFDMUQsQ0FBQyxDQUFDO0FBQ0g7QUFDQTtBQUNBLFNBQVNZLGdCQUFnQixDQUFDVixLQUFLLEVBQUU7RUFDaEMsT0FBTyxJQUFBSixnQkFBTyxFQUFDO0lBQ2RDLE1BQU0sRUFBRSxLQUFLO0lBQUU7SUFDZkMsR0FBRyxFQUFFLDZDQUE2QztJQUFFO0lBQ3BERyxNQUFNLEVBQUVEO0VBQ1QsQ0FBQyxDQUFDO0FBQ0g7QUFDQTtBQUNBLFNBQVNXLGtCQUFrQixHQUFHO0VBQzdCLE9BQU8sSUFBQWYsZ0JBQU8sRUFBQztJQUNkQyxNQUFNLEVBQUUsS0FBSztJQUFFO0lBQ2ZDLEdBQUcsRUFBRSxpREFBaUQsQ0FBRTtFQUN6RCxDQUFDLENBQUM7QUFDSDs7QUFJQTs7QUFFQTtBQUNBLFNBQVNjLGlCQUFpQixDQUFDakIsSUFBSSxFQUFFO0VBQ2hDLE9BQU8sSUFBQUMsZ0JBQU8sRUFBQztJQUNkQyxNQUFNLEVBQUUsTUFBTTtJQUFFO0lBQ2hCQyxHQUFHLEVBQUUsNEJBQTRCO0lBQUU7SUFDbkNILElBQUksRUFBRUE7RUFDUCxDQUFDLENBQUM7QUFDSDtBQUNBO0FBQ0EsU0FBU2tCLFVBQVUsQ0FBQ2IsS0FBSyxFQUFFO0VBQzFCLE9BQU8sSUFBQUosZ0JBQU8sRUFBQztJQUNkQyxNQUFNLEVBQUUsS0FBSztJQUFFO0lBQ2ZDLEdBQUcsRUFBRSx1Q0FBdUM7SUFBRTtJQUM5Q0csTUFBTSxFQUFFRDtFQUNULENBQUMsQ0FBQztBQUNIO0FBQ0E7QUFDQSxTQUFTYyxlQUFlLENBQUNkLEtBQUssRUFBRTtFQUMvQixPQUFPLElBQUFKLGdCQUFPLEVBQUM7SUFDZEMsTUFBTSxFQUFFLEtBQUs7SUFBRTtJQUNmQyxHQUFHLEVBQUUsNENBQTRDO0lBQUU7SUFDbkRHLE1BQU0sRUFBRUQ7RUFDVCxDQUFDLENBQUM7QUFDSDtBQUNBO0FBQ0EsU0FBU2Usb0JBQW9CLEdBQUc7RUFDL0IsT0FBTyxJQUFBbkIsZ0JBQU8sRUFBQztJQUNkQyxNQUFNLEVBQUUsS0FBSztJQUFFO0lBQ2ZDLEdBQUcsRUFBRSxtREFBbUQsQ0FBRTtFQUMzRCxDQUFDLENBQUM7QUFDSDtBQUNBO0FBQ0EsU0FBU2tCLHFCQUFxQixHQUFHO0VBQ2hDLE9BQU8sSUFBQXBCLGdCQUFPLEVBQUM7SUFDZEMsTUFBTSxFQUFFLEtBQUs7SUFBRTtJQUNmQyxHQUFHLEVBQUUsbUNBQW1DLENBQUU7RUFDM0MsQ0FBQyxDQUFDO0FBQ0g7O0FBSUE7O0FBRUE7QUFDQSxTQUFTbUIsa0JBQWtCLENBQUN0QixJQUFJLEVBQUU7RUFDakMsT0FBTyxJQUFBQyxnQkFBTyxFQUFDO0lBQ2RDLE1BQU0sRUFBRSxNQUFNO0lBQUU7SUFDaEJDLEdBQUcsRUFBRSw2QkFBNkI7SUFBRTtJQUNwQ0gsSUFBSSxFQUFFQTtFQUNQLENBQUMsQ0FBQztBQUNIO0FBQ0E7QUFDQSxTQUFTdUIsYUFBYSxDQUFDbEIsS0FBSyxFQUFFO0VBQzdCLE9BQU8sSUFBQUosZ0JBQU8sRUFBQztJQUNkQyxNQUFNLEVBQUUsS0FBSztJQUFFO0lBQ2ZDLEdBQUcsRUFBRSwyQ0FBMkM7SUFBRTtJQUNsREcsTUFBTSxFQUFFRDtFQUNULENBQUMsQ0FBQztBQUNIO0FBQ0E7QUFDQSxTQUFTbUIsa0JBQWtCLENBQUNuQixLQUFLLEVBQUU7RUFDbEMsT0FBTyxJQUFBSixnQkFBTyxFQUFDO0lBQ2RDLE1BQU0sRUFBRSxLQUFLO0lBQUU7SUFDZkMsR0FBRyxFQUFFLGdEQUFnRDtJQUFFO0lBQ3ZERyxNQUFNLEVBQUVEO0VBQ1QsQ0FBQyxDQUFDO0FBQ0g7QUFDQTtBQUNBLFNBQVNvQix1QkFBdUIsR0FBRztFQUNsQyxPQUFPLElBQUF4QixnQkFBTyxFQUFDO0lBQ2RDLE1BQU0sRUFBRSxLQUFLO0lBQUU7SUFDZkMsR0FBRyxFQUFFLHFEQUFxRCxDQUFFO0VBQzdELENBQUMsQ0FBQztBQUNIO0FBQ0E7QUFDQSxTQUFTdUIsc0JBQXNCLEdBQUc7RUFDakMsT0FBTyxJQUFBekIsZ0JBQU8sRUFBQztJQUNkQyxNQUFNLEVBQUUsS0FBSztJQUFFO0lBQ2ZDLEdBQUcsRUFBRSxvQ0FBb0MsQ0FBRTtFQUM1QyxDQUFDLENBQUM7QUFDSDs7QUFJQTs7QUFFQTtBQUNBLFNBQVN3QixhQUFhLENBQUMzQixJQUFJLEVBQUU7RUFDNUIsT0FBTyxJQUFBQyxnQkFBTyxFQUFDO0lBQ2RDLE1BQU0sRUFBRSxNQUFNO0lBQUU7SUFDaEJDLEdBQUcsRUFBRSw4Q0FBOEM7SUFBRTtJQUNyREgsSUFBSSxFQUFFQTtFQUNQLENBQUMsQ0FBQztBQUNIO0FBQ0E7QUFDQSxTQUFTNEIsa0JBQWtCLENBQUN2QixLQUFLLEVBQUU7RUFDbEMsT0FBTyxJQUFBSixnQkFBTyxFQUFDO0lBQ2RDLE1BQU0sRUFBRSxLQUFLO0lBQUU7SUFDZkMsR0FBRyxFQUFFLG1EQUFtRDtJQUFFO0lBQzFERyxNQUFNLEVBQUVEO0VBQ1QsQ0FBQyxDQUFDO0FBQ0g7O0FBSUE7O0FBRUE7QUFDQSxTQUFTd0IsY0FBYyxDQUFDeEIsS0FBSyxFQUFFO0VBQzlCLE9BQU8sSUFBQUosZ0JBQU8sRUFBQztJQUNkQyxNQUFNLEVBQUUsS0FBSztJQUFFO0lBQ2ZDLEdBQUcsRUFBRSxxQ0FBcUM7SUFBRTtJQUM1Q0csTUFBTSxFQUFFRDtFQUNULENBQUMsQ0FBQztBQUNIO0FBQ0E7QUFDQSxTQUFTeUIsdUJBQXVCLEdBQUc7RUFDbEMsT0FBTyxJQUFBN0IsZ0JBQU8sRUFBQztJQUNkQyxNQUFNLEVBQUUsS0FBSztJQUFFO0lBQ2ZDLEdBQUcsRUFBRSxvREFBb0QsQ0FBRTtFQUM1RCxDQUFDLENBQUM7QUFDSDtBQUNBO0FBQ0EsU0FBUzRCLHFCQUFxQixDQUFDMUIsS0FBSyxFQUFFO0VBQ3JDLE9BQU8sSUFBQUosZ0JBQU8sRUFBQztJQUNkQyxNQUFNLEVBQUUsS0FBSztJQUFFO0lBQ2ZDLEdBQUcsRUFBRSxpQ0FBaUM7SUFBRTtJQUN4Q0csTUFBTSxFQUFFRDtFQUNULENBQUMsQ0FBQztBQUNIO0FBRUEsU0FBUzJCLFdBQVcsR0FBRTtFQUNyQixPQUFPLElBQUEvQixnQkFBTyxFQUFDO0lBQ2RDLE1BQU0sRUFBRSxLQUFLO0lBQUU7SUFDZkMsR0FBRyxFQUFFO0VBQ04sQ0FBQyxDQUFDO0FBQ0g7QUFBQyxlQUljO0VBQ2Q7RUFDQUosUUFBUSxFQUFSQSxRQUFRO0VBQUNLLGtCQUFrQixFQUFsQkEsa0JBQWtCO0VBQUNHLFNBQVMsRUFBVEEsU0FBUztFQUFDQyxlQUFlLEVBQWZBLGVBQWU7RUFBQ0Msa0JBQWtCLEVBQWxCQSxrQkFBa0I7RUFBQ0Msa0JBQWtCLEVBQWxCQSxrQkFBa0I7RUFDM0Y7RUFDQUMsaUJBQWlCLEVBQWpCQSxpQkFBaUI7RUFBQ0MsWUFBWSxFQUFaQSxZQUFZO0VBQUNDLHFDQUFxQyxFQUFyQ0EscUNBQXFDO0VBQUNDLGtCQUFrQixFQUFsQkEsa0JBQWtCO0VBQUNDLGdCQUFnQixFQUFoQkEsZ0JBQWdCO0VBQUNDLGtCQUFrQixFQUFsQkEsa0JBQWtCO0VBQzNIO0VBQ0FDLGlCQUFpQixFQUFqQkEsaUJBQWlCO0VBQUNDLFVBQVUsRUFBVkEsVUFBVTtFQUFDQyxlQUFlLEVBQWZBLGVBQWU7RUFBQ0Msb0JBQW9CLEVBQXBCQSxvQkFBb0I7RUFBQ0MscUJBQXFCLEVBQXJCQSxxQkFBcUI7RUFDdkY7RUFDQUMsa0JBQWtCLEVBQWxCQSxrQkFBa0I7RUFBQ0MsYUFBYSxFQUFiQSxhQUFhO0VBQUNDLGtCQUFrQixFQUFsQkEsa0JBQWtCO0VBQUNDLHVCQUF1QixFQUF2QkEsdUJBQXVCO0VBQUNDLHNCQUFzQixFQUF0QkEsc0JBQXNCO0VBQ2xHO0VBQ0FDLGFBQWEsRUFBYkEsYUFBYTtFQUFDQyxrQkFBa0IsRUFBbEJBLGtCQUFrQjtFQUNoQztFQUNBQyxjQUFjLEVBQWRBLGNBQWM7RUFBQ0MsdUJBQXVCLEVBQXZCQSx1QkFBdUI7RUFBQ0MscUJBQXFCLEVBQXJCQSxxQkFBcUI7RUFFNURDLFdBQVcsRUFBWEE7QUFDRCxDQUFDO0FBQUEiLCJmaWxlIjoiMzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICdAL2FwaS9yZXF1ZXN0JzsgLy8g5byV5YWl5bCB6KOF5aW955qEcmVxdWVzdFxyXG4vKiDop4bpopHlj5HluIMgKi9cclxuXHJcbi8vIDEuIOaWsOWinuinhumikeWPkeW4g1xyXG5mdW5jdGlvbiBhZGRWaWRlbyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0bWV0aG9kOiBcIlBPU1RcIiwgLy8g6K+35rGC5pa55byPXHJcblx0XHR1cmw6ICcva2l0Y2hlbi9TaG93Q29va2luZy9hZGRWaWRlbycsIC8vIOivt+axgnVybFxyXG5cdFx0ZGF0YTogZGF0YVxyXG5cdH0pXHJcbn1cclxuLy8gMi4g6I635Y+W6KeG6aKR6K+m5oOFXHJcbmZ1bmN0aW9uIGdldFNob3dDb29raW5nQnlJZChxdWVyeSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdG1ldGhvZDogXCJHRVRcIiwgLy8g6K+35rGC5pa55byPXHJcblx0XHR1cmw6ICcva2l0Y2hlbi9TaG93Q29va2luZy9nZXRTaG93Q29va2luZ0J5SWQnLCAvLyDor7fmsYJ1cmxcclxuXHRcdHBhcmFtczogcXVlcnlcclxuXHR9KVxyXG59XHJcbi8vIDMuIOafpeivouinhumikeWIl+ihqFxyXG5mdW5jdGlvbiBsaXN0VmlkZW8ocXVlcnkpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHRtZXRob2Q6IFwiR0VUXCIsIC8vIOivt+axguaWueW8j1xyXG5cdFx0dXJsOiAnL2tpdGNoZW4vU2hvd0Nvb2tpbmcvbGlzdFZpZGVvJywgLy8g6K+35rGCdXJsXHJcblx0XHRwYXJhbXM6IHF1ZXJ5XHJcblx0fSlcclxufVxyXG4vLyA0LiDmn6Xor6LmiJHnmoTmlLbol4/op4bpopHliJfooahcclxuZnVuY3Rpb24gbXlMaWtlVmlkZW9MaXN0KHF1ZXJ5KSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0bWV0aG9kOiBcIkdFVFwiLCAvLyDor7fmsYLmlrnlvI9cclxuXHRcdHVybDogJy9raXRjaGVuL1Nob3dDb29raW5nL215TGlrZVZpZGVvTGlzdCcsIC8vIOivt+axgnVybFxyXG5cdFx0cGFyYW1zOiBxdWVyeVxyXG5cdH0pXHJcbn1cclxuLy8gNS4g5p+l6K+i5oiR55qE5Y+R5biD6KeG6aKR5YiX6KGoXHJcbmZ1bmN0aW9uIG15UmVsZWFzZVZpZGVvTGlzdChxdWVyeSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdG1ldGhvZDogXCJHRVRcIiwgLy8g6K+35rGC5pa55byPXHJcblx0XHR1cmw6ICcva2l0Y2hlbi9TaG93Q29va2luZy9teVJlbGVhc2VWaWRlb0xpc3QnLCAvLyDor7fmsYJ1cmxcclxuXHRcdHBhcmFtczogcXVlcnlcclxuXHR9KVxyXG59XHJcbi8vIDYuIOafpeivouaIkeeahOeCuei1nuinhumikeWIl+ihqFxyXG5mdW5jdGlvbiBteVN1cHBvcnRWaWRlb0xpc3QocXVlcnkpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHRtZXRob2Q6IFwiR0VUXCIsIC8vIOivt+axguaWueW8j1xyXG5cdFx0dXJsOiAnL2tpdGNoZW4vU2hvd0Nvb2tpbmcvbXlTdXBwb3J0VmlkZW9MaXN0JywgLy8g6K+35rGCdXJsXHJcblx0XHRwYXJhbXM6IHF1ZXJ5XHJcblx0fSlcclxufVxyXG5cclxuXHJcblxyXG4vKiDlhbPms6ggKi9cclxuXHJcbi8vIDEuIOWFs+azqFxyXG5mdW5jdGlvbiBTaG93Q29va2luZ0ZvbGxvdyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0bWV0aG9kOiBcIlBPU1RcIiwgLy8g6K+35rGC5pa55byPXHJcblx0XHR1cmw6ICcva2l0Y2hlbi9TaG93Q29va2luZ0ZvbGxvdycsIC8vIOivt+axgnVybFxyXG5cdFx0ZGF0YTogZGF0YVxyXG5cdH0pXHJcbn1cclxuLy8gMi4g5Y+W5raI5YWz5rOoXHJcbmZ1bmN0aW9uIGNhbmNlbEZvbGxvdyhxdWVyeSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdG1ldGhvZDogXCJHRVRcIiwgLy8g6K+35rGC5pa55byPXHJcblx0XHR1cmw6ICcva2l0Y2hlbi9TaG93Q29va2luZ0ZvbGxvdy9jYW5jZWxGb2xsb3cnLCAvLyDor7fmsYJ1cmxcclxuXHRcdHBhcmFtczogcXVlcnlcclxuXHR9KVxyXG59XHJcbi8vIDMuIOafpeivouaIkeeahOWFs+azqOaVsOmHj+WSjOaIkeeahOeyieS4neaVsOmHj1xyXG5mdW5jdGlvbiBmaW5kRm9sbG93ZWRNZUNvdW50QW5kTXlGb2xsb3dlckNvdW50KCkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdG1ldGhvZDogXCJHRVRcIiwgLy8g6K+35rGC5pa55byPXHJcblx0XHR1cmw6ICcva2l0Y2hlbi9TaG93Q29va2luZ0ZvbGxvdy9maW5kRm9sbG93ZWRNZUNvdW50QW5kTXlGb2xsb3dlckNvdW50JywgLy8g6K+35rGCdXJsXHJcblx0fSlcclxufVxyXG4vLyA0LiDmn6Xor6LmiJHnmoTnsonkuJ3liJfooahcclxuZnVuY3Rpb24gZmluZEZvbGxvd2VkTWVMaXN0KCkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdG1ldGhvZDogXCJHRVRcIiwgLy8g6K+35rGC5pa55byPXHJcblx0XHR1cmw6ICcva2l0Y2hlbuKAi+KAiy9TaG93Q29va2luZ0ZvbGxvd+KAiy9maW5kRm9sbG93ZWRNZUxpc3QnLCAvLyDor7fmsYJ1cmxcclxuXHR9KVxyXG59XHJcbi8vIDUuIOafpeivouaIkeaYr+WQpuWFs+azqOivpeeUqOaIt1xyXG5mdW5jdGlvbiBmaW5kSXNGb2xsb3dVc2VyKHF1ZXJ5KSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0bWV0aG9kOiBcIkdFVFwiLCAvLyDor7fmsYLmlrnlvI9cclxuXHRcdHVybDogJy9raXRjaGVuL1Nob3dDb29raW5nRm9sbG93L2ZpbmRJc0ZvbGxvd1VzZXInLCAvLyDor7fmsYJ1cmxcclxuXHRcdHBhcmFtczogcXVlcnlcclxuXHR9KVxyXG59XHJcbi8vIDYuIOafpeivouaIkeeahOWFs+azqOWIl+ihqFxyXG5mdW5jdGlvbiBmaW5kTXlGb2xsb3dlckxpc3QoKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0bWV0aG9kOiBcIkdFVFwiLCAvLyDor7fmsYLmlrnlvI9cclxuXHRcdHVybDogJy9raXRjaGVu4oCLL1Nob3dDb29raW5nRm9sbG934oCLL2ZpbmRNeUZvbGxvd2VyTGlzdCcsIC8vIOivt+axgnVybFxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5cclxuLyog5pS26JePICovXHJcblxyXG4vLyAxLiDmlLbol49cclxuZnVuY3Rpb24gU2hvd0Nvb2tpbmdNeUxpa2UoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdG1ldGhvZDogXCJQT1NUXCIsIC8vIOivt+axguaWueW8j1xyXG5cdFx0dXJsOiAnL2tpdGNoZW4vU2hvd0Nvb2tpbmdNeUxpa2UnLCAvLyDor7fmsYJ1cmxcclxuXHRcdGRhdGE6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8vIDIuIOWPlua2iOaUtuiXj1xyXG5mdW5jdGlvbiBjYW5jZWxMaWtlKHF1ZXJ5KSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0bWV0aG9kOiBcIkdFVFwiLCAvLyDor7fmsYLmlrnlvI9cclxuXHRcdHVybDogJy9raXRjaGVuL1Nob3dDb29raW5nTXlMaWtlL2NhbmNlbExpa2UnLCAvLyDor7fmsYJ1cmxcclxuXHRcdHBhcmFtczogcXVlcnlcclxuXHR9KVxyXG59XHJcbi8vIDMuIOafpeivouaYr+WQpuaUtuiXj+W9k+WJjVxyXG5mdW5jdGlvbiBmaW5kSXNMaWtlVmlkZW8ocXVlcnkpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHRtZXRob2Q6IFwiR0VUXCIsIC8vIOivt+axguaWueW8j1xyXG5cdFx0dXJsOiAnL2tpdGNoZW4vU2hvd0Nvb2tpbmdNeUxpa2UvZmluZElzTGlrZVZpZGVvJywgLy8g6K+35rGCdXJsXHJcblx0XHRwYXJhbXM6IHF1ZXJ5XHJcblx0fSlcclxufVxyXG4vLyA0LiDmn6Xor6LmiJHnmoTojrfmlLbol4/mlbDph49cclxuZnVuY3Rpb24gZmluZE15UmVjZWl2ZUxpa2VOdW0oKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0bWV0aG9kOiBcIkdFVFwiLCAvLyDor7fmsYLmlrnlvI9cclxuXHRcdHVybDogJy9raXRjaGVu4oCLL1Nob3dDb29raW5nTXlMaWtl4oCLL2ZpbmRNeVJlY2VpdmVMaWtlTnVtJywgLy8g6K+35rGCdXJsXHJcblx0fSlcclxufVxyXG4vLyA1LiDmn6Xor6LmiJHnmoTmlLbol4/liJfooahcclxuZnVuY3Rpb24gU2hvd0Nvb2tpbmdNeUxpa2VMaXN0KCkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdG1ldGhvZDogXCJHRVRcIiwgLy8g6K+35rGC5pa55byPXHJcblx0XHR1cmw6ICcva2l0Y2hlbuKAiy9TaG93Q29va2luZ015TGlrZeKAiy9saXN0JywgLy8g6K+35rGCdXJsXHJcblx0fSlcclxufVxyXG5cclxuXHJcblxyXG4vKiDngrnotZ4gKi9cclxuXHJcbi8vIDEuIOeCuei1nlxyXG5mdW5jdGlvbiBTaG93Q29va2luZ1N1cHBvcnQoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdG1ldGhvZDogXCJQT1NUXCIsIC8vIOivt+axguaWueW8j1xyXG5cdFx0dXJsOiAnL2tpdGNoZW4vU2hvd0Nvb2tpbmdTdXBwb3J0JywgLy8g6K+35rGCdXJsXHJcblx0XHRkYXRhOiBkYXRhXHJcblx0fSlcclxufVxyXG4vLyAyLiDlj5bmtojngrnotZ5cclxuZnVuY3Rpb24gY2FuY2VsU3VwcG9ydChxdWVyeSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdG1ldGhvZDogXCJHRVRcIiwgLy8g6K+35rGC5pa55byPXHJcblx0XHR1cmw6ICcva2l0Y2hlbi9TaG93Q29va2luZ1N1cHBvcnQvY2FuY2VsU3VwcG9ydCcsIC8vIOivt+axgnVybFxyXG5cdFx0cGFyYW1zOiBxdWVyeVxyXG5cdH0pXHJcbn1cclxuLy8gMy4g5p+l6K+i5piv5ZCm54K56LWe5b2T5YmNXHJcbmZ1bmN0aW9uIGZpbmRJc1N1cHBvcnRWaWRlbyhxdWVyeSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdG1ldGhvZDogXCJHRVRcIiwgLy8g6K+35rGC5pa55byPXHJcblx0XHR1cmw6ICcva2l0Y2hlbi9TaG93Q29va2luZ1N1cHBvcnQvZmluZElzU3VwcG9ydFZpZGVvJywgLy8g6K+35rGCdXJsXHJcblx0XHRwYXJhbXM6IHF1ZXJ5XHJcblx0fSlcclxufVxyXG4vLyA0LiDmn6Xor6LmiJHnmoTojrfngrnotZ7mlbDph49cclxuZnVuY3Rpb24gZmluZE15UmVjZWl2ZVN1cHBvcnROdW0oKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0bWV0aG9kOiBcIkdFVFwiLCAvLyDor7fmsYLmlrnlvI9cclxuXHRcdHVybDogJy9raXRjaGVuL1Nob3dDb29raW5nU3VwcG9ydC9maW5kTXlSZWNlaXZlU3VwcG9ydE51bScsIC8vIOivt+axgnVybFxyXG5cdH0pXHJcbn0gXHJcbi8vIDUuIOafpeivouaIkeeahOeCuei1nuWIl+ihqFxyXG5mdW5jdGlvbiBTaG93Q29va2luZ1N1cHBvcnRMaXN0KCkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdG1ldGhvZDogXCJHRVRcIiwgLy8g6K+35rGC5pa55byPXHJcblx0XHR1cmw6ICcva2l0Y2hlbuKAiy9TaG93Q29va2luZ1N1cHBvcnTigIsvbGlzdCcsIC8vIOivt+axgnVybFxyXG5cdH0pXHJcbn0gXHJcblxyXG5cclxuXHJcbi8qIOivhOS7tyAqL1xyXG5cclxuLy8gMS4g5paw5aKe6K+E5Lu3XHJcbmZ1bmN0aW9uIGFkZEV2YWx1YXRpb24oZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdG1ldGhvZDogXCJQT1NUXCIsIC8vIOivt+axguaWueW8j1xyXG5cdFx0dXJsOiAnL2tpdGNoZW4vU2hvd0Nvb2tpbmdFdmFsdWF0aW9uL2FkZEV2YWx1YXRpb24nLCAvLyDor7fmsYJ1cmxcclxuXHRcdGRhdGE6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8vIDIuIOafpeivouW9k+WJjeinhumikeeahOivhOS7t+WIl+ihqFxyXG5mdW5jdGlvbiBmaW5kRXZhbHVhdGlvbkxpc3QocXVlcnkpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHRtZXRob2Q6IFwiR0VUXCIsIC8vIOivt+axguaWueW8j1xyXG5cdFx0dXJsOiAnL2tpdGNoZW4vU2hvd0Nvb2tpbmdFdmFsdWF0aW9uL2ZpbmRFdmFsdWF0aW9uTGlzdCcsIC8vIOivt+axgnVybFxyXG5cdFx0cGFyYW1zOiBxdWVyeVxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5cclxuLyog6YCa55+lICovXHJcblxyXG4vLyAxLiDmn6Xor6LpgJrnn6Xor6bmg4VcclxuZnVuY3Rpb24gZmluZE5vdGljZUJ5SWQocXVlcnkpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHRtZXRob2Q6IFwiR0VUXCIsIC8vIOivt+axguaWueW8j1xyXG5cdFx0dXJsOiAnL2tpdGNoZW4vU2hvd0Nvb2tpbmdOb3RpY2UvZmluZEJ5SWQnLCAvLyDor7fmsYJ1cmxcclxuXHRcdHBhcmFtczogcXVlcnlcclxuXHR9KVxyXG59XHJcbi8vIDIuIOafpeivouaIkeeahOacquivu+mAmuefpeaVsOmHj1xyXG5mdW5jdGlvbiBmaW5kTXlVblJlYWROb3RpY2VDb3VudCgpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHRtZXRob2Q6IFwiR0VUXCIsIC8vIOivt+axguaWueW8j1xyXG5cdFx0dXJsOiAnL2tpdGNoZW4vU2hvd0Nvb2tpbmdOb3RpY2UvZmluZE15VW5SZWFkTm90aWNlQ291bnQnLCAvLyDor7fmsYJ1cmxcclxuXHR9KVxyXG59XHJcbi8vIDIuIOafpeivoumAmuefpeWIl+ihqFxyXG5mdW5jdGlvbiBTaG93Q29va2luZ05vdGljZUxpc3QocXVlcnkpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHRtZXRob2Q6IFwiR0VUXCIsIC8vIOivt+axguaWueW8j1xyXG5cdFx0dXJsOiAnL2tpdGNoZW4vU2hvd0Nvb2tpbmdOb3RpY2UvbGlzdCcsIC8vIOivt+axgnVybFxyXG5cdFx0cGFyYW1zOiBxdWVyeVxyXG5cdH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRQZXJjZW50KCl7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0bWV0aG9kOiBcIkdFVFwiLCAvLyDor7fmsYLmlrnlvI9cclxuXHRcdHVybDogJy9maWxlL2dldFBlcmNlbnQnXHJcblx0fSlcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Ly/mmZLljqjoibrop4bpopHlj5HluIPmjqXlj6NcclxuXHRhZGRWaWRlbyxnZXRTaG93Q29va2luZ0J5SWQsbGlzdFZpZGVvLG15TGlrZVZpZGVvTGlzdCxteVJlbGVhc2VWaWRlb0xpc3QsbXlTdXBwb3J0VmlkZW9MaXN0LFxyXG5cdC8v5pmS5Y6o6Im65YWz5rOo5o6l5Y+jXHJcblx0U2hvd0Nvb2tpbmdGb2xsb3csY2FuY2VsRm9sbG93LGZpbmRGb2xsb3dlZE1lQ291bnRBbmRNeUZvbGxvd2VyQ291bnQsZmluZEZvbGxvd2VkTWVMaXN0LGZpbmRJc0ZvbGxvd1VzZXIsZmluZE15Rm9sbG93ZXJMaXN0LFxyXG5cdC8v5pmS5Y6o6Im65pS26JeP5o6l5Y+jXHJcblx0U2hvd0Nvb2tpbmdNeUxpa2UsY2FuY2VsTGlrZSxmaW5kSXNMaWtlVmlkZW8sZmluZE15UmVjZWl2ZUxpa2VOdW0sU2hvd0Nvb2tpbmdNeUxpa2VMaXN0LFxyXG5cdC8v5pmS5Y6o6Im654K56LWe5o6l5Y+jXHJcblx0U2hvd0Nvb2tpbmdTdXBwb3J0LGNhbmNlbFN1cHBvcnQsZmluZElzU3VwcG9ydFZpZGVvLGZpbmRNeVJlY2VpdmVTdXBwb3J0TnVtLFNob3dDb29raW5nU3VwcG9ydExpc3QsXHJcblx0Ly/mmZLljqjoibror4Tku7fmjqXlj6NcclxuXHRhZGRFdmFsdWF0aW9uLGZpbmRFdmFsdWF0aW9uTGlzdCxcclxuXHQvL+aZkuWOqOiJuumAmuefpeaOpeWPo1xyXG5cdGZpbmROb3RpY2VCeUlkLGZpbmRNeVVuUmVhZE5vdGljZUNvdW50LFNob3dDb29raW5nTm90aWNlTGlzdCxcclxuXHRcclxuXHRmaW5kUGVyY2VudFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!******************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/api/request.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 16);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 29));\nvar request = function request(config) {\n  if (uni.getStorageSync('token_key')) {\n    config.header = {\n      Authorization: 'Bearer ' + uni.getStorageSync('token_key')\n      // Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX2tleSI6ImJkNjQxY2MxLWNhNzQtNDBkMy04MGU1LThlZGZhY2U4YTU5NyIsInVzZXJuYW1lIjoiYWRtaW4ifQ.cf1KepRXoSuCL58H913YLAD9YgRB0E3Z9Q9F1vREmchtj97HGDf6vZcdLCI7Akn52ocELJxFQnj9cujKP3lMTw',\n    };\n  }\n  // console.log('======request.js')\n  // 处理 apiUrl\n  config.url = 'https://www.huasensetech.cn:8080' + config.url;\n  // config.url = 'http://192.168.1.196:8080' + config.url;           // luqinwu本地ip\n  // config.url = 'http://192.168.1.174:8080' + config.url;         // wangpeng本地ip\n  // config.url = '127.0.0.1/api' + config.url;\n\n  // get请求映射params参数\n  if (config.method === 'GET' && config.params) {\n    var url = config.url + '?' + tansParams(config.params);\n    url = url.slice(0, -1);\n    config.params = {};\n    config.url = url;\n  }\n  if (!config.data) {\n    config.data = {};\n  }\n  // if (uni.getStorageSync('token_key')) {\n  // \tconfig.headers['Authorization'] = 'Bearer ' + uni.getStorageSync(\n  // \t\t'token_key') // 让每个请求携带自定义token 请根据实际情况自行修改\n  // }\n  // console.log(JSON.stringify(config.data));\n  var promise = new Promise(function (resolve, reject) {\n    uni.request(config).then(function (responses) {\n      // 异常\n      // console.log(responses)\n      if (responses[0]) {\n        reject({\n          message: \"网络超时\"\n        });\n      } else {\n        var response = responses[1].data; // 如果返回的结果是data.data的，嫌麻烦可以用这个，return res,这样只返回一个data\n        resolve(response);\n      }\n    }).catch(function (error) {\n      reject(error);\n    });\n  });\n  return promise;\n};\n\n/**\r\n* 参数处理\r\n* @param {*} params  参数\r\n*/\nfunction tansParams(params) {\n  var result = '';\n  for (var _i = 0, _Object$keys = Object.keys(params); _i < _Object$keys.length; _i++) {\n    var propName = _Object$keys[_i];\n    var value = params[propName];\n    var part = encodeURIComponent(propName) + \"=\";\n    if (value !== null && typeof value !== \"undefined\") {\n      if ((0, _typeof2.default)(value) === 'object') {\n        for (var _i2 = 0, _Object$keys2 = Object.keys(value); _i2 < _Object$keys2.length; _i2++) {\n          var key = _Object$keys2[_i2];\n          if (value[key] !== null && typeof value[key] !== 'undefined') {\n            var _params = propName + '[' + key + ']';\n            var subPart = encodeURIComponent(_params) + \"=\";\n            result += subPart + encodeURIComponent(value[key]) + \"&\";\n          }\n        }\n      } else {\n        result += part + encodeURIComponent(value) + \"&\";\n      }\n    }\n  }\n  return result;\n}\nvar _default = request;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL3JlcXVlc3QuanMiXSwibmFtZXMiOlsicmVxdWVzdCIsImNvbmZpZyIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwiaGVhZGVyIiwiQXV0aG9yaXphdGlvbiIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsInRhbnNQYXJhbXMiLCJzbGljZSIsImRhdGEiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0aGVuIiwicmVzcG9uc2VzIiwibWVzc2FnZSIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsInJlc3VsdCIsIk9iamVjdCIsImtleXMiLCJwcm9wTmFtZSIsInZhbHVlIiwicGFydCIsImVuY29kZVVSSUNvbXBvbmVudCIsImtleSIsInN1YlBhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQU8sQ0FBSUMsTUFBTSxFQUFLO0VBQzNCLElBQUdDLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFO0lBQ25DRixNQUFNLENBQUNHLE1BQU0sR0FBSTtNQUNmQyxhQUFhLEVBQUUsU0FBUyxHQUFHSCxHQUFHLENBQUNDLGNBQWMsQ0FBQyxXQUFXO01BQ3pEO0lBRUYsQ0FBQztFQUNGO0VBQ0E7RUFDQTtFQUNBRixNQUFNLENBQUNLLEdBQUcsR0FBRyxrQ0FBa0MsR0FBR0wsTUFBTSxDQUFDSyxHQUFHO0VBQzVEO0VBQ0E7RUFDQTs7RUFFQTtFQUNBLElBQUlMLE1BQU0sQ0FBQ00sTUFBTSxLQUFLLEtBQUssSUFBSU4sTUFBTSxDQUFDTyxNQUFNLEVBQUU7SUFDMUMsSUFBSUYsR0FBRyxHQUFHTCxNQUFNLENBQUNLLEdBQUcsR0FBRyxHQUFHLEdBQUdHLFVBQVUsQ0FBQ1IsTUFBTSxDQUFDTyxNQUFNLENBQUM7SUFDdERGLEdBQUcsR0FBR0EsR0FBRyxDQUFDSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RCVCxNQUFNLENBQUNPLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEJQLE1BQU0sQ0FBQ0ssR0FBRyxHQUFHQSxHQUFHO0VBQ3BCO0VBRUEsSUFBRyxDQUFDTCxNQUFNLENBQUNVLElBQUksRUFBQztJQUNmVixNQUFNLENBQUNVLElBQUksR0FBRyxDQUFDLENBQUM7RUFDakI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsSUFBSUMsT0FBTyxHQUFHLElBQUlDLE9BQU8sQ0FBQyxVQUFTQyxPQUFPLEVBQUVDLE1BQU0sRUFBRTtJQUNuRGIsR0FBRyxDQUFDRixPQUFPLENBQUNDLE1BQU0sQ0FBQyxDQUFDZSxJQUFJLENBQUMsVUFBQUMsU0FBUyxFQUFJO01BQ3JDO01BQ0E7TUFDQSxJQUFJQSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDakJGLE1BQU0sQ0FBQztVQUFDRyxPQUFPLEVBQUc7UUFBTSxDQUFDLENBQUM7TUFDM0IsQ0FBQyxNQUFNO1FBQ04sSUFBSUMsUUFBUSxHQUFHRixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNOLElBQUksQ0FBQyxDQUFDO1FBQ2xDRyxPQUFPLENBQUNLLFFBQVEsQ0FBQztNQUNsQjtJQUNELENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsVUFBQUMsS0FBSyxFQUFJO01BQ2pCTixNQUFNLENBQUNNLEtBQUssQ0FBQztJQUNkLENBQUMsQ0FBQztFQUNILENBQUMsQ0FBQztFQUNGLE9BQU9ULE9BQU87QUFDZixDQUFDOztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0gsVUFBVSxDQUFDRCxNQUFNLEVBQUU7RUFDMUIsSUFBSWMsTUFBTSxHQUFHLEVBQUU7RUFDZixnQ0FBdUJDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDaEIsTUFBTSxDQUFDLGtDQUFFO0lBQXZDLElBQU1pQixRQUFRO0lBQ2pCLElBQU1DLEtBQUssR0FBR2xCLE1BQU0sQ0FBQ2lCLFFBQVEsQ0FBQztJQUM5QixJQUFJRSxJQUFJLEdBQUdDLGtCQUFrQixDQUFDSCxRQUFRLENBQUMsR0FBRyxHQUFHO0lBQzdDLElBQUlDLEtBQUssS0FBSyxJQUFJLElBQUksT0FBUUEsS0FBTSxLQUFLLFdBQVcsRUFBRTtNQUNwRCxJQUFJLHNCQUFPQSxLQUFLLE1BQUssUUFBUSxFQUFFO1FBQzdCLGtDQUFrQkgsTUFBTSxDQUFDQyxJQUFJLENBQUNFLEtBQUssQ0FBQyxxQ0FBRTtVQUFqQyxJQUFNRyxHQUFHO1VBQ1osSUFBSUgsS0FBSyxDQUFDRyxHQUFHLENBQUMsS0FBSyxJQUFJLElBQUksT0FBUUgsS0FBSyxDQUFDRyxHQUFHLENBQUUsS0FBSyxXQUFXLEVBQUU7WUFDOUQsSUFBSXJCLE9BQU0sR0FBR2lCLFFBQVEsR0FBRyxHQUFHLEdBQUdJLEdBQUcsR0FBRyxHQUFHO1lBQ3ZDLElBQUlDLE9BQU8sR0FBR0Ysa0JBQWtCLENBQUNwQixPQUFNLENBQUMsR0FBRyxHQUFHO1lBQzlDYyxNQUFNLElBQUlRLE9BQU8sR0FBR0Ysa0JBQWtCLENBQUNGLEtBQUssQ0FBQ0csR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHO1VBQzFEO1FBQ0Y7TUFDRixDQUFDLE1BQU07UUFDTFAsTUFBTSxJQUFJSyxJQUFJLEdBQUdDLGtCQUFrQixDQUFDRixLQUFLLENBQUMsR0FBRyxHQUFHO01BQ2xEO0lBQ0Y7RUFDRjtFQUNBLE9BQU9KLE1BQU07QUFDZjtBQUFDLGVBR2N0QixPQUFPO0FBQUEiLCJmaWxlIjoiMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXF1ZXN0ID0gKGNvbmZpZykgPT4ge1xyXG5cdGlmKHVuaS5nZXRTdG9yYWdlU3luYygndG9rZW5fa2V5JykpIHtcclxuXHRcdGNvbmZpZy5oZWFkZXIgPSAge1xyXG5cdFx0ICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuX2tleScpLFxyXG5cdFx0ICAvLyBBdXRob3JpemF0aW9uOiAnQmVhcmVyIGV5SmhiR2NpT2lKSVV6VXhNaUo5LmV5SjFjMlZ5WDJsa0lqb3hMQ0oxYzJWeVgydGxlU0k2SW1Ka05qUXhZMk14TFdOaE56UXROREJrTXkwNE1HVTFMVGhsWkdaaFkyVTRZVFU1TnlJc0luVnpaWEp1WVcxbElqb2lZV1J0YVc0aWZRLmNmMUtlcFJYb1N1Q0w1OEg5MTNZTEFEOVlnUkIwRTNaOVE5RjF2UkVtY2h0ajk3SEdEZjZ2WmNkTENJN0FrbjUyb2NFTEp4RlFuajljdWpLUDNsTVR3JyxcclxuXHRcdCAgXHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIGNvbnNvbGUubG9nKCc9PT09PT1yZXF1ZXN0LmpzJylcclxuXHQvLyDlpITnkIYgYXBpVXJsXHJcblx0Y29uZmlnLnVybCA9ICdodHRwczovL3d3dy5odWFzZW5zZXRlY2guY246ODA4MCcgKyBjb25maWcudXJsO1xyXG5cdC8vIGNvbmZpZy51cmwgPSAnaHR0cDovLzE5Mi4xNjguMS4xOTY6ODA4MCcgKyBjb25maWcudXJsOyAgICAgICAgICAgLy8gbHVxaW53deacrOWcsGlwXHJcblx0Ly8gY29uZmlnLnVybCA9ICdodHRwOi8vMTkyLjE2OC4xLjE3NDo4MDgwJyArIGNvbmZpZy51cmw7ICAgICAgICAgLy8gd2FuZ3BlbmfmnKzlnLBpcFxyXG5cdC8vIGNvbmZpZy51cmwgPSAnMTI3LjAuMC4xL2FwaScgKyBjb25maWcudXJsO1xyXG5cdFxyXG5cdC8vIGdldOivt+axguaYoOWwhHBhcmFtc+WPguaVsFxyXG5cdGlmIChjb25maWcubWV0aG9kID09PSAnR0VUJyAmJiBjb25maWcucGFyYW1zKSB7XHJcblx0ICAgIGxldCB1cmwgPSBjb25maWcudXJsICsgJz8nICsgdGFuc1BhcmFtcyhjb25maWcucGFyYW1zKTtcclxuXHQgICAgdXJsID0gdXJsLnNsaWNlKDAsIC0xKTtcclxuXHQgICAgY29uZmlnLnBhcmFtcyA9IHt9O1xyXG5cdCAgICBjb25maWcudXJsID0gdXJsO1xyXG5cdH1cclxuXHRcclxuXHRpZighY29uZmlnLmRhdGEpe1xyXG5cdFx0Y29uZmlnLmRhdGEgPSB7fTtcclxuXHR9XHJcblx0Ly8gaWYgKHVuaS5nZXRTdG9yYWdlU3luYygndG9rZW5fa2V5JykpIHtcclxuXHQvLyBcdGNvbmZpZy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyB1bmkuZ2V0U3RvcmFnZVN5bmMoXHJcblx0Ly8gXHRcdCd0b2tlbl9rZXknKSAvLyDorqnmr4/kuKror7fmsYLmkLrluKboh6rlrprkuYl0b2tlbiDor7fmoLnmja7lrp7pmYXmg4XlhrXoh6rooYzkv67mlLlcclxuXHQvLyB9XHJcblx0Ly8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY29uZmlnLmRhdGEpKTtcclxuXHRsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cdFx0dW5pLnJlcXVlc3QoY29uZmlnKS50aGVuKHJlc3BvbnNlcyA9PiB7XHJcblx0XHRcdC8vIOW8guW4uFxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhyZXNwb25zZXMpXHJcblx0XHRcdGlmIChyZXNwb25zZXNbMF0pIHtcclxuXHRcdFx0XHRyZWplY3Qoe21lc3NhZ2UgOiBcIue9kee7nOi2heaXtlwifSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bGV0IHJlc3BvbnNlID0gcmVzcG9uc2VzWzFdLmRhdGE7IC8vIOWmguaenOi/lOWbnueahOe7k+aenOaYr2RhdGEuZGF0YeeahO+8jOWrjOm6u+eDpuWPr+S7peeUqOi/meS4qu+8jHJldHVybiByZXMs6L+Z5qC35Y+q6L+U5Zue5LiA5LiqZGF0YVxyXG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xyXG5cdFx0XHR9XHJcblx0XHR9KS5jYXRjaChlcnJvciA9PiB7XHJcblx0XHRcdHJlamVjdChlcnJvcik7XHJcblx0XHR9KVxyXG5cdH0pXHJcblx0cmV0dXJuIHByb21pc2U7XHJcbn07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4qIOWPguaVsOWkhOeQhlxyXG4qIEBwYXJhbSB7Kn0gcGFyYW1zICDlj4LmlbBcclxuKi9cclxuZnVuY3Rpb24gdGFuc1BhcmFtcyhwYXJhbXMpIHtcclxuICBsZXQgcmVzdWx0ID0gJydcclxuICBmb3IgKGNvbnN0IHByb3BOYW1lIG9mIE9iamVjdC5rZXlzKHBhcmFtcykpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gcGFyYW1zW3Byb3BOYW1lXTtcclxuICAgIHZhciBwYXJ0ID0gZW5jb2RlVVJJQ29tcG9uZW50KHByb3BOYW1lKSArIFwiPVwiO1xyXG4gICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiAodmFsdWUpICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XHJcbiAgICAgICAgICBpZiAodmFsdWVba2V5XSAhPT0gbnVsbCAmJiB0eXBlb2YgKHZhbHVlW2tleV0pICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gcHJvcE5hbWUgKyAnWycgKyBrZXkgKyAnXSc7XHJcbiAgICAgICAgICAgIHZhciBzdWJQYXJ0ID0gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtcykgKyBcIj1cIjtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IHN1YlBhcnQgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWVba2V5XSkgKyBcIiZcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHBhcnQgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpICsgXCImXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 61);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 61 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 29)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 62);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 62 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 29)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */
/*!*****************************************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/main.js?{"page":"pages%2FvideoPage%2Fvideo-page"} ***!
  \*****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_videoPage_video_page_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/videoPage/video-page.nvue?mpType=page */ 123);\n\n        \n        \n        \n        \n        _pages_videoPage_video_page_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_videoPage_video_page_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/videoPage/video-page'\n        _pages_videoPage_video_page_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_videoPage_video_page_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBdUU7QUFDdkUsUUFBUSxvRkFBRztBQUNYLFFBQVEsb0ZBQUc7QUFDWCxRQUFRLG9GQUFHO0FBQ1gsZ0JBQWdCLG9GQUFHIiwiZmlsZSI6IjEyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgJ3VuaS1wb2x5ZmlsbCdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL3ZpZGVvUGFnZS92aWRlby1wYWdlLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL3ZpZGVvUGFnZS92aWRlby1wYWdlJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///122\n");

/***/ }),
/* 123 */
/*!***********************************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/pages/videoPage/video-page.nvue?mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video_page_nvue_vue_type_template_id_02fd4aaf_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-page.nvue?vue&type=template&id=02fd4aaf&scoped=true&mpType=page */ 124);\n/* harmony import */ var _video_page_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-page.nvue?vue&type=script&lang=js&mpType=page */ 150);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_page_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_page_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./video-page.nvue?vue&type=style&index=0&id=02fd4aaf&scoped=true&lang=css&mpType=page */ 152).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./video-page.nvue?vue&type=style&index=0&id=02fd4aaf&scoped=true&lang=css&mpType=page */ 152).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _video_page_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _video_page_nvue_vue_type_template_id_02fd4aaf_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _video_page_nvue_vue_type_template_id_02fd4aaf_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"02fd4aaf\",\n  \"1a9a7f0d\",\n  false,\n  _video_page_nvue_vue_type_template_id_02fd4aaf_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/videoPage/video-page.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0k7QUFDL0k7QUFDMEU7QUFDTDtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGdHQUF1RjtBQUMzSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsZ0dBQXVGO0FBQ2hKOztBQUVBOztBQUVBO0FBQ3dNO0FBQ3hNLGdCQUFnQiw0TUFBVTtBQUMxQixFQUFFLDRGQUFNO0FBQ1IsRUFBRSw2R0FBTTtBQUNSLEVBQUUsc0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUhBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3ZpZGVvLXBhZ2UubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMmZkNGFhZiZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdmlkZW8tcGFnZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZGVvLXBhZ2UubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdmlkZW8tcGFnZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDJmZDRhYWYmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdmlkZW8tcGFnZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDJmZDRhYWYmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL+WuieijheWMheWkp+WFqC9IQnVpbGRlclguMy41LjIuMjAyMjA3MTktYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjAyZmQ0YWFmXCIsXG4gIFwiMWE5YTdmMGRcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdmlkZW9QYWdlL3ZpZGVvLXBhZ2UubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///123\n");

/***/ }),
/* 124 */
/*!*****************************************************************************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/pages/videoPage/video-page.nvue?vue&type=template&id=02fd4aaf&scoped=true&mpType=page ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_page_nvue_vue_type_template_id_02fd4aaf_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video-page.nvue?vue&type=template&id=02fd4aaf&scoped=true&mpType=page */ 125);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_page_nvue_vue_type_template_id_02fd4aaf_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_page_nvue_vue_type_template_id_02fd4aaf_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_page_nvue_vue_type_template_id_02fd4aaf_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_page_nvue_vue_type_template_id_02fd4aaf_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 125 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/hbuilder-workspace/YzKitchen/pages/videoPage/video-page.nvue?vue&type=template&id=02fd4aaf&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    chunleiVideo: __webpack_require__(/*! @/components/chunlei-video/chunlei-video.nvue */ 126)
      .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: false,
        enableBackToTop: true,
        bubble: "true",
      },
    },
    [
      _c(
        "div",
        { staticClass: ["page"], style: { height: _vm.height } },
        [
          _c(
            "swiper",
            {
              staticClass: ["swiper"],
              attrs: {
                skipHiddenItemLayout: true,
                vertical: true,
                acceleration: true,
                current: _vm.index,
              },
              on: {
                change: _vm.changeCurrent,
                animationfinish: _vm.animationFinish,
              },
            },
            _vm._l(_vm.videoList, function (item, idx) {
              return _c(
                "swiper-item",
                {
                  key: idx,
                  staticClass: ["swiper-item"],
                  staticStyle: { zIndex: "999999" },
                },
                [
                  Math.abs(_vm.index - idx) <= 1
                    ? _c(
                        "div",
                        { staticClass: ["video-box"] },
                        [
                          item.src
                            ? _c(
                                "block",
                                [
                                  Math.abs(_vm.index - idx) <= 1
                                    ? _c("chunlei-video", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: !_vm.maskShow,
                                            expression: "!maskShow",
                                          },
                                        ],
                                        staticClass: ["video"],
                                        attrs: {
                                          index: _vm.index,
                                          poster: item.poster,
                                          id: item.id,
                                          danmuList: _vm.danmuList,
                                          src: item.src,
                                          height: _vm.height,
                                          width: _vm.width,
                                          play: item.flag,
                                          gDuration: item.duration,
                                          initialTime: 0,
                                          objectFit: item.objectFit,
                                        },
                                        on: {
                                          pause: _vm.pauseVideo,
                                          playEnd: _vm.playEnd,
                                        },
                                      })
                                    : _vm._e(),
                                  _c("cover-view", {
                                    staticStyle: {
                                      width: "750rpx",
                                      height: "2000rpx",
                                      background: "#DD524D",
                                      position: "absolute",
                                      opacity: "0.1",
                                    },
                                    on: {
                                      click: function ($event) {
                                        _vm.clickVideo()
                                      },
                                    },
                                  }),
                                  _c(
                                    "cover-view",
                                    { staticClass: ["cover-view-left"] },
                                    [
                                      _c(
                                        "cover-view",
                                        { staticClass: ["left-view"] },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticClass: ["left-text"],
                                              appendAsTree: true,
                                              attrs: { append: "tree" },
                                            },
                                            [_vm._v("@" + _vm._s(item.at))]
                                          ),
                                        ]
                                      ),
                                      _c(
                                        "cover-view",
                                        { staticClass: ["left-view"] },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticClass: ["left-text"],
                                              appendAsTree: true,
                                              attrs: { append: "tree" },
                                            },
                                            [_vm._v(_vm._s(item.content))]
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  _c(
                                    "cover-view",
                                    { staticClass: ["cover-view-right"] },
                                    [
                                      _c("cover-image", {
                                        staticClass: ["avater"],
                                        attrs: { src: item.avater },
                                        on: { click: function ($event) {} },
                                      }),
                                      item.userId != _vm.userInfo.userId &&
                                      !item.meIsFollow
                                        ? _c(
                                            "u-text",
                                            {
                                              staticClass: [
                                                "right-text-avater",
                                              ],
                                              appendAsTree: true,
                                              attrs: { append: "tree" },
                                              on: {
                                                click: function ($event) {
                                                  _vm.tapAvater(item)
                                                },
                                              },
                                            },
                                            [_vm._v("+")]
                                          )
                                        : _vm._e(),
                                      _c("u-text", {
                                        staticClass: ["right-text"],
                                        appendAsTree: true,
                                        attrs: { append: "tree" },
                                      }),
                                      _c("cover-image", {
                                        staticClass: ["img"],
                                        attrs: {
                                          src: item.meIsSupport
                                            ? "../../static/baskCooking/xq_dianzaia.png"
                                            : "../../static/baskCooking/xq_dianzai.png",
                                        },
                                        on: {
                                          click: function ($event) {
                                            _vm.tapSupport(item)
                                          },
                                        },
                                      }),
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["right-text"],
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                        },
                                        [_vm._v(_vm._s(item.supportNum))]
                                      ),
                                      _c("cover-image", {
                                        staticClass: ["img"],
                                        attrs: {
                                          src: item.check
                                            ? "../../static/baskCooking/xq_stara.png"
                                            : "../../static/baskCooking/xq_star.png",
                                        },
                                        on: {
                                          click: function ($event) {
                                            _vm.tapLove(item)
                                          },
                                        },
                                      }),
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["right-text"],
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                        },
                                        [_vm._v(_vm._s(item.like))]
                                      ),
                                      _c("cover-image", {
                                        staticClass: ["img"],
                                        attrs: {
                                          src: "../../static/baskCooking/xq_info.png",
                                        },
                                        on: {
                                          click: function ($event) {
                                            _vm.tapMsg(item)
                                          },
                                        },
                                      }),
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["right-text"],
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                        },
                                        [_vm._v(_vm._s(item.comment))]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : _vm._e(),
                        ],
                        1
                      )
                    : _vm._e(),
                ]
              )
            }),
            1
          ),
          _c(
            "cover-view",
            {
              staticStyle: {
                width: "100rpx",
                height: "100rpx",
                position: "absolute",
                top: "80rpx",
                left: "0",
                padding: "40rpx",
              },
              on: {
                click: function ($event) {
                  _vm.back()
                },
              },
            },
            [
              _c("cover-image", {
                staticStyle: { width: "28rpx", height: "46rpx" },
                attrs: { src: "/static/baskCooking/xq_back.png" },
                on: { click: function ($event) {} },
              }),
            ],
            1
          ),
        ],
        1
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 126 */
/*!***********************************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunlei-video.nvue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunlei-video.nvue?vue&type=template&id=bc70e9d0&scoped=true& */ 127);\n/* harmony import */ var _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunlei-video.nvue?vue&type=script&lang=js& */ 129);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& */ 148).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& */ 148).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"bc70e9d0\",\n  \"e1ffb22c\",\n  false,\n  _chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/chunlei-video/chunlei-video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUk7QUFDdkk7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHdGQUErRTtBQUNuSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsd0ZBQStFO0FBQ3hJOztBQUVBOztBQUVBO0FBQ3dNO0FBQ3hNLGdCQUFnQiw0TUFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NodW5sZWktdmlkZW8ubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYzcwZTlkMCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NodW5sZWktdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2h1bmxlaS12aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vY2h1bmxlaS12aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YmM3MGU5ZDAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2NodW5sZWktdmlkZW8ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWJjNzBlOWQwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4v5a6J6KOF5YyF5aSn5YWoL0hCdWlsZGVyWC4zLjUuMi4yMDIyMDcxOS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYmM3MGU5ZDBcIixcbiAgXCJlMWZmYjIyY1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2NodW5sZWktdmlkZW8vY2h1bmxlaS12aWRlby5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///126\n");

/***/ }),
/* 127 */
/*!******************************************************************************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunlei-video.nvue?vue&type=template&id=bc70e9d0&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video.nvue?vue&type=template&id=bc70e9d0&scoped=true& */ 128);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 128 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunlei-video.nvue?vue&type=template&id=bc70e9d0&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["video"] },
    [
      _c("u-video", {
        ref: "`video_${src}`",
        staticClass: ["video"],
        style: { height: _vm.height },
        attrs: {
          src: _vm.src,
          controls: false,
          showPlayBtn: true,
          autoplay: true,
          muted: !_vm.load || !_vm.play,
          showCenterPlayBtn: true,
          loop: true,
          enableProgressGesture: false,
          objectFit: _vm.objectFit,
          poster: _vm.poster,
          showLoading: true,
          initialTime: 0,
          id: "video_" + _vm.src,
        },
        on: {
          play: _vm.continuePlay,
          ended: _vm.playEnd,
          timeupdate: _vm.timeupdate,
        },
      }),
      !_vm.play && !_vm.playFirst
        ? _c("cover-image", {
            staticStyle: {
              position: "absolute",
              width: "100rpx",
              height: "100rpx",
            },
            attrs: { src: "../../static/baskCooking/play.png" },
          })
        : _vm._e(),
      _vm.poster != "" && _vm.playFirst
        ? _c("cover-image", {
            staticClass: ["img"],
            style: { height: _vm.height },
            attrs: { src: _vm.poster },
          })
        : _vm._e(),
      _c("cover-view", { staticClass: ["top"] }),
      _c("cover-view", { staticClass: ["bottom"] }),
      _c(
        "cover-view",
        { staticClass: ["danmu-view"] },
        [
          _c("chunLei-danmu", {
            ref: "danmu",
            attrs: { danmuList: _vm.danmuList, width: 750, current: _vm.time },
          }),
        ],
        1
      ),
      _c("cover-view", { staticClass: ["slider-view"] }),
      _c("cover-image", {
        staticClass: ["rotate-img"],
        style: { transform: "rotate(" + _vm.time * 20 + "deg)" },
        attrs: { src: _vm.rotateImg },
      }),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 129 */
/*!************************************************************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunlei-video.nvue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video.nvue?vue&type=script&lang=js& */ 130);\n/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRoQixDQUFnQiwraUJBQUcsRUFBQyIsImZpbGUiOiIxMjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL+WuieijheWMheWkp+WFqC9IQnVpbGRlclguMy41LjIuMjAyMjA3MTktYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4v5a6J6KOF5YyF5aSn5YWoL0hCdWlsZGVyWC4zLjUuMi4yMDIyMDcxOS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uL+WuieijheWMheWkp+WFqC9IQnVpbGRlclguMy41LjIuMjAyMjA3MTktYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2h1bmxlaS12aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL+WuieijheWMheWkp+WFqC9IQnVpbGRlclguMy41LjIuMjAyMjA3MTktYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4v5a6J6KOF5YyF5aSn5YWoL0hCdWlsZGVyWC4zLjUuMi4yMDIyMDcxOS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uL+WuieijheWMheWkp+WFqC9IQnVpbGRlclguMy41LjIuMjAyMjA3MTktYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2h1bmxlaS12aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///129\n");

/***/ }),
/* 130 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunlei-video.nvue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 16);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 60));\nvar _chunLeiSlider = _interopRequireDefault(__webpack_require__(/*! ./chunLei-slider/chunLei-slider.nvue */ 131));\nvar _chunLeiDanmu = _interopRequireDefault(__webpack_require__(/*! ./chunLei-danmu/chunLei-danmu.nvue */ 138));\nvar _props;\n//#endif\nvar _default = {\n  components: {\n    chunLeiSlider: _chunLeiSlider.default,\n    //#ifdef APP-NVUE\n    chunLeiDanmu: _chunLeiDanmu.default\n    //#endif\n  },\n\n  props: (_props = {\n    controls: {\n      type: Boolean,\n      default: true\n    },\n    poster: {\n      type: String,\n      default: ''\n    },\n    src: {\n      type: String,\n      default: ''\n    },\n    rotateImg: {\n      type: String,\n      default: ''\n    },\n    play: {\n      type: Boolean,\n      default: false\n    },\n    height: {\n      type: String,\n      default: ''\n    },\n    width: {\n      type: String,\n      default: ''\n    },\n    initialTime: {\n      type: Number,\n      default: 0\n    },\n    gDuration: {\n      type: Number,\n      default: 999\n    },\n    //大概时长使进度条更准确\n    objectFit: {\n      type: String,\n      default: 'contain'\n    }\n  }, (0, _defineProperty2.default)(_props, \"poster\", {\n    //视频封面的图片\n    type: String,\n    default: ''\n  }), (0, _defineProperty2.default)(_props, \"danmuList\", {\n    type: Array,\n    default: []\n  }), (0, _defineProperty2.default)(_props, \"index\", {\n    type: Number,\n    default: 0\n  }), _props),\n  data: function data() {\n    return {\n      time: 0,\n      duration: 0,\n      playFirst: true,\n      load: false,\n      timer: null\n    };\n  },\n  beforeCreate: function beforeCreate() {\n    // #ifdef APP-NVUE\n    var domModule = weex.requireModule('dom');\n    domModule.addRule('fontFace', {\n      'fontFamily': \"texticons\",\n      'src': \"url('/static/baskCooking/chunlei-video/text-icon.ttf')\"\n    });\n    // #endif\n  },\n  mounted: function mounted() {\n    var _this = this;\n    this.videoCtx = uni.createVideoContext(\"video_\".concat(this.src), this);\n    //#ifndef MP-WEIXIN\n    setTimeout(function () {\n      _this.videoCtx.play();\n    }, 200);\n    // #endif\n  },\n\n  methods: {\n    // 播放\n    continuePlay: function continuePlay() {\n      var _this2 = this;\n      if (!this.load) {\n        setTimeout(function () {\n          _this2.load = true;\n          _this2.videoPlay();\n        }, 1000);\n      }\n    },\n    //拖动滑块\n    changeCurrent: function changeCurrent(e) {\n      this.time = e.detail.value;\n      this.videoCtx.seek(this.time);\n    },\n    playEnd: function playEnd() {\n      this.$emit('playEnd');\n    },\n    timeupdate: function timeupdate(event) {\n      this.duration = event.detail.duration;\n      if (this.time >= event.detail.duration) this.time = 0;\n      this.time = event.detail.currentTime;\n      this.$emit('timeupdate', this.time);\n    },\n    videoPlay: function videoPlay() {\n      var _this3 = this;\n      /* // #endif */\n      if (this.timer) clearTimeout(this.timer);\n      this.timer = setTimeout(function () {\n        if (_this3.play) {\n          _this3.videoCtx.play();\n          _this3.playFirst = false;\n        } else {\n          _this3.videoCtx.pause();\n          _this3.$emit('pause', _this3.time);\n        }\n      });\n    }\n  },\n  watch: {\n    //防抖 防止视频播放暂停太快\n    play: function play(newVal, oldVal) {\n      if (this.load) this.videoPlay();\n    },\n    startTime: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n        this.time = newVal;\n      }\n    },\n    gDuration: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n        this.duration = newVal;\n      }\n    },\n    index: {\n      // immediate: true,\n      handler: function handler(newVal, oldVal) {\n        this.videoCtx = uni.createVideoContext(\"video_\".concat(this.src), this);\n        //#ifndef MP-WEIXIN\n        this.videoCtx.seek(0);\n        // this.videoCtx.stop();\n        // #endif\n      }\n    }\n  },\n\n  computed: {\n    barWidth: function barWidth() {\n      var width = this.time / this.duration * parseInt(this.width);\n      return \"\".concat(width, \"px\");\n    },\n    startTime: function startTime() {\n      return this.initialTime;\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5sZWktdmlkZW8ubnZ1ZSJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwiY2h1bkxlaVNsaWRlciIsImNodW5MZWlEYW5tdSIsInByb3BzIiwiY29udHJvbHMiLCJ0eXBlIiwiZGVmYXVsdCIsInBvc3RlciIsInNyYyIsInJvdGF0ZUltZyIsInBsYXkiLCJoZWlnaHQiLCJ3aWR0aCIsImluaXRpYWxUaW1lIiwiZ0R1cmF0aW9uIiwib2JqZWN0Rml0IiwiZGF0YSIsInRpbWUiLCJkdXJhdGlvbiIsInBsYXlGaXJzdCIsImxvYWQiLCJ0aW1lciIsImJlZm9yZUNyZWF0ZSIsImRvbU1vZHVsZSIsIm1vdW50ZWQiLCJzZXRUaW1lb3V0IiwibWV0aG9kcyIsImNvbnRpbnVlUGxheSIsImNoYW5nZUN1cnJlbnQiLCJwbGF5RW5kIiwidGltZXVwZGF0ZSIsInZpZGVvUGxheSIsIndhdGNoIiwic3RhcnRUaW1lIiwiaW1tZWRpYXRlIiwiaGFuZGxlciIsImluZGV4IiwiY29tcHV0ZWQiLCJiYXJXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUErQkE7QUFFQTtBQUFBO0FBQ0E7QUFBQSxlQUNBO0VBQ0FBO0lBQ0FDO0lBQ0E7SUFDQUM7SUFDQTtFQUNBOztFQUNBQztJQUNBQztNQUNBQztNQUNBQztJQUNBO0lBQ0FDO01BQ0FGO01BQ0FDO0lBQ0E7SUFDQUU7TUFDQUg7TUFDQUM7SUFDQTtJQUNBRztNQUNBSjtNQUNBQztJQUNBO0lBQ0FJO01BQ0FMO01BQ0FDO0lBQ0E7SUFDQUs7TUFDQU47TUFDQUM7SUFDQTtJQUNBTTtNQUNBUDtNQUNBQztJQUNBO0lBQ0FPO01BQ0FSO01BQ0FDO0lBQ0E7SUFDQVE7TUFDQVQ7TUFDQUM7SUFDQTtJQUFBO0lBQ0FTO01BQ0FWO01BQ0FDO0lBQ0E7RUFBQSxtREFDQTtJQUFBO0lBQ0FEO0lBQ0FDO0VBQ0EsdURBQ0E7SUFDQUQ7SUFDQUM7RUFDQSxtREFDQTtJQUNBRDtJQUNBQztFQUNBLFdBQ0E7RUFDQVU7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUFBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQTtFQUVBOztFQUNBQztJQUNBO0lBQ0FDO01BQUE7TUFDQTtRQUNBRjtVQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBRztNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQTtNQUNBO01BQ0E7UUFDQTtVQUNBO1VBQ0E7UUFDQTtVQUNBO1VBQ0E7UUFDQTtNQUNBO0lBRUE7RUFDQTtFQUNBQztJQUNBO0lBQ0F0QjtNQUNBO0lBQ0E7SUFDQXVCO01BQ0FDO01BQ0FDO1FBRUE7TUFDQTtJQUNBO0lBQ0FyQjtNQUNBb0I7TUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBRDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7O0VBQ0FFO0lBQ0FDO01BRUE7TUFFQTtJQUNBO0lBQ0FMO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiIxMzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ2aWRlb1wiPlxyXG5cdFx0PHZpZGVvIDpzcmM9XCJzcmNcIiA6Y29udHJvbHM9XCJmYWxzZVwiIDpzaG93LXBsYXktYnRuPVwidHJ1ZVwiIDphdXRvcGxheT1cInRydWVcIiA6bXV0ZWQ9XCIhbG9hZHx8IXBsYXlcIiA6c2hvdy1jZW50ZXItcGxheS1idG49XCJ0cnVlXCIgOnN0eWxlPVwieyBoZWlnaHQ6IGhlaWdodCB9XCJcclxuXHRcdFx0Omxvb3A9XCJ0cnVlXCIgQHBsYXk9XCJjb250aW51ZVBsYXlcIiA6ZW5hYmxlLXByb2dyZXNzLWdlc3R1cmU9XCJmYWxzZVwiIDpvYmplY3RGaXQ9XCJvYmplY3RGaXRcIiBAZW5kZWQ9XCJwbGF5RW5kXCJcclxuXHRcdFx0OnBvc3Rlcj1cInBvc3RlclwiIDpzaG93LWxvYWRpbmc9XCJ0cnVlXCJcclxuXHRcdFx0OmluaXRpYWwtdGltZT1cIjBcIiA6aWQ9XCJgdmlkZW9fJHtzcmN9YFwiIHJlZj1cImB2aWRlb18ke3NyY31gXCIgY2xhc3M9XCJ2aWRlb1wiIEB0aW1ldXBkYXRlPVwidGltZXVwZGF0ZVwiPlxyXG5cdFx0PC92aWRlbz5cclxuXHRcdDwhLS0gPGNvdmVyLXZpZXcgY2xhc3M9XCJpY29uLXZpZXdcIiB2LWlmPVwiIXBsYXkmJiFwbGF5Rmlyc3RcIj48dGV4dCBjbGFzcz1cImljb25cIiBzdHlsZT1cImNvbG9yOiNGRkZcIj4mI3hlODk2OzwvdGV4dD4gLS0+XHJcblx0XHQ8Y292ZXItaW1hZ2Ugc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDBycHg7IGhlaWdodDogMTAwcnB4O1wiIHYtaWY9XCIhcGxheSYmIXBsYXlGaXJzdFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9iYXNrQ29va2luZy9wbGF5LnBuZ1wiPjwvY292ZXItaW1hZ2U+XHJcblx0XHQ8L2NvdmVyLXZpZXc+XHJcblx0XHQ8Y292ZXItaW1hZ2UgY2xhc3M9XCJpbWdcIiA6c3R5bGU9XCJ7IGhlaWdodDogaGVpZ2h0IH1cIiA6c3JjPVwicG9zdGVyXCIgdi1pZj1cInBvc3RlciE9JycmJnBsYXlGaXJzdFwiPjwvY292ZXItaW1hZ2U+XHJcblx0XHQ8Y292ZXItdmlldyBjbGFzcz1cInRvcFwiPjwvY292ZXItdmlldz5cclxuXHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiYm90dG9tXCI+PC9jb3Zlci12aWV3PlxyXG5cdFx0PCEtLSAjaWZkZWYgQVBQLVBMVVMgLS0+XHJcblx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImRhbm11LXZpZXdcIj5cclxuXHRcdFx0PGNodW5MZWktZGFubXUgOmRhbm11TGlzdD1cImRhbm11TGlzdFwiIDp3aWR0aD1cIjc1MFwiIDpjdXJyZW50PVwidGltZVwiIHJlZj1cImRhbm11XCI+PC9jaHVuTGVpLWRhbm11PlxyXG5cdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHQ8IS0tICNpZm5kZWYgTVAtV0VJWElOIC0tPlxyXG5cdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJzbGlkZXItdmlld1wiPlxyXG5cdFx0XHQ8IS0tIDxjaHVuTGVpLXNsaWRlciA6bWF4PVwiZHVyYXRpb25cIiA6dmFsdWU9XCJ0aW1lXCIgOnN0eWxlPVwie3dpZHRoOmAkezM4MH1weGB9XCIgOnNjcmVlbkxlZnQ9XCIxMjBcIiA6d2lkdGg9XCIzODBcIiBAY2hhbmdlPVwiY2hhbmdlQ3VycmVudFwiPjwvY2h1bkxlaS1zbGlkZXI+IC0tPlxyXG5cdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0PGNvdmVyLWltYWdlIDpzcmM9XCJyb3RhdGVJbWdcIiBjbGFzcz1cInJvdGF0ZS1pbWdcIiA6c3R5bGU9XCJ7dHJhbnNmb3JtOmByb3RhdGUoJHt0aW1lKjIwfWRlZylgfVwiPjwvY292ZXItaW1hZ2U+XHJcblx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdDwhLS0gI2lmZGVmIE1QLVdFSVhJTiAtLT5cclxuXHRcdDxjb3Zlci12aWV3IGNsYXNzPVwicHJvZ3Jlc3NCYXJcIiA6c3R5bGU9XCJ7IHdpZHRoOiBiYXJXaWR0aCB9XCI+PC9jb3Zlci12aWV3PlxyXG5cdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgY2h1bkxlaVNsaWRlciBmcm9tICcuL2NodW5MZWktc2xpZGVyL2NodW5MZWktc2xpZGVyLm52dWUnO1xyXG5cdC8vI2lmZGVmIEFQUC1OVlVFXHJcblx0aW1wb3J0IGNodW5MZWlEYW5tdSBmcm9tICcuL2NodW5MZWktZGFubXUvY2h1bkxlaS1kYW5tdS5udnVlJztcclxuXHQvLyNlbmRpZlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0Y2h1bkxlaVNsaWRlcixcclxuXHRcdFx0Ly8jaWZkZWYgQVBQLU5WVUVcclxuXHRcdFx0Y2h1bkxlaURhbm11XHJcblx0XHRcdC8vI2VuZGlmXHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Y29udHJvbHM6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0cG9zdGVyOntcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0c3JjOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdHJvdGF0ZUltZzoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwbGF5OiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRoZWlnaHQ6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0d2lkdGg6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0aW5pdGlhbFRpbWU6IHtcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnRHVyYXRpb246IHtcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogOTk5XHJcblx0XHRcdH0sIC8v5aSn5qaC5pe26ZW/5L2/6L+b5bqm5p2h5pu05YeG56GuXHJcblx0XHRcdG9iamVjdEZpdDoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnY29udGFpbidcclxuXHRcdFx0fSxcclxuXHRcdFx0cG9zdGVyOiB7IC8v6KeG6aKR5bCB6Z2i55qE5Zu+54mHXHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdGRhbm11TGlzdDoge1xyXG5cdFx0XHRcdHR5cGU6IEFycmF5LFxyXG5cdFx0XHRcdGRlZmF1bHQ6IFtdXHJcblx0XHRcdH0sXHJcblx0XHRcdGluZGV4OiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGltZTogMCxcclxuXHRcdFx0XHRkdXJhdGlvbjogMCxcclxuXHRcdFx0XHRwbGF5Rmlyc3Q6IHRydWUsXHJcblx0XHRcdFx0bG9hZDogZmFsc2UsXHJcblx0XHRcdFx0dGltZXI6IG51bGxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGJlZm9yZUNyZWF0ZSgpIHtcclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0XHRcdHZhciBkb21Nb2R1bGUgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cdFx0XHRkb21Nb2R1bGUuYWRkUnVsZSgnZm9udEZhY2UnLCB7XHJcblx0XHRcdFx0J2ZvbnRGYW1pbHknOiBcInRleHRpY29uc1wiLFxyXG5cdFx0XHRcdCdzcmMnOiBcInVybCgnL3N0YXRpYy9iYXNrQ29va2luZy9jaHVubGVpLXZpZGVvL3RleHQtaWNvbi50dGYnKVwiXHJcblx0XHRcdH0pO1xyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLnZpZGVvQ3R4ID0gdW5pLmNyZWF0ZVZpZGVvQ29udGV4dChgdmlkZW9fJHt0aGlzLnNyY31gLCB0aGlzKVxyXG5cdFx0XHQvLyNpZm5kZWYgTVAtV0VJWElOXHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMudmlkZW9DdHgucGxheSgpO1xyXG5cdFx0XHR9LCAyMDApXHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8g5pKt5pS+XHJcblx0XHRcdGNvbnRpbnVlUGxheSgpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMubG9hZCkge1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMubG9hZCA9IHRydWVcclxuXHRcdFx0XHRcdFx0dGhpcy52aWRlb1BsYXkoKVxyXG5cdFx0XHRcdFx0fSwgMTAwMClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5ouW5Yqo5ruR5Z2XXHJcblx0XHRcdGNoYW5nZUN1cnJlbnQoZSkge1xyXG5cdFx0XHRcdHRoaXMudGltZSA9IGUuZGV0YWlsLnZhbHVlXHJcblx0XHRcdFx0dGhpcy52aWRlb0N0eC5zZWVrKHRoaXMudGltZSlcclxuXHRcdFx0fSxcclxuXHRcdFx0cGxheUVuZCgpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdwbGF5RW5kJylcclxuXHRcdFx0fSxcclxuXHRcdFx0dGltZXVwZGF0ZShldmVudCkge1xyXG5cdFx0XHRcdHRoaXMuZHVyYXRpb24gPSBldmVudC5kZXRhaWwuZHVyYXRpb25cclxuXHRcdFx0XHRpZiAodGhpcy50aW1lID49IGV2ZW50LmRldGFpbC5kdXJhdGlvbikgdGhpcy50aW1lID0gMFxyXG5cdFx0XHRcdHRoaXMudGltZSA9IGV2ZW50LmRldGFpbC5jdXJyZW50VGltZVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3RpbWV1cGRhdGUnLCB0aGlzLnRpbWUpXHJcblx0XHRcdH0sXHJcblx0XHRcdHZpZGVvUGxheTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0LyogLy8gI2VuZGlmICovXHJcblx0XHRcdFx0aWYgKHRoaXMudGltZXIpIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxyXG5cdFx0XHRcdHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLnBsYXkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy52aWRlb0N0eC5wbGF5KCk7XHJcblx0XHRcdFx0XHRcdHRoaXMucGxheUZpcnN0ID0gZmFsc2VcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudmlkZW9DdHgucGF1c2UoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy4kZW1pdCgncGF1c2UnLCB0aGlzLnRpbWUpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6IHtcclxuXHRcdFx0Ly/pmLLmipYg6Ziy5q2i6KeG6aKR5pKt5pS+5pqC5YGc5aSq5b+rXHJcblx0XHRcdHBsYXk6IGZ1bmN0aW9uKG5ld1ZhbCwgb2xkVmFsKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMubG9hZCkgdGhpcy52aWRlb1BsYXkoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdGFydFRpbWU6IHtcclxuXHRcdFx0XHRpbW1lZGlhdGU6IHRydWUsXHJcblx0XHRcdFx0aGFuZGxlcihuZXdWYWwsIG9sZFZhbCkge1xyXG5cclxuXHRcdFx0XHRcdHRoaXMudGltZSA9IG5ld1ZhbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z0R1cmF0aW9uOiB7XHJcblx0XHRcdFx0aW1tZWRpYXRlOiB0cnVlLFxyXG5cdFx0XHRcdGhhbmRsZXIobmV3VmFsLCBvbGRWYWwpIHtcclxuXHRcdFx0XHRcdHRoaXMuZHVyYXRpb24gPSBuZXdWYWxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGluZGV4OiB7XHJcblx0XHRcdFx0Ly8gaW1tZWRpYXRlOiB0cnVlLFxyXG5cdFx0XHRcdGhhbmRsZXIobmV3VmFsLCBvbGRWYWwpIHtcclxuXHRcdFx0XHRcdHRoaXMudmlkZW9DdHggPSB1bmkuY3JlYXRlVmlkZW9Db250ZXh0KGB2aWRlb18ke3RoaXMuc3JjfWAsIHRoaXMpXHJcblx0XHRcdFx0XHQvLyNpZm5kZWYgTVAtV0VJWElOXHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvQ3R4LnNlZWsoMCk7XHJcblx0XHRcdFx0XHQvLyB0aGlzLnZpZGVvQ3R4LnN0b3AoKTtcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGJhcldpZHRoKCkge1xyXG5cclxuXHRcdFx0XHRsZXQgd2lkdGggPSB0aGlzLnRpbWUgLyB0aGlzLmR1cmF0aW9uICogcGFyc2VJbnQodGhpcy53aWR0aClcclxuXHJcblx0XHRcdFx0cmV0dXJuIGAke3dpZHRofXB4YFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdGFydFRpbWUoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5pdGlhbFRpbWVcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdEBmb250LWZhY2Uge1xyXG5cdFx0Zm9udC1mYW1pbHk6IFwidGV4dGljb25zXCI7XHJcblx0XHRzcmM6IHVybCgnfkAvc3RhdGljL2Jhc2tDb29raW5nL2NodW5sZWktdmlkZW8vdGV4dC1pY29uLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHR9XHJcblxyXG5cdC8qICNlbmRpZiovXHJcblx0LnZpZGVvIHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblxyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmltZyB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHR9XHJcblxyXG5cdC5pY29uLXZpZXcge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdH1cclxuXHJcblx0LnRvcCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuNykpO1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGhlaWdodDogMzAwcnB4O1xyXG5cdH1cclxuXHJcblx0Lmljb24ge1xyXG5cdFx0b3BhY2l0eTogMC42O1xyXG5cdFx0Zm9udC1zaXplOiA0MnB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cclxuXHRcdGZvbnQtZmFtaWx5OiBcInRleHRpY29uc1wiO1xyXG5cdFx0LyogI2VuZGlmKi9cclxuXHRcdGZvbnQtZmFtaWx5OiB0ZXh0aWNvbnM7XHJcblx0fVxyXG5cclxuXHQuYm90dG9tIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMDBycHg7XHJcblx0fVxyXG5cclxuXHQuc2xpZGVyLXZpZXcge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogMzBweDtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0fVxyXG5cclxuXHQucHJvZ3Jlc3NCYXIge1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMnVweDtcclxuXHRcdGhlaWdodDogNHVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHR6LWluZGV4OiA5OTk5OTk7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiAzMHB4O1xyXG5cdFx0Ly8jaWZuZGVmIEFQUC1QTFVTLU5WVUVcclxuXHRcdGFuaW1hdGlvbjogZmxpY2tlciA0cyBsaW5lYXIgaW5maW5pdGU7XHJcblx0XHRhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcblx0XHQvLyNlbmRpZlxyXG5cdH1cclxuXHJcblx0Ly8jaWZuZGVmIEFQUC1QTFVTLU5WVUVcclxuXHRAa2V5ZnJhbWVzIGZsaWNrZXIge1xyXG5cdFx0MCUge1xyXG5cdFx0XHRib3gtc2hhZG93OiAwIDAgMCAjRkZGRkZGO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKiDmmoLlgZzmlYjmnpwgKi9cclxuXHRcdDEwJSB7XHJcblx0XHRcdGJveC1zaGFkb3c6IDAgMCAydXB4ICNGRkZGRkY7XHJcblx0XHR9XHJcblxyXG5cdFx0NTAlIHtcclxuXHRcdFx0Ym94LXNoYWRvdzogMCAwIDEwdXB4ICNGRkZGRkY7XHJcblx0XHR9XHJcblxyXG5cdFx0NjAlIHtcclxuXHRcdFx0Ym94LXNoYWRvdzogMCAwIDEydXB4ICNGRkZGRkY7XHJcblx0XHR9XHJcblxyXG5cdFx0OTAlIHtcclxuXHRcdFx0Ym94LXNoYWRvdzogMCAwIDE4dXB4ICNGRkZGRkY7XHJcblx0XHR9XHJcblxyXG5cdFx0MTAwJSB7XHJcblx0XHRcdGJveC1zaGFkb3c6IDAgMCAyMHVweCAjRkZGRkZGO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8vI2VuZGlmXHJcblx0LmRhbm11LXZpZXcge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0aGVpZ2h0OiAxNjBweDtcclxuXHR9XHJcblxyXG5cdC5yb3RhdGUtaW1nIHtcclxuXHRcdHdpZHRoOiA5MHJweDtcclxuXHRcdGhlaWdodDogOTBycHg7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDEwMHJweDtcclxuXHRcdHJpZ2h0OiAyMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDQ1cnB4O1xyXG5cdH1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///130\n");

/***/ }),
/* 131 */
/*!***************************************************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunLei-slider/chunLei-slider.nvue ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunLei-slider.nvue?vue&type=template&id=5a6b26ee&scoped=true& */ 132);\n/* harmony import */ var _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunLei-slider.nvue?vue&type=script&lang=js& */ 134);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chunLei-slider.nvue?vue&type=style&index=0&id=5a6b26ee&lang=scss&scoped=true& */ 136).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chunLei-slider.nvue?vue&type=style&index=0&id=5a6b26ee&lang=scss&scoped=true& */ 136).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"5a6b26ee\",\n  \"0c37d30e\",\n  false,\n  _chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/chunlei-video/chunLei-slider/chunLei-slider.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDBGQUFpRjtBQUNySSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMEZBQWlGO0FBQzFJOztBQUVBOztBQUVBO0FBQzJNO0FBQzNNLGdCQUFnQiw0TUFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NodW5MZWktc2xpZGVyLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWE2YjI2ZWUmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jaHVuTGVpLXNsaWRlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaHVuTGVpLXNsaWRlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vY2h1bkxlaS1zbGlkZXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVhNmIyNmVlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vY2h1bkxlaS1zbGlkZXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVhNmIyNmVlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL+WuieijheWMheWkp+WFqC9IQnVpbGRlclguMy41LjIuMjAyMjA3MTktYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjVhNmIyNmVlXCIsXG4gIFwiMGMzN2QzMGVcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5MZWktc2xpZGVyL2NodW5MZWktc2xpZGVyLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///131\n");

/***/ }),
/* 132 */
/*!**********************************************************************************************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=template&id=5a6b26ee&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-slider.nvue?vue&type=template&id=5a6b26ee&scoped=true& */ 133);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 133 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=template&id=5a6b26ee&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "slider",
      staticClass: ["slider", "flex"],
      style: { width: _vm.width + "px" },
      attrs: { id: "slider" },
    },
    [
      _c(
        "div",
        {
          staticClass: ["slider-left", "flex"],
          style: { width: _vm.leftWidth + "px" },
          on: { touchend: _vm.sliderTouch },
        },
        [
          _c("div", {
            staticClass: ["left"],
            style: { backgroundColor: _vm.backgroundColor },
          }),
        ]
      ),
      _c(
        "div",
        {
          staticClass: ["slider-right", "flex"],
          style: { width: _vm.currentWidth - _vm.leftWidth + "px" },
          on: { touchend: _vm.sliderTouch },
        },
        [_c("div", { staticClass: ["right"] })]
      ),
      _c(
        "div",
        {
          staticClass: ["block", "flex"],
          style: {
            backgroundColor: _vm.touch ? _vm.blockOuterColor : "rgba(0,0,0,0)",
            left: _vm.leftWidth + "px",
          },
          on: { click: function ($event) {} },
        },
        [
          _c(
            "div",
            {
              staticClass: ["block-inner", "flex"],
              style: { backgroundColor: _vm.blockBackgroundColor },
              on: {
                touchmove: _vm.blockTouchMove,
                touchend: _vm.blockTouchEnd,
                touchstart: _vm.blockTouchStart,
              },
            },
            [
              _c("div", {
                staticClass: ["block-inner-inner"],
                style: { backgroundColor: _vm.blockColor },
              }),
            ]
          ),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 134 */
/*!****************************************************************************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-slider.nvue?vue&type=script&lang=js& */ 135);\n/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNpQixDQUFnQixnakJBQUcsRUFBQyIsImZpbGUiOiIxMzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+WuieijheWMheWkp+WFqC9IQnVpbGRlclguMy41LjIuMjAyMjA3MTktYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyF5aSn5YWoL0hCdWlsZGVyWC4zLjUuMi4yMDIyMDcxOS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uL+WuieijheWMheWkp+WFqC9IQnVpbGRlclguMy41LjIuMjAyMjA3MTktYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2h1bkxlaS1zbGlkZXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi/lronoo4XljIXlpKflhagvSEJ1aWxkZXJYLjMuNS4yLjIwMjIwNzE5LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uL+WuieijheWMheWkp+WFqC9IQnVpbGRlclguMy41LjIuMjAyMjA3MTktYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi/lronoo4XljIXlpKflhagvSEJ1aWxkZXJYLjMuNS4yLjIwMjIwNzE5LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NodW5MZWktc2xpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///134\n");

/***/ }),
/* 135 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  props: {\n    min: {\n      type: Number,\n      default: 0\n    },\n    max: {\n      type: Number,\n      default: 0\n    },\n    value: {\n      type: Number,\n      default: 0\n    },\n    width: {\n      type: Number,\n      default: 0\n    },\n    ratio: {\n      type: Number,\n      default: 1\n    },\n    direction: {\n      type: String,\n      default: 'screenX'\n    },\n    backgroundColor: {\n      //滑块右侧背景条的颜色\n      type: String,\n      default: '#e9e9e9'\n    },\n    blockColor: {\n      //滑块颜色\n      type: String,\n      default: '#ffffff'\n    },\n    screenLeft: {\n      //slider距离左边距离\n      type: Number,\n      default: 0\n    },\n    iosDirection: {\n      type: Number,\n      default: 1\n    }\n  },\n  data: function data() {\n    return {\n      oldToucesX: 0,\n      leftWidth: 0,\n      oldLeftWidth: 0,\n      touch: false\n    };\n  },\n  mounted: function mounted() {},\n  methods: {\n    sliderTouch: function sliderTouch(e) {\n      __f__(\"log\", e, \" at components/chunlei-video/chunLei-slider/chunLei-slider.nvue:78\");\n      var touches = e.changedTouches[0];\n      this.leftWidth = (touches[this.direction] || touches['clientX']) * this.ratio - this.screenLeft;\n      this.leftWidth = this.leftWidth > this.currentWidth ? this.currentWidth : this.leftWidth;\n      this.leftWidth = this.leftWidth < 0 ? 0 : this.leftWidth;\n      this.blockTouchEnd();\n    },\n    // 触摸开始\n    blockTouchStart: function blockTouchStart(e) {\n      this.touch = true;\n      this.oldLeftWidth = this.leftWidth;\n      this.oldToucesX = e.changedTouches[0][this.direction] || e.changedTouches[0]['clientX'];\n    },\n    // 计算方向\n    blockTouchMove: function blockTouchMove(e) {\n      var newToucesX;\n      newToucesX = e.changedTouches[0][this.direction] || e.changedTouches[0]['clientX'];\n      this.leftWidth = this.iosDirection * (newToucesX - this.oldToucesX) * this.ratio + this.oldLeftWidth;\n      this.leftWidth = this.leftWidth > this.currentWidth ? this.currentWidth : this.leftWidth;\n      this.leftWidth = this.leftWidth < 0 ? 0 : this.leftWidth;\n    },\n    // 结束触摸\n    blockTouchEnd: function blockTouchEnd(e) {\n      var current = this.leftWidth / this.currentWidth * this.max;\n      var event = {\n        detail: {\n          value: current\n        }\n      };\n      this.$emit('change', event);\n      this.touch = false;\n    },\n    colorRgb: function colorRgb(string, opacity) {\n      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;\n      var sColor = string.toLowerCase();\n      if (sColor && reg.test(sColor)) {\n        if (sColor.length === 4) {\n          var sColorNew = \"#\";\n          for (var i = 1; i < 4; i += 1) {\n            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));\n          }\n          sColor = sColorNew;\n        }\n        //处理六位的颜色值\n        var sColorChange = [];\n        for (var i = 1; i < 7; i += 2) {\n          sColorChange.push(parseInt(\"0x\" + sColor.slice(i, i + 2)));\n        }\n        return \"rgba(\" + sColorChange.join(\",\") + \",\".concat(opacity) + \")\";\n      } else {\n        return sColor;\n      }\n    }\n  },\n  computed: {\n    blockOuterColor: function blockOuterColor() {\n      return this.colorRgb(this.blockColor, 0.4);\n    },\n    blockBackgroundColor: function blockBackgroundColor() {\n      return this.colorRgb(this.blockColor, 0.5);\n    },\n    currentWidth: function currentWidth() {\n      return this.width - 40;\n    }\n  },\n  watch: {\n    value: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n        if (this.touch) return;\n        this.leftWidth = newVal / this.max * this.currentWidth;\n        this.leftWidth = this.leftWidth > this.currentWidth ? this.currentWidth : this.leftWidth;\n      }\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 28)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5MZWktc2xpZGVyL2NodW5MZWktc2xpZGVyLm52dWUiXSwibmFtZXMiOlsicHJvcHMiLCJtaW4iLCJ0eXBlIiwiZGVmYXVsdCIsIm1heCIsInZhbHVlIiwid2lkdGgiLCJyYXRpbyIsImRpcmVjdGlvbiIsImJhY2tncm91bmRDb2xvciIsImJsb2NrQ29sb3IiLCJzY3JlZW5MZWZ0IiwiaW9zRGlyZWN0aW9uIiwiZGF0YSIsIm9sZFRvdWNlc1giLCJsZWZ0V2lkdGgiLCJvbGRMZWZ0V2lkdGgiLCJ0b3VjaCIsIm1vdW50ZWQiLCJtZXRob2RzIiwic2xpZGVyVG91Y2giLCJibG9ja1RvdWNoU3RhcnQiLCJibG9ja1RvdWNoTW92ZSIsIm5ld1RvdWNlc1giLCJibG9ja1RvdWNoRW5kIiwiZGV0YWlsIiwiY29sb3JSZ2IiLCJzQ29sb3JOZXciLCJzQ29sb3IiLCJzQ29sb3JDaGFuZ2UiLCJjb21wdXRlZCIsImJsb2NrT3V0ZXJDb2xvciIsImJsb2NrQmFja2dyb3VuZENvbG9yIiwiY3VycmVudFdpZHRoIiwid2F0Y2giLCJpbW1lZGlhdGUiLCJoYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBb0JBO0VBQ0FBO0lBQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7SUFDQUM7TUFDQUY7TUFDQUM7SUFDQTtJQUNBRTtNQUNBSDtNQUNBQztJQUNBO0lBQ0FHO01BQ0FKO01BQ0FDO0lBQ0E7SUFDQUk7TUFDQUw7TUFDQUM7SUFDQTtJQUNBSztNQUNBTjtNQUNBQztJQUNBO0lBQ0FNO01BQUE7TUFDQVA7TUFDQUM7SUFDQTtJQUNBTztNQUFBO01BQ0FSO01BQ0FDO0lBQ0E7SUFDQVE7TUFBQTtNQUNBVDtNQUNBQztJQUNBO0lBQ0FTO01BQ0FWO01BQ0FDO0lBQ0E7RUFDQTtFQUNBVTtJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQyw2QkFHQTtFQUNBQztJQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUVBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFFQUM7TUFFQTtNQUNBO01BQ0E7SUFFQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtRQUFBQztVQUFBcEI7UUFBQTtNQUFBO01BQ0E7TUFDQTtJQUNBO0lBQ0FxQjtNQUNBO01BQ0E7TUFDQTtRQUNBO1VBQ0E7VUFDQTtZQUNBQztVQUNBO1VBQ0FDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7VUFDQUM7UUFDQTtRQUNBO01BQ0E7UUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E3QjtNQUNBOEI7TUFDQUM7UUFDQTtRQUVBO1FBQ0E7TUFDQTtJQUNBO0VBRUE7QUFDQTtBQUFBLDJCIiwiZmlsZSI6IjEzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwic2xpZGVyIGZsZXhcIiBpZD1cInNsaWRlclwiIDpzdHlsZT1cInsgd2lkdGg6IGAke3dpZHRofXB4YCB9XCIgcmVmPVwic2xpZGVyXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwic2xpZGVyLWxlZnQgZmxleFwiIDpzdHlsZT1cInsgd2lkdGg6IGAke2xlZnRXaWR0aH1weGAgfVwiIEB0b3VjaGVuZC5zdG9wPVwic2xpZGVyVG91Y2hcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImxlZnRcIiA6c3R5bGU9XCJ7YmFja2dyb3VuZENvbG9yOmJhY2tncm91bmRDb2xvcn1cIj48L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cInNsaWRlci1yaWdodCBmbGV4XCIgQHRvdWNoZW5kLnN0b3A9XCJzbGlkZXJUb3VjaFwiIDpzdHlsZT1cInsgd2lkdGg6IGAke2N1cnJlbnRXaWR0aC1sZWZ0V2lkdGh9cHhgIH1cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInJpZ2h0XCI+PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJibG9jayBmbGV4XCIgOnN0eWxlPVwie2JhY2tncm91bmRDb2xvcjp0b3VjaD9ibG9ja091dGVyQ29sb3I6J3JnYmEoMCwwLDAsMCknLCBsZWZ0OiBgJHtsZWZ0V2lkdGh9cHhgfVwiXHJcblx0XHRcdEBjbGljay5zdG9wPVwiXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJibG9jay1pbm5lciBmbGV4XCIgOnN0eWxlPVwie2JhY2tncm91bmRDb2xvcjpibG9ja0JhY2tncm91bmRDb2xvcn1cIiAgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9XCJibG9ja1RvdWNoTW92ZVwiIEB0b3VjaGVuZD1cImJsb2NrVG91Y2hFbmRcIiBAdG91Y2hzdGFydD1cImJsb2NrVG91Y2hTdGFydFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJibG9jay1pbm5lci1pbm5lclwiIDpzdHlsZT1cIntiYWNrZ3JvdW5kQ29sb3I6YmxvY2tDb2xvcn1cIj5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdHtcclxuXHRcdHByb3BzOntcclxuXHRcdFx0bWluOntcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjBcclxuXHRcdFx0fSxcclxuXHRcdFx0bWF4OntcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjBcclxuXHRcdFx0fSxcclxuXHRcdFx0dmFsdWU6e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR3aWR0aDp7XHJcblx0XHRcdFx0dHlwZTpOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDowXHJcblx0XHRcdH0sXHJcblx0XHRcdHJhdGlvOntcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjFcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGlyZWN0aW9uOntcclxuXHRcdFx0XHR0eXBlOlN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OidzY3JlZW5YJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6eyAvL+a7keWdl+WPs+S+p+iDjOaZr+adoeeahOminOiJslxyXG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6JyNlOWU5ZTknXHJcblx0XHRcdH0sXHJcblx0XHRcdGJsb2NrQ29sb3I6eyAvL+a7keWdl+minOiJslxyXG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6JyNmZmZmZmYnXHJcblx0XHRcdH0sXHJcblx0XHRcdHNjcmVlbkxlZnQ6eyAvL3NsaWRlcui3neemu+W3pui+uei3neemu1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpb3NEaXJlY3Rpb246e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpe1xyXG5cdFx0XHRyZXR1cm57XHJcblx0XHRcdFx0b2xkVG91Y2VzWDowLFxyXG5cdFx0XHRcdGxlZnRXaWR0aDowLFxyXG5cdFx0XHRcdG9sZExlZnRXaWR0aDowLFxyXG5cdFx0XHRcdHRvdWNoOmZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczp7XHJcblx0XHRcdHNsaWRlclRvdWNoKGUpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpXHJcblx0XHRcdFx0bGV0IHRvdWNoZXMgPSBlLmNoYW5nZWRUb3VjaGVzWzBdXHJcblx0XHRcdFx0dGhpcy5sZWZ0V2lkdGggPSAodG91Y2hlc1t0aGlzLmRpcmVjdGlvbl18fHRvdWNoZXNbJ2NsaWVudFgnXSkqdGhpcy5yYXRpby10aGlzLnNjcmVlbkxlZnRcclxuXHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IHRoaXMubGVmdFdpZHRoID4gdGhpcy5jdXJyZW50V2lkdGg/IHRoaXMuY3VycmVudFdpZHRoIDogdGhpcy5sZWZ0V2lkdGhcclxuXHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IHRoaXMubGVmdFdpZHRoIDwgMD8gMCA6IHRoaXMubGVmdFdpZHRoXHJcblx0XHRcdFx0dGhpcy5ibG9ja1RvdWNoRW5kKClcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6Kem5pG45byA5aeLXHJcblx0XHRcdGJsb2NrVG91Y2hTdGFydChlKSB7XHJcblx0XHRcdFx0dGhpcy50b3VjaCA9IHRydWVcclxuXHRcdFx0XHR0aGlzLm9sZExlZnRXaWR0aCA9IHRoaXMubGVmdFdpZHRoXHJcblx0XHRcdFx0dGhpcy5vbGRUb3VjZXNYID0gZS5jaGFuZ2VkVG91Y2hlc1swXVt0aGlzLmRpcmVjdGlvbl18fGUuY2hhbmdlZFRvdWNoZXNbMF1bJ2NsaWVudFgnXTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6K6h566X5pa55ZCRXHJcblx0XHRcdGJsb2NrVG91Y2hNb3ZlKGUpIHtcclxuXHRcdFx0XHRsZXQgbmV3VG91Y2VzWFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdG5ld1RvdWNlc1g9IGUuY2hhbmdlZFRvdWNoZXNbMF1bdGhpcy5kaXJlY3Rpb25dfHxlLmNoYW5nZWRUb3VjaGVzWzBdWydjbGllbnRYJ107XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5sZWZ0V2lkdGggPSB0aGlzLmlvc0RpcmVjdGlvbioobmV3VG91Y2VzWCAtIHRoaXMub2xkVG91Y2VzWCkqdGhpcy5yYXRpbysgdGhpcy5vbGRMZWZ0V2lkdGhcclxuXHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IHRoaXMubGVmdFdpZHRoID4gdGhpcy5jdXJyZW50V2lkdGg/IHRoaXMuY3VycmVudFdpZHRoIDogdGhpcy5sZWZ0V2lkdGhcclxuXHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IHRoaXMubGVmdFdpZHRoIDwgMD8gMCA6IHRoaXMubGVmdFdpZHRoXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOe7k+adn+inpuaRuFxyXG5cdFx0XHRibG9ja1RvdWNoRW5kKGUpIHtcclxuXHRcdFx0XHRsZXQgY3VycmVudCA9IHRoaXMubGVmdFdpZHRoIC8gdGhpcy5jdXJyZW50V2lkdGggKnRoaXMubWF4XHJcblx0XHRcdFx0Y29uc3QgZXZlbnQgPSB7ZGV0YWlsOnt2YWx1ZTpjdXJyZW50fX1cclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLGV2ZW50KVxyXG5cdFx0XHRcdHRoaXMudG91Y2ggPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2xvclJnYihzdHJpbmcsb3BhY2l0eSl7XHJcblx0XHRcdFx0dmFyIHJlZyA9IC9eIyhbMC05YS1mQS1mXXszfXxbMC05YS1mQS1mXXs2fSkkLztcclxuXHRcdFx0XHR2YXIgc0NvbG9yID0gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdFx0aWYoc0NvbG9yICYmIHJlZy50ZXN0KHNDb2xvcikpe1xyXG5cdFx0XHRcdCAgICBpZihzQ29sb3IubGVuZ3RoID09PSA0KXtcclxuXHRcdFx0XHQgICAgICAgIHZhciBzQ29sb3JOZXcgPSBcIiNcIjtcclxuXHRcdFx0XHQgICAgICAgIGZvcih2YXIgaT0xOyBpPDQ7IGkrPTEpe1xyXG5cdFx0XHRcdCAgICAgICAgICAgIHNDb2xvck5ldyArPSBzQ29sb3Iuc2xpY2UoaSxpKzEpLmNvbmNhdChzQ29sb3Iuc2xpY2UoaSxpKzEpKTsgICBcclxuXHRcdFx0XHQgICAgICAgIH1cclxuXHRcdFx0XHQgICAgICAgIHNDb2xvciA9IHNDb2xvck5ldztcclxuXHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdCAgICAvL+WkhOeQhuWFreS9jeeahOminOiJsuWAvFxyXG5cdFx0XHRcdCAgICB2YXIgc0NvbG9yQ2hhbmdlID0gW107XHJcblx0XHRcdFx0ICAgIGZvcih2YXIgaT0xOyBpPDc7IGkrPTIpe1xyXG5cdFx0XHRcdCAgICAgICAgc0NvbG9yQ2hhbmdlLnB1c2gocGFyc2VJbnQoXCIweFwiK3NDb2xvci5zbGljZShpLGkrMikpKTsgIFxyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0ICAgIHJldHVybiBcInJnYmEoXCIgKyBzQ29sb3JDaGFuZ2Uuam9pbihcIixcIikgK2AsJHtvcGFjaXR5fWArXCIpXCI7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0ICAgIHJldHVybiBzQ29sb3I7ICBcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDp7XHJcblx0XHRcdGJsb2NrT3V0ZXJDb2xvcigpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbG9yUmdiKHRoaXMuYmxvY2tDb2xvciwwLjQpXHJcblx0XHRcdH0sXHJcblx0XHRcdGJsb2NrQmFja2dyb3VuZENvbG9yKCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29sb3JSZ2IodGhpcy5ibG9ja0NvbG9yLDAuNSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Y3VycmVudFdpZHRoKCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMud2lkdGggLSA0MFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6e1xyXG5cdFx0XHR2YWx1ZTp7XHJcblx0XHRcdFx0aW1tZWRpYXRlOnRydWUsXHJcblx0XHRcdFx0aGFuZGxlcihuZXdWYWwsb2xkVmFsKXtcclxuXHRcdFx0XHRcdGlmKHRoaXMudG91Y2gpIHJldHVyblxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IG5ld1ZhbC90aGlzLm1heCAqIHRoaXMuY3VycmVudFdpZHRoXHJcblx0XHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IHRoaXMubGVmdFdpZHRoID4gdGhpcy5jdXJyZW50V2lkdGg/IHRoaXMuY3VycmVudFdpZHRoIDogdGhpcy5sZWZ0V2lkdGhcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHQuZmxleHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdFxyXG5cdH1cclxuXHQuc2xpZGVye1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHQuc2xpZGVyLWxlZnR7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0LmxlZnR7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0aGVpZ2h0OiAzcHg7XHJcblx0fVxyXG5cdC5zbGlkZXItcmlnaHR7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0LnJpZ2h0e1xyXG5cdFx0aGVpZ2h0OiAzcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuXHQuYmxvY2t7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHR3aWR0aDogNDBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR6LWluZGV4OiA5OTk5OTk7XHJcblx0fVxyXG5cdC5ibG9jay1pbm5lcntcclxuXHRcdGhlaWdodDogMjBweDtcclxuXHRcdHdpZHRoOiAyMHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0LmJsb2NrLWlubmVyLWlubmVye1xyXG5cdFx0aGVpZ2h0OiAxMHB4O1xyXG5cdFx0d2lkdGg6IDEwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///135\n");

/***/ }),
/* 136 */
/*!*************************************************************************************************************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=style&index=0&id=5a6b26ee&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_5a6b26ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-slider.nvue?vue&type=style&index=0&id=5a6b26ee&lang=scss&scoped=true& */ 137);
/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_5a6b26ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_5a6b26ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_5a6b26ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_5a6b26ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_5a6b26ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 137 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=style&index=0&id=5a6b26ee&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "slider": {
    "position": "relative",
    "flexDirection": "row",
    "height": "40",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "slider-left": {
    "height": "40",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "left": {
    "flex": 1,
    "height": "3"
  },
  "slider-right": {
    "height": "40",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "right": {
    "height": "3",
    "backgroundColor": "rgba(0,0,0,0.3)",
    "flex": 1
  },
  "block": {
    "position": "absolute",
    "height": "40",
    "width": "40",
    "borderRadius": "20",
    "justifyContent": "center",
    "alignItems": "center",
    "zIndex": 999999
  },
  "block-inner": {
    "height": "20",
    "width": "20",
    "borderRadius": "10",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "block-inner-inner": {
    "height": "10",
    "width": "10",
    "borderRadius": "5"
  },
  "@VERSION": 2
}

/***/ }),
/* 138 */
/*!*************************************************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chunLei_danmu_nvue_vue_type_template_id_1d0230cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=template&id=1d0230cb& */ 139);\n/* harmony import */ var _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=script&lang=js& */ 141);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 21);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=style&index=0&lang=css& */ 146).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=style&index=0&lang=css& */ 146).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chunLei_danmu_nvue_vue_type_template_id_1d0230cb___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chunLei_danmu_nvue_vue_type_template_id_1d0230cb___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"3e7fe40a\",\n  false,\n  _chunLei_danmu_nvue_vue_type_template_id_1d0230cb___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGdFQUF1RDtBQUMzRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsZ0VBQXVEO0FBQ2hIOztBQUVBOztBQUVBO0FBQzJNO0FBQzNNLGdCQUFnQiw0TUFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMzguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NodW5MZWktZGFubXUubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZDAyMzBjYiZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NodW5MZWktZGFubXUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2h1bkxlaS1kYW5tdS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vY2h1bkxlaS1kYW5tdS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2NodW5MZWktZGFubXUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyF5aSn5YWoL0hCdWlsZGVyWC4zLjUuMi4yMDIyMDcxOS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiM2U3ZmU0MGFcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5MZWktZGFubXUvY2h1bkxlaS1kYW5tdS5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///138\n");

/***/ }),
/* 139 */
/*!********************************************************************************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=template&id=1d0230cb& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_1d0230cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-danmu.nvue?vue&type=template&id=1d0230cb& */ 140);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_1d0230cb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_1d0230cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_1d0230cb___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_1d0230cb___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 140 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=template&id=1d0230cb& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: ["danmu"], style: { width: _vm.width + "px" } },
    [
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList1, function (item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id },
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar },
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" },
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [_vm._v(_vm._s(item.text))]
              ),
            ],
            1
          )
        }),
        0
      ),
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList2, function (item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id },
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar },
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" },
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [_vm._v(_vm._s(item.text))]
              ),
            ],
            1
          )
        }),
        0
      ),
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList3, function (item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id },
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar },
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" },
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [_vm._v(_vm._s(item.text))]
              ),
            ],
            1
          )
        }),
        0
      ),
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList4, function (item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id },
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar },
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" },
                  appendAsTree: true,
                  attrs: { append: "tree" },
                },
                [_vm._v(_vm._s(item.text))]
              ),
            ],
            1
          )
        }),
        0
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 141 */
/*!**************************************************************************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-danmu.nvue?vue&type=script&lang=js& */ 142);\n/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFpQixDQUFnQiwraUJBQUcsRUFBQyIsImZpbGUiOiIxNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+WuieijheWMheWkp+WFqC9IQnVpbGRlclguMy41LjIuMjAyMjA3MTktYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyF5aSn5YWoL0hCdWlsZGVyWC4zLjUuMi4yMDIyMDcxOS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uL+WuieijheWMheWkp+WFqC9IQnVpbGRlclguMy41LjIuMjAyMjA3MTktYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2h1bkxlaS1kYW5tdS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+WuieijheWMheWkp+WFqC9IQnVpbGRlclguMy41LjIuMjAyMjA3MTktYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4v5a6J6KOF5YyF5aSn5YWoL0hCdWlsZGVyWC4zLjUuMi4yMDIyMDcxOS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uL+WuieijheWMheWkp+WFqC9IQnVpbGRlclguMy41LjIuMjAyMjA3MTktYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2h1bkxlaS1kYW5tdS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///141\n");

/***/ }),
/* 142 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 16);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 143));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 145));\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar animation = weex.requireModule('animation');\nvar modal = weex.requireModule('modal');\nvar _default2 = {\n  props: {\n    width: {\n      type: Number,\n      default: 0\n    },\n    danmuList: {\n      //弹幕\n      type: [Array],\n      default: function _default() {\n        return [];\n      }\n    },\n    platform: {\n      type: String,\n      default: 'android'\n    },\n    current: {\n      type: Number,\n      default: 0\n    }\n  },\n  data: function data() {\n    return {\n      danmuList1: [],\n      danmuList2: [],\n      danmuList3: [],\n      danmuList4: []\n    };\n  },\n  methods: {\n    promise: function promise() {\n      var promise = new Promise(function (resolve, reject) {\n        setTimeout(function () {\n          resolve();\n        }, 100);\n      });\n      return promise;\n    },\n    cleanDanmu: function cleanDanmu() {\n      this.danmuList1 = [];\n      this.danmuList2 = [];\n      this.danmuList3 = [];\n      this.danmuList4 = [];\n    },\n    randomRange: function randomRange(min, max) {\n      // min最小值，max最大值\n      return Math.floor(Math.random() * (max - min)) + min;\n    },\n    animationText: function animationText(id, distance, fn) {\n      var el;\n      var elList = this.$refs.move;\n      var _iterator = _createForOfIteratorHelper(elList),\n        _step;\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var item = _step.value;\n          if (item.attr.id == id) {\n            el = item;\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n      animation.transition(el, {\n        styles: {\n          transform: \"translate( \".concat(distance, \"px, 0px)\")\n        },\n        duration: 20000,\n        //ms\n        timingFunction: 'ease',\n        delay: 0 //ms\n      }, function () {\n        fn();\n      });\n    }\n  },\n  watch: {\n    danmuList: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n        for (var key in newVal) {\n          newVal[key]._id = key;\n        }\n      }\n    },\n    current: {\n      handler: function () {\n        var _handler = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(newVal, oldVal) {\n          var _this = this;\n          var _iterator2, _step2, _loop;\n          return _regenerator.default.wrap(function _callee$(_context2) {\n            while (1) {\n              switch (_context2.prev = _context2.next) {\n                case 0:\n                  if (!(Math.abs(newVal - oldVal) >= 0.24)) {\n                    _context2.next = 17;\n                    break;\n                  }\n                  _iterator2 = _createForOfIteratorHelper(this.danmuList);\n                  _context2.prev = 2;\n                  _loop = /*#__PURE__*/_regenerator.default.mark(function _loop() {\n                    var item, num;\n                    return _regenerator.default.wrap(function _loop$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            item = _step2.value;\n                            if (!(item.time > Math.floor(newVal * 1) && item.time <= Math.floor(newVal * 1 + 0.25))) {\n                              _context.next = 7;\n                              break;\n                            }\n                            num = _this.randomRange(1, 5);\n                            _this[\"danmuList\".concat(num)].push(item);\n                            _context.next = 6;\n                            return _this.promise();\n                          case 6:\n                            //开始动画\n                            _this.animationText(item._id, -_this.width * 2, function () {\n                              var index;\n                              //删除动画后的text\n                              for (var key in _this[\"danmuList\".concat(num)]) {\n                                if (_this[\"danmuList\".concat(num)][key]._id == item._id) {\n                                  index = key;\n                                }\n                              }\n                              _this[\"danmuList\".concat(num)].splice(index, 1);\n                            });\n                          case 7:\n                          case \"end\":\n                            return _context.stop();\n                        }\n                      }\n                    }, _loop);\n                  });\n                  _iterator2.s();\n                case 5:\n                  if ((_step2 = _iterator2.n()).done) {\n                    _context2.next = 9;\n                    break;\n                  }\n                  return _context2.delegateYield(_loop(), \"t0\", 7);\n                case 7:\n                  _context2.next = 5;\n                  break;\n                case 9:\n                  _context2.next = 14;\n                  break;\n                case 11:\n                  _context2.prev = 11;\n                  _context2.t1 = _context2[\"catch\"](2);\n                  _iterator2.e(_context2.t1);\n                case 14:\n                  _context2.prev = 14;\n                  _iterator2.f();\n                  return _context2.finish(14);\n                case 17:\n                case \"end\":\n                  return _context2.stop();\n              }\n            }\n          }, _callee, this, [[2, 11, 14, 17]]);\n        }));\n        function handler(_x, _x2) {\n          return _handler.apply(this, arguments);\n        }\n        return handler;\n      }()\n    }\n  }\n};\nexports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5MZWktZGFubXUvY2h1bkxlaS1kYW5tdS5udnVlIl0sIm5hbWVzIjpbInByb3BzIiwid2lkdGgiLCJ0eXBlIiwiZGVmYXVsdCIsImRhbm11TGlzdCIsInBsYXRmb3JtIiwiY3VycmVudCIsImRhdGEiLCJkYW5tdUxpc3QxIiwiZGFubXVMaXN0MiIsImRhbm11TGlzdDMiLCJkYW5tdUxpc3Q0IiwibWV0aG9kcyIsInByb21pc2UiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsImNsZWFuRGFubXUiLCJyYW5kb21SYW5nZSIsImFuaW1hdGlvblRleHQiLCJlbExpc3QiLCJlbCIsImFuaW1hdGlvbiIsInN0eWxlcyIsInRyYW5zZm9ybSIsImR1cmF0aW9uIiwidGltaW5nRnVuY3Rpb24iLCJkZWxheSIsImZuIiwid2F0Y2giLCJpbW1lZGlhdGUiLCJoYW5kbGVyIiwibmV3VmFsIiwiTWF0aCIsIml0ZW0iLCJudW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBO0FBQ0E7QUFBQSxnQkFDQTtFQUNBQTtJQUNBQztNQUNBQztNQUNBQztJQUNBO0lBQ0FDO01BQUE7TUFDQUY7TUFDQUM7UUFBQTtNQUFBO0lBQ0E7SUFDQUU7TUFDQUg7TUFDQUM7SUFDQTtJQUNBRztNQUNBSjtNQUNBQztJQUNBO0VBQ0E7RUFDQUk7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFDQTtRQUNBQztVQUNBQztRQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUFBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFBQSwyQ0FDQUM7UUFBQTtNQUFBO1FBQUE7VUFBQTtVQUNBO1lBQ0FDO1VBQ0E7UUFFQTtNQUFBO1FBQUE7TUFBQTtRQUFBO01BQUE7TUFDQUM7UUFDQUM7VUFDQUM7UUFDQTtRQUNBQztRQUFBO1FBQ0FDO1FBQ0FDO01BQ0E7UUFDQUM7TUFDQSxFQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBeEI7TUFDQXlCO01BQ0FDO1FBQ0E7VUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQXpCO01BQ0F3QjtRQUFBO1VBQUE7VUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtrQkFBQSxNQUdBRTtvQkFBQTtvQkFBQTtrQkFBQTtrQkFBQSx3Q0FDQTtrQkFBQTtrQkFBQTtvQkFBQTtvQkFBQTtzQkFBQTt3QkFBQTswQkFBQTs0QkFBQUM7NEJBQUEsTUFDQUE7OEJBQUE7OEJBQUE7NEJBQUE7NEJBQ0FDOzRCQUNBOzRCQUFBOzRCQUFBLE9BQ0E7MEJBQUE7NEJBRUE7NEJBQ0E7OEJBQ0E7OEJBQ0E7OEJBQ0E7Z0NBQ0E7a0NBQ0FDO2dDQUNBOzhCQUNBOzhCQUNBOzRCQUNBOzBCQUFBOzBCQUFBOzRCQUFBO3dCQUFBO3NCQUFBO29CQUFBO2tCQUFBO2tCQUFBO2dCQUFBO2tCQUFBO29CQUFBO29CQUFBO2tCQUFBO2tCQUFBO2dCQUFBO2tCQUFBO2tCQUFBO2dCQUFBO2tCQUFBO2tCQUFBO2dCQUFBO2tCQUFBO2tCQUFBO2tCQUFBO2dCQUFBO2tCQUFBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2tCQUFBO2NBQUE7WUFBQTtVQUFBO1FBQUEsQ0FLQTtRQUFBO1VBQUE7UUFBQTtRQUFBO01BQUE7SUFDQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiIxNDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cImRhbm11XCIgOnN0eWxlPVwieyB3aWR0aDogYCR7d2lkdGh9cHhgIH1cIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJkYW5tdS1yb3dcIiA6c3R5bGU9XCJ7IHdpZHRoOiBgJHt3aWR0aH1weGAgfVwiPlxyXG5cdFx0XHQ8ZGl2IDpzdHlsZT1cInsgbGVmdDpgJHt3aWR0aH1weGB9XCIgcmVmPVwibW92ZVwiIDppZD1cIml0ZW0uX2lkXCIgdi1mb3I9XCJpdGVtIGluIGRhbm11TGlzdDFcIiA6a2V5PVwiaXRlbS5faWRcIiBjbGFzcz1cIm1vdmVEaXZcIj5cclxuXHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0uYXZhdGFyXCIgY2xhc3M9XCJpbWdcIiB2LWlmPVwiaXRlbS5hdmF0YXJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS10aXRsZWBcIiA6c3R5bGU9XCJ7IGNvbG9yOml0ZW0uY29sb3I/aXRlbS5jb2xvcjonI2ZmZicgfVwiPnt7aXRlbS50ZXh0fX08L3RleHQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZGFubXUtcm93XCIgOnN0eWxlPVwieyB3aWR0aDogYCR7d2lkdGh9cHhgIH1cIj5cclxuXHRcdFx0PGRpdiA6c3R5bGU9XCJ7IGxlZnQ6YCR7d2lkdGh9cHhgfVwiIHJlZj1cIm1vdmVcIiA6aWQ9XCJpdGVtLl9pZFwiIHYtZm9yPVwiaXRlbSBpbiBkYW5tdUxpc3QyXCIgOmtleT1cIml0ZW0uX2lkXCIgY2xhc3M9XCJtb3ZlRGl2XCI+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmF2YXRhclwiIGNsYXNzPVwiaW1nXCIgdi1pZj1cIml0ZW0uYXZhdGFyXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJgJHtwbGF0Zm9ybX0tdGl0bGVgXCIgOnN0eWxlPVwieyBjb2xvcjppdGVtLmNvbG9yP2l0ZW0uY29sb3I6JyNmZmYnIH1cIj57e2l0ZW0udGV4dH19PC90ZXh0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImRhbm11LXJvd1wiIDpzdHlsZT1cInsgd2lkdGg6IGAke3dpZHRofXB4YCB9XCI+XHJcblx0XHRcdDxkaXYgOnN0eWxlPVwieyBsZWZ0OmAke3dpZHRofXB4YH1cIiByZWY9XCJtb3ZlXCIgOmlkPVwiaXRlbS5faWRcIiB2LWZvcj1cIml0ZW0gaW4gZGFubXVMaXN0M1wiIDprZXk9XCJpdGVtLl9pZFwiIGNsYXNzPVwibW92ZURpdlwiPlxyXG5cdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5hdmF0YXJcIiBjbGFzcz1cImltZ1wiIHYtaWY9XCJpdGVtLmF2YXRhclwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LXRpdGxlYFwiIDpzdHlsZT1cInsgY29sb3I6aXRlbS5jb2xvcj9pdGVtLmNvbG9yOicjZmZmJyB9XCI+e3tpdGVtLnRleHR9fTwvdGV4dD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJkYW5tdS1yb3dcIiA6c3R5bGU9XCJ7IHdpZHRoOiBgJHt3aWR0aH1weGAgfVwiPlxyXG5cdFx0XHQ8ZGl2IDpzdHlsZT1cInsgbGVmdDpgJHt3aWR0aH1weGB9XCIgcmVmPVwibW92ZVwiIDppZD1cIml0ZW0uX2lkXCIgdi1mb3I9XCJpdGVtIGluIGRhbm11TGlzdDRcIiA6a2V5PVwiaXRlbS5faWRcIiBjbGFzcz1cIm1vdmVEaXZcIj5cclxuXHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0uYXZhdGFyXCIgY2xhc3M9XCJpbWdcIiB2LWlmPVwiaXRlbS5hdmF0YXJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS10aXRsZWBcIiA6c3R5bGU9XCJ7IGNvbG9yOml0ZW0uY29sb3I/aXRlbS5jb2xvcjonI2ZmZicgfVwiPnt7aXRlbS50ZXh0fX08L3RleHQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGNvbnN0IGFuaW1hdGlvbiA9IHdlZXgucmVxdWlyZU1vZHVsZSgnYW5pbWF0aW9uJyk7XHJcblx0Y29uc3QgbW9kYWwgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ21vZGFsJyk7XHJcblx0ZXhwb3J0IGRlZmF1bHR7XHJcblx0XHRwcm9wczp7XHJcblx0XHRcdHdpZHRoOntcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjBcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGFubXVMaXN0OnsgLy/lvLnluZVcclxuXHRcdFx0XHR0eXBlOltBcnJheV0sXHJcblx0XHRcdFx0ZGVmYXVsdDooKT0+W11cclxuXHRcdFx0fSxcclxuXHRcdFx0cGxhdGZvcm06e1xyXG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6J2FuZHJvaWQnXHJcblx0XHRcdH0sXHJcblx0XHRcdGN1cnJlbnQ6e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpe1xyXG5cdFx0XHRyZXR1cm57XHJcblx0XHRcdFx0ZGFubXVMaXN0MTpbXSxcclxuXHRcdFx0XHRkYW5tdUxpc3QyOltdLFxyXG5cdFx0XHRcdGRhbm11TGlzdDM6W10sXHJcblx0XHRcdFx0ZGFubXVMaXN0NDpbXSxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRwcm9taXNlKCl7XHJcblx0XHRcdFx0bGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoKVxyXG5cdFx0XHRcdFx0fSwxMDApXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm4gcHJvbWlzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbGVhbkRhbm11KCl7XHJcblx0XHRcdFx0dGhpcy5kYW5tdUxpc3QxID0gW11cclxuXHRcdFx0XHR0aGlzLmRhbm11TGlzdDIgPSBbXVxyXG5cdFx0XHRcdHRoaXMuZGFubXVMaXN0MyA9IFtdXHJcblx0XHRcdFx0dGhpcy5kYW5tdUxpc3Q0ID0gW11cclxuXHRcdFx0fSxcclxuXHRcdFx0cmFuZG9tUmFuZ2UobWluLCBtYXgpIHsgLy8gbWlu5pyA5bCP5YC877yMbWF45pyA5aSn5YC8XHJcblx0XHRcdCAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhbmltYXRpb25UZXh0KGlkLGRpc3RhbmNlLGZuKXtcclxuXHRcdFx0XHRsZXQgZWxcclxuXHRcdFx0XHRsZXQgZWxMaXN0ID0gdGhpcy4kcmVmcy5tb3ZlXHJcblx0XHRcdFx0Zm9yIChsZXQgaXRlbSBvZiBlbExpc3QpIHtcclxuXHRcdFx0XHRcdGlmKGl0ZW0uYXR0ci5pZCA9PSBpZCl7XHJcblx0XHRcdFx0XHRcdGVsID0gaXRlbVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGFuaW1hdGlvbi50cmFuc2l0aW9uKGVsLCB7XHJcblx0XHRcdFx0XHRzdHlsZXM6IHtcclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBgdHJhbnNsYXRlKCAke2Rpc3RhbmNlfXB4LCAwcHgpYCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMDAsIC8vbXNcclxuXHRcdFx0XHRcdHRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXHJcblx0XHRcdFx0XHRkZWxheTogMCAvL21zXHJcblx0XHRcdFx0XHR9LCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGZuKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR3YXRjaDp7XHJcblx0XHRcdGRhbm11TGlzdDp7XHJcblx0XHRcdFx0aW1tZWRpYXRlOnRydWUsXHJcblx0XHRcdFx0aGFuZGxlcihuZXdWYWwsb2xkVmFsKXtcclxuXHRcdFx0XHRcdGZvciAobGV0IGtleSBpbiBuZXdWYWwpIHtcclxuXHRcdFx0XHRcdFx0bmV3VmFsW2tleV0uX2lkID0ga2V5XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjdXJyZW50OntcclxuXHRcdFx0XHRoYW5kbGVyOmFzeW5jIGZ1bmN0aW9uKG5ld1ZhbCxvbGRWYWwpe1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL+mXtOmalDAuMjVcclxuXHRcdFx0XHRcdGlmKE1hdGguYWJzKG5ld1ZhbC1vbGRWYWwpPj0wLjI0KXtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaXRlbSBvZiB0aGlzLmRhbm11TGlzdCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmKCBpdGVtLnRpbWUgPiBNYXRoLmZsb29yKG5ld1ZhbCoxKSAmJiBpdGVtLnRpbWUgPD0gTWF0aC5mbG9vcihuZXdWYWwqMSsgMC4yNSkgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgbnVtID0gdGhpcy5yYW5kb21SYW5nZSgxLDUpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzW2BkYW5tdUxpc3Qke251bX1gXS5wdXNoKGl0ZW0pXHJcblx0XHRcdFx0XHRcdFx0XHRhd2FpdCB0aGlzLnByb21pc2UoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHQvL+W8gOWni+WKqOeUu1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5hbmltYXRpb25UZXh0KGl0ZW0uX2lkLC10aGlzLndpZHRoKjIsKCk9PntcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGluZGV4XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8v5Yig6Zmk5Yqo55S75ZCO55qEdGV4dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBrZXkgaW4gdGhpc1tgZGFubXVMaXN0JHtudW19YF0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZih0aGlzW2BkYW5tdUxpc3Qke251bX1gXVtrZXldLl9pZD09aXRlbS5faWQpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5kZXggPSBrZXlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpc1tgZGFubXVMaXN0JHtudW19YF0uc3BsaWNlKGluZGV4LDEpXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi5kYW5tdXtcclxuXHRoZWlnaHQ6IDE2MHB4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHJcbn1cclxuLmRhbm11LXJvd3tcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHJcbn1cclxuLm1vdmVEaXZ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmFuZHJvaWQtdGl0bGV7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5pbWd7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLmlvcy10aXRsZXtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///142\n");

/***/ }),
/* 143 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 29);
// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ 144)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),
/* 144 */
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 29)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 145 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 146 */
/*!**********************************************************************************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-danmu.nvue?vue&type=style&index=0&lang=css& */ 147);
/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 147 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "danmu": {
    "height": "160",
    "flexDirection": "column"
  },
  "danmu-row": {
    "position": "relative",
    "height": "40",
    "flexDirection": "row"
  },
  "moveDiv": {
    "position": "absolute",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "android-title": {
    "fontSize": "24"
  },
  "img": {
    "width": "30",
    "height": "30",
    "marginLeft": "10",
    "borderRadius": "15"
  },
  "ios-title": {
    "fontSize": "24"
  },
  "@VERSION": 2
}

/***/ }),
/* 148 */
/*!********************************************************************************************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& */ 149);
/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 149 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/hbuilder-workspace/YzKitchen/components/chunlei-video/chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "video": {
    "width": "750rpx",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "img": {
    "position": "absolute",
    "width": "750rpx"
  },
  "icon-view": {
    "position": "absolute"
  },
  "top": {
    "position": "absolute",
    "top": 0,
    "backgroundImage": "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))",
    "width": "750rpx",
    "height": "300rpx"
  },
  "icon": {
    "opacity": 0.6,
    "fontSize": "42",
    "color": "#ffffff",
    "fontFamily": "texticons"
  },
  "bottom": {
    "position": "absolute",
    "bottom": 0,
    "backgroundImage": "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
    "width": "750rpx",
    "height": "300rpx"
  },
  "slider-view": {
    "position": "absolute",
    "left": 0,
    "bottom": "30",
    "width": "750rpx"
  },
  "progressBar": {
    "borderRadius": "2upx",
    "height": "4upx",
    "backgroundColor": "#FFFFFF",
    "zIndex": 999999,
    "position": "absolute",
    "left": 0,
    "bottom": "30"
  },
  "danmu-view": {
    "position": "absolute",
    "top": 0,
    "height": "160"
  },
  "rotate-img": {
    "width": "90rpx",
    "height": "90rpx",
    "position": "absolute",
    "bottom": "100rpx",
    "right": "20rpx",
    "borderRadius": "45rpx"
  },
  "@VERSION": 2
}

/***/ }),
/* 150 */
/*!***********************************************************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/pages/videoPage/video-page.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_page_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video-page.nvue?vue&type=script&lang=js&mpType=page */ 151);\n/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_page_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_page_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_page_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_page_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_page_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9pQixDQUFnQix1akJBQUcsRUFBQyIsImZpbGUiOiIxNTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL+WuieijheWMheWkp+WFqC9IQnVpbGRlclguMy41LjIuMjAyMjA3MTktYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4v5a6J6KOF5YyF5aSn5YWoL0hCdWlsZGVyWC4zLjUuMi4yMDIyMDcxOS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uL+WuieijheWMheWkp+WFqC9IQnVpbGRlclguMy41LjIuMjAyMjA3MTktYWxwaGEvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW8tcGFnZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4v5a6J6KOF5YyF5aSn5YWoL0hCdWlsZGVyWC4zLjUuMi4yMDIyMDcxOS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi/lronoo4XljIXlpKflhagvSEJ1aWxkZXJYLjMuNS4yLjIwMjIwNzE5LWFscGhhL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4v5a6J6KOF5YyF5aSn5YWoL0hCdWlsZGVyWC4zLjUuMi4yMDIyMDcxOS1hbHBoYS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlby1wYWdlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///150\n");

/***/ }),
/* 151 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/hbuilder-workspace/YzKitchen/pages/videoPage/video-page.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 16);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _chunleiVideo = _interopRequireDefault(__webpack_require__(/*! ../../components/chunlei-video/chunlei-video */ 126));\nvar _showCooking = _interopRequireDefault(__webpack_require__(/*! @/api/showCooking/showCooking.js */ 30));\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nvar _default = {\n  components: {\n    chunleiVideo: _chunleiVideo.default\n  },\n  data: function data() {\n    return {\n      maskShow: true,\n      sysheight: 0,\n      playCount: 2,\n      //剩余多少视频加载视频列表\n      videoList: [\n        // {\n        // \tid: 11,\n        // \tsrc:'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=164111&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss',\n        // \tcontent:'222',\n        // \tflag: true,\n        // \tcheck: false,\n        // \tlike:'7w',\n        // \tcomment:'1045',\n        // \tavater:'http://img.kaiyanapp.com/7af2bb1bc134fb1115d48f05e9d317f0.jpeg?imageMogr2/quality/60/format/jpg',\n        // \tinitialTime:0,\n        // \tat:'世界美食荟萃',\n        // \tduration:1162\n        // }\n      ],\n      height: '667px',\n      index: null,\n      width: '',\n      oldIndex: 0,\n      danmuList: [],\n      qParams: {\n        pageNum: null,\n        // 列表页加载的页数\n        videoIndex: null,\n        // 列表页点击的视频index\n        pageSize: null\n      },\n      queryParams: {\n        pageNum: 1,\n        pageSize: 10\n      },\n      videosTotal: null,\n      userInfo: uni.getStorageSync('userInfo_key')\n    };\n  },\n  created: function created() {\n    plus.screen.lockOrientation(\"portrait-primary\");\n    //隐藏subnvue\n    uni.getSubNVueById('comment').hide();\n    uni.getSubNVueById('input-box').hide();\n    this.sysheight = uni.getSystemInfoSync().windowHeight;\n    this.height = \"\".concat(this.sysheight, \"px\");\n    var width = uni.getSystemInfoSync().windowWidth;\n    this.width = \"\".concat(width, \"px\");\n    // this.videoList.length = 5\n    // this.videoList.fill({src:''})\n  },\n  mounted: function mounted() {\n    //设置id 通过id轮到相应位置\n    // let id = \"http://img.kaiyanapp.com/255365dbfc2622930eb0cdb33e43abf0.jpeg?imageMogr2/quality/60/format/jpg\"\n    // await this.pushVideoList()\n\n    // this.index = this.videoList.reduce((total,item)=>{\n    // \tif(id==''||id==item.id){\n    // \t\tid = ''\n    // \t}else{\n    // \t\ttotal++\n    // \t}\n    // \treturn total\n    // },0)\n    // if(!this.index){\n    // \tthis.$nextTick(()=>{\n    // \t\tthis.videoPlay(this.index)\n    // \t})\n    // }\n  },\n  onHide: function onHide() {\n    var _iterator = _createForOfIteratorHelper(this.videoList),\n      _step;\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var item = _step.value;\n        item.flag = false;\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  },\n  onLoad: function onLoad(option) {\n    this.userInfo = uni.getStorageSync('userInfo_key');\n    // this.index = 7;\n    this.qParams.pageNum = Number(option.pageNum);\n    this.qParams.pageSize = option.pageNum * option.pageSize;\n    // this.qParams.videoIndex = option.index;\n    this.index = Number(option.index);\n    this.queryParams.pageNum = Number(option.pageNum) + 1;\n    this.queryParams.pageSize = Number(option.pageSize);\n    // setTimeout(() => {\n    // \tthis.maskShow = false\n    // }, 1000);\n    if (option.type) {\n      // console.log(option.type)\n      switch (option.type) {\n        case '1':\n          this.initMyReleaseVideoList();\n          break;\n        case '2':\n          this.initMySupportVideoList();\n          break;\n        default:\n          this.initMyLikeVideoList();\n          break;\n      }\n    } else {\n      this.initVideoList();\n    }\n  },\n  methods: {\n    // 返回\n    back: function back() {\n      uni.navigateBack();\n    },\n    // 获取视频列表\n    initVideoList: function initVideoList() {\n      var _this = this;\n      var data = {\n        pageNum: 1,\n        pageSize: this.qParams.pageSize\n      };\n      _showCooking.default.listVideo(data).then(function (res) {\n        // this.list = this.list.concat(res.rows);\n        _this.videosTotal = res.total;\n        __f__(\"log\", res.rows, \" at pages/videoPage/video-page.nvue:231\");\n        var arr = [];\n        for (var i = 0; i < res.rows.length; i++) {\n          var obj = {};\n          obj.id = res.rows[i].id;\n          obj.userId = res.rows[i].userId;\n          obj.userName = res.rows[i].userName;\n          obj.userUrl = res.rows[i].userUrl;\n          obj.src = res.rows[i].videoUrl;\n          obj.content = res.rows[i].videoDescription;\n          if (i == _this.index) {\n            obj.flag = true;\n          } else {\n            obj.flag = false;\n          }\n          obj.avater = res.rows[i].userUrl || '/static/danxiaochu.png';\n          obj.like = res.rows[i].likeNum; // 收藏数量\n          obj.supportNum = res.rows[i].supportNum; // 点赞数量\n          obj.check = res.rows[i].meIsLike; // null：不是，'id'：是\n          obj.meIsSupport = res.rows[i].meIsSupport; // null：不是，'id'：是\n          obj.meIsFollow = res.rows[i].meIsFollow; // null：不是，'id'：是\n          obj.comment = res.rows[i].evaluationNum;\n          obj.initialTime = 0;\n          obj.at = res.rows[i].userName;\n          obj.duration = 1000;\n          // obj.poster = res.rows[i].videoCutImageUrl;\n          obj.poster = res.rows[i].videoCutImageUrl;\n\n          // obj.linkName = res.rows[i].linkName;  \n          // obj.linkUrl = res.rows[i].linkUrl;  \n          arr.push(obj);\n        }\n        _this.videoList = arr;\n        // this.$set(this.videoList[this.index], 'flag', true);\n      });\n    },\n    initMyReleaseVideoList: function initMyReleaseVideoList() {\n      var _this2 = this;\n      var data = {\n        pageNum: 1,\n        pageSize: this.qParams.pageSize\n      };\n      _showCooking.default.myReleaseVideoList(data).then(function (res) {\n        // this.list = this.list.concat(res.rows);\n        _this2.videosTotal = res.total;\n        // console.log(res.rows)\n        var arr = [];\n        for (var i = 0; i < res.rows.length; i++) {\n          var obj = {};\n          obj.id = res.rows[i].id;\n          obj.userId = res.rows[i].userId;\n          obj.userName = res.rows[i].userName;\n          obj.userUrl = res.rows[i].userUrl;\n          obj.src = res.rows[i].videoUrl;\n          obj.content = res.rows[i].videoDescription;\n          if (i == _this2.index) {\n            obj.flag = true;\n          } else {\n            obj.flag = false;\n          }\n          obj.avater = res.rows[i].userUrl || '/static/danxiaochu.png';\n          obj.like = res.rows[i].likeNum; // 收藏数量\n          obj.supportNum = res.rows[i].supportNum; // 点赞数量\n          obj.check = res.rows[i].meIsLike; // null：不是，'id'：是\n          obj.meIsSupport = res.rows[i].meIsSupport; // null：不是，'id'：是\n          obj.meIsFollow = res.rows[i].meIsFollow; // null：不是，'id'：是\n          obj.comment = res.rows[i].evaluationNum;\n          obj.initialTime = 0;\n          obj.at = res.rows[i].userName;\n          obj.duration = 1000;\n          // obj.poster = res.rows[i].videoCutImageUrl;\n          obj.poster = '';\n          // obj.linkName = res.rows[i].linkName;  \n          // obj.linkUrl = res.rows[i].linkUrl;  \n          arr.push(obj);\n        }\n        _this2.videoList = arr;\n      });\n    },\n    initMySupportVideoList: function initMySupportVideoList() {\n      var _this3 = this;\n      var data = {\n        pageNum: 1,\n        pageSize: this.qParams.pageSize\n      };\n      _showCooking.default.mySupportVideoList(data).then(function (res) {\n        // this.list = this.list.concat(res.rows);\n        _this3.videosTotal = res.total;\n        // console.log(res.rows)\n        var arr = [];\n        for (var i = 0; i < res.rows.length; i++) {\n          var obj = {};\n          obj.id = res.rows[i].id;\n          obj.userId = res.rows[i].userId;\n          obj.userName = res.rows[i].userName;\n          obj.userUrl = res.rows[i].userUrl;\n          obj.src = res.rows[i].videoUrl;\n          obj.content = res.rows[i].videoDescription;\n          if (i == _this3.index) {\n            obj.flag = true;\n          } else {\n            obj.flag = false;\n          }\n          obj.avater = res.rows[i].userUrl || '/static/danxiaochu.png';\n          obj.like = res.rows[i].likeNum; // 收藏数量\n          obj.supportNum = res.rows[i].supportNum; // 点赞数量\n          obj.check = res.rows[i].meIsLike; // null：不是，'id'：是\n          obj.meIsSupport = res.rows[i].meIsSupport; // null：不是，'id'：是\n          obj.meIsFollow = res.rows[i].meIsFollow; // null：不是，'id'：是\n          obj.comment = res.rows[i].evaluationNum;\n          obj.initialTime = 0;\n          obj.at = res.rows[i].userName;\n          obj.duration = 1000;\n          // obj.poster = res.rows[i].videoCutImageUrl;\n          obj.poster = '';\n          // obj.linkName = res.rows[i].linkName;  \n          // obj.linkUrl = res.rows[i].linkUrl;  \n          arr.push(obj);\n        }\n        _this3.videoList = arr;\n      });\n    },\n    initMyLikeVideoList: function initMyLikeVideoList() {\n      var _this4 = this;\n      var data = {\n        pageNum: 1,\n        pageSize: this.qParams.pageSize\n      };\n      _showCooking.default.myLikeVideoList(data).then(function (res) {\n        // this.list = this.list.concat(res.rows);\n        _this4.videosTotal = res.total;\n        // console.log(res.rows)\n        var arr = [];\n        for (var i = 0; i < res.rows.length; i++) {\n          var obj = {};\n          obj.id = res.rows[i].id;\n          obj.userId = res.rows[i].userId;\n          obj.userName = res.rows[i].userName;\n          obj.userUrl = res.rows[i].userUrl;\n          obj.src = res.rows[i].videoUrl;\n          obj.content = res.rows[i].videoDescription;\n          if (i == _this4.index) {\n            obj.flag = true;\n          } else {\n            obj.flag = false;\n          }\n          obj.avater = res.rows[i].userUrl || '/static/danxiaochu.png';\n          obj.like = res.rows[i].likeNum; // 收藏数量\n          obj.supportNum = res.rows[i].supportNum; // 点赞数量\n          obj.check = res.rows[i].meIsLike; // null：不是，'id'：是\n          obj.meIsSupport = res.rows[i].meIsSupport; // null：不是，'id'：是\n          obj.meIsFollow = res.rows[i].meIsFollow; // null：不是，'id'：是\n          obj.comment = res.rows[i].evaluationNum;\n          obj.initialTime = 0;\n          obj.at = res.rows[i].userName;\n          obj.duration = 1000;\n          // obj.poster = res.rows[i].videoCutImageUrl;\n          obj.poster = '';\n          // obj.linkName = res.rows[i].linkName;  \n          // obj.linkUrl = res.rows[i].linkUrl;  \n          arr.push(obj);\n        }\n        _this4.videoList = arr;\n      });\n    },\n    animationFinish: function animationFinish(e) {\n\n      // this.changeCurrent(e)\n    },\n    changeCurrent: function changeCurrent(e) {\n      var _this5 = this;\n      // console.log('e: ====================>')\n      // console.log(e.detail.current)\n      this.index = e.detail.current;\n      this.$nextTick(function () {\n        var _iterator2 = _createForOfIteratorHelper(_this5.videoList),\n          _step2;\n        try {\n          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n            var item = _step2.value;\n            item.flag = false;\n          }\n        } catch (err) {\n          _iterator2.e(err);\n        } finally {\n          _iterator2.f();\n        }\n        _this5.videoList[_this5.index].flag = true;\n      });\n    },\n    pushVideoList: function pushVideoList() {\n      var _this6 = this;\n      _showCooking.default.listVideo(this.queryParams).then(function (res) {\n        // this.list = this.list.concat(res.rows);\n        // this.listTotal = res.total;\n        // console.log(res.rows)\n        var arr = [];\n        for (var i = 0; i < res.rows.length; i++) {\n          var obj = {};\n          obj.id = res.rows[i].id;\n          obj.userId = res.rows[i].userId;\n          obj.userName = res.rows[i].userName;\n          obj.userUrl = res.rows[i].userUrl;\n          obj.src = res.rows[i].videoUrl;\n          obj.content = res.rows[i].videoDescription;\n          if (i == _this6.index) {\n            obj.flag = true;\n          } else {\n            obj.flag = false;\n          }\n          obj.check = res.rows[i].meIsLike;\n          obj.like = res.rows[i].likeNum;\n          obj.supportNum = res.rows[i].supportNum; // 点赞数量\n          obj.meIsSupport = res.rows[i].meIsSupport; // null：不是，'id'：是\n          obj.meIsFollow = res.rows[i].meIsFollow; // null：不是，'id'：是\n          obj.comment = res.rows[i].evaluationNum;\n          obj.avater = res.rows[i].userUrl || '/static/danxiaochu.png';\n          obj.initialTime = 0;\n          obj.at = res.rows[i].userName;\n          obj.duration = 1000;\n          // obj.poster = res.rows[i].videoCutImageUrl;\n          obj.poster = '';\n          // obj.linkName = res.rows[i].linkName;  \n          // obj.linkUrl = res.rows[i].linkUrl;  \n          arr.push(obj);\n        }\n        _this6.videoList = _this6.videoList.concat(arr);\n        _this6.queryParams.pageNum++;\n        // this.$set(this.videoList[this.index], 'flag', true);\n      });\n      // let promise = new Promise((resolve,reject)=>{\n      // \tuni.request({\n      // \t\turl: 'https://api.apiopen.top/videoRecommend?id=127397',\n      // \t\tsuccess: (res) => {\n      // \t\t\tlet videoGroup = []\n      // \t\t\tfor (let item of res.data.result) {\n      // \t\t\t\tif(item.type == 'videoSmallCard'){\n      // \t\t\t\t\tvideoGroup.push({\n      // \t\t\t\t\t\tsrc:item.data.playUrl,\n      // \t\t\t\t\t\tcontent:item.data.title,\n      // \t\t\t\t\t\tflag:false,\n      // \t\t\t\t\t\tcheck:false,\n      // \t\t\t\t\t\tlike:'7w',\n      // \t\t\t\t\t\tcomment:'1045',\n      // \t\t\t\t\t\tat:item.data.author.name,\n      // \t\t\t\t\t\tid:item.data.author.icon,\n      // \t\t\t\t\t\tavater:item.data.author.icon,\n      // \t\t\t\t\t\tinitialTime:0,\n      // \t\t\t\t\t\tduration:item.data.duration,\n      // \t\t\t\t\t\tid: 11\n      // \t\t\t\t\t})\n      // \t\t\t\t}\n      // \t\t\t}\n\n      // \t\t\tlet len = this.videoList.filter(item=>item.src).length\n      // \t\t\tfor(let i = len;i<len+videoGroup.length;i++){\n      // \t\t\t\tthis.$set(this.videoList,i,videoGroup[i-len])\n\n      // \t\t\t}\n      // \t\t\tresolve()\n      // \t\t}\n      // \t})\n      // }) \n      // return promise\n    },\n    pushMyReleaseVideoList: function pushMyReleaseVideoList() {\n      var _this7 = this;\n      _showCooking.default.myReleaseVideoList(this.queryParams).then(function (res) {\n        var arr = [];\n        for (var i = 0; i < res.rows.length; i++) {\n          var obj = {};\n          obj.id = res.rows[i].id;\n          obj.userId = res.rows[i].userId;\n          obj.userName = res.rows[i].userName;\n          obj.userUrl = res.rows[i].userUrl;\n          obj.src = res.rows[i].videoUrl;\n          obj.content = res.rows[i].videoDescription;\n          if (i == _this7.index) {\n            obj.flag = true;\n          } else {\n            obj.flag = false;\n          }\n          obj.check = res.rows[i].meIsLike;\n          obj.like = res.rows[i].likeNum;\n          obj.supportNum = res.rows[i].supportNum; // 点赞数量\n          obj.meIsSupport = res.rows[i].meIsSupport; // null：不是，'id'：是\n          obj.meIsFollow = res.rows[i].meIsFollow; // null：不是，'id'：是\n          obj.comment = res.rows[i].evaluationNum;\n          obj.avater = res.rows[i].userUrl || '/static/danxiaochu.png';\n          obj.initialTime = 0;\n          obj.at = res.rows[i].userName;\n          obj.duration = 1000;\n          // obj.poster = res.rows[i].videoCutImageUrl;\n          obj.poster = '';\n          // obj.linkName = res.rows[i].linkName;  \n          // obj.linkUrl = res.rows[i].linkUrl;  \n          arr.push(obj);\n        }\n        _this7.videoList = _this7.videoList.concat(arr);\n        _this7.queryParams.pageNum++;\n        // this.$set(this.videoList[this.index], 'flag', true);\n      });\n    },\n    pushMySupportVideoList: function pushMySupportVideoList() {\n      var _this8 = this;\n      _showCooking.default.mySupportVideoList(this.queryParams).then(function (res) {\n        var arr = [];\n        for (var i = 0; i < res.rows.length; i++) {\n          var obj = {};\n          obj.id = res.rows[i].id;\n          obj.userId = res.rows[i].userId;\n          obj.userName = res.rows[i].userName;\n          obj.userUrl = res.rows[i].userUrl;\n          obj.src = res.rows[i].videoUrl;\n          obj.content = res.rows[i].videoDescription;\n          if (i == _this8.index) {\n            obj.flag = true;\n          } else {\n            obj.flag = false;\n          }\n          obj.check = res.rows[i].meIsLike;\n          obj.like = res.rows[i].likeNum;\n          obj.supportNum = res.rows[i].supportNum; // 点赞数量\n          obj.meIsSupport = res.rows[i].meIsSupport; // null：不是，'id'：是\n          obj.meIsFollow = res.rows[i].meIsFollow; // null：不是，'id'：是\n          obj.comment = res.rows[i].evaluationNum;\n          obj.avater = res.rows[i].userUrl || '/static/danxiaochu.png';\n          obj.initialTime = 0;\n          obj.at = res.rows[i].userName;\n          obj.duration = 1000;\n          // obj.poster = res.rows[i].videoCutImageUrl;\n          obj.poster = '';\n          // obj.linkName = res.rows[i].linkName;  \n          // obj.linkUrl = res.rows[i].linkUrl;  \n          arr.push(obj);\n        }\n        _this8.videoList = _this8.videoList.concat(arr);\n        _this8.queryParams.pageNum++;\n        // this.$set(this.videoList[this.index], 'flag', true);\n      });\n    },\n    pushMyLikeVideoList: function pushMyLikeVideoList() {\n      var _this9 = this;\n      _showCooking.default.myLikeVideoList(this.queryParams).then(function (res) {\n        var arr = [];\n        for (var i = 0; i < res.rows.length; i++) {\n          var obj = {};\n          obj.id = res.rows[i].id;\n          obj.userId = res.rows[i].userId;\n          obj.userName = res.rows[i].userName;\n          obj.userUrl = res.rows[i].userUrl;\n          obj.src = res.rows[i].videoUrl;\n          obj.content = res.rows[i].videoDescription;\n          if (i == _this9.index) {\n            obj.flag = true;\n          } else {\n            obj.flag = false;\n          }\n          obj.check = res.rows[i].meIsLike;\n          obj.like = res.rows[i].likeNum;\n          obj.supportNum = res.rows[i].supportNum; // 点赞数量\n          obj.meIsSupport = res.rows[i].meIsSupport; // null：不是，'id'：是\n          obj.meIsFollow = res.rows[i].meIsFollow; // null：不是，'id'：是\n          obj.comment = res.rows[i].evaluationNum;\n          obj.avater = res.rows[i].userUrl || '/static/danxiaochu.png';\n          obj.initialTime = 0;\n          obj.at = res.rows[i].userName;\n          obj.duration = 1000;\n          // obj.poster = res.rows[i].videoCutImageUrl;\n          obj.poster = '';\n          // obj.linkName = res.rows[i].linkName;  \n          // obj.linkUrl = res.rows[i].linkUrl;  \n          arr.push(obj);\n        }\n        _this9.videoList = _this9.videoList.concat(arr);\n        _this9.queryParams.pageNum++;\n        // this.$set(this.videoList[this.index], 'flag', true);\n      });\n    },\n    // 点赞\n    tapSupport: function tapSupport(item) {\n      // console.log(meIsSupport)\n      if (item.meIsSupport) {\n        // 取消点赞\n        _showCooking.default.cancelSupport({\n          id: item.id\n        }).then(function (res) {\n          if (res.code == 200) {\n            // uni.showToast({\n            // \ttitle: res.msg,\n            // \ticon: 'none'\n            // });\n            item.meIsSupport = false;\n            item.supportNum--;\n            __f__(\"log\", res, \" at pages/videoPage/video-page.nvue:609\");\n          }\n        });\n      } else {\n        // 点赞\n        _showCooking.default.ShowCookingSupport({\n          showCookingId: item.id,\n          supportedUserId: item.userId\n        }).then(function (res) {\n          if (res.code == 200) {\n            item.meIsSupport = true;\n            item.supportNum++;\n          }\n        });\n      }\n    },\n    // 收藏\n    tapLove: function tapLove(item) {\n      // this.videoList[this.index].check = !this.videoList[this.index].check\n      // this.videoList = [...this.videoList]\n      if (item.check) {\n        // 取消收藏\n        _showCooking.default.cancelLike({\n          id: item.id\n        }).then(function (res) {\n          if (res.code == 200) {\n            item.check = false;\n            item.like--;\n          }\n        });\n      } else {\n        // 收藏\n        _showCooking.default.ShowCookingMyLike({\n          showCookingId: item.id,\n          supportedUserId: item.userId\n        }).then(function (res) {\n          if (res.code == 200) {\n            item.check = true;\n            item.like++;\n          }\n        });\n      }\n    },\n    // 关注\n    tapAvater: function tapAvater(item) {\n      var _this10 = this;\n      __f__(\"log\", item, \" at pages/videoPage/video-page.nvue:654\");\n      _showCooking.default.ShowCookingFollow({\n        followedId: item.userId,\n        followedName: item.userName,\n        followedAvatar: item.userUrl\n      }).then(function (res) {\n        __f__(\"log\", res, \" at pages/videoPage/video-page.nvue:660\");\n        if (res.code == 200) {\n          uni.showToast({\n            icon: 'success',\n            title: \"\\u5173\\u6CE8\\u6210\\u529F\"\n          });\n          _this10.$set(item, 'meIsFollow', true);\n          __f__(\"log\", _this10.videoList, \" at pages/videoPage/video-page.nvue:667\");\n        }\n      });\n    },\n    // 评论\n    tapMsg: function tapMsg(item) {\n      uni.getSubNVueById('comment').show('none', 0, function () {\n        uni.$emit('showComment', item.id);\n      });\n    },\n    tapShare: function tapShare() {\n      uni.showToast({\n        icon: 'none',\n        title: \"\\u5206\\u4EAB\\u7D22\\u5F15\\u4E3A\".concat(this.index, \"\\u7684\\u89C6\\u9891\")\n      });\n    },\n    videoPlay: function videoPlay(index) {\n      var _this11 = this;\n      var promise = new Promise(function (resolve, reject) {\n        resolve();\n      });\n      promise.then(function (res) {\n        _this11.$set(_this11.videoList[index], 'flag', !_this11.videoList[index].flag);\n      });\n    },\n    pauseVideo: function pauseVideo(val) {\n      // console.log(val)\n      if (this.oldIndex) {\n        // this.videoList[this.oldIndex].initialTime = 0;\n        // this.$set(this.videoList[this.oldIndex], 'initialTime', 0)\n      }\n\n      // if (typeof this.videoList[this.oldIndex].initialTime != 'undefined') this.videoList[this.oldIndex]\n      // \t.initialTime = val\n      // console.log(this.videoList)\n    },\n    clickVideo: function clickVideo() {\n      __f__(\"log\", 123, \" at pages/videoPage/video-page.nvue:712\");\n      this.videoList[this.index].flag = !this.videoList[this.index].flag;\n    }\n  },\n  watch: {\n    index: function index(newVal, oldVal) {\n      var _this12 = this;\n      // console.log(this.index)\n      this.$nextTick(function () {\n        if (_this12.videoList.length == _this12.videosTotal) return;\n        var len = _this12.videoList.filter(function (item) {\n          return item.src;\n        }).length;\n        // 加载视频\n        if (len - _this12.index - 1 <= _this12.playCount) {\n          _this12.pushVideoList();\n          // console.log('可以加载啦~')\n          // console.log(this.queryParams)\n        }\n\n        _this12.oldIndex = oldVal;\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 28)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdmlkZW9QYWdlL3ZpZGVvLXBhZ2UubnZ1ZSJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwiY2h1bmxlaVZpZGVvIiwiZGF0YSIsIm1hc2tTaG93Iiwic3lzaGVpZ2h0IiwicGxheUNvdW50IiwidmlkZW9MaXN0IiwiaGVpZ2h0IiwiaW5kZXgiLCJ3aWR0aCIsIm9sZEluZGV4IiwiZGFubXVMaXN0IiwicVBhcmFtcyIsInBhZ2VOdW0iLCJ2aWRlb0luZGV4IiwicGFnZVNpemUiLCJxdWVyeVBhcmFtcyIsInZpZGVvc1RvdGFsIiwidXNlckluZm8iLCJjcmVhdGVkIiwicGx1cyIsInVuaSIsIm1vdW50ZWQiLCJvbkhpZGUiLCJpdGVtIiwib25Mb2FkIiwibWV0aG9kcyIsImJhY2siLCJpbml0VmlkZW9MaXN0Iiwic2hvd0Nvb2tpbmciLCJvYmoiLCJhcnIiLCJpbml0TXlSZWxlYXNlVmlkZW9MaXN0IiwiaW5pdE15U3VwcG9ydFZpZGVvTGlzdCIsImluaXRNeUxpa2VWaWRlb0xpc3QiLCJhbmltYXRpb25GaW5pc2giLCJjaGFuZ2VDdXJyZW50IiwicHVzaFZpZGVvTGlzdCIsInB1c2hNeVJlbGVhc2VWaWRlb0xpc3QiLCJwdXNoTXlTdXBwb3J0VmlkZW9MaXN0IiwicHVzaE15TGlrZVZpZGVvTGlzdCIsInRhcFN1cHBvcnQiLCJpZCIsInNob3dDb29raW5nSWQiLCJzdXBwb3J0ZWRVc2VySWQiLCJ0YXBMb3ZlIiwidGFwQXZhdGVyIiwiZm9sbG93ZWRJZCIsImZvbGxvd2VkTmFtZSIsImZvbGxvd2VkQXZhdGFyIiwiaWNvbiIsInRpdGxlIiwidGFwTXNnIiwidGFwU2hhcmUiLCJ2aWRlb1BsYXkiLCJyZXNvbHZlIiwicHJvbWlzZSIsInBhdXNlVmlkZW8iLCJjbGlja1ZpZGVvIiwid2F0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFzR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQ0E7RUFDQUE7SUFDQUM7RUFDQTtFQUNBQztJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQUE7TUFDQUM7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUFBLENBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUMsYUFFQTtNQUNBQztRQUNBQztRQUFBO1FBQ0FDO1FBQUE7UUFDQUM7TUFDQTtNQUNBQztRQUNBSDtRQUNBRTtNQUNBO01BQ0FFO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUVBQztJQUNBO0lBQ0FDO0lBQ0FBO0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFBQSxDQUNBO0VBQ0FDO0lBQUEsMkNBQ0E7TUFBQTtJQUFBO01BQUE7UUFBQTtRQUNBQztNQUNBO0lBQUE7TUFBQTtJQUFBO01BQUE7SUFBQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO01BQ0E7TUFDQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO1VBQ0E7VUFDQTtNQUFBO0lBRUE7TUFDQTtJQUNBO0VBRUE7RUFDQUM7SUFDQTtJQUNBQztNQUNBTjtJQUNBO0lBQ0E7SUFDQU87TUFBQTtNQUNBO1FBQ0FmO1FBQ0FFO01BQ0E7TUFDQWM7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1VBQ0E7VUFDQUM7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQTtZQUNBQTtVQUNBO1lBQ0FBO1VBQ0E7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQTtVQUNBQTs7VUFFQTtVQUNBO1VBQ0FDO1FBQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUFBO01BQ0E7UUFDQW5CO1FBQ0FFO01BQ0E7TUFDQWM7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1VBQ0E7VUFDQUM7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQTtZQUNBQTtVQUNBO1lBQ0FBO1VBQ0E7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQTtVQUNBQTtVQUNBO1VBQ0E7VUFDQUM7UUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBRTtNQUFBO01BQ0E7UUFDQXBCO1FBQ0FFO01BQ0E7TUFDQWM7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1VBQ0E7VUFDQUM7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQTtZQUNBQTtVQUNBO1lBQ0FBO1VBQ0E7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQTtVQUNBQTtVQUNBO1VBQ0E7VUFDQUM7UUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBRztNQUFBO01BQ0E7UUFDQXJCO1FBQ0FFO01BQ0E7TUFDQWM7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1VBQ0E7VUFDQUM7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQTtZQUNBQTtVQUNBO1lBQ0FBO1VBQ0E7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQTtVQUNBQTtVQUNBO1VBQ0E7VUFDQUM7UUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBSTs7TUFFQTtJQUFBLENBRUE7SUFDQUM7TUFBQTtNQUNBO01BQ0E7TUFDQTtNQUNBO1FBQUEsNENBQ0E7VUFBQTtRQUFBO1VBQUE7WUFBQTtZQUNBWjtVQUNBO1FBQUE7VUFBQTtRQUFBO1VBQUE7UUFBQTtRQUNBO01BQ0E7SUFDQTtJQUNBYTtNQUFBO01BQ0FSO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtVQUNBO1VBQ0FDO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0E7WUFDQUE7VUFDQTtZQUNBQTtVQUNBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0E7VUFDQUE7VUFDQTtVQUNBO1VBQ0FDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7O01BRUE7TUFDQTtNQUNBOztNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FPO01BQUE7TUFDQVQ7UUFDQTtRQUNBO1VBQ0E7VUFDQUM7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQTtZQUNBQTtVQUNBO1lBQ0FBO1VBQ0E7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQUE7VUFDQTtVQUNBQTtVQUNBO1VBQ0E7VUFDQUM7UUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQVE7TUFBQTtNQUNBVjtRQUNBO1FBQ0E7VUFDQTtVQUNBQztVQUNBQTtVQUNBQTtVQUNBQTtVQUNBQTtVQUNBQTtVQUNBO1lBQ0FBO1VBQ0E7WUFDQUE7VUFDQTtVQUNBQTtVQUNBQTtVQUNBQTtVQUNBQTtVQUNBQTtVQUNBQTtVQUNBQTtVQUNBQTtVQUNBQTtVQUNBQTtVQUNBO1VBQ0FBO1VBQ0E7VUFDQTtVQUNBQztRQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBUztNQUFBO01BQ0FYO1FBQ0E7UUFDQTtVQUNBO1VBQ0FDO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0E7WUFDQUE7VUFDQTtZQUNBQTtVQUNBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0FBO1VBQ0E7VUFDQUE7VUFDQTtVQUNBO1VBQ0FDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQVU7TUFDQTtNQUNBO1FBQ0E7UUFDQVo7VUFDQWE7UUFDQTtVQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQWxCO1lBQ0FBO1lBQ0E7VUFDQTtRQUNBO01BQ0E7UUFDQTtRQUNBSztVQUNBYztVQUNBQztRQUNBO1VBQ0E7WUFDQXBCO1lBQ0FBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBcUI7TUFDQTtNQUNBO01BQ0E7UUFDQTtRQUNBaEI7VUFDQWE7UUFDQTtVQUNBO1lBQ0FsQjtZQUNBQTtVQUNBO1FBQ0E7TUFDQTtRQUNBO1FBQ0FLO1VBQ0FjO1VBQ0FDO1FBQ0E7VUFDQTtZQUNBcEI7WUFDQUE7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FzQjtNQUFBO01BQ0E7TUFDQWpCO1FBQ0FrQjtRQUNBQztRQUNBQztNQUNBO1FBQ0E7UUFDQTtVQUNBNUI7WUFDQTZCO1lBQ0FDO1VBQ0E7VUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFRQS9CO1FBQ0FBO01BQ0E7SUFFQTtJQUNBZ0M7TUFDQWhDO1FBQ0E2QjtRQUNBQztNQUNBO0lBQ0E7SUFDQUc7TUFBQTtNQUNBO1FBQ0FDO01BQ0E7TUFDQUM7UUFDQTtNQUVBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO1FBQ0E7UUFDQTtNQUFBOztNQUdBO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQW5EO01BQUE7TUFDQTtNQUNBO1FBQ0E7UUFDQTtVQUFBO1FBQUE7UUFDQTtRQUNBO1VBQ0E7VUFDQTtVQUNBO1FBQ0E7O1FBQ0E7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDJCIiwiZmlsZSI6IjE1MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwicGFnZVwiIDpzdHlsZT1cInsgaGVpZ2h0OiBoZWlnaHQgfVwiPlxyXG5cdFx0PHN3aXBlciA6c2tpcC1oaWRkZW4taXRlbS1sYXlvdXQ9XCJ0cnVlXCIgY2xhc3M9XCJzd2lwZXJcIiA6dmVydGljYWw9XCJ0cnVlXCIgOmFjY2VsZXJhdGlvbj1cInRydWVcIlxyXG5cdFx0XHRAY2hhbmdlPVwiY2hhbmdlQ3VycmVudFwiIEBhbmltYXRpb25maW5pc2g9XCJhbmltYXRpb25GaW5pc2hcIiA6Y3VycmVudD1cImluZGV4XCI+XHJcblx0XHRcdDxzd2lwZXItaXRlbSB2LWZvcj1cIihpdGVtLCBpZHgpIGluIHZpZGVvTGlzdFwiIDprZXk9XCJpZHhcIiBjbGFzcz1cInN3aXBlci1pdGVtXCIgc3R5bGU9XCJ6LWluZGV4OiA5OTk5OTk7XCI+XHJcblx0XHRcdFx0PCEtLSDop4bpopHmuLLmn5PmlbDpooTliqDovb3mlbDlvbHlk43mgKfog70gLS0+XHJcblx0XHRcdFx0PGRpdiB2LWlmPVwiTWF0aC5hYnMoaW5kZXgtaWR4KTw9MVwiIGNsYXNzPVwidmlkZW8tYm94XCI+XHJcblx0XHRcdFx0XHQ8YmxvY2sgdi1pZj1cIml0ZW0uc3JjXCI+XHJcblx0XHRcdFx0XHRcdDxjaHVubGVpLXZpZGVvIDppbmRleD1cImluZGV4XCIgOnBvc3Rlcj1cIml0ZW0ucG9zdGVyXCIgOmlkPVwiaXRlbS5pZFwiIHYtc2hvdz1cIiFtYXNrU2hvd1wiXHJcblx0XHRcdFx0XHRcdFx0OmRhbm11TGlzdD1cImRhbm11TGlzdFwiIGNsYXNzPVwidmlkZW9cIiA6c3JjPVwiaXRlbS5zcmNcIiA6aGVpZ2h0PVwiaGVpZ2h0XCIgOndpZHRoPVwid2lkdGhcIlxyXG5cdFx0XHRcdFx0XHRcdDpwbGF5PVwiaXRlbS5mbGFnXCIgdi1pZj1cIk1hdGguYWJzKGluZGV4LWlkeCk8PTFcIiA6Z0R1cmF0aW9uPVwiaXRlbS5kdXJhdGlvblwiIDppbml0aWFsVGltZT1cIjBcIlxyXG5cdFx0XHRcdFx0XHRcdEBwYXVzZT1cInBhdXNlVmlkZW9cIiA6b2JqZWN0Rml0PVwiaXRlbS5vYmplY3RGaXRcIiBAcGxheUVuZD1cInBsYXlFbmRcIj5cclxuXHRcdFx0XHRcdFx0PC9jaHVubGVpLXZpZGVvPlxyXG5cdFx0XHRcdFx0XHQ8Y292ZXItdmlldyBAY2xpY2s9XCJjbGlja1ZpZGVvKClcIlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPVwid2lkdGg6IDc1MHJweDsgaGVpZ2h0OiAyMDAwcnB4OyBiYWNrZ3JvdW5kOiAjREQ1MjREOyBwb3NpdGlvbjogYWJzb2x1dGU7IG9wYWNpdHk6IDAuMTtcIj5cclxuXHRcdFx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImNvdmVyLXZpZXctbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwibGVmdC12aWV3XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tICNpZmRlZiBBUFAtUExVUy1OVlVFIC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJsZWZ0LXRleHRcIj5Ae3tpdGVtLmF0fX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gI2lmbmRlZiBBUFAtUExVUy1OVlVFIC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJsZWZ0LXRleHRcIj5Ae3tpdGVtLmF0fX08L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJsZWZ0LXZpZXdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gI2lmZGVmIEFQUC1QTFVTLU5WVUUgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxlZnQtdGV4dFwiPnt7aXRlbS5jb250ZW50fX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gI2lmbmRlZiBBUFAtUExVUy1OVlVFIC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJsZWZ0LXRleHRcIj57e2l0ZW0uY29udGVudH19PC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdFx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItdmlldy1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxjb3Zlci1pbWFnZSA6c3JjPVwiaXRlbS5hdmF0ZXJcIiBjbGFzcz1cImF2YXRlclwiIEBjbGljay5zdG9wPVwiXCI+PC9jb3Zlci1pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tICNpZmRlZiBBUFAtUExVUy1OVlVFIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IHYtaWY9XCIoaXRlbS51c2VySWQgIT0gdXNlckluZm8udXNlcklkKSAmJiAhaXRlbS5tZUlzRm9sbG93XCIgY2xhc3M9XCJyaWdodC10ZXh0LWF2YXRlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRAY2xpY2suc3RvcD1cInRhcEF2YXRlcihpdGVtKVwiPis8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJyaWdodC10ZXh0XCI+PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gI2lmbmRlZiBBUFAtUExVUy1OVlVFIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwicmlnaHQtdGV4dC1hdmF0ZXJcIj4rPC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwicmlnaHQtdGV4dFwiPjwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGNvdmVyLWltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHQ6c3JjPVwiaXRlbS5tZUlzU3VwcG9ydD8nLi4vLi4vc3RhdGljL2Jhc2tDb29raW5nL3hxX2RpYW56YWlhLnBuZyc6Jy4uLy4uL3N0YXRpYy9iYXNrQ29va2luZy94cV9kaWFuemFpLnBuZydcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJpbWdcIiBAY2xpY2suc3RvcD1cInRhcFN1cHBvcnQoaXRlbSlcIj48L2NvdmVyLWltYWdlPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tICNpZmRlZiBBUFAtUExVUy1OVlVFIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicmlnaHQtdGV4dFwiPnt7aXRlbS5zdXBwb3J0TnVtfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgLS0+XHJcblx0XHRcdFx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJyaWdodC10ZXh0XCI+e3tpdGVtLnN1cHBvcnROdW19fTwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGNvdmVyLWltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHQ6c3JjPVwiaXRlbS5jaGVjaz8nLi4vLi4vc3RhdGljL2Jhc2tDb29raW5nL3hxX3N0YXJhLnBuZyc6Jy4uLy4uL3N0YXRpYy9iYXNrQ29va2luZy94cV9zdGFyLnBuZydcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJpbWdcIiBAY2xpY2suc3RvcD1cInRhcExvdmUoaXRlbSlcIj48L2NvdmVyLWltYWdlPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tICNpZmRlZiBBUFAtUExVUy1OVlVFIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicmlnaHQtdGV4dFwiPnt7aXRlbS5saWtlfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgLS0+XHJcblx0XHRcdFx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJyaWdodC10ZXh0XCI+e3tpdGVtLmxpa2V9fTwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGNvdmVyLWltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9iYXNrQ29va2luZy94cV9pbmZvLnBuZ1wiIGNsYXNzPVwiaW1nXCJcclxuXHRcdFx0XHRcdFx0XHRcdEBjbGljay5zdG9wPVwidGFwTXNnKGl0ZW0pXCI+PC9jb3Zlci1pbWFnZT5cclxuXHJcblx0XHRcdFx0XHRcdFx0PCEtLSAjaWZkZWYgQVBQLVBMVVMtTlZVRSAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInJpZ2h0LXRleHRcIj57e2l0ZW0uY29tbWVudH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gI2lmbmRlZiBBUFAtUExVUy1OVlVFIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwicmlnaHQtdGV4dFwiPnt7aXRlbS5jb21tZW50fX08L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPGNvdmVyLWltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9iYXNrQ29va2luZy94cV9leHBvcnQucG5nXCIgY2xhc3M9XCJpbWdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0QGNsaWNrLnN0b3A9XCJ0YXBTaGFyZVwiPjwvY292ZXItaW1hZ2U+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gI2lmZGVmIEFQUC1QTFVTLU5WVUUgLS0+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSA8dGV4dCBjbGFzcz1cInJpZ2h0LXRleHRcIj7liIbkuqs8L3RleHQ+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gI2lmbmRlZiBBUFAtUExVUy1OVlVFIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPGNvdmVyLXZpZXcgY2xhc3M9XCJyaWdodC10ZXh0XCI+5YiG5LqrPC9jb3Zlci12aWV3PiAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHJcblx0XHRcdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdFx0PCEtLSA8Y292ZXItdmlldyBzdHlsZT1cIndpZHRoOiAxMDB2dzsgaGVpZ2h0OiAxMDB2aDsgYmFja2dyb3VuZDogIzAwMDsgcG9zaXRpb246IGFic29sdXRlOyBvcGFjaXR5OiAwLjE7XCI+PC9jb3Zlci12aWV3PiAtLT5cclxuXHRcdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdFx0XHQ8IS0tIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvYmFza0Nvb2tpbmcvbG9nby5wbmdcIiA6c3R5bGU9XCJ7IGhlaWdodDogaGVpZ2h0IH1cIiB2LWVsc2UgIGNsYXNzPVwidmlkZW8tYm94XCI+PC9pbWFnZT4gLS0+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc3dpcGVyLWl0ZW0+XHJcblx0XHQ8L3N3aXBlcj5cclxuXHRcdDxjb3Zlci12aWV3IHN0eWxlPVwid2lkdGg6IDEwMHJweDsgaGVpZ2h0OiAxMDBycHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiA4MHJweDsgbGVmdDogMDsgcGFkZGluZzogNDBycHg7XCJcclxuXHRcdFx0QGNsaWNrPVwiYmFjaygpXCI+XHJcblx0XHRcdDxjb3Zlci1pbWFnZSBzdHlsZT1cIndpZHRoOiAyOHJweDsgaGVpZ2h0OiA0NnJweDtcIiBzcmM9XCIvc3RhdGljL2Jhc2tDb29raW5nL3hxX2JhY2sucG5nXCIgQGNsaWNrLnN0b3A9XCJcIj5cclxuXHRcdFx0PC9jb3Zlci1pbWFnZT5cclxuXHRcdDwvY292ZXItdmlldz5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgY2h1bmxlaVZpZGVvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2h1bmxlaS12aWRlby9jaHVubGVpLXZpZGVvJ1xyXG5cdGltcG9ydCBzaG93Q29va2luZyBmcm9tICdAL2FwaS9zaG93Q29va2luZy9zaG93Q29va2luZy5qcyc7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRjaHVubGVpVmlkZW9cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdG1hc2tTaG93OiB0cnVlLFxyXG5cdFx0XHRcdHN5c2hlaWdodDogMCxcclxuXHRcdFx0XHRwbGF5Q291bnQ6IDIsIC8v5Ymp5L2Z5aSa5bCR6KeG6aKR5Yqg6L296KeG6aKR5YiX6KGoXHJcblx0XHRcdFx0dmlkZW9MaXN0OiBbXHJcblx0XHRcdFx0XHQvLyB7XHJcblx0XHRcdFx0XHQvLyBcdGlkOiAxMSxcclxuXHRcdFx0XHRcdC8vIFx0c3JjOidodHRwOi8vYmFvYmFiLmthaXlhbmFwcC5jb20vYXBpL3YxL3BsYXlVcmw/dmlkPTE2NDExMSZyZXNvdXJjZVR5cGU9dmlkZW8mZWRpdGlvblR5cGU9ZGVmYXVsdCZzb3VyY2U9YWxpeXVuJnBsYXlVcmxUeXBlPXVybF9vc3MnLFxyXG5cdFx0XHRcdFx0Ly8gXHRjb250ZW50OicyMjInLFxyXG5cdFx0XHRcdFx0Ly8gXHRmbGFnOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gXHRjaGVjazogZmFsc2UsXHJcblx0XHRcdFx0XHQvLyBcdGxpa2U6Jzd3JyxcclxuXHRcdFx0XHRcdC8vIFx0Y29tbWVudDonMTA0NScsXHJcblx0XHRcdFx0XHQvLyBcdGF2YXRlcjonaHR0cDovL2ltZy5rYWl5YW5hcHAuY29tLzdhZjJiYjFiYzEzNGZiMTExNWQ0OGYwNWU5ZDMxN2YwLmpwZWc/aW1hZ2VNb2dyMi9xdWFsaXR5LzYwL2Zvcm1hdC9qcGcnLFxyXG5cdFx0XHRcdFx0Ly8gXHRpbml0aWFsVGltZTowLFxyXG5cdFx0XHRcdFx0Ly8gXHRhdDon5LiW55WM576O6aOf6I2f6JCDJyxcclxuXHRcdFx0XHRcdC8vIFx0ZHVyYXRpb246MTE2MlxyXG5cdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0aGVpZ2h0OiAnNjY3cHgnLFxyXG5cdFx0XHRcdGluZGV4OiBudWxsLFxyXG5cdFx0XHRcdHdpZHRoOiAnJyxcclxuXHRcdFx0XHRvbGRJbmRleDogMCxcclxuXHRcdFx0XHRkYW5tdUxpc3Q6IFtcclxuXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRxUGFyYW1zOiB7XHJcblx0XHRcdFx0XHRwYWdlTnVtOiBudWxsLCAvLyDliJfooajpobXliqDovb3nmoTpobXmlbBcclxuXHRcdFx0XHRcdHZpZGVvSW5kZXg6IG51bGwsIC8vIOWIl+ihqOmhteeCueWHu+eahOinhumikWluZGV4XHJcblx0XHRcdFx0XHRwYWdlU2l6ZTogbnVsbFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cXVlcnlQYXJhbXM6IHtcclxuXHRcdFx0XHRcdHBhZ2VOdW06IDEsXHJcblx0XHRcdFx0XHRwYWdlU2l6ZTogMTAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR2aWRlb3NUb3RhbDogbnVsbCxcclxuXHRcdFx0XHR1c2VySW5mbzogdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mb19rZXknKVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0Ly8jaWZkZWYgQVBQLVBMVVNcclxuXHRcdFx0cGx1cy5zY3JlZW4ubG9ja09yaWVudGF0aW9uKFwicG9ydHJhaXQtcHJpbWFyeVwiKVxyXG5cdFx0XHQvL+makOiXj3N1Ym52dWVcclxuXHRcdFx0dW5pLmdldFN1Yk5WdWVCeUlkKCdjb21tZW50JykuaGlkZSgpXHJcblx0XHRcdHVuaS5nZXRTdWJOVnVlQnlJZCgnaW5wdXQtYm94JykuaGlkZSgpXHJcblx0XHRcdC8vI2VuZGlmXHJcblx0XHRcdHRoaXMuc3lzaGVpZ2h0ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0XHJcblx0XHRcdHRoaXMuaGVpZ2h0ID0gYCR7dGhpcy5zeXNoZWlnaHR9cHhgXHJcblx0XHRcdGxldCB3aWR0aCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoXHJcblx0XHRcdHRoaXMud2lkdGggPSBgJHt3aWR0aH1weGBcclxuXHRcdFx0Ly8gdGhpcy52aWRlb0xpc3QubGVuZ3RoID0gNVxyXG5cdFx0XHQvLyB0aGlzLnZpZGVvTGlzdC5maWxsKHtzcmM6Jyd9KVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdC8v6K6+572uaWQg6YCa6L+HaWTova7liLDnm7jlupTkvY3nva5cclxuXHRcdFx0Ly8gbGV0IGlkID0gXCJodHRwOi8vaW1nLmthaXlhbmFwcC5jb20vMjU1MzY1ZGJmYzI2MjI5MzBlYjBjZGIzM2U0M2FiZjAuanBlZz9pbWFnZU1vZ3IyL3F1YWxpdHkvNjAvZm9ybWF0L2pwZ1wiXHJcblx0XHRcdC8vIGF3YWl0IHRoaXMucHVzaFZpZGVvTGlzdCgpXHJcblxyXG5cdFx0XHQvLyB0aGlzLmluZGV4ID0gdGhpcy52aWRlb0xpc3QucmVkdWNlKCh0b3RhbCxpdGVtKT0+e1xyXG5cdFx0XHQvLyBcdGlmKGlkPT0nJ3x8aWQ9PWl0ZW0uaWQpe1xyXG5cdFx0XHQvLyBcdFx0aWQgPSAnJ1xyXG5cdFx0XHQvLyBcdH1lbHNle1xyXG5cdFx0XHQvLyBcdFx0dG90YWwrK1xyXG5cdFx0XHQvLyBcdH1cclxuXHRcdFx0Ly8gXHRyZXR1cm4gdG90YWxcclxuXHRcdFx0Ly8gfSwwKVxyXG5cdFx0XHQvLyBpZighdGhpcy5pbmRleCl7XHJcblx0XHRcdC8vIFx0dGhpcy4kbmV4dFRpY2soKCk9PntcclxuXHRcdFx0Ly8gXHRcdHRoaXMudmlkZW9QbGF5KHRoaXMuaW5kZXgpXHJcblx0XHRcdC8vIFx0fSlcclxuXHRcdFx0Ly8gfVxyXG5cdFx0fSxcclxuXHRcdG9uSGlkZSgpIHtcclxuXHRcdFx0Zm9yIChsZXQgaXRlbSBvZiB0aGlzLnZpZGVvTGlzdCkge1xyXG5cdFx0XHRcdGl0ZW0uZmxhZyA9IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQob3B0aW9uKSB7XHJcblx0XHRcdHRoaXMudXNlckluZm8gPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvX2tleScpXHJcblx0XHRcdC8vIHRoaXMuaW5kZXggPSA3O1xyXG5cdFx0XHR0aGlzLnFQYXJhbXMucGFnZU51bSA9IE51bWJlcihvcHRpb24ucGFnZU51bSk7XHJcblx0XHRcdHRoaXMucVBhcmFtcy5wYWdlU2l6ZSA9IG9wdGlvbi5wYWdlTnVtICogb3B0aW9uLnBhZ2VTaXplO1xyXG5cdFx0XHQvLyB0aGlzLnFQYXJhbXMudmlkZW9JbmRleCA9IG9wdGlvbi5pbmRleDtcclxuXHRcdFx0dGhpcy5pbmRleCA9IE51bWJlcihvcHRpb24uaW5kZXgpO1xyXG5cdFx0XHR0aGlzLnF1ZXJ5UGFyYW1zLnBhZ2VOdW0gPSBOdW1iZXIob3B0aW9uLnBhZ2VOdW0pICsgMTtcclxuXHRcdFx0dGhpcy5xdWVyeVBhcmFtcy5wYWdlU2l6ZSA9IE51bWJlcihvcHRpb24ucGFnZVNpemUpO1xyXG5cdFx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0Ly8gXHR0aGlzLm1hc2tTaG93ID0gZmFsc2VcclxuXHRcdFx0Ly8gfSwgMTAwMCk7XHJcblx0XHRcdGlmKG9wdGlvbi50eXBlKSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cob3B0aW9uLnR5cGUpXHJcblx0XHRcdFx0c3dpdGNoIChvcHRpb24udHlwZSl7XHJcblx0XHRcdFx0XHRjYXNlICcxJzpcclxuXHRcdFx0XHRcdFx0dGhpcy5pbml0TXlSZWxlYXNlVmlkZW9MaXN0KClcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICcyJzpcclxuXHRcdFx0XHRcdFx0dGhpcy5pbml0TXlTdXBwb3J0VmlkZW9MaXN0KClcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHR0aGlzLmluaXRNeUxpa2VWaWRlb0xpc3QoKVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1lbHNlIHtcclxuXHRcdFx0XHR0aGlzLmluaXRWaWRlb0xpc3QoKVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8g6L+U5ZueXHJcblx0XHRcdGJhY2soKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDojrflj5bop4bpopHliJfooahcclxuXHRcdFx0aW5pdFZpZGVvTGlzdCgpIHtcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdHBhZ2VOdW06IDEsXHJcblx0XHRcdFx0XHRwYWdlU2l6ZTogdGhpcy5xUGFyYW1zLnBhZ2VTaXplLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzaG93Q29va2luZy5saXN0VmlkZW8oZGF0YSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHQvLyB0aGlzLmxpc3QgPSB0aGlzLmxpc3QuY29uY2F0KHJlcy5yb3dzKTtcclxuXHRcdFx0XHRcdHRoaXMudmlkZW9zVG90YWwgPSByZXMudG90YWw7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMucm93cylcclxuXHRcdFx0XHRcdGxldCBhcnIgPSBbXTtcclxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLnJvd3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0bGV0IG9iaiA9IHt9O1xyXG5cdFx0XHRcdFx0XHRvYmouaWQgPSByZXMucm93c1tpXS5pZDtcclxuXHRcdFx0XHRcdFx0b2JqLnVzZXJJZCA9IHJlcy5yb3dzW2ldLnVzZXJJZDtcclxuXHRcdFx0XHRcdFx0b2JqLnVzZXJOYW1lID0gcmVzLnJvd3NbaV0udXNlck5hbWU7XHJcblx0XHRcdFx0XHRcdG9iai51c2VyVXJsID0gcmVzLnJvd3NbaV0udXNlclVybDtcclxuXHRcdFx0XHRcdFx0b2JqLnNyYyA9IHJlcy5yb3dzW2ldLnZpZGVvVXJsO1xyXG5cdFx0XHRcdFx0XHRvYmouY29udGVudCA9IHJlcy5yb3dzW2ldLnZpZGVvRGVzY3JpcHRpb247XHJcblx0XHRcdFx0XHRcdGlmIChpID09IHRoaXMuaW5kZXgpIHtcclxuXHRcdFx0XHRcdFx0XHRvYmouZmxhZyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0b2JqLmZsYWcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRvYmouYXZhdGVyID0gcmVzLnJvd3NbaV0udXNlclVybCB8fCAnL3N0YXRpYy9kYW54aWFvY2h1LnBuZydcclxuXHRcdFx0XHRcdFx0b2JqLmxpa2UgPSByZXMucm93c1tpXS5saWtlTnVtOyAvLyDmlLbol4/mlbDph49cclxuXHRcdFx0XHRcdFx0b2JqLnN1cHBvcnROdW0gPSByZXMucm93c1tpXS5zdXBwb3J0TnVtOyAvLyDngrnotZ7mlbDph49cclxuXHRcdFx0XHRcdFx0b2JqLmNoZWNrID0gcmVzLnJvd3NbaV0ubWVJc0xpa2U7IC8vIG51bGzvvJrkuI3mmK/vvIwnaWQn77ya5pivXHJcblx0XHRcdFx0XHRcdG9iai5tZUlzU3VwcG9ydCA9IHJlcy5yb3dzW2ldLm1lSXNTdXBwb3J0OyAvLyBudWxs77ya5LiN5piv77yMJ2lkJ++8muaYr1xyXG5cdFx0XHRcdFx0XHRvYmoubWVJc0ZvbGxvdyA9IHJlcy5yb3dzW2ldLm1lSXNGb2xsb3c7IC8vIG51bGzvvJrkuI3mmK/vvIwnaWQn77ya5pivXHJcblx0XHRcdFx0XHRcdG9iai5jb21tZW50ID0gcmVzLnJvd3NbaV0uZXZhbHVhdGlvbk51bTtcclxuXHRcdFx0XHRcdFx0b2JqLmluaXRpYWxUaW1lID0gMDtcclxuXHRcdFx0XHRcdFx0b2JqLmF0ID0gcmVzLnJvd3NbaV0udXNlck5hbWU7XHJcblx0XHRcdFx0XHRcdG9iai5kdXJhdGlvbiA9IDEwMDA7XHJcblx0XHRcdFx0XHRcdC8vIG9iai5wb3N0ZXIgPSByZXMucm93c1tpXS52aWRlb0N1dEltYWdlVXJsO1xyXG5cdFx0XHRcdFx0XHRvYmoucG9zdGVyID0gcmVzLnJvd3NbaV0udmlkZW9DdXRJbWFnZVVybDtcclxuXHJcblx0XHRcdFx0XHRcdC8vIG9iai5saW5rTmFtZSA9IHJlcy5yb3dzW2ldLmxpbmtOYW1lOyAgXHJcblx0XHRcdFx0XHRcdC8vIG9iai5saW5rVXJsID0gcmVzLnJvd3NbaV0ubGlua1VybDsgIFxyXG5cdFx0XHRcdFx0XHRhcnIucHVzaChvYmopO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy52aWRlb0xpc3QgPSBhcnI7XHJcblx0XHRcdFx0XHQvLyB0aGlzLiRzZXQodGhpcy52aWRlb0xpc3RbdGhpcy5pbmRleF0sICdmbGFnJywgdHJ1ZSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0aW5pdE15UmVsZWFzZVZpZGVvTGlzdCgpIHtcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdHBhZ2VOdW06IDEsXHJcblx0XHRcdFx0XHRwYWdlU2l6ZTogdGhpcy5xUGFyYW1zLnBhZ2VTaXplLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzaG93Q29va2luZy5teVJlbGVhc2VWaWRlb0xpc3QoZGF0YSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHQvLyB0aGlzLmxpc3QgPSB0aGlzLmxpc3QuY29uY2F0KHJlcy5yb3dzKTtcclxuXHRcdFx0XHRcdHRoaXMudmlkZW9zVG90YWwgPSByZXMudG90YWw7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXMucm93cylcclxuXHRcdFx0XHRcdGxldCBhcnIgPSBbXTtcclxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLnJvd3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0bGV0IG9iaiA9IHt9O1xyXG5cdFx0XHRcdFx0XHRvYmouaWQgPSByZXMucm93c1tpXS5pZDtcclxuXHRcdFx0XHRcdFx0b2JqLnVzZXJJZCA9IHJlcy5yb3dzW2ldLnVzZXJJZDtcclxuXHRcdFx0XHRcdFx0b2JqLnVzZXJOYW1lID0gcmVzLnJvd3NbaV0udXNlck5hbWU7XHJcblx0XHRcdFx0XHRcdG9iai51c2VyVXJsID0gcmVzLnJvd3NbaV0udXNlclVybDtcclxuXHRcdFx0XHRcdFx0b2JqLnNyYyA9IHJlcy5yb3dzW2ldLnZpZGVvVXJsO1xyXG5cdFx0XHRcdFx0XHRvYmouY29udGVudCA9IHJlcy5yb3dzW2ldLnZpZGVvRGVzY3JpcHRpb247XHJcblx0XHRcdFx0XHRcdGlmIChpID09IHRoaXMuaW5kZXgpIHtcclxuXHRcdFx0XHRcdFx0XHRvYmouZmxhZyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0b2JqLmZsYWcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRvYmouYXZhdGVyID0gcmVzLnJvd3NbaV0udXNlclVybCB8fCAnL3N0YXRpYy9kYW54aWFvY2h1LnBuZydcclxuXHRcdFx0XHRcdFx0b2JqLmxpa2UgPSByZXMucm93c1tpXS5saWtlTnVtOyAvLyDmlLbol4/mlbDph49cclxuXHRcdFx0XHRcdFx0b2JqLnN1cHBvcnROdW0gPSByZXMucm93c1tpXS5zdXBwb3J0TnVtOyAvLyDngrnotZ7mlbDph49cclxuXHRcdFx0XHRcdFx0b2JqLmNoZWNrID0gcmVzLnJvd3NbaV0ubWVJc0xpa2U7IC8vIG51bGzvvJrkuI3mmK/vvIwnaWQn77ya5pivXHJcblx0XHRcdFx0XHRcdG9iai5tZUlzU3VwcG9ydCA9IHJlcy5yb3dzW2ldLm1lSXNTdXBwb3J0OyAvLyBudWxs77ya5LiN5piv77yMJ2lkJ++8muaYr1xyXG5cdFx0XHRcdFx0XHRvYmoubWVJc0ZvbGxvdyA9IHJlcy5yb3dzW2ldLm1lSXNGb2xsb3c7IC8vIG51bGzvvJrkuI3mmK/vvIwnaWQn77ya5pivXHJcblx0XHRcdFx0XHRcdG9iai5jb21tZW50ID0gcmVzLnJvd3NbaV0uZXZhbHVhdGlvbk51bTtcclxuXHRcdFx0XHRcdFx0b2JqLmluaXRpYWxUaW1lID0gMDtcclxuXHRcdFx0XHRcdFx0b2JqLmF0ID0gcmVzLnJvd3NbaV0udXNlck5hbWU7XHJcblx0XHRcdFx0XHRcdG9iai5kdXJhdGlvbiA9IDEwMDA7XHJcblx0XHRcdFx0XHRcdC8vIG9iai5wb3N0ZXIgPSByZXMucm93c1tpXS52aWRlb0N1dEltYWdlVXJsO1xyXG5cdFx0XHRcdFx0XHRvYmoucG9zdGVyID0gJyc7XHJcblx0XHRcdFx0XHRcdC8vIG9iai5saW5rTmFtZSA9IHJlcy5yb3dzW2ldLmxpbmtOYW1lOyAgXHJcblx0XHRcdFx0XHRcdC8vIG9iai5saW5rVXJsID0gcmVzLnJvd3NbaV0ubGlua1VybDsgIFxyXG5cdFx0XHRcdFx0XHRhcnIucHVzaChvYmopO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy52aWRlb0xpc3QgPSBhcnI7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0aW5pdE15U3VwcG9ydFZpZGVvTGlzdCgpIHtcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdHBhZ2VOdW06IDEsXHJcblx0XHRcdFx0XHRwYWdlU2l6ZTogdGhpcy5xUGFyYW1zLnBhZ2VTaXplLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzaG93Q29va2luZy5teVN1cHBvcnRWaWRlb0xpc3QoZGF0YSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHQvLyB0aGlzLmxpc3QgPSB0aGlzLmxpc3QuY29uY2F0KHJlcy5yb3dzKTtcclxuXHRcdFx0XHRcdHRoaXMudmlkZW9zVG90YWwgPSByZXMudG90YWw7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXMucm93cylcclxuXHRcdFx0XHRcdGxldCBhcnIgPSBbXTtcclxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLnJvd3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0bGV0IG9iaiA9IHt9O1xyXG5cdFx0XHRcdFx0XHRvYmouaWQgPSByZXMucm93c1tpXS5pZDtcclxuXHRcdFx0XHRcdFx0b2JqLnVzZXJJZCA9IHJlcy5yb3dzW2ldLnVzZXJJZDtcclxuXHRcdFx0XHRcdFx0b2JqLnVzZXJOYW1lID0gcmVzLnJvd3NbaV0udXNlck5hbWU7XHJcblx0XHRcdFx0XHRcdG9iai51c2VyVXJsID0gcmVzLnJvd3NbaV0udXNlclVybDtcclxuXHRcdFx0XHRcdFx0b2JqLnNyYyA9IHJlcy5yb3dzW2ldLnZpZGVvVXJsO1xyXG5cdFx0XHRcdFx0XHRvYmouY29udGVudCA9IHJlcy5yb3dzW2ldLnZpZGVvRGVzY3JpcHRpb247XHJcblx0XHRcdFx0XHRcdGlmIChpID09IHRoaXMuaW5kZXgpIHtcclxuXHRcdFx0XHRcdFx0XHRvYmouZmxhZyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0b2JqLmZsYWcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRvYmouYXZhdGVyID0gcmVzLnJvd3NbaV0udXNlclVybCB8fCAnL3N0YXRpYy9kYW54aWFvY2h1LnBuZydcclxuXHRcdFx0XHRcdFx0b2JqLmxpa2UgPSByZXMucm93c1tpXS5saWtlTnVtOyAvLyDmlLbol4/mlbDph49cclxuXHRcdFx0XHRcdFx0b2JqLnN1cHBvcnROdW0gPSByZXMucm93c1tpXS5zdXBwb3J0TnVtOyAvLyDngrnotZ7mlbDph49cclxuXHRcdFx0XHRcdFx0b2JqLmNoZWNrID0gcmVzLnJvd3NbaV0ubWVJc0xpa2U7IC8vIG51bGzvvJrkuI3mmK/vvIwnaWQn77ya5pivXHJcblx0XHRcdFx0XHRcdG9iai5tZUlzU3VwcG9ydCA9IHJlcy5yb3dzW2ldLm1lSXNTdXBwb3J0OyAvLyBudWxs77ya5LiN5piv77yMJ2lkJ++8muaYr1xyXG5cdFx0XHRcdFx0XHRvYmoubWVJc0ZvbGxvdyA9IHJlcy5yb3dzW2ldLm1lSXNGb2xsb3c7IC8vIG51bGzvvJrkuI3mmK/vvIwnaWQn77ya5pivXHJcblx0XHRcdFx0XHRcdG9iai5jb21tZW50ID0gcmVzLnJvd3NbaV0uZXZhbHVhdGlvbk51bTtcclxuXHRcdFx0XHRcdFx0b2JqLmluaXRpYWxUaW1lID0gMDtcclxuXHRcdFx0XHRcdFx0b2JqLmF0ID0gcmVzLnJvd3NbaV0udXNlck5hbWU7XHJcblx0XHRcdFx0XHRcdG9iai5kdXJhdGlvbiA9IDEwMDA7XHJcblx0XHRcdFx0XHRcdC8vIG9iai5wb3N0ZXIgPSByZXMucm93c1tpXS52aWRlb0N1dEltYWdlVXJsO1xyXG5cdFx0XHRcdFx0XHRvYmoucG9zdGVyID0gJyc7XHJcblx0XHRcdFx0XHRcdC8vIG9iai5saW5rTmFtZSA9IHJlcy5yb3dzW2ldLmxpbmtOYW1lOyAgXHJcblx0XHRcdFx0XHRcdC8vIG9iai5saW5rVXJsID0gcmVzLnJvd3NbaV0ubGlua1VybDsgIFxyXG5cdFx0XHRcdFx0XHRhcnIucHVzaChvYmopO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy52aWRlb0xpc3QgPSBhcnI7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0aW5pdE15TGlrZVZpZGVvTGlzdCgpIHtcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdHBhZ2VOdW06IDEsXHJcblx0XHRcdFx0XHRwYWdlU2l6ZTogdGhpcy5xUGFyYW1zLnBhZ2VTaXplLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzaG93Q29va2luZy5teUxpa2VWaWRlb0xpc3QoZGF0YSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHQvLyB0aGlzLmxpc3QgPSB0aGlzLmxpc3QuY29uY2F0KHJlcy5yb3dzKTtcclxuXHRcdFx0XHRcdHRoaXMudmlkZW9zVG90YWwgPSByZXMudG90YWw7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXMucm93cylcclxuXHRcdFx0XHRcdGxldCBhcnIgPSBbXTtcclxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLnJvd3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0bGV0IG9iaiA9IHt9O1xyXG5cdFx0XHRcdFx0XHRvYmouaWQgPSByZXMucm93c1tpXS5pZDtcclxuXHRcdFx0XHRcdFx0b2JqLnVzZXJJZCA9IHJlcy5yb3dzW2ldLnVzZXJJZDtcclxuXHRcdFx0XHRcdFx0b2JqLnVzZXJOYW1lID0gcmVzLnJvd3NbaV0udXNlck5hbWU7XHJcblx0XHRcdFx0XHRcdG9iai51c2VyVXJsID0gcmVzLnJvd3NbaV0udXNlclVybDtcclxuXHRcdFx0XHRcdFx0b2JqLnNyYyA9IHJlcy5yb3dzW2ldLnZpZGVvVXJsO1xyXG5cdFx0XHRcdFx0XHRvYmouY29udGVudCA9IHJlcy5yb3dzW2ldLnZpZGVvRGVzY3JpcHRpb247XHJcblx0XHRcdFx0XHRcdGlmIChpID09IHRoaXMuaW5kZXgpIHtcclxuXHRcdFx0XHRcdFx0XHRvYmouZmxhZyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0b2JqLmZsYWcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRvYmouYXZhdGVyID0gcmVzLnJvd3NbaV0udXNlclVybCB8fCAnL3N0YXRpYy9kYW54aWFvY2h1LnBuZydcclxuXHRcdFx0XHRcdFx0b2JqLmxpa2UgPSByZXMucm93c1tpXS5saWtlTnVtOyAvLyDmlLbol4/mlbDph49cclxuXHRcdFx0XHRcdFx0b2JqLnN1cHBvcnROdW0gPSByZXMucm93c1tpXS5zdXBwb3J0TnVtOyAvLyDngrnotZ7mlbDph49cclxuXHRcdFx0XHRcdFx0b2JqLmNoZWNrID0gcmVzLnJvd3NbaV0ubWVJc0xpa2U7IC8vIG51bGzvvJrkuI3mmK/vvIwnaWQn77ya5pivXHJcblx0XHRcdFx0XHRcdG9iai5tZUlzU3VwcG9ydCA9IHJlcy5yb3dzW2ldLm1lSXNTdXBwb3J0OyAvLyBudWxs77ya5LiN5piv77yMJ2lkJ++8muaYr1xyXG5cdFx0XHRcdFx0XHRvYmoubWVJc0ZvbGxvdyA9IHJlcy5yb3dzW2ldLm1lSXNGb2xsb3c7IC8vIG51bGzvvJrkuI3mmK/vvIwnaWQn77ya5pivXHJcblx0XHRcdFx0XHRcdG9iai5jb21tZW50ID0gcmVzLnJvd3NbaV0uZXZhbHVhdGlvbk51bTtcclxuXHRcdFx0XHRcdFx0b2JqLmluaXRpYWxUaW1lID0gMDtcclxuXHRcdFx0XHRcdFx0b2JqLmF0ID0gcmVzLnJvd3NbaV0udXNlck5hbWU7XHJcblx0XHRcdFx0XHRcdG9iai5kdXJhdGlvbiA9IDEwMDA7XHJcblx0XHRcdFx0XHRcdC8vIG9iai5wb3N0ZXIgPSByZXMucm93c1tpXS52aWRlb0N1dEltYWdlVXJsO1xyXG5cdFx0XHRcdFx0XHRvYmoucG9zdGVyID0gJyc7XHJcblx0XHRcdFx0XHRcdC8vIG9iai5saW5rTmFtZSA9IHJlcy5yb3dzW2ldLmxpbmtOYW1lOyAgXHJcblx0XHRcdFx0XHRcdC8vIG9iai5saW5rVXJsID0gcmVzLnJvd3NbaV0ubGlua1VybDsgIFxyXG5cdFx0XHRcdFx0XHRhcnIucHVzaChvYmopO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy52aWRlb0xpc3QgPSBhcnI7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0YW5pbWF0aW9uRmluaXNoKGUpIHtcclxuXHRcdFx0XHQvLyNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHRcdC8vIHRoaXMuY2hhbmdlQ3VycmVudChlKVxyXG5cdFx0XHRcdC8vI2VuZGlmXHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYW5nZUN1cnJlbnQoZSkge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdlOiA9PT09PT09PT09PT09PT09PT09PT4nKVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLmN1cnJlbnQpXHJcblx0XHRcdFx0dGhpcy5pbmRleCA9IGUuZGV0YWlsLmN1cnJlbnQ7XHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaXRlbSBvZiB0aGlzLnZpZGVvTGlzdCkge1xyXG5cdFx0XHRcdFx0XHRpdGVtLmZsYWcgPSBmYWxzZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy52aWRlb0xpc3RbdGhpcy5pbmRleF0uZmxhZyA9IHRydWVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwdXNoVmlkZW9MaXN0KCkge1xyXG5cdFx0XHRcdHNob3dDb29raW5nLmxpc3RWaWRlbyh0aGlzLnF1ZXJ5UGFyYW1zKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdC8vIHRoaXMubGlzdCA9IHRoaXMubGlzdC5jb25jYXQocmVzLnJvd3MpO1xyXG5cdFx0XHRcdFx0Ly8gdGhpcy5saXN0VG90YWwgPSByZXMudG90YWw7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXMucm93cylcclxuXHRcdFx0XHRcdGxldCBhcnIgPSBbXTtcclxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLnJvd3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0bGV0IG9iaiA9IHt9O1xyXG5cdFx0XHRcdFx0XHRvYmouaWQgPSByZXMucm93c1tpXS5pZDtcclxuXHRcdFx0XHRcdFx0b2JqLnVzZXJJZCA9IHJlcy5yb3dzW2ldLnVzZXJJZDtcclxuXHRcdFx0XHRcdFx0b2JqLnVzZXJOYW1lID0gcmVzLnJvd3NbaV0udXNlck5hbWU7XHJcblx0XHRcdFx0XHRcdG9iai51c2VyVXJsID0gcmVzLnJvd3NbaV0udXNlclVybDtcclxuXHRcdFx0XHRcdFx0b2JqLnNyYyA9IHJlcy5yb3dzW2ldLnZpZGVvVXJsO1xyXG5cdFx0XHRcdFx0XHRvYmouY29udGVudCA9IHJlcy5yb3dzW2ldLnZpZGVvRGVzY3JpcHRpb247XHJcblx0XHRcdFx0XHRcdGlmIChpID09IHRoaXMuaW5kZXgpIHtcclxuXHRcdFx0XHRcdFx0XHRvYmouZmxhZyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0b2JqLmZsYWcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRvYmouY2hlY2sgPSByZXMucm93c1tpXS5tZUlzTGlrZTtcclxuXHRcdFx0XHRcdFx0b2JqLmxpa2UgPSByZXMucm93c1tpXS5saWtlTnVtO1xyXG5cdFx0XHRcdFx0XHRvYmouc3VwcG9ydE51bSA9IHJlcy5yb3dzW2ldLnN1cHBvcnROdW07IC8vIOeCuei1nuaVsOmHj1xyXG5cdFx0XHRcdFx0XHRvYmoubWVJc1N1cHBvcnQgPSByZXMucm93c1tpXS5tZUlzU3VwcG9ydDsgLy8gbnVsbO+8muS4jeaYr++8jCdpZCfvvJrmmK9cclxuXHRcdFx0XHRcdFx0b2JqLm1lSXNGb2xsb3cgPSByZXMucm93c1tpXS5tZUlzRm9sbG93OyAvLyBudWxs77ya5LiN5piv77yMJ2lkJ++8muaYr1xyXG5cdFx0XHRcdFx0XHRvYmouY29tbWVudCA9IHJlcy5yb3dzW2ldLmV2YWx1YXRpb25OdW07XHJcblx0XHRcdFx0XHRcdG9iai5hdmF0ZXIgPSByZXMucm93c1tpXS51c2VyVXJsIHx8ICcvc3RhdGljL2RhbnhpYW9jaHUucG5nJ1xyXG5cdFx0XHRcdFx0XHRvYmouaW5pdGlhbFRpbWUgPSAwO1xyXG5cdFx0XHRcdFx0XHRvYmouYXQgPSByZXMucm93c1tpXS51c2VyTmFtZTtcclxuXHRcdFx0XHRcdFx0b2JqLmR1cmF0aW9uID0gMTAwMDtcclxuXHRcdFx0XHRcdFx0Ly8gb2JqLnBvc3RlciA9IHJlcy5yb3dzW2ldLnZpZGVvQ3V0SW1hZ2VVcmw7XHJcblx0XHRcdFx0XHRcdG9iai5wb3N0ZXIgPSAnJztcclxuXHRcdFx0XHRcdFx0Ly8gb2JqLmxpbmtOYW1lID0gcmVzLnJvd3NbaV0ubGlua05hbWU7ICBcclxuXHRcdFx0XHRcdFx0Ly8gb2JqLmxpbmtVcmwgPSByZXMucm93c1tpXS5saW5rVXJsOyAgXHJcblx0XHRcdFx0XHRcdGFyci5wdXNoKG9iaik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvTGlzdCA9IHRoaXMudmlkZW9MaXN0LmNvbmNhdChhcnIpO1xyXG5cdFx0XHRcdFx0dGhpcy5xdWVyeVBhcmFtcy5wYWdlTnVtKytcclxuXHRcdFx0XHRcdC8vIHRoaXMuJHNldCh0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XSwgJ2ZsYWcnLCB0cnVlKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG5cdFx0XHRcdC8vIFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdC8vIFx0XHR1cmw6ICdodHRwczovL2FwaS5hcGlvcGVuLnRvcC92aWRlb1JlY29tbWVuZD9pZD0xMjczOTcnLFxyXG5cdFx0XHRcdC8vIFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0Ly8gXHRcdFx0bGV0IHZpZGVvR3JvdXAgPSBbXVxyXG5cdFx0XHRcdC8vIFx0XHRcdGZvciAobGV0IGl0ZW0gb2YgcmVzLmRhdGEucmVzdWx0KSB7XHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRpZihpdGVtLnR5cGUgPT0gJ3ZpZGVvU21hbGxDYXJkJyl7XHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdHZpZGVvR3JvdXAucHVzaCh7XHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdFx0c3JjOml0ZW0uZGF0YS5wbGF5VXJsLFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcdGNvbnRlbnQ6aXRlbS5kYXRhLnRpdGxlLFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcdGZsYWc6ZmFsc2UsXHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdFx0Y2hlY2s6ZmFsc2UsXHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdFx0bGlrZTonN3cnLFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcdGNvbW1lbnQ6JzEwNDUnLFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcdGF0Oml0ZW0uZGF0YS5hdXRob3IubmFtZSxcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XHRpZDppdGVtLmRhdGEuYXV0aG9yLmljb24sXHJcblx0XHRcdFx0Ly8gXHRcdFx0XHRcdFx0YXZhdGVyOml0ZW0uZGF0YS5hdXRob3IuaWNvbixcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XHRpbml0aWFsVGltZTowLFxyXG5cdFx0XHRcdC8vIFx0XHRcdFx0XHRcdGR1cmF0aW9uOml0ZW0uZGF0YS5kdXJhdGlvbixcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0XHRpZDogMTFcclxuXHRcdFx0XHQvLyBcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQvLyBcdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIFx0XHRcdGxldCBsZW4gPSB0aGlzLnZpZGVvTGlzdC5maWx0ZXIoaXRlbT0+aXRlbS5zcmMpLmxlbmd0aFxyXG5cdFx0XHRcdC8vIFx0XHRcdGZvcihsZXQgaSA9IGxlbjtpPGxlbit2aWRlb0dyb3VwLmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdC8vIFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMudmlkZW9MaXN0LGksdmlkZW9Hcm91cFtpLWxlbl0pXHJcblxyXG5cdFx0XHRcdC8vIFx0XHRcdH1cclxuXHRcdFx0XHQvLyBcdFx0XHRyZXNvbHZlKClcclxuXHRcdFx0XHQvLyBcdFx0fVxyXG5cdFx0XHRcdC8vIFx0fSlcclxuXHRcdFx0XHQvLyB9KSBcclxuXHRcdFx0XHQvLyByZXR1cm4gcHJvbWlzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwdXNoTXlSZWxlYXNlVmlkZW9MaXN0KCkge1xyXG5cdFx0XHRcdHNob3dDb29raW5nLm15UmVsZWFzZVZpZGVvTGlzdCh0aGlzLnF1ZXJ5UGFyYW1zKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGxldCBhcnIgPSBbXTtcclxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLnJvd3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0bGV0IG9iaiA9IHt9O1xyXG5cdFx0XHRcdFx0XHRvYmouaWQgPSByZXMucm93c1tpXS5pZDtcclxuXHRcdFx0XHRcdFx0b2JqLnVzZXJJZCA9IHJlcy5yb3dzW2ldLnVzZXJJZDtcclxuXHRcdFx0XHRcdFx0b2JqLnVzZXJOYW1lID0gcmVzLnJvd3NbaV0udXNlck5hbWU7XHJcblx0XHRcdFx0XHRcdG9iai51c2VyVXJsID0gcmVzLnJvd3NbaV0udXNlclVybDtcclxuXHRcdFx0XHRcdFx0b2JqLnNyYyA9IHJlcy5yb3dzW2ldLnZpZGVvVXJsO1xyXG5cdFx0XHRcdFx0XHRvYmouY29udGVudCA9IHJlcy5yb3dzW2ldLnZpZGVvRGVzY3JpcHRpb247XHJcblx0XHRcdFx0XHRcdGlmIChpID09IHRoaXMuaW5kZXgpIHtcclxuXHRcdFx0XHRcdFx0XHRvYmouZmxhZyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0b2JqLmZsYWcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRvYmouY2hlY2sgPSByZXMucm93c1tpXS5tZUlzTGlrZTtcclxuXHRcdFx0XHRcdFx0b2JqLmxpa2UgPSByZXMucm93c1tpXS5saWtlTnVtO1xyXG5cdFx0XHRcdFx0XHRvYmouc3VwcG9ydE51bSA9IHJlcy5yb3dzW2ldLnN1cHBvcnROdW07IC8vIOeCuei1nuaVsOmHj1xyXG5cdFx0XHRcdFx0XHRvYmoubWVJc1N1cHBvcnQgPSByZXMucm93c1tpXS5tZUlzU3VwcG9ydDsgLy8gbnVsbO+8muS4jeaYr++8jCdpZCfvvJrmmK9cclxuXHRcdFx0XHRcdFx0b2JqLm1lSXNGb2xsb3cgPSByZXMucm93c1tpXS5tZUlzRm9sbG93OyAvLyBudWxs77ya5LiN5piv77yMJ2lkJ++8muaYr1xyXG5cdFx0XHRcdFx0XHRvYmouY29tbWVudCA9IHJlcy5yb3dzW2ldLmV2YWx1YXRpb25OdW07XHJcblx0XHRcdFx0XHRcdG9iai5hdmF0ZXIgPSByZXMucm93c1tpXS51c2VyVXJsIHx8ICcvc3RhdGljL2RhbnhpYW9jaHUucG5nJ1xyXG5cdFx0XHRcdFx0XHRvYmouaW5pdGlhbFRpbWUgPSAwO1xyXG5cdFx0XHRcdFx0XHRvYmouYXQgPSByZXMucm93c1tpXS51c2VyTmFtZTtcclxuXHRcdFx0XHRcdFx0b2JqLmR1cmF0aW9uID0gMTAwMDtcclxuXHRcdFx0XHRcdFx0Ly8gb2JqLnBvc3RlciA9IHJlcy5yb3dzW2ldLnZpZGVvQ3V0SW1hZ2VVcmw7XHJcblx0XHRcdFx0XHRcdG9iai5wb3N0ZXIgPSAnJztcclxuXHRcdFx0XHRcdFx0Ly8gb2JqLmxpbmtOYW1lID0gcmVzLnJvd3NbaV0ubGlua05hbWU7ICBcclxuXHRcdFx0XHRcdFx0Ly8gb2JqLmxpbmtVcmwgPSByZXMucm93c1tpXS5saW5rVXJsOyAgXHJcblx0XHRcdFx0XHRcdGFyci5wdXNoKG9iaik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvTGlzdCA9IHRoaXMudmlkZW9MaXN0LmNvbmNhdChhcnIpO1xyXG5cdFx0XHRcdFx0dGhpcy5xdWVyeVBhcmFtcy5wYWdlTnVtKytcclxuXHRcdFx0XHRcdC8vIHRoaXMuJHNldCh0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XSwgJ2ZsYWcnLCB0cnVlKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwdXNoTXlTdXBwb3J0VmlkZW9MaXN0KCkge1xyXG5cdFx0XHRcdHNob3dDb29raW5nLm15U3VwcG9ydFZpZGVvTGlzdCh0aGlzLnF1ZXJ5UGFyYW1zKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGxldCBhcnIgPSBbXTtcclxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLnJvd3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0bGV0IG9iaiA9IHt9O1xyXG5cdFx0XHRcdFx0XHRvYmouaWQgPSByZXMucm93c1tpXS5pZDtcclxuXHRcdFx0XHRcdFx0b2JqLnVzZXJJZCA9IHJlcy5yb3dzW2ldLnVzZXJJZDtcclxuXHRcdFx0XHRcdFx0b2JqLnVzZXJOYW1lID0gcmVzLnJvd3NbaV0udXNlck5hbWU7XHJcblx0XHRcdFx0XHRcdG9iai51c2VyVXJsID0gcmVzLnJvd3NbaV0udXNlclVybDtcclxuXHRcdFx0XHRcdFx0b2JqLnNyYyA9IHJlcy5yb3dzW2ldLnZpZGVvVXJsO1xyXG5cdFx0XHRcdFx0XHRvYmouY29udGVudCA9IHJlcy5yb3dzW2ldLnZpZGVvRGVzY3JpcHRpb247XHJcblx0XHRcdFx0XHRcdGlmIChpID09IHRoaXMuaW5kZXgpIHtcclxuXHRcdFx0XHRcdFx0XHRvYmouZmxhZyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0b2JqLmZsYWcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRvYmouY2hlY2sgPSByZXMucm93c1tpXS5tZUlzTGlrZTtcclxuXHRcdFx0XHRcdFx0b2JqLmxpa2UgPSByZXMucm93c1tpXS5saWtlTnVtO1xyXG5cdFx0XHRcdFx0XHRvYmouc3VwcG9ydE51bSA9IHJlcy5yb3dzW2ldLnN1cHBvcnROdW07IC8vIOeCuei1nuaVsOmHj1xyXG5cdFx0XHRcdFx0XHRvYmoubWVJc1N1cHBvcnQgPSByZXMucm93c1tpXS5tZUlzU3VwcG9ydDsgLy8gbnVsbO+8muS4jeaYr++8jCdpZCfvvJrmmK9cclxuXHRcdFx0XHRcdFx0b2JqLm1lSXNGb2xsb3cgPSByZXMucm93c1tpXS5tZUlzRm9sbG93OyAvLyBudWxs77ya5LiN5piv77yMJ2lkJ++8muaYr1xyXG5cdFx0XHRcdFx0XHRvYmouY29tbWVudCA9IHJlcy5yb3dzW2ldLmV2YWx1YXRpb25OdW07XHJcblx0XHRcdFx0XHRcdG9iai5hdmF0ZXIgPSByZXMucm93c1tpXS51c2VyVXJsIHx8ICcvc3RhdGljL2RhbnhpYW9jaHUucG5nJ1xyXG5cdFx0XHRcdFx0XHRvYmouaW5pdGlhbFRpbWUgPSAwO1xyXG5cdFx0XHRcdFx0XHRvYmouYXQgPSByZXMucm93c1tpXS51c2VyTmFtZTtcclxuXHRcdFx0XHRcdFx0b2JqLmR1cmF0aW9uID0gMTAwMDtcclxuXHRcdFx0XHRcdFx0Ly8gb2JqLnBvc3RlciA9IHJlcy5yb3dzW2ldLnZpZGVvQ3V0SW1hZ2VVcmw7XHJcblx0XHRcdFx0XHRcdG9iai5wb3N0ZXIgPSAnJztcclxuXHRcdFx0XHRcdFx0Ly8gb2JqLmxpbmtOYW1lID0gcmVzLnJvd3NbaV0ubGlua05hbWU7ICBcclxuXHRcdFx0XHRcdFx0Ly8gb2JqLmxpbmtVcmwgPSByZXMucm93c1tpXS5saW5rVXJsOyAgXHJcblx0XHRcdFx0XHRcdGFyci5wdXNoKG9iaik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvTGlzdCA9IHRoaXMudmlkZW9MaXN0LmNvbmNhdChhcnIpO1xyXG5cdFx0XHRcdFx0dGhpcy5xdWVyeVBhcmFtcy5wYWdlTnVtKytcclxuXHRcdFx0XHRcdC8vIHRoaXMuJHNldCh0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XSwgJ2ZsYWcnLCB0cnVlKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwdXNoTXlMaWtlVmlkZW9MaXN0KCkge1xyXG5cdFx0XHRcdHNob3dDb29raW5nLm15TGlrZVZpZGVvTGlzdCh0aGlzLnF1ZXJ5UGFyYW1zKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGxldCBhcnIgPSBbXTtcclxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLnJvd3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0bGV0IG9iaiA9IHt9O1xyXG5cdFx0XHRcdFx0XHRvYmouaWQgPSByZXMucm93c1tpXS5pZDtcclxuXHRcdFx0XHRcdFx0b2JqLnVzZXJJZCA9IHJlcy5yb3dzW2ldLnVzZXJJZDtcclxuXHRcdFx0XHRcdFx0b2JqLnVzZXJOYW1lID0gcmVzLnJvd3NbaV0udXNlck5hbWU7XHJcblx0XHRcdFx0XHRcdG9iai51c2VyVXJsID0gcmVzLnJvd3NbaV0udXNlclVybDtcclxuXHRcdFx0XHRcdFx0b2JqLnNyYyA9IHJlcy5yb3dzW2ldLnZpZGVvVXJsO1xyXG5cdFx0XHRcdFx0XHRvYmouY29udGVudCA9IHJlcy5yb3dzW2ldLnZpZGVvRGVzY3JpcHRpb247XHJcblx0XHRcdFx0XHRcdGlmIChpID09IHRoaXMuaW5kZXgpIHtcclxuXHRcdFx0XHRcdFx0XHRvYmouZmxhZyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0b2JqLmZsYWcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRvYmouY2hlY2sgPSByZXMucm93c1tpXS5tZUlzTGlrZTtcclxuXHRcdFx0XHRcdFx0b2JqLmxpa2UgPSByZXMucm93c1tpXS5saWtlTnVtO1xyXG5cdFx0XHRcdFx0XHRvYmouc3VwcG9ydE51bSA9IHJlcy5yb3dzW2ldLnN1cHBvcnROdW07IC8vIOeCuei1nuaVsOmHj1xyXG5cdFx0XHRcdFx0XHRvYmoubWVJc1N1cHBvcnQgPSByZXMucm93c1tpXS5tZUlzU3VwcG9ydDsgLy8gbnVsbO+8muS4jeaYr++8jCdpZCfvvJrmmK9cclxuXHRcdFx0XHRcdFx0b2JqLm1lSXNGb2xsb3cgPSByZXMucm93c1tpXS5tZUlzRm9sbG93OyAvLyBudWxs77ya5LiN5piv77yMJ2lkJ++8muaYr1xyXG5cdFx0XHRcdFx0XHRvYmouY29tbWVudCA9IHJlcy5yb3dzW2ldLmV2YWx1YXRpb25OdW07XHJcblx0XHRcdFx0XHRcdG9iai5hdmF0ZXIgPSByZXMucm93c1tpXS51c2VyVXJsIHx8ICcvc3RhdGljL2RhbnhpYW9jaHUucG5nJ1xyXG5cdFx0XHRcdFx0XHRvYmouaW5pdGlhbFRpbWUgPSAwO1xyXG5cdFx0XHRcdFx0XHRvYmouYXQgPSByZXMucm93c1tpXS51c2VyTmFtZTtcclxuXHRcdFx0XHRcdFx0b2JqLmR1cmF0aW9uID0gMTAwMDtcclxuXHRcdFx0XHRcdFx0Ly8gb2JqLnBvc3RlciA9IHJlcy5yb3dzW2ldLnZpZGVvQ3V0SW1hZ2VVcmw7XHJcblx0XHRcdFx0XHRcdG9iai5wb3N0ZXIgPSAnJztcclxuXHRcdFx0XHRcdFx0Ly8gb2JqLmxpbmtOYW1lID0gcmVzLnJvd3NbaV0ubGlua05hbWU7ICBcclxuXHRcdFx0XHRcdFx0Ly8gb2JqLmxpbmtVcmwgPSByZXMucm93c1tpXS5saW5rVXJsOyAgXHJcblx0XHRcdFx0XHRcdGFyci5wdXNoKG9iaik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvTGlzdCA9IHRoaXMudmlkZW9MaXN0LmNvbmNhdChhcnIpO1xyXG5cdFx0XHRcdFx0dGhpcy5xdWVyeVBhcmFtcy5wYWdlTnVtKytcclxuXHRcdFx0XHRcdC8vIHRoaXMuJHNldCh0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XSwgJ2ZsYWcnLCB0cnVlKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnotZ5cclxuXHRcdFx0dGFwU3VwcG9ydChpdGVtKSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cobWVJc1N1cHBvcnQpXHJcblx0XHRcdFx0aWYgKGl0ZW0ubWVJc1N1cHBvcnQpIHtcclxuXHRcdFx0XHRcdC8vIOWPlua2iOeCuei1nlxyXG5cdFx0XHRcdFx0c2hvd0Nvb2tpbmcuY2FuY2VsU3VwcG9ydCh7XHJcblx0XHRcdFx0XHRcdGlkOiBpdGVtLmlkXHJcblx0XHRcdFx0XHR9KS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHRcdC8vIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdC8vIFx0dGl0bGU6IHJlcy5tc2csXHJcblx0XHRcdFx0XHRcdFx0Ly8gXHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHRcdFx0XHRpdGVtLm1lSXNTdXBwb3J0ID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRpdGVtLnN1cHBvcnROdW0tLVxyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8g54K56LWeXHJcblx0XHRcdFx0XHRzaG93Q29va2luZy5TaG93Q29va2luZ1N1cHBvcnQoe1xyXG5cdFx0XHRcdFx0XHRzaG93Q29va2luZ0lkOiBpdGVtLmlkLFxyXG5cdFx0XHRcdFx0XHRzdXBwb3J0ZWRVc2VySWQ6IGl0ZW0udXNlcklkXHJcblx0XHRcdFx0XHR9KS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHRcdGl0ZW0ubWVJc1N1cHBvcnQgPSB0cnVlXHJcblx0XHRcdFx0XHRcdFx0aXRlbS5zdXBwb3J0TnVtKytcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaUtuiXj1xyXG5cdFx0XHR0YXBMb3ZlKGl0ZW0pIHtcclxuXHRcdFx0XHQvLyB0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XS5jaGVjayA9ICF0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XS5jaGVja1xyXG5cdFx0XHRcdC8vIHRoaXMudmlkZW9MaXN0ID0gWy4uLnRoaXMudmlkZW9MaXN0XVxyXG5cdFx0XHRcdGlmIChpdGVtLmNoZWNrKSB7XHJcblx0XHRcdFx0XHQvLyDlj5bmtojmlLbol49cclxuXHRcdFx0XHRcdHNob3dDb29raW5nLmNhbmNlbExpa2Uoe1xyXG5cdFx0XHRcdFx0XHRpZDogaXRlbS5pZFxyXG5cdFx0XHRcdFx0fSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHRpdGVtLmNoZWNrID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRpdGVtLmxpa2UtLVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyDmlLbol49cclxuXHRcdFx0XHRcdHNob3dDb29raW5nLlNob3dDb29raW5nTXlMaWtlKHtcclxuXHRcdFx0XHRcdFx0c2hvd0Nvb2tpbmdJZDogaXRlbS5pZCxcclxuXHRcdFx0XHRcdFx0c3VwcG9ydGVkVXNlcklkOiBpdGVtLnVzZXJJZFxyXG5cdFx0XHRcdFx0fSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHRpdGVtLmNoZWNrID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdGl0ZW0ubGlrZSsrXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlhbPms6hcclxuXHRcdFx0dGFwQXZhdGVyKGl0ZW0pIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhpdGVtKVxyXG5cdFx0XHRcdHNob3dDb29raW5nLlNob3dDb29raW5nRm9sbG93KHtcclxuXHRcdFx0XHRcdGZvbGxvd2VkSWQ6IGl0ZW0udXNlcklkLFxyXG5cdFx0XHRcdFx0Zm9sbG93ZWROYW1lOiBpdGVtLnVzZXJOYW1lLFxyXG5cdFx0XHRcdFx0Zm9sbG93ZWRBdmF0YXI6IGl0ZW0udXNlclVybCxcclxuXHRcdFx0XHR9KS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBg5YWz5rOo5oiQ5YqfYFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR0aGlzLiRzZXQoaXRlbSwgJ21lSXNGb2xsb3cnLCB0cnVlKVxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnZpZGVvTGlzdClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDor4TorrpcclxuXHRcdFx0dGFwTXNnKGl0ZW0pIHtcclxuXHRcdFx0XHQvLyNpZm5kZWYgQVBQLU5WVUVcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdHRpdGxlOiBg5p+l55yL57Si5byV5Li6JHt0aGlzLmluZGV4feeahOivhOiuumBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vI2VuZGlmXHJcblx0XHRcdFx0Ly8jaWZkZWYgQVBQLU5WVUVcclxuXHRcdFx0XHR1bmkuZ2V0U3ViTlZ1ZUJ5SWQoJ2NvbW1lbnQnKS5zaG93KCdub25lJywgMCwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0dW5pLiRlbWl0KCdzaG93Q29tbWVudCcsIGl0ZW0uaWQpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8jZW5kaWZcclxuXHRcdFx0fSxcclxuXHRcdFx0dGFwU2hhcmUoKSB7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHR0aXRsZTogYOWIhuS6q+e0ouW8leS4uiR7dGhpcy5pbmRleH3nmoTop4bpopFgXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0dmlkZW9QbGF5KGluZGV4KSB7XHJcblx0XHRcdFx0bGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHByb21pc2UudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMudmlkZW9MaXN0W2luZGV4XSwgJ2ZsYWcnLCAhdGhpcy52aWRlb0xpc3RbaW5kZXhdLmZsYWcpXHJcblxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHBhdXNlVmlkZW8odmFsKSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codmFsKVxyXG5cdFx0XHRcdGlmICh0aGlzLm9sZEluZGV4KSB7XHJcblx0XHRcdFx0XHQvLyB0aGlzLnZpZGVvTGlzdFt0aGlzLm9sZEluZGV4XS5pbml0aWFsVGltZSA9IDA7XHJcblx0XHRcdFx0XHQvLyB0aGlzLiRzZXQodGhpcy52aWRlb0xpc3RbdGhpcy5vbGRJbmRleF0sICdpbml0aWFsVGltZScsIDApXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBpZiAodHlwZW9mIHRoaXMudmlkZW9MaXN0W3RoaXMub2xkSW5kZXhdLmluaXRpYWxUaW1lICE9ICd1bmRlZmluZWQnKSB0aGlzLnZpZGVvTGlzdFt0aGlzLm9sZEluZGV4XVxyXG5cdFx0XHRcdC8vIFx0LmluaXRpYWxUaW1lID0gdmFsXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy52aWRlb0xpc3QpXHJcblx0XHRcdH0sXHJcblx0XHRcdGNsaWNrVmlkZW8oKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coMTIzKVxyXG5cdFx0XHRcdHRoaXMudmlkZW9MaXN0W3RoaXMuaW5kZXhdLmZsYWcgPSAhdGhpcy52aWRlb0xpc3RbdGhpcy5pbmRleF0uZmxhZ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6IHtcclxuXHRcdFx0aW5kZXgobmV3VmFsLCBvbGRWYWwpIHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmluZGV4KVxyXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLnZpZGVvTGlzdC5sZW5ndGggPT0gdGhpcy52aWRlb3NUb3RhbCkgcmV0dXJuO1xyXG5cdFx0XHRcdFx0bGV0IGxlbiA9IHRoaXMudmlkZW9MaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0uc3JjKS5sZW5ndGhcclxuXHRcdFx0XHRcdC8vIOWKoOi9veinhumikVxyXG5cdFx0XHRcdFx0aWYgKGxlbiAtIHRoaXMuaW5kZXggLSAxIDw9IHRoaXMucGxheUNvdW50KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucHVzaFZpZGVvTGlzdCgpO1xyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygn5Y+v5Lul5Yqg6L295ZWmficpXHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMucXVlcnlQYXJhbXMpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLm9sZEluZGV4ID0gb2xkVmFsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LnN3aXBlciB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuXHR9XHJcblxyXG5cdC5zd2lwZXItaXRlbSB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuXHJcblx0LnZpZGVvIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0fVxyXG5cclxuXHQudmlkZW8tYm94IHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNvdmVyLXZpZXctY2VudGVyIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG9wYWNpdHk6IDAuMTtcclxuXHRcdHotaW5kZXg6IDk5OTtcclxuXHR9XHJcblxyXG5cdC5jb3Zlci12aWV3LWxlZnQge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xyXG5cdFx0d2lkdGg6IDUwMHJweDtcclxuXHRcdGJvdHRvbTogMTIwcnB4O1xyXG5cdFx0ei1pbmRleDogOTk5OTtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdC8qIGJhY2tncm91bmQtY29sb3I6ICNERDUyNEQ7ICovXHJcblx0XHQvKiAjaWZuZGVmIEFQUC1QTFVTICovXHJcblx0XHR3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcblxyXG5cdC5sZWZ0LXZpZXcge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBycHg7XHJcblx0fVxyXG5cclxuXHQubGVmdC10ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC5hdmF0ZXIge1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTBycHg7XHJcblx0XHRib3JkZXItY29sb3I6ICNmZmY7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiA0cnB4O1xyXG5cdFx0d2lkdGg6IDEwMHJweDtcclxuXHRcdGhlaWdodDogMTAwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNvdmVyLXZpZXctcmlnaHQge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAxNjBycHg7XHJcblx0XHRyaWdodDogMjBycHg7XHJcblx0XHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ1MjREOyAqL1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtUExVUy1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ei1pbmRleDogOTk5OTtcclxuXHR9XHJcblxyXG5cdC5yaWdodC10ZXh0LWF2YXRlciB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0dG9wOiA4MHJweDtcclxuXHRcdGxlZnQ6IDMwcnB4O1xyXG5cdFx0aGVpZ2h0OiA0MHJweDtcclxuXHRcdHdpZHRoOiA0MHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNERDUyNEQ7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0MHJweDtcclxuXHRcdHotaW5kZXg6IDk5OTtcclxuXHR9XHJcblxyXG5cdC5hdmF0ZXItaWNvbiB7XHJcblx0XHRoZWlnaHQ6IDQwcnB4O1xyXG5cdFx0d2lkdGg6IDQwcnB4O1xyXG5cclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0RENTI0RDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDMwcnB4O1xyXG5cdFx0dG9wOiAtMjBycHg7XHJcblx0fVxyXG5cclxuXHQucmlnaHQtdGV4dCB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA1MHJweDtcclxuXHRcdGhlaWdodDogNDBycHg7XHJcblx0fVxyXG5cclxuXHQuaW1nIHtcclxuXHRcdGhlaWdodDogNzRycHg7XHJcblx0XHR3aWR0aDogNzRycHg7XHJcblx0XHRvcGFjaXR5OiAwLjk7XHJcblx0XHRtYXJnaW4tbGVmdDogMTJycHg7XHJcblx0fVxyXG5cclxuXHQucGFnZSB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///151\n");

/***/ }),
/* 152 */
/*!*******************************************************************************************************************************************!*\
  !*** D:/hbuilder-workspace/YzKitchen/pages/videoPage/video-page.nvue?vue&type=style&index=0&id=02fd4aaf&scoped=true&lang=css&mpType=page ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_page_nvue_vue_type_style_index_0_id_02fd4aaf_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../../../安装包大全/HBuilderX.3.5.2.20220719-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video-page.nvue?vue&type=style&index=0&id=02fd4aaf&scoped=true&lang=css&mpType=page */ 153);
/* harmony import */ var _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_page_nvue_vue_type_style_index_0_id_02fd4aaf_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_page_nvue_vue_type_style_index_0_id_02fd4aaf_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_page_nvue_vue_type_style_index_0_id_02fd4aaf_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_page_nvue_vue_type_style_index_0_id_02fd4aaf_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_3_5_2_20220719_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_page_nvue_vue_type_style_index_0_id_02fd4aaf_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 153 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/hbuilder-workspace/YzKitchen/pages/videoPage/video-page.nvue?vue&type=style&index=0&id=02fd4aaf&scoped=true&lang=css&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "swiper": {
    "flex": 1,
    "backgroundColor": "#000000"
  },
  "swiper-item": {
    "flex": 1
  },
  "video": {
    "flex": 1
  },
  "video-box": {
    "flex": 1,
    "width": "750rpx"
  },
  "cover-view-center": {
    "position": "absolute",
    "justifyContent": "center",
    "alignItems": "center",
    "opacity": 0.1,
    "zIndex": 999
  },
  "cover-view-left": {
    "position": "absolute",
    "marginLeft": "10rpx",
    "width": "500rpx",
    "bottom": "120rpx",
    "zIndex": 9999,
    "fontSize": "32rpx",
    "color": "#FFFFFF"
  },
  "left-view": {
    "marginBottom": "20rpx"
  },
  "left-text": {
    "fontSize": "32rpx",
    "color": "#FFFFFF"
  },
  "avater": {
    "borderRadius": "50rpx",
    "borderColor": "#ffffff",
    "borderStyle": "solid",
    "borderWidth": "4rpx",
    "width": "100rpx",
    "height": "100rpx"
  },
  "cover-view-right": {
    "position": "absolute",
    "bottom": "160rpx",
    "right": "20rpx",
    "zIndex": 9999
  },
  "right-text-avater": {
    "position": "absolute",
    "fontSize": "28rpx",
    "top": "80rpx",
    "left": "30rpx",
    "height": "40rpx",
    "width": "40rpx",
    "backgroundColor": "#DD524D",
    "color": "#FFFFFF",
    "borderRadius": 50,
    "textAlign": "center",
    "lineHeight": "40rpx",
    "zIndex": 999
  },
  "avater-icon": {
    "height": "40rpx",
    "width": "40rpx",
    "color": "#ffffff",
    "backgroundColor": "#DD524D",
    "borderRadius": 50,
    "position": "absolute",
    "left": "30rpx",
    "top": "-20rpx"
  },
  "right-text": {
    "textAlign": "center",
    "fontSize": "28rpx",
    "color": "#FFFFFF",
    "marginBottom": "50rpx",
    "height": "40rpx"
  },
  "img": {
    "height": "74rpx",
    "width": "74rpx",
    "opacity": 0.9,
    "marginLeft": "12rpx"
  },
  "page": {
    "flex": 1
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);