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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#canvas {\n  background-color: #66BCF9;\n  outline: black 1px solid;\n  cursor: none;\n  z-index: 1;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/cross.js":
/*!**********************!*\
  !*** ./src/cross.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Cross {
  constructor(c, scoreboard) {
    this.c = c;
    this.posX = 0;
    this.posY = 0;
    this.radius = 20;
    this.shots = scoreboard.shots;
    this.clickPosX = 1000;
    this.clickPosY = 1000;

    window.addEventListener('mousemove', event => {
      this.clickPosX = 1000;
      this.clickPosY = 1000;
      var bounds = this.c.canvas.getBoundingClientRect();
      this.posX = event.clientX - bounds.left;
      this.posY = event.clientY - bounds.top;
      this.update();
    });

    window.addEventListener('click', () => {
      this.shots.count--;
      this.clickCount++;
      this.clickPosX = this.posX;
      this.clickPosY = this.posY;
    });
  }

  render() {
    this.c.beginPath();
    this.c.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    this.c.stroke();
    this.c.strokeStyle = "red";

    this.c.beginPath();
    this.c.fillStyle = "red";
    this.c.arc(this.posX, this.posY, 1, 0, 2 * Math.PI);
    this.c.fill();

    this.c.beginPath();
    this.c.moveTo(this.posX + 5, this.posY);
    this.c.lineTo(this.posX + 25, this.posY);
    this.c.moveTo(this.posX - 5, this.posY);
    this.c.lineTo(this.posX - 25, this.posY);

    this.c.moveTo(this.posX, this.posY + 5);
    this.c.lineTo(this.posX, this.posY + 25);
    this.c.moveTo(this.posX, this.posY - 5);
    this.c.lineTo(this.posX, this.posY - 25);
    this.c.stroke();
  }

  update() {
    this.c.clearRect(0, 0, this.c.canvas.width, this.c.canvas.height);
  }

}

module.exports = Cross;

/***/ }),

/***/ "./src/dog.js":
/*!********************!*\
  !*** ./src/dog.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Dog {
  constructor(c) {
    this.c = c;
    this.currPosX = 0;
    this.pauseCount = 0;
    this.pauseCount2 = 0;

    this.hitImage = new Image();
    this.hitImage.onload = () => this.hitImageReady = true;
    this.hitImage.src = "/Users/grady/Desktop/duckhunt/images/dog_single_duck.png";

    this.missFrameIndex = 0;
    this.missTickCount = 0;
    this.missTicksPerFrame = 4;

    this.missImage = new Image();
    this.missImage.onload = () => this.missImageReady = true;
    this.missImage.src = "/Users/grady/Desktop/duckhunt/images/dog_laugh.png";

    this.sniffFrameIndex = 0;
    this.sniffTickCount = 0;
    this.sniffTicksPerFrame = 10;

    this.sniffImage = new Image();
    this.sniffImage.onload = () => this.sniffImageReady = true;
    this.sniffImage.src = "";

    this.walkFrameIndex = 0;
    this.walkTickCount = 0;
    this.walkTicksPerFrame = 6;

    this.walkImage = new Image();
    this.walkImage.onload = () => this.walkImageReady = true;
    this.walkImage.src = "/Users/grady/Desktop/duckhunt/images/dog_walk.png";

    this.jumpFrameIndex = 0;
    this.jumpTickCount = 0;
    this.jumpTicksPerFrame = 10;

    this.jumpImage = new Image();
    this.jumpImage.onload = () => this.jumpImageReady = true;
    this.jumpImage.src = "";
  }

  renderSniff() {
    this.c.drawImage(
      this.sniffImage, 
      this.sniffFrameIndex * 120 / 2, 0,
      60, 60, 
      this.currPosX, 275, 
      125, 125
    );
  }

  renderHit() {
    this.c.drawImage(
      this.hitImage, 
      0, 0,
      60, 60, 
      280, 238, 
      111, 111
    );
  }

  renderMiss() {
    this.c.drawImage(
      this.missImage, 
      this.missFrameIndex * 120 / 2, 0,
      60, 60, 
      204, 238, 
      111, 111
    );
  }

  renderWalk() {
    this.c.drawImage(
      this.walkImage, 
      this.walkFrameIndex * 180 / 3, 0,
      60, 60, 
      this.currPosX, 275, 
      125, 125
    );
  }

  renderJump() {
    this.c.drawImage(
      this.jumpImage, 
      this.jumpFrameIndex * 180 / 3, 0,
      60, 60, 
      this.currPosX, 275, 
      125, 125
    );
  }

  update() {
    this.missTickCount++;
    
    if (this.missTickCount > this.missTicksPerFrame) {
      this.missTickCount = 0;
      this.missFrameIndex++;
    }
    if (this.missFrameIndex > 1) {
      this.missFrameIndex = 0;
    }
    this.sniffTickCount++;
    if (this.sniffTickCount > this.sniffTicksPerFrame) {
      this.sniffTickCount = 0;
      this.sniffFrameIndex++;
    }
    if (this.sniffFrameIndex > 1) {
      this.sniffFrameIndex = 0;
    }
    this.walkTickCount++;
    if (this.walkTickCount > this.walkTicksPerFrame) {
      this.walkTickCount = 0;
      this.walkFrameIndex++;
    }
    if (this.walkFrameIndex > 2) {
      this.walkFrameIndex = 0;
    }
    this.jumpTickCount++;
    if (this.jumpTickCount > this.jumpTicksPerFrame) {
      this.jumpTickCount = 0;
      this.jumpFrameIndex++;
    }
    if (this.jumpFrameIndex > 2) {
      this.jumpFrameIndex = 0;
    }

    if (this.currPosX < 60) {
      this.currPosX++;
    }

    if (this.currPosX >= 60) {
      this.sniffImage.src = "/Users/grady/Desktop/duckhunt/images/dog_sniff.png";
      this.walkImage.src = "";
      this.pauseCount++;
    }

    if (this.pauseCount > 70 && this.currPosX < 130) {
      this.walkImage.src = "/Users/grady/Desktop/duckhunt/images/dog_walk.png";
      this.sniffImage.src = "";
      this.currPosX++;
    }

    if (this.currPosX >= 130) {
      this.sniffImage.src = "/Users/grady/Desktop/duckhunt/images/dog_sniff.png";
      this.walkImage.src = "";
      this.pauseCount2++;
    }

    if (this.pauseCount2 > 70) {
      this.sniffImage.src = "";
      this.jumpImage.src = "/Users/grady/Desktop/duckhunt/images/dog_jump.png";
      this.pauseCount2++;
    }

    // if (this.updateCount > 300) {
    //   this.walkImage.src = "/Users/grady/Desktop/duckhunt/images/dog_walk.png";
    //   this.sniffImage.src = "";
    //   this.currPosX++;
    // }

    // if (this.currPosX )
  }
}

module.exports = Dog;

/***/ }),

