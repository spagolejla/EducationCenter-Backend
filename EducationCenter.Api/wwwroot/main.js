(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./administrator/administrator.module": [
		"./src/app/administrator/administrator.module.ts",
		"administrator-administrator-module"
	],
	"./competition/competition.module": [
		"./src/app/competition/competition.module.ts",
		"default~competition-competition-module~educator-educator-module",
		"common"
	],
	"./course/course.module": [
		"./src/app/course/course.module.ts",
		"common",
		"course-course-module"
	],
	"./educator/educator.module": [
		"./src/app/educator/educator.module.ts",
		"default~competition-competition-module~educator-educator-module",
		"common",
		"educator-educator-module"
	],
	"./notification/notification.module": [
		"./src/app/notification/notification.module.ts"
	],
	"./payment/payment.module": [
		"./src/app/payment/payment.module.ts",
		"common",
		"payment-payment-module"
	],
	"./student/student.module": [
		"./src/app/student/student.module.ts",
		"common",
		"student-student-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/login/login.component */ "./src/app/shared/components/login/login.component.ts");
/* harmony import */ var _shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/home/home.component */ "./src/app/shared/components/home/home.component.ts");
/* harmony import */ var _shared_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/profile/profile.component */ "./src/app/shared/components/profile/profile.component.ts");
/* harmony import */ var _shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/guards/admin.guard */ "./src/app/shared/guards/admin.guard.ts");
/* harmony import */ var _shared_guards_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/guards/logged-in.guard */ "./src/app/shared/guards/logged-in.guard.ts");








var routes = [
    { path: '', component: _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'home', component: _shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_6__["AdminGuard"]] },
    { path: 'profile', component: _shared_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [_shared_guards_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__["LoggedInGuard"]] },
    {
        path: 'student',
        loadChildren: './student/student.module#StudentModule'
    },
    {
        path: 'payment',
        loadChildren: './payment/payment.module#PaymentModule'
    },
    {
        path: 'educator',
        loadChildren: './educator/educator.module#EducatorModule'
    },
    {
        path: 'administrator',
        loadChildren: './administrator/administrator.module#AdministratorModule',
        canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_6__["AdminGuard"]]
    },
    {
        path: 'notification',
        loadChildren: './notification/notification.module#NotificationModule'
    },
    {
        path: 'course',
        loadChildren: './course/course.module#CourseModule'
    },
    {
        path: 'competition',
        loadChildren: './competition/competition.module#CompetitionModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fullscreen>\n    <mat-sidenav\n      [opened]=\"userMenuOpen\"\n      mode=\"over\"\n      position=\"end\"\n      (closedStart)=\"closeUserProfile()\"\n    >\n    <app-user-menu></app-user-menu>\n    </mat-sidenav>\n    <mat-sidenav-content>\n      <app-header></app-header>\n      <mat-sidenav-container class=\"sidenav-container\" hasBackdrop=\"false\">\n        <mat-sidenav [opened]=\"navigationOpen\" mode=\"side\">\n          <app-nav-menu></app-nav-menu>\n        </mat-sidenav>\n        <mat-sidenav-content>\n\n          <router-outlet></router-outlet>\n        </mat-sidenav-content>\n      </mat-sidenav-container>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: calc(100% - 64px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEZJVFxcWmF2csWhbmlcXEVkdWNhdGlvbkNlbnRlclxcRWR1Y2F0aW9uQ2VudGVyLUJhY2tlbmRcXEVkdWNhdGlvbkNlbnRlci5BcGkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/services/layout.service */ "./src/app/layout/services/layout.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(layoutService, router, authService) {
        var _this = this;
        this.layoutService = layoutService;
        this.authService = authService;
        this.title = 'Education Center';
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.layoutService
            .onUserMenuToggle()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroy$))
            .subscribe(function (isOpen) { return (_this.userMenuOpen = isOpen); });
        this.layoutService
            .onNavMenuToggle()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroy$))
            .subscribe(function (isOpen) { return (_this.navigationOpen = isOpen); });
        // this.authService
        // .onHeaderToggle()
        // .pipe(takeUntil(this.onDestroy$))
        // .subscribe(isOpen => (this.headerShowed = isOpen));
    }
    AppComponent.prototype.closeUserProfile = function () {
        this.layoutService.closeUserProfile();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.onDestroy$.next();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_layout_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _shared_material_design_material_design_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/material-design/material-design.module */ "./src/app/shared/material-design/material-design.module.ts");
/* harmony import */ var _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/login/login.component */ "./src/app/shared/components/login/login.component.ts");
/* harmony import */ var _shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/home/home.component */ "./src/app/shared/components/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _notification_notification_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notification/notification.module */ "./src/app/notification/notification.module.ts");
/* harmony import */ var _shared_helpers_username__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/helpers/username */ "./src/app/shared/helpers/username.ts");
/* harmony import */ var _shared_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/components/profile/profile.component */ "./src/app/shared/components/profile/profile.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _shared_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _shared_material_design_material_design_module__WEBPACK_IMPORTED_MODULE_8__["MaterialDesignModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _notification_notification_module__WEBPACK_IMPORTED_MODULE_12__["NotificationModule"]
            ],
            providers: [
                _shared_helpers_username__WEBPACK_IMPORTED_MODULE_13__["UsernameValidator"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this._config = {
            PathAPI: 'https://www.s75.wrd.app.fit.ba/'
        };
    }
    Object.defineProperty(AppConfig.prototype, "setting", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    AppConfig.prototype.get = function (key) {
        return this._config[key];
    };
    AppConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppConfig);
    return AppConfig;
}());

;


/***/ }),

