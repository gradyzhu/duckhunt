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

/***/ "./src/duck.js":
/*!*********************!*\
  !*** ./src/duck.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Duck {
  constructor(c, cross, roundCount, scoreboard) {
    this.c = c;
    this.cross = cross;
    this.scoreboard = scoreboard;
    // this.posX = Math.random() * 512;
    // this.posY = 200;
    this.posX = 442;
    this.posY = 0;
    this.velX = 0 * roundCount;
    this.velY = 0 * roundCount;
    this.roundCount = roundCount;
    
    this.killPosX = 0;
    this.killPosY = 0;
    
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 4;
    
    this.fallFrameIndex = 0;
    this.fallTickCount = 0;
    this.fallTicksPerFrame = 4;

    this.dirCount = 0;
    this.dirCountMax = 0;

    this.duckImage = new Image();
    this.duckImage.onload = () => this.duckImageReady = true;
    this.duckImage.src = "";
    this.direction = this.changeDir();

    this.fallDuckImage = new Image();
    this.fallDuckImage.onload = () => this.fallDuckImageReady = true;
    this.fallDuckImage.src = "images/fall_down.png";

    this.splatCount = 0;
    this.hitDuckImage = new Image();
    this.hitDuckImage.onload = () => this.hitDuckImageReady = true;
    this.hitDuckImage.src = "images/fly_hit.png";
    
    this.hit = false;
    this.splatFin = false;
    this.falling = false;
    this.fallFin = false;
    this.flyFin = false;

    this.touchingLeftEdge = false;
    this.touchingRightEdge = false;
    this.touchingTopEdge = false;
    this.touchingBottomEdge = false;
  }

  render() {
    this.c.fillStyle = 'purple';
    this.c.fillRect(442, 0, 70, 70);
    if (!this.duckImageReady) return;
    if (!this.fallDuckImageReady) return;

    this.renderFly();

    if (this.falling && !this.splatFin) {
      this.posY = this.posY;
      this.splatCount++;
      this.renderSplat();
    }
    if (this.falling && this.splatFin) {
      this.renderFall();
    }
  }

  renderFly() {
    this.c.drawImage(this.duckImage, 
      this.frameIndex * 108 / 3, 0, 
      36, 36, 
      this.posX, this.posY, 
      70, 70
    );
  }

  renderFall() {
    this.scoreboard.renderPts(this.killPosX, this.killPosY);
    this.c.drawImage(this.fallDuckImage, 
      this.fallFrameIndex * 72 / 2, 0, 
      36, 36, 
      this.posX, this.posY, 
      70, 70
    );
  }

  renderSplat() {
    this.posY -= 3;
    this.c.drawImage(this.hitDuckImage, 
      0, 0, 36, 36, 
      this.posX, this.posY, 
      70, 70
    );
  }

  update() {
    this.randomizeDirCountMax();
    this.isTouchingEdge();
    this.repel();
    this.isFallFin();
    this.isFlyFin();
    this.updateDir();
    this.updatePos();
    this.updateFly();
    this.isSplatFin();
  }
  
  updateFly() {
    this.tickCount++;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      this.frameIndex++;
      this.fallFrameIndex++;
    }
    if (this.frameIndex > 2) this.frameIndex = 0;
    if (this.fallFrameIndex > 1) this.fallFrameIndex = 0;
  }
  
  updateDir() {
    this.dirCount++; 
    if (
      this.dirCount > this.dirCountMax &&
      this.direction !== "fall"
      ) {
        this.direction = this.changeDir();
        this.dirCount = 0;
    }
  }

  randomizeDirCountMax() {
    let n = Math.random();
    this.dirCountMax = n * 400;
  }

  updatePos() {
    if (this.direction === "escape") this.escape();
    if (this.direction === "fall") this.fallDown();
    if (this.direction === "left") this.left();
    if (this.direction === "right") this.right();
    if (this.direction === "top-left") this.topLeft();
    if (this.direction === "top-right") this.topRight();
    if (this.direction === "bot-left") this.bottomLeft();
    if (this.direction === "bot-right") this.bottomRight();
  }
  
  isTouchingEdge() {
    if (!this.falling) {
      if (this.posY > 300) this.touchingBottomEdge = true;
      if (this.posY < 0) this.touchingTopEdge = true;
      if (this.posX < 0) this.touchingLeftEdge = true;
      if (this.posX > 442) this.touchingRightEdge = true;
    }
  }

  repel() {
    if (this.touchingLeftEdge) {
      this.touchingLeftEdge = false;
      this.posX += this.velX; 
    }
    if (this.touchingRightEdge) {
      this.touchingRightEdge = false;
      this.posX -= this.velX;
    }
    if (this.touchingTopEdge) {
      this.touchingTopEdge = false;
      this.posY += this.velY;
    }
    if (this.touchingBottomEdge) {
      this.touchingBottomEdge = false;
      this.posY -= this.velY;
    }
  }

  changeDir() {
    if (this.collision()) {
      this.falling = true;
      this.killPosX = this.cross.clickPosX;
      this.killPosY = this.cross.clickPosY;

      this.duckImage.src = "";
      this.hit = true;
      this.direction = "fall";
      return "fall";
    }

    if (this.scoreboard.shots.count === 0) {
      this.duckImage.src = "images/fly_up.png";
      this.direction = "escape";
      return "escape";
    }

    let num = Math.random();
    if ( num < 0.1667 ) {
      this.duckImage.src = "images/fly_left.png";
      return "left";
    }
    if ( num > 0.1667 && num < 0.3333 ) {
      this.duckImage.src = "images/fly_right.png";
      return "right";
    }
    if ( num > 0.3333 && num < 0.50 ) {
      this.duckImage.src = "images/fly_top_left.png";
      return "top-left";
    }
    if ( num > 0.50 && num < 0.667 ) {
      this.duckImage.src = "images/fly_top_right.png";
      return "top-right";
    }
    if ( num > 0.667 && num < 0.833 ) {
      this.duckImage.src = "images/fly_top_left.png";
      return "bot-left";
    }
    if ( num > 0.833 && num < 1 ) {
      this.duckImage.src = "images/fly_top_right.png";
      return "bot-right";
    }
  }

  left() {
    this.posX -= this.velX; 
  }

  right() { 
    this.posX += this.velX; 
  }

  escape() {
    this.posY -= 7; 
  }

  fallDown() { 
    this.posY += 3; 
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
      this.cross.clickPosX < this.posX + 35 &&
      this.cross.clickPosY > this.posY &&
      this.cross.clickPosY < this.posY + 35
    );
  }

  isFallFin() {
    if (this.posY > 325) {
      this.fallFin = true;
    }
  }

  isFlyFin() {
    if (this.posY < -75) {
      this.flyFin = true;
    }
  }

  isSplatFin() {
    if (this.splatCount > 20) {
      this.splatFin = true;
    }
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
    this.waveCount = 0;
    this.arr = [0,0,0,0,0,0,0,0,0,0];

    this.tickCount = 0;
    this.ticksPerFrame = 3;

    this.triPos1X = 192;
    this.triPos2X = 202;
    this.triPos3X = 197;

    this.duckImage = new Image();
    this.duckImage.onload = () => this.duckImageReady = true;
    this.duckImage.src = "images/missed_duck.png";

    this.hitDuckImage = new Image();
    this.hitDuckImage.onload = () => this.hitDuckImageReady = true;
    this.hitDuckImage.src = "images/hit_duck.png";
  }
  
  render() {
    if (!this.duckImageReady) return;
    if (!this.hitDuckImageReady) return;

    this.c.beginPath();
    this.c.moveTo(this.triPos1X + this.waveCount * 16, 395);
    this.c.lineTo(this.triPos2X + this.waveCount * 16, 395);
    this.c.lineTo(this.triPos3X + this.waveCount * 16, 405);
    this.c.fillStyle = "white";
    this.c.fill();

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
    this.tickCount++;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
    }
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
    this.image.onload = () => this.imageReady = true;
    this.image.src = "images/duckhunt-static-1.png";
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
const GameStartAni = __webpack_require__(/*! ./game_start_ani */ "./src/game_start_ani.js");
const RoundScreen = __webpack_require__(/*! ./round_screen */ "./src/round_screen.js");

class Game {
  constructor(c) {
    this.c = c;
    this.roundCount = 1;
    this.start = true;
    
    this.gameStartAni = new GameStartAni(this.c);
    this.roundScreen = new RoundScreen(this.c, this.roundCount);
    this.scoreboard = new Scoreboard(this.c);
    this.environment = new Environment(this.c);
    this.cross = new Cross(this.c, this.scoreboard);
    this.round = new Round(this.c, this.roundCount, this.cross, this.scoreboard);

    this.isNewRound = false;
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
    this.isStart();
    this.isGameOver();
    this.gameStartAni.update();
    this.round.update();
    this.scoreboard.update();
    this.cross.update();
    
    if (this.round.roundOver) {
      this.scoreboard.roundCount++;
      this.roundCount++;
      this.newDucks();
      this.newRound();
      this.newRoundScreen();
    }
    
    this.roundScreen.update();
  }
  
  render() {
    this.environment.render();

    if (this.start) {
      this.gameStartAni.render();
      this.isNewRound = true;
    }

    if (!this.start && !this.gameOver) {
      this.round.render();
      this.environment.render();
    }
    
    if (this.isNewRound) {
      this.roundScreen.render();
      if (this.roundScreen.aniFin) {
        this.isNewRound = false;
      }
    }

    this.scoreboard.render();
    if (this.gameOver) {this.gameOverScreen.render();}
    this.cross.render();
  }
  
  newRoundScreen() {
    this.roundScreen = new RoundScreen(this.c, this.roundCount);
  }

  newRound() {
    this.round = new Round(this.c, this.roundCount, this.cross, this.scoreboard);
    this.isNewRound = true;
  }

  newDucks() {
    this.scoreboard.ducks = new Ducks(this.c);
  }

  isStart() {
    if (this.gameStartAni.jumpEndFin) {
      this.start = false;
    }
  }
  
