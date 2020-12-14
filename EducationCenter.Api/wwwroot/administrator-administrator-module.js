(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administrator-administrator-module"],{

/***/ "./src/app/administrator/administrator-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/administrator/administrator-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AdministratorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministratorRoutingModule", function() { return AdministratorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_administrator_list_administrator_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/administrator-list/administrator-list.component */ "./src/app/administrator/components/administrator-list/administrator-list.component.ts");
/* harmony import */ var _components_admin_addedit_admin_addedit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin-addedit/admin-addedit.component */ "./src/app/administrator/components/admin-addedit/admin-addedit.component.ts");
/* harmony import */ var _shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/guards/admin.guard */ "./src/app/shared/guards/admin.guard.ts");






var routes = [
    {
        path: '',
        component: _components_administrator_list_administrator_list_component__WEBPACK_IMPORTED_MODULE_3__["AdministratorListComponent"],
        canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_5__["AdminGuard"]]
    },
    {
        path: 'addedit/:id',
        component: _components_admin_addedit_admin_addedit_component__WEBPACK_IMPORTED_MODULE_4__["AdminAddeditComponent"],
        canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_5__["AdminGuard"]]
    },
];
var AdministratorRoutingModule = /** @class */ (function () {
    function AdministratorRoutingModule() {
    }
    AdministratorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdministratorRoutingModule);
    return AdministratorRoutingModule;
}());



/***/ }),

/***/ "./src/app/administrator/administrator.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/administrator/administrator.module.ts ***!
  \*******************************************************/
/*! exports provided: AdministratorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministratorModule", function() { return AdministratorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_administrator_list_administrator_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/administrator-list/administrator-list.component */ "./src/app/administrator/components/administrator-list/administrator-list.component.ts");
/* harmony import */ var _administrator_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./administrator-routing.module */ "./src/app/administrator/administrator-routing.module.ts");
/* harmony import */ var _shared_material_design_material_design_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/material-design/material-design.module */ "./src/app/shared/material-design/material-design.module.ts");
/* harmony import */ var _components_admin_addedit_admin_addedit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin-addedit/admin-addedit.component */ "./src/app/administrator/components/admin-addedit/admin-addedit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AdministratorModule = /** @class */ (function () {
    function AdministratorModule() {
    }
    AdministratorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_administrator_list_administrator_list_component__WEBPACK_IMPORTED_MODULE_3__["AdministratorListComponent"], _components_admin_addedit_admin_addedit_component__WEBPACK_IMPORTED_MODULE_6__["AdminAddeditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _administrator_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdministratorRoutingModule"],
                _shared_material_design_material_design_module__WEBPACK_IMPORTED_MODULE_5__["MaterialDesignModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ]
        })
    ], AdministratorModule);
    return AdministratorModule;
}());



/***/ }),