/***/ "./src/app/layout/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" *ngIf=\"_service?.isLoggedIn$\">\n    <mat-toolbar-row>\n          <button mat-icon-button (click)=\"toggleNavMenu()\">\n            <mat-icon>menu</mat-icon>\n          </button>\n        <span class=\"example-spacer\"></span>\n        <span>Education Center</span>\n        <span class=\"example-spacer\"></span>\n        <button mat-icon-button (click)=\"openUserMenu()\">\n            <mat-icon>person</mat-icon>\n          </button>\n      </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaGVhZGVyL0Q6XFxGSVRcXFphdnLFoW5pXFxFZHVjYXRpb25DZW50ZXJcXEVkdWNhdGlvbkNlbnRlci1CYWNrZW5kXFxFZHVjYXRpb25DZW50ZXIuQXBpL3NyY1xcYXBwXFxsYXlvdXRcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1pY29uIHtcclxuICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/layout/services/layout.service.ts");
/* harmony import */ var src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(layoutService, authService, _service) {
        this.layoutService = layoutService;
        this.authService = authService;
        this._service = _service;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this._service.initUser();
    };
    HeaderComponent.prototype.toggleNavMenu = function () {
        this.layoutService.navMenuToggle();
    };
    HeaderComponent.prototype.openUserMenu = function () {
        this.layoutService.openUserMenu();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"], src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/nav-menu/nav-menu.component.html":
/*!********************************************************************!*\
  !*** ./src/app/layout/components/nav-menu/nav-menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-menu-content\" *ngIf='_service?.isAdmin'>\n  <mat-nav-list >\n    <div class=\"sidenav-link\">\n      <a mat-list-item routerLink='/home' >\n        <i class=\"material-icons sidenav-icon\">home</i>\n        Home\n      </a>\n    </div>\n\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header class=\"sidenav-item\">\n          <mat-panel-title>\n            <i class=\"material-icons sidenav-icon\">chrome_reader_mode</i>\n            Courses\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n\n        <mat-nav-list>\n          <a mat-list-item [routerLink]=\"['/course/addedit', 0]\">\n            <i class=\"material-icons sidenav-icon\">library_add</i>\n            Add course</a>\n        </mat-nav-list>\n\n        <mat-nav-list>\n          <a mat-list-item routerLink='/course'>\n            <i class=\"material-icons sidenav-icon\">ballot</i>\n            Show all</a>\n        </mat-nav-list>\n\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header class=\"sidenav-item\">\n          <mat-panel-title>\n            <i class=\"material-icons sidenav-icon\">person</i>\n            Employees\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n\n        <mat-nav-list>\n          <a mat-list-item  routerLink='/administrator'>\n            <i class=\"material-icons sidenav-icon\">account_box</i>\n            Administrators</a>\n        </mat-nav-list>\n\n        <mat-nav-list>\n          <a mat-list-item  routerLink='/educator'>\n            <i class=\"material-icons sidenav-icon\">people</i>\n            Educators</a>\n        </mat-nav-list>\n\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header class=\"sidenav-item\">\n          <mat-panel-title>\n            <i class=\"material-icons sidenav-icon\">school</i>\n            Students\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n\n        <mat-nav-list>\n          <a mat-list-item routerLink='/student'>\n            <i class=\"material-icons sidenav-icon\">people</i>\n            Show all</a>\n        </mat-nav-list>\n\n        <mat-nav-list>\n          <a mat-list-item routerLink='/payment'>\n            <i class=\"material-icons sidenav-icon\">payment</i>\n            Payments</a>\n        </mat-nav-list>\n\n      </mat-expansion-panel>\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header class=\"sidenav-item\">\n            <mat-panel-title>\n              <i class=\"material-icons sidenav-icon\">notifications</i>\n              Notifications\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n\n          <mat-nav-list>\n            <a mat-list-item  [routerLink]=\"['/notification/addedit', 0]\" >\n              <i class=\"material-icons sidenav-icon\">add_circle</i>\n              Add new</a>\n          </mat-nav-list>\n\n          <mat-nav-list>\n            <a mat-list-item routerLink='/notification' >\n              <i class=\"material-icons sidenav-icon\">list_alt</i>\n              Manage notification</a>\n          </mat-nav-list>\n\n        </mat-expansion-panel>\n      </mat-accordion>\n    </mat-accordion>\n\n  </mat-nav-list>\n\n </div>\n\n <!-- EDUCATOR-->\n <div class=\"nav-menu-content\" *ngIf='_service?.isEducator'>\n  <mat-nav-list >\n    <div class=\"sidenav-link\">\n      <a mat-list-item routerLink='/educator/home' >\n        <i class=\"material-icons sidenav-icon\">home</i>\n        Home\n      </a>\n    </div>\n\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header class=\"sidenav-item\">\n          <mat-panel-title>\n            <i class=\"material-icons sidenav-icon\">chrome_reader_mode</i>\n            Competitions\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n\n        <mat-nav-list>\n          <a mat-list-item [routerLink]=\"['/competition/addedit', 0]\">\n            <i class=\"material-icons sidenav-icon\">library_add</i>\n            Add competiton</a>\n        </mat-nav-list>\n\n        <mat-nav-list>\n          <a mat-list-item routerLink='/competition'>\n            <i class=\"material-icons sidenav-icon\">ballot</i>\n            Show all</a>\n        </mat-nav-list>\n\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header class=\"sidenav-item\">\n          <mat-panel-title>\n            <i class=\"material-icons sidenav-icon\">tab</i>\n            Courses\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n\n        <mat-nav-list>\n          <a mat-list-item  routerLink='/course/educator'>\n            <i class=\"material-icons sidenav-icon\">horizontal_split</i>\n            My Courses</a>\n        </mat-nav-list>\n\n        <mat-nav-list>\n          <a mat-list-item  routerLink='/course'>\n            <i class=\"material-icons sidenav-icon\">list_alt</i>\n            All Courses</a>\n        </mat-nav-list>\n\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header class=\"sidenav-item\">\n          <mat-panel-title>\n            <i class=\"material-icons sidenav-icon\">school</i>\n            Students\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n\n        <mat-nav-list>\n          <a mat-list-item routerLink='/student'>\n            <i class=\"material-icons sidenav-icon\">people</i>\n            Show all</a>\n        </mat-nav-list>\n\n\n\n      </mat-expansion-panel>\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header class=\"sidenav-item\">\n            <mat-panel-title>\n              <i class=\"material-icons sidenav-icon\">notifications</i>\n              Notifications\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n\n          <mat-nav-list>\n            <a mat-list-item  [routerLink]=\"['/notification/addedit', 0]\" >\n              <i class=\"material-icons sidenav-icon\">add_circle</i>\n              Add new</a>\n          </mat-nav-list>\n\n          <mat-nav-list>\n            <a mat-list-item routerLink='/notification' >\n              <i class=\"material-icons sidenav-icon\">list_alt</i>\n              Manage notification</a>\n          </mat-nav-list>\n\n        </mat-expansion-panel>\n      </mat-accordion>\n    </mat-accordion>\n\n  </mat-nav-list>\n\n </div>\n\n\n <!-- STUDENTS-->\n\n <div class=\"nav-menu-content\" *ngIf='_service?.isStudent'>\n  <mat-nav-list >\n    <div class=\"sidenav-link\">\n      <a mat-list-item routerLink='/student/home' >\n        <i class=\"material-icons sidenav-icon\">home</i>\n        Home\n      </a>\n    </div>\n\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header class=\"sidenav-item\">\n          <mat-panel-title>\n            <i class=\"material-icons sidenav-icon\">chrome_reader_mode</i>\n            My Courses\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n\n        <mat-nav-list>\n          <a mat-list-item [routerLink]=\"['/course/student']\"  >\n            <i class=\"material-icons sidenav-icon\">dashboard</i>\n            Show all</a>\n        </mat-nav-list>\n\n\n\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header class=\"sidenav-item\">\n          <mat-panel-title>\n            <i class=\"material-icons sidenav-icon\">school</i>\n            Available courses\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n\n        <mat-nav-list>\n          <a mat-list-item routerLink='/student/availableCourses'>\n            <i class=\"material-icons sidenav-icon\">dashboard</i>\n            Show all</a>\n        </mat-nav-list>\n\n\n\n      </mat-expansion-panel>\n\n\n    </mat-accordion>\n\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header class=\"sidenav-item\">\n          <mat-panel-title>\n            <i class=\"material-icons sidenav-icon\">person</i>\n            Educators\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n\n        <mat-nav-list>\n          <a mat-list-item   routerLink='/educator'>\n            <i class=\"material-icons sidenav-icon\">people</i>\n            Show all</a>\n        </mat-nav-list>\n\n\n\n      </mat-expansion-panel>\n    </mat-accordion>\n    <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header class=\"sidenav-item\">\n            <mat-panel-title>\n              <i class=\"material-icons sidenav-icon\">featured_play_list</i>\n              My student data\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n\n          <mat-nav-list>\n            <a mat-list-item   routerLink='/student/studentData'>\n              <i class=\"material-icons sidenav-icon\">list_alt</i>\n              Show my student data</a>\n          </mat-nav-list>\n\n\n\n        </mat-expansion-panel>\n      </mat-accordion>\n\n\n  </mat-nav-list>\n\n </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/layout/components/nav-menu/nav-menu.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/layout/components/nav-menu/nav-menu.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav {\n  height: 100%;\n  width: 25%; }\n\n.side-nav-container {\n  height: 100%; }\n\n.sidenav-link {\n  border-bottom: 1px solid #e0e0e0;\n  padding: 5px; }\n\n.sidenav-item {\n  border-bottom: 1px solid #e0e0e0; }\n\n.sidenav-icon {\n  margin-right: 10px; }\n\n.nav-menu-content {\n  width: 27em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvbmF2LW1lbnUvRDpcXEZJVFxcWmF2csWhbmlcXEVkdWNhdGlvbkNlbnRlclxcRWR1Y2F0aW9uQ2VudGVyLUJhY2tlbmRcXEVkdWNhdGlvbkNlbnRlci5BcGkvc3JjXFxhcHBcXGxheW91dFxcY29tcG9uZW50c1xcbmF2LW1lbnVcXG5hdi1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFFWjtFQUNBLFlBQVksRUFBQTs7QUFHWjtFQUNBLGdDQUErQztFQUMvQyxZQUFXLEVBQUE7O0FBR1g7RUFDRSxnQ0FBK0MsRUFBQTs7QUFJakQ7RUFDRSxrQkFBaUIsRUFBQTs7QUFHbkI7RUFDQSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9uYXYtbWVudS9uYXYtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG4uc2lkZS1uYXYtY29udGFpbmVye1xyXG5oZWlnaHQ6IDEwMCU7XHJcblxyXG59XHJcbi5zaWRlbmF2LWxpbmt7XHJcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIyNCwgMjI0LCAyMjQsIDEpO1xyXG5wYWRkaW5nOjVweDtcclxuXHJcbn1cclxuLnNpZGVuYXYtaXRlbXtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMjQsIDIyNCwgMjI0LCAxKTtcclxuXHJcblxyXG4gIH1cclxuLnNpZGVuYXYtaWNvbntcclxuICBtYXJnaW4tcmlnaHQ6MTBweDtcclxufVxyXG5cclxuLm5hdi1tZW51LWNvbnRlbnR7XHJcbndpZHRoOiAyN2VtO1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/components/nav-menu/nav-menu.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/nav-menu/nav-menu.component.ts ***!
  \******************************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/layout/services/layout.service.ts");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");






var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent(router, authService, layoutService, _service) {
        this.router = router;
        this.authService = authService;
        this.layoutService = layoutService;
        this._service = _service;
    }
    NavMenuComponent.prototype.ngOnInit = function () {
        this._service.initUser();
    };
    NavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-nav-menu",
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./src/app/layout/components/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.scss */ "./src/app/layout/components/nav-menu/nav-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/user-menu/user-menu.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/layout/components/user-menu/user-menu.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"userMenuContent\">\n  <div id=\"card\" *ngIf='_service?.currentUser'>\n    <img src={{_service?.currentUser.avatarUrl}}\n/>\n    <h2>{{_service?.currentUser.firstName + ' ' + _service?.currentUser.lastName }}</h2>\n    <h5>{{_service?.currentUser.accountType}}</h5>\n  </div>\n\n  <br>\n  <br>\n  <mat-nav-list>\n    <a mat-list-item (click)=\"showProfile()\">\n      <mat-icon matListIcon>dashboard</mat-icon>\n      Profile\n    </a>\n    <a mat-list-item (click)=\"logout()\">\n      <mat-icon matListIcon>exit_to_app</mat-icon>\n      Logout\n    </a>\n  </mat-nav-list>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/components/user-menu/user-menu.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/layout/components/user-menu/user-menu.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#card {\n  background: #009688;\n  border-radius: 0px;\n  align-content: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 20px; }\n\n#card h2, #card h5 {\n  color: white;\n  font-weight: normal; }\n\n#card h5 {\n  font-style: italic;\n  margin-top: 9px; }\n\n#card h2 {\n  margin-bottom: 9px; }\n\n#card img {\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  margin-bottom: 2em;\n  margin-top: 2em; }\n\n#userMenuContent {\n  width: 27em; }\n\n#sideNavContainer {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvdXNlci1tZW51L0Q6XFxGSVRcXFphdnLFoW5pXFxFZHVjYXRpb25DZW50ZXJcXEVkdWNhdGlvbkNlbnRlci1CYWNrZW5kXFxFZHVjYXRpb25DZW50ZXIuQXBpL3NyY1xcYXBwXFxsYXlvdXRcXGNvbXBvbmVudHNcXHVzZXItbWVudVxcdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsb0JBQW9CLEVBQUE7O0FBRXJCO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy91c2VyLW1lbnUvdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhcmQge1xyXG4gIGJhY2tncm91bmQ6ICByZ2JhKDAsIDE1MCwgMTM2LCAxKTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gfVxyXG4gI2NhcmQgaDIsICNjYXJkIGg1IHtcclxuICAgY29sb3I6IHdoaXRlO1xyXG4gICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gfVxyXG4gI2NhcmQgaDUge1xyXG4gICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgIG1hcmdpbi10b3A6IDlweDtcclxuIH1cclxuICNjYXJkIGgyIHtcclxuICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gfVxyXG4gI2NhcmQgaW1nIHtcclxuICAgaGVpZ2h0OiAxNTBweDtcclxuICAgd2lkdGg6IDE1MHB4O1xyXG4gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gfVxyXG4gI3VzZXJNZW51Q29udGVudCB7XHJcbiAgIHdpZHRoOiAyN2VtO1xyXG4gfVxyXG4gI3NpZGVOYXZDb250YWluZXIge1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbiB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/components/user-menu/user-menu.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/components/user-menu/user-menu.component.ts ***!
  \********************************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/layout/services/layout.service.ts");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");