  isGameOver() {
    let ducksHit = this.scoreboard.ducks.arr.filter(el => el === 1).length;
    if (ducksHit <= 5 && this.round.waveCount === 10) {
      this.gameOver = true;
    } 
  }
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

/***/ "./src/game_start_ani.js":
/*!*******************************!*\
  !*** ./src/game_start_ani.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

class GameStartAni {
  constructor(c) {
    this.c = c;
    this.dogPosX = 0;
    this.dogPosY = 275;

    //walk and sniff
    this.sniff1Fin = false;
    this.sniff2Fin = false;
    this.sniff1Count = 0;
    this.sniff2Count = 0;

    this.walk1Fin = false;
    this.walk2Fin = false;
    this.walk1Count = 0;
    this.walk2Count = 0;

    this.pause1Count = 0;
    this.pause2Count = 0;

    this.sniffFrameIndex = 0;
    this.sniffTickCount = 0;
    this.sniffTicksPerFrame = 10;

    this.sniffImage = new Image();
    this.sniffImage.onload = () => this.sniffImageReady = true;
    this.sniffImage.src = "images/dog_sniff.png";

    this.walkFrameIndex = 0;
    this.walkTickCount = 0;
    this.walkTicksPerFrame = 6;

    this.walkImage = new Image();
    this.walkImage.onload = () => this.walkImageReady = true;
    this.walkImage.src = "images/dog_walk.png";

    //jump
    this.shockFin = false;
    this.shockCount = 0;

    this.jumpStartFin = false;
    this.jumpStartCount = 0;

    this.jumpEndFin = false;
    this.jumpEndCount = 0;

    this.jumpImage = new Image();
    this.jumpImage.onload = () => this.jumpImageReady = true;
    this.jumpImage.src = "images/dog_jump.png";
  }

  render() {
    if (!this.sniff2Fin) {
      this.renderWalkAndSniff();
    } else {
      this.renderJump();
    }
  }

  update() {
    this.updateSniff();
    this.updateWalk();
    this.isWalk1Fin();
    this.isWalk2Fin();
    this.isSniff1Fin();
    this.isSniff2Fin();
    this.isShockFin();
    this.isJumpStartFin();
    this.isJumpEndFin();
  }

  //walk and sniff render functions
  renderWalkAndSniff() {
    if (!this.walk1Fin) {
      this.renderWalk();
      this.dogPosX++;
      this.walk1Count++;
    }
    if (this.walk1Fin && !this.sniff1Fin) {
      this.renderSniff();
      this.sniff1Count++;
    }
    if (this.walk1Fin && this.sniff1Fin && !this.walk2Fin) {
      this.renderWalk();
      this.dogPosX++;
      this.walk2Count++;
    }
    if (this.walk1Fin && this.sniff1Fin && this.walk2Fin) {
      this.renderSniff();
      this.sniff2Count++;
    }
  }

  renderWalk() {
    this.c.drawImage(this.walkImage, 
      this.walkFrameIndex * 180 / 3, 0,
      60, 60, 
      this.dogPosX, 275, 
      125, 125);
  }

  renderSniff() {
    this.c.drawImage(this.sniffImage, 
      this.sniffFrameIndex * 120 / 2, 0,
      60, 60, 
      this.dogPosX, 275, 
      125, 125);
  }

  // sprite update functions
  updateSniff() {
    this.sniffTickCount++;
    if (this.sniffTickCount > this.sniffTicksPerFrame) {
      this.sniffTickCount = 0;
      this.sniffFrameIndex++;
    }
    if (this.sniffFrameIndex > 1) {
      this.sniffFrameIndex = 0;
    }
  }

  updateWalk() {
    this.walkTickCount++;
    if (this.walkTickCount > this.walkTicksPerFrame) {
      this.walkTickCount = 0;
      this.walkFrameIndex++;
    }
    if (this.walkFrameIndex > 2) {
      this.walkFrameIndex = 0;
    }
  }
  
  // jump render functions
  renderShock() {
    this.c.drawImage(this.jumpImage, 
      0, 0,
      60, 60, 
      this.dogPosX, 275, 
      125, 125);
    }
    
  renderJumpStart() {
    this.c.drawImage(this.jumpImage, 
      60, 0,
      60, 60, 
      this.dogPosX, this.dogPosY, 
      125, 125); 
    }
    
  renderJumpEnd() {
    this.c.drawImage(this.jumpImage, 
      120, 0,
      60, 60, 
      this.dogPosX, this.dogPosY, 
      125, 125);
    }
        
  renderJump() {
    if (!this.shockFin) {
      this.c.drawImage(this.jumpImage, 
        0, 0,
        60, 60, 
        this.dogPosX, 275, 
        125, 125);
      this.shockCount++;
    }
    if (this.shockFin && !this.jumpStartFin) {
      this.renderJumpStart();
      this.jumpStartCount++;
    }
    if (this.jumpStartFin && this.shockFin) {
      this.renderJumpEnd();
      this.jumpEndCount++;
    }
    if (this.jumpEndFin) {
      this.jumpImage.src = "";
    }
  }

  // jump update functions
  isWalk1Fin() {if (this.walk1Count > 50) this.walk1Fin = true;}
  isSniff1Fin() {if (this.sniff1Count > 40) this.sniff1Fin = true;}
  isWalk2Fin() {if (this.walk2Count > 40) this.walk2Fin = true;}
  isSniff2Fin() {if (this.sniff2Count > 40) this.sniff2Fin = true;}
  isShockFin() {
    if (this.shockCount > 20) {
      this.shockFin = true;
      this.dogPosX += 2;
      this.dogPosY -= 1.5;
    }
  }
  isJumpStartFin() {
    if (this.jumpStartCount > 60) {
      this.jumpStartFin = true;
      this.dogPosY += 8;
      this.dogPosX -= 2;
    }
  }
  isJumpEndFin() {if (this.jumpEndCount > 7) this.jumpEndFin = true;}
}

module.exports = GameStartAni;

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

const Game = __webpack_require__(/*! ./game.js */ "./src/game.js");

document.addEventListener("DOMContentLoaded", (event) => {
  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');

  let game = new Game(c);
  game.loop();
});


/***/ }),

/***/ "./src/round.js":
/*!**********************!*\
  !*** ./src/round.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Wave = __webpack_require__(/*! ./wave.js */ "./src/wave.js");

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

  render() {
    this.wave.render();
  }
  
  update() {
    this.wave.update();
    this.isRoundOver();

    if (this.wave.waveOver) {
      this.waveCount++;
      this.scoreboard.ducks.waveCount++;
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

/***/ "./src/round_screen.js":
/*!*****************************!*\
  !*** ./src/round_screen.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

class RoundScreen {
  constructor(c, roundCount) {
    this.c = c;
    this.tickCount = 0;
    this.roundCount = roundCount;
    this.aniFin = false;
  }

  render() {
    this.tickCount++;
    this.c.fillStyle = 'black';
    this.c.fillRect(165, 110, 178, 60);

    this.c.font = "20.5px Pixel Emulator";
    this.c.fillStyle = "white";
    this.c.textAlign = "center"; 
    this.c.fillText(`ROUND ${this.roundCount}`, 256, 148);
  }

  update() {
    this.isAniFin();
  }

  isAniFin() {
    if (this.tickCount > 60) {
      this.tickCount = 0;
      this.aniFin = true;
    }
  }
}

module.exports = RoundScreen;

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
    this.roundCount = 1;
    this.score = new Score(this.c);
    this.shots = new Shots(this.c);
    this.ducks = new Ducks(this.c);
  }

  render() {
    this.score.render();
    this.shots.render();
    this.ducks.render();

    this.c.fillStyle = "black";
    this.c.fillRect(48,384,47,21.5);
    this.c.fillStyle = "#C5F652";
    this.c.font = "16px Pixel Emulator";
    this.c.fillText(`R=${this.roundCount}`, 89.5, 400);
  }

  renderPts(posX, posY) {
    this.c.textAlign = "center"; 
    this.c.fillStyle = "white";
    this.c.font = "12px Pixel Emulator";
    this.c.fillText(`${this.roundCount * 500}`, posX, posY);
    console.log(this.roundCount);
  }

  update() {
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
    this.shotImage.src = "images/shot.png";
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
const WaveHitAni = __webpack_require__(/*! ./wave_hit_ani.js */ "./src/wave_hit_ani.js");
const WaveMissAni = __webpack_require__(/*! ./wave_miss_ani.js */ "./src/wave_miss_ani.js");

class Wave {
  constructor(c, cross, scoreboard, roundCount, waveCount) {
    this.c = c;
    this.cross = cross;
    this.scoreboard = scoreboard;
    this.roundCount = roundCount;
    this.waveCount = waveCount;
    this.waveOver = false;
    this.duck = new Duck(this.c, this.cross, this.roundCount, this.scoreboard);
    this.waveHitAni = new WaveHitAni(this.c);
    this.waveMissAni = new WaveMissAni(this.c);
  }

  render() {
    this.duck.render();
    if (this.duck.fallFin) {
      this.waveHitAni.render();
    }
    if (this.duck.flyFin) this.waveMissAni.render();
  }

  update() {
    this.duckHit();
    this.duck.update();
    this.waveHitAni.update();
    this.waveMissAni.update();
    this.isWaveOver();
  }

  updateDucks() {
    this.scoreboard.ducks.arr[this.waveCount] = 1;
  }

  updateScore() {
    if (this.roundCount === 1) {
      this.scoreboard.score.points += 500;
    } else {
      this.scoreboard.score.points += 500 + 500 * (this.roundCount - 1);
    }
  }

  duckHit() {
    if (this.duck.hit) {
      this.duck.hit = false;
      this.updateDucks();
      this.waveCount = this.waveCount + 1;
      this.updateScore();
    }
  }

  isWaveOver() {
    if (
      (this.duck.fallFin && this.waveHitAni.smileEndFin) ||
      (this.duck.flyFin && this.waveMissAni.laughEndFin))  {
      this.waveOver = true;
    }
  }
}
module.exports = Wave;

/***/ }),

/***/ "./src/wave_hit_ani.js":
/*!*****************************!*\
  !*** ./src/wave_hit_ani.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

class WaveHitAni {
  constructor(c) {
    this.c = c;
    this.dogPosY = 308;
    // this.dogPosX = dogPosX;
    this.smilePauseCount = 0;

    this.smileStartFin = false;
    this.smilePauseFin = false;
    this.smileEndFin = false;

    this.smileImage = new Image();
    this.smileImage.onload = () => this.smileImageReady = true;
    this.smileImage.src = "images/dog_single_duck.png";
  }

  render() {
    if (!this.smileStartFin) {
      this.dogPosY-=3;
    }
    if (this.smileStartFin) {
      this.smilePauseCount++;
    }
    this.c.drawImage(this.smileImage, 
      0, 0,
      60, 60, 
      204, this.dogPosY, 
      111, 111);
  }

  update() {
    this.isSmileStartFin();
    this.isSmilePauseFin();
    this.isSmileEndFin();
  }

  isSmileStartFin() {
    if (this.dogPosY === 248) this.smileStartFin = true;
  }

  isSmilePauseFin() {
    if (this.smilePauseCount > 30) {
      this.smilePauseFin = true;
      this.dogPosY+=3;}
  }

  isSmileEndFin() {
    if (this.dogPosY > 310) this.smileEndFin = true;
  }
}

module.exports = WaveHitAni;

/***/ }),

