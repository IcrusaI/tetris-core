(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("TetrisCore", [], factory);
	else if(typeof exports === 'object')
		exports["TetrisCore"] = factory();
	else
		root["TetrisCore"] = factory();
})((typeof global!=="undefined"?global:window), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Tetris.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CallbackTetris.ts":
/*!*******************************!*\
  !*** ./src/CallbackTetris.ts ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(utils) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTypesTetris = void 0;
var CallbackTetris = function () {
    function CallbackTetris() {}
    CallbackTetris.prototype.getEventsByType = function (type) {
        return utils.events.filter(function (e) {
            return e.type === type;
        });
    };
    CallbackTetris.prototype.updateBoardCallback = function (newBoard, oldBoard) {
        var events = this.getEventsByType(EventTypesTetris.UPDATE);
        for (var eventKey = 0; eventKey < events.length; eventKey++) {
            var event_1 = events[eventKey];
            event_1.callback(newBoard, oldBoard);
        }
    };
    return CallbackTetris;
}();
exports.default = CallbackTetris;
var EventTypesTetris;
(function (EventTypesTetris) {
    EventTypesTetris["UPDATE"] = "updateBoard";
})(EventTypesTetris = exports.EventTypesTetris || (exports.EventTypesTetris = {}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/utils.tsx */ "./src/utils.tsx")))

/***/ }),

/***/ "./src/GameBoard.ts":
/*!**************************!*\
  !*** ./src/GameBoard.ts ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellTypes = exports.ICell = void 0;
var CallbackTetris_1 = __importDefault(__webpack_require__(/*! ~/CallbackTetris */ "./src/CallbackTetris.ts"));
var GameBoard = function (_super) {
    __extends(GameBoard, _super);
    function GameBoard(config) {
        var _this = _super.call(this) || this;
        _this.board = [];
        _this.config = config;
        _this.clearBoard(config.display);
        _this.setCell(new ICell(CellTypes.FALLING_BLOCK), { x: 2, y: 0 });
        setInterval(function () {
            _this.setFallingBlockDown();
        }, 1000);
        return _this;
    }
    GameBoard.prototype.setFallingBlockDown = function () {
        var points = this.getCell(CellTypes.FALLING_BLOCK);
        var isDown = true;
        for (var pointKey = 0; pointKey < points.length; pointKey++) {
            var point = points[pointKey];
            if (this.config.display.rows <= point.y + 1) {
                isDown = false;
                continue;
            }
            var cellDown = this.board[point.y + 1][point.x];
            if (cellDown.type === CellTypes.BLOCK) {
                isDown = false;
                continue;
            }
        }
        for (var pointKey = 0; pointKey < points.length; pointKey++) {
            var point = points[pointKey];
            var block = this.board[point.y][point.x];
            if (isDown) {
                this.setCell(block, { y: point.y + 1, x: point.x });
                this.resetCell(point);
            } else {
                block.type = CellTypes.BLOCK;
                this.setCell(block, point);
            }
        }
        this.updateBoardCallback(this.board, []);
    };
    GameBoard.prototype.getCell = function (type) {
        var points = [];
        for (var row = 0; row < this.board.length; row++) {
            for (var col = 0; col < this.board[row].length; col++) {
                var cell = this.board[row][col];
                if (type === cell.type) {
                    points.push({
                        y: row,
                        x: col
                    });
                }
            }
        }
        return points;
    };
    GameBoard.prototype.setCell = function (cell, point) {
        this.board[point.y][point.x] = cell;
    };
    GameBoard.prototype.resetCell = function (point) {
        this.setCell(new ICell(CellTypes.EMPTY_BLOCK), point);
    };
    GameBoard.prototype.clearBoard = function (config) {
        this.board.splice(0, this.board.length);
        for (var rowKey = 0; rowKey < config.rows; rowKey++) {
            this.board[rowKey] = [];
            for (var colKey = 0; colKey < config.cols; colKey++) {
                this.resetCell({
                    y: rowKey,
                    x: colKey
                });
            }
        }
        this.updateBoardCallback(this.board, []);
    };
    return GameBoard;
}(CallbackTetris_1.default);
exports.default = GameBoard;
var ICell = function () {
    function ICell(type) {
        this.type = type;
    }
    return ICell;
}();
exports.ICell = ICell;
var CellTypes;
(function (CellTypes) {
    CellTypes["BLOCK"] = "block";
    CellTypes["EMPTY_BLOCK"] = "emptyBlock";
    CellTypes["FALLING_BLOCK"] = "fallingBlock";
})(CellTypes = exports.CellTypes || (exports.CellTypes = {}));

/***/ }),