var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent(router, authService, layoutService, _service) {
        this.router = router;
        this.authService = authService;
        this.layoutService = layoutService;
        this._service = _service;
    }
    UserMenuComponent.prototype.ngOnInit = function () {
        this._service.initUser();
        this.currentUser = this._service.currentUser;
    };
    UserMenuComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.authService.getCurrentUser2().subscribe(function (cu) { _this.currentUser = cu; });
    };
    UserMenuComponent.prototype.showProfile = function () {
        this.router.navigate(["/profile"]);
        this.layoutService.closeUserMenu();
    };
    UserMenuComponent.prototype.logout = function () {
        this.authService.logout();
        this.authService.logged = false;
        localStorage.removeItem('currentUser');
        this.layoutService.closeUserMenu();
        this.layoutService.closeNavMenu();
    };
    UserMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user-menu",
            template: __webpack_require__(/*! ./user-menu.component.html */ "./src/app/layout/components/user-menu/user-menu.component.html"),
            styles: [__webpack_require__(/*! ./user-menu.component.scss */ "./src/app/layout/components/user-menu/user-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"], src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], UserMenuComponent);
    return UserMenuComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/layout/components/header/header.component.ts");
/* harmony import */ var _shared_material_design_material_design_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/material-design/material-design.module */ "./src/app/shared/material-design/material-design.module.ts");
/* harmony import */ var _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav-menu/nav-menu.component */ "./src/app/layout/components/nav-menu/nav-menu.component.ts");
/* harmony import */ var _components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-menu/user-menu.component */ "./src/app/layout/components/user-menu/user-menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_5__["NavMenuComponent"], _components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_6__["UserMenuComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_material_design_material_design_module__WEBPACK_IMPORTED_MODULE_4__["MaterialDesignModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
            ],
            exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_5__["NavMenuComponent"], _components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_6__["UserMenuComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/services/layout.service.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/services/layout.service.ts ***!
  \***************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.userMenuOpened$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.navMenuOpened$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    LayoutService.prototype.onNavMenuToggle = function () {
        return this.navMenuOpened$.asObservable();
    };
    LayoutService.prototype.navMenuToggle = function () {
        this.navMenuOpened$.next(!this.navMenuOpened$.value);
    };
    LayoutService.prototype.onUserMenuToggle = function () {
        return this.userMenuOpened$.asObservable();
    };
    LayoutService.prototype.openUserMenu = function () {
        this.userMenuOpened$.next(true);
    };
    LayoutService.prototype.closeUserMenu = function () {
        this.userMenuOpened$.next(false);
    };
    LayoutService.prototype.closeNavMenu = function () {
        this.navMenuOpened$.next(false);
    };
    LayoutService.prototype.onUserProfileToggle = function () {
        return this.userMenuOpened$.asObservable();
    };
    LayoutService.prototype.openUserProfile = function () {
        this.userMenuOpened$.next(true);
    };
    LayoutService.prototype.closeUserProfile = function () {
        this.userMenuOpened$.next(false);
    };
    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/notification/components/notification-addedit/notification-addedit.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/notification/components/notification-addedit/notification-addedit.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"spinnerWrapper\">\n    <mat-spinner *ngIf=\"!hideSpinner\"></mat-spinner>\n  </div>\n<div class=\"container\"  *ngIf=\"hideSpinner\">\n\n    <mat-card class=\"mat-elevation-z1\">\n\n      <h1 style=\"display:inline;\"> Notifications</h1>\n      <button mat-button class=\"back-btn\"  routerLink='/notification'>Back</button>\n    </mat-card>\n\n\n\n  <mat-card class=\"mat-elevation-z1\" style=\"margin-top: 5px;\">\n    <mat-card-subtitle class=\"example-container\">\n      <h5 style=\"color: rgba(0, 150, 136, 1);\">Notification data</h5>\n    </mat-card-subtitle>\n    <mat-card-content>\n      <form [formGroup]=\"notifForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"example-container\">\n          <mat-form-field>\n            <input matInput placeholder=\"Title\" formControlName=\"title\">\n            <mat-error *ngIf=\"f.title.errors?.required\">Ttile  is required</mat-error>\n\n          </mat-form-field>\n\n          <mat-form-field>\n            <textarea matInput placeholder=\"Text\" formControlName=\"text\"></textarea>\n            <mat-error *ngIf=\"f.text.errors?.required\">Text  is required</mat-error>\n\n          </mat-form-field>\n\n          <div class=\"btn-div\">\n            <button mat-button cdkFocusInitial class=\"save-btn\" type=\"submit\">Save</button>\n        </div>\n        </div>\n      </form>\n    </mat-card-content>\n\n  </mat-card>\n\n  <app-notification-list></app-notification-list>\n</div>\n"

/***/ }),

/***/ "./src/app/notification/components/notification-addedit/notification-addedit.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/notification/components/notification-addedit/notification-addedit.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 20px;\n  margin-left: 5%;\n  margin-right: 10%;\n  margin-top: 1em;\n  width: 90%; }\n\n.back-button {\n  float: right;\n  background: #009688;\n  color: white; }\n\n.example-container {\n  margin-top: 20px;\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-top: 1em; }\n\n.example-container > * {\n  width: 100%; }\n\n.example-right-align {\n  text-align: right; }\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none; }\n\ninput.example-right-align {\n  -moz-appearance: textfield; }\n\n.frm-field {\n  width: 100%; }\n\n.frm-field > * {\n  width: 100%; }\n\n.save-btn {\n  background-color: #009688;\n  color: white;\n  margin-top: 10px;\n  margin-left: 92.3%; }\n\n.btn-div {\n  width: 100%; }\n\n.back-btn {\n  background-color: #009688;\n  color: white;\n  float: right; }\n\n#spinnerWrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLWFkZGVkaXQvRDpcXEZJVFxcWmF2csWhbmlcXEVkdWNhdGlvbkNlbnRlclxcRWR1Y2F0aW9uQ2VudGVyLUJhY2tlbmRcXEVkdWNhdGlvbkNlbnRlci5BcGkvc3JjXFxhcHBcXG5vdGlmaWNhdGlvblxcY29tcG9uZW50c1xcbm90aWZpY2F0aW9uLWFkZGVkaXRcXG5vdGlmaWNhdGlvbi1hZGRlZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFlBQVk7RUFDWixtQkFBZ0M7RUFDaEMsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjs7RUFFRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRyxXQUFVLEVBQUE7O0FBR2I7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSx5QkFBc0M7RUFDdEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDQSxXQUFVLEVBQUE7O0FBR1Y7RUFFRSx5QkFBc0M7RUFDdEMsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFJZDtFQUVFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb24vY29tcG9uZW50cy9ub3RpZmljYXRpb24tYWRkZWRpdC9ub3RpZmljYXRpb24tYWRkZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4uYmFjay1idXR0b257XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTUwLCAxMzYsIDEpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxufVxyXG5cclxuLmZybS1maWVsZCB7XHJcbiAgIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5mcm0tZmllbGQgPiAqIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNhdmUtYnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDEpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA5Mi4zJTtcclxufVxyXG5cclxuLmJ0bi1kaXZ7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5iYWNrLWJ0biB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDEpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcblxyXG59XHJcblxyXG4jc3Bpbm5lcldyYXBwZXJcclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/notification/components/notification-addedit/notification-addedit.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/notification/components/notification-addedit/notification-addedit.component.ts ***!
  \************************************************************************************************/