/***/ "./src/wave_miss_ani.js":
/*!******************************!*\
  !*** ./src/wave_miss_ani.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

class WaveMissAni {
  constructor(c) {
    this.c = c;
    this.dogPosY = 308;

    this.laughStartFin = false;
    this.laughPauseFin = false;
    this.laughEndFin = false;

    this.laughPauseCount = 0;
    this.laughTickCount = 0;

    this.laughFrameIndex = 0;
    this.laughTickCount = 0;
    this.laughTicksPerFrame = 4;

    this.laughImage = new Image();
    this.laughImage.onload = () => this.laughImageReady = true;
    this.laughImage.src = "images/dog_laugh.png";
  }

  render() {
    if (!this.laughStartFin) {
      this.dogPosY-=3;
    }
    if (this.laughStartFin) {
      this.laughPauseCount++;
    }
    this.c.drawImage(this.laughImage, 
      this.laughFrameIndex * 120 / 2, 0,
      60, 60, 
      204, this.dogPosY, 
      111, 111);
  }

  update() {
    this.isLaughStartFin();
    this.isLaughPauseFin();
    this.isLaughEndFin();

    this.laughTickCount++;
    if (this.laughTickCount > this.laughTicksPerFrame) {
      this.laughTickCount = 0;
      this.laughFrameIndex++;
    }
    if (this.laughFrameIndex > 1) {
      this.laughFrameIndex = 0;
    }
  }

  isLaughStartFin() {
    if (this.dogPosY === 248) {this.laughStartFin = true;}
  }

  isLaughPauseFin() {
    if (this.laughPauseCount > 30) {
      this.laughPauseFin = true;
      this.dogPosY+=3;
    }
  }

  isLaughEndFin() {
    if (this.dogPosY > 310) {this.laughEndFin = true;}
  }
}

module.exports = WaveMissAni;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jcm9zcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHVjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHVja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lX292ZXJfc2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lX3N0YXJ0X2FuaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3VuZF9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY29yZWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zaG90cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzhmMzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdmVfaGl0X2FuaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2F2ZV9taXNzX2FuaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMscUdBQWdEO0FBQ25GO0FBQ0EsY0FBYyxRQUFTLFlBQVksOEJBQThCLDZCQUE2QixpQkFBaUIsZUFBZSxHQUFHOzs7Ozs7Ozs7Ozs7OztBQ0ZwSDs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxnQkFBZ0I7QUFDdkQsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLG9CQUFvQjtBQUNuQyw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyx1REFBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1Qjs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQjtBQUNBOztBQUVBLFc7QUFDQSwyQjtBQUNBOztBQUVBO0FBQ0EsbUI7QUFDQTs7QUFFQSxjO0FBQ0EsbUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0I7Ozs7Ozs7Ozs7O0FDOVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUI7Ozs7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBLDZCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjY2FudmFzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NkJDRjk7XFxuICBvdXRsaW5lOiBibGFjayAxcHggc29saWQ7XFxuICBjdXJzb3I6IG5vbmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiY2xhc3MgQ3Jvc3Mge1xuICBjb25zdHJ1Y3RvcihjLCBzY29yZWJvYXJkKSB7XG4gICAgdGhpcy5jID0gYztcbiAgICB0aGlzLnBvc1ggPSAwO1xuICAgIHRoaXMucG9zWSA9IDA7XG4gICAgdGhpcy5yYWRpdXMgPSAyMDtcbiAgICB0aGlzLnNob3RzID0gc2NvcmVib2FyZC5zaG90cztcbiAgICB0aGlzLmNsaWNrUG9zWCA9IDEwMDA7XG4gICAgdGhpcy5jbGlja1Bvc1kgPSAxMDAwO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuY2xpY2tQb3NYID0gMTAwMDtcbiAgICAgIHRoaXMuY2xpY2tQb3NZID0gMTAwMDtcbiAgICAgIHZhciBib3VuZHMgPSB0aGlzLmMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdGhpcy5wb3NYID0gZXZlbnQuY2xpZW50WCAtIGJvdW5kcy5sZWZ0O1xuICAgICAgdGhpcy5wb3NZID0gZXZlbnQuY2xpZW50WSAtIGJvdW5kcy50b3A7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5zaG90cy5jb3VudC0tO1xuICAgICAgdGhpcy5jbGlja0NvdW50Kys7XG4gICAgICB0aGlzLmNsaWNrUG9zWCA9IHRoaXMucG9zWDtcbiAgICAgIHRoaXMuY2xpY2tQb3NZID0gdGhpcy5wb3NZO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuYy5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmMuYXJjKHRoaXMucG9zWCwgdGhpcy5wb3NZLCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgIHRoaXMuYy5zdHJva2UoKTtcbiAgICB0aGlzLmMuc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuXG4gICAgdGhpcy5jLmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuYy5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgIHRoaXMuYy5hcmModGhpcy5wb3NYLCB0aGlzLnBvc1ksIDEsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICB0aGlzLmMuZmlsbCgpO1xuXG4gICAgdGhpcy5jLmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuYy5tb3ZlVG8odGhpcy5wb3NYICsgNSwgdGhpcy5wb3NZKTtcbiAgICB0aGlzLmMubGluZVRvKHRoaXMucG9zWCArIDI1LCB0aGlzLnBvc1kpO1xuICAgIHRoaXMuYy5tb3ZlVG8odGhpcy5wb3NYIC0gNSwgdGhpcy5wb3NZKTtcbiAgICB0aGlzLmMubGluZVRvKHRoaXMucG9zWCAtIDI1LCB0aGlzLnBvc1kpO1xuXG4gICAgdGhpcy5jLm1vdmVUbyh0aGlzLnBvc1gsIHRoaXMucG9zWSArIDUpO1xuICAgIHRoaXMuYy5saW5lVG8odGhpcy5wb3NYLCB0aGlzLnBvc1kgKyAyNSk7XG4gICAgdGhpcy5jLm1vdmVUbyh0aGlzLnBvc1gsIHRoaXMucG9zWSAtIDUpO1xuICAgIHRoaXMuYy5saW5lVG8odGhpcy5wb3NYLCB0aGlzLnBvc1kgLSAyNSk7XG4gICAgdGhpcy5jLnN0cm9rZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuYy5jbGVhclJlY3QoMCwgMCwgdGhpcy5jLmNhbnZhcy53aWR0aCwgdGhpcy5jLmNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDcm9zczsiLCJjbGFzcyBEdWNrIHtcbiAgY29uc3RydWN0b3IoYywgY3Jvc3MsIHJvdW5kQ291bnQsIHNjb3JlYm9hcmQpIHtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMuY3Jvc3MgPSBjcm9zcztcbiAgICB0aGlzLnNjb3JlYm9hcmQgPSBzY29yZWJvYXJkO1xuICAgIC8vIHRoaXMucG9zWCA9IE1hdGgucmFuZG9tKCkgKiA1MTI7XG4gICAgLy8gdGhpcy5wb3NZID0gMjAwO1xuICAgIHRoaXMucG9zWCA9IDQ0MjtcbiAgICB0aGlzLnBvc1kgPSAwO1xuICAgIHRoaXMudmVsWCA9IDAgKiByb3VuZENvdW50O1xuICAgIHRoaXMudmVsWSA9IDAgKiByb3VuZENvdW50O1xuICAgIHRoaXMucm91bmRDb3VudCA9IHJvdW5kQ291bnQ7XG4gICAgXG4gICAgdGhpcy5raWxsUG9zWCA9IDA7XG4gICAgdGhpcy5raWxsUG9zWSA9IDA7XG4gICAgXG4gICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcbiAgICB0aGlzLnRpY2tDb3VudCA9IDA7XG4gICAgdGhpcy50aWNrc1BlckZyYW1lID0gNDtcbiAgICBcbiAgICB0aGlzLmZhbGxGcmFtZUluZGV4ID0gMDtcbiAgICB0aGlzLmZhbGxUaWNrQ291bnQgPSAwO1xuICAgIHRoaXMuZmFsbFRpY2tzUGVyRnJhbWUgPSA0O1xuXG4gICAgdGhpcy5kaXJDb3VudCA9IDA7XG4gICAgdGhpcy5kaXJDb3VudE1heCA9IDA7XG5cbiAgICB0aGlzLmR1Y2tJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZHVja0ltYWdlLm9ubG9hZCA9ICgpID0+IHRoaXMuZHVja0ltYWdlUmVhZHkgPSB0cnVlO1xuICAgIHRoaXMuZHVja0ltYWdlLnNyYyA9IFwiXCI7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmNoYW5nZURpcigpO1xuXG4gICAgdGhpcy5mYWxsRHVja0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5mYWxsRHVja0ltYWdlLm9ubG9hZCA9ICgpID0+IHRoaXMuZmFsbER1Y2tJbWFnZVJlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLmZhbGxEdWNrSW1hZ2Uuc3JjID0gXCJpbWFnZXMvZmFsbF9kb3duLnBuZ1wiO1xuXG4gICAgdGhpcy5zcGxhdENvdW50ID0gMDtcbiAgICB0aGlzLmhpdER1Y2tJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaGl0RHVja0ltYWdlLm9ubG9hZCA9ICgpID0+IHRoaXMuaGl0RHVja0ltYWdlUmVhZHkgPSB0cnVlO1xuICAgIHRoaXMuaGl0RHVja0ltYWdlLnNyYyA9IFwiaW1hZ2VzL2ZseV9oaXQucG5nXCI7XG4gICAgXG4gICAgdGhpcy5oaXQgPSBmYWxzZTtcbiAgICB0aGlzLnNwbGF0RmluID0gZmFsc2U7XG4gICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5mYWxsRmluID0gZmFsc2U7XG4gICAgdGhpcy5mbHlGaW4gPSBmYWxzZTtcblxuICAgIHRoaXMudG91Y2hpbmdMZWZ0RWRnZSA9IGZhbHNlO1xuICAgIHRoaXMudG91Y2hpbmdSaWdodEVkZ2UgPSBmYWxzZTtcbiAgICB0aGlzLnRvdWNoaW5nVG9wRWRnZSA9IGZhbHNlO1xuICAgIHRoaXMudG91Y2hpbmdCb3R0b21FZGdlID0gZmFsc2U7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jLmZpbGxTdHlsZSA9ICdwdXJwbGUnO1xuICAgIHRoaXMuYy5maWxsUmVjdCg0NDIsIDAsIDcwLCA3MCk7XG4gICAgaWYgKCF0aGlzLmR1Y2tJbWFnZVJlYWR5KSByZXR1cm47XG4gICAgaWYgKCF0aGlzLmZhbGxEdWNrSW1hZ2VSZWFkeSkgcmV0dXJuO1xuXG4gICAgdGhpcy5yZW5kZXJGbHkoKTtcblxuICAgIGlmICh0aGlzLmZhbGxpbmcgJiYgIXRoaXMuc3BsYXRGaW4pIHtcbiAgICAgIHRoaXMucG9zWSA9IHRoaXMucG9zWTtcbiAgICAgIHRoaXMuc3BsYXRDb3VudCsrO1xuICAgICAgdGhpcy5yZW5kZXJTcGxhdCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mYWxsaW5nICYmIHRoaXMuc3BsYXRGaW4pIHtcbiAgICAgIHRoaXMucmVuZGVyRmFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckZseSgpIHtcbiAgICB0aGlzLmMuZHJhd0ltYWdlKHRoaXMuZHVja0ltYWdlLCBcbiAgICAgIHRoaXMuZnJhbWVJbmRleCAqIDEwOCAvIDMsIDAsIFxuICAgICAgMzYsIDM2LCBcbiAgICAgIHRoaXMucG9zWCwgdGhpcy5wb3NZLCBcbiAgICAgIDcwLCA3MFxuICAgICk7XG4gIH1cblxuICByZW5kZXJGYWxsKCkge1xuICAgIHRoaXMuc2NvcmVib2FyZC5yZW5kZXJQdHModGhpcy5raWxsUG9zWCwgdGhpcy5raWxsUG9zWSk7XG4gICAgdGhpcy5jLmRyYXdJbWFnZSh0aGlzLmZhbGxEdWNrSW1hZ2UsIFxuICAgICAgdGhpcy5mYWxsRnJhbWVJbmRleCAqIDcyIC8gMiwgMCwgXG4gICAgICAzNiwgMzYsIFxuICAgICAgdGhpcy5wb3NYLCB0aGlzLnBvc1ksIFxuICAgICAgNzAsIDcwXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclNwbGF0KCkge1xuICAgIHRoaXMucG9zWSAtPSAzO1xuICAgIHRoaXMuYy5kcmF3SW1hZ2UodGhpcy5oaXREdWNrSW1hZ2UsIFxuICAgICAgMCwgMCwgMzYsIDM2LCBcbiAgICAgIHRoaXMucG9zWCwgdGhpcy5wb3NZLCBcbiAgICAgIDcwLCA3MFxuICAgICk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5yYW5kb21pemVEaXJDb3VudE1heCgpO1xuICAgIHRoaXMuaXNUb3VjaGluZ0VkZ2UoKTtcbiAgICB0aGlzLnJlcGVsKCk7XG4gICAgdGhpcy5pc0ZhbGxGaW4oKTtcbiAgICB0aGlzLmlzRmx5RmluKCk7XG4gICAgdGhpcy51cGRhdGVEaXIoKTtcbiAgICB0aGlzLnVwZGF0ZVBvcygpO1xuICAgIHRoaXMudXBkYXRlRmx5KCk7XG4gICAgdGhpcy5pc1NwbGF0RmluKCk7XG4gIH1cbiAgXG4gIHVwZGF0ZUZseSgpIHtcbiAgICB0aGlzLnRpY2tDb3VudCsrO1xuICAgIGlmICh0aGlzLnRpY2tDb3VudCA+IHRoaXMudGlja3NQZXJGcmFtZSkge1xuICAgICAgdGhpcy50aWNrQ291bnQgPSAwO1xuICAgICAgdGhpcy5mcmFtZUluZGV4Kys7XG4gICAgICB0aGlzLmZhbGxGcmFtZUluZGV4Kys7XG4gICAgfVxuICAgIGlmICh0aGlzLmZyYW1lSW5kZXggPiAyKSB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgIGlmICh0aGlzLmZhbGxGcmFtZUluZGV4ID4gMSkgdGhpcy5mYWxsRnJhbWVJbmRleCA9IDA7XG4gIH1cbiAgXG4gIHVwZGF0ZURpcigpIHtcbiAgICB0aGlzLmRpckNvdW50Kys7IFxuICAgIGlmIChcbiAgICAgIHRoaXMuZGlyQ291bnQgPiB0aGlzLmRpckNvdW50TWF4ICYmXG4gICAgICB0aGlzLmRpcmVjdGlvbiAhPT0gXCJmYWxsXCJcbiAgICAgICkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuY2hhbmdlRGlyKCk7XG4gICAgICAgIHRoaXMuZGlyQ291bnQgPSAwO1xuICAgIH1cbiAgfVxuXG4gIHJhbmRvbWl6ZURpckNvdW50TWF4KCkge1xuICAgIGxldCBuID0gTWF0aC5yYW5kb20oKTtcbiAgICB0aGlzLmRpckNvdW50TWF4ID0gbiAqIDQwMDtcbiAgfVxuXG4gIHVwZGF0ZVBvcygpIHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwiZXNjYXBlXCIpIHRoaXMuZXNjYXBlKCk7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImZhbGxcIikgdGhpcy5mYWxsRG93bigpO1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHRoaXMubGVmdCgpO1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB0aGlzLnJpZ2h0KCk7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInRvcC1sZWZ0XCIpIHRoaXMudG9wTGVmdCgpO1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJ0b3AtcmlnaHRcIikgdGhpcy50b3BSaWdodCgpO1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJib3QtbGVmdFwiKSB0aGlzLmJvdHRvbUxlZnQoKTtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwiYm90LXJpZ2h0XCIpIHRoaXMuYm90dG9tUmlnaHQoKTtcbiAgfVxuICBcbiAgaXNUb3VjaGluZ0VkZ2UoKSB7XG4gICAgaWYgKCF0aGlzLmZhbGxpbmcpIHtcbiAgICAgIGlmICh0aGlzLnBvc1kgPiAzMDApIHRoaXMudG91Y2hpbmdCb3R0b21FZGdlID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnBvc1kgPCAwKSB0aGlzLnRvdWNoaW5nVG9wRWRnZSA9IHRydWU7XG4gICAgICBpZiAodGhpcy5wb3NYIDwgMCkgdGhpcy50b3VjaGluZ0xlZnRFZGdlID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnBvc1ggPiA0NDIpIHRoaXMudG91Y2hpbmdSaWdodEVkZ2UgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJlcGVsKCkge1xuICAgIGlmICh0aGlzLnRvdWNoaW5nTGVmdEVkZ2UpIHtcbiAgICAgIHRoaXMudG91Y2hpbmdMZWZ0RWRnZSA9IGZhbHNlO1xuICAgICAgdGhpcy5wb3NYICs9IHRoaXMudmVsWDsgXG4gICAgfVxuICAgIGlmICh0aGlzLnRvdWNoaW5nUmlnaHRFZGdlKSB7XG4gICAgICB0aGlzLnRvdWNoaW5nUmlnaHRFZGdlID0gZmFsc2U7XG4gICAgICB0aGlzLnBvc1ggLT0gdGhpcy52ZWxYO1xuICAgIH1cbiAgICBpZiAodGhpcy50b3VjaGluZ1RvcEVkZ2UpIHtcbiAgICAgIHRoaXMudG91Y2hpbmdUb3BFZGdlID0gZmFsc2U7XG4gICAgICB0aGlzLnBvc1kgKz0gdGhpcy52ZWxZO1xuICAgIH1cbiAgICBpZiAodGhpcy50b3VjaGluZ0JvdHRvbUVkZ2UpIHtcbiAgICAgIHRoaXMudG91Y2hpbmdCb3R0b21FZGdlID0gZmFsc2U7XG4gICAgICB0aGlzLnBvc1kgLT0gdGhpcy52ZWxZO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZURpcigpIHtcbiAgICBpZiAodGhpcy5jb2xsaXNpb24oKSkge1xuICAgICAgdGhpcy5mYWxsaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMua2lsbFBvc1ggPSB0aGlzLmNyb3NzLmNsaWNrUG9zWDtcbiAgICAgIHRoaXMua2lsbFBvc1kgPSB0aGlzLmNyb3NzLmNsaWNrUG9zWTtcblxuICAgICAgdGhpcy5kdWNrSW1hZ2Uuc3JjID0gXCJcIjtcbiAgICAgIHRoaXMuaGl0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJmYWxsXCI7XG4gICAgICByZXR1cm4gXCJmYWxsXCI7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2NvcmVib2FyZC5zaG90cy5jb3VudCA9PT0gMCkge1xuICAgICAgdGhpcy5kdWNrSW1hZ2Uuc3JjID0gXCJpbWFnZXMvZmx5X3VwLnBuZ1wiO1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImVzY2FwZVwiO1xuICAgICAgcmV0dXJuIFwiZXNjYXBlXCI7XG4gICAgfVxuXG4gICAgbGV0IG51bSA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKCBudW0gPCAwLjE2NjcgKSB7XG4gICAgICB0aGlzLmR1Y2tJbWFnZS5zcmMgPSBcImltYWdlcy9mbHlfbGVmdC5wbmdcIjtcbiAgICAgIHJldHVybiBcImxlZnRcIjtcbiAgICB9XG4gICAgaWYgKCBudW0gPiAwLjE2NjcgJiYgbnVtIDwgMC4zMzMzICkge1xuICAgICAgdGhpcy5kdWNrSW1hZ2Uuc3JjID0gXCJpbWFnZXMvZmx5X3JpZ2h0LnBuZ1wiO1xuICAgICAgcmV0dXJuIFwicmlnaHRcIjtcbiAgICB9XG4gICAgaWYgKCBudW0gPiAwLjMzMzMgJiYgbnVtIDwgMC41MCApIHtcbiAgICAgIHRoaXMuZHVja0ltYWdlLnNyYyA9IFwiaW1hZ2VzL2ZseV90b3BfbGVmdC5wbmdcIjtcbiAgICAgIHJldHVybiBcInRvcC1sZWZ0XCI7XG4gICAgfVxuICAgIGlmICggbnVtID4gMC41MCAmJiBudW0gPCAwLjY2NyApIHtcbiAgICAgIHRoaXMuZHVja0ltYWdlLnNyYyA9IFwiaW1hZ2VzL2ZseV90b3BfcmlnaHQucG5nXCI7XG4gICAgICByZXR1cm4gXCJ0b3AtcmlnaHRcIjtcbiAgICB9XG4gICAgaWYgKCBudW0gPiAwLjY2NyAmJiBudW0gPCAwLjgzMyApIHtcbiAgICAgIHRoaXMuZHVja0ltYWdlLnNyYyA9IFwiaW1hZ2VzL2ZseV90b3BfbGVmdC5wbmdcIjtcbiAgICAgIHJldHVybiBcImJvdC1sZWZ0XCI7XG4gICAgfVxuICAgIGlmICggbnVtID4gMC44MzMgJiYgbnVtIDwgMSApIHtcbiAgICAgIHRoaXMuZHVja0ltYWdlLnNyYyA9IFwiaW1hZ2VzL2ZseV90b3BfcmlnaHQucG5nXCI7XG4gICAgICByZXR1cm4gXCJib3QtcmlnaHRcIjtcbiAgICB9XG4gIH1cblxuICBsZWZ0KCkge1xuICAgIHRoaXMucG9zWCAtPSB0aGlzLnZlbFg7IFxuICB9XG5cbiAgcmlnaHQoKSB7IFxuICAgIHRoaXMucG9zWCArPSB0aGlzLnZlbFg7IFxuICB9XG5cbiAgZXNjYXBlKCkge1xuICAgIHRoaXMucG9zWSAtPSA3OyBcbiAgfVxuXG4gIGZhbGxEb3duKCkgeyBcbiAgICB0aGlzLnBvc1kgKz0gMzsgXG4gIH1cblxuICB0b3BMZWZ0KCkge1xuICAgIHRoaXMucG9zWCAtPSB0aGlzLnZlbFg7XG4gICAgdGhpcy5wb3NZIC09IHRoaXMudmVsWTtcbiAgfVxuXG4gIHRvcFJpZ2h0KCkge1xuICAgIHRoaXMucG9zWCArPSB0aGlzLnZlbFg7XG4gICAgdGhpcy5wb3NZIC09IHRoaXMudmVsWTtcbiAgfVxuXG4gIGJvdHRvbUxlZnQoKSB7XG4gICAgdGhpcy5wb3NYIC09IHRoaXMudmVsWDtcbiAgICB0aGlzLnBvc1kgKz0gdGhpcy52ZWxZO1xuICB9XG5cbiAgYm90dG9tUmlnaHQoKSB7XG4gICAgdGhpcy5wb3NYICs9IHRoaXMudmVsWDtcbiAgICB0aGlzLnBvc1kgKz0gdGhpcy52ZWxZO1xuICB9XG5cbiAgY29sbGlzaW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmNyb3NzLmNsaWNrUG9zWCA+IHRoaXMucG9zWCAmJiBcbiAgICAgIHRoaXMuY3Jvc3MuY2xpY2tQb3NYIDwgdGhpcy5wb3NYICsgMzUgJiZcbiAgICAgIHRoaXMuY3Jvc3MuY2xpY2tQb3NZID4gdGhpcy5wb3NZICYmXG4gICAgICB0aGlzLmNyb3NzLmNsaWNrUG9zWSA8IHRoaXMucG9zWSArIDM1XG4gICAgKTtcbiAgfVxuXG4gIGlzRmFsbEZpbigpIHtcbiAgICBpZiAodGhpcy5wb3NZID4gMzI1KSB7XG4gICAgICB0aGlzLmZhbGxGaW4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlzRmx5RmluKCkge1xuICAgIGlmICh0aGlzLnBvc1kgPCAtNzUpIHtcbiAgICAgIHRoaXMuZmx5RmluID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpc1NwbGF0RmluKCkge1xuICAgIGlmICh0aGlzLnNwbGF0Q291bnQgPiAyMCkge1xuICAgICAgdGhpcy5zcGxhdEZpbiA9IHRydWU7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRHVjazsiLCJjbGFzcyBEdWNrcyB7XG4gIGNvbnN0cnVjdG9yKGMpIHtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMud2F2ZUNvdW50ID0gMDtcbiAgICB0aGlzLmFyciA9IFswLDAsMCwwLDAsMCwwLDAsMCwwXTtcblxuICAgIHRoaXMudGlja0NvdW50ID0gMDtcbiAgICB0aGlzLnRpY2tzUGVyRnJhbWUgPSAzO1xuXG4gICAgdGhpcy50cmlQb3MxWCA9IDE5MjtcbiAgICB0aGlzLnRyaVBvczJYID0gMjAyO1xuICAgIHRoaXMudHJpUG9zM1ggPSAxOTc7XG5cbiAgICB0aGlzLmR1Y2tJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuZHVja0ltYWdlLm9ubG9hZCA9ICgpID0+IHRoaXMuZHVja0ltYWdlUmVhZHkgPSB0cnVlO1xuICAgIHRoaXMuZHVja0ltYWdlLnNyYyA9IFwiaW1hZ2VzL21pc3NlZF9kdWNrLnBuZ1wiO1xuXG4gICAgdGhpcy5oaXREdWNrSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmhpdER1Y2tJbWFnZS5vbmxvYWQgPSAoKSA9PiB0aGlzLmhpdER1Y2tJbWFnZVJlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLmhpdER1Y2tJbWFnZS5zcmMgPSBcImltYWdlcy9oaXRfZHVjay5wbmdcIjtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5kdWNrSW1hZ2VSZWFkeSkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5oaXREdWNrSW1hZ2VSZWFkeSkgcmV0dXJuO1xuXG4gICAgdGhpcy5jLmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuYy5tb3ZlVG8odGhpcy50cmlQb3MxWCArIHRoaXMud2F2ZUNvdW50ICogMTYsIDM5NSk7XG4gICAgdGhpcy5jLmxpbmVUbyh0aGlzLnRyaVBvczJYICsgdGhpcy53YXZlQ291bnQgKiAxNiwgMzk1KTtcbiAgICB0aGlzLmMubGluZVRvKHRoaXMudHJpUG9zM1ggKyB0aGlzLndhdmVDb3VudCAqIDE2LCA0MDUpO1xuICAgIHRoaXMuYy5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgdGhpcy5jLmZpbGwoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmFycltpXSA9PT0gMCkge1xuICAgICAgICB0aGlzLmMuZHJhd0ltYWdlKFxuICAgICAgICAgIHRoaXMuZHVja0ltYWdlLFxuICAgICAgICAgIDAsIDAsIDI1LCAyNSxcbiAgICAgICAgICAxNzUrICgoaSsxKSoxNiksIDQxNSxcbiAgICAgICAgICAxNiwgMTZcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFycltpXSA9PT0gMSkge1xuICAgICAgICB0aGlzLmMuZHJhd0ltYWdlKFxuICAgICAgICAgIHRoaXMuaGl0RHVja0ltYWdlLFxuICAgICAgICAgIDAsIDAsIDI1LCAyNSxcbiAgICAgICAgICAxNzUgKyAoKGkrMSkqMTYpLCA0MTUsXG4gICAgICAgICAgMTYsIDE2XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudGlja0NvdW50Kys7XG4gICAgaWYgKHRoaXMudGlja0NvdW50ID4gdGhpcy50aWNrc1BlckZyYW1lKSB7XG4gICAgICB0aGlzLnRpY2tDb3VudCA9IDA7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRHVja3M7IiwiXG5jbGFzcyBFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKGMpIHtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHRoaXMuaW1hZ2VSZWFkeSA9IHRydWU7XG4gICAgdGhpcy5pbWFnZS5zcmMgPSBcImltYWdlcy9kdWNraHVudC1zdGF0aWMtMS5wbmdcIjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuaW1hZ2VSZWFkeSkgcmV0dXJuO1xuICAgIHRoaXMuYy5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgMCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbnZpcm9ubWVudDsgIiwiY29uc3QgUm91bmQgPSByZXF1aXJlKFwiLi9yb3VuZC5qc1wiKTsgXG5jb25zdCBDcm9zcyA9IHJlcXVpcmUoXCIuL2Nyb3NzLmpzXCIpO1xuY29uc3QgU2NvcmVib2FyZCA9IHJlcXVpcmUoXCIuL3Njb3JlYm9hcmQuanNcIik7XG5jb25zdCBFbnZpcm9ubWVudCA9IHJlcXVpcmUoXCIuL2Vudmlyb25tZW50LmpzXCIpO1xuY29uc3QgR2FtZU92ZXJTY3JlZW4gPSByZXF1aXJlKFwiLi9nYW1lX292ZXJfc2NyZWVuLmpzXCIpO1xuY29uc3QgRHVja3MgPSByZXF1aXJlKFwiLi9kdWNrc1wiKTtcbmNvbnN0IEdhbWVTdGFydEFuaSA9IHJlcXVpcmUoXCIuL2dhbWVfc3RhcnRfYW5pXCIpO1xuY29uc3QgUm91bmRTY3JlZW4gPSByZXF1aXJlKFwiLi9yb3VuZF9zY3JlZW5cIik7XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjKSB7XG4gICAgdGhpcy5jID0gYztcbiAgICB0aGlzLnJvdW5kQ291bnQgPSAxO1xuICAgIHRoaXMuc3RhcnQgPSB0cnVlO1xuICAgIFxuICAgIHRoaXMuZ2FtZVN0YXJ0QW5pID0gbmV3IEdhbWVTdGFydEFuaSh0aGlzLmMpO1xuICAgIHRoaXMucm91bmRTY3JlZW4gPSBuZXcgUm91bmRTY3JlZW4odGhpcy5jLCB0aGlzLnJvdW5kQ291bnQpO1xuICAgIHRoaXMuc2NvcmVib2FyZCA9IG5ldyBTY29yZWJvYXJkKHRoaXMuYyk7XG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCh0aGlzLmMpO1xuICAgIHRoaXMuY3Jvc3MgPSBuZXcgQ3Jvc3ModGhpcy5jLCB0aGlzLnNjb3JlYm9hcmQpO1xuICAgIHRoaXMucm91bmQgPSBuZXcgUm91bmQodGhpcy5jLCB0aGlzLnJvdW5kQ291bnQsIHRoaXMuY3Jvc3MsIHRoaXMuc2NvcmVib2FyZCk7XG5cbiAgICB0aGlzLmlzTmV3Um91bmQgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWVPdmVyU2NyZWVuID0gbmV3IEdhbWVPdmVyU2NyZWVuKHRoaXMuYyk7XG4gICAgdGhpcy5sb29wID0gdGhpcy5sb29wLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gIH1cblxuICBsb29wKCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmlzU3RhcnQoKTtcbiAgICB0aGlzLmlzR2FtZU92ZXIoKTtcbiAgICB0aGlzLmdhbWVTdGFydEFuaS51cGRhdGUoKTtcbiAgICB0aGlzLnJvdW5kLnVwZGF0ZSgpO1xuICAgIHRoaXMuc2NvcmVib2FyZC51cGRhdGUoKTtcbiAgICB0aGlzLmNyb3NzLnVwZGF0ZSgpO1xuICAgIFxuICAgIGlmICh0aGlzLnJvdW5kLnJvdW5kT3Zlcikge1xuICAgICAgdGhpcy5zY29yZWJvYXJkLnJvdW5kQ291bnQrKztcbiAgICAgIHRoaXMucm91bmRDb3VudCsrO1xuICAgICAgdGhpcy5uZXdEdWNrcygpO1xuICAgICAgdGhpcy5uZXdSb3VuZCgpO1xuICAgICAgdGhpcy5uZXdSb3VuZFNjcmVlbigpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLnJvdW5kU2NyZWVuLnVwZGF0ZSgpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5lbnZpcm9ubWVudC5yZW5kZXIoKTtcblxuICAgIGlmICh0aGlzLnN0YXJ0KSB7XG4gICAgICB0aGlzLmdhbWVTdGFydEFuaS5yZW5kZXIoKTtcbiAgICAgIHRoaXMuaXNOZXdSb3VuZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN0YXJ0ICYmICF0aGlzLmdhbWVPdmVyKSB7XG4gICAgICB0aGlzLnJvdW5kLnJlbmRlcigpO1xuICAgICAgdGhpcy5lbnZpcm9ubWVudC5yZW5kZXIoKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuaXNOZXdSb3VuZCkge1xuICAgICAgdGhpcy5yb3VuZFNjcmVlbi5yZW5kZXIoKTtcbiAgICAgIGlmICh0aGlzLnJvdW5kU2NyZWVuLmFuaUZpbikge1xuICAgICAgICB0aGlzLmlzTmV3Um91bmQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNjb3JlYm9hcmQucmVuZGVyKCk7XG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIpIHt0aGlzLmdhbWVPdmVyU2NyZWVuLnJlbmRlcigpO31cbiAgICB0aGlzLmNyb3NzLnJlbmRlcigpO1xuICB9XG4gIFxuICBuZXdSb3VuZFNjcmVlbigpIHtcbiAgICB0aGlzLnJvdW5kU2NyZWVuID0gbmV3IFJvdW5kU2NyZWVuKHRoaXMuYywgdGhpcy5yb3VuZENvdW50KTtcbiAgfVxuXG4gIG5ld1JvdW5kKCkge1xuICAgIHRoaXMucm91bmQgPSBuZXcgUm91bmQodGhpcy5jLCB0aGlzLnJvdW5kQ291bnQsIHRoaXMuY3Jvc3MsIHRoaXMuc2NvcmVib2FyZCk7XG4gICAgdGhpcy5pc05ld1JvdW5kID0gdHJ1ZTtcbiAgfVxuXG4gIG5ld0R1Y2tzKCkge1xuICAgIHRoaXMuc2NvcmVib2FyZC5kdWNrcyA9IG5ldyBEdWNrcyh0aGlzLmMpO1xuICB9XG5cbiAgaXNTdGFydCgpIHtcbiAgICBpZiAodGhpcy5nYW1lU3RhcnRBbmkuanVtcEVuZEZpbikge1xuICAgICAgdGhpcy5zdGFydCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBcbiAgaXNHYW1lT3ZlcigpIHtcbiAgICBsZXQgZHVja3NIaXQgPSB0aGlzLnNjb3JlYm9hcmQuZHVja3MuYXJyLmZpbHRlcihlbCA9PiBlbCA9PT0gMSkubGVuZ3RoO1xuICAgIGlmIChkdWNrc0hpdCA8PSA1ICYmIHRoaXMucm91bmQud2F2ZUNvdW50ID09PSAxMCkge1xuICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgfSBcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiY2xhc3MgR2FtZU92ZXJTY3JlZW4ge1xuICBjb25zdHJ1Y3RvcihjKSB7XG4gICAgdGhpcy5jID0gYztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmMuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmMuZmlsbFJlY3QoMTMyLCAxMDAsIDI1MCwgMTAwKTtcblxuICAgIHRoaXMuYy5mb250ID0gXCIyMC41cHggUGl4ZWwgRW11bGF0b3JcIjtcbiAgICB0aGlzLmMuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIHRoaXMuYy50ZXh0QWxpZ24gPSBcImNlbnRlclwiOyBcbiAgICB0aGlzLmMuZmlsbFRleHQoJ2dhbWUgb3ZlcicsIDI1NiwgMTQyKTtcbiAgICB0aGlzLmMuZmlsbFRleHQoJ3BsYXkgYWdhaW4nLCAyNTYsIDE3MCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lT3ZlclNjcmVlbjsiLCJjbGFzcyBHYW1lU3RhcnRBbmkge1xuICBjb25zdHJ1Y3RvcihjKSB7XG4gICAgdGhpcy5jID0gYztcbiAgICB0aGlzLmRvZ1Bvc1ggPSAwO1xuICAgIHRoaXMuZG9nUG9zWSA9IDI3NTtcblxuICAgIC8vd2FsayBhbmQgc25pZmZcbiAgICB0aGlzLnNuaWZmMUZpbiA9IGZhbHNlO1xuICAgIHRoaXMuc25pZmYyRmluID0gZmFsc2U7XG4gICAgdGhpcy5zbmlmZjFDb3VudCA9IDA7XG4gICAgdGhpcy5zbmlmZjJDb3VudCA9IDA7XG5cbiAgICB0aGlzLndhbGsxRmluID0gZmFsc2U7XG4gICAgdGhpcy53YWxrMkZpbiA9IGZhbHNlO1xuICAgIHRoaXMud2FsazFDb3VudCA9IDA7XG4gICAgdGhpcy53YWxrMkNvdW50ID0gMDtcblxuICAgIHRoaXMucGF1c2UxQ291bnQgPSAwO1xuICAgIHRoaXMucGF1c2UyQ291bnQgPSAwO1xuXG4gICAgdGhpcy5zbmlmZkZyYW1lSW5kZXggPSAwO1xuICAgIHRoaXMuc25pZmZUaWNrQ291bnQgPSAwO1xuICAgIHRoaXMuc25pZmZUaWNrc1BlckZyYW1lID0gMTA7XG5cbiAgICB0aGlzLnNuaWZmSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnNuaWZmSW1hZ2Uub25sb2FkID0gKCkgPT4gdGhpcy5zbmlmZkltYWdlUmVhZHkgPSB0cnVlO1xuICAgIHRoaXMuc25pZmZJbWFnZS5zcmMgPSBcImltYWdlcy9kb2dfc25pZmYucG5nXCI7XG5cbiAgICB0aGlzLndhbGtGcmFtZUluZGV4ID0gMDtcbiAgICB0aGlzLndhbGtUaWNrQ291bnQgPSAwO1xuICAgIHRoaXMud2Fsa1RpY2tzUGVyRnJhbWUgPSA2O1xuXG4gICAgdGhpcy53YWxrSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLndhbGtJbWFnZS5vbmxvYWQgPSAoKSA9PiB0aGlzLndhbGtJbWFnZVJlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLndhbGtJbWFnZS5zcmMgPSBcImltYWdlcy9kb2dfd2Fsay5wbmdcIjtcblxuICAgIC8vanVtcFxuICAgIHRoaXMuc2hvY2tGaW4gPSBmYWxzZTtcbiAgICB0aGlzLnNob2NrQ291bnQgPSAwO1xuXG4gICAgdGhpcy5qdW1wU3RhcnRGaW4gPSBmYWxzZTtcbiAgICB0aGlzLmp1bXBTdGFydENvdW50ID0gMDtcblxuICAgIHRoaXMuanVtcEVuZEZpbiA9IGZhbHNlO1xuICAgIHRoaXMuanVtcEVuZENvdW50ID0gMDtcblxuICAgIHRoaXMuanVtcEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5qdW1wSW1hZ2Uub25sb2FkID0gKCkgPT4gdGhpcy5qdW1wSW1hZ2VSZWFkeSA9IHRydWU7XG4gICAgdGhpcy5qdW1wSW1hZ2Uuc3JjID0gXCJpbWFnZXMvZG9nX2p1bXAucG5nXCI7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnNuaWZmMkZpbikge1xuICAgICAgdGhpcy5yZW5kZXJXYWxrQW5kU25pZmYoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJKdW1wKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlU25pZmYoKTtcbiAgICB0aGlzLnVwZGF0ZVdhbGsoKTtcbiAgICB0aGlzLmlzV2FsazFGaW4oKTtcbiAgICB0aGlzLmlzV2FsazJGaW4oKTtcbiAgICB0aGlzLmlzU25pZmYxRmluKCk7XG4gICAgdGhpcy5pc1NuaWZmMkZpbigpO1xuICAgIHRoaXMuaXNTaG9ja0ZpbigpO1xuICAgIHRoaXMuaXNKdW1wU3RhcnRGaW4oKTtcbiAgICB0aGlzLmlzSnVtcEVuZEZpbigpO1xuICB9XG5cbiAgLy93YWxrIGFuZCBzbmlmZiByZW5kZXIgZnVuY3Rpb25zXG4gIHJlbmRlcldhbGtBbmRTbmlmZigpIHtcbiAgICBpZiAoIXRoaXMud2FsazFGaW4pIHtcbiAgICAgIHRoaXMucmVuZGVyV2FsaygpO1xuICAgICAgdGhpcy5kb2dQb3NYKys7XG4gICAgICB0aGlzLndhbGsxQ291bnQrKztcbiAgICB9XG4gICAgaWYgKHRoaXMud2FsazFGaW4gJiYgIXRoaXMuc25pZmYxRmluKSB7XG4gICAgICB0aGlzLnJlbmRlclNuaWZmKCk7XG4gICAgICB0aGlzLnNuaWZmMUNvdW50Kys7XG4gICAgfVxuICAgIGlmICh0aGlzLndhbGsxRmluICYmIHRoaXMuc25pZmYxRmluICYmICF0aGlzLndhbGsyRmluKSB7XG4gICAgICB0aGlzLnJlbmRlcldhbGsoKTtcbiAgICAgIHRoaXMuZG9nUG9zWCsrO1xuICAgICAgdGhpcy53YWxrMkNvdW50Kys7XG4gICAgfVxuICAgIGlmICh0aGlzLndhbGsxRmluICYmIHRoaXMuc25pZmYxRmluICYmIHRoaXMud2FsazJGaW4pIHtcbiAgICAgIHRoaXMucmVuZGVyU25pZmYoKTtcbiAgICAgIHRoaXMuc25pZmYyQ291bnQrKztcbiAgICB9XG4gIH1cblxuICByZW5kZXJXYWxrKCkge1xuICAgIHRoaXMuYy5kcmF3SW1hZ2UodGhpcy53YWxrSW1hZ2UsIFxuICAgICAgdGhpcy53YWxrRnJhbWVJbmRleCAqIDE4MCAvIDMsIDAsXG4gICAgICA2MCwgNjAsIFxuICAgICAgdGhpcy5kb2dQb3NYLCAyNzUsIFxuICAgICAgMTI1LCAxMjUpO1xuICB9XG5cbiAgcmVuZGVyU25pZmYoKSB7XG4gICAgdGhpcy5jLmRyYXdJbWFnZSh0aGlzLnNuaWZmSW1hZ2UsIFxuICAgICAgdGhpcy5zbmlmZkZyYW1lSW5kZXggKiAxMjAgLyAyLCAwLFxuICAgICAgNjAsIDYwLCBcbiAgICAgIHRoaXMuZG9nUG9zWCwgMjc1LCBcbiAgICAgIDEyNSwgMTI1KTtcbiAgfVxuXG4gIC8vIHNwcml0ZSB1cGRhdGUgZnVuY3Rpb25zXG4gIHVwZGF0ZVNuaWZmKCkge1xuICAgIHRoaXMuc25pZmZUaWNrQ291bnQrKztcbiAgICBpZiAodGhpcy5zbmlmZlRpY2tDb3VudCA+IHRoaXMuc25pZmZUaWNrc1BlckZyYW1lKSB7XG4gICAgICB0aGlzLnNuaWZmVGlja0NvdW50ID0gMDtcbiAgICAgIHRoaXMuc25pZmZGcmFtZUluZGV4Kys7XG4gICAgfVxuICAgIGlmICh0aGlzLnNuaWZmRnJhbWVJbmRleCA+IDEpIHtcbiAgICAgIHRoaXMuc25pZmZGcmFtZUluZGV4ID0gMDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVXYWxrKCkge1xuICAgIHRoaXMud2Fsa1RpY2tDb3VudCsrO1xuICAgIGlmICh0aGlzLndhbGtUaWNrQ291bnQgPiB0aGlzLndhbGtUaWNrc1BlckZyYW1lKSB7XG4gICAgICB0aGlzLndhbGtUaWNrQ291bnQgPSAwO1xuICAgICAgdGhpcy53YWxrRnJhbWVJbmRleCsrO1xuICAgIH1cbiAgICBpZiAodGhpcy53YWxrRnJhbWVJbmRleCA+IDIpIHtcbiAgICAgIHRoaXMud2Fsa0ZyYW1lSW5kZXggPSAwO1xuICAgIH1cbiAgfVxuICBcbiAgLy8ganVtcCByZW5kZXIgZnVuY3Rpb25zXG4gIHJlbmRlclNob2NrKCkge1xuICAgIHRoaXMuYy5kcmF3SW1hZ2UodGhpcy5qdW1wSW1hZ2UsIFxuICAgICAgMCwgMCxcbiAgICAgIDYwLCA2MCwgXG4gICAgICB0aGlzLmRvZ1Bvc1gsIDI3NSwgXG4gICAgICAxMjUsIDEyNSk7XG4gICAgfVxuICAgIFxuICByZW5kZXJKdW1wU3RhcnQoKSB7XG4gICAgdGhpcy5jLmRyYXdJbWFnZSh0aGlzLmp1bXBJbWFnZSwgXG4gICAgICA2MCwgMCxcbiAgICAgIDYwLCA2MCwgXG4gICAgICB0aGlzLmRvZ1Bvc1gsIHRoaXMuZG9nUG9zWSwgXG4gICAgICAxMjUsIDEyNSk7IFxuICAgIH1cbiAgICBcbiAgcmVuZGVySnVtcEVuZCgpIHtcbiAgICB0aGlzLmMuZHJhd0ltYWdlKHRoaXMuanVtcEltYWdlLCBcbiAgICAgIDEyMCwgMCxcbiAgICAgIDYwLCA2MCwgXG4gICAgICB0aGlzLmRvZ1Bvc1gsIHRoaXMuZG9nUG9zWSwgXG4gICAgICAxMjUsIDEyNSk7XG4gICAgfVxuICAgICAgICBcbiAgcmVuZGVySnVtcCgpIHtcbiAgICBpZiAoIXRoaXMuc2hvY2tGaW4pIHtcbiAgICAgIHRoaXMuYy5kcmF3SW1hZ2UodGhpcy5qdW1wSW1hZ2UsIFxuICAgICAgICAwLCAwLFxuICAgICAgICA2MCwgNjAsIFxuICAgICAgICB0aGlzLmRvZ1Bvc1gsIDI3NSwgXG4gICAgICAgIDEyNSwgMTI1KTtcbiAgICAgIHRoaXMuc2hvY2tDb3VudCsrO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaG9ja0ZpbiAmJiAhdGhpcy5qdW1wU3RhcnRGaW4pIHtcbiAgICAgIHRoaXMucmVuZGVySnVtcFN0YXJ0KCk7XG4gICAgICB0aGlzLmp1bXBTdGFydENvdW50Kys7XG4gICAgfVxuICAgIGlmICh0aGlzLmp1bXBTdGFydEZpbiAmJiB0aGlzLnNob2NrRmluKSB7XG4gICAgICB0aGlzLnJlbmRlckp1bXBFbmQoKTtcbiAgICAgIHRoaXMuanVtcEVuZENvdW50Kys7XG4gICAgfVxuICAgIGlmICh0aGlzLmp1bXBFbmRGaW4pIHtcbiAgICAgIHRoaXMuanVtcEltYWdlLnNyYyA9IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgLy8ganVtcCB1cGRhdGUgZnVuY3Rpb25zXG4gIGlzV2FsazFGaW4oKSB7aWYgKHRoaXMud2FsazFDb3VudCA+IDUwKSB0aGlzLndhbGsxRmluID0gdHJ1ZTt9XG4gIGlzU25pZmYxRmluKCkge2lmICh0aGlzLnNuaWZmMUNvdW50ID4gNDApIHRoaXMuc25pZmYxRmluID0gdHJ1ZTt9XG4gIGlzV2FsazJGaW4oKSB7aWYgKHRoaXMud2FsazJDb3VudCA+IDQwKSB0aGlzLndhbGsyRmluID0gdHJ1ZTt9XG4gIGlzU25pZmYyRmluKCkge2lmICh0aGlzLnNuaWZmMkNvdW50ID4gNDApIHRoaXMuc25pZmYyRmluID0gdHJ1ZTt9XG4gIGlzU2hvY2tGaW4oKSB7XG4gICAgaWYgKHRoaXMuc2hvY2tDb3VudCA+IDIwKSB7XG4gICAgICB0aGlzLnNob2NrRmluID0gdHJ1ZTtcbiAgICAgIHRoaXMuZG9nUG9zWCArPSAyO1xuICAgICAgdGhpcy5kb2dQb3NZIC09IDEuNTtcbiAgICB9XG4gIH1cbiAgaXNKdW1wU3RhcnRGaW4oKSB7XG4gICAgaWYgKHRoaXMuanVtcFN0YXJ0Q291bnQgPiA2MCkge1xuICAgICAgdGhpcy5qdW1wU3RhcnRGaW4gPSB0cnVlO1xuICAgICAgdGhpcy5kb2dQb3NZICs9IDg7XG4gICAgICB0aGlzLmRvZ1Bvc1ggLT0gMjtcbiAgICB9XG4gIH1cbiAgaXNKdW1wRW5kRmluKCkge2lmICh0aGlzLmp1bXBFbmRDb3VudCA+IDcpIHRoaXMuanVtcEVuZEZpbiA9IHRydWU7fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVTdGFydEFuaTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmNvbnN0IEdhbWUgPSByZXF1aXJlKFwiLi9nYW1lLmpzXCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZXZlbnQpID0+IHtcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgdmFyIGMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICBsZXQgZ2FtZSA9IG5ldyBHYW1lKGMpO1xuICBnYW1lLmxvb3AoKTtcbn0pO1xuIiwiY29uc3QgV2F2ZSA9IHJlcXVpcmUoXCIuL3dhdmUuanNcIik7XG5cbmNsYXNzIFJvdW5kIHtcbiAgY29uc3RydWN0b3IoYywgcm91bmRDb3VudCwgY3Jvc3MsIHNjb3JlYm9hcmQpIHtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMuY3Jvc3MgPSBjcm9zcztcbiAgICB0aGlzLnJvdW5kQ291bnQgPSByb3VuZENvdW50O1xuICAgIHRoaXMuc2NvcmVib2FyZCA9IHNjb3JlYm9hcmQ7XG4gICAgdGhpcy53YXZlQ291bnQgPSAwO1xuXG4gICAgdGhpcy53YXZlID0gbmV3IFdhdmUodGhpcy5jLCB0aGlzLmNyb3NzLCB0aGlzLnNjb3JlYm9hcmQsIHRoaXMucm91bmRDb3VudCwgdGhpcy53YXZlQ291bnQpO1xuXG4gICAgdGhpcy5yb3VuZE92ZXIgPSBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLndhdmUucmVuZGVyKCk7XG4gIH1cbiAgXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLndhdmUudXBkYXRlKCk7XG4gICAgdGhpcy5pc1JvdW5kT3ZlcigpO1xuXG4gICAgaWYgKHRoaXMud2F2ZS53YXZlT3Zlcikge1xuICAgICAgdGhpcy53YXZlQ291bnQrKztcbiAgICAgIHRoaXMuc2NvcmVib2FyZC5kdWNrcy53YXZlQ291bnQrKztcbiAgICAgIHRoaXMucmVzZXRTaG90cygpO1xuICAgICAgdGhpcy5uZXdXYXZlKCk7XG4gICAgfVxuICB9XG5cbiAgbmV3V2F2ZSgpIHtcbiAgICB0aGlzLndhdmUgPSBuZXcgV2F2ZSh0aGlzLmMsIHRoaXMuY3Jvc3MsIHRoaXMuc2NvcmVib2FyZCwgdGhpcy5yb3VuZENvdW50LCB0aGlzLndhdmVDb3VudCk7XG4gIH1cblxuICBpc1JvdW5kT3ZlcigpIHtcbiAgICBpZiAodGhpcy53YXZlQ291bnQgPT09IDEwKSB7XG4gICAgICB0aGlzLnJvdW5kT3ZlciA9IHRydWU7XG4gICAgfVxuICB9XG4gIFxuICByZXNldFNob3RzKCkge1xuICAgIHRoaXMuc2NvcmVib2FyZC5zaG90cy5jb3VudCA9IDM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb3VuZDsiLCJjbGFzcyBSb3VuZFNjcmVlbiB7XG4gIGNvbnN0cnVjdG9yKGMsIHJvdW5kQ291bnQpIHtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMudGlja0NvdW50ID0gMDtcbiAgICB0aGlzLnJvdW5kQ291bnQgPSByb3VuZENvdW50O1xuICAgIHRoaXMuYW5pRmluID0gZmFsc2U7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy50aWNrQ291bnQrKztcbiAgICB0aGlzLmMuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmMuZmlsbFJlY3QoMTY1LCAxMTAsIDE3OCwgNjApO1xuXG4gICAgdGhpcy5jLmZvbnQgPSBcIjIwLjVweCBQaXhlbCBFbXVsYXRvclwiO1xuICAgIHRoaXMuYy5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgdGhpcy5jLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7IFxuICAgIHRoaXMuYy5maWxsVGV4dChgUk9VTkQgJHt0aGlzLnJvdW5kQ291bnR9YCwgMjU2LCAxNDgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuaXNBbmlGaW4oKTtcbiAgfVxuXG4gIGlzQW5pRmluKCkge1xuICAgIGlmICh0aGlzLnRpY2tDb3VudCA+IDYwKSB7XG4gICAgICB0aGlzLnRpY2tDb3VudCA9IDA7XG4gICAgICB0aGlzLmFuaUZpbiA9IHRydWU7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUm91bmRTY3JlZW47IiwiY2xhc3MgU2NvcmUge1xuICBjb25zdHJ1Y3RvcihjKSB7XG4gICAgdGhpcy5jID0gYztcbiAgICB0aGlzLnBvaW50cyA9IDA7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jLmZvbnQgPSBcIjIwLjVweCBQaXhlbCBFbXVsYXRvclwiO1xuICAgIHRoaXMuYy5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgdGhpcy5jLnRleHRBbGlnbiA9IFwiZW5kXCI7IFxuICAgIHRoaXMuYy5maWxsVGV4dChgJHt0aGlzLnBvaW50c31gLCA0ODAsNDMwKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjb3JlOyIsImNvbnN0IFNjb3JlID0gcmVxdWlyZShcIi4vc2NvcmUuanNcIik7XG5jb25zdCBTaG90cyA9IHJlcXVpcmUoXCIuL3Nob3RzXCIpO1xuY29uc3QgRHVja3MgPSByZXF1aXJlKFwiLi9kdWNrc1wiKTtcblxuY2xhc3MgU2NvcmVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKGMpIHtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMucm91bmRDb3VudCA9IDE7XG4gICAgdGhpcy5zY29yZSA9IG5ldyBTY29yZSh0aGlzLmMpO1xuICAgIHRoaXMuc2hvdHMgPSBuZXcgU2hvdHModGhpcy5jKTtcbiAgICB0aGlzLmR1Y2tzID0gbmV3IER1Y2tzKHRoaXMuYyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5zY29yZS5yZW5kZXIoKTtcbiAgICB0aGlzLnNob3RzLnJlbmRlcigpO1xuICAgIHRoaXMuZHVja3MucmVuZGVyKCk7XG5cbiAgICB0aGlzLmMuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgIHRoaXMuYy5maWxsUmVjdCg0OCwzODQsNDcsMjEuNSk7XG4gICAgdGhpcy5jLmZpbGxTdHlsZSA9IFwiI0M1RjY1MlwiO1xuICAgIHRoaXMuYy5mb250ID0gXCIxNnB4IFBpeGVsIEVtdWxhdG9yXCI7XG4gICAgdGhpcy5jLmZpbGxUZXh0KGBSPSR7dGhpcy5yb3VuZENvdW50fWAsIDg5LjUsIDQwMCk7XG4gIH1cblxuICByZW5kZXJQdHMocG9zWCwgcG9zWSkge1xuICAgIHRoaXMuYy50ZXh0QWxpZ24gPSBcImNlbnRlclwiOyBcbiAgICB0aGlzLmMuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIHRoaXMuYy5mb250ID0gXCIxMnB4IFBpeGVsIEVtdWxhdG9yXCI7XG4gICAgdGhpcy5jLmZpbGxUZXh0KGAke3RoaXMucm91bmRDb3VudCAqIDUwMH1gLCBwb3NYLCBwb3NZKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnJvdW5kQ291bnQpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuZHVja3MudXBkYXRlKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY29yZWJvYXJkOyIsImNsYXNzIFNob3RzIHtcbiAgY29uc3RydWN0b3IoYykge1xuICAgIHRoaXMuYyA9IGM7XG4gICAgdGhpcy5jb3VudCA9IDM7XG5cbiAgICB0aGlzLnNob3RJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuc2hvdEltYWdlLm9ubG9hZCA9ICgpID0+IHRoaXMuaW1hZ2VSZWFkeSA9IHRydWU7XG4gICAgdGhpcy5zaG90SW1hZ2Uuc3JjID0gXCJpbWFnZXMvc2hvdC5wbmdcIjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xuICAgICAgdGhpcy5jLmRyYXdJbWFnZSh0aGlzLnNob3RJbWFnZSxcbiAgICAgICAgMCwgMCxcbiAgICAgICAgMjUsIDI1LFxuICAgICAgICAzMSArIChpKzEpKjE2LCA0MTEsXG4gICAgICAgIDE5LCAxOVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaG90czsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJjb25zdCBEdWNrID0gcmVxdWlyZShcIi4vZHVjay5qc1wiKTtcbmNvbnN0IFdhdmVIaXRBbmkgPSByZXF1aXJlKFwiLi93YXZlX2hpdF9hbmkuanNcIik7XG5jb25zdCBXYXZlTWlzc0FuaSA9IHJlcXVpcmUoXCIuL3dhdmVfbWlzc19hbmkuanNcIik7XG5cbmNsYXNzIFdhdmUge1xuICBjb25zdHJ1Y3RvcihjLCBjcm9zcywgc2NvcmVib2FyZCwgcm91bmRDb3VudCwgd2F2ZUNvdW50KSB7XG4gICAgdGhpcy5jID0gYztcbiAgICB0aGlzLmNyb3NzID0gY3Jvc3M7XG4gICAgdGhpcy5zY29yZWJvYXJkID0gc2NvcmVib2FyZDtcbiAgICB0aGlzLnJvdW5kQ291bnQgPSByb3VuZENvdW50O1xuICAgIHRoaXMud2F2ZUNvdW50ID0gd2F2ZUNvdW50O1xuICAgIHRoaXMud2F2ZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmR1Y2sgPSBuZXcgRHVjayh0aGlzLmMsIHRoaXMuY3Jvc3MsIHRoaXMucm91bmRDb3VudCwgdGhpcy5zY29yZWJvYXJkKTtcbiAgICB0aGlzLndhdmVIaXRBbmkgPSBuZXcgV2F2ZUhpdEFuaSh0aGlzLmMpO1xuICAgIHRoaXMud2F2ZU1pc3NBbmkgPSBuZXcgV2F2ZU1pc3NBbmkodGhpcy5jKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmR1Y2sucmVuZGVyKCk7XG4gICAgaWYgKHRoaXMuZHVjay5mYWxsRmluKSB7XG4gICAgICB0aGlzLndhdmVIaXRBbmkucmVuZGVyKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmR1Y2suZmx5RmluKSB0aGlzLndhdmVNaXNzQW5pLnJlbmRlcigpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuZHVja0hpdCgpO1xuICAgIHRoaXMuZHVjay51cGRhdGUoKTtcbiAgICB0aGlzLndhdmVIaXRBbmkudXBkYXRlKCk7XG4gICAgdGhpcy53YXZlTWlzc0FuaS51cGRhdGUoKTtcbiAgICB0aGlzLmlzV2F2ZU92ZXIoKTtcbiAgfVxuXG4gIHVwZGF0ZUR1Y2tzKCkge1xuICAgIHRoaXMuc2NvcmVib2FyZC5kdWNrcy5hcnJbdGhpcy53YXZlQ291bnRdID0gMTtcbiAgfVxuXG4gIHVwZGF0ZVNjb3JlKCkge1xuICAgIGlmICh0aGlzLnJvdW5kQ291bnQgPT09IDEpIHtcbiAgICAgIHRoaXMuc2NvcmVib2FyZC5zY29yZS5wb2ludHMgKz0gNTAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjb3JlYm9hcmQuc2NvcmUucG9pbnRzICs9IDUwMCArIDUwMCAqICh0aGlzLnJvdW5kQ291bnQgLSAxKTtcbiAgICB9XG4gIH1cblxuICBkdWNrSGl0KCkge1xuICAgIGlmICh0aGlzLmR1Y2suaGl0KSB7XG4gICAgICB0aGlzLmR1Y2suaGl0ID0gZmFsc2U7XG4gICAgICB0aGlzLnVwZGF0ZUR1Y2tzKCk7XG4gICAgICB0aGlzLndhdmVDb3VudCA9IHRoaXMud2F2ZUNvdW50ICsgMTtcbiAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcbiAgICB9XG4gIH1cblxuICBpc1dhdmVPdmVyKCkge1xuICAgIGlmIChcbiAgICAgICh0aGlzLmR1Y2suZmFsbEZpbiAmJiB0aGlzLndhdmVIaXRBbmkuc21pbGVFbmRGaW4pIHx8XG4gICAgICAodGhpcy5kdWNrLmZseUZpbiAmJiB0aGlzLndhdmVNaXNzQW5pLmxhdWdoRW5kRmluKSkgIHtcbiAgICAgIHRoaXMud2F2ZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBXYXZlOyIsImNsYXNzIFdhdmVIaXRBbmkge1xuICBjb25zdHJ1Y3RvcihjKSB7XG4gICAgdGhpcy5jID0gYztcbiAgICB0aGlzLmRvZ1Bvc1kgPSAzMDg7XG4gICAgLy8gdGhpcy5kb2dQb3NYID0gZG9nUG9zWDtcbiAgICB0aGlzLnNtaWxlUGF1c2VDb3VudCA9IDA7XG5cbiAgICB0aGlzLnNtaWxlU3RhcnRGaW4gPSBmYWxzZTtcbiAgICB0aGlzLnNtaWxlUGF1c2VGaW4gPSBmYWxzZTtcbiAgICB0aGlzLnNtaWxlRW5kRmluID0gZmFsc2U7XG5cbiAgICB0aGlzLnNtaWxlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnNtaWxlSW1hZ2Uub25sb2FkID0gKCkgPT4gdGhpcy5zbWlsZUltYWdlUmVhZHkgPSB0cnVlO1xuICAgIHRoaXMuc21pbGVJbWFnZS5zcmMgPSBcImltYWdlcy9kb2dfc2luZ2xlX2R1Y2sucG5nXCI7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnNtaWxlU3RhcnRGaW4pIHtcbiAgICAgIHRoaXMuZG9nUG9zWS09MztcbiAgICB9XG4gICAgaWYgKHRoaXMuc21pbGVTdGFydEZpbikge1xuICAgICAgdGhpcy5zbWlsZVBhdXNlQ291bnQrKztcbiAgICB9XG4gICAgdGhpcy5jLmRyYXdJbWFnZSh0aGlzLnNtaWxlSW1hZ2UsIFxuICAgICAgMCwgMCxcbiAgICAgIDYwLCA2MCwgXG4gICAgICAyMDQsIHRoaXMuZG9nUG9zWSwgXG4gICAgICAxMTEsIDExMSk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5pc1NtaWxlU3RhcnRGaW4oKTtcbiAgICB0aGlzLmlzU21pbGVQYXVzZUZpbigpO1xuICAgIHRoaXMuaXNTbWlsZUVuZEZpbigpO1xuICB9XG5cbiAgaXNTbWlsZVN0YXJ0RmluKCkge1xuICAgIGlmICh0aGlzLmRvZ1Bvc1kgPT09IDI0OCkgdGhpcy5zbWlsZVN0YXJ0RmluID0gdHJ1ZTtcbiAgfVxuXG4gIGlzU21pbGVQYXVzZUZpbigpIHtcbiAgICBpZiAodGhpcy5zbWlsZVBhdXNlQ291bnQgPiAzMCkge1xuICAgICAgdGhpcy5zbWlsZVBhdXNlRmluID0gdHJ1ZTtcbiAgICAgIHRoaXMuZG9nUG9zWSs9Mzt9XG4gIH1cblxuICBpc1NtaWxlRW5kRmluKCkge1xuICAgIGlmICh0aGlzLmRvZ1Bvc1kgPiAzMTApIHRoaXMuc21pbGVFbmRGaW4gPSB0cnVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2F2ZUhpdEFuaTsiLCJjbGFzcyBXYXZlTWlzc0FuaSB7XG4gIGNvbnN0cnVjdG9yKGMpIHtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMuZG9nUG9zWSA9IDMwODtcblxuICAgIHRoaXMubGF1Z2hTdGFydEZpbiA9IGZhbHNlO1xuICAgIHRoaXMubGF1Z2hQYXVzZUZpbiA9IGZhbHNlO1xuICAgIHRoaXMubGF1Z2hFbmRGaW4gPSBmYWxzZTtcblxuICAgIHRoaXMubGF1Z2hQYXVzZUNvdW50ID0gMDtcbiAgICB0aGlzLmxhdWdoVGlja0NvdW50ID0gMDtcblxuICAgIHRoaXMubGF1Z2hGcmFtZUluZGV4ID0gMDtcbiAgICB0aGlzLmxhdWdoVGlja0NvdW50ID0gMDtcbiAgICB0aGlzLmxhdWdoVGlja3NQZXJGcmFtZSA9IDQ7XG5cbiAgICB0aGlzLmxhdWdoSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmxhdWdoSW1hZ2Uub25sb2FkID0gKCkgPT4gdGhpcy5sYXVnaEltYWdlUmVhZHkgPSB0cnVlO1xuICAgIHRoaXMubGF1Z2hJbWFnZS5zcmMgPSBcImltYWdlcy9kb2dfbGF1Z2gucG5nXCI7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLmxhdWdoU3RhcnRGaW4pIHtcbiAgICAgIHRoaXMuZG9nUG9zWS09MztcbiAgICB9XG4gICAgaWYgKHRoaXMubGF1Z2hTdGFydEZpbikge1xuICAgICAgdGhpcy5sYXVnaFBhdXNlQ291bnQrKztcbiAgICB9XG4gICAgdGhpcy5jLmRyYXdJbWFnZSh0aGlzLmxhdWdoSW1hZ2UsIFxuICAgICAgdGhpcy5sYXVnaEZyYW1lSW5kZXggKiAxMjAgLyAyLCAwLFxuICAgICAgNjAsIDYwLCBcbiAgICAgIDIwNCwgdGhpcy5kb2dQb3NZLCBcbiAgICAgIDExMSwgMTExKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmlzTGF1Z2hTdGFydEZpbigpO1xuICAgIHRoaXMuaXNMYXVnaFBhdXNlRmluKCk7XG4gICAgdGhpcy5pc0xhdWdoRW5kRmluKCk7XG5cbiAgICB0aGlzLmxhdWdoVGlja0NvdW50Kys7XG4gICAgaWYgKHRoaXMubGF1Z2hUaWNrQ291bnQgPiB0aGlzLmxhdWdoVGlja3NQZXJGcmFtZSkge1xuICAgICAgdGhpcy5sYXVnaFRpY2tDb3VudCA9IDA7XG4gICAgICB0aGlzLmxhdWdoRnJhbWVJbmRleCsrO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYXVnaEZyYW1lSW5kZXggPiAxKSB7XG4gICAgICB0aGlzLmxhdWdoRnJhbWVJbmRleCA9IDA7XG4gICAgfVxuICB9XG5cbiAgaXNMYXVnaFN0YXJ0RmluKCkge1xuICAgIGlmICh0aGlzLmRvZ1Bvc1kgPT09IDI0OCkge3RoaXMubGF1Z2hTdGFydEZpbiA9IHRydWU7fVxuICB9XG5cbiAgaXNMYXVnaFBhdXNlRmluKCkge1xuICAgIGlmICh0aGlzLmxhdWdoUGF1c2VDb3VudCA+IDMwKSB7XG4gICAgICB0aGlzLmxhdWdoUGF1c2VGaW4gPSB0cnVlO1xuICAgICAgdGhpcy5kb2dQb3NZKz0zO1xuICAgIH1cbiAgfVxuXG4gIGlzTGF1Z2hFbmRGaW4oKSB7XG4gICAgaWYgKHRoaXMuZG9nUG9zWSA+IDMxMCkge3RoaXMubGF1Z2hFbmRGaW4gPSB0cnVlO31cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhdmVNaXNzQW5pOyJdLCJzb3VyY2VSb290IjoiIn0=