/***/ "./src/duck.js":
/*!*********************!*\
  !*** ./src/duck.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Duck {
  constructor(c, cross, roundCount) {
    this.c = c;
    this.cross = cross;
    this.posX = Math.random() * 512;
    this.posY = 200;
    this.velX = 1 * roundCount;
    this.velY = 1 * roundCount;
    this.roundCount = roundCount;
    
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 4;
    this.dirCount = 0;
    
    this.duckImage = new Image();
    this.duckImage.onload = () => this.duckImageReady = true;
    this.duckImage.src = "";
    this.direction = this.changeDir();
    
    this.hit = false;
    this.aniOver = false;
  }

  render() {
    if (!this.duckImageReady) return;
    // if (this.isDuckFallen()) {

    // }
    this.c.drawImage(
      this.duckImage, 
      this.frameIndex * 120 / 3, 0, 
      40, 40, 
      this.posX, this.posY, 
      70, 70
    );
  }

  update() {
    // change direction after 10 counts
    this.dirCount++; 
    if (
      this.dirCount > 10 &&
      this.direction !== "fall"
      ) {
        this.direction = this.changeDir();
        this.dirCount = 0;
    }
  // change position based on random direction
    if (this.direction === "fall") this.fallDown();
    if (this.direction === "left") this.left();
    if (this.direction === "right") this.right();
    if (this.direction === "top-left") this.topLeft();
    if (this.direction === "top-right") this.topRight();
    if (this.direction === "bot-left") this.bottomLeft();
    if (this.direction === "bot-right") this.bottomRight();
    // increase frame index every tickCount number of updates.
    // when frame index hits 3, it will reset back to the first frame.
    this.tickCount++;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      this.frameIndex++;
    }
    if (this.frameIndex > 2) {
      this.frameIndex = 0;
    }
  }

  changeDir() {
    if (this.collision()) {
      this.duckImage.src = "/Users/grady/Desktop/duckhunt/images/fall_down.png";
      this.hit = true;
      this.direction = "fall";
      return "fall";
    }
    if (this.direction === "escape") return "escape";

    let num = Math.random();
    if ( num < 0.1667 ) {
      this.duckImage.src = "/Users/grady/Desktop/duckhunt/images/fly_left.png";
      return "left";
    }
    if ( num > 0.1667 && num < 0.3333 ) {
      this.duckImage.src = "/Users/grady/Desktop/duckhunt/images/fly_right.png";
      return "right";
    }
    if ( num > 0.3333 && num < 0.50 ) {
      this.duckImage.src = "/Users/grady/Desktop/duckhunt/images/fly_top_left.png";
      return "top-left";
    }
    if ( num > 0.50 && num < 0.667 ) {
      this.duckImage.src = "/Users/grady/Desktop/duckhunt/images/fly_top_right.png";
      return "top-right";
    }
    if ( num > 0.667 && num < 0.833 ) {
      this.duckImage.src = "/Users/grady/Desktop/duckhunt/images/fly_top_left.png";
      return "bot-left";
    }
    if ( num > 0.833 && num < 1 ) {
      this.duckImage.src = "/Users/grady/Desktop/duckhunt/images/fly_top_right.png";
      return "bot-right";
    }
  }

  left() {
    this.posX -= this.velX; 
  }

  right() { 
    this.posX += this.velX; 
  }

  flyAway() { 
    this.posY += this.velY; 
  }

  fallDown() { 
    this.posY += this.velY; 
  }

  topLeft() {
    this.posX -= this.velX;
    this.posY -= this.velY;
  }

  topRight() {
    this.posX += this.velX;
    this.posY -= this.velY;
  }

  bottomLeft() {
    this.posX -= this.velX;
    this.posY += this.velY;
  }

  bottomRight() {
    this.posX += this.velX;
    this.posY += this.velY;
  }

  collision() {
    return (
      this.cross.clickPosX > this.posX && 
      this.cross.clickPosX < this.posX + 40 &&
      this.cross.clickPosY > this.posY &&
      this.cross.clickPosY < this.posY + 40
    );
  }

  isDuckFallen() {
    if (this.posY > 250) {
      this.aniOver = true;
      return true;
    }
    return false;
  }
}

module.exports = Duck;

/***/ }),

/***/ "./src/ducks.js":
/*!**********************!*\
  !*** ./src/ducks.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Ducks {
  constructor(c) {
    this.c = c;
    this.arr = [0,0,0,0,0,0,0,0,0,0];

    this.duckImage = new Image();
    this.duckImage.onload = () => this.duckImageReady = true;
    this.duckImage.src = "/Users/grady/Desktop/duckhunt/images/missed_duck.png";

    this.hitDuckImage = new Image();
    this.hitDuckImage.onload = () => this.hitDuckImageReady = true;
    this.hitDuckImage.src = "/Users/grady/Desktop/duckhunt/images/hit_duck.png";
  }
  
  render() {
    if (!this.duckImageReady) return;
    if (!this.hitDuckImageReady) return;

    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === 0) {
        this.c.drawImage(
          this.duckImage,
          0, 0, 25, 25,
          175+ ((i+1)*16), 415,
          16, 16
        );
      }
      if (this.arr[i] === 1) {
        this.c.drawImage(
          this.hitDuckImage,
          0, 0, 25, 25,
          175 + ((i+1)*16), 415,
          16, 16
        );
      }
    }
  }

  update() {
    
  }
}

module.exports = Ducks;

/***/ }),

/***/ "./src/environment.js":
/*!****************************!*\
  !*** ./src/environment.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {


class Environment {
  constructor(c) {
    this.c = c;
    this.image = new Image();
    this.image.onload = () => {
      this.imageReady = true;
    };
    this.image.src = "../images/duckhunt-static-1.png";
    this.render = this.render.bind(this);
  }

  render() {
    if (!this.imageReady) return;
    this.c.drawImage(this.image, 0, 0);
  }
}

module.exports = Environment; 

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Round = __webpack_require__(/*! ./round.js */ "./src/round.js"); 
const Cross = __webpack_require__(/*! ./cross.js */ "./src/cross.js");
const Scoreboard = __webpack_require__(/*! ./scoreboard.js */ "./src/scoreboard.js");
const Environment = __webpack_require__(/*! ./environment.js */ "./src/environment.js");
const GameOverScreen = __webpack_require__(/*! ./game_over_screen.js */ "./src/game_over_screen.js");
const Ducks = __webpack_require__(/*! ./ducks */ "./src/ducks.js");
const Dog = __webpack_require__(/*! ./dog.js */ "./src/dog.js");

class Game {
  constructor(c) {
    this.c = c;
    this.roundCount = 1;
    
    this.dog = new Dog(this.c);
    this.scoreboard = new Scoreboard(this.c);
    this.environment = new Environment(this.c);
    this.cross = new Cross(this.c, this.scoreboard);
    this.round = new Round(this.c, this.roundCount, this.cross, this.scoreboard);
    this.gameOverScreen = new GameOverScreen(this.c);
    this.loop = this.loop.bind(this);
    this.gameOver = false;
  }

  loop() {
    this.update();
    this.render();
    requestAnimationFrame(this.loop);
  }

  update() {
    this.isGameOver();
    this.dog.update();
    this.round.update();
    this.scoreboard.update();
    this.cross.update();
    if (this.round.roundOver) {
      this.roundCount++;
      this.newScoreboard();
      this.newRound();
    }
  }
  
  render() {
    this.round.render();
    this.environment.render();
    this.dog.renderWalk();
    this.dog.renderSniff();
    this.dog.renderJump();
    this.scoreboard.render();
    if (this.gameOver) {
      this.gameOverScreen.render();
    }
    this.cross.render();
  }
  
  newRound() {
    this.round = new Round(this.c, this.roundCount, this.cross, this.scoreboard);
  }

  newScoreboard() {
    this.scoreboard.ducks = new Ducks(this.c);
  }
  
  isGameOver() {
    let ducksHit = this.scoreboard.ducks.arr.filter(el => el === 1).length;
    if (ducksHit <= 5 && this.round.waveCount === 10) {
      this.gameOver = true;
    } 
  }
  
  // start() {
  //   while (!this.gameOver) {
  //     this.newRound();
  //     this.round.play();
  //   }
  // }
}

module.exports = Game;

/***/ }),

/***/ "./src/game_over_screen.js":
/*!*********************************!*\
  !*** ./src/game_over_screen.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

class GameOverScreen {
  constructor(c) {
    this.c = c;
  }

  render() {
    this.c.fillText("GAME OVER", 200, 0); 
    this.c.fillStyle = 'black';
    this.c.fillRect(132, 100, 250, 100);

    this.c.font = "20.5px Pixel Emulator";
    this.c.fillStyle = "white";
    this.c.textAlign = "center"; 
    this.c.fillText('game over', 256, 142);
    this.c.fillText('play again', 256, 170);
  }
}

module.exports = GameOverScreen;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
// import _ from 'lodash';

const Game = __webpack_require__(/*! ./game.js */ "./src/game.js");

document.addEventListener("DOMContentLoaded", (event) => {
  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');

  let game = new Game(c);
  game.loop();
});

console.log("webpack is working!");


/***/ }),

/***/ "./src/round.js":
/*!**********************!*\
  !*** ./src/round.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Wave = __webpack_require__(/*! ./wave.js */ "./src/wave.js");
const Ducks = __webpack_require__(/*! ./ducks.js */ "./src/ducks.js");

class Round {
  constructor(c, roundCount, cross, scoreboard) {
    this.c = c;
    this.cross = cross;
    this.roundCount = roundCount;
    this.scoreboard = scoreboard;
    this.waveCount = 0;

    this.wave = new Wave(this.c, this.cross, this.scoreboard, this.roundCount, this.waveCount);

    this.roundOver = false;
  }

  start() {
    while (!this.roundOver) {
      
    }
  }

  render() {
    this.wave.render();
  }
  