/*! exports provided: NotificationAddeditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationAddeditComponent", function() { return NotificationAddeditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/notification.service */ "./src/app/notification/services/notification.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");








var NotificationAddeditComponent = /** @class */ (function () {
    function NotificationAddeditComponent(route, router, snackBar, notifService, _service) {
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.notifService = notifService;
        this._service = _service;
        this.hideSpinner = false;
        this.pageTitle = "Add new notification";
        this.isAdmin = true;
        this.observables = [];
        this.notifForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    NotificationAddeditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.notifId = +params.get("id");
            _this.userId = _this._service.currentUser.userId;
            _this.isAdmin = _this._service.isAdmin;
        });
        if (this.isEdit) {
            this.observables.push(this.notifService.getNotifById(this.notifId));
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(this.observables).subscribe(function (responseList) {
            /*  this.students = responseList[0] as Student[];
             this.courses = responseList[1] as Course[]; */
            if (_this.isEdit) {
                _this.toggleSpinner();
                _this.editNotification = responseList[0];
                _this.displayNotif();
            }
        });
        this.toggleSpinner();
    };
    NotificationAddeditComponent.prototype.toggleSpinner = function () {
        this.hideSpinner ? this.hideSpinner = false : this.hideSpinner = true;
    };
    Object.defineProperty(NotificationAddeditComponent.prototype, "f", {
        get: function () {
            return this.notifForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationAddeditComponent.prototype, "isEdit", {
        get: function () {
            if (this.notifId === 0) {
                return false;
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    NotificationAddeditComponent.prototype.displayNotif = function () {
        if (this.notifForm) {
            this.notifForm.reset();
        }
        this.toggleSpinner();
        this.pageTitle = "Edit notification";
        this.notifForm.patchValue({
            title: this.editNotification.title,
            text: this.editNotification.text
        });
    };
    NotificationAddeditComponent.prototype.onSubmit = function () {
        if (this.notifForm.invalid || this.notifForm.untouched) {
            return;
        }
        this.toggleSpinner();
        if (!this.isEdit) {
            this.addNewNotif();
        }
        else {
            this.updateNotif();
        }
    };
    NotificationAddeditComponent.prototype.addNewNotif = function () {
        var _this = this;
        // promjeniti creatorId na logiranog korisnika
        var newNotif = {
            title: this.notifForm.value.title,
            text: this.notifForm.value.text,
            isAdmin: this.isAdmin,
            creatorId: this.userId
        };
        this.notifService.addNotif(newNotif).subscribe(function () {
            _this.toggleSpinner();
            _this.openSnackBar('Success!', 'New notfication added!');
            _this.notifForm.reset();
            _this.router.navigate(['/notification']);
        }, function (err) {
            _this.snackBar.open(err, 'Close');
            _this.toggleSpinner();
            console.error(err);
        });
    };
    NotificationAddeditComponent.prototype.updateNotif = function () {
        var _this = this;
        this.editNotification.title = this.notifForm.get('title').value;
        this.editNotification.text = this.notifForm.get('text').value;
        this.notifService.updateNotif(this.editNotification).subscribe(function () {
            _this.toggleSpinner();
            _this.snackBar.open('Successfully updated notification !', 'Close', {
                duration: 3000
            });
            _this.router.navigate(['/notification']);
        }, function (err) {
            _this.toggleSpinner();
            _this.snackBar.open(err, 'Close');
            console.error(err);
        });
    };
    NotificationAddeditComponent.prototype.openSnackBar = function (message, description) {
        this.snackBar.open(message, description, {
            duration: 10000
        });
    };
    NotificationAddeditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification-addedit',
            template: __webpack_require__(/*! ./notification-addedit.component.html */ "./src/app/notification/components/notification-addedit/notification-addedit.component.html"),
            styles: [__webpack_require__(/*! ./notification-addedit.component.scss */ "./src/app/notification/components/notification-addedit/notification-addedit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]])
    ], NotificationAddeditComponent);
    return NotificationAddeditComponent;
}());



/***/ }),

/***/ "./src/app/notification/components/notification-list/notification-list.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/notification/components/notification-list/notification-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"spinnerWrapper\">\n    <mat-spinner *ngIf=\"!hideSpinner\"></mat-spinner>\n  </div>\n<div  *ngIf=\"hideSpinner\">\n    <div class=\"notif-body \" *ngFor=\"let n of notifications\">\n        <mat-card class=\"mat-elevation-z1\">\n          <div style=\"display: inline-block; width:100%;\">\n              <div style=\"float: left; margin-right: 3%;\">\n                  <img style=\" width:70px; height:70px;\" src={{n.avatarUrl}}>\n                </div>\n            <div style=\"float: left; width:70%\">\n\n                <div style=\" display:inline-block; width:100%;\">\n                    <div class=\"notif-title\" style=\"color: rgba(0, 150, 136, 1);\" ><h4>{{n.title}}</h4></div>\n\n\n                 </div>\n\n                  <div class=\"notif-text\">{{n.text}}</div>\n            </div>\n          </div>\n\n\n           <div style=\"display:inline-block; width:100%;\">\n           <div class=\"notif-user\"><span style=\"color:rgba(0, 150, 136, 1);\">Note was written by: </span>\n             {{n.user + ', ' }}{{n.date | date: 'longDate'}}\n\n           </div>\n           <div style=\"float: right;\" *ngIf=\"n.isCreator\">\n             <button mat-icon-button color=\"primary\" [routerLink]=\"['/notification/addedit', n.id]\">\n               <mat-icon>edit</mat-icon>\n             </button>\n           </div>\n         </div>\n\n        </mat-card>\n\n\n\n      </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/notification/components/notification-list/notification-list.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/notification/components/notification-list/notification-list.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 20px;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 1em; }\n\n.example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n.save-btn {\n  background-color: #009688;\n  color: white;\n  margin-top: 10px;\n  margin-left: 92.3%; }\n\n.btn-div {\n  width: 100%; }\n\n.add-button {\n  background-color: #009688;\n  color: white;\n  float: right; }\n\n.notif-body {\n  margin-top: 10px; }\n\n.notif-title {\n  float: left; }\n\n.notif-title h3 {\n  color: #009688; }\n\n.notif-date {\n  float: right; }\n\n.notif-user {\n  margin-top: 20px;\n  float: left; }\n\n#spinnerWrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLWxpc3QvRDpcXEZJVFxcWmF2csWhbmlcXEVkdWNhdGlvbkNlbnRlclxcRWR1Y2F0aW9uQ2VudGVyLUJhY2tlbmRcXEVkdWNhdGlvbkNlbnRlci5BcGkvc3JjXFxhcHBcXG5vdGlmaWNhdGlvblxcY29tcG9uZW50c1xcbm90aWZpY2F0aW9uLWxpc3RcXG5vdGlmaWNhdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSx5QkFBc0M7RUFDdEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDQSxXQUFVLEVBQUE7O0FBR1Y7RUFFRSx5QkFBc0M7RUFDdEMsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVUsRUFBQTs7QUFJWjtFQUNFLGNBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsWUFBVyxFQUFBOztBQUliO0VBQ0UsZ0JBQWU7RUFDZixXQUFVLEVBQUE7O0FBS1o7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbm90aWZpY2F0aW9uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLWxpc3Qvbm90aWZpY2F0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNhdmUtYnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDEpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA5Mi4zJTtcclxufVxyXG5cclxuLmJ0bi1kaXZ7XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5hZGQtYnV0dG9uIHtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuXHJcbn1cclxuLm5vdGlmLWJvZHl7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm5vdGlmLXRpdGxle1xyXG4gIGZsb2F0OmxlZnQ7XHJcblxyXG5cclxufVxyXG4ubm90aWYtdGl0bGUgaDN7XHJcbiAgY29sb3I6cmdiYSgwLCAxNTAsIDEzNiwgMSk7XHJcbn1cclxuXHJcbi5ub3RpZi1kYXRle1xyXG4gIGZsb2F0OnJpZ2h0O1xyXG5cclxufVxyXG5cclxuLm5vdGlmLXVzZXJ7XHJcbiAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gIGZsb2F0OmxlZnQ7XHJcblxyXG59XHJcblxyXG5cclxuI3NwaW5uZXJXcmFwcGVyXHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/notification/components/notification-list/notification-list.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/notification/components/notification-list/notification-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NotificationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationListComponent", function() { return NotificationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notification.service */ "./src/app/notification/services/notification.service.ts");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");





var NotificationListComponent = /** @class */ (function () {
    function NotificationListComponent(route, notifService, _service) {
        this.route = route;
        this.notifService = notifService;
        this._service = _service;
        this.hideSpinner = false;
    }
    NotificationListComponent.prototype.ngOnInit = function () {
        this.getNotifications();
    };
    NotificationListComponent.prototype.toggleSpinner = function () {
        this.hideSpinner ? this.hideSpinner = false : this.hideSpinner = true;
    };
    NotificationListComponent.prototype.checkNotification = function () {
        for (var _i = 0, _a = this.notifications; _i < _a.length; _i++) {
            var notif = _a[_i];
            if (notif.user === this.user) {
                notif.isCreator = true;
            }
        }
    };
    NotificationListComponent.prototype.getNotifications = function () {
        var _this = this;
        this.notifService.getNotifications().subscribe(function (ntf) {
            _this.toggleSpinner();
            _this.notifications = ntf;
            _this.user = _this._service.currentUser.firstName + ' ' + _this._service.currentUser.lastName;
            _this.checkNotification();
        });
    };
    NotificationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-notification-list",
            template: __webpack_require__(/*! ./notification-list.component.html */ "./src/app/notification/components/notification-list/notification-list.component.html"),
            styles: [__webpack_require__(/*! ./notification-list.component.scss */ "./src/app/notification/components/notification-list/notification-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], NotificationListComponent);
    return NotificationListComponent;
}());



/***/ }),

/***/ "./src/app/notification/components/notification-manage/notification-manage.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/notification/components/notification-manage/notification-manage.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <mat-card class=\"mat-elevation-z1\">\n\n      <h1 style=\"display:inline;\"> Notifications</h1>\n      <button mat-button class=\"add-button\"  [routerLink]=\"['/notification/addedit', 0]\">Add new</button>\n    </mat-card>\n\n   <app-notification-list></app-notification-list>\n  </div>\n"

/***/ }),

/***/ "./src/app/notification/components/notification-manage/notification-manage.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/notification/components/notification-manage/notification-manage.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 20px;\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-top: 1em;\n  width: 90%; }\n\n.example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n.save-btn {\n  background-color: #009688;\n  color: white;\n  margin-top: 10px;\n  margin-left: 92.3%; }\n\n.btn-div {\n  width: 100%; }\n\n.add-button {\n  background-color: #009688;\n  color: white;\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLW1hbmFnZS9EOlxcRklUXFxaYXZyxaFuaVxcRWR1Y2F0aW9uQ2VudGVyXFxFZHVjYXRpb25DZW50ZXItQmFja2VuZFxcRWR1Y2F0aW9uQ2VudGVyLkFwaS9zcmNcXGFwcFxcbm90aWZpY2F0aW9uXFxjb21wb25lbnRzXFxub3RpZmljYXRpb24tbWFuYWdlXFxub3RpZmljYXRpb24tbWFuYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFVBQVMsRUFBQTs7QUFHWDtFQUNFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSx5QkFBc0M7RUFDdEMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDQSxXQUFVLEVBQUE7O0FBR1Y7RUFFRSx5QkFBc0M7RUFDdEMsWUFBWTtFQUNaLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi9jb21wb25lbnRzL25vdGlmaWNhdGlvbi1tYW5hZ2Uvbm90aWZpY2F0aW9uLW1hbmFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgd2lkdGg6OTAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zYXZlLWJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAxKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogOTIuMyU7XHJcbn1cclxuXHJcbi5idG4tZGl2e1xyXG53aWR0aDoxMDAlO1xyXG59XHJcblxyXG4uYWRkLWJ1dHRvbiB7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTUwLCAxMzYsIDEpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcblxyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/notification/components/notification-manage/notification-manage.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/notification/components/notification-manage/notification-manage.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NotificationManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationManageComponent", function() { return NotificationManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotificationManageComponent = /** @class */ (function () {
    function NotificationManageComponent() {
    }
    NotificationManageComponent.prototype.ngOnInit = function () {
    };
    NotificationManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification-manage',
            template: __webpack_require__(/*! ./notification-manage.component.html */ "./src/app/notification/components/notification-manage/notification-manage.component.html"),
            styles: [__webpack_require__(/*! ./notification-manage.component.scss */ "./src/app/notification/components/notification-manage/notification-manage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotificationManageComponent);
    return NotificationManageComponent;
}());



/***/ }),

/***/ "./src/app/notification/notification-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/notification/notification-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationRoutingModule", function() { return NotificationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_notification_manage_notification_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/notification-manage/notification-manage.component */ "./src/app/notification/components/notification-manage/notification-manage.component.ts");
/* harmony import */ var _components_notification_addedit_notification_addedit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/notification-addedit/notification-addedit.component */ "./src/app/notification/components/notification-addedit/notification-addedit.component.ts");
/* harmony import */ var _shared_guards_logged_in_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/guards/logged-in.guard */ "./src/app/shared/guards/logged-in.guard.ts");
/* harmony import */ var _shared_guards_adm_edc_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/guards/adm-edc.guard */ "./src/app/shared/guards/adm-edc.guard.ts");







