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
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n#canvas {\n  background-color: #66BCF9;\n  cursor: none;\n  z-index: 1;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n  background-color: rgb(3, 3, 3);\n}\n\n.container-wrap {\n  height: 100vh;\n  width: 300px;\n  margin-right: 20px;\n}\n\n.text-container {\n  z-index: 2;\n  width: 300px;\n  height: 480px;\n  box-shadow: inset 0px 0px 0px 3px rgb(255, 255, 255);\n  background-color: rgb(0, 0, 0);\n  background-image: url(\"https://www.jqueryscript.net/images/jQuery-Plugin-To-Create-Starry-Background-Using-Canvas-Starfield.jpg\")\n}\n\n.text-bounds {\n  background-color: red;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.flex-col-left {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: left;\n}\n\n.flex-row {\n  display: flex;\n  justify-content: center;\n}\n\n.flex-col {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1, h2, p {\n  color: white;\n  font-family: Avenir Next;\n}\n\nh1 {\n  color: #EE5806;\n  font-size: 40px;\n  font-weight: bold;\n  margin-bottom: 6px;\n}\n\nh2 {\n  color: #F7E20C;\n  font-family: Avenir Next;\n  font-size: 20px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  margin-right: 5px;\n}\n\nh3 {\n  font-size: 12px;\n  color: red;\n  font-family: Avenir Next;\n  font-weight: bold;\n  border: 3px solid red;\n  border-radius: 16px;\n  padding: 3px 6px;\n  transform: translate(0px, -17px) rotate(-7deg);\n}\n\np {\n  font-size: 15px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  line-height: 18px;\n  font-weight: 600;\n}\n\n.test2 {\n  margin-top: 20px;\n  width: 230px;\n\n}\n\n.skew{\n  transform: skewY(-8deg);\n}\n.test {\n  margin-bottom: 40px;\n}\n\n.explosion-1 {\n  position: absolute;\n  transform: translate(-100px, -230px) scale(.55, .55);\n}\n.explosion-2 {\n  position: absolute;\n  transform: translate(75px, 230px) scale(.65, .65) rotate(-90deg);\n}\n.explosion-3 {\n  position: absolute;\n  transform: translate(-400px, 100px) scale(.8, .8) rotate(-180deg);\n  /* z-index: -2;/ */\n}", ""]);



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
    this.hit = false;
    this.falling = false;
    this.flyAway = false;

    window.addEventListener('mousemove', event => {
      var bounds = this.c.canvas.getBoundingClientRect();
      this.posX = event.clientX - bounds.left;
      this.posY = event.clientY - bounds.top;
      this.update();
    });

    window.addEventListener('click', () => {
      if (this.hit || this.flyAway) return;
      if (this.shots.count > 0) {
        this.shots.count--;
      }
      this.clickPosX = this.posX;
      this.clickPosY = this.posY;
    });
  }

  render() {
    this.clickPosX = 1000;
    this.clickPosY = 1000;
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
    this.posX = Math.random() * 512;
    this.posY = 300;
    this.velX = 1 * roundCount;
    this.velY = 1 * roundCount;
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
    this.initialBoostCount = 0;

    this.hitDuckImage = new Image();
    this.hitDuckImage.onload = () => this.hitDuckImageReady = true;
    this.hitDuckImage.src = "images/fly_hit.png";
    
    this.escapeDuckImage = new Image();
    this.escapeDuckImage.onload = () => this.escapeDuckImageReady = true;
    this.escapeDuckImage.src = "images/fly_up.png";
    
    this.hit = false;
    this.splatFin = false;
    this.falling = false;
    this.flyAway = false;
    this.fallFin = false;
    this.flyFin = false;
    this.initialBoost = true;

    this.touchingLeftEdge = false;
    this.touchingRightEdge = false;
    this.touchingTopEdge = false;
    this.touchingBottomEdge = false;
  }

  render() {
    if (!this.duckImageReady) return;
    if (!this.fallDuckImageReady) return;
    if (!this.hitDuckImageReady) return;

    if (this.initialBoost) {
      this.posY -= 5;
      this.initialBoostCount++;
    }

    if (!this.falling && !this.hit && !this.flyAway) {
      this.renderFly();
    }

    if (this.flyAway) {
      this.renderFlyAway();
    }

    if (this.falling && !this.splatFin && !this.flyAway) {
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
  
  renderFlyAway() {
    this.c.drawImage(this.escapeDuckImage, 
      this.frameIndex * 108 / 3, 0, 
      36, 36, 
      this.posX, this.posY, 
      70, 70
    );
    this.c.font = "20.5px Pixel Emulator";
    this.c.fillStyle = "white";
    this.c.textAlign = "center"; 
    this.c.fillText(`FLY AWAY`, 256, 148);
  }

  renderFall() {
    if (this.flyAway) return;
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
    this.wrap();
    this.isFallFin();
    this.isFlyFin();
    this.isHit();
    if (!this.hit) this.updateDir();
    this.updatePos();
    this.updateFly();
    this.isFlyAway();
    this.isSplatFin();
    this.isInitialBoost();
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
      if (this.posY > 335) this.touchingBottomEdge = true;
      if (this.posY < 0) this.touchingTopEdge = true;
    }
  }

  repel() {
    if (this.touchingTopEdge) {
      this.touchingTopEdge = false;
      this.posY += this.velY;
    }
    if (this.touchingBottomEdge) {
      this.touchingBottomEdge = false;
      this.posY -= this.velY;
    }
  }

  wrap() {
    if (this.posX < -35) this.posX = 477;
    if (this.posX > 477) this.posX = -35;
  }

  changeDir() {
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

  isHit() {
    if (this.collision()) {
      this.killPosX = this.cross.clickPosX;
      this.killPosY = this.cross.clickPosY;
      this.hit = true;
      this.falling = true;
      this.cross.hit = true;

      this.duckImage.src = "";
      this.direction = "fall";
      return "fall";
    }
  }

  isFlyAway() {
    if (this.scoreboard.shots.count === 0) {
      this.duckImage.src = "images/fly_up.png";
      this.direction = "escape";
      this.flyAway = true;
      this.cross.flyAway = true;
      return "escape";
    }
  }

  collision() {
    return (
      this.cross.clickPosX > this.posX + 6 && 
      this.cross.clickPosX < this.posX + 58 &&
      this.cross.clickPosY > this.posY + 6 &&
      this.cross.clickPosY < this.posY + 58
    );
  }

  isFallFin() {
    if (this.posY > 345) {
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

  isInitialBoost() {
    if (this.initialBoostCount > 15) {
      this.initialBoost = false;
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
    this.image.onload = () => {
      this.imageReady = true;
    };
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
      this.resetCounters();
      this.newWave();
    }
  }

  resetCounters() {
    this.cross.hit = false;
    this.cross.falling = false;
    this.cross.flyAway = false;
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
    if (this.duck.flyFin) {
      this.waveMissAni.render();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jcm9zcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHVjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHVja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lX292ZXJfc2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lX3N0YXJ0X2FuaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3VuZF9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY29yZWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zaG90cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzhmMzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdmVfaGl0X2FuaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2F2ZV9taXNzX2FuaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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Q0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVCOzs7Ozs7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQjtBQUNBOztBQUVBLFc7QUFDQSwyQjtBQUNBOztBQUVBO0FBQ0EsbUI7QUFDQTs7QUFFQSxjO0FBQ0EsbUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQjs7Ozs7Ozs7Ozs7QUN6VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Qjs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkI7Ozs7Ozs7Ozs7O0FDaEJBLGNBQWMsbUJBQU8sQ0FBQyxrQ0FBWSxFO0FBQ2xDLGNBQWMsbUJBQU8sQ0FBQyxrQ0FBWTtBQUNsQyxtQkFBbUIsbUJBQU8sQ0FBQyw0Q0FBaUI7QUFDNUMsb0JBQW9CLG1CQUFPLENBQUMsOENBQWtCO0FBQzlDLHVCQUF1QixtQkFBTyxDQUFDLHdEQUF1QjtBQUN0RCxjQUFjLG1CQUFPLENBQUMsK0JBQVM7QUFDL0IscUJBQXFCLG1CQUFPLENBQUMsaURBQWtCO0FBQy9DLG9CQUFvQixtQkFBTyxDQUFDLDZDQUFnQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSztBQUNBOztBQUVBOztBQUVBLHNCOzs7Ozs7Ozs7OztBQzNHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0M7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBLDhCOzs7Ozs7Ozs7Ozs7QUN6TUE7QUFBQTtBQUFBO0FBQXFCO0FBQ3JCLGFBQWEsbUJBQU8sQ0FBQyxnQ0FBVzs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNURCxhQUFhLG1CQUFPLENBQUMsZ0NBQVc7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUI7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQztBQUNBLDZCQUE2QixnQkFBZ0I7QUFDN0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCOzs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCO0FBQ0EsdUJBQXVCLFlBQVk7QUFDbkM7QUFDQTs7QUFFQSx1Qjs7Ozs7Ozs7Ozs7QUNkQSxjQUFjLG1CQUFPLENBQUMsa0NBQVk7QUFDbEMsY0FBYyxtQkFBTyxDQUFDLCtCQUFTO0FBQy9CLGNBQWMsbUJBQU8sQ0FBQywrQkFBUzs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7O0FBRUE7QUFDQSxnQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCOzs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCOzs7Ozs7Ozs7Ozs7QUNyQkEsY0FBYyxtQkFBTyxDQUFDLGtIQUFzRDs7QUFFNUUsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1HQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNuQmYsYUFBYSxtQkFBTyxDQUFDLGdDQUFXO0FBQ2hDLG1CQUFtQixtQkFBTyxDQUFDLGdEQUFtQjtBQUM5QyxvQkFBb0IsbUJBQU8sQ0FBQyxrREFBb0I7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0I7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Qjs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQSw2QiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4jY2FudmFzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NkJDRjk7XFxuICBjdXJzb3I6IG5vbmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDMsIDMpO1xcbn1cXG5cXG4uY29udGFpbmVyLXdyYXAge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLnRleHQtY29udGFpbmVyIHtcXG4gIHotaW5kZXg6IDI7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDQ4MHB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggM3B4IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93d3cuanF1ZXJ5c2NyaXB0Lm5ldC9pbWFnZXMvalF1ZXJ5LVBsdWdpbi1Uby1DcmVhdGUtU3RhcnJ5LUJhY2tncm91bmQtVXNpbmctQ2FudmFzLVN0YXJmaWVsZC5qcGdcXFwiKVxcbn1cXG5cXG4udGV4dC1ib3VuZHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZmxleC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZsZXgtY29sLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBsZWZ0O1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZmxleC1jb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxLCBoMiwgcCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogQXZlbmlyIE5leHQ7XFxufVxcblxcbmgxIHtcXG4gIGNvbG9yOiAjRUU1ODA2O1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcblxcbmgyIHtcXG4gIGNvbG9yOiAjRjdFMjBDO1xcbiAgZm9udC1mYW1pbHk6IEF2ZW5pciBOZXh0O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1mYW1pbHk6IEF2ZW5pciBOZXh0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgcGFkZGluZzogM3B4IDZweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTE3cHgpIHJvdGF0ZSgtN2RlZyk7XFxufVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udGVzdDIge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiAyMzBweDtcXG5cXG59XFxuXFxuLnNrZXd7XFxuICB0cmFuc2Zvcm06IHNrZXdZKC04ZGVnKTtcXG59XFxuLnRlc3Qge1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLmV4cGxvc2lvbi0xIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDBweCwgLTIzMHB4KSBzY2FsZSguNTUsIC41NSk7XFxufVxcbi5leHBsb3Npb24tMiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3NXB4LCAyMzBweCkgc2NhbGUoLjY1LCAuNjUpIHJvdGF0ZSgtOTBkZWcpO1xcbn1cXG4uZXhwbG9zaW9uLTMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwMHB4LCAxMDBweCkgc2NhbGUoLjgsIC44KSByb3RhdGUoLTE4MGRlZyk7XFxuICAvKiB6LWluZGV4OiAtMjsvICovXFxufVwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJjbGFzcyBDcm9zcyB7XG4gIGNvbnN0cnVjdG9yKGMsIHNjb3JlYm9hcmQpIHtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMucG9zWCA9IDA7XG4gICAgdGhpcy5wb3NZID0gMDtcbiAgICB0aGlzLnJhZGl1cyA9IDIwO1xuICAgIHRoaXMuc2hvdHMgPSBzY29yZWJvYXJkLnNob3RzO1xuICAgIHRoaXMuY2xpY2tQb3NYID0gMTAwMDtcbiAgICB0aGlzLmNsaWNrUG9zWSA9IDEwMDA7XG4gICAgdGhpcy5oaXQgPSBmYWxzZTtcbiAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmZseUF3YXkgPSBmYWxzZTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBldmVudCA9PiB7XG4gICAgICB2YXIgYm91bmRzID0gdGhpcy5jLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMucG9zWCA9IGV2ZW50LmNsaWVudFggLSBib3VuZHMubGVmdDtcbiAgICAgIHRoaXMucG9zWSA9IGV2ZW50LmNsaWVudFkgLSBib3VuZHMudG9wO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmhpdCB8fCB0aGlzLmZseUF3YXkpIHJldHVybjtcbiAgICAgIGlmICh0aGlzLnNob3RzLmNvdW50ID4gMCkge1xuICAgICAgICB0aGlzLnNob3RzLmNvdW50LS07XG4gICAgICB9XG4gICAgICB0aGlzLmNsaWNrUG9zWCA9IHRoaXMucG9zWDtcbiAgICAgIHRoaXMuY2xpY2tQb3NZID0gdGhpcy5wb3NZO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuY2xpY2tQb3NYID0gMTAwMDtcbiAgICB0aGlzLmNsaWNrUG9zWSA9IDEwMDA7XG4gICAgdGhpcy5jLmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuYy5hcmModGhpcy5wb3NYLCB0aGlzLnBvc1ksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgdGhpcy5jLnN0cm9rZSgpO1xuICAgIHRoaXMuYy5zdHJva2VTdHlsZSA9IFwicmVkXCI7XG5cbiAgICB0aGlzLmMuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jLmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgdGhpcy5jLmFyYyh0aGlzLnBvc1gsIHRoaXMucG9zWSwgMSwgMCwgMiAqIE1hdGguUEkpO1xuICAgIHRoaXMuYy5maWxsKCk7XG5cbiAgICB0aGlzLmMuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jLm1vdmVUbyh0aGlzLnBvc1ggKyA1LCB0aGlzLnBvc1kpO1xuICAgIHRoaXMuYy5saW5lVG8odGhpcy5wb3NYICsgMjUsIHRoaXMucG9zWSk7XG4gICAgdGhpcy5jLm1vdmVUbyh0aGlzLnBvc1ggLSA1LCB0aGlzLnBvc1kpO1xuICAgIHRoaXMuYy5saW5lVG8odGhpcy5wb3NYIC0gMjUsIHRoaXMucG9zWSk7XG5cbiAgICB0aGlzLmMubW92ZVRvKHRoaXMucG9zWCwgdGhpcy5wb3NZICsgNSk7XG4gICAgdGhpcy5jLmxpbmVUbyh0aGlzLnBvc1gsIHRoaXMucG9zWSArIDI1KTtcbiAgICB0aGlzLmMubW92ZVRvKHRoaXMucG9zWCwgdGhpcy5wb3NZIC0gNSk7XG4gICAgdGhpcy5jLmxpbmVUbyh0aGlzLnBvc1gsIHRoaXMucG9zWSAtIDI1KTtcbiAgICB0aGlzLmMuc3Ryb2tlKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5jLmNsZWFyUmVjdCgwLCAwLCB0aGlzLmMuY2FudmFzLndpZHRoLCB0aGlzLmMuY2FudmFzLmhlaWdodCk7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENyb3NzOyIsImNsYXNzIER1Y2sge1xuICBjb25zdHJ1Y3RvcihjLCBjcm9zcywgcm91bmRDb3VudCwgc2NvcmVib2FyZCkge1xuICAgIHRoaXMuYyA9IGM7XG4gICAgdGhpcy5jcm9zcyA9IGNyb3NzO1xuICAgIHRoaXMuc2NvcmVib2FyZCA9IHNjb3JlYm9hcmQ7XG4gICAgdGhpcy5wb3NYID0gTWF0aC5yYW5kb20oKSAqIDUxMjtcbiAgICB0aGlzLnBvc1kgPSAzMDA7XG4gICAgdGhpcy52ZWxYID0gMSAqIHJvdW5kQ291bnQ7XG4gICAgdGhpcy52ZWxZID0gMSAqIHJvdW5kQ291bnQ7XG4gICAgdGhpcy5yb3VuZENvdW50ID0gcm91bmRDb3VudDtcbiAgICBcbiAgICB0aGlzLmtpbGxQb3NYID0gMDtcbiAgICB0aGlzLmtpbGxQb3NZID0gMDtcbiAgICBcbiAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgIHRoaXMudGlja0NvdW50ID0gMDtcbiAgICB0aGlzLnRpY2tzUGVyRnJhbWUgPSA0O1xuICAgIFxuICAgIHRoaXMuZmFsbEZyYW1lSW5kZXggPSAwO1xuICAgIHRoaXMuZmFsbFRpY2tDb3VudCA9IDA7XG4gICAgdGhpcy5mYWxsVGlja3NQZXJGcmFtZSA9IDQ7XG5cbiAgICB0aGlzLmRpckNvdW50ID0gMDtcbiAgICB0aGlzLmRpckNvdW50TWF4ID0gMDtcblxuICAgIHRoaXMuZHVja0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5kdWNrSW1hZ2Uub25sb2FkID0gKCkgPT4gdGhpcy5kdWNrSW1hZ2VSZWFkeSA9IHRydWU7XG4gICAgdGhpcy5kdWNrSW1hZ2Uuc3JjID0gXCJcIjtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuY2hhbmdlRGlyKCk7XG5cbiAgICB0aGlzLmZhbGxEdWNrSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmZhbGxEdWNrSW1hZ2Uub25sb2FkID0gKCkgPT4gdGhpcy5mYWxsRHVja0ltYWdlUmVhZHkgPSB0cnVlO1xuICAgIHRoaXMuZmFsbER1Y2tJbWFnZS5zcmMgPSBcImltYWdlcy9mYWxsX2Rvd24ucG5nXCI7XG5cbiAgICB0aGlzLnNwbGF0Q291bnQgPSAwO1xuICAgIHRoaXMuaW5pdGlhbEJvb3N0Q291bnQgPSAwO1xuXG4gICAgdGhpcy5oaXREdWNrSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmhpdER1Y2tJbWFnZS5vbmxvYWQgPSAoKSA9PiB0aGlzLmhpdER1Y2tJbWFnZVJlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLmhpdER1Y2tJbWFnZS5zcmMgPSBcImltYWdlcy9mbHlfaGl0LnBuZ1wiO1xuICAgIFxuICAgIHRoaXMuZXNjYXBlRHVja0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5lc2NhcGVEdWNrSW1hZ2Uub25sb2FkID0gKCkgPT4gdGhpcy5lc2NhcGVEdWNrSW1hZ2VSZWFkeSA9IHRydWU7XG4gICAgdGhpcy5lc2NhcGVEdWNrSW1hZ2Uuc3JjID0gXCJpbWFnZXMvZmx5X3VwLnBuZ1wiO1xuICAgIFxuICAgIHRoaXMuaGl0ID0gZmFsc2U7XG4gICAgdGhpcy5zcGxhdEZpbiA9IGZhbHNlO1xuICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZmx5QXdheSA9IGZhbHNlO1xuICAgIHRoaXMuZmFsbEZpbiA9IGZhbHNlO1xuICAgIHRoaXMuZmx5RmluID0gZmFsc2U7XG4gICAgdGhpcy5pbml0aWFsQm9vc3QgPSB0cnVlO1xuXG4gICAgdGhpcy50b3VjaGluZ0xlZnRFZGdlID0gZmFsc2U7XG4gICAgdGhpcy50b3VjaGluZ1JpZ2h0RWRnZSA9IGZhbHNlO1xuICAgIHRoaXMudG91Y2hpbmdUb3BFZGdlID0gZmFsc2U7XG4gICAgdGhpcy50b3VjaGluZ0JvdHRvbUVkZ2UgPSBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuZHVja0ltYWdlUmVhZHkpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuZmFsbER1Y2tJbWFnZVJlYWR5KSByZXR1cm47XG4gICAgaWYgKCF0aGlzLmhpdER1Y2tJbWFnZVJlYWR5KSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5pbml0aWFsQm9vc3QpIHtcbiAgICAgIHRoaXMucG9zWSAtPSA1O1xuICAgICAgdGhpcy5pbml0aWFsQm9vc3RDb3VudCsrO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5mYWxsaW5nICYmICF0aGlzLmhpdCAmJiAhdGhpcy5mbHlBd2F5KSB7XG4gICAgICB0aGlzLnJlbmRlckZseSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZseUF3YXkpIHtcbiAgICAgIHRoaXMucmVuZGVyRmx5QXdheSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZhbGxpbmcgJiYgIXRoaXMuc3BsYXRGaW4gJiYgIXRoaXMuZmx5QXdheSkge1xuICAgICAgdGhpcy5wb3NZID0gdGhpcy5wb3NZO1xuICAgICAgdGhpcy5zcGxhdENvdW50Kys7XG4gICAgICB0aGlzLnJlbmRlclNwbGF0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmFsbGluZyAmJiB0aGlzLnNwbGF0RmluKSB7XG4gICAgICB0aGlzLnJlbmRlckZhbGwoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJGbHkoKSB7XG4gICAgdGhpcy5jLmRyYXdJbWFnZSh0aGlzLmR1Y2tJbWFnZSwgXG4gICAgICB0aGlzLmZyYW1lSW5kZXggKiAxMDggLyAzLCAwLCBcbiAgICAgIDM2LCAzNiwgXG4gICAgICB0aGlzLnBvc1gsIHRoaXMucG9zWSwgXG4gICAgICA3MCwgNzBcbiAgICApO1xuICB9XG4gIFxuICByZW5kZXJGbHlBd2F5KCkge1xuICAgIHRoaXMuYy5kcmF3SW1hZ2UodGhpcy5lc2NhcGVEdWNrSW1hZ2UsIFxuICAgICAgdGhpcy5mcmFtZUluZGV4ICogMTA4IC8gMywgMCwgXG4gICAgICAzNiwgMzYsIFxuICAgICAgdGhpcy5wb3NYLCB0aGlzLnBvc1ksIFxuICAgICAgNzAsIDcwXG4gICAgKTtcbiAgICB0aGlzLmMuZm9udCA9IFwiMjAuNXB4IFBpeGVsIEVtdWxhdG9yXCI7XG4gICAgdGhpcy5jLmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICB0aGlzLmMudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgXG4gICAgdGhpcy5jLmZpbGxUZXh0KGBGTFkgQVdBWWAsIDI1NiwgMTQ4KTtcbiAgfVxuXG4gIHJlbmRlckZhbGwoKSB7XG4gICAgaWYgKHRoaXMuZmx5QXdheSkgcmV0dXJuO1xuICAgIHRoaXMuc2NvcmVib2FyZC5yZW5kZXJQdHModGhpcy5raWxsUG9zWCwgdGhpcy5raWxsUG9zWSk7XG4gICAgdGhpcy5jLmRyYXdJbWFnZSh0aGlzLmZhbGxEdWNrSW1hZ2UsIFxuICAgICAgdGhpcy5mYWxsRnJhbWVJbmRleCAqIDcyIC8gMiwgMCwgXG4gICAgICAzNiwgMzYsIFxuICAgICAgdGhpcy5wb3NYLCB0aGlzLnBvc1ksIFxuICAgICAgNzAsIDcwXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclNwbGF0KCkge1xuICAgIHRoaXMucG9zWSAtPSAzO1xuICAgIHRoaXMuYy5kcmF3SW1hZ2UodGhpcy5oaXREdWNrSW1hZ2UsIFxuICAgICAgMCwgMCwgMzYsIDM2LCBcbiAgICAgIHRoaXMucG9zWCwgdGhpcy5wb3NZLCBcbiAgICAgIDcwLCA3MFxuICAgICk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5yYW5kb21pemVEaXJDb3VudE1heCgpO1xuICAgIHRoaXMuaXNUb3VjaGluZ0VkZ2UoKTtcbiAgICB0aGlzLnJlcGVsKCk7XG4gICAgdGhpcy53cmFwKCk7XG4gICAgdGhpcy5pc0ZhbGxGaW4oKTtcbiAgICB0aGlzLmlzRmx5RmluKCk7XG4gICAgdGhpcy5pc0hpdCgpO1xuICAgIGlmICghdGhpcy5oaXQpIHRoaXMudXBkYXRlRGlyKCk7XG4gICAgdGhpcy51cGRhdGVQb3MoKTtcbiAgICB0aGlzLnVwZGF0ZUZseSgpO1xuICAgIHRoaXMuaXNGbHlBd2F5KCk7XG4gICAgdGhpcy5pc1NwbGF0RmluKCk7XG4gICAgdGhpcy5pc0luaXRpYWxCb29zdCgpO1xuICB9XG4gIFxuICB1cGRhdGVGbHkoKSB7XG4gICAgdGhpcy50aWNrQ291bnQrKztcbiAgICBpZiAodGhpcy50aWNrQ291bnQgPiB0aGlzLnRpY2tzUGVyRnJhbWUpIHtcbiAgICAgIHRoaXMudGlja0NvdW50ID0gMDtcbiAgICAgIHRoaXMuZnJhbWVJbmRleCsrO1xuICAgICAgdGhpcy5mYWxsRnJhbWVJbmRleCsrO1xuICAgIH1cbiAgICBpZiAodGhpcy5mcmFtZUluZGV4ID4gMikgdGhpcy5mcmFtZUluZGV4ID0gMDtcbiAgICBpZiAodGhpcy5mYWxsRnJhbWVJbmRleCA+IDEpIHRoaXMuZmFsbEZyYW1lSW5kZXggPSAwO1xuICB9XG4gIFxuICB1cGRhdGVEaXIoKSB7XG4gICAgdGhpcy5kaXJDb3VudCsrOyBcbiAgICBpZiAoXG4gICAgICB0aGlzLmRpckNvdW50ID4gdGhpcy5kaXJDb3VudE1heCAmJlxuICAgICAgdGhpcy5kaXJlY3Rpb24gIT09IFwiZmFsbFwiXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmNoYW5nZURpcigpO1xuICAgICAgICB0aGlzLmRpckNvdW50ID0gMDtcbiAgICB9XG4gIH1cblxuICByYW5kb21pemVEaXJDb3VudE1heCgpIHtcbiAgICBsZXQgbiA9IE1hdGgucmFuZG9tKCk7XG4gICAgdGhpcy5kaXJDb3VudE1heCA9IG4gKiA0MDA7XG4gIH1cblxuICB1cGRhdGVQb3MoKSB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImVzY2FwZVwiKSB0aGlzLmVzY2FwZSgpO1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJmYWxsXCIpIHRoaXMuZmFsbERvd24oKTtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiKSB0aGlzLmxlZnQoKTtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwicmlnaHRcIikgdGhpcy5yaWdodCgpO1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJ0b3AtbGVmdFwiKSB0aGlzLnRvcExlZnQoKTtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwidG9wLXJpZ2h0XCIpIHRoaXMudG9wUmlnaHQoKTtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwiYm90LWxlZnRcIikgdGhpcy5ib3R0b21MZWZ0KCk7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImJvdC1yaWdodFwiKSB0aGlzLmJvdHRvbVJpZ2h0KCk7XG4gIH1cblxuICBpc1RvdWNoaW5nRWRnZSgpIHtcbiAgICBpZiAoIXRoaXMuZmFsbGluZykge1xuICAgICAgaWYgKHRoaXMucG9zWSA+IDMzNSkgdGhpcy50b3VjaGluZ0JvdHRvbUVkZ2UgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMucG9zWSA8IDApIHRoaXMudG91Y2hpbmdUb3BFZGdlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXBlbCgpIHtcbiAgICBpZiAodGhpcy50b3VjaGluZ1RvcEVkZ2UpIHtcbiAgICAgIHRoaXMudG91Y2hpbmdUb3BFZGdlID0gZmFsc2U7XG4gICAgICB0aGlzLnBvc1kgKz0gdGhpcy52ZWxZO1xuICAgIH1cbiAgICBpZiAodGhpcy50b3VjaGluZ0JvdHRvbUVkZ2UpIHtcbiAgICAgIHRoaXMudG91Y2hpbmdCb3R0b21FZGdlID0gZmFsc2U7XG4gICAgICB0aGlzLnBvc1kgLT0gdGhpcy52ZWxZO1xuICAgIH1cbiAgfVxuXG4gIHdyYXAoKSB7XG4gICAgaWYgKHRoaXMucG9zWCA8IC0zNSkgdGhpcy5wb3NYID0gNDc3O1xuICAgIGlmICh0aGlzLnBvc1ggPiA0NzcpIHRoaXMucG9zWCA9IC0zNTtcbiAgfVxuXG4gIGNoYW5nZURpcigpIHtcbiAgICBsZXQgbnVtID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAoIG51bSA8IDAuMTY2NyApIHtcbiAgICAgIHRoaXMuZHVja0ltYWdlLnNyYyA9IFwiaW1hZ2VzL2ZseV9sZWZ0LnBuZ1wiO1xuICAgICAgcmV0dXJuIFwibGVmdFwiO1xuICAgIH1cbiAgICBpZiAoIG51bSA+IDAuMTY2NyAmJiBudW0gPCAwLjMzMzMgKSB7XG4gICAgICB0aGlzLmR1Y2tJbWFnZS5zcmMgPSBcImltYWdlcy9mbHlfcmlnaHQucG5nXCI7XG4gICAgICByZXR1cm4gXCJyaWdodFwiO1xuICAgIH1cbiAgICBpZiAoIG51bSA+IDAuMzMzMyAmJiBudW0gPCAwLjUwICkge1xuICAgICAgdGhpcy5kdWNrSW1hZ2Uuc3JjID0gXCJpbWFnZXMvZmx5X3RvcF9sZWZ0LnBuZ1wiO1xuICAgICAgcmV0dXJuIFwidG9wLWxlZnRcIjtcbiAgICB9XG4gICAgaWYgKCBudW0gPiAwLjUwICYmIG51bSA8IDAuNjY3ICkge1xuICAgICAgdGhpcy5kdWNrSW1hZ2Uuc3JjID0gXCJpbWFnZXMvZmx5X3RvcF9yaWdodC5wbmdcIjtcbiAgICAgIHJldHVybiBcInRvcC1yaWdodFwiO1xuICAgIH1cbiAgICBpZiAoIG51bSA+IDAuNjY3ICYmIG51bSA8IDAuODMzICkge1xuICAgICAgdGhpcy5kdWNrSW1hZ2Uuc3JjID0gXCJpbWFnZXMvZmx5X3RvcF9sZWZ0LnBuZ1wiO1xuICAgICAgcmV0dXJuIFwiYm90LWxlZnRcIjtcbiAgICB9XG4gICAgaWYgKCBudW0gPiAwLjgzMyAmJiBudW0gPCAxICkge1xuICAgICAgdGhpcy5kdWNrSW1hZ2Uuc3JjID0gXCJpbWFnZXMvZmx5X3RvcF9yaWdodC5wbmdcIjtcbiAgICAgIHJldHVybiBcImJvdC1yaWdodFwiO1xuICAgIH1cbiAgfVxuXG4gIGxlZnQoKSB7XG4gICAgdGhpcy5wb3NYIC09IHRoaXMudmVsWDsgXG4gIH1cblxuICByaWdodCgpIHsgXG4gICAgdGhpcy5wb3NYICs9IHRoaXMudmVsWDsgXG4gIH1cblxuICBlc2NhcGUoKSB7XG4gICAgdGhpcy5wb3NZIC09IDc7IFxuICB9XG5cbiAgZmFsbERvd24oKSB7IFxuICAgIHRoaXMucG9zWSArPSAzOyBcbiAgfVxuXG4gIHRvcExlZnQoKSB7XG4gICAgdGhpcy5wb3NYIC09IHRoaXMudmVsWDtcbiAgICB0aGlzLnBvc1kgLT0gdGhpcy52ZWxZO1xuICB9XG5cbiAgdG9wUmlnaHQoKSB7XG4gICAgdGhpcy5wb3NYICs9IHRoaXMudmVsWDtcbiAgICB0aGlzLnBvc1kgLT0gdGhpcy52ZWxZO1xuICB9XG5cbiAgYm90dG9tTGVmdCgpIHtcbiAgICB0aGlzLnBvc1ggLT0gdGhpcy52ZWxYO1xuICAgIHRoaXMucG9zWSArPSB0aGlzLnZlbFk7XG4gIH1cblxuICBib3R0b21SaWdodCgpIHtcbiAgICB0aGlzLnBvc1ggKz0gdGhpcy52ZWxYO1xuICAgIHRoaXMucG9zWSArPSB0aGlzLnZlbFk7XG4gIH1cblxuICBpc0hpdCgpIHtcbiAgICBpZiAodGhpcy5jb2xsaXNpb24oKSkge1xuICAgICAgdGhpcy5raWxsUG9zWCA9IHRoaXMuY3Jvc3MuY2xpY2tQb3NYO1xuICAgICAgdGhpcy5raWxsUG9zWSA9IHRoaXMuY3Jvc3MuY2xpY2tQb3NZO1xuICAgICAgdGhpcy5oaXQgPSB0cnVlO1xuICAgICAgdGhpcy5mYWxsaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3Jvc3MuaGl0ID0gdHJ1ZTtcblxuICAgICAgdGhpcy5kdWNrSW1hZ2Uuc3JjID0gXCJcIjtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJmYWxsXCI7XG4gICAgICByZXR1cm4gXCJmYWxsXCI7XG4gICAgfVxuICB9XG5cbiAgaXNGbHlBd2F5KCkge1xuICAgIGlmICh0aGlzLnNjb3JlYm9hcmQuc2hvdHMuY291bnQgPT09IDApIHtcbiAgICAgIHRoaXMuZHVja0ltYWdlLnNyYyA9IFwiaW1hZ2VzL2ZseV91cC5wbmdcIjtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJlc2NhcGVcIjtcbiAgICAgIHRoaXMuZmx5QXdheSA9IHRydWU7XG4gICAgICB0aGlzLmNyb3NzLmZseUF3YXkgPSB0cnVlO1xuICAgICAgcmV0dXJuIFwiZXNjYXBlXCI7XG4gICAgfVxuICB9XG5cbiAgY29sbGlzaW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmNyb3NzLmNsaWNrUG9zWCA+IHRoaXMucG9zWCArIDYgJiYgXG4gICAgICB0aGlzLmNyb3NzLmNsaWNrUG9zWCA8IHRoaXMucG9zWCArIDU4ICYmXG4gICAgICB0aGlzLmNyb3NzLmNsaWNrUG9zWSA+IHRoaXMucG9zWSArIDYgJiZcbiAgICAgIHRoaXMuY3Jvc3MuY2xpY2tQb3NZIDwgdGhpcy5wb3NZICsgNThcbiAgICApO1xuICB9XG5cbiAgaXNGYWxsRmluKCkge1xuICAgIGlmICh0aGlzLnBvc1kgPiAzNDUpIHtcbiAgICAgIHRoaXMuZmFsbEZpbiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaXNGbHlGaW4oKSB7XG4gICAgaWYgKHRoaXMucG9zWSA8IC03NSkge1xuICAgICAgdGhpcy5mbHlGaW4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlzU3BsYXRGaW4oKSB7XG4gICAgaWYgKHRoaXMuc3BsYXRDb3VudCA+IDIwKSB7XG4gICAgICB0aGlzLnNwbGF0RmluID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpc0luaXRpYWxCb29zdCgpIHtcbiAgICBpZiAodGhpcy5pbml0aWFsQm9vc3RDb3VudCA+IDE1KSB7XG4gICAgICB0aGlzLmluaXRpYWxCb29zdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IER1Y2s7IiwiY2xhc3MgRHVja3Mge1xuICBjb25zdHJ1Y3RvcihjKSB7XG4gICAgdGhpcy5jID0gYztcbiAgICB0aGlzLndhdmVDb3VudCA9IDA7XG4gICAgdGhpcy5hcnIgPSBbMCwwLDAsMCwwLDAsMCwwLDAsMF07XG5cbiAgICB0aGlzLnRpY2tDb3VudCA9IDA7XG4gICAgdGhpcy50aWNrc1BlckZyYW1lID0gMztcblxuICAgIHRoaXMudHJpUG9zMVggPSAxOTI7XG4gICAgdGhpcy50cmlQb3MyWCA9IDIwMjtcbiAgICB0aGlzLnRyaVBvczNYID0gMTk3O1xuXG4gICAgdGhpcy5kdWNrSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmR1Y2tJbWFnZS5vbmxvYWQgPSAoKSA9PiB0aGlzLmR1Y2tJbWFnZVJlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLmR1Y2tJbWFnZS5zcmMgPSBcImltYWdlcy9taXNzZWRfZHVjay5wbmdcIjtcblxuICAgIHRoaXMuaGl0RHVja0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5oaXREdWNrSW1hZ2Uub25sb2FkID0gKCkgPT4gdGhpcy5oaXREdWNrSW1hZ2VSZWFkeSA9IHRydWU7XG4gICAgdGhpcy5oaXREdWNrSW1hZ2Uuc3JjID0gXCJpbWFnZXMvaGl0X2R1Y2sucG5nXCI7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuZHVja0ltYWdlUmVhZHkpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaGl0RHVja0ltYWdlUmVhZHkpIHJldHVybjtcblxuICAgIHRoaXMuYy5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmMubW92ZVRvKHRoaXMudHJpUG9zMVggKyB0aGlzLndhdmVDb3VudCAqIDE2LCAzOTUpO1xuICAgIHRoaXMuYy5saW5lVG8odGhpcy50cmlQb3MyWCArIHRoaXMud2F2ZUNvdW50ICogMTYsIDM5NSk7XG4gICAgdGhpcy5jLmxpbmVUbyh0aGlzLnRyaVBvczNYICsgdGhpcy53YXZlQ291bnQgKiAxNiwgNDA1KTtcbiAgICB0aGlzLmMuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIHRoaXMuYy5maWxsKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5hcnJbaV0gPT09IDApIHtcbiAgICAgICAgdGhpcy5jLmRyYXdJbWFnZShcbiAgICAgICAgICB0aGlzLmR1Y2tJbWFnZSxcbiAgICAgICAgICAwLCAwLCAyNSwgMjUsXG4gICAgICAgICAgMTc1KyAoKGkrMSkqMTYpLCA0MTUsXG4gICAgICAgICAgMTYsIDE2XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hcnJbaV0gPT09IDEpIHtcbiAgICAgICAgdGhpcy5jLmRyYXdJbWFnZShcbiAgICAgICAgICB0aGlzLmhpdER1Y2tJbWFnZSxcbiAgICAgICAgICAwLCAwLCAyNSwgMjUsXG4gICAgICAgICAgMTc1ICsgKChpKzEpKjE2KSwgNDE1LFxuICAgICAgICAgIDE2LCAxNlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnRpY2tDb3VudCsrO1xuICAgIGlmICh0aGlzLnRpY2tDb3VudCA+IHRoaXMudGlja3NQZXJGcmFtZSkge1xuICAgICAgdGhpcy50aWNrQ291bnQgPSAwO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IER1Y2tzOyIsImNsYXNzIEVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IoYykge1xuICAgIHRoaXMuYyA9IGM7XG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5pbWFnZVJlYWR5ID0gdHJ1ZTtcbiAgICB9O1xuICAgIHRoaXMuaW1hZ2Uuc3JjID0gXCJpbWFnZXMvZHVja2h1bnQtc3RhdGljLTEucG5nXCI7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLmltYWdlUmVhZHkpIHJldHVybjtcbiAgICB0aGlzLmMuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDAsIDApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW52aXJvbm1lbnQ7ICIsImNvbnN0IFJvdW5kID0gcmVxdWlyZShcIi4vcm91bmQuanNcIik7IFxuY29uc3QgQ3Jvc3MgPSByZXF1aXJlKFwiLi9jcm9zcy5qc1wiKTtcbmNvbnN0IFNjb3JlYm9hcmQgPSByZXF1aXJlKFwiLi9zY29yZWJvYXJkLmpzXCIpO1xuY29uc3QgRW52aXJvbm1lbnQgPSByZXF1aXJlKFwiLi9lbnZpcm9ubWVudC5qc1wiKTtcbmNvbnN0IEdhbWVPdmVyU2NyZWVuID0gcmVxdWlyZShcIi4vZ2FtZV9vdmVyX3NjcmVlbi5qc1wiKTtcbmNvbnN0IER1Y2tzID0gcmVxdWlyZShcIi4vZHVja3NcIik7XG5jb25zdCBHYW1lU3RhcnRBbmkgPSByZXF1aXJlKFwiLi9nYW1lX3N0YXJ0X2FuaVwiKTtcbmNvbnN0IFJvdW5kU2NyZWVuID0gcmVxdWlyZShcIi4vcm91bmRfc2NyZWVuXCIpO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoYykge1xuICAgIHRoaXMuYyA9IGM7XG4gICAgdGhpcy5yb3VuZENvdW50ID0gMTtcbiAgICB0aGlzLnN0YXJ0ID0gdHJ1ZTtcbiAgICBcbiAgICB0aGlzLmdhbWVTdGFydEFuaSA9IG5ldyBHYW1lU3RhcnRBbmkodGhpcy5jKTtcbiAgICB0aGlzLnJvdW5kU2NyZWVuID0gbmV3IFJvdW5kU2NyZWVuKHRoaXMuYywgdGhpcy5yb3VuZENvdW50KTtcbiAgICB0aGlzLnNjb3JlYm9hcmQgPSBuZXcgU2NvcmVib2FyZCh0aGlzLmMpO1xuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQodGhpcy5jKTtcbiAgICB0aGlzLmNyb3NzID0gbmV3IENyb3NzKHRoaXMuYywgdGhpcy5zY29yZWJvYXJkKTtcbiAgICB0aGlzLnJvdW5kID0gbmV3IFJvdW5kKHRoaXMuYywgdGhpcy5yb3VuZENvdW50LCB0aGlzLmNyb3NzLCB0aGlzLnNjb3JlYm9hcmQpO1xuXG4gICAgdGhpcy5pc05ld1JvdW5kID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lT3ZlclNjcmVlbiA9IG5ldyBHYW1lT3ZlclNjcmVlbih0aGlzLmMpO1xuICAgIHRoaXMubG9vcCA9IHRoaXMubG9vcC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICB9XG5cbiAgbG9vcCgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5pc1N0YXJ0KCk7XG4gICAgdGhpcy5pc0dhbWVPdmVyKCk7XG4gICAgdGhpcy5nYW1lU3RhcnRBbmkudXBkYXRlKCk7XG4gICAgdGhpcy5yb3VuZC51cGRhdGUoKTtcbiAgICB0aGlzLnNjb3JlYm9hcmQudXBkYXRlKCk7XG4gICAgdGhpcy5jcm9zcy51cGRhdGUoKTtcbiAgICBcbiAgICBpZiAodGhpcy5yb3VuZC5yb3VuZE92ZXIpIHtcbiAgICAgIHRoaXMuc2NvcmVib2FyZC5yb3VuZENvdW50Kys7XG4gICAgICB0aGlzLnJvdW5kQ291bnQrKztcbiAgICAgIHRoaXMubmV3RHVja3MoKTtcbiAgICAgIHRoaXMubmV3Um91bmQoKTtcbiAgICAgIHRoaXMubmV3Um91bmRTY3JlZW4oKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5yb3VuZFNjcmVlbi51cGRhdGUoKTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuZW52aXJvbm1lbnQucmVuZGVyKCk7XG5cbiAgICBpZiAodGhpcy5zdGFydCkge1xuICAgICAgdGhpcy5nYW1lU3RhcnRBbmkucmVuZGVyKCk7XG4gICAgICB0aGlzLmlzTmV3Um91bmQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zdGFydCAmJiAhdGhpcy5nYW1lT3Zlcikge1xuICAgICAgdGhpcy5yb3VuZC5yZW5kZXIoKTtcbiAgICAgIHRoaXMuZW52aXJvbm1lbnQucmVuZGVyKCk7XG4gICAgfVxuICAgIFxuICAgIGlmICh0aGlzLmlzTmV3Um91bmQpIHtcbiAgICAgIHRoaXMucm91bmRTY3JlZW4ucmVuZGVyKCk7XG4gICAgICBpZiAodGhpcy5yb3VuZFNjcmVlbi5hbmlGaW4pIHtcbiAgICAgICAgdGhpcy5pc05ld1JvdW5kID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zY29yZWJvYXJkLnJlbmRlcigpO1xuICAgIGlmICh0aGlzLmdhbWVPdmVyKSB7dGhpcy5nYW1lT3ZlclNjcmVlbi5yZW5kZXIoKTt9XG4gICAgdGhpcy5jcm9zcy5yZW5kZXIoKTtcbiAgfVxuICBcbiAgbmV3Um91bmRTY3JlZW4oKSB7XG4gICAgdGhpcy5yb3VuZFNjcmVlbiA9IG5ldyBSb3VuZFNjcmVlbih0aGlzLmMsIHRoaXMucm91bmRDb3VudCk7XG4gIH1cblxuICBuZXdSb3VuZCgpIHtcbiAgICB0aGlzLnJvdW5kID0gbmV3IFJvdW5kKHRoaXMuYywgdGhpcy5yb3VuZENvdW50LCB0aGlzLmNyb3NzLCB0aGlzLnNjb3JlYm9hcmQpO1xuICAgIHRoaXMuaXNOZXdSb3VuZCA9IHRydWU7XG4gIH1cblxuICBuZXdEdWNrcygpIHtcbiAgICB0aGlzLnNjb3JlYm9hcmQuZHVja3MgPSBuZXcgRHVja3ModGhpcy5jKTtcbiAgfVxuXG4gIGlzU3RhcnQoKSB7XG4gICAgaWYgKHRoaXMuZ2FtZVN0YXJ0QW5pLmp1bXBFbmRGaW4pIHtcbiAgICAgIHRoaXMuc3RhcnQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgXG4gIGlzR2FtZU92ZXIoKSB7XG4gICAgbGV0IGR1Y2tzSGl0ID0gdGhpcy5zY29yZWJvYXJkLmR1Y2tzLmFyci5maWx0ZXIoZWwgPT4gZWwgPT09IDEpLmxlbmd0aDtcbiAgICBpZiAoZHVja3NIaXQgPD0gNSAmJiB0aGlzLnJvdW5kLndhdmVDb3VudCA9PT0gMTApIHtcbiAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH0gXG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiY2xhc3MgR2FtZU92ZXJTY3JlZW4ge1xuICBjb25zdHJ1Y3RvcihjKSB7XG4gICAgdGhpcy5jID0gYztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmMuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmMuZmlsbFJlY3QoMTMyLCAxMDAsIDI1MCwgMTAwKTtcblxuICAgIHRoaXMuYy5mb250ID0gXCIyMC41cHggUGl4ZWwgRW11bGF0b3JcIjtcbiAgICB0aGlzLmMuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIHRoaXMuYy50ZXh0QWxpZ24gPSBcImNlbnRlclwiOyBcbiAgICB0aGlzLmMuZmlsbFRleHQoJ2dhbWUgb3ZlcicsIDI1NiwgMTQyKTtcbiAgICB0aGlzLmMuZmlsbFRleHQoJ3BsYXkgYWdhaW4nLCAyNTYsIDE3MCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lT3ZlclNjcmVlbjsiLCJjbGFzcyBHYW1lU3RhcnRBbmkge1xuICBjb25zdHJ1Y3RvcihjKSB7XG4gICAgdGhpcy5jID0gYztcbiAgICB0aGlzLmRvZ1Bvc1ggPSAwO1xuICAgIHRoaXMuZG9nUG9zWSA9IDI3NTtcblxuICAgIC8vd2FsayBhbmQgc25pZmZcbiAgICB0aGlzLnNuaWZmMUZpbiA9IGZhbHNlO1xuICAgIHRoaXMuc25pZmYyRmluID0gZmFsc2U7XG4gICAgdGhpcy5zbmlmZjFDb3VudCA9IDA7XG4gICAgdGhpcy5zbmlmZjJDb3VudCA9IDA7XG5cbiAgICB0aGlzLndhbGsxRmluID0gZmFsc2U7XG4gICAgdGhpcy53YWxrMkZpbiA9IGZhbHNlO1xuICAgIHRoaXMud2FsazFDb3VudCA9IDA7XG4gICAgdGhpcy53YWxrMkNvdW50ID0gMDtcblxuICAgIHRoaXMucGF1c2UxQ291bnQgPSAwO1xuICAgIHRoaXMucGF1c2UyQ291bnQgPSAwO1xuXG4gICAgdGhpcy5zbmlmZkZyYW1lSW5kZXggPSAwO1xuICAgIHRoaXMuc25pZmZUaWNrQ291bnQgPSAwO1xuICAgIHRoaXMuc25pZmZUaWNrc1BlckZyYW1lID0gMTA7XG5cbiAgICB0aGlzLnNuaWZmSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnNuaWZmSW1hZ2Uub25sb2FkID0gKCkgPT4gdGhpcy5zbmlmZkltYWdlUmVhZHkgPSB0cnVlO1xuICAgIHRoaXMuc25pZmZJbWFnZS5zcmMgPSBcImltYWdlcy9kb2dfc25pZmYucG5nXCI7XG5cbiAgICB0aGlzLndhbGtGcmFtZUluZGV4ID0gMDtcbiAgICB0aGlzLndhbGtUaWNrQ291bnQgPSAwO1xuICAgIHRoaXMud2Fsa1RpY2tzUGVyRnJhbWUgPSA2O1xuXG4gICAgdGhpcy53YWxrSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLndhbGtJbWFnZS5vbmxvYWQgPSAoKSA9PiB0aGlzLndhbGtJbWFnZVJlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLndhbGtJbWFnZS5zcmMgPSBcImltYWdlcy9kb2dfd2Fsay5wbmdcIjtcblxuICAgIC8vanVtcFxuICAgIHRoaXMuc2hvY2tGaW4gPSBmYWxzZTtcbiAgICB0aGlzLnNob2NrQ291bnQgPSAwO1xuXG4gICAgdGhpcy5qdW1wU3RhcnRGaW4gPSBmYWxzZTtcbiAgICB0aGlzLmp1bXBTdGFydENvdW50ID0gMDtcblxuICAgIHRoaXMuanVtcEVuZEZpbiA9IGZhbHNlO1xuICAgIHRoaXMuanVtcEVuZENvdW50ID0gMDtcblxuICAgIHRoaXMuanVtcEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5qdW1wSW1hZ2Uub25sb2FkID0gKCkgPT4gdGhpcy5qdW1wSW1hZ2VSZWFkeSA9IHRydWU7XG4gICAgdGhpcy5qdW1wSW1hZ2Uuc3JjID0gXCJpbWFnZXMvZG9nX2p1bXAucG5nXCI7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnNuaWZmMkZpbikge1xuICAgICAgdGhpcy5yZW5kZXJXYWxrQW5kU25pZmYoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJKdW1wKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlU25pZmYoKTtcbiAgICB0aGlzLnVwZGF0ZVdhbGsoKTtcbiAgICB0aGlzLmlzV2FsazFGaW4oKTtcbiAgICB0aGlzLmlzV2FsazJGaW4oKTtcbiAgICB0aGlzLmlzU25pZmYxRmluKCk7XG4gICAgdGhpcy5pc1NuaWZmMkZpbigpO1xuICAgIHRoaXMuaXNTaG9ja0ZpbigpO1xuICAgIHRoaXMuaXNKdW1wU3RhcnRGaW4oKTtcbiAgICB0aGlzLmlzSnVtcEVuZEZpbigpO1xuICB9XG5cbiAgLy93YWxrIGFuZCBzbmlmZiByZW5kZXIgZnVuY3Rpb25zXG4gIHJlbmRlcldhbGtBbmRTbmlmZigpIHtcbiAgICBpZiAoIXRoaXMud2FsazFGaW4pIHtcbiAgICAgIHRoaXMucmVuZGVyV2FsaygpO1xuICAgICAgdGhpcy5kb2dQb3NYKys7XG4gICAgICB0aGlzLndhbGsxQ291bnQrKztcbiAgICB9XG4gICAgaWYgKHRoaXMud2FsazFGaW4gJiYgIXRoaXMuc25pZmYxRmluKSB7XG4gICAgICB0aGlzLnJlbmRlclNuaWZmKCk7XG4gICAgICB0aGlzLnNuaWZmMUNvdW50Kys7XG4gICAgfVxuICAgIGlmICh0aGlzLndhbGsxRmluICYmIHRoaXMuc25pZmYxRmluICYmICF0aGlzLndhbGsyRmluKSB7XG4gICAgICB0aGlzLnJlbmRlcldhbGsoKTtcbiAgICAgIHRoaXMuZG9nUG9zWCsrO1xuICAgICAgdGhpcy53YWxrMkNvdW50Kys7XG4gICAgfVxuICAgIGlmICh0aGlzLndhbGsxRmluICYmIHRoaXMuc25pZmYxRmluICYmIHRoaXMud2FsazJGaW4pIHtcbiAgICAgIHRoaXMucmVuZGVyU25pZmYoKTtcbiAgICAgIHRoaXMuc25pZmYyQ291bnQrKztcbiAgICB9XG4gIH1cblxuICByZW5kZXJXYWxrKCkge1xuICAgIHRoaXMuYy5kcmF3SW1hZ2UodGhpcy53YWxrSW1hZ2UsIFxuICAgICAgdGhpcy53YWxrRnJhbWVJbmRleCAqIDE4MCAvIDMsIDAsXG4gICAgICA2MCwgNjAsIFxuICAgICAgdGhpcy5kb2dQb3NYLCAyNzUsIFxuICAgICAgMTI1LCAxMjUpO1xuICB9XG5cbiAgcmVuZGVyU25pZmYoKSB7XG4gICAgdGhpcy5jLmRyYXdJbWFnZSh0aGlzLnNuaWZmSW1hZ2UsIFxuICAgICAgdGhpcy5zbmlmZkZyYW1lSW5kZXggKiAxMjAgLyAyLCAwLFxuICAgICAgNjAsIDYwLCBcbiAgICAgIHRoaXMuZG9nUG9zWCwgMjc1LCBcbiAgICAgIDEyNSwgMTI1KTtcbiAgfVxuXG4gIC8vIHNwcml0ZSB1cGRhdGUgZnVuY3Rpb25zXG4gIHVwZGF0ZVNuaWZmKCkge1xuICAgIHRoaXMuc25pZmZUaWNrQ291bnQrKztcbiAgICBpZiAodGhpcy5zbmlmZlRpY2tDb3VudCA+IHRoaXMuc25pZmZUaWNrc1BlckZyYW1lKSB7XG4gICAgICB0aGlzLnNuaWZmVGlja0NvdW50ID0gMDtcbiAgICAgIHRoaXMuc25pZmZGcmFtZUluZGV4Kys7XG4gICAgfVxuICAgIGlmICh0aGlzLnNuaWZmRnJhbWVJbmRleCA+IDEpIHtcbiAgICAgIHRoaXMuc25pZmZGcmFtZUluZGV4ID0gMDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVXYWxrKCkge1xuICAgIHRoaXMud2Fsa1RpY2tDb3VudCsrO1xuICAgIGlmICh0aGlzLndhbGtUaWNrQ291bnQgPiB0aGlzLndhbGtUaWNrc1BlckZyYW1lKSB7XG4gICAgICB0aGlzLndhbGtUaWNrQ291bnQgPSAwO1xuICAgICAgdGhpcy53YWxrRnJhbWVJbmRleCsrO1xuICAgIH1cbiAgICBpZiAodGhpcy53YWxrRnJhbWVJbmRleCA+IDIpIHtcbiAgICAgIHRoaXMud2Fsa0ZyYW1lSW5kZXggPSAwO1xuICAgIH1cbiAgfVxuICBcbiAgLy8ganVtcCByZW5kZXIgZnVuY3Rpb25zXG4gIHJlbmRlclNob2NrKCkge1xuICAgIHRoaXMuYy5kcmF3SW1hZ2UodGhpcy5qdW1wSW1hZ2UsIFxuICAgICAgMCwgMCxcbiAgICAgIDYwLCA2MCwgXG4gICAgICB0aGlzLmRvZ1Bvc1gsIDI3NSwgXG4gICAgICAxMjUsIDEyNSk7XG4gICAgfVxuICAgIFxuICByZW5kZXJKdW1wU3RhcnQoKSB7XG4gICAgdGhpcy5jLmRyYXdJbWFnZSh0aGlzLmp1bXBJbWFnZSwgXG4gICAgICA2MCwgMCxcbiAgICAgIDYwLCA2MCwgXG4gICAgICB0aGlzLmRvZ1Bvc1gsIHRoaXMuZG9nUG9zWSwgXG4gICAgICAxMjUsIDEyNSk7IFxuICAgIH1cbiAgICBcbiAgcmVuZGVySnVtcEVuZCgpIHtcbiAgICB0aGlzLmMuZHJhd0ltYWdlKHRoaXMuanVtcEltYWdlLCBcbiAgICAgIDEyMCwgMCxcbiAgICAgIDYwLCA2MCwgXG4gICAgICB0aGlzLmRvZ1Bvc1gsIHRoaXMuZG9nUG9zWSwgXG4gICAgICAxMjUsIDEyNSk7XG4gICAgfVxuICAgICAgICBcbiAgcmVuZGVySnVtcCgpIHtcbiAgICBpZiAoIXRoaXMuc2hvY2tGaW4pIHtcbiAgICAgIHRoaXMuYy5kcmF3SW1hZ2UodGhpcy5qdW1wSW1hZ2UsIFxuICAgICAgICAwLCAwLFxuICAgICAgICA2MCwgNjAsIFxuICAgICAgICB0aGlzLmRvZ1Bvc1gsIDI3NSwgXG4gICAgICAgIDEyNSwgMTI1KTtcbiAgICAgIHRoaXMuc2hvY2tDb3VudCsrO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaG9ja0ZpbiAmJiAhdGhpcy5qdW1wU3RhcnRGaW4pIHtcbiAgICAgIHRoaXMucmVuZGVySnVtcFN0YXJ0KCk7XG4gICAgICB0aGlzLmp1bXBTdGFydENvdW50Kys7XG4gICAgfVxuICAgIGlmICh0aGlzLmp1bXBTdGFydEZpbiAmJiB0aGlzLnNob2NrRmluKSB7XG4gICAgICB0aGlzLnJlbmRlckp1bXBFbmQoKTtcbiAgICAgIHRoaXMuanVtcEVuZENvdW50Kys7XG4gICAgfVxuICAgIGlmICh0aGlzLmp1bXBFbmRGaW4pIHtcbiAgICAgIHRoaXMuanVtcEltYWdlLnNyYyA9IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgLy8ganVtcCB1cGRhdGUgZnVuY3Rpb25zXG4gIGlzV2FsazFGaW4oKSB7aWYgKHRoaXMud2FsazFDb3VudCA+IDUwKSB0aGlzLndhbGsxRmluID0gdHJ1ZTt9XG4gIGlzU25pZmYxRmluKCkge2lmICh0aGlzLnNuaWZmMUNvdW50ID4gNDApIHRoaXMuc25pZmYxRmluID0gdHJ1ZTt9XG4gIGlzV2FsazJGaW4oKSB7aWYgKHRoaXMud2FsazJDb3VudCA+IDQwKSB0aGlzLndhbGsyRmluID0gdHJ1ZTt9XG4gIGlzU25pZmYyRmluKCkge2lmICh0aGlzLnNuaWZmMkNvdW50ID4gNDApIHRoaXMuc25pZmYyRmluID0gdHJ1ZTt9XG4gIGlzU2hvY2tGaW4oKSB7XG4gICAgaWYgKHRoaXMuc2hvY2tDb3VudCA+IDIwKSB7XG4gICAgICB0aGlzLnNob2NrRmluID0gdHJ1ZTtcbiAgICAgIHRoaXMuZG9nUG9zWCArPSAyO1xuICAgICAgdGhpcy5kb2dQb3NZIC09IDEuNTtcbiAgICB9XG4gIH1cbiAgaXNKdW1wU3RhcnRGaW4oKSB7XG4gICAgaWYgKHRoaXMuanVtcFN0YXJ0Q291bnQgPiA2MCkge1xuICAgICAgdGhpcy5qdW1wU3RhcnRGaW4gPSB0cnVlO1xuICAgICAgdGhpcy5kb2dQb3NZICs9IDg7XG4gICAgICB0aGlzLmRvZ1Bvc1ggLT0gMjtcbiAgICB9XG4gIH1cbiAgaXNKdW1wRW5kRmluKCkge2lmICh0aGlzLmp1bXBFbmRDb3VudCA+IDcpIHRoaXMuanVtcEVuZEZpbiA9IHRydWU7fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVTdGFydEFuaTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmNvbnN0IEdhbWUgPSByZXF1aXJlKFwiLi9nYW1lLmpzXCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZXZlbnQpID0+IHtcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgdmFyIGMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICBsZXQgZ2FtZSA9IG5ldyBHYW1lKGMpO1xuICBnYW1lLmxvb3AoKTtcbn0pO1xuIiwiY29uc3QgV2F2ZSA9IHJlcXVpcmUoXCIuL3dhdmUuanNcIik7XG5cbmNsYXNzIFJvdW5kIHtcbiAgY29uc3RydWN0b3IoYywgcm91bmRDb3VudCwgY3Jvc3MsIHNjb3JlYm9hcmQpIHtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMuY3Jvc3MgPSBjcm9zcztcbiAgICB0aGlzLnJvdW5kQ291bnQgPSByb3VuZENvdW50O1xuICAgIHRoaXMuc2NvcmVib2FyZCA9IHNjb3JlYm9hcmQ7XG4gICAgdGhpcy53YXZlQ291bnQgPSAwO1xuXG4gICAgdGhpcy53YXZlID0gbmV3IFdhdmUodGhpcy5jLCB0aGlzLmNyb3NzLCB0aGlzLnNjb3JlYm9hcmQsIHRoaXMucm91bmRDb3VudCwgdGhpcy53YXZlQ291bnQpO1xuXG4gICAgdGhpcy5yb3VuZE92ZXIgPSBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLndhdmUucmVuZGVyKCk7XG4gIH1cbiAgXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLndhdmUudXBkYXRlKCk7XG4gICAgdGhpcy5pc1JvdW5kT3ZlcigpO1xuXG4gICAgaWYgKHRoaXMud2F2ZS53YXZlT3Zlcikge1xuICAgICAgdGhpcy53YXZlQ291bnQrKztcbiAgICAgIHRoaXMuc2NvcmVib2FyZC5kdWNrcy53YXZlQ291bnQrKztcbiAgICAgIHRoaXMucmVzZXRTaG90cygpO1xuICAgICAgdGhpcy5yZXNldENvdW50ZXJzKCk7XG4gICAgICB0aGlzLm5ld1dhdmUoKTtcbiAgICB9XG4gIH1cblxuICByZXNldENvdW50ZXJzKCkge1xuICAgIHRoaXMuY3Jvc3MuaGl0ID0gZmFsc2U7XG4gICAgdGhpcy5jcm9zcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5jcm9zcy5mbHlBd2F5ID0gZmFsc2U7XG4gIH1cblxuICBuZXdXYXZlKCkge1xuICAgIHRoaXMud2F2ZSA9IG5ldyBXYXZlKHRoaXMuYywgdGhpcy5jcm9zcywgdGhpcy5zY29yZWJvYXJkLCB0aGlzLnJvdW5kQ291bnQsIHRoaXMud2F2ZUNvdW50KTtcbiAgfVxuXG4gIGlzUm91bmRPdmVyKCkge1xuICAgIGlmICh0aGlzLndhdmVDb3VudCA9PT0gMTApIHtcbiAgICAgIHRoaXMucm91bmRPdmVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgXG4gIHJlc2V0U2hvdHMoKSB7XG4gICAgdGhpcy5zY29yZWJvYXJkLnNob3RzLmNvdW50ID0gMztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJvdW5kOyIsImNsYXNzIFJvdW5kU2NyZWVuIHtcbiAgY29uc3RydWN0b3IoYywgcm91bmRDb3VudCkge1xuICAgIHRoaXMuYyA9IGM7XG4gICAgdGhpcy50aWNrQ291bnQgPSAwO1xuICAgIHRoaXMucm91bmRDb3VudCA9IHJvdW5kQ291bnQ7XG4gICAgdGhpcy5hbmlGaW4gPSBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnRpY2tDb3VudCsrO1xuICAgIHRoaXMuYy5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMuYy5maWxsUmVjdCgxNjUsIDExMCwgMTc4LCA2MCk7XG5cbiAgICB0aGlzLmMuZm9udCA9IFwiMjAuNXB4IFBpeGVsIEVtdWxhdG9yXCI7XG4gICAgdGhpcy5jLmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICB0aGlzLmMudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgXG4gICAgdGhpcy5jLmZpbGxUZXh0KGBST1VORCAke3RoaXMucm91bmRDb3VudH1gLCAyNTYsIDE0OCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5pc0FuaUZpbigpO1xuICB9XG5cbiAgaXNBbmlGaW4oKSB7XG4gICAgaWYgKHRoaXMudGlja0NvdW50ID4gNjApIHtcbiAgICAgIHRoaXMudGlja0NvdW50ID0gMDtcbiAgICAgIHRoaXMuYW5pRmluID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb3VuZFNjcmVlbjsiLCJjbGFzcyBTY29yZSB7XG4gIGNvbnN0cnVjdG9yKGMpIHtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMucG9pbnRzID0gMDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmMuZm9udCA9IFwiMjAuNXB4IFBpeGVsIEVtdWxhdG9yXCI7XG4gICAgdGhpcy5jLmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICB0aGlzLmMudGV4dEFsaWduID0gXCJlbmRcIjsgXG4gICAgdGhpcy5jLmZpbGxUZXh0KGAke3RoaXMucG9pbnRzfWAsIDQ4MCw0MzApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NvcmU7IiwiY29uc3QgU2NvcmUgPSByZXF1aXJlKFwiLi9zY29yZS5qc1wiKTtcbmNvbnN0IFNob3RzID0gcmVxdWlyZShcIi4vc2hvdHNcIik7XG5jb25zdCBEdWNrcyA9IHJlcXVpcmUoXCIuL2R1Y2tzXCIpO1xuXG5jbGFzcyBTY29yZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoYykge1xuICAgIHRoaXMuYyA9IGM7XG4gICAgdGhpcy5yb3VuZENvdW50ID0gMTtcbiAgICB0aGlzLnNjb3JlID0gbmV3IFNjb3JlKHRoaXMuYyk7XG4gICAgdGhpcy5zaG90cyA9IG5ldyBTaG90cyh0aGlzLmMpO1xuICAgIHRoaXMuZHVja3MgPSBuZXcgRHVja3ModGhpcy5jKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnNjb3JlLnJlbmRlcigpO1xuICAgIHRoaXMuc2hvdHMucmVuZGVyKCk7XG4gICAgdGhpcy5kdWNrcy5yZW5kZXIoKTtcblxuICAgIHRoaXMuYy5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgdGhpcy5jLmZpbGxSZWN0KDQ4LDM4NCw0NywyMS41KTtcbiAgICB0aGlzLmMuZmlsbFN0eWxlID0gXCIjQzVGNjUyXCI7XG4gICAgdGhpcy5jLmZvbnQgPSBcIjE2cHggUGl4ZWwgRW11bGF0b3JcIjtcbiAgICB0aGlzLmMuZmlsbFRleHQoYFI9JHt0aGlzLnJvdW5kQ291bnR9YCwgODkuNSwgNDAwKTtcbiAgfVxuXG4gIHJlbmRlclB0cyhwb3NYLCBwb3NZKSB7XG4gICAgdGhpcy5jLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7IFxuICAgIHRoaXMuYy5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgdGhpcy5jLmZvbnQgPSBcIjEycHggUGl4ZWwgRW11bGF0b3JcIjtcbiAgICB0aGlzLmMuZmlsbFRleHQoYCR7dGhpcy5yb3VuZENvdW50ICogNTAwfWAsIHBvc1gsIHBvc1kpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuZHVja3MudXBkYXRlKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY29yZWJvYXJkOyIsImNsYXNzIFNob3RzIHtcbiAgY29uc3RydWN0b3IoYykge1xuICAgIHRoaXMuYyA9IGM7XG4gICAgdGhpcy5jb3VudCA9IDM7XG5cbiAgICB0aGlzLnNob3RJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuc2hvdEltYWdlLm9ubG9hZCA9ICgpID0+IHRoaXMuaW1hZ2VSZWFkeSA9IHRydWU7XG4gICAgdGhpcy5zaG90SW1hZ2Uuc3JjID0gXCJpbWFnZXMvc2hvdC5wbmdcIjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xuICAgICAgdGhpcy5jLmRyYXdJbWFnZSh0aGlzLnNob3RJbWFnZSxcbiAgICAgICAgMCwgMCxcbiAgICAgICAgMjUsIDI1LFxuICAgICAgICAzMSArIChpKzEpKjE2LCA0MTEsXG4gICAgICAgIDE5LCAxOVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaG90czsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJjb25zdCBEdWNrID0gcmVxdWlyZShcIi4vZHVjay5qc1wiKTtcbmNvbnN0IFdhdmVIaXRBbmkgPSByZXF1aXJlKFwiLi93YXZlX2hpdF9hbmkuanNcIik7XG5jb25zdCBXYXZlTWlzc0FuaSA9IHJlcXVpcmUoXCIuL3dhdmVfbWlzc19hbmkuanNcIik7XG5cbmNsYXNzIFdhdmUge1xuICBjb25zdHJ1Y3RvcihjLCBjcm9zcywgc2NvcmVib2FyZCwgcm91bmRDb3VudCwgd2F2ZUNvdW50KSB7XG4gICAgdGhpcy5jID0gYztcbiAgICB0aGlzLmNyb3NzID0gY3Jvc3M7XG4gICAgdGhpcy5zY29yZWJvYXJkID0gc2NvcmVib2FyZDtcbiAgICB0aGlzLnJvdW5kQ291bnQgPSByb3VuZENvdW50O1xuICAgIHRoaXMud2F2ZUNvdW50ID0gd2F2ZUNvdW50O1xuICAgIHRoaXMud2F2ZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmR1Y2sgPSBuZXcgRHVjayh0aGlzLmMsIHRoaXMuY3Jvc3MsIHRoaXMucm91bmRDb3VudCwgdGhpcy5zY29yZWJvYXJkKTtcbiAgICB0aGlzLndhdmVIaXRBbmkgPSBuZXcgV2F2ZUhpdEFuaSh0aGlzLmMpO1xuICAgIHRoaXMud2F2ZU1pc3NBbmkgPSBuZXcgV2F2ZU1pc3NBbmkodGhpcy5jKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmR1Y2sucmVuZGVyKCk7XG4gICAgaWYgKHRoaXMuZHVjay5mYWxsRmluKSB7XG4gICAgICB0aGlzLndhdmVIaXRBbmkucmVuZGVyKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmR1Y2suZmx5RmluKSB7XG4gICAgICB0aGlzLndhdmVNaXNzQW5pLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmR1Y2tIaXQoKTtcbiAgICB0aGlzLmR1Y2sudXBkYXRlKCk7XG4gICAgdGhpcy53YXZlSGl0QW5pLnVwZGF0ZSgpO1xuICAgIHRoaXMud2F2ZU1pc3NBbmkudXBkYXRlKCk7XG4gICAgdGhpcy5pc1dhdmVPdmVyKCk7XG4gIH1cblxuICB1cGRhdGVEdWNrcygpIHtcbiAgICB0aGlzLnNjb3JlYm9hcmQuZHVja3MuYXJyW3RoaXMud2F2ZUNvdW50XSA9IDE7XG4gIH1cblxuICB1cGRhdGVTY29yZSgpIHtcbiAgICBpZiAodGhpcy5yb3VuZENvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLnNjb3JlYm9hcmQuc2NvcmUucG9pbnRzICs9IDUwMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY29yZWJvYXJkLnNjb3JlLnBvaW50cyArPSA1MDAgKyA1MDAgKiAodGhpcy5yb3VuZENvdW50IC0gMSk7XG4gICAgfVxuICB9XG5cbiAgZHVja0hpdCgpIHtcbiAgICBpZiAodGhpcy5kdWNrLmhpdCkge1xuICAgICAgdGhpcy5kdWNrLmhpdCA9IGZhbHNlO1xuICAgICAgdGhpcy51cGRhdGVEdWNrcygpO1xuICAgICAgdGhpcy53YXZlQ291bnQgPSB0aGlzLndhdmVDb3VudCArIDE7XG4gICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XG4gICAgfVxuICB9XG5cbiAgaXNXYXZlT3ZlcigpIHtcbiAgICBpZiAoXG4gICAgICAodGhpcy5kdWNrLmZhbGxGaW4gJiYgdGhpcy53YXZlSGl0QW5pLnNtaWxlRW5kRmluKSB8fFxuICAgICAgKHRoaXMuZHVjay5mbHlGaW4gJiYgdGhpcy53YXZlTWlzc0FuaS5sYXVnaEVuZEZpbikpICB7XG4gICAgICB0aGlzLndhdmVPdmVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gV2F2ZTsiLCJjbGFzcyBXYXZlSGl0QW5pIHtcbiAgY29uc3RydWN0b3IoYykge1xuICAgIHRoaXMuYyA9IGM7XG4gICAgdGhpcy5kb2dQb3NZID0gMzA4O1xuICAgIC8vIHRoaXMuZG9nUG9zWCA9IGRvZ1Bvc1g7XG4gICAgdGhpcy5zbWlsZVBhdXNlQ291bnQgPSAwO1xuXG4gICAgdGhpcy5zbWlsZVN0YXJ0RmluID0gZmFsc2U7XG4gICAgdGhpcy5zbWlsZVBhdXNlRmluID0gZmFsc2U7XG4gICAgdGhpcy5zbWlsZUVuZEZpbiA9IGZhbHNlO1xuXG4gICAgdGhpcy5zbWlsZUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5zbWlsZUltYWdlLm9ubG9hZCA9ICgpID0+IHRoaXMuc21pbGVJbWFnZVJlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLnNtaWxlSW1hZ2Uuc3JjID0gXCJpbWFnZXMvZG9nX3NpbmdsZV9kdWNrLnBuZ1wiO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zbWlsZVN0YXJ0RmluKSB7XG4gICAgICB0aGlzLmRvZ1Bvc1ktPTM7XG4gICAgfVxuICAgIGlmICh0aGlzLnNtaWxlU3RhcnRGaW4pIHtcbiAgICAgIHRoaXMuc21pbGVQYXVzZUNvdW50Kys7XG4gICAgfVxuICAgIHRoaXMuYy5kcmF3SW1hZ2UodGhpcy5zbWlsZUltYWdlLCBcbiAgICAgIDAsIDAsXG4gICAgICA2MCwgNjAsIFxuICAgICAgMjA0LCB0aGlzLmRvZ1Bvc1ksIFxuICAgICAgMTExLCAxMTEpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuaXNTbWlsZVN0YXJ0RmluKCk7XG4gICAgdGhpcy5pc1NtaWxlUGF1c2VGaW4oKTtcbiAgICB0aGlzLmlzU21pbGVFbmRGaW4oKTtcbiAgfVxuXG4gIGlzU21pbGVTdGFydEZpbigpIHtcbiAgICBpZiAodGhpcy5kb2dQb3NZID09PSAyNDgpIHRoaXMuc21pbGVTdGFydEZpbiA9IHRydWU7XG4gIH1cblxuICBpc1NtaWxlUGF1c2VGaW4oKSB7XG4gICAgaWYgKHRoaXMuc21pbGVQYXVzZUNvdW50ID4gMzApIHtcbiAgICAgIHRoaXMuc21pbGVQYXVzZUZpbiA9IHRydWU7XG4gICAgICB0aGlzLmRvZ1Bvc1krPTM7fVxuICB9XG5cbiAgaXNTbWlsZUVuZEZpbigpIHtcbiAgICBpZiAodGhpcy5kb2dQb3NZID4gMzEwKSB0aGlzLnNtaWxlRW5kRmluID0gdHJ1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhdmVIaXRBbmk7IiwiY2xhc3MgV2F2ZU1pc3NBbmkge1xuICBjb25zdHJ1Y3RvcihjKSB7XG4gICAgdGhpcy5jID0gYztcbiAgICB0aGlzLmRvZ1Bvc1kgPSAzMDg7XG5cbiAgICB0aGlzLmxhdWdoU3RhcnRGaW4gPSBmYWxzZTtcbiAgICB0aGlzLmxhdWdoUGF1c2VGaW4gPSBmYWxzZTtcbiAgICB0aGlzLmxhdWdoRW5kRmluID0gZmFsc2U7XG5cbiAgICB0aGlzLmxhdWdoUGF1c2VDb3VudCA9IDA7XG4gICAgdGhpcy5sYXVnaFRpY2tDb3VudCA9IDA7XG5cbiAgICB0aGlzLmxhdWdoRnJhbWVJbmRleCA9IDA7XG4gICAgdGhpcy5sYXVnaFRpY2tDb3VudCA9IDA7XG4gICAgdGhpcy5sYXVnaFRpY2tzUGVyRnJhbWUgPSA0O1xuXG4gICAgdGhpcy5sYXVnaEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5sYXVnaEltYWdlLm9ubG9hZCA9ICgpID0+IHRoaXMubGF1Z2hJbWFnZVJlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLmxhdWdoSW1hZ2Uuc3JjID0gXCJpbWFnZXMvZG9nX2xhdWdoLnBuZ1wiO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5sYXVnaFN0YXJ0RmluKSB7XG4gICAgICB0aGlzLmRvZ1Bvc1ktPTM7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhdWdoU3RhcnRGaW4pIHtcbiAgICAgIHRoaXMubGF1Z2hQYXVzZUNvdW50Kys7XG4gICAgfVxuICAgIHRoaXMuYy5kcmF3SW1hZ2UodGhpcy5sYXVnaEltYWdlLCBcbiAgICAgIHRoaXMubGF1Z2hGcmFtZUluZGV4ICogMTIwIC8gMiwgMCxcbiAgICAgIDYwLCA2MCwgXG4gICAgICAyMDQsIHRoaXMuZG9nUG9zWSwgXG4gICAgICAxMTEsIDExMSk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5pc0xhdWdoU3RhcnRGaW4oKTtcbiAgICB0aGlzLmlzTGF1Z2hQYXVzZUZpbigpO1xuICAgIHRoaXMuaXNMYXVnaEVuZEZpbigpO1xuXG4gICAgdGhpcy5sYXVnaFRpY2tDb3VudCsrO1xuICAgIGlmICh0aGlzLmxhdWdoVGlja0NvdW50ID4gdGhpcy5sYXVnaFRpY2tzUGVyRnJhbWUpIHtcbiAgICAgIHRoaXMubGF1Z2hUaWNrQ291bnQgPSAwO1xuICAgICAgdGhpcy5sYXVnaEZyYW1lSW5kZXgrKztcbiAgICB9XG4gICAgaWYgKHRoaXMubGF1Z2hGcmFtZUluZGV4ID4gMSkge1xuICAgICAgdGhpcy5sYXVnaEZyYW1lSW5kZXggPSAwO1xuICAgIH1cbiAgfVxuXG4gIGlzTGF1Z2hTdGFydEZpbigpIHtcbiAgICBpZiAodGhpcy5kb2dQb3NZID09PSAyNDgpIHt0aGlzLmxhdWdoU3RhcnRGaW4gPSB0cnVlO31cbiAgfVxuXG4gIGlzTGF1Z2hQYXVzZUZpbigpIHtcbiAgICBpZiAodGhpcy5sYXVnaFBhdXNlQ291bnQgPiAzMCkge1xuICAgICAgdGhpcy5sYXVnaFBhdXNlRmluID0gdHJ1ZTtcbiAgICAgIHRoaXMuZG9nUG9zWSs9MztcbiAgICB9XG4gIH1cblxuICBpc0xhdWdoRW5kRmluKCkge1xuICAgIGlmICh0aGlzLmRvZ1Bvc1kgPiAzMTApIHt0aGlzLmxhdWdoRW5kRmluID0gdHJ1ZTt9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXYXZlTWlzc0FuaTsiXSwic291cmNlUm9vdCI6IiJ9