/***/ "./src/app/administrator/components/admin-addedit/admin-addedit.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/administrator/components/admin-addedit/admin-addedit.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"spinnerWrapper\">\n    <mat-spinner *ngIf=\"!hideSpinner\"></mat-spinner>\n  </div>\n<div class=\"grid-container\" *ngIf=\"hideSpinner\">\n\n    <mat-card class=\"mat-elevation-z3\">\n      <div style=\"margin-bottom:15px;\">\n        <h3 style=\"display:inline;\"> {{title}}</h3>\n        <button mat-button class=\"back-btn\" [routerLink]=\"['/administrator']\">Back</button>\n      </div>\n    </mat-card>\n\n    <mat-horizontal-stepper  #stepper class=\"mat-elevation-z3\" *ngIf=\"!isEdit\">\n        <mat-step [stepControl]=\"basicInfoFormGroup\">\n          <form [formGroup]=\"basicInfoFormGroup\">\n            <ng-template matStepLabel>Basic info</ng-template>\n            <mat-form-field class=\"field\">\n              <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\n              <mat-error *ngIf=\"f1.firstName.errors?.required\"> First name is required</mat-error>\n            </mat-form-field>\n\n            <mat-form-field>\n              <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\n              <mat-error *ngIf=\"f1.lastName.errors?.required\">Last Name is required</mat-error>\n            </mat-form-field><br>\n            <mat-form-field class=\"field\">\n              <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n              <mat-error *ngIf=\"f1.email.errors?.email\"> Please enter valid email address</mat-error>\n              <mat-error *ngIf=\"f1.email.errors?.required\"> Email is required</mat-error>\n\n            </mat-form-field>\n\n            <mat-form-field>\n                <input type=\"tel\" matInput placeholder=\"Telephone\" formControlName=\"phone\" required>\n                <mat-error *ngIf=\"f1.phone.errors?.required\">Phone is required</mat-error>\n              </mat-form-field>\n\n          <br>\n\n          <mat-form-field class=\"field\">\n              <input matInput placeholder=\"Username\" formControlName=\"username\" required>\n              <mat-error *ngIf=\"f1.username.errors?.usernameInUse\"> Username is already exist!</mat-error>\n              <mat-error *ngIf=\"f1.username.errors?.required\"> Username is required</mat-error>\n\n            </mat-form-field>\n            <mat-form-field>\n                <textarea matInput placeholder=\"AvatarURL\" formControlName=\"avatarUrl\" required></textarea>\n                <mat-error *ngIf=\"f1.avatarUrl.errors?.required\"> AvatarURL is required</mat-error>\n              </mat-form-field> <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://getavataaars.com/\">Generate Avatar</a>\n            <br>\n            <mat-form-field class=\"field\">\n                <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n                <mat-error *ngIf=\"f1.password.errors?.required\"> Paasword is required</mat-error>\n                <mat-error *ngIf=\"f1.password.errors?.minlength\"> Must be at least 8 characters!</mat-error>\n                <mat-error *ngIf=\"f1.password.errors?.hasNumber\">   Must contain at least 1 number!</mat-error>\n                <mat-error *ngIf=\"f1.password.errors?.hasCapitalCase\"> Must contain at least 1 in Capital Case!</mat-error>\n                <mat-error *ngIf=\"f1.password.errors?.hasSmallCase\">  Must contain at least 1 Letter in Small Case!</mat-error>\n\n\n              </mat-form-field>\n\n              <mat-form-field>\n                  <input matInput type=\"password\" placeholder=\"Confrim password\" formControlName=\"confirmPassword\" required>\n                  <mat-error *ngIf=\"f1.confirmPassword.errors?.required\"> Password is required</mat-error>\n                  <mat-error *ngIf=\"f1.confirmPassword.errors?.NoPassswordMatch\">   Password do not match</mat-error>\n\n                </mat-form-field>\n                <br>\n                <br>\n            <br>\n            <br>\n            <div>\n              <button mat-button matStepperNext class=\"next-btn\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n\n\n        <mat-step>\n          <ng-template matStepLabel>Done</ng-template>\n          <div class=\"finalStep\" style=\"display: inline-block; width:100%;margin-bottom:20px;\">\n            <div style=\"float: left; ;margin-right:70px;\">\n                <p><b>Administrator: </b> {{this.basicInfoFormGroup.value.firstName + ' ' + this.basicInfoFormGroup.value.lastName}} </p>\n                <p><b>Phone: </b> {{this.basicInfoFormGroup.value.phone }} </p>\n                <p><b>Email: </b> {{this.basicInfoFormGroup.value.email }} </p>\n\n                <p><b>Username: </b> {{this.basicInfoFormGroup.value.username }} </p>\n            </div>\n\n\n\n          </div>\n          <div>\n            <button mat-button matStepperPrevious class=\"bck-btn\">Back</button>\n\n            <button mat-raised-button cdkFocusInitial color=\"primary\" (click)=\"onSubmit()\">\n              Save\n            </button>\n          </div>\n        </mat-step>\n      </mat-horizontal-stepper>\n\n\n      <mat-horizontal-stepper  #stepper class=\"mat-elevation-z3\" *ngIf=\"isEdit\">\n        <mat-step [stepControl]=\"editForm\">\n          <form [formGroup]=\"editForm\">\n            <ng-template matStepLabel>Basic info</ng-template>\n            <mat-form-field class=\"field\">\n              <input matInput placeholder=\"First name\" formControlName=\"firstName\" required>\n              <mat-error *ngIf=\"f1.firstName.errors?.required\"> First name is required</mat-error>\n            </mat-form-field>\n\n            <mat-form-field>\n              <input matInput placeholder=\"Last name\" formControlName=\"lastName\" required>\n              <mat-error *ngIf=\"f1.lastName.errors?.required\">Last Name is required</mat-error>\n            </mat-form-field>\n\n            <mat-slide-toggle formControlName=\"active\"\n            class=\"example-margin\"\n\n           >\n          Active\n        </mat-slide-toggle>\n\n            <br>\n            <mat-form-field class=\"field\">\n              <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n              <mat-error *ngIf=\"f1.email.errors?.email\"> Please enter valid email address</mat-error>\n              <mat-error *ngIf=\"f1.email.errors?.required\"> Email is required</mat-error>\n\n            </mat-form-field>\n\n            <mat-form-field>\n                <input type=\"tel\" matInput placeholder=\"Telephone\" formControlName=\"phone\" required>\n                <mat-error *ngIf=\"f1.phone.errors?.required\">Phone is required</mat-error>\n              </mat-form-field>\n\n          <br>\n\n\n            <mat-form-field>\n                <textarea matInput placeholder=\"AvatarURL\" formControlName=\"avatarUrl\" required></textarea>\n                <mat-error *ngIf=\"f1.avatarUrl.errors?.required\"> AvatarURL is required</mat-error>\n              </mat-form-field> <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://getavataaars.com/\">Generate Avatar</a>\n            <br>\n            <mat-form-field class=\"field\">\n                <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n                <mat-error *ngIf=\"f1.password.errors?.required\"> Paasword is required</mat-error>\n                <mat-error *ngIf=\"f1.password.errors?.minlength\"> Must be at least 8 characters!</mat-error>\n                <mat-error *ngIf=\"f1.password.errors?.hasNumber\">   Must contain at least 1 number!</mat-error>\n                <mat-error *ngIf=\"f1.password.errors?.hasCapitalCase\"> Must contain at least 1 in Capital Case!</mat-error>\n                <mat-error *ngIf=\"f1.password.errors?.hasSmallCase\">  Must contain at least 1 Letter in Small Case!</mat-error>\n\n\n              </mat-form-field>\n\n              <mat-form-field>\n                  <input matInput type=\"password\" placeholder=\"Confrim password\" formControlName=\"confirmPassword\" >\n                  <mat-error *ngIf=\"f1.confirmPassword.errors?.NoPassswordMatch\">   Password do not match</mat-error>\n\n                </mat-form-field>\n                <br>\n            <br>\n            <div>\n              <button mat-button matStepperNext class=\"next-btn\">Next</button>\n            </div>\n          </form>\n        </mat-step>\n\n\n        <mat-step>\n          <ng-template matStepLabel>Done</ng-template>\n          <div class=\"finalStep\" style=\"display: inline-block; width:100%;margin-bottom:20px;\">\n            <div style=\"float: left; ;margin-right:70px;\">\n                <p><b>Administrator: </b> {{this.editForm.value.firstName + ' ' + this.editForm.value.lastName}} </p>\n                <p><b>Phone: </b> {{this.editForm.value.phone }} </p>\n                <p><b>Email: </b> {{this.editForm.value.email }} </p>\n            </div>\n\n\n\n          </div>\n          <div>\n            <button mat-button matStepperPrevious class=\"bck-btn\">Back</button>\n\n            <button mat-raised-button cdkFocusInitial color=\"primary\" (click)=\"onSubmit()\">\n              Save\n            </button>\n          </div>\n        </mat-step>\n      </mat-horizontal-stepper>\n\n </div>\n"