var routes = [
    {
        path: '',
        component: _components_notification_manage_notification_manage_component__WEBPACK_IMPORTED_MODULE_3__["NotificationManageComponent"],
        canActivate: [_shared_guards_logged_in_guard__WEBPACK_IMPORTED_MODULE_5__["LoggedInGuard"]]
    },
    {
        path: 'addedit/:id',
        component: _components_notification_addedit_notification_addedit_component__WEBPACK_IMPORTED_MODULE_4__["NotificationAddeditComponent"],
        canActivate: [_shared_guards_adm_edc_guard__WEBPACK_IMPORTED_MODULE_6__["AdmEdcGuard"]]
    },
];
var NotificationRoutingModule = /** @class */ (function () {
    function NotificationRoutingModule() {
    }
    NotificationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NotificationRoutingModule);
    return NotificationRoutingModule;
}());



/***/ }),

/***/ "./src/app/notification/notification.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-routing.module */ "./src/app/notification/notification-routing.module.ts");
/* harmony import */ var _shared_material_design_material_design_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/material-design/material-design.module */ "./src/app/shared/material-design/material-design.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/notification-list/notification-list.component */ "./src/app/notification/components/notification-list/notification-list.component.ts");
/* harmony import */ var _components_notification_addedit_notification_addedit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/notification-addedit/notification-addedit.component */ "./src/app/notification/components/notification-addedit/notification-addedit.component.ts");
/* harmony import */ var _components_notification_manage_notification_manage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/notification-manage/notification-manage.component */ "./src/app/notification/components/notification-manage/notification-manage.component.ts");









var NotificationModule = /** @class */ (function () {
    function NotificationModule() {
    }
    NotificationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_6__["NotificationListComponent"], _components_notification_addedit_notification_addedit_component__WEBPACK_IMPORTED_MODULE_7__["NotificationAddeditComponent"], _components_notification_manage_notification_manage_component__WEBPACK_IMPORTED_MODULE_8__["NotificationManageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _notification_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotificationRoutingModule"],
                _shared_material_design_material_design_module__WEBPACK_IMPORTED_MODULE_4__["MaterialDesignModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            exports: [
                _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_6__["NotificationListComponent"]
            ]
        })
    ], NotificationModule);
    return NotificationModule;
}());



/***/ }),

