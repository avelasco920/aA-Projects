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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__ (1)

window.$l = (selector) => {
  if (typeof selector === 'string') {
    let nodes = Array.from(document.querySelectorAll(selector));
    return new DOMNodeCollection(nodes);
  } else if (selector instanceof HTMLElement) {
    return new DOMNodeCollection([selector]);
  }
}



/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }
  
  html(arg) {
    if (arg) {
      this.nodes.forEach(function(node) {
        node.innerHTML = arg;
      });
    } else {
      return this.nodes[0].innerHTML;
    }
  }
  
  empty() {
    this.html("");
  }
  
  append(argument) {
    if (argument instanceof HTMLElement) {
      this.nodes.forEach(function(node) {
        node.appendChild(argument);
      });
    } else if (typeof argument === 'string') {
      this.nodes.forEach(function(node) {
        node.innerHTML += argument;
      });
    } else {
      this.nodes.forEach(function(node) {
        argument.nodes.forEach(function(elToAppend) {
          node.append(elToAppend.cloneNode(true));
        });
      }); 
    }
  }
  
  children() {
    let allChildren = [];
    this.nodes.forEach(function(node) {
      allChildren = allChildren.concat(node.children);
    });
    return new DOMNodeCollection(allChildren);
  }
  
  parent() {
    let allParents = [];
    this.nodes.forEach(function({parentNode}){
      debugger;
      if (!parentNode.visited) {
        parentNode.visited = true;
        allParents = allParents.concat(parentNode);
      }
    });
    allParents.forEach(function(node){
      node.visited = null;
    })
    return new DOMNodeCollection(allParents);
  }
  
  find(selector) {
    if (typeof selector === 'string') {
      let nodes = Array.from(document.querySelectorAll(selector));
      return new DOMNodeCollection(nodes);
    } else if (selector instanceof HTMLElement) {
      return new DOMNodeCollection([selector]);
    }
  }
  
  remove(selector) {
    this.each(node => node.parentNode.removeChild(node));
  }
  
}

module.exports = DOMNodeCollection;

/***/ })
/******/ ]);