/***/ }),

/***/ "./src/app/administrator/components/admin-addedit/admin-addedit.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/administrator/components/admin-addedit/admin-addedit.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin-top: 20px;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 1em;\n  margin-bottom: 3em; }\n\n.grid-body {\n  margin-top: 2px; }\n\n.back-btn {\n  float: right;\n  background-color: #009688;\n  color: white; }\n\n.next-btn {\n  background-color: #009688;\n  color: white;\n  margin-top: 5px; }\n\n.bck-btn {\n  margin-top: 5px;\n  color: #009688; }\n\n.field {\n  margin-right: 5%;\n  margin-bottom: 10px; }\n\na {\n  text-decoration: none;\n  color: #009688;\n  margin-left: 20px;\n  margin-bottom: 30px; }\n\n.example-margin {\n  margin: 30px; }\n\n#spinnerWrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYXRvci9jb21wb25lbnRzL2FkbWluLWFkZGVkaXQvRDpcXEZJVFxcWmF2csWhbmlcXEVkdWNhdGlvbkNlbnRlclxcRWR1Y2F0aW9uQ2VudGVyLUJhY2tlbmRcXEVkdWNhdGlvbkNlbnRlci5BcGkvc3JjXFxhcHBcXGFkbWluaXN0cmF0b3JcXGNvbXBvbmVudHNcXGFkbWluLWFkZGVkaXRcXGFkbWluLWFkZGVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBSXBCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFlBQVk7RUFDWix5QkFBc0M7RUFDdEMsWUFBWSxFQUFBOztBQUdkO0VBQ0UseUJBQXNDO0VBQ3RDLFlBQVk7RUFDWixlQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBYztFQUNkLGNBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUlwQjtFQUNDLHFCQUFxQjtFQUNyQixjQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmF0b3IvY29tcG9uZW50cy9hZG1pbi1hZGRlZGl0L2FkbWluLWFkZGVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xyXG5cclxufVxyXG5cclxuLmdyaWQtYm9keXtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5iYWNrLWJ0bntcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4ubmV4dC1idG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6NXB4O1xyXG59XHJcblxyXG4uYmNrLWJ0bntcclxuICBtYXJnaW4tdG9wOjVweDtcclxuICBjb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMSk7XHJcbn1cclxuXHJcbi5maWVsZHtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG59XHJcblxyXG4gYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDE1MCwgMTM2LCAxKTtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxufVxyXG4uZXhhbXBsZS1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMzBweDtcclxufVxyXG5cclxuI3NwaW5uZXJXcmFwcGVyXHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/administrator/components/admin-addedit/admin-addedit.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/administrator/components/admin-addedit/admin-addedit.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AdminAddeditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAddeditComponent", function() { return AdminAddeditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_administrator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/administrator.service */ "./src/app/administrator/services/administrator.service.ts");
/* harmony import */ var src_app_shared_helpers_custom_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/helpers/custom-validators */ "./src/app/shared/helpers/custom-validators.ts");
/* harmony import */ var src_app_shared_helpers_username__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/helpers/username */ "./src/app/shared/helpers/username.ts");