/***/ "./src/app/notification/services/notification.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/notification/services/notification.service.ts ***!
  \***************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var NotificationService = /** @class */ (function () {
    function NotificationService(http, config) {
        this.http = http;
        this.config = config;
        this.pathAPI = this.config.setting['PathAPI'];
    }
    NotificationService.prototype.getNotifications = function () {
        return this.http.get(this.pathAPI + 'api/notifications').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    NotificationService.prototype.addNotif = function (notif) {
        return this.http.post(this.pathAPI + 'api/notification', notif).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    NotificationService.prototype.updateNotif = function (notif) {
        return this.http.put(this.pathAPI + 'api/notification', notif).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    NotificationService.prototype.getNotifById = function (id) {
        return this.http.get(this.pathAPI + ("api/notification/" + id));
    };
    NotificationService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Something bad happened; please try again later.');
    };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_config_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/shared/components/home/home.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/components/home/home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"top-menu\">\n  <span class=\"menu-course\">\n    <button mat-button [matMenuTriggerFor]=\"menu1\" class=\"btn-course\">Courses</button>\n    <mat-menu #menu1=\"matMenu\">\n      <button mat-menu-item [routerLink]=\"['/course/addedit', 0]\">Create new</button>\n      <button mat-menu-item routerLink='/course'>Managae courses</button>\n    </mat-menu>\n  </span>\n  <span class=\"menu-educator\">\n      <button mat-button [matMenuTriggerFor]=\"menu2\" class=\"btn-educator\">Employees</button>\n      <mat-menu #menu2=\"matMenu\">\n        <button mat-menu-item routerLink='/educator'>Educators</button>\n        <button mat-menu-item routerLink='/administrator'>Administrators</button>\n      </mat-menu>\n    </span>\n     <span class=\"menu-profile\">\n      <button mat-button [matMenuTriggerFor]=\"menu3\" class=\"btn-profile\">Students</button>\n      <mat-menu #menu3=\"matMenu\">\n        <button mat-menu-item routerLink='/student'>Show students</button>\n        <button mat-menu-item routerLink='/payment'>Payments</button>\n      </mat-menu>\n    </span>\n       <span class=\"menu-more\">\n        <button mat-button [matMenuTriggerFor]=\"menu4\" class=\"btn-more\">\n          <i class=\"material-icons \">more_horiz</i>\n        </button>\n        <mat-menu #menu4=\"matMenu\">\n          <button mat-menu-item [routerLink]=\"['/notification/addedit', 0]\">New notificaton</button>\n          <button mat-menu-item routerLink='/profile'>View profile</button>\n        </mat-menu>\n      </span>\n\n\n</div>\n<div>\n  <h4>Latest notifications</h4>\n</div>\n<div>\n    <cdk-virtual-scroll-viewport  style=\"height: 800px\" itemSize=\"90\" >\n        <ng-container>\n          <app-notification-list></app-notification-list>\n        </ng-container>\n      </cdk-virtual-scroll-viewport>\n\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/home/home.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/home/home.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 20px;\n  margin-left: 5%;\n  margin-right: 10%;\n  margin-top: 1em;\n  margin-bottom: 3em;\n  width: 93%; }\n\n.top-menu {\n  display: inline-block;\n  width: 100%; }\n\n.menu-course {\n  float: left;\n  width: 30%;\n  height: 10%;\n  display: flex; }\n\n.btn-course {\n  background-color: #7c89d0;\n  color: white;\n  width: 100%; }\n\n.menu-educator {\n  float: left;\n  width: 30%;\n  height: 10%;\n  margin-left: 1.1em;\n  display: flex; }\n\n.btn-educator {\n  background-color: #4cbdcf;\n  color: white;\n  width: 100%; }\n\n.menu-profile {\n  float: left;\n  width: 30%;\n  height: 10%;\n  margin-left: 1.1em;\n  display: flex; }\n\n.menu-more {\n  float: left;\n  width: 1%;\n  height: 10%;\n  margin-left: 1.1em;\n  display: flex; }\n\n.btn-profile {\n  background-color: #1bbc9b;\n  color: white;\n  width: 100%; }\n\n.btn-more {\n  background-color: #03d3c0;\n  color: white;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaG9tZS9EOlxcRklUXFxaYXZyxaFuaVxcRWR1Y2F0aW9uQ2VudGVyXFxFZHVjYXRpb25DZW50ZXItQmFja2VuZFxcRWR1Y2F0aW9uQ2VudGVyLkFwaS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFTLEVBQUE7O0FBRVg7RUFDRSxxQkFBcUI7RUFDckIsV0FBVSxFQUFBOztBQUlaO0VBQ0UsV0FBVTtFQUNWLFVBQVM7RUFDVCxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUdmO0VBQ0UseUJBQ3NCO0VBQ3RCLFlBQVc7RUFDYixXQUVBLEVBQUE7O0FBQ0E7RUFDQyxXQUFVO0VBQ1YsVUFBUztFQUVSLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUlmO0VBQ0UseUJBQ3FCO0VBQ3JCLFlBQVc7RUFDWCxXQUdGLEVBQUE7O0FBQ0E7RUFFQyxXQUFVO0VBQ1YsVUFBUztFQUVSLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUlmO0VBRUMsV0FBVTtFQUNWLFNBQVE7RUFFUCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFHZjtFQUNFLHlCQUNxQjtFQUNyQixZQUFXO0VBQ1gsV0FDRixFQUFBOztBQUVBO0VBRUUseUJBQ29CO0VBQ3BCLFlBQVc7RUFDWCxXQUNGLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICBtYXJnaW4tYm90dG9tOiAzZW07XHJcbiAgd2lkdGg6OTMlO1xyXG59XHJcbi50b3AtbWVudXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6MTAwJTtcclxuXHJcblxyXG59XHJcbi5tZW51LWNvdXJzZXtcclxuICBmbG9hdDpsZWZ0O1xyXG4gIHdpZHRoOjMwJTtcclxuICBoZWlnaHQ6IDEwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxufVxyXG4uYnRuLWNvdXJzZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOlxyXG4gIHJnYmEoMTI0LCAxMzcsIDIwOCwgMSk7XHJcbiAgY29sb3I6d2hpdGU7XHJcbndpZHRoOjEwMCVcclxuXHJcbn1cclxuLm1lbnUtZWR1Y2F0b3J7XHJcbiBmbG9hdDpsZWZ0O1xyXG4gd2lkdGg6MzAlO1xyXG5cclxuICBoZWlnaHQ6IDEwJTtcclxuICBtYXJnaW4tbGVmdDogMS4xZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcblxyXG59XHJcbi5idG4tZWR1Y2F0b3J7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpcclxuICByZ2JhKDc2LCAxODksIDIwNywgMSk7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgd2lkdGg6MTAwJVxyXG5cclxuXHJcbn1cclxuLm1lbnUtcHJvZmlsZVxyXG57XHJcbiBmbG9hdDpsZWZ0O1xyXG4gd2lkdGg6MzAlO1xyXG5cclxuICBoZWlnaHQ6IDEwJTtcclxuICBtYXJnaW4tbGVmdDogMS4xZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbn1cclxuXHJcbi5tZW51LW1vcmVcclxue1xyXG4gZmxvYXQ6bGVmdDtcclxuIHdpZHRoOjElO1xyXG5cclxuICBoZWlnaHQ6IDEwJTtcclxuICBtYXJnaW4tbGVmdDogMS4xZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbn1cclxuLmJ0bi1wcm9maWxle1xyXG4gIGJhY2tncm91bmQtY29sb3I6XHJcbiAgcmdiYSgyNywgMTg4LCAxNTUsIDEpO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOjEwMCVcclxufVxyXG5cclxuLmJ0bi1tb3Jle1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOlxyXG4gIHJnYmEoMywgMjExLCAxOTIsIDEpO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHdpZHRoOjEwMCVcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/shared/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/shared/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/login/login.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/login/login.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"spinnerWrapper\">\n  <mat-spinner *ngIf=\"!hideSpinner\"></mat-spinner>\n</div>\n<mat-card class=\"form-box\" *ngIf=\"hideSpinner\">\n\n    <div class=\"head\">Education Center</div>\n\n\n\n  <mat-card-content>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\"  id=\"login-form\" novalidate>\n      <div class=\"example-container\">\n        <mat-form-field class=\"form-group\">\n          <input matInput placeholder=\"Username\" formControlName=\"username\">\n          <mat-error *ngIf=\"f.username.errors?.NotExist\"> That username doesn't exist!</mat-error>\n          <mat-error *ngIf=\"f.username.errors?.required\"> You must fill the username!</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"form-group\">\n          <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n        </mat-form-field>\n\n        <button [disabled]=\"!loginForm.valid\" mat-raised-button color=\"primary\" class=\"btn\" mat-button>Sign In</button>\n        <p class=\"text-p\">Don't have an account? <a [routerLink]=\"['/student/registration']\" >Sign up</a> </p>\n      </div>\n    </form>\n  </mat-card-content>\n\n\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/shared/components/login/login.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/login/login.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  margin-top: 20px;\n  margin-left: 35%;\n  margin-right: 40%;\n  margin-top: 1em;\n  width: 30%;\n  height: 40%; }\n\n.frm-field {\n  margin-top: 10px; }\n\n.form-box {\n  background: #fff;\n  margin: 30px auto;\n  max-width: 500px;\n  box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.16), 0 3px 6px 0px rgba(0, 0, 0, 0.23); }\n\nform#login-form {\n  overflow: hidden;\n  position: relative;\n  padding: 40px; }\n\n.head {\n  color: #fff;\n  font-size: 34px;\n  font-weight: normal;\n  padding: 50px 0;\n  text-align: center;\n  text-transform: uppercase;\n  background: #009688; }\n\n.btn {\n  background: #009688;\n  border: none;\n  border-radius: 2px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 3px;\n  margin: 5px 0;\n  outline: medium none;\n  overflow: hidden;\n  padding: 10px;\n  text-transform: uppercase;\n  transition: all 0.15s ease-in-out 0s;\n  width: 100%;\n  box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.16), 0 1px 2px 0px rgba(0, 0, 0, 0.23); }\n\n.text-p {\n  font-size: 14px;\n  text-align: center;\n  margin: 10px 0; }\n\n.text-p a {\n  color: #009688; }\n\n.example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n#spinnerWrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9naW4vRDpcXEZJVFxcWmF2csWhbmlcXEVkdWNhdGlvbkNlbnRlclxcRWR1Y2F0aW9uQ2VudGVyLUJhY2tlbmRcXEVkdWNhdGlvbkNlbnRlci5BcGkvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFVLEVBQUE7O0FBR1o7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnRkFBMEUsRUFBQTs7QUFFNUU7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFFZjtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUErQixFQUFBOztBQUdqQztFQUVFLG1CQUFnQztFQUNoQyxZQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLGdGQUEwRSxFQUFBOztBQUc1RTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGNBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUVFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDQwJTtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6NDAlO1xyXG59XHJcblxyXG4uZnJtLWZpZWxkIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ib3h7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtYXJnaW46IDMwcHggYXV0bztcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwcHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IDBweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG59XHJcbmZvcm0jbG9naW4tZm9ybSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogNDBweDtcclxufVxyXG4uaGVhZCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAzNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgcGFkZGluZzogNTBweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJhY2tncm91bmQ6cmdiYSgwLCAxNTAsIDEzNiwgMSk7XHJcbn1cclxuXHJcbi5idG4ge1xyXG5cclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE1MCwgMTM2LCAxKTtcclxuICBib3JkZXI6bm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbiAgb3V0bGluZTogbWVkaXVtIG5vbmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwcHggcmdiYSgwLDAsMCwwLjE2KSwgMCAxcHggMnB4IDBweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG59XHJcblxyXG4udGV4dC1we1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuLnRleHQtcCBhe1xyXG4gIGNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAxKTtcclxufVxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNzcGlubmVyV3JhcHBlclxyXG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _helpers_username__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/username */ "./src/app/shared/helpers/username.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/shared/services/data.service.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, formBuilder, route, authService, snackBar, usernameValidator, _service) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.authService = authService;
        this.snackBar = snackBar;
        this.usernameValidator = usernameValidator;
        this._service = _service;
        this.hideSpinner = false;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authService.logged = false;
        this._service.isLoggedIn$ = false;
        localStorage.removeItem('currentUser');
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]), this.usernameValidator.checkUsernameExist.bind(this.usernameValidator)],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.toggleSpinner();
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.toggleSpinner = function () {
        this.hideSpinner ? (this.hideSpinner = false) : (this.hideSpinner = true);
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        if (this.loginForm && this.loginForm.valid) {
            var username = this.loginForm.get('username').value;
            var password = this.loginForm.get('password').value;
            this.authService.login1(username, password).subscribe(function (usr) {
                _this.authService.headerToggle();
                _this.authService.logged = true;
                _this.currentUser = usr;
                _this.toggleSpinner();
                localStorage.setItem('currentUser', JSON.stringify(_this.currentUser));
                _this._service.initUser();
                if (_this.currentUser.accountTypeId === 1) {
                    _this.router.navigate(['/home']);
                }
                else if (_this.currentUser.accountTypeId === 2) {
                    _this.router.navigate(['/educator/home']);
                }
                else {
                    _this.router.navigate(['/student/home']);
                }
            }, function (err) {
                // this.toggleSpinner();
                _this.snackBar.open('Error: Incorrect password!', 'Close!');
                _this.loginForm.get('password').reset();
                console.error(err);
            });
        }
    };
    LoginComponent.prototype.openSnackBar = function (message, description) {
        this.snackBar.open(message, description, {
            duration: 10000
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/shared/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/shared/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _helpers_username__WEBPACK_IMPORTED_MODULE_5__["UsernameValidator"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/profile/profile.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/profile/profile.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Card -->\n<div class=\"card myCard mat-elevation-z1\">\n\n  <!-- Card content -->\n  <div class=\"card-body d-flex flex-row\">\n\n    <!-- Avatar -->\n    <img src={{_service?.currentUser.avatarUrl}} class=\"rounded-circle mr-3\" height=\"150px\" width=\"150px\" alt=\"avatar\">\n\n    <!-- Content -->\n    <div class=\"title\">\n\n      <!-- Title -->\n      <h1>{{_service?.currentUser.firstName + ' ' + _service?.currentUser.lastName}}</h1>\n      <!-- Subtitle -->\n      <p class=\"card-text\"><i class=\"far fa-clock pr-2\"></i>{{_service?.currentUser.accountType }}</p>\n\n    </div>\n\n\n  </div>\n\n\n\n  <!-- Card content -->\n  <div class=\"card-body\">\n    <mat-tab-group>\n      <mat-tab label=\"Details\">\n        <div class=\"details\">\n            <h5 style=\"display: inline; color: rgba(0, 150, 136, 1);\">Name </h5><p>{{_service?.currentUser.firstName + ' ' + _service?.currentUser.lastName }}</p>\n            <mat-divider></mat-divider>\n            <h5 style=\"color: rgba(0, 150, 136, 1); margin-top:1%;\">Username</h5>\n            <p class=\"card-text\">{{_service?.currentUser.username }}</p>\n            <mat-divider></mat-divider>\n            <h5 style=\" color: rgba(0, 150, 136, 1); margin-top:1%;\">Email</h5>\n            <p class=\"card-text\">{{_service?.currentUser.email }}</p>\n            <mat-divider></mat-divider>\n            <h5 style=\"color: rgba(0, 150, 136, 1); margin-top:1%;\">Phone</h5>\n            <p class=\"card-text\">{{_service?.currentUser.phone }}</p>\n\n\n        </div>\n\n      </mat-tab>\n      <mat-tab label=\"Update profile\">\n          <form [formGroup]=\"editForm\" style=\"margin-top: 2%;\">\n\n              <mat-form-field class=\"field\">\n                <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\n                <mat-error *ngIf=\"f1.firstName.errors?.required\"> First name is required</mat-error>\n              </mat-form-field>\n\n              <mat-form-field>\n                <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\n                <mat-error *ngIf=\"f1.lastName.errors?.required\">Last Name is required</mat-error>\n              </mat-form-field>\n\n              <br>\n              <mat-form-field class=\"field\">\n                <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n                <mat-error *ngIf=\"f1.email.errors?.email\"> Please enter valid email address</mat-error>\n                <mat-error *ngIf=\"f1.email.errors?.required\"> Email is required</mat-error>\n\n              </mat-form-field>\n\n              <mat-form-field>\n                  <input type=\"tel\" matInput placeholder=\"Telephone\" formControlName=\"phone\" required>\n                  <mat-error *ngIf=\"f1.phone.errors?.required\">Phone is required</mat-error>\n                </mat-form-field>\n\n            <br>\n\n\n              <mat-form-field>\n                  <textarea matInput placeholder=\"AvatarURL\" formControlName=\"avatarUrl\" required></textarea>\n                  <mat-error *ngIf=\"f1.avatarUrl.errors?.required\"> AvatarURL is required</mat-error>\n                </mat-form-field> <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://getavataaars.com/\">Generate Avatar</a>\n              <br>\n              <mat-form-field class=\"field\">\n                  <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n                  <mat-error *ngIf=\"f1.password.errors?.required\"> Paasword is required</mat-error>\n                  <mat-error *ngIf=\"f1.password.errors?.minlength\"> Must be at least 8 characters!</mat-error>\n                  <mat-error *ngIf=\"f1.password.errors?.hasNumber\">   Must contain at least 1 number!</mat-error>\n                  <mat-error *ngIf=\"f1.password.errors?.hasCapitalCase\"> Must contain at least 1 in Capital Case!</mat-error>\n                  <mat-error *ngIf=\"f1.password.errors?.hasSmallCase\">  Must contain at least 1 Letter in Small Case!</mat-error>\n\n\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Confrim password\" formControlName=\"confirmPassword\" >\n                    <mat-error *ngIf=\"f1.confirmPassword.errors?.NoPassswordMatch\">   Password do not match</mat-error>\n\n                  </mat-form-field> <button mat-raised-button cdkFocusInitial color=\"primary\"  class=\"saveBtn\"(click)=\"onSubmit()\">\n                      Save\n                    </button>\n\n\n            </form>\n      </mat-tab>\n\n    </mat-tab-group>\n\n\n  </div>\n\n</div>\n<!-- Card -->\n"

/***/ }),

/***/ "./src/app/shared/components/profile/profile.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/profile/profile.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myCard {\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-top: 2%; }\n\n.title {\n  font-size: 20%;\n  font-weight: bold;\n  margin-top: 5%; }\n\n.details {\n  margin-top: 3%; }\n\n.field {\n  margin-right: 5%;\n  margin-bottom: 10px; }\n\na {\n  text-decoration: none;\n  color: #009688;\n  margin-left: 5%;\n  margin-bottom: 30px; }\n\n.saveBtn {\n  margin-left: 2%; }\n\n#spinnerWrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZmlsZS9EOlxcRklUXFxaYXZyxaFuaVxcRWR1Y2F0aW9uQ2VudGVyXFxFZHVjYXRpb25DZW50ZXItQmFja2VuZFxcRWR1Y2F0aW9uQ2VudGVyLkFwaS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixjQUFhLEVBQUE7O0FBRWY7RUFDRSxjQUFhLEVBQUE7O0FBRWY7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBSXBCO0VBQ0MscUJBQXFCO0VBQ3JCLGNBQTJCO0VBQzNCLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teUNhcmR7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBmb250LXNpemU6IDIwJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOjUlO1xyXG59XHJcbi5kZXRhaWxzIHtcclxuICBtYXJnaW4tdG9wOjMlO1xyXG59XHJcbi5maWVsZHtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG59XHJcblxyXG4gYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAxKTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbn1cclxuLnNhdmVCdG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG4jc3Bpbm5lcldyYXBwZXJcclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/profile/profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/profile/profile.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_custom_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/custom-validators */ "./src/app/shared/helpers/custom-validators.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/user */ "./src/app/shared/models/user.ts");









var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_service, fb, snackBar, route, router, userService) {
        this._service = _service;
        this.fb = fb;
        this.snackBar = snackBar;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.hideSpinner = false;
        this.editUser = new _models_user__WEBPACK_IMPORTED_MODULE_8__["User"];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.editForm = this.fb.group({
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
            ],
            phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            avatarUrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _helpers_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].patternValidator(/\d/, { hasNumber: true }),
                    _helpers_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].patternValidator(/[A-Z]/, {
                        hasCapitalCase: true
                    }),
                    _helpers_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].patternValidator(/[a-z]/, { hasSmallCase: true }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)
                ])
            ],
            confirmPassword: [null]
        }, {
            // check whether our password and confirm password match
            validator: _helpers_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].passwordMatchValidator
        });
        this.editForm.patchValue({
            firstName: this._service.currentUser.firstName,
            lastName: this._service.currentUser.lastName,
            email: this._service.currentUser.email,
            phone: this._service.currentUser.phone,
            password: this._service.currentUser.password,
            avatarUrl: this._service.currentUser.avatarUrl
        });
    };
    Object.defineProperty(ProfileComponent.prototype, "f1", {
        get: function () {
            return this.editForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.toggleSpinner = function () {
        this.hideSpinner ? (this.hideSpinner = false) : (this.hideSpinner = true);
    };
    ProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        // this.currentUser = usr;
        // this.toggleSpinner();
        // localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        // this._service.initUser();
        if (this.editForm.invalid) {
            return;
        }
        this.editUser.firstName = this.editForm.value.firstName;
        this.editUser.lastName = this.editForm.value.lastName;
        this.editUser.email = this.editForm.value.email;
        this.editUser.phone = this.editForm.value.phone;
        this.editUser.password = this.editForm.value.password;
        this.editUser.avatarUrl = this.editForm.value.avatarUrl;
        this.editUser.username = this._service.currentUser.username;
        this.editUser.userId = this._service.currentUser.userId;
        this.editUser.accountTypeId = this._service.currentUser.accountTypeId;
        this.editUser.accountType = this._service.currentUser.accountType;
        this.editUser.userAccountId = this._service.currentUser.userAccountId;
        this.userService.updateUser(this.editUser).subscribe(function () {
            _this.toggleSpinner();
            _this.snackBar.open("Successfully updated profile !", "Close", {
                duration: 3000
            });
            localStorage.removeItem('currentUser');
            localStorage.setItem('currentUser', JSON.stringify(_this.editUser));
            _this._service.initUser();
            _this.router.navigate(["/profile"]);
        }, function (err) {
            _this.toggleSpinner();
            _this.snackBar.open(err, "Close");
            console.error(err);
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/shared/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/shared/components/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/shared/guards/adm-edc.guard.ts":
/*!************************************************!*\
  !*** ./src/app/shared/guards/adm-edc.guard.ts ***!
  \************************************************/
/*! exports provided: AdmEdcGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmEdcGuard", function() { return AdmEdcGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/shared/services/data.service.ts");




var AdmEdcGuard = /** @class */ (function () {
    function AdmEdcGuard(_service, router) {
        this._service = _service;
        this.router = router;
    }
    AdmEdcGuard.prototype.canActivate = function (next, state) {
        if (this._service.isEducator || this._service.isAdmin) {
            return true;
        }
        else {
            return this.router.parseUrl("/login");
        }
    };
    AdmEdcGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdmEdcGuard);
    return AdmEdcGuard;
}());



/***/ }),

/***/ "./src/app/shared/guards/admin.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/guards/admin.guard.ts ***!
  \**********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/shared/services/data.service.ts");




var AdminGuard = /** @class */ (function () {
    function AdminGuard(_service, router) {
        this._service = _service;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        if (this._service.isAdmin) {
            return true;
        }
        else {
            return this.router.parseUrl("/login");
        }
    };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/shared/guards/logged-in.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/guards/logged-in.guard.ts ***!
  \**************************************************/
/*! exports provided: LoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function() { return LoggedInGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/shared/services/data.service.ts");




var LoggedInGuard = /** @class */ (function () {
    function LoggedInGuard(_service, router) {
        this._service = _service;
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function (next, state) {
        if (this._service.isLoggedIn$) {
            return true;
        }
        else {
            return this.router.parseUrl("/login");
        }
    };
    LoggedInGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoggedInGuard);
    return LoggedInGuard;
}());



/***/ }),

/***/ "./src/app/shared/helpers/custom-validators.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/helpers/custom-validators.ts ***!
  \*****************************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    CustomValidators.patternValidator = function (regex, error) {
        return function (control) {
            if (!control.value) {
                // if control is empty return no error
                return null;
            }
            // test the value of the control against the regexp supplied
            var valid = regex.test(control.value);
            // if true, return no error (no error), else return error passed in the second parameter
            return valid ? null : error;
        };
    };
    CustomValidators.passwordMatchValidator = function (control) {
        var password = control.get('password').value; // get password from our password form control
        var confirmPassword = control.get('confirmPassword').value; // get password from our confirmPassword form control
        if (control.get('password').untouched === true && control.get('password').pristine !== true) {
            // compare is the password math
            if (password !== confirmPassword) {
                // if they don't match, set an error in our confirmPassword form control
                if (!control.get('password').pristine) {
                    control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
                }
            }
        }
    };
    return CustomValidators;
}());



