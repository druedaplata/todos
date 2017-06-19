webpackJsonp([1,4],{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

module.exports = "<section class=\"todoapp\">\n\t\n\t<app-todo-list-header (add)=\"onAddTodo($event)\"></app-todo-list-header>\n\t\n\t<app-todo-list [todos]=\"todos\" \n\t\t\t\t(toggleComplete)=\"onToggleTodoComplete($event)\"\n\t\t\t\t(remove)=\"onRemoveTodo($event)\">\n\t</app-todo-list>\n\t \n\t<app-todo-list-footer [todos]=\"todos\"></app-todo-list-footer>\n\t\n</section>"

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" *ngIf=\"todos.length > 0\">\n  <span class=\"todo-count\"><strong>{{todos.length}}</strong> {{todos.length == 1 ? 'item' : 'items'}} left</span>\n</footer>"

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n\t<h1>Todos</h1>\n\t<input class=\"new-todo\" placeholder=\"What needs to be done?\" autofocus=\"\"\n\t\t[(ngModel)]=\"newTodo.title\" (keyup.enter)=\"addTodo()\">\n</header>\n"

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

module.exports = "<div class=\"view\">\n  <input class=\"toggle\" type=\"checkbox\" (click)=\"toggleTodoComplete(todo)\" [checked]=\"todo.complete\">\n  <label>{{todo.title}}</label>\n  <button class=\"destroy\" (click)=\"removeTodo(todo)\"></button>\n</div>"

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

module.exports = "<section class=\"main\" *ngIf=\"todos.length > 0\">\n  <ul class=\"todo-list\">\n    <li *ngFor=\"let todo of todos\" [class.completed]=\"todo.complete\">\n      <app-todo-list-item\n        [todo]=\"todo\"\n        (toggleComplete)=\"onToggleTodoComplete($event)\"\n        (remove)=\"onRemoveTodo($event)\"></app-todo-list-item>\n    </li>\n  </ul>\n</section>"

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo(values) {
        if (values === void 0) { values = {}; }
        this.title = '';
        this.complete = false;
        Object.assign(this, values);
    }
    return Todo;
}());

//# sourceMappingURL=todo.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoDataService = (function () {
    function TodoDataService() {
        // Placeholder for last id so we can simulate
        // automatic incrementing for id's
        this.lastId = 0;
        // Placeholder for todo's
        this.todos = [];
    }
    // Simulate POST /todos
    TodoDataService.prototype.addTodo = function (todo) {
        if (!todo.id) {
            todo.id = ++this.lastId;
        }
        this.todos.push(todo);
        return this;
    };
    // Simulate DELETE /todos/:id
    TodoDataService.prototype.deleteTodoById = function (id) {
        this.todos = this.todos
            .filter(function (todo) { return todo.id !== id; });
        return this;
    };
    // Simulate PUT /todos/:id
    TodoDataService.prototype.updateTodoById = function (id, values) {
        if (values === void 0) { values = {}; }
        var todo = this.getTodoById(id);
        if (!todo) {
            return null;
        }
        Object.assign(todo, values);
        return todo;
    };
    // Simulate GET /todos
    TodoDataService.prototype.getAllTodos = function () {
        return this.todos;
    };
    // Simulate GET /todos/:id
    TodoDataService.prototype.getTodoById = function (id) {
        return this.todos
            .filter(function (todo) { return todo.id === id; })
            .pop();
    };
    // Toggle todo complete
    TodoDataService.prototype.toggleTodoComplete = function (todo) {
        var updatedTodo = this.updateTodoById(todo.id, {
            complete: !todo.complete
        });
        return updatedTodo;
    };
    return TodoDataService;
}());
TodoDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TodoDataService);