var AdminAddeditComponent = /** @class */ (function () {
    function AdminAddeditComponent(fb, snackBar, route, router, adminService, usernameValidator) {
        this.fb = fb;
        this.snackBar = snackBar;
        this.route = route;
        this.router = router;
        this.adminService = adminService;
        this.usernameValidator = usernameValidator;
        this.hideSpinner = false;
        this.title = "Add new administrator";
        this.errors = null;
        this.isEdit = false;
    }
    AdminAddeditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.adminId = +params.get("id");
        });
        this.basicInfoFormGroup = this.fb.group({
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            ],
            phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // tslint:disable-next-line:max-line-length
            username: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                this.usernameValidator.checkUsername.bind(this.usernameValidator)
            ],
            avatarUrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    src_app_shared_helpers_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].patternValidator(/\d/, { hasNumber: true }),
                    src_app_shared_helpers_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].patternValidator(/[A-Z]/, {
                        hasCapitalCase: true
                    }),
                    src_app_shared_helpers_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].patternValidator(/[a-z]/, { hasSmallCase: true }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
                ])
            ],
            confirmPassword: [null]
        }, {
            // check whether our password and confirm password match
            validator: src_app_shared_helpers_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].passwordMatchValidator
        });
        this.editForm = this.fb.group({
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            ],
            phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // tslint:disable-next-line:max-line-length
            avatarUrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    src_app_shared_helpers_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].patternValidator(/\d/, { hasNumber: true }),
                    src_app_shared_helpers_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].patternValidator(/[A-Z]/, {
                        hasCapitalCase: true
                    }),
                    src_app_shared_helpers_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].patternValidator(/[a-z]/, { hasSmallCase: true }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
                ])
            ],
            confirmPassword: [null],
            active: [null],
        }, {
            // check whether our password and confirm password match
            validator: src_app_shared_helpers_custom_validators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].passwordMatchValidator
        });
        if (this.adminId !== 0) {
            this.isEdit = true;
            this.getAdmin();
        }
        else {
            this.toggleSpinner();
        }
    };
    AdminAddeditComponent.prototype.toggleSpinner = function () {
        this.hideSpinner ? this.hideSpinner = false : this.hideSpinner = true;
    };
    AdminAddeditComponent.prototype.getAdmin = function () {
        var _this = this;
        this.adminService.getAdminById(this.adminId).subscribe(function (adm) {
            _this.toggleSpinner();
            _this.adminEdit = adm;
            _this.displayAdmin();
        });
    };
    AdminAddeditComponent.prototype.displayAdmin = function () {
        if (this.basicInfoFormGroup) {
            this.basicInfoFormGroup.reset();
        }
        this.title = "Edit Administrator";
        this.editForm.patchValue({
            firstName: this.adminEdit.firstName,
            lastName: this.adminEdit.lastName,
            email: this.adminEdit.email,
            phone: this.adminEdit.phone,
            password: this.adminEdit.password,
            avatarUrl: this.adminEdit.avatarUrl,
            active: this.adminEdit.active
        });
    };
    Object.defineProperty(AdminAddeditComponent.prototype, "f1", {
        get: function () {
            return this.basicInfoFormGroup.controls;
        },
        enumerable: true,
        configurable: true
    });
    AdminAddeditComponent.prototype.onSubmit = function () {
        if (this.adminId !== 0) {
            this.updateAdmin();
        }
        else {
            this.addNewAdmin();
        }
    };
    AdminAddeditComponent.prototype.updateAdmin = function () {
        var _this = this;
        this.adminEdit.firstName = this.editForm.value.firstName;
        this.adminEdit.lastName = this.editForm.value.lastName;
        this.adminEdit.email = this.editForm.value.email;
        this.adminEdit.phone = this.editForm.value.phone;
        this.adminEdit.password = this.editForm.value.password;
        this.adminEdit.avatarUrl = this.editForm.value.avatarUrl;
        this.adminEdit.active = this.editForm.value.active;
        this.adminService.updateAdmin(this.adminEdit).subscribe(function () {
            _this.toggleSpinner();
            _this.snackBar.open('Successfully updated Admin !', 'Close', {
                duration: 3000
            });
            _this.router.navigate(['/administrator']);
        }, function (err) {
            _this.toggleSpinner();
            _this.snackBar.open(err, 'Close');
            console.error(err);
        });
    };
    AdminAddeditComponent.prototype.addNewAdmin = function () {
        var _this = this;
        var newAdmin = {
            firstName: this.basicInfoFormGroup.value.firstName,
            lastName: this.basicInfoFormGroup.value.lastName,
            email: this.basicInfoFormGroup.value.email,
            phone: this.basicInfoFormGroup.value.phone,
            username: this.basicInfoFormGroup.value.username,
            password: this.basicInfoFormGroup.value.password,
            avatarUrl: this.basicInfoFormGroup.value.avatarUrl
        };
        this.adminService.addAdmin(newAdmin).subscribe(function () {
            _this.toggleSpinner();
            _this.openSnackBar("Success!", "New Administrator added!");
            _this.router.navigate(["/administrator"]);
        }, function (err) {
            _this.toggleSpinner();
            _this.openSnackBar("Error!", err);
            console.log(err);
        });
    };
    AdminAddeditComponent.prototype.openSnackBar = function (message, description) {
        this.snackBar.open(message, description, {
            duration: 10000
        });
    };
    AdminAddeditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-admin-addedit",
            template: __webpack_require__(/*! ./admin-addedit.component.html */ "./src/app/administrator/components/admin-addedit/admin-addedit.component.html"),
            styles: [__webpack_require__(/*! ./admin-addedit.component.scss */ "./src/app/administrator/components/admin-addedit/admin-addedit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_administrator_service__WEBPACK_IMPORTED_MODULE_5__["AdministratorService"],
            src_app_shared_helpers_username__WEBPACK_IMPORTED_MODULE_7__["UsernameValidator"]])
    ], AdminAddeditComponent);
    return AdminAddeditComponent;
}());