/***/ }),

/***/ "./src/app/shared/helpers/username.ts":
/*!********************************************!*\
  !*** ./src/app/shared/helpers/username.ts ***!
  \********************************************/
/*! exports provided: UsernameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameValidator", function() { return UsernameValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/shared/services/user.service.ts");



var UsernameValidator = /** @class */ (function () {
    function UsernameValidator(userService) {
        this.userService = userService;
    }
    UsernameValidator.prototype.checkUsername = function (control) {
        var _this = this;
        clearTimeout(this.debouncer);
        return new Promise(function (resolve) {
            _this.debouncer = setTimeout(function () {
                _this.userService.checkUsername(control.value).subscribe(function (res) {
                    if (res === false) {
                        resolve(null);
                    }
                    else {
                        resolve({ 'usernameInUse': true });
                    }
                }, function (err) {
                    console.log(err);
                });
            }, 1000);
        });
    };
    UsernameValidator.prototype.checkUsernameExist = function (control) {
        var _this = this;
        clearTimeout(this.debouncer);
        return new Promise(function (resolve) {
            _this.debouncer = setTimeout(function () {
                _this.userService.checkUsername(control.value).subscribe(function (res) {
                    if (res === true) {
                        resolve(null);
                    }
                    else {
                        resolve({ 'NotExist': true });
                    }
                }, function (err) {
                    console.log(err);
                });
            }, 1000);
        });
    };
    UsernameValidator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UsernameValidator);
    return UsernameValidator;
}());