//# sourceMappingURL=todo-data.service.js.map

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 72;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(86);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_data_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    // Ask Angular DI system to inject the dependency
    // associated with the dependency injection token 'TodoDataService'
    // and assign it to a property called 'todoDataService'
    function AppComponent(todoDataService) {
        this.todoDataService = todoDataService;
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_0__todo__["a" /* Todo */]();
    }
    // Add new method to handle event emitted by TodoListHeaderComponent
    AppComponent.prototype.onAddTodo = function (todo) {
        this.todoDataService.addTodo(todo);
    };
    // Service is now available as this.todoDataService
    AppComponent.prototype.onToggleTodoComplete = function (todo) {
        this.todoDataService.toggleTodoComplete(todo);
    };
    AppComponent.prototype.onRemoveTodo = function (todo) {
        this.todoDataService.deleteTodoById(todo.id);
    };
    Object.defineProperty(AppComponent.prototype, "todos", {
        get: function () {
            return this.todoDataService.getAllTodos();
        },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(145),
        styles: [__webpack_require__(140)],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todo_data_service__["a" /* TodoDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__todo_data_service__["a" /* TodoDataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_data_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_list_header_todo_list_header_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todo_list_todo_list_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__todo_list_item_todo_list_item_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__todo_list_footer_todo_list_footer_component__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__todo_list_header_todo_list_header_component__["a" /* TodoListHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__todo_list_todo_list_component__["a" /* TodoListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__todo_list_item_todo_list_item_component__["a" /* TodoListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_9__todo_list_footer_todo_list_footer_component__["a" /* TodoListFooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__todo_data_service__["a" /* TodoDataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoListFooterComponent = (function () {
    function TodoListFooterComponent() {
    }
    TodoListFooterComponent.prototype.ngOnInit = function () {
    };
    return TodoListFooterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], TodoListFooterComponent.prototype, "todos", void 0);
TodoListFooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-todo-list-footer',
        template: __webpack_require__(146),
        styles: [__webpack_require__(141)]
    }),
    __metadata("design:paramtypes", [])
], TodoListFooterComponent);

//# sourceMappingURL=todo-list-footer.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoListHeaderComponent = (function () {
    function TodoListHeaderComponent() {
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_0__todo__["a" /* Todo */]();
        this.add = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* EventEmitter */]();
    }
    TodoListHeaderComponent.prototype.ngOnInit = function () {
    };
    TodoListHeaderComponent.prototype.addTodo = function () {
        this.add.emit(this.newTodo);
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_0__todo__["a" /* Todo */]();
    };
    return TodoListHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], TodoListHeaderComponent.prototype, "add", void 0);
TodoListHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_4" /* Component */])({
        selector: 'app-todo-list-header',
        template: __webpack_require__(147),
        styles: [__webpack_require__(142)]
    }),
    __metadata("design:paramtypes", [])
], TodoListHeaderComponent);

var _a;
//# sourceMappingURL=todo-list-header.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoListItemComponent = (function () {
    function TodoListItemComponent() {
        this.remove = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* EventEmitter */]();
        this.toggleComplete = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* EventEmitter */]();
    }
    TodoListItemComponent.prototype.ngOnInit = function () {
    };
    TodoListItemComponent.prototype.toggleTodoComplete = function (todo) {
        this.toggleComplete.emit(todo);
    };
    TodoListItemComponent.prototype.removeTodo = function (todo) {
        this.remove.emit(todo);
    };
    return TodoListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__todo__["a" /* Todo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__todo__["a" /* Todo */]) === "function" && _a || Object)
], TodoListItemComponent.prototype, "todo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], TodoListItemComponent.prototype, "remove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* EventEmitter */]) === "function" && _c || Object)
], TodoListItemComponent.prototype, "toggleComplete", void 0);
TodoListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_4" /* Component */])({
        selector: 'app-todo-list-item',
        template: __webpack_require__(148),
        styles: [__webpack_require__(143)]
    }),
    __metadata("design:paramtypes", [])
], TodoListItemComponent);

var _a, _b, _c;
//# sourceMappingURL=todo-list-item.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoListComponent = (function () {
    function TodoListComponent() {
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.toggleComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    TodoListComponent.prototype.ngOnInit = function () {
    };
    TodoListComponent.prototype.onToggleTodoComplete = function (todo) {
        this.toggleComplete.emit(todo);
    };
    TodoListComponent.prototype.onRemoveTodo = function (todo) {
        this.remove.emit(todo);
    };
    return TodoListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], TodoListComponent.prototype, "todos", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], TodoListComponent.prototype, "remove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], TodoListComponent.prototype, "toggleComplete", void 0);
TodoListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-todo-list',
        template: __webpack_require__(149),
        styles: [__webpack_require__(144)]
    }),
    __metadata("design:paramtypes", [])
], TodoListComponent);

var _a, _b;
//# sourceMappingURL=todo-list.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[174]);
//# sourceMappingURL=main.bundle.js.map