/***/ "./src/Tetris.ts":
/*!***********************!*\
  !*** ./src/Tetris.ts ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(utils) {

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ValidatorConfig_1 = __importDefault(__webpack_require__(/*! ~/ValidatorConfig */ "./src/ValidatorConfig.ts"));
var GameBoard_1 = __importDefault(__webpack_require__(/*! ~/GameBoard */ "./src/GameBoard.ts"));
var Tetris = function () {
    function Tetris(config) {
        var validator = new ValidatorConfig_1.default();
        this.config = validator.validate(config);
        this.gameBoard = new GameBoard_1.default(this.config);
    }
    Tetris.prototype.on = function (type, callback) {
        utils.events.push({
            type: type,
            callback: callback
        });
    };
    Object.defineProperty(Tetris.prototype, "board", {
        get: function () {
            return this.gameBoard.board;
        },
        enumerable: false,
        configurable: true
    });
    return Tetris;
}();
exports.default = Tetris;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/utils.tsx */ "./src/utils.tsx")))

/***/ }),

/***/ "./src/Validator.ts":
/*!**************************!*\
  !*** ./src/Validator.ts ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Validator = function () {
    function Validator() {}
    Validator.isNumber = function (variable) {
        return typeof variable === "number";
    };
    Validator.isArray = function (variable) {
        return Array.isArray(variable);
    };
    Validator.min = function (variable, min) {
        return min > variable;
    };
    return Validator;
}();
exports.default = Validator;

/***/ }),

/***/ "./src/ValidatorConfig.ts":
/*!********************************!*\
  !*** ./src/ValidatorConfig.ts ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_CONFIG = void 0;
var Validator_1 = __importDefault(__webpack_require__(/*! ~/Validator */ "./src/Validator.ts"));
exports.DEFAULT_CONFIG = {
    "display": {
        "rows": 20,
        "cols": 10,
        "startPoint": {
            "x": 4,
            "y": -1
        }
    },
    "blocks": [{
        "type": [[1, 1, 1, 1]]
    }, {
        "type": [[0, 1, 0], [1, 1, 1]]
    }, {
        "type": [[1, 0, 0], [1, 1, 1]]
    }, {
        "type": [[0, 0, 1], [1, 1, 1]]
    }, {
        "type": [[1, 1, 0], [0, 1, 1]]
    }, {
        "type": [[0, 1, 1], [1, 1, 0]]
    }, {
        "type": [[1, 1], [1, 1]]
    }]
};
var ValidatorConfig = function (_super) {
    __extends(ValidatorConfig, _super);
    function ValidatorConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValidatorConfig.prototype.validate = function (config) {
        if (config === undefined) {
            config = exports.DEFAULT_CONFIG;
            return config;
        }
        ValidatorConfig.validateDisplay(config.display);
        ValidatorConfig.validateBlocks(config.blocks);
        return config;
    };
    ValidatorConfig.validateDisplay = function (config) {
        if (config === undefined) {
            return exports.DEFAULT_CONFIG.display;
        }
        if (config.cols === undefined) {
            config.cols = exports.DEFAULT_CONFIG.display.cols;
        } else if (!this.isNumber(config.cols) || !this.min(config.cols, 0)) {
            throw new Error("The variable is not a number, or it is less than 1.");
        }
        if (config.rows === undefined) {
            config.rows = exports.DEFAULT_CONFIG.display.rows;
        } else if (!this.isNumber(config.rows) || !this.min(config.rows, 0)) {
            throw new Error("The variable is not a number, or it is less than 1.");
        }
        if (config.startPoint === undefined) {
            config.startPoint = exports.DEFAULT_CONFIG.display.startPoint;
        } else {
            this.validatePoint(config.startPoint);
        }
        return config;
    };
    ValidatorConfig.validatePoint = function (config) {
        if (!this.isNumber(config.x)) {
            throw new Error("The point must have an x-axis");
        }
        if (!this.isNumber(config.y)) {
            throw new Error("The point must have an y-axis");
        }
        return config;
    };
    ValidatorConfig.validateBlocks = function (blocks) {
        if (blocks === undefined) {
            return exports.DEFAULT_CONFIG.blocks;
        }
        if (blocks.length === 0) {
            throw new Error("There must be at least 1 block");
        }
        for (var blockKey in blocks) {
            var block = blocks[blockKey];
            block = this.validateBlock(block);
            blocks[blockKey] = block;
        }
        return blocks;
    };
    ValidatorConfig.validateBlock = function (block) {
        if (block.type === undefined) {
            throw new Error("The block must have the type");
        }
        if (!this.isArray(block.type)) {
            throw new Error("The type must be an array");
        }
        for (var blockKey in block.type) {
            var type = block.type[blockKey];
            if (!this.isArray(type)) {
                throw new Error("The type must be an array");
            }
            for (var typeKey in type) {
                var state = type[typeKey];
                if (!this.isNumber(state) && state !== 1 && state !== 0) {
                    throw new Error("The state must be either 1 or 0");
                }
            }
        }
        return block;
    };
    return ValidatorConfig;
}(Validator_1.default);
exports.default = ValidatorConfig;

/***/ }),

/***/ "./src/utils.tsx":
/*!***********************!*\
  !*** ./src/utils.tsx ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.events = void 0;
exports.events = [];

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=tetris-core.js.map