/***/ }),

/***/ "./src/app/shared/material-design/material-design.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/material-design/material-design.module.ts ***!
  \******************************************************************/
/*! exports provided: MaterialDesignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignModule", function() { return MaterialDesignModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");





























var MaterialDesignModule = /** @class */ (function () {
    function MaterialDesignModule() {
    }
    MaterialDesignModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__["ScrollDispatchModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"]
            ],
            exports: [
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__["ScrollDispatchModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipsModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"]
            ]
        })
    ], MaterialDesignModule);
    return MaterialDesignModule;
}());



/***/ }),

/***/ "./src/app/shared/models/user.ts":
/*!***************************************!*\
  !*** ./src/app/shared/models/user.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/shared/services/authentication.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/authentication.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/config */ "./src/app/config/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AuthService = /** @class */ (function () {
    function AuthService(http, config, router) {
        this.http = http;
        this.config = config;
        this.router = router;
        this.headerOpened$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        // get isLoggedIn(): boolean {
        //   return !!this.currentUser;
        // }
        this.pathAPI = this.config.setting['PathAPI'];
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable(); // {2}
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.onHeaderToggle = function () {
        return this.headerOpened$.asObservable();
    };
    AuthService.prototype.headerToggle = function () {
        this.headerOpened$.next(!this.headerOpened$.value);
    };
    AuthService.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    AuthService.prototype.getCurrentUser2 = function () {
        return this.currentUser.asObservable();
    };
    AuthService.prototype.login1 = function (username, password) {
        this.loggedIn.next(true);
        return this.http.get(this.pathAPI + ("api/userAccount/login/" + username + "/" + password));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    };
    AuthService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_config_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/shared/services/authentication.service.ts");



var DataService = /** @class */ (function () {
    function DataService(authService) {
        this.authService = authService;
    }
    DataService.prototype.initUser = function () {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (this.currentUser) {
            this.authService.logged = true;
            this.isLoggedIn$ = true;
        }
        else {
            this.authService.logged = false;
            this.isLoggedIn$ = false;
        }
        this.isAdmin = false;
        this.isEducator = false;
        this.isStudent = false;
        if (this.currentUser != null) {
            if (this.currentUser.accountType === "Administrator") {
                this.isAdmin = true;
                this.isLoggedIn$ = true;
            }
            else if (this.currentUser.accountType === "Educator") {
                this.isEducator = true;
                this.isLoggedIn$ = true;
            }
            else {
                this.isStudent = true;
                this.isLoggedIn$ = true;
            }
        }
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/config/config */ "./src/app/config/config.ts");






var UserService = /** @class */ (function () {
    function UserService(http, config) {
        this.http = http;
        this.config = config;
        this.pathAPI = this.config.setting['PathAPI'];
    }
    UserService.prototype.checkUsername = function (username) {
        return this.http.get(this.pathAPI + ("api/userAccount/checkUsername/" + username)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.put(this.pathAPI + 'api/userAccount', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    UserService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_config_config__WEBPACK_IMPORTED_MODULE_5__["AppConfig"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // URL of production API
    apiUrl: 'http://localhost:44329'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\FIT\Završni\EducationCenter\EducationCenter-Backend\EducationCenter.Api\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map