/***/ }),

/***/ "./src/app/administrator/components/administrator-list/administrator-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/administrator/components/administrator-list/administrator-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"spinnerWrapper\">\n    <mat-spinner *ngIf=\"!hideSpinner\"></mat-spinner>\n  </div>\n<div class=\"table-container\" *ngIf=\"hideSpinner\">\n    <mat-card class=\"mat-elevation-z3\">\n        <div style=\"margin-bottom:15px;\">\n          <h1 style=\"display:inline;\"> Administrators</h1>\n          <button mat-button class=\"add-button\"  [routerLink]=\"['/administrator/addedit', 0]\">Add new</button>\n        </div>\n\n              <mat-form-field>\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search admins\">\n              </mat-form-field>\n\n            </mat-card>\n\n      <div class=\"table-body\">\n          <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z3\">\n            <ng-container matColumnDef=\"Firstname\">\n              <th mat-header-cell *matHeaderCellDef class=\"table-cell center\"> First name </th>\n              <td mat-cell *matCellDef=\"let admin\" class=\"table-cell center\"> {{admin.firstName}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Lastname\">\n              <th mat-header-cell *matHeaderCellDef class=\"table-cell center\"> Last name </th>\n              <td mat-cell *matCellDef=\"let admin\" class=\"table-cell center\"> {{admin.lastName}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Email\">\n              <th mat-header-cell *matHeaderCellDef class=\"table-cell center\"> Email </th>\n              <td mat-cell *matCellDef=\"let admin\" class=\"table-cell center\"> {{admin.email}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Phone\">\n              <th mat-header-cell *matHeaderCellDef class=\"table-cell center\"> Phone </th>\n              <td mat-cell *matCellDef=\"let admin\" class=\"table-cell center\"> {{admin.phone}}\n\n              </td>\n            </ng-container>\n            <ng-container matColumnDef=\"Username\">\n                <th mat-header-cell *matHeaderCellDef class=\"table-cell center\"> Username </th>\n                <td mat-cell *matCellDef=\"let admin\" class=\"table-cell center\"> {{admin.username}}\n\n                </td>\n              </ng-container>\n\n            <ng-container matColumnDef=\"Active\">\n                <th mat-header-cell *matHeaderCellDef class=\"table-cell center\"> Active </th>\n                <td mat-cell *matCellDef=\"let admin\" class=\"table-cell center\">{{admin.active}}\n\n                </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"Action\">\n                  <th mat-header-cell *matHeaderCellDef class=\"table-cell center\"> Action </th>\n                  <td mat-cell *matCellDef=\"let admin\" class=\"table-cell center\"> <button mat-mini-fab color=\"primary\"  [routerLink]=\"['/administrator/addedit', admin.id]\" >\n                    <i class=\"material-icons\">edit</i>\n                  </button>\n\n                  </td>\n                </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n        </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/administrator/components/administrator-list/administrator-list.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/administrator/components/administrator-list/administrator-list.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 20px;\n  width: 50%; }\n\n.table-container {\n  margin-top: 20px;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 1em; }\n\n.table-header {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center; }\n\n.table-body {\n  margin-top: 10px; }\n\n.table-cell {\n  text-align: left;\n  font-size: 18px; }\n\n.center {\n  text-align: center; }\n\n.details-button {\n  background-color: #26a69a;\n  color: white; }\n\n.add-button {\n  background-color: #009688;\n  color: white;\n  float: right; }\n\n.table-cell {\n  text-align: left;\n  font-size: 18px;\n  padding: 0.5em; }\n\n#spinnerWrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYXRvci9jb21wb25lbnRzL2FkbWluaXN0cmF0b3ItbGlzdC9EOlxcRklUXFxaYXZyxaFuaVxcRWR1Y2F0aW9uQ2VudGVyXFxFZHVjYXRpb25DZW50ZXItQmFja2VuZFxcRWR1Y2F0aW9uQ2VudGVyLkFwaS9zcmNcXGFwcFxcYWRtaW5pc3RyYXRvclxcY29tcG9uZW50c1xcYWRtaW5pc3RyYXRvci1saXN0XFxhZG1pbmlzdHJhdG9yLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxlQUFlO0VBQ2YsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UseUJBQXNDO0VBQ3RDLFlBQVksRUFBQTs7QUFFZDtFQUVFLHlCQUFzQztFQUN0QyxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2hCO0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmF0b3IvY29tcG9uZW50cy9hZG1pbmlzdHJhdG9yLWxpc3QvYWRtaW5pc3RyYXRvci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4udGFibGUtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcblxyXG4udGFibGUtaGVhZGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWJsZS1ib2R5e1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi50YWJsZS1jZWxse1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5jZW50ZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5kZXRhaWxzLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDM4LCAxNjYsIDE1NCwgMSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5hZGQtYnV0dG9uIHtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNTAsIDEzNiwgMSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuXHJcbn1cclxuLnRhYmxlLWNlbGx7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZzogMC41ZW07XHJcbn1cclxuXHJcbiNzcGlubmVyV3JhcHBlclxyXG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/administrator/components/administrator-list/administrator-list.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/administrator/components/administrator-list/administrator-list.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AdministratorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministratorListComponent", function() { return AdministratorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_administrator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/administrator.service */ "./src/app/administrator/services/administrator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var AdministratorListComponent = /** @class */ (function () {
    function AdministratorListComponent(adminService, route) {
        this.adminService = adminService;
        this.route = route;
        this.hideSpinner = false;
        this.displayedColumns = [
            "Firstname",
            "Lastname",
            "Email",
            "Phone",
            "Username",
            "Active",
            "Action"
        ];
    }
    AdministratorListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AdministratorListComponent.prototype.ngOnInit = function () {
        this.getAdmins();
    };
    AdministratorListComponent.prototype.toggleSpinner = function () {
        this.hideSpinner ? this.hideSpinner = false : this.hideSpinner = true;
    };
    AdministratorListComponent.prototype.getAdmins = function () {
        var _this = this;
        this.adminService.getAdministrators().subscribe(function (admin) {
            _this.toggleSpinner();
            _this.admins = admin;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.admins);
        });
    };
    AdministratorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-administrator-list",
            template: __webpack_require__(/*! ./administrator-list.component.html */ "./src/app/administrator/components/administrator-list/administrator-list.component.html"),
            styles: [__webpack_require__(/*! ./administrator-list.component.scss */ "./src/app/administrator/components/administrator-list/administrator-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_administrator_service__WEBPACK_IMPORTED_MODULE_2__["AdministratorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdministratorListComponent);
    return AdministratorListComponent;
}());



/***/ }),

/***/ "./src/app/administrator/services/administrator.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/administrator/services/administrator.service.ts ***!
  \*****************************************************************/
/*! exports provided: AdministratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministratorService", function() { return AdministratorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var AdministratorService = /** @class */ (function () {
    function AdministratorService(http, config) {
        this.http = http;
        this.config = config;
        this.pathAPI = this.config.setting['PathAPI'];
    }
    AdministratorService.prototype.getAdministrators = function () {
        return this.http.get(this.pathAPI + 'api/administrators').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AdministratorService.prototype.getAdminById = function (id) {
        return this.http.get(this.pathAPI + ("api/administrator/" + id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AdministratorService.prototype.addAdmin = function (adm) {
        return this.http.post(this.pathAPI + 'api/administrator', adm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AdministratorService.prototype.updateAdmin = function (adm) {
        return this.http.put(this.pathAPI + 'api/administrator', adm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AdministratorService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Something bad happened; please try again later.');
    };
    AdministratorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"]])
    ], AdministratorService);
    return AdministratorService;
}());



/***/ })

}]);
//# sourceMappingURL=administrator-administrator-module.js.map