  update() {
    this.wave.update();
    this.isRoundOver();

    if (this.wave.waveOver) {
      this.waveCount++;
      this.resetShots();
      this.newWave();
    }
  }

  newWave() {
    this.wave = new Wave(this.c, this.cross, this.scoreboard, this.roundCount, this.waveCount);
  }

  isRoundOver() {
    if (this.waveCount === 10) {
      this.roundOver = true;
    }
  }
    
  resetShots() {
    this.scoreboard.shots.count = 3;
  }
}

module.exports = Round;

/***/ }),

/***/ "./src/score.js":
/*!**********************!*\
  !*** ./src/score.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Score {
  constructor(c) {
    this.c = c;
    this.points = 0;
  }

  render() {
    this.c.font = "20.5px Pixel Emulator";
    this.c.fillStyle = "white";
    this.c.textAlign = "end"; 
    this.c.fillText(`${this.points}`, 480,430);
  }
}

module.exports = Score;

/***/ }),

/***/ "./src/scoreboard.js":
/*!***************************!*\
  !*** ./src/scoreboard.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Score = __webpack_require__(/*! ./score.js */ "./src/score.js");
const Shots = __webpack_require__(/*! ./shots */ "./src/shots.js");
const Ducks = __webpack_require__(/*! ./ducks */ "./src/ducks.js");

class Scoreboard {
  constructor(c) {
    this.c = c;
    this.score = new Score(this.c);
    this.shots = new Shots(this.c);
    this.ducks = new Ducks(this.c);
  }

  render() {
    this.score.render();
    this.shots.render();
    this.ducks.render();
  }

  update() {
    this.shots.update();
    this.ducks.update();
  }
}

module.exports = Scoreboard;

/***/ }),

/***/ "./src/shots.js":
/*!**********************!*\
  !*** ./src/shots.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Shots {
  constructor(c) {
    this.c = c;
    this.count = 3;

    this.shotImage = new Image();
    this.shotImage.onload = () => this.imageReady = true;
    this.shotImage.src = "/Users/grady/Desktop/duckhunt/images/shot.png";
  }

  render() {
    for (let i = 0; i < this.count; i++) {
      this.c.drawImage(this.shotImage,
        0, 0,
        25, 25,
        31 + (i+1)*16, 411,
        19, 19
      );
    }
  }

  update() {

  }
}

module.exports = Shots;

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/wave.js":
/*!*********************!*\
  !*** ./src/wave.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Duck = __webpack_require__(/*! ./duck.js */ "./src/duck.js");
const Dog = __webpack_require__(/*! ./dog.js */ "./src/dog.js");

class Wave {
  constructor(c, cross, scoreboard, roundCount, waveCount) {
    this.c = c;
    this.cross = cross;
    this.scoreboard = scoreboard;
    this.roundCount = roundCount;
    this.waveCount = waveCount;
    this.waveOver = false;
    this.duck = new Duck(this.c, this.cross, this.roundCount);
    this.dog = new Dog(this.c);
  }

  render() {
    this.duck.render();
    this.dog.renderHit();
    this.dog.renderMiss();
  }

  update() {
    this.duck.update();
    this.dog.update();
    this.isWaveOver();
  }

  updateDucks() {
    this.scoreboard.ducks.arr[this.waveCount] = 1;
  }

  updateScore() {
    if (this.roundCount === 1) {
      this.scoreboard.score.points += 1000;
    } else {
      this.scoreboard.score.points += 1000 + 500 * (this.roundCount - 1);
    }
  }

  duckHit() {
    if (this.duck.hit) {
      this.updateDucks();
      this.waveCount = this.waveCount + 1;
      this.updateScore();
      return true;
    }
    return false;
  }

  noShots() {
    return this.scoreboard.shots.count === 0;
  }

  isWaveOver() {
    if (this.duckHit() || this.noShots()) {
      this.waveOver = true;
    }
  }
  
  resetShots() {
    this.scoreboard.shots.count = 3;
  }
}
module.exports = Wave;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jcm9zcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9kdWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9kdWNrcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfb3Zlcl9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njb3JlYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nob3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/OGYzNCIsIndlYnBhY2s6Ly8vLi9zcmMvd2F2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdE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QSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1Qjs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCOzs7Ozs7Ozs7OztBQ3ZLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQjtBQUNBOztBQUVBLFc7QUFDQSwyQjtBQUNBOztBQUVBLGE7QUFDQSwyQjtBQUNBOztBQUVBLGM7QUFDQSwyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQjs7Ozs7Ozs7Ozs7QUM5SkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHVCOzs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Qjs7Ozs7Ozs7Ozs7QUNsQkEsY0FBYyxtQkFBTyxDQUFDLGtDQUFZLEU7QUFDbEMsY0FBYyxtQkFBTyxDQUFDLGtDQUFZO0FBQ2xDLG1CQUFtQixtQkFBTyxDQUFDLDRDQUFpQjtBQUM1QyxvQkFBb0IsbUJBQU8sQ0FBQyw4Q0FBa0I7QUFDOUMsdUJBQXVCLG1CQUFPLENBQUMsd0RBQXVCO0FBQ3RELGNBQWMsbUJBQU8sQ0FBQywrQkFBUztBQUMvQixZQUFZLG1CQUFPLENBQUMsOEJBQVU7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQjs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0M7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUNxQjtBQUNyQixhQUFhLG1CQUFPLENBQUMsZ0NBQVc7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7O0FDWkEsYUFBYSxtQkFBTyxDQUFDLGdDQUFXO0FBQ2hDLGNBQWMsbUJBQU8sQ0FBQyxrQ0FBWTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUI7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkI7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBOztBQUVBLHVCOzs7Ozs7Ozs7OztBQ2RBLGNBQWMsbUJBQU8sQ0FBQyxrQ0FBWTtBQUNsQyxjQUFjLG1CQUFPLENBQUMsK0JBQVM7QUFDL0IsY0FBYyxtQkFBTyxDQUFDLCtCQUFTOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEI7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsdUI7Ozs7Ozs7Ozs7OztBQ3pCQSxjQUFjLG1CQUFPLENBQUMsa0hBQXNEOztBQUU1RSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsbUdBQWdEOztBQUVyRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ25CZixhQUFhLG1CQUFPLENBQUMsZ0NBQVc7QUFDaEMsWUFBWSxtQkFBTyxDQUFDLDhCQUFVOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI2NhbnZhcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZCQ0Y5O1xcbiAgb3V0bGluZTogYmxhY2sgMXB4IHNvbGlkO1xcbiAgY3Vyc29yOiBub25lO1xcbiAgei1pbmRleDogMTtcXG59XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImNsYXNzIENyb3NzIHtcbiAgY29uc3RydWN0b3IoYywgc2NvcmVib2FyZCkge1xuICAgIHRoaXMuYyA9IGM7XG4gICAgdGhpcy5wb3NYID0gMDtcbiAgICB0aGlzLnBvc1kgPSAwO1xuICAgIHRoaXMucmFkaXVzID0gMjA7XG4gICAgdGhpcy5zaG90cyA9IHNjb3JlYm9hcmQuc2hvdHM7XG4gICAgdGhpcy5jbGlja1Bvc1ggPSAxMDAwO1xuICAgIHRoaXMuY2xpY2tQb3NZID0gMTAwMDtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBldmVudCA9PiB7XG4gICAgICB0aGlzLmNsaWNrUG9zWCA9IDEwMDA7XG4gICAgICB0aGlzLmNsaWNrUG9zWSA9IDEwMDA7XG4gICAgICB2YXIgYm91bmRzID0gdGhpcy5jLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMucG9zWCA9IGV2ZW50LmNsaWVudFggLSBib3VuZHMubGVmdDtcbiAgICAgIHRoaXMucG9zWSA9IGV2ZW50LmNsaWVudFkgLSBib3VuZHMudG9wO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvdHMuY291bnQtLTtcbiAgICAgIHRoaXMuY2xpY2tDb3VudCsrO1xuICAgICAgdGhpcy5jbGlja1Bvc1ggPSB0aGlzLnBvc1g7XG4gICAgICB0aGlzLmNsaWNrUG9zWSA9IHRoaXMucG9zWTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmMuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jLmFyYyh0aGlzLnBvc1gsIHRoaXMucG9zWSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICB0aGlzLmMuc3Ryb2tlKCk7XG4gICAgdGhpcy5jLnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcblxuICAgIHRoaXMuYy5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmMuZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICB0aGlzLmMuYXJjKHRoaXMucG9zWCwgdGhpcy5wb3NZLCAxLCAwLCAyICogTWF0aC5QSSk7XG4gICAgdGhpcy5jLmZpbGwoKTtcblxuICAgIHRoaXMuYy5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmMubW92ZVRvKHRoaXMucG9zWCArIDUsIHRoaXMucG9zWSk7XG4gICAgdGhpcy5jLmxpbmVUbyh0aGlzLnBvc1ggKyAyNSwgdGhpcy5wb3NZKTtcbiAgICB0aGlzLmMubW92ZVRvKHRoaXMucG9zWCAtIDUsIHRoaXMucG9zWSk7XG4gICAgdGhpcy5jLmxpbmVUbyh0aGlzLnBvc1ggLSAyNSwgdGhpcy5wb3NZKTtcblxuICAgIHRoaXMuYy5tb3ZlVG8odGhpcy5wb3NYLCB0aGlzLnBvc1kgKyA1KTtcbiAgICB0aGlzLmMubGluZVRvKHRoaXMucG9zWCwgdGhpcy5wb3NZICsgMjUpO1xuICAgIHRoaXMuYy5tb3ZlVG8odGhpcy5wb3NYLCB0aGlzLnBvc1kgLSA1KTtcbiAgICB0aGlzLmMubGluZVRvKHRoaXMucG9zWCwgdGhpcy5wb3NZIC0gMjUpO1xuICAgIHRoaXMuYy5zdHJva2UoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmMuY2xlYXJSZWN0KDAsIDAsIHRoaXMuYy5jYW52YXMud2lkdGgsIHRoaXMuYy5jYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3Jvc3M7IiwiY2xhc3MgRG9nIHtcbiAgY29uc3RydWN0b3IoYykge1xuICAgIHRoaXMuYyA9IGM7XG4gICAgdGhpcy5jdXJyUG9zWCA9IDA7XG4gICAgdGhpcy5wYXVzZUNvdW50ID0gMDtcbiAgICB0aGlzLnBhdXNlQ291bnQyID0gMDtcblxuICAgIHRoaXMuaGl0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmhpdEltYWdlLm9ubG9hZCA9ICgpID0+IHRoaXMuaGl0SW1hZ2VSZWFkeSA9IHRydWU7XG4gICAgdGhpcy5oaXRJbWFnZS5zcmMgPSBcIi9Vc2Vycy9ncmFkeS9EZXNrdG9wL2R1Y2todW50L2ltYWdlcy9kb2dfc2luZ2xlX2R1Y2sucG5nXCI7XG5cbiAgICB0aGlzLm1pc3NGcmFtZUluZGV4ID0gMDtcbiAgICB0aGlzLm1pc3NUaWNrQ291bnQgPSAwO1xuICAgIHRoaXMubWlzc1RpY2tzUGVyRnJhbWUgPSA0O1xuXG4gICAgdGhpcy5taXNzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLm1pc3NJbWFnZS5vbmxvYWQgPSAoKSA9PiB0aGlzLm1pc3NJbWFnZVJlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLm1pc3NJbWFnZS5zcmMgPSBcIi9Vc2Vycy9ncmFkeS9EZXNrdG9wL2R1Y2todW50L2ltYWdlcy9kb2dfbGF1Z2gucG5nXCI7XG5cbiAgICB0aGlzLnNuaWZmRnJhbWVJbmRleCA9IDA7XG4gICAgdGhpcy5zbmlmZlRpY2tDb3VudCA9IDA7XG4gICAgdGhpcy5zbmlmZlRpY2tzUGVyRnJhbWUgPSAxMDtcblxuICAgIHRoaXMuc25pZmZJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuc25pZmZJbWFnZS5vbmxvYWQgPSAoKSA9PiB0aGlzLnNuaWZmSW1hZ2VSZWFkeSA9IHRydWU7XG4gICAgdGhpcy5zbmlmZkltYWdlLnNyYyA9IFwiXCI7XG5cbiAgICB0aGlzLndhbGtGcmFtZUluZGV4ID0gMDtcbiAgICB0aGlzLndhbGtUaWNrQ291bnQgPSAwO1xuICAgIHRoaXMud2Fsa1RpY2tzUGVyRnJhbWUgPSA2O1xuXG4gICAgdGhpcy53YWxrSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLndhbGtJbWFnZS5vbmxvYWQgPSAoKSA9PiB0aGlzLndhbGtJbWFnZVJlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLndhbGtJbWFnZS5zcmMgPSBcIi9Vc2Vycy9ncmFkeS9EZXNrdG9wL2R1Y2todW50L2ltYWdlcy9kb2dfd2Fsay5wbmdcIjtcblxuICAgIHRoaXMuanVtcEZyYW1lSW5kZXggPSAwO1xuICAgIHRoaXMuanVtcFRpY2tDb3VudCA9IDA7XG4gICAgdGhpcy5qdW1wVGlja3NQZXJGcmFtZSA9IDEwO1xuXG4gICAgdGhpcy5qdW1wSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmp1bXBJbWFnZS5vbmxvYWQgPSAoKSA9PiB0aGlzLmp1bXBJbWFnZVJlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLmp1bXBJbWFnZS5zcmMgPSBcIlwiO1xuICB9XG5cbiAgcmVuZGVyU25pZmYoKSB7XG4gICAgdGhpcy5jLmRyYXdJbWFnZShcbiAgICAgIHRoaXMuc25pZmZJbWFnZSwgXG4gICAgICB0aGlzLnNuaWZmRnJhbWVJbmRleCAqIDEyMCAvIDIsIDAsXG4gICAgICA2MCwgNjAsIFxuICAgICAgdGhpcy5jdXJyUG9zWCwgMjc1LCBcbiAgICAgIDEyNSwgMTI1XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckhpdCgpIHtcbiAgICB0aGlzLmMuZHJhd0ltYWdlKFxuICAgICAgdGhpcy5oaXRJbWFnZSwgXG4gICAgICAwLCAwLFxuICAgICAgNjAsIDYwLCBcbiAgICAgIDI4MCwgMjM4LCBcbiAgICAgIDExMSwgMTExXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlck1pc3MoKSB7XG4gICAgdGhpcy5jLmRyYXdJbWFnZShcbiAgICAgIHRoaXMubWlzc0ltYWdlLCBcbiAgICAgIHRoaXMubWlzc0ZyYW1lSW5kZXggKiAxMjAgLyAyLCAwLFxuICAgICAgNjAsIDYwLCBcbiAgICAgIDIwNCwgMjM4LCBcbiAgICAgIDExMSwgMTExXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcldhbGsoKSB7XG4gICAgdGhpcy5jLmRyYXdJbWFnZShcbiAgICAgIHRoaXMud2Fsa0ltYWdlLCBcbiAgICAgIHRoaXMud2Fsa0ZyYW1lSW5kZXggKiAxODAgLyAzLCAwLFxuICAgICAgNjAsIDYwLCBcbiAgICAgIHRoaXMuY3VyclBvc1gsIDI3NSwgXG4gICAgICAxMjUsIDEyNVxuICAgICk7XG4gIH1cblxuICByZW5kZXJKdW1wKCkge1xuICAgIHRoaXMuYy5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmp1bXBJbWFnZSwgXG4gICAgICB0aGlzLmp1bXBGcmFtZUluZGV4ICogMTgwIC8gMywgMCxcbiAgICAgIDYwLCA2MCwgXG4gICAgICB0aGlzLmN1cnJQb3NYLCAyNzUsIFxuICAgICAgMTI1LCAxMjVcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMubWlzc1RpY2tDb3VudCsrO1xuICAgIFxuICAgIGlmICh0aGlzLm1pc3NUaWNrQ291bnQgPiB0aGlzLm1pc3NUaWNrc1BlckZyYW1lKSB7XG4gICAgICB0aGlzLm1pc3NUaWNrQ291bnQgPSAwO1xuICAgICAgdGhpcy5taXNzRnJhbWVJbmRleCsrO1xuICAgIH1cbiAgICBpZiAodGhpcy5taXNzRnJhbWVJbmRleCA+IDEpIHtcbiAgICAgIHRoaXMubWlzc0ZyYW1lSW5kZXggPSAwO1xuICAgIH1cbiAgICB0aGlzLnNuaWZmVGlja0NvdW50Kys7XG4gICAgaWYgKHRoaXMuc25pZmZUaWNrQ291bnQgPiB0aGlzLnNuaWZmVGlja3NQZXJGcmFtZSkge1xuICAgICAgdGhpcy5zbmlmZlRpY2tDb3VudCA9IDA7XG4gICAgICB0aGlzLnNuaWZmRnJhbWVJbmRleCsrO1xuICAgIH1cbiAgICBpZiAodGhpcy5zbmlmZkZyYW1lSW5kZXggPiAxKSB7XG4gICAgICB0aGlzLnNuaWZmRnJhbWVJbmRleCA9IDA7XG4gICAgfVxuICAgIHRoaXMud2Fsa1RpY2tDb3VudCsrO1xuICAgIGlmICh0aGlzLndhbGtUaWNrQ291bnQgPiB0aGlzLndhbGtUaWNrc1BlckZyYW1lKSB7XG4gICAgICB0aGlzLndhbGtUaWNrQ291bnQgPSAwO1xuICAgICAgdGhpcy53YWxrRnJhbWVJbmRleCsrO1xuICAgIH1cbiAgICBpZiAodGhpcy53YWxrRnJhbWVJbmRleCA+IDIpIHtcbiAgICAgIHRoaXMud2Fsa0ZyYW1lSW5kZXggPSAwO1xuICAgIH1cbiAgICB0aGlzLmp1bXBUaWNrQ291bnQrKztcbiAgICBpZiAodGhpcy5qdW1wVGlja0NvdW50ID4gdGhpcy5qdW1wVGlja3NQZXJGcmFtZSkge1xuICAgICAgdGhpcy5qdW1wVGlja0NvdW50ID0gMDtcbiAgICAgIHRoaXMuanVtcEZyYW1lSW5kZXgrKztcbiAgICB9XG4gICAgaWYgKHRoaXMuanVtcEZyYW1lSW5kZXggPiAyKSB7XG4gICAgICB0aGlzLmp1bXBGcmFtZUluZGV4ID0gMDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jdXJyUG9zWCA8IDYwKSB7XG4gICAgICB0aGlzLmN1cnJQb3NYKys7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3VyclBvc1ggPj0gNjApIHtcbiAgICAgIHRoaXMuc25pZmZJbWFnZS5zcmMgPSBcIi9Vc2Vycy9ncmFkeS9EZXNrdG9wL2R1Y2todW50L2ltYWdlcy9kb2dfc25pZmYucG5nXCI7XG4gICAgICB0aGlzLndhbGtJbWFnZS5zcmMgPSBcIlwiO1xuICAgICAgdGhpcy5wYXVzZUNvdW50Kys7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGF1c2VDb3VudCA+IDcwICYmIHRoaXMuY3VyclBvc1ggPCAxMzApIHtcbiAgICAgIHRoaXMud2Fsa0ltYWdlLnNyYyA9IFwiL1VzZXJzL2dyYWR5L0Rlc2t0b3AvZHVja2h1bnQvaW1hZ2VzL2RvZ193YWxrLnBuZ1wiO1xuICAgICAgdGhpcy5zbmlmZkltYWdlLnNyYyA9IFwiXCI7XG4gICAgICB0aGlzLmN1cnJQb3NYKys7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3VyclBvc1ggPj0gMTMwKSB7XG4gICAgICB0aGlzLnNuaWZmSW1hZ2Uuc3JjID0gXCIvVXNlcnMvZ3JhZHkvRGVza3RvcC9kdWNraHVudC9pbWFnZXMvZG9nX3NuaWZmLnBuZ1wiO1xuICAgICAgdGhpcy53YWxrSW1hZ2Uuc3JjID0gXCJcIjtcbiAgICAgIHRoaXMucGF1c2VDb3VudDIrKztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYXVzZUNvdW50MiA+IDcwKSB7XG4gICAgICB0aGlzLnNuaWZmSW1hZ2Uuc3JjID0gXCJcIjtcbiAgICAgIHRoaXMuanVtcEltYWdlLnNyYyA9IFwiL1VzZXJzL2dyYWR5L0Rlc2t0b3AvZHVja2h1bnQvaW1hZ2VzL2RvZ19qdW1wLnBuZ1wiO1xuICAgICAgdGhpcy5wYXVzZUNvdW50MisrO1xuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLnVwZGF0ZUNvdW50ID4gMzAwKSB7XG4gICAgLy8gICB0aGlzLndhbGtJbWFnZS5zcmMgPSBcIi9Vc2Vycy9ncmFkeS9EZXNrdG9wL2R1Y2todW50L2ltYWdlcy9kb2dfd2Fsay5wbmdcIjtcbiAgICAvLyAgIHRoaXMuc25pZmZJbWFnZS5zcmMgPSBcIlwiO1xuICAgIC8vICAgdGhpcy5jdXJyUG9zWCsrO1xuICAgIC8vIH1cblxuICAgIC8vIGlmICh0aGlzLmN1cnJQb3NYIClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERvZzsiLCJjbGFzcyBEdWNrIHtcbiAgY29uc3RydWN0b3IoYywgY3Jvc3MsIHJvdW5kQ291bnQpIHtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMuY3Jvc3MgPSBjcm9zcztcbiAgICB0aGlzLnBvc1ggPSBNYXRoLnJhbmRvbSgpICogNTEyO1xuICAgIHRoaXMucG9zWSA9IDIwMDtcbiAgICB0aGlzLnZlbFggPSAxICogcm91bmRDb3VudDtcbiAgICB0aGlzLnZlbFkgPSAxICogcm91bmRDb3VudDtcbiAgICB0aGlzLnJvdW5kQ291bnQgPSByb3VuZENvdW50O1xuICAgIFxuICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgdGhpcy50aWNrQ291bnQgPSAwO1xuICAgIHRoaXMudGlja3NQZXJGcmFtZSA9IDQ7XG4gICAgdGhpcy5kaXJDb3VudCA9IDA7XG4gICAgXG4gICAgdGhpcy5kdWNrSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmR1Y2tJbWFnZS5vbmxvYWQgPSAoKSA9PiB0aGlzLmR1Y2tJbWFnZVJlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLmR1Y2tJbWFnZS5zcmMgPSBcIlwiO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5jaGFuZ2VEaXIoKTtcbiAgICBcbiAgICB0aGlzLmhpdCA9IGZhbHNlO1xuICAgIHRoaXMuYW5pT3ZlciA9IGZhbHNlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5kdWNrSW1hZ2VSZWFkeSkgcmV0dXJuO1xuICAgIC8vIGlmICh0aGlzLmlzRHVja0ZhbGxlbigpKSB7XG5cbiAgICAvLyB9XG4gICAgdGhpcy5jLmRyYXdJbWFnZShcbiAgICAgIHRoaXMuZHVja0ltYWdlLCBcbiAgICAgIHRoaXMuZnJhbWVJbmRleCAqIDEyMCAvIDMsIDAsIFxuICAgICAgNDAsIDQwLCBcbiAgICAgIHRoaXMucG9zWCwgdGhpcy5wb3NZLCBcbiAgICAgIDcwLCA3MFxuICAgICk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgLy8gY2hhbmdlIGRpcmVjdGlvbiBhZnRlciAxMCBjb3VudHNcbiAgICB0aGlzLmRpckNvdW50Kys7IFxuICAgIGlmIChcbiAgICAgIHRoaXMuZGlyQ291bnQgPiAxMCAmJlxuICAgICAgdGhpcy5kaXJlY3Rpb24gIT09IFwiZmFsbFwiXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmNoYW5nZURpcigpO1xuICAgICAgICB0aGlzLmRpckNvdW50ID0gMDtcbiAgICB9XG4gIC8vIGNoYW5nZSBwb3NpdGlvbiBiYXNlZCBvbiByYW5kb20gZGlyZWN0aW9uXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImZhbGxcIikgdGhpcy5mYWxsRG93bigpO1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHRoaXMubGVmdCgpO1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB0aGlzLnJpZ2h0KCk7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInRvcC1sZWZ0XCIpIHRoaXMudG9wTGVmdCgpO1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJ0b3AtcmlnaHRcIikgdGhpcy50b3BSaWdodCgpO1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJib3QtbGVmdFwiKSB0aGlzLmJvdHRvbUxlZnQoKTtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwiYm90LXJpZ2h0XCIpIHRoaXMuYm90dG9tUmlnaHQoKTtcbiAgICAvLyBpbmNyZWFzZSBmcmFtZSBpbmRleCBldmVyeSB0aWNrQ291bnQgbnVtYmVyIG9mIHVwZGF0ZXMuXG4gICAgLy8gd2hlbiBmcmFtZSBpbmRleCBoaXRzIDMsIGl0IHdpbGwgcmVzZXQgYmFjayB0byB0aGUgZmlyc3QgZnJhbWUuXG4gICAgdGhpcy50aWNrQ291bnQrKztcbiAgICBpZiAodGhpcy50aWNrQ291bnQgPiB0aGlzLnRpY2tzUGVyRnJhbWUpIHtcbiAgICAgIHRoaXMudGlja0NvdW50ID0gMDtcbiAgICAgIHRoaXMuZnJhbWVJbmRleCsrO1xuICAgIH1cbiAgICBpZiAodGhpcy5mcmFtZUluZGV4ID4gMikge1xuICAgICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VEaXIoKSB7XG4gICAgaWYgKHRoaXMuY29sbGlzaW9uKCkpIHtcbiAgICAgIHRoaXMuZHVja0ltYWdlLnNyYyA9IFwiL1VzZXJzL2dyYWR5L0Rlc2t0b3AvZHVja2h1bnQvaW1hZ2VzL2ZhbGxfZG93bi5wbmdcIjtcbiAgICAgIHRoaXMuaGl0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJmYWxsXCI7XG4gICAgICByZXR1cm4gXCJmYWxsXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJlc2NhcGVcIikgcmV0dXJuIFwiZXNjYXBlXCI7XG5cbiAgICBsZXQgbnVtID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAoIG51bSA8IDAuMTY2NyApIHtcbiAgICAgIHRoaXMuZHVja0ltYWdlLnNyYyA9IFwiL1VzZXJzL2dyYWR5L0Rlc2t0b3AvZHVja2h1bnQvaW1hZ2VzL2ZseV9sZWZ0LnBuZ1wiO1xuICAgICAgcmV0dXJuIFwibGVmdFwiO1xuICAgIH1cbiAgICBpZiAoIG51bSA+IDAuMTY2NyAmJiBudW0gPCAwLjMzMzMgKSB7XG4gICAgICB0aGlzLmR1Y2tJbWFnZS5zcmMgPSBcIi9Vc2Vycy9ncmFkeS9EZXNrdG9wL2R1Y2todW50L2ltYWdlcy9mbHlfcmlnaHQucG5nXCI7XG4gICAgICByZXR1cm4gXCJyaWdodFwiO1xuICAgIH1cbiAgICBpZiAoIG51bSA+IDAuMzMzMyAmJiBudW0gPCAwLjUwICkge1xuICAgICAgdGhpcy5kdWNrSW1hZ2Uuc3JjID0gXCIvVXNlcnMvZ3JhZHkvRGVza3RvcC9kdWNraHVudC9pbWFnZXMvZmx5X3RvcF9sZWZ0LnBuZ1wiO1xuICAgICAgcmV0dXJuIFwidG9wLWxlZnRcIjtcbiAgICB9XG4gICAgaWYgKCBudW0gPiAwLjUwICYmIG51bSA8IDAuNjY3ICkge1xuICAgICAgdGhpcy5kdWNrSW1hZ2Uuc3JjID0gXCIvVXNlcnMvZ3JhZHkvRGVza3RvcC9kdWNraHVudC9pbWFnZXMvZmx5X3RvcF9yaWdodC5wbmdcIjtcbiAgICAgIHJldHVybiBcInRvcC1yaWdodFwiO1xuICAgIH1cbiAgICBpZiAoIG51bSA+IDAuNjY3ICYmIG51bSA8IDAuODMzICkge1xuICAgICAgdGhpcy5kdWNrSW1hZ2Uuc3JjID0gXCIvVXNlcnMvZ3JhZHkvRGVza3RvcC9kdWNraHVudC9pbWFnZXMvZmx5X3RvcF9sZWZ0LnBuZ1wiO1xuICAgICAgcmV0dXJuIFwiYm90LWxlZnRcIjtcbiAgICB9XG4gICAgaWYgKCBudW0gPiAwLjgzMyAmJiBudW0gPCAxICkge1xuICAgICAgdGhpcy5kdWNrSW1hZ2Uuc3JjID0gXCIvVXNlcnMvZ3JhZHkvRGVza3RvcC9kdWNraHVudC9pbWFnZXMvZmx5X3RvcF9yaWdodC5wbmdcIjtcbiAgICAgIHJldHVybiBcImJvdC1yaWdodFwiO1xuICAgIH1cbiAgfVxuXG4gIGxlZnQoKSB7XG4gICAgdGhpcy5wb3NYIC09IHRoaXMudmVsWDsgXG4gIH1cblxuICByaWdodCgpIHsgXG4gICAgdGhpcy5wb3NYICs9IHRoaXMudmVsWDsgXG4gIH1cblxuICBmbHlBd2F5KCkgeyBcbiAgICB0aGlzLnBvc1kgKz0gdGhpcy52ZWxZOyBcbiAgfVxuXG4gIGZhbGxEb3duKCkgeyBcbiAgICB0aGlzLnBvc1kgKz0gdGhpcy52ZWxZOyBcbiAgfVxuXG4gIHRvcExlZnQoKSB7XG4gICAgdGhpcy5wb3NYIC09IHRoaXMudmVsWDtcbiAgICB0aGlzLnBvc1kgLT0gdGhpcy52ZWxZO1xuICB9XG5cbiAgdG9wUmlnaHQoKSB7XG4gICAgdGhpcy5wb3NYICs9IHRoaXMudmVsWDtcbiAgICB0aGlzLnBvc1kgLT0gdGhpcy52ZWxZO1xuICB9XG5cbiAgYm90dG9tTGVmdCgpIHtcbiAgICB0aGlzLnBvc1ggLT0gdGhpcy52ZWxYO1xuICAgIHRoaXMucG9zWSArPSB0aGlzLnZlbFk7XG4gIH1cblxuICBib3R0b21SaWdodCgpIHtcbiAgICB0aGlzLnBvc1ggKz0gdGhpcy52ZWxYO1xuICAgIHRoaXMucG9zWSArPSB0aGlzLnZlbFk7XG4gIH1cblxuICBjb2xsaXNpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY3Jvc3MuY2xpY2tQb3NYID4gdGhpcy5wb3NYICYmIFxuICAgICAgdGhpcy5jcm9zcy5jbGlja1Bvc1ggPCB0aGlzLnBvc1ggKyA0MCAmJlxuICAgICAgdGhpcy5jcm9zcy5jbGlja1Bvc1kgPiB0aGlzLnBvc1kgJiZcbiAgICAgIHRoaXMuY3Jvc3MuY2xpY2tQb3NZIDwgdGhpcy5wb3NZICsgNDBcbiAgICApO1xuICB9XG5cbiAgaXNEdWNrRmFsbGVuKCkge1xuICAgIGlmICh0aGlzLnBvc1kgPiAyNTApIHtcbiAgICAgIHRoaXMuYW5pT3ZlciA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRHVjazsiLCJjbGFzcyBEdWNrcyB7XG4gIGNvbnN0cnVjdG9yKGMpIHtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMuYXJyID0gWzAsMCwwLDAsMCwwLDAsMCwwLDBdO1xuXG4gICAgdGhpcy5kdWNrSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmR1Y2tJbWFnZS5vbmxvYWQgPSAoKSA9PiB0aGlzLmR1Y2tJbWFnZVJlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLmR1Y2tJbWFnZS5zcmMgPSBcIi9Vc2Vycy9ncmFkeS9EZXNrdG9wL2R1Y2todW50L2ltYWdlcy9taXNzZWRfZHVjay5wbmdcIjtcblxuICAgIHRoaXMuaGl0RHVja0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5oaXREdWNrSW1hZ2Uub25sb2FkID0gKCkgPT4gdGhpcy5oaXREdWNrSW1hZ2VSZWFkeSA9IHRydWU7XG4gICAgdGhpcy5oaXREdWNrSW1hZ2Uuc3JjID0gXCIvVXNlcnMvZ3JhZHkvRGVza3RvcC9kdWNraHVudC9pbWFnZXMvaGl0X2R1Y2sucG5nXCI7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuZHVja0ltYWdlUmVhZHkpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaGl0RHVja0ltYWdlUmVhZHkpIHJldHVybjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmFycltpXSA9PT0gMCkge1xuICAgICAgICB0aGlzLmMuZHJhd0ltYWdlKFxuICAgICAgICAgIHRoaXMuZHVja0ltYWdlLFxuICAgICAgICAgIDAsIDAsIDI1LCAyNSxcbiAgICAgICAgICAxNzUrICgoaSsxKSoxNiksIDQxNSxcbiAgICAgICAgICAxNiwgMTZcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFycltpXSA9PT0gMSkge1xuICAgICAgICB0aGlzLmMuZHJhd0ltYWdlKFxuICAgICAgICAgIHRoaXMuaGl0RHVja0ltYWdlLFxuICAgICAgICAgIDAsIDAsIDI1LCAyNSxcbiAgICAgICAgICAxNzUgKyAoKGkrMSkqMTYpLCA0MTUsXG4gICAgICAgICAgMTYsIDE2XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRHVja3M7IiwiXG5jbGFzcyBFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKGMpIHtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW1hZ2VSZWFkeSA9IHRydWU7XG4gICAgfTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IFwiLi4vaW1hZ2VzL2R1Y2todW50LXN0YXRpYy0xLnBuZ1wiO1xuICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuaW1hZ2VSZWFkeSkgcmV0dXJuO1xuICAgIHRoaXMuYy5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgMCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbnZpcm9ubWVudDsgIiwiY29uc3QgUm91bmQgPSByZXF1aXJlKFwiLi9yb3VuZC5qc1wiKTsgXG5jb25zdCBDcm9zcyA9IHJlcXVpcmUoXCIuL2Nyb3NzLmpzXCIpO1xuY29uc3QgU2NvcmVib2FyZCA9IHJlcXVpcmUoXCIuL3Njb3JlYm9hcmQuanNcIik7XG5jb25zdCBFbnZpcm9ubWVudCA9IHJlcXVpcmUoXCIuL2Vudmlyb25tZW50LmpzXCIpO1xuY29uc3QgR2FtZU92ZXJTY3JlZW4gPSByZXF1aXJlKFwiLi9nYW1lX292ZXJfc2NyZWVuLmpzXCIpO1xuY29uc3QgRHVja3MgPSByZXF1aXJlKFwiLi9kdWNrc1wiKTtcbmNvbnN0IERvZyA9IHJlcXVpcmUoXCIuL2RvZy5qc1wiKTtcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGMpIHtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMucm91bmRDb3VudCA9IDE7XG4gICAgXG4gICAgdGhpcy5kb2cgPSBuZXcgRG9nKHRoaXMuYyk7XG4gICAgdGhpcy5zY29yZWJvYXJkID0gbmV3IFNjb3JlYm9hcmQodGhpcy5jKTtcbiAgICB0aGlzLmVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHRoaXMuYyk7XG4gICAgdGhpcy5jcm9zcyA9IG5ldyBDcm9zcyh0aGlzLmMsIHRoaXMuc2NvcmVib2FyZCk7XG4gICAgdGhpcy5yb3VuZCA9IG5ldyBSb3VuZCh0aGlzLmMsIHRoaXMucm91bmRDb3VudCwgdGhpcy5jcm9zcywgdGhpcy5zY29yZWJvYXJkKTtcbiAgICB0aGlzLmdhbWVPdmVyU2NyZWVuID0gbmV3IEdhbWVPdmVyU2NyZWVuKHRoaXMuYyk7XG4gICAgdGhpcy5sb29wID0gdGhpcy5sb29wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICB9XG5cbiAgbG9vcCgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5pc0dhbWVPdmVyKCk7XG4gICAgdGhpcy5kb2cudXBkYXRlKCk7XG4gICAgdGhpcy5yb3VuZC51cGRhdGUoKTtcbiAgICB0aGlzLnNjb3JlYm9hcmQudXBkYXRlKCk7XG4gICAgdGhpcy5jcm9zcy51cGRhdGUoKTtcbiAgICBpZiAodGhpcy5yb3VuZC5yb3VuZE92ZXIpIHtcbiAgICAgIHRoaXMucm91bmRDb3VudCsrO1xuICAgICAgdGhpcy5uZXdTY29yZWJvYXJkKCk7XG4gICAgICB0aGlzLm5ld1JvdW5kKCk7XG4gICAgfVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5yb3VuZC5yZW5kZXIoKTtcbiAgICB0aGlzLmVudmlyb25tZW50LnJlbmRlcigpO1xuICAgIHRoaXMuZG9nLnJlbmRlcldhbGsoKTtcbiAgICB0aGlzLmRvZy5yZW5kZXJTbmlmZigpO1xuICAgIHRoaXMuZG9nLnJlbmRlckp1bXAoKTtcbiAgICB0aGlzLnNjb3JlYm9hcmQucmVuZGVyKCk7XG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIpIHtcbiAgICAgIHRoaXMuZ2FtZU92ZXJTY3JlZW4ucmVuZGVyKCk7XG4gICAgfVxuICAgIHRoaXMuY3Jvc3MucmVuZGVyKCk7XG4gIH1cbiAgXG4gIG5ld1JvdW5kKCkge1xuICAgIHRoaXMucm91bmQgPSBuZXcgUm91bmQodGhpcy5jLCB0aGlzLnJvdW5kQ291bnQsIHRoaXMuY3Jvc3MsIHRoaXMuc2NvcmVib2FyZCk7XG4gIH1cblxuICBuZXdTY29yZWJvYXJkKCkge1xuICAgIHRoaXMuc2NvcmVib2FyZC5kdWNrcyA9IG5ldyBEdWNrcyh0aGlzLmMpO1xuICB9XG4gIFxuICBpc0dhbWVPdmVyKCkge1xuICAgIGxldCBkdWNrc0hpdCA9IHRoaXMuc2NvcmVib2FyZC5kdWNrcy5hcnIuZmlsdGVyKGVsID0+IGVsID09PSAxKS5sZW5ndGg7XG4gICAgaWYgKGR1Y2tzSGl0IDw9IDUgJiYgdGhpcy5yb3VuZC53YXZlQ291bnQgPT09IDEwKSB7XG4gICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9IFxuICB9XG4gIFxuICAvLyBzdGFydCgpIHtcbiAgLy8gICB3aGlsZSAoIXRoaXMuZ2FtZU92ZXIpIHtcbiAgLy8gICAgIHRoaXMubmV3Um91bmQoKTtcbiAgLy8gICAgIHRoaXMucm91bmQucGxheSgpO1xuICAvLyAgIH1cbiAgLy8gfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiY2xhc3MgR2FtZU92ZXJTY3JlZW4ge1xuICBjb25zdHJ1Y3RvcihjKSB7XG4gICAgdGhpcy5jID0gYztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmMuZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgMjAwLCAwKTsgXG4gICAgdGhpcy5jLmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5jLmZpbGxSZWN0KDEzMiwgMTAwLCAyNTAsIDEwMCk7XG5cbiAgICB0aGlzLmMuZm9udCA9IFwiMjAuNXB4IFBpeGVsIEVtdWxhdG9yXCI7XG4gICAgdGhpcy5jLmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICB0aGlzLmMudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgXG4gICAgdGhpcy5jLmZpbGxUZXh0KCdnYW1lIG92ZXInLCAyNTYsIDE0Mik7XG4gICAgdGhpcy5jLmZpbGxUZXh0KCdwbGF5IGFnYWluJywgMjU2LCAxNzApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZU92ZXJTY3JlZW47IiwiLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL2dhbWUuanNcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChldmVudCkgPT4ge1xuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICB2YXIgYyA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIGxldCBnYW1lID0gbmV3IEdhbWUoYyk7XG4gIGdhbWUubG9vcCgpO1xufSk7XG5cbmNvbnNvbGUubG9nKFwid2VicGFjayBpcyB3b3JraW5nIVwiKTtcbiIsImNvbnN0IFdhdmUgPSByZXF1aXJlKFwiLi93YXZlLmpzXCIpO1xuY29uc3QgRHVja3MgPSByZXF1aXJlKFwiLi9kdWNrcy5qc1wiKTtcblxuY2xhc3MgUm91bmQge1xuICBjb25zdHJ1Y3RvcihjLCByb3VuZENvdW50LCBjcm9zcywgc2NvcmVib2FyZCkge1xuICAgIHRoaXMuYyA9IGM7XG4gICAgdGhpcy5jcm9zcyA9IGNyb3NzO1xuICAgIHRoaXMucm91bmRDb3VudCA9IHJvdW5kQ291bnQ7XG4gICAgdGhpcy5zY29yZWJvYXJkID0gc2NvcmVib2FyZDtcbiAgICB0aGlzLndhdmVDb3VudCA9IDA7XG5cbiAgICB0aGlzLndhdmUgPSBuZXcgV2F2ZSh0aGlzLmMsIHRoaXMuY3Jvc3MsIHRoaXMuc2NvcmVib2FyZCwgdGhpcy5yb3VuZENvdW50LCB0aGlzLndhdmVDb3VudCk7XG5cbiAgICB0aGlzLnJvdW5kT3ZlciA9IGZhbHNlO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgd2hpbGUgKCF0aGlzLnJvdW5kT3Zlcikge1xuICAgICAgXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMud2F2ZS5yZW5kZXIoKTtcbiAgfVxuICBcbiAgdXBkYXRlKCkge1xuICAgIHRoaXMud2F2ZS51cGRhdGUoKTtcbiAgICB0aGlzLmlzUm91bmRPdmVyKCk7XG5cbiAgICBpZiAodGhpcy53YXZlLndhdmVPdmVyKSB7XG4gICAgICB0aGlzLndhdmVDb3VudCsrO1xuICAgICAgdGhpcy5yZXNldFNob3RzKCk7XG4gICAgICB0aGlzLm5ld1dhdmUoKTtcbiAgICB9XG4gIH1cblxuICBuZXdXYXZlKCkge1xuICAgIHRoaXMud2F2ZSA9IG5ldyBXYXZlKHRoaXMuYywgdGhpcy5jcm9zcywgdGhpcy5zY29yZWJvYXJkLCB0aGlzLnJvdW5kQ291bnQsIHRoaXMud2F2ZUNvdW50KTtcbiAgfVxuXG4gIGlzUm91bmRPdmVyKCkge1xuICAgIGlmICh0aGlzLndhdmVDb3VudCA9PT0gMTApIHtcbiAgICAgIHRoaXMucm91bmRPdmVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgICBcbiAgcmVzZXRTaG90cygpIHtcbiAgICB0aGlzLnNjb3JlYm9hcmQuc2hvdHMuY291bnQgPSAzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUm91bmQ7IiwiY2xhc3MgU2NvcmUge1xuICBjb25zdHJ1Y3RvcihjKSB7XG4gICAgdGhpcy5jID0gYztcbiAgICB0aGlzLnBvaW50cyA9IDA7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jLmZvbnQgPSBcIjIwLjVweCBQaXhlbCBFbXVsYXRvclwiO1xuICAgIHRoaXMuYy5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgdGhpcy5jLnRleHRBbGlnbiA9IFwiZW5kXCI7IFxuICAgIHRoaXMuYy5maWxsVGV4dChgJHt0aGlzLnBvaW50c31gLCA0ODAsNDMwKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjb3JlOyIsImNvbnN0IFNjb3JlID0gcmVxdWlyZShcIi4vc2NvcmUuanNcIik7XG5jb25zdCBTaG90cyA9IHJlcXVpcmUoXCIuL3Nob3RzXCIpO1xuY29uc3QgRHVja3MgPSByZXF1aXJlKFwiLi9kdWNrc1wiKTtcblxuY2xhc3MgU2NvcmVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKGMpIHtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMuc2NvcmUgPSBuZXcgU2NvcmUodGhpcy5jKTtcbiAgICB0aGlzLnNob3RzID0gbmV3IFNob3RzKHRoaXMuYyk7XG4gICAgdGhpcy5kdWNrcyA9IG5ldyBEdWNrcyh0aGlzLmMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuc2NvcmUucmVuZGVyKCk7XG4gICAgdGhpcy5zaG90cy5yZW5kZXIoKTtcbiAgICB0aGlzLmR1Y2tzLnJlbmRlcigpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuc2hvdHMudXBkYXRlKCk7XG4gICAgdGhpcy5kdWNrcy51cGRhdGUoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjb3JlYm9hcmQ7IiwiY2xhc3MgU2hvdHMge1xuICBjb25zdHJ1Y3RvcihjKSB7XG4gICAgdGhpcy5jID0gYztcbiAgICB0aGlzLmNvdW50ID0gMztcblxuICAgIHRoaXMuc2hvdEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5zaG90SW1hZ2Uub25sb2FkID0gKCkgPT4gdGhpcy5pbWFnZVJlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLnNob3RJbWFnZS5zcmMgPSBcIi9Vc2Vycy9ncmFkeS9EZXNrdG9wL2R1Y2todW50L2ltYWdlcy9zaG90LnBuZ1wiO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XG4gICAgICB0aGlzLmMuZHJhd0ltYWdlKHRoaXMuc2hvdEltYWdlLFxuICAgICAgICAwLCAwLFxuICAgICAgICAyNSwgMjUsXG4gICAgICAgIDMxICsgKGkrMSkqMTYsIDQxMSxcbiAgICAgICAgMTksIDE5XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hvdHM7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiY29uc3QgRHVjayA9IHJlcXVpcmUoXCIuL2R1Y2suanNcIik7XG5jb25zdCBEb2cgPSByZXF1aXJlKFwiLi9kb2cuanNcIik7XG5cbmNsYXNzIFdhdmUge1xuICBjb25zdHJ1Y3RvcihjLCBjcm9zcywgc2NvcmVib2FyZCwgcm91bmRDb3VudCwgd2F2ZUNvdW50KSB7XG4gICAgdGhpcy5jID0gYztcbiAgICB0aGlzLmNyb3NzID0gY3Jvc3M7XG4gICAgdGhpcy5zY29yZWJvYXJkID0gc2NvcmVib2FyZDtcbiAgICB0aGlzLnJvdW5kQ291bnQgPSByb3VuZENvdW50O1xuICAgIHRoaXMud2F2ZUNvdW50ID0gd2F2ZUNvdW50O1xuICAgIHRoaXMud2F2ZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmR1Y2sgPSBuZXcgRHVjayh0aGlzLmMsIHRoaXMuY3Jvc3MsIHRoaXMucm91bmRDb3VudCk7XG4gICAgdGhpcy5kb2cgPSBuZXcgRG9nKHRoaXMuYyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5kdWNrLnJlbmRlcigpO1xuICAgIHRoaXMuZG9nLnJlbmRlckhpdCgpO1xuICAgIHRoaXMuZG9nLnJlbmRlck1pc3MoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmR1Y2sudXBkYXRlKCk7XG4gICAgdGhpcy5kb2cudXBkYXRlKCk7XG4gICAgdGhpcy5pc1dhdmVPdmVyKCk7XG4gIH1cblxuICB1cGRhdGVEdWNrcygpIHtcbiAgICB0aGlzLnNjb3JlYm9hcmQuZHVja3MuYXJyW3RoaXMud2F2ZUNvdW50XSA9IDE7XG4gIH1cblxuICB1cGRhdGVTY29yZSgpIHtcbiAgICBpZiAodGhpcy5yb3VuZENvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLnNjb3JlYm9hcmQuc2NvcmUucG9pbnRzICs9IDEwMDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NvcmVib2FyZC5zY29yZS5wb2ludHMgKz0gMTAwMCArIDUwMCAqICh0aGlzLnJvdW5kQ291bnQgLSAxKTtcbiAgICB9XG4gIH1cblxuICBkdWNrSGl0KCkge1xuICAgIGlmICh0aGlzLmR1Y2suaGl0KSB7XG4gICAgICB0aGlzLnVwZGF0ZUR1Y2tzKCk7XG4gICAgICB0aGlzLndhdmVDb3VudCA9IHRoaXMud2F2ZUNvdW50ICsgMTtcbiAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBub1Nob3RzKCkge1xuICAgIHJldHVybiB0aGlzLnNjb3JlYm9hcmQuc2hvdHMuY291bnQgPT09IDA7XG4gIH1cblxuICBpc1dhdmVPdmVyKCkge1xuICAgIGlmICh0aGlzLmR1Y2tIaXQoKSB8fCB0aGlzLm5vU2hvdHMoKSkge1xuICAgICAgdGhpcy53YXZlT3ZlciA9IHRydWU7XG4gICAgfVxuICB9XG4gIFxuICByZXNldFNob3RzKCkge1xuICAgIHRoaXMuc2NvcmVib2FyZC5zaG90cy5jb3VudCA9IDM7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gV2F2ZTsiXSwic291cmNlUm9vdCI6IiJ9