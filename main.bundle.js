webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/About/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about{\r\n    padding: 10px;\r\n}\r\n.client{\r\n    text-align: center;\r\n}\r\n.policy{\r\n    padding-left: 20px;\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/About/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about\">\r\n    <mat-card>\r\n        <mat-card-header>\r\n            <mat-card-title>\r\n                    <div style = \"padding-top: 30px;\"></div>\r\n                    <div><h2>About Us</h2></div>\r\n            </mat-card-title>\r\n            <mat-card-subtitle>\r\n                <div class=\"info\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                    <div class=\"client\">\r\n                        <span><h4>Number of clients: 2024</h4></span>\r\n                    </div>\r\n                    <div class=\"policy\">\r\n                        <span><h4>Number of policies: 3518</h4></span>\r\n                    </div>    \r\n                </div>\r\n            </mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n            <p>\r\n            We have experience in insurance & financial investment consulting since 2003. We provide customer specific consultation regarding various insurance & investment plans which are best suited for them. Our customer friendly & focus approach help us to deliver best service in this section. Right now our expanding team have 5 members operating in Pune, Maharashtra region & mostly providing LIC & ICICI Lombord Insurance.\r\n            </p>\r\n        </mat-card-content>\r\n        <img mat-card-image \r\n        src=\"./assets/about/about.jpg\">\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/About/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/About/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/About/about.component.css")]
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/Client/client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".client{\r\n    text-align: center;\r\n}\r\n.policy{\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Client/client.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"info\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n    <div class=\"client\">\r\n        <span>Number of clients:2024</span>\r\n    </div>\r\n    <div class=\"policy\">\r\n        <span>Number of policies:3518</span>\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Client/client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClientComponent = (function () {
    function ClientComponent() {
    }
    return ClientComponent;
}());
ClientComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-client',
        template: __webpack_require__("../../../../../src/app/Client/client.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Client/client.component.css")]
    })
], ClientComponent);

//# sourceMappingURL=client.component.js.map

/***/ }),

/***/ "../../../../../src/app/Contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact{\r\n    padding: 10px;\r\n    \r\n}\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n.contact-box{\r\n  width: 100%\r\n}\r\n@media (max-width: 600px) {\r\n   .demo-2{\r\n    font-size: small;\r\n   }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\r\n        <mat-card>\r\n                <mat-card-header>\r\n                    <mat-card-title><h2>Contact us</h2></mat-card-title>\r\n                </mat-card-header>\r\n                <mat-card-content>\r\n                        <div class=\"contact-box\" [fxLayout]=\"layout\" >                       \r\n                                    <div> \r\n                                        <mat-list>\r\n                                            <mat-list-item>\r\n                                              <img matListAvatar src=\"./assets/contact/contact.png\" alt=\"...\">\r\n                                              <h3 matLine>Contact</h3>\r\n                                              <p matLine>\r\n                                                <span class=\"demo-2\">Mob no: 9022872287</span><br>\r\n                                                <span class=\"demo-2\">email: insuranceforus@gmail.com</span>                                               \r\n                                              </p>\r\n                                            </mat-list-item>\r\n                                            <mat-list-item>\r\n                                                Ensure financially safe future & Premium gifts from us.\r\n                                            </mat-list-item>\r\n                                        </mat-list>                           \r\n                                    </div>\r\n                                    <div class=\"example-container\">    \r\n                                            <mat-form-field>\r\n                                                <input [(ngModel)]='semail' matInput type=\"email\" placeholder=\"Enter your email\">\r\n                                            </mat-form-field>\r\n                                            <mat-form-field>\r\n                                                <input [(ngModel)]='mob' matInput placeholder=\"Enter your mobile number\" type=\"number\" maxlength=\"10\">\r\n                                            </mat-form-field>                                                \r\n                                            <mat-form-field>\r\n                                            <textarea [(ngModel)]='text' matInput placeholder=\"Enter your query\"></textarea>\r\n                                            </mat-form-field>   \r\n                                            <button mat-raised-button (click)=\"validate()\" >Submit</button>   \r\n                                    </div>                                \r\n                                </div>\r\n                </mat-card-content>\r\n        </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_mail_service__ = __webpack_require__("../../../../../src/app/services/mail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent(media, snack, mailservice) {
        this.media = media;
        this.snack = snack;
        this.mailservice = mailservice;
        this.layout = 'row';
    }
    ContactComponent.prototype.validate = function () {
        if (this.semail === null || this.semail === '' || this.semail === undefined) {
            this.OpenSnack('Please enter the email');
        }
        else {
            if (this.mob === null || this.mob === '' || this.mob === undefined) {
                this.OpenSnack('please enter the mobile number');
            }
            else {
                if (this.text === null || this.text === '' || this.text === undefined) {
                    this.OpenSnack('Please enter your query');
                }
                else {
                    this.sendmail();
                    this.OpenSnack('Your query is submitted');
                    console.log(this.semail, this.mob, this.text);
                    this.semail = null;
                    this.mob = null;
                    this.text = null;
                }
            }
        }
    };
    ContactComponent.prototype.sendmail = function () {
        var user = {
            semail: this.semail,
            mob: this.mob,
            text: this.text
        };
        this.mailservice.sendmail(user);
    };
    ContactComponent.prototype.OpenSnack = function (value) {
        this.snack.open(value, 'undo', {
            duration: 5000,
        });
    };
    ContactComponent.prototype.updategrid = function () {
        var _this = this;
        this.media.subscribe(function (change) {
            _this.layout = (_this.media.isActive('xs')) ? 'column' : 'row';
        });
    };
    ContactComponent.prototype.ngOnInit = function () {
        this.updategrid();
    };
    return ContactComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ContactComponent.prototype, "semail", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ContactComponent.prototype, "mob", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ContactComponent.prototype, "text", void 0);
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/Contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["ObservableMedia"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["ObservableMedia"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_mail_service__["a" /* MailService */]) === "function" && _c || Object])
], ContactComponent);

var _a, _b, _c;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/Home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lic-box{   \r\n    margin: 0px 2.5px 0px 5px;\r\n}\r\n.icici-box{\r\n  margin: 0px 5px 0px 2.5px;\r\n}\r\n.lic-header, .icici-header{\r\n margin-bottom: 0px;\r\n margin: 5px 0px 5px 0px;\r\n}\r\n.lic-tiles, .icici-tiles{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\nmat-expansion-panel{\r\n  margin: 10px;\r\n}\r\na{\r\n  text-decoration: none;\r\n}\r\n\r\n.service{\r\n  padding: 10px;\r\n}\r\n\r\nimg{\r\n    max-height: 90px;\r\n    min-width: 50px;\r\n    max-width: 350px;\r\n}\r\n  @media (max-width: 600px) {\r\n    mat-expansion-panel > *{\r\n      font-size: X-small;\r\n      text-decoration: none;\r\n      }\r\n      img {        \r\n        max-height: 50px;\r\n        max-width: 120px;\r\n        min-width: 120px;\r\n        \r\n      }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"service\">\r\n    <mat-card>\r\n            <mat-card-header>\r\n                <div style = \"padding-top: 30px;\"></div>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                    <div><h2>Services</h2></div>\r\n                <div class=\"tile-container\" fxLayout=\"row\">\r\n                    <div class=\"lic-box\" fxLayout=\"column\" fxFlex=\"50%\">\r\n                        <div class=\"lic-header\"> \r\n                            <mat-grid-list cols=\"1\" rowHeight=\"100px\" class=\"mat-elevation-z5\">\r\n                                <mat-grid-tile\r\n                                *ngFor=\"let policy of tilelic\"\r\n                                [colspan]=\"policy.cols\"\r\n                                [rowspan]=\"policy.rows\">\r\n                                <img src=\"./assets/logo/LIC3.png\" alt=\"beer\" layout-fill>\r\n                                </mat-grid-tile>\r\n                            </mat-grid-list>   \r\n                        </div>\r\n                        <div class=\"lic-tiles\"> \r\n                            <mat-accordion>       \r\n                                <mat-expansion-panel *ngFor=\"let policy of policies\" class=\"mat-elevation-z3\">\r\n                                    <mat-expansion-panel-header>\r\n                                    <mat-panel-title>\r\n                                        {{policy.name}}                        \r\n                                    </mat-panel-title>\r\n                                    </mat-expansion-panel-header>\r\n                                    <!-- <mat-form-field > -->\r\n                                            <mat-grid-list [cols]=\"nbCols\" gutterSize=\"5px\" rowHeight=\"100px\">\r\n                                                <div *ngFor=\"let policyd of policiesD\">\r\n                                                    <mat-grid-tile\r\n                                                    *ngIf=\"policy.Pid==policyd.Pid\"\r\n                                                    [colspan]=\"1\"\r\n                                                    [rowspan]=\"1\"\r\n                                                    [style.background]=\"'orange'\">\r\n                                                    <a\r\n                                                    [routerLink]=\"['/Ldetail',policyd.Mid]\"\r\n                                                    >\r\n                                                    {{policyd.name}}\r\n                                                </a>\r\n                                                    </mat-grid-tile>\r\n                                                </div> \r\n                                            </mat-grid-list>                             \r\n                                    <!-- </mat-form-field> -->\r\n                            </mat-expansion-panel>\r\n                            </mat-accordion>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"icici-box\" fxLayout=\"column\" fxFlex=\"50%\">\r\n                        <div class=\"icici-header\">\r\n                            <mat-grid-list cols=\"1\"  rowHeight=\"100px\" class=\"mat-elevation-z5\">\r\n                                <mat-grid-tile\r\n                                *ngFor=\"let policy of tileicici\"\r\n                                [colspan]=\"policy.cols\"\r\n                                [rowspan]=\"policy.rows\">\r\n                                <img src=\"./assets/logo/ICICI.png\" alt=\"beer\" layout-fill>\r\n                                </mat-grid-tile>\r\n                                \r\n                        </mat-grid-list>\r\n                        </div>\r\n                        <div class=\"icici-tiles\">\r\n                                <mat-accordion>\r\n                                <mat-expansion-panel \r\n                                *ngFor=\"let policyI of picici\" class=\"mat-elevation-z3\">\r\n                                        <mat-expansion-panel-header>\r\n                                        <mat-panel-title>\r\n                                            {{policyI.name}}\r\n                                        </mat-panel-title>\r\n                                        </mat-expansion-panel-header>\r\n                                                <mat-grid-list [cols]=\"nbCols\" gutterSize=\"5px\" rowHeight=\"100px\">\r\n                                                    <div *ngFor=\"let policyId of piciciD\">\r\n                                                            <mat-grid-tile\r\n                                                            *ngIf=\"policyI.Pid==policyId.Pid\"\r\n                                                            [colspan]=\"1\"\r\n                                                            [rowspan]=\"1\"\r\n                                                            [style.background]=\"'orange'\">\r\n                                                            <a\r\n                                                            [routerLink]=\"['/Idetail',policyId.Mid]\"\r\n                                                            >\r\n                                                            {{policyId.name}}\r\n                                                        </a>                                                         \r\n                                                            </mat-grid-tile>\r\n                                                    </div>  \r\n                                                </mat-grid-list>  \r\n                                    </mat-expansion-panel> \r\n                                </mat-accordion>        \r\n                        </div>\r\n                    </div>                    \r\n                </div>\r\n            </mat-card-content>            \r\n    </mat-card>\r\n</div>   \r\n  \r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/Home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lic_lic_service__ = __webpack_require__("../../../../../src/app/services/lic/lic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_icici_icici_service__ = __webpack_require__("../../../../../src/app/services/icici/icici.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(licservice, iciciservice, media, router) {
        this.licservice = licservice;
        this.iciciservice = iciciservice;
        this.media = media;
        this.router = router;
        this.tilelic = [
            { text: 'LIC', cols: 1, rows: 1, color: 'yellow' },
        ];
        this.tileicici = [
            { text: 'ICICI Lombard', cols: 1, rows: 1, color: 'blue' },
        ];
        this.nbCols = 1;
    }
    HomeComponent.prototype.updategrid = function () {
        var _this = this;
        this.media.subscribe(function (change) {
            _this.nbCols = (_this.media.isActive('xs')) ? 1 : 2;
        });
    };
    HomeComponent.prototype.getPolicies = function () {
        var _this = this;
        this.licservice.getpolicies().then(function (policies) { return _this.policies = policies; });
    };
    HomeComponent.prototype.getPolciesD = function () {
        var _this = this;
        this.licservice.getpoliciesD().then(function (policiesD) { return _this.policiesD = policiesD; });
    };
    HomeComponent.prototype.getPIcici = function () {
        var _this = this;
        this.iciciservice.getpolicies().then(function (picici) { return _this.picici = picici; });
    };
    HomeComponent.prototype.getPIciciD = function () {
        var _this = this;
        this.iciciservice.getpoliciesD().then(function (piciciD) { return _this.piciciD = piciciD; });
    };
    // onSelect(policy: LicPolicy): void{
    //     this.selectedpolicy = policy;
    //     this.router.navigate(['/detail', this.selectedpolicy.Mid]);
    // }
    HomeComponent.prototype.ngOnInit = function () {
        this.updategrid();
        this.getPolicies();
        this.getPolciesD();
        this.getPIcici();
        this.getPIciciD();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/Home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_lic_lic_service__["a" /* LicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_lic_lic_service__["a" /* LicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_icici_icici_service__["a" /* ICICIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_icici_icici_service__["a" /* ICICIService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["ObservableMedia"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["ObservableMedia"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/Page-No-Found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>page not found</h1>"

/***/ }),

/***/ "../../../../../src/app/Page-No-Found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page',
        template: __webpack_require__("../../../../../src/app/Page-No-Found/page-not-found.component.html")
    })
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/Policy-Detail/policy-detail-ic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyDetailIcComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_icici_icici__ = __webpack_require__("../../../../../src/app/services/icici/icici.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_icici_icici_service__ = __webpack_require__("../../../../../src/app/services/icici/icici.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PolicyDetailIcComponent = (function () {
    function PolicyDetailIcComponent(iciciservice, route, location, router) {
        this.iciciservice = iciciservice;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    PolicyDetailIcComponent.prototype.ngOnInit = function () {
        this.geticiciselected();
        window.scrollTo(0, 0);
    };
    PolicyDetailIcComponent.prototype.geticiciselected = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            return _this.iciciservice.getpolicy(+params.get('Mid'));
        })
            .subscribe(function (poli) { return _this.poli = poli; });
    };
    PolicyDetailIcComponent.prototype.goBack = function () {
        this.location.back();
    };
    return PolicyDetailIcComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_icici_icici__["a" /* IciciPolicy */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_icici_icici__["a" /* IciciPolicy */]) === "function" && _a || Object)
], PolicyDetailIcComponent.prototype, "poli", void 0);
PolicyDetailIcComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-policydetail',
        template: __webpack_require__("../../../../../src/app/Policy-Detail/policy-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Policy-Detail/policy-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_icici_icici_service__["a" /* ICICIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_icici_icici_service__["a" /* ICICIService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], PolicyDetailIcComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=policy-detail-ic.component.js.map

/***/ }),

/***/ "../../../../../src/app/Policy-Detail/policy-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a > * {\r\n    text-decoration: none;\r\n}\r\n.detail{\r\n    padding: 10px;\r\n}\r\n.margin{\r\n    padding-top: 65px;\r\n}\r\nimg{\r\nmax-width: 1280px;\r\n}\r\n.picture{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Policy-Detail/policy-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"margin\"></div>\r\n<div class=\"picture\">\r\n        <mat-card fxLayoutAlign=\"space-around center\">\r\n        <img mat-card-image src=\"./assets/detail/detail.jpg\" alt=\"beer\" layout-fill>\r\n        </mat-card>\r\n</div>\r\n<div *ngIf=\"poli\" class=\"detail\">\r\n        <mat-card>\r\n                <mat-card-header fxLayout=\"column\" fxflex fxLayoutAlign=\"space around-center\">\r\n                        <div>\r\n                        <button class=\"mat-elevation-z5\" mat-icon-button (click)=\"goBack()\"><mat-icon>arrow_back</mat-icon></button>\r\n                    </div>\r\n                    <div fxLayoutAlign=\"center center\">\r\n                           <h5>{{poli.name}}</h5>  \r\n                    </div>\r\n                </mat-card-header>\r\n                <mat-divider></mat-divider>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"space around-center\">\r\n                        <div fxLayout=\"row\">\r\n                                <h6> <span [innerHTML]=\"poli.description | newlines\"></span></h6>\r\n                        </div>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"end end\">\r\n                              <span>Source:  </span>{{poli.source}}\r\n                        </div>\r\n\r\n                </mat-card-content>\r\n        </mat-card>\r\n</div>\r\n<div>\r\n<app-contact></app-contact>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/Policy-Detail/policy-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_lic_lic_service__ = __webpack_require__("../../../../../src/app/services/lic/lic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_lic_lic__ = __webpack_require__("../../../../../src/app/services/lic/lic.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PolicyDetailComponent = (function () {
    function PolicyDetailComponent(licservice, route, location, router) {
        this.licservice = licservice;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    PolicyDetailComponent.prototype.ngOnInit = function () {
        this.getlicselected();
        window.scrollTo(0, 0);
    };
    PolicyDetailComponent.prototype.getlicselected = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            return _this.licservice.getpolicy(+params.get('Mid'));
        })
            .subscribe(function (poli) { return _this.poli = poli; });
    };
    PolicyDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return PolicyDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_lic_lic__["a" /* LicPolicy */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_lic_lic__["a" /* LicPolicy */]) === "function" && _a || Object)
], PolicyDetailComponent.prototype, "poli", void 0);
PolicyDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-policydetail',
        template: __webpack_require__("../../../../../src/app/Policy-Detail/policy-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Policy-Detail/policy-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_lic_lic_service__["a" /* LicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_lic_lic_service__["a" /* LicService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], PolicyDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=policy-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spacer{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\nmat-toolbar{ \r\n  margin: 0px;\r\n  width: 100%;\r\n  background-color: white;\r\n}\r\n.menu{\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  width: 100%;\r\n}\r\nmat-nav-list{\r\n  margin: 0px;\r\n  height: 100%;\r\n  padding: 0px;\r\n}\r\nmat-list-item{\r\n  margin: 0px;\r\n  height: 100%;\r\n  padding-top: 7px;  \r\n  text-align: center;\r\n  \r\n}\r\n\r\nimg{\r\n  max-width: 50px;\r\n  max-height: 40px;\r\n\r\n}\r\n.margin{\r\n  padding-top: 65px;\r\n}\r\n@media (max-width: 600px) {\r\n  mat-toolbar{\r\n    font-size: small;\r\n    }\r\n    img{\r\n\r\n      height: 20px;\r\n      width: 25px;\r\n    }\r\n   .logo{\r\n    font-size: small;\r\n   }\r\n}\r\na{\r\n  text-decoration: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n    <div class=\"menu\">\n                <mat-toolbar class=\"mat-elevation-z10\">\n                        <mat-nav-list fxLayout=\"row\" fxLayoutAlign=\"start stretch\" *ngIf=\"media.isActive('gt-xs')\">\n                            <a href=\"#home\" *ngIf=\"media.isActive('gt-xs')\">\n                                <mat-list-item>   \n                                <img src=\"./assets/logo/home.png\">                                \n                                <h3>Insurance for us</h3>\n                                </mat-list-item>\n                            </a>                       \n                            <a href=\"#service\"> \n                                <mat-list-item>\n                                <mat-icon matListIcon>dashboard</mat-icon>\n                                <span *ngIf=\"media.isActive('gt-xs')\">\n                                        Services\n                                </span>                      \n                                </mat-list-item>                        \n                            </a>    \n                            <a href=\"#about\">\n                                <mat-list-item> \n                                            <mat-icon matListIcon>book</mat-icon>  \n                                            <span *ngIf=\"media.isActive('gt-xs')\">\n                                                    About Us \n                                            </span>                                                                                                 \n                                </mat-list-item> \n                            </a>\n                            <a  href=\"#contact\">\n                                <mat-list-item >\n                                        <mat-icon matListIcon>call</mat-icon>\n                                    <span *ngIf=\"media.isActive('gt-xs')\">\n                                            Contact Us\n                                    </span>        \n                                </mat-list-item>       \n                            </a>                          \n                            </mat-nav-list>\n        \n                        <button mat-icon-button [matMenuTriggerFor]=\"menu\" *ngIf=\"media.isActive('xs')\">\n                            <mat-icon>menu</mat-icon>\n                        </button>\n                        <mat-menu #menu=\"matMenu\">\n                            <a href=\"#service\">\n                            <button mat-menu-item>\n                                <mat-icon matListIcon>dashboard</mat-icon>\n                                <span>\n                                Services\n                                </span>\n                            </button>\n                            </a>\n                            <a href=\"#about\">\n                            <button mat-menu-item>\n                                    <mat-icon matListIcon>book</mat-icon>  \n                                    <span>\n                                    About Us \n                                    </span>\n                            </button>\n                            </a>\n                            <a href=\"#contact\">\n                            <button mat-menu-item>\n                                    <mat-icon matListIcon>call</mat-icon>\n                                    <span>\n                                    Contact Us\n                                    </span> \n                            </button>\n                            </a>\n                        </mat-menu>                \n                        <div *ngIf=\"media.isActive('xs')\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                                <a fxLayout=\"row\" href=\"#home\">                                \n                                     <img src=\"./assets/logo/home.png\">                                \n                                     <span class=\"logo\">Insurance for us</span>                             \n                                 </a>\n                        </div>               \n                </mat-toolbar>      \n            </div>\n    <div class=\"main-container\" #scrollContainer id=\"home\">\n    <router-outlet></router-outlet>\n    </div>\n    <footer>\n        <mat-toolbar>\n            <div>\n                <span>Stay connected </span>                \n                <a href=\"#\">Google+</a>\n                <a href=\"#\">Facebook</a>\n            </div>\n            <span class=\"spacer\"></span>\n            <div fxLayoutAlign=\"center center\">\n                    <span>InsuranceForUs</span>\n                <mat-icon>copyright</mat-icon>\n                <span>2017</span>\n            </div>\n        </mat-toolbar>\n    </footer> \n</div>\n\n                                     \n\n           \n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
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
    function AppComponent(media) {
        this.media = media;
        this.title = 'Insurance For Us';
        this.snav = 'over';
    }
    AppComponent.prototype.updategrid = function () {
        var _this = this;
        this.media.subscribe(function (change) {
            _this.snav = (_this.media.isActive('xs')) ? 'over' : 'side';
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.updategrid();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('fade', [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('void => *', [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opecity: 0 }), Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(2000)])])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["ObservableMedia"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["ObservableMedia"]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Home_home_component__ = __webpack_require__("../../../../../src/app/Home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__About_about_component__ = __webpack_require__("../../../../../src/app/About/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Policy_Detail_policy_detail_component__ = __webpack_require__("../../../../../src/app/Policy-Detail/policy-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Page_No_Found_page_not_found_component__ = __webpack_require__("../../../../../src/app/Page-No-Found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Contact_contact_component__ = __webpack_require__("../../../../../src/app/Contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Client_client_component__ = __webpack_require__("../../../../../src/app/Client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Policy_Detail_policy_detail_ic_component__ = __webpack_require__("../../../../../src/app/Policy-Detail/policy-detail-ic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_lic_lic_service__ = __webpack_require__("../../../../../src/app/services/lic/lic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_icici_icici_service__ = __webpack_require__("../../../../../src/app/services/icici/icici.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_mail_service__ = __webpack_require__("../../../../../src/app/services/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular_pipes__ = __webpack_require__("../../../../angular-pipes/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__Home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__About_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__Policy_Detail_policy_detail_component__["a" /* PolicyDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_12__Page_No_Found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_13__Contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_14__Client_client_component__["a" /* ClientComponent */],
            __WEBPACK_IMPORTED_MODULE_15__Policy_Detail_policy_detail_ic_component__["a" /* PolicyDetailIcComponent */],
            __WEBPACK_IMPORTED_MODULE_16__carousel_carousel_component__["a" /* CarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_22__map_map_component__["a" /* MapComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_22__map_map_component__["a" /* MapComponent */]
                },
                {
                    path: 'Ldetail/:Mid',
                    component: __WEBPACK_IMPORTED_MODULE_11__Policy_Detail_policy_detail_component__["a" /* PolicyDetailComponent */]
                },
                {
                    path: 'Idetail/:Mid',
                    component: __WEBPACK_IMPORTED_MODULE_15__Policy_Detail_policy_detail_ic_component__["a" /* PolicyDetailIcComponent */]
                },
                {
                    path: '**',
                    component: __WEBPACK_IMPORTED_MODULE_12__Page_No_Found_page_not_found_component__["a" /* PageNotFoundComponent */]
                }
            ]),
            __WEBPACK_IMPORTED_MODULE_21__angular_flex_layout__["FlexLayoutModule"],
            __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_20_angular_pipes__["a" /* NgStringPipesModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__services_lic_lic_service__["a" /* LicService */], __WEBPACK_IMPORTED_MODULE_18__services_icici_icici_service__["a" /* ICICIService */], __WEBPACK_IMPORTED_MODULE_19__services_mail_service__["a" /* MailService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ngb-carousel{\r\n    width: 100%;\r\n    text-align: center;\r\n    padding-bottom: 20px;\r\n    border: none;\r\n}\r\nimg{\r\n    max-height: 450px;\r\n    max-width: 1280px;\r\n    min-width: 1280px;\r\n    min-height: 450px;\r\n}\r\n@media (max-width: 600px) {\r\n    img {\r\n      \r\n      max-height: 140px;\r\n      max-width: 350px;\r\n      min-width: 350px;\r\n      min-height: 140px;\r\n    }\r\n    .carousel-caption{\r\n        font-size: xx-small;\r\n    }\r\n}\r\n@media (min-width: 600px){\r\n    .carousel-caption{\r\n        font-size: x-large;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-carousel>\r\n    <ng-template ngbSlide>\r\n      <img src=\"./assets/carousel/1.jpg\" alt=\"Random first slide\">\r\n    </ng-template>\r\n    <ng-template ngbSlide>\r\n      <img src=\"./assets/carousel/9.jpg\" alt=\"Random second slide\">\r\n      <div class=\"carousel-caption\">\r\n            Together lets ensure your financially safe today and tommorow\r\n      </div>\r\n    </ng-template>\r\n    <ng-template ngbSlide>\r\n      <img src=\"./assets/carousel/6.jpg\" alt=\"Random third slide\">\r\n    </ng-template>\r\n  </ngb-carousel>\r\n\r\n  "

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CarouselComponent = (function () {
    function CarouselComponent() {
    }
    return CarouselComponent;
}());
CarouselComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-corousel',
        template: __webpack_require__("../../../../../src/app/carousel/carousel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/carousel/carousel.component.css")]
    })
], CarouselComponent);

//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margin{\r\n    margin-top: 65px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"margin\"></div>\n        <div class=\"intro\">\n          <app-corousel></app-corousel>    \n        </div>\n        <div class=\"app-content\" id=\"service\" >    \n          <app-home></app-home>\n        </div> \n        <div class=\"about\" id=\"about\">\n          <app-about></app-about>\n        </div>\n        <div class=\"contact\" id=\"contact\">\n        <app-contact></app-contact>\n        </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    return MapComponent;
}());
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map/map.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MapComponent);

//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatSnackBarModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatSnackBarModule */]
        ]
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/icici/icici-mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Policies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PoliciesD; });
var Policies = [
    { Pid: 11, name: 'Business Insurance' },
    { Pid: 12, name: 'Health Insurance' },
    { Pid: 13, name: 'NRI Insurance' },
    { Pid: 14, name: 'Rural Insurance' },
    { Pid: 15, name: 'Car Insurance' },
    { Pid: 16, name: 'Home Insurance' },
    { Pid: 17, name: 'Rural Insurance' },
    { Pid: 18, name: 'Travel Insurance' },
    { Pid: 19, name: 'Two Wheeler Insurance' }
];
var PoliciesD = [
    // tslint:disable-next-line:max-line-length
    { Mid: 11, Pid: 11, name: 'Corporate Insurance', description: "1.Corporate Cover\n2.Corporate Overseas Travel\n3.Group Mediclaim Insurance Policy\n4.Group Personal Accident Insurance Policy", source: 'www.icicilombard.com' },
    { Mid: 12, Pid: 11, name: 'Customized Business Products', description: "\n1.Office Package Policy\n2.Educational Institution Package Policy\n3.Hotel Corporate Cover\n4.Group Health Insurance\n5.Group Personal Accident Policy\n6.Workmens Compensation Policy\n7.Petrol Station Package Policy\n8.Malls and Multiplex Policy", source: 'www.icicilombard.com' },
    { Mid: 13, Pid: 11, name: 'Event Insurance', description: '1.Wedding Insurance', source: 'www.icicilombard.com' },
    { Mid: 14, Pid: 11, name: 'Fire Insurance', description: "1.Fire and Special Perils Policy (Material Damage)\n2.Consequential Loss (Fire) Insurance Policy\n3.Industrial All Risk", source: 'www.icicilombard.com' },
    { Mid: 15, Pid: 11, name: 'Industrial Insurance', description: "1.Boiler and Pressure Plant Insurance Policy\n2.Electronic Equipment Insurance Policy\n3.Machinery Breakdown Insurance Policy\n4.Erection All Risks\n5.Machinery Loss of Profits Insurance Policy\n6.Contractors' All Risk Policy\n7.Contractors' Plant and Machinery", source: 'www.icicilombard.com' },
    { Mid: 16, Pid: 11, name: 'Liability Insurance', description: "1.Public Liability Insurance (Industrial Risks) Policy\n2.Public Liability Insurance (Non-Industrial Risks) Policy\n3.Product Liability\n4.Public Liability Act Only\n5.Workmens' Compensation Policy\n6.Director & Officers Liability Insurance\n7.Professional Indemnity (Doctors & Medical Practitioners) \n", source: 'www.icicilombard.com' },
    { Mid: 17, Pid: 11, name: 'Marine Insurance', description: "1.Marine Import Transit Insurance Policy\n2.Marine Export Transit Insurance Policy\n3.Marine Inland Transit Insurance Policy\n4.Marine Hull\n", source: 'www.icicilombard.com' },
    { Mid: 18, Pid: 11, name: 'Other Insurance', description: "1.Shop Insurance\n2.Money Insurance Policy\n3.Tea Crop Policy\n4.Burglary Insurance Policy\n5.All Risks Insurance Policy\n6.Credit Insurance\n7.Fidelity Guarantee Insurance Policy", source: 'www.icicilombard.com' },
    { Mid: 19, Pid: 12, name: 'Complete Health Inusrance Plan', description: 'Opt for a health insurance plan that offers complete coverage for you and your family and allows you to customise your plan, premium and policy too.', source: 'www.icicilombard.com' },
    { Mid: 20, Pid: 12, name: 'Health Booster', description: "Fortify your existing health insurance with a top-up plan that offers individual covers to let you secure health for all your family members.", source: 'www.icicilombard.com' },
    { Mid: 21, Pid: 12, name: 'Personal Protect Policy', description: "Personal Accident Insurance\nSecure yourself with an insurance plan which ensures that your family\u2019s finances are taken care of, when you are unable to do so.", source: 'www.icicilombard.com' },
    { Mid: 22, Pid: 13, name: 'Health Insurance', description: "1.Support your parents during major medical expenditures\n2.No age limit\n3.Guaranteed lifetime renewability\n", source: 'www.icicilombard.com' },
    { Mid: 23, Pid: 13, name: 'Home Insurance', description: "    1.Coverage for your home or contents or both\n2.Protection from natural/man-made calamities\n3.Get coverage upto 10 years at a stretch", source: 'www.icicilombard.com' },
    { Mid: 24, Pid: 13, name: 'Motor Insurance', description: "1.Get a policy instantly; no paperwork required\n2.Cashless claim facility at 5,600+ garages\n3.Damage, personal accident and liability covered", source: 'www.icicilombard.com' },
    { Mid: 25, Pid: 13, name: 'Travel Insurance', description: "1.Secure your parents' trip with this comprehensive policy\n2.No health check-up required\n3.Worldwide coverage on the policy\n", source: 'www.icicilombard.com' },
    { Mid: 26, Pid: 14, name: 'Health Insurance', description: "We provide protection to the health of the rural population through our comprehensive Family Health Insurance plan.", source: 'www.icicilombard.com' },
    { Mid: 27, Pid: 14, name: 'J & K govt employees GHI policy', description: "The beneficiary can avail cashless hospitalisation in network hospitals empanelled under the scheme subject... ", source: 'www.icicilombard.com' },
    { Mid: 28, Pid: 14, name: 'Rural intro', description: "At ICICI Lombard, investing in rural markets is a part of our social responsibility. The protection provided to the rural class is specific and customised according to their requirements. Through a multiple channel system, we not only provide protection for agricultural assets but also health, motor and other covers.", source: 'www.icicilombard.com' },
    { Mid: 29, Pid: 14, name: 'Tractor Insurance', description: "Tractors are one of the most precious assets for individuals involved in agriculture. Our comprehensive policy covers not just own damage but also third party damage.", source: 'www.icicilombard.com' },
    { Mid: 30, Pid: 14, name: 'Weather Insurance', description: "Weather Insurance provides cover against losses incurred due to uncertainties in climatic conditions", source: 'www.icicilombard.com' },
    { Mid: 31, Pid: 15, name: 'Car Insurance', description: "What is covered under your car insurance policy: Inclusions\n    \n        Loss or damage to your vehicle against natural calamities - Fire, explosion, self-ignition or lightning, earthquake, flood, typhoon, hurricane, storm, tempest, inundation, cyclone, hailstorm, frost, landslide, rockslide.\n        Loss or damage to your vehicle against man-made calamities - Burglary, theft, riot, strike, malicious act, accident by external means, terrorist activity, any damage in transit by road, rail, inland waterway, lift, elevator or air.\n    \n        Personal Accident Cover - Coverage of  2 lakhs for the individual driver of the vehicle while travelling, mounting or dismounting from the car. Optional personal accident covers for co-passengers are also available.\n        Third Party Legal Liability - Protection against legal liability due to accidental damages resulting in the permanent injury or death of a person, and damage caused to the surrounding property.\n    \n    What is not covered under your car insurance policy: Exclusions\n    \n        Normal wear and tear and general ageing of the vehicle\n        Depreciation or any consequential loss\n    \n        Mechanical/ electrical breakdown\n        Loss/ damage due to war, mutiny or nuclear risk", source: 'www.icicilombard.com' },
    { Mid: 32, Pid: 16, name: 'Home Insurance', description: "Understand your home insurance policy coverage\n    Your policy covers:\n    \n        Your home insurance policy gives you the option to buy insurance for only the building (structure) of your home, or only the content (belongings) of your home, or both.\n    \n    Your policy does not cover:\n    \n        Willful destruction of property\n        Loss, damage and destruction caused by war, wear and tear etc.", source: 'www.icicilombard.com' },
    { Mid: 33, Pid: 17, name: 'Rural Insurance', description: "The beneficiary can avail cashless hospitalisation in network hospitals empanelled under the scheme subject...", source: 'www.icicilombard.com' },
    { Mid: 34, Pid: 18, name: 'Travel Insurance', description: "Explore our travel insurance plans\n    Single Round Trip\n    Single Trip Travel Insurance\n    \n    Get coverage for medical and non-medical emergencies, for a trip of fixed duration and a single onward and return journey. \n    \n    Gold Multi Trip\n    Multi Trip Travel Insurance\n    \n    Especially designed for frequent fliers, with this annual travel insurance policy, you can secure 30, 45, or 60 days of travel per year.", source: 'www.icicilombard.com' },
    { Mid: 35, Pid: 19, name: 'Two Wheeler Insurance', description: "What is covered under your two wheeler insurance policy: Inclusions\n    \n        Loss or damage to your vehicle against natural calamities - Fire, explosion, self-ignition or lightning, earthquake, flood, typhoon, hurricane, storm, tempest, inundation, cyclone, hailstorm, frost, landslide, rockslide.\n        Loss or damage to your vehicle against man-made calamities - Burglary, theft, riot, strike, malicious act, accident by external means, terrorist activity, any damage in transit by road, rail, inland waterway, lift, elevator or air.\n    \n        Personal Accident Cover - Coverage of \u20B9 1 lakhs for the individual driver of the vehicle while travelling, mounting or dismounting from the  Two Wheeler. Optional personal accident covers for co-passengers are also available.\n        Third Party Legal Liability - Protection against legal liability due to accidental damages resulting in the permanent injury or death of a person, and damage caused to the surrounding property.\n    \n    To understand exactly what all your bike insurance policy covers, and be in a much better position to benefit from it, read your Bike Insurance Policy Wordings carefully.\n    What is not covered under your two wheeler insurance policy: Exclusions\n    \n        Normal wear and tear and general ageing of the vehicle\n        Depreciation or any consequential loss\n    \n        Mechanical/electrical breakdown\n        Loss/damage due to war, mutiny or nuclear risk", source: 'www.icicilombard.com' },
];
//# sourceMappingURL=icici-mock.js.map

/***/ }),

/***/ "../../../../../src/app/services/icici/icici.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ICICIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icici_mock__ = __webpack_require__("../../../../../src/app/services/icici/icici-mock.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ICICIService = (function () {
    function ICICIService() {
    }
    ICICIService.prototype.getpolicies = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__icici_mock__["a" /* Policies */]);
    };
    ICICIService.prototype.getpoliciesD = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__icici_mock__["b" /* PoliciesD */]);
    };
    ICICIService.prototype.getpolicy = function (id) {
        return this.getpoliciesD()
            .then(function (policies) { return policies.find(function (policy) { return policy.Mid === id; }); });
    };
    return ICICIService;
}());
ICICIService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], ICICIService);

//# sourceMappingURL=icici.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/icici/icici.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ICICI */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IciciPolicy; });
var ICICI = (function () {
    function ICICI() {
    }
    return ICICI;
}());

var IciciPolicy = (function () {
    function IciciPolicy() {
    }
    return IciciPolicy;
}());

//# sourceMappingURL=icici.js.map

/***/ }),

/***/ "../../../../../src/app/services/lic/lic-mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Policies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PoliciesD; });
var Policies = [
    { Pid: 11, name: 'Endowment plans' },
    { Pid: 12, name: 'Money Back Plans' },
    { Pid: 13, name: 'RIDER' },
    { Pid: 14, name: 'Term Assurance Plans' },
    { Pid: 15, name: 'Whole Life Plans' },
];
var PoliciesD = [
    { Mid: 11, Pid: 11, name: 'LIC Aadhaar Shila', description: "(A non-linked, with-profit endowment assurance life insurance plan)\n    \n    LIC\u2019s Aadhaar Shila Plan offers a combination of protection and savings. This plan is exclusively designed for female lives having Aadhaar Card issued by UIDAI (Unique Identification Authority of India). \n    \u2022   For Base Plan:( Submission of Aadhar Card is MUST)\n\n    \u2022   Minimum Age at entry: 8 years (completed) ( without insisting matching insurance of parent)\n\n    \u2022   Maximum Age at entry: 55 years (nearest birthday)\n\n    \u2022   Minimum Policy Term: 10 years\n\n    \u2022   Maximum Policy Term: 20 years\n\n    \u2022   Maximum Age at Maturity: 70 years (nearest birthday)\n\n    \u2022   Minimum Basic Sum Assured per life: Rs. 75,000/-\n\n    \u2022   Maximum Basic Sum Assured per life: Rs. 300,000/-\n\n    \u2022   B S A shall be in multiples of Rs.5,000/- for BSA up to 150,00 & Rs.10,000 above BSA 150,000/-\n\n    \u2022   Age proof:\t: Both Standard & Non-standard allowed\n\n    \u2022   Medical\t: ONLY Non-Medical for all types. (Stand-alone)\n\n    \u2022   Female categories\t: A 1, A 2 , A3 , B1 & B2 all allowed.( without insisting matching insurance of parent/ husband)\n\n    \u2022   Financial underwriting:\t: No financial underwriting to be done.\n\n    \u2022   Premium offer:\t: Tabular premium marginally lower for female lives.\n\n    \u2022   Loan & Surrender\t: Allowed.\n\n    \u2022   Riders\t: D A B allowed.\n\n    \u2022   Auto Cover\t: After payment of 3 year premiums==\t6 months from FUP: After payment of 5 year premiums== 24 months from FUP.", source: 'www.licindia.in' },
    { Mid: 12, Pid: 11, name: 'LIC Aadhaar Stambh', description: "(A non-linked, with-profit endowment assurance life insurance plan)\n    \n    LIC\u2019s Aadhaar Stambh Plan offers a combination of protection and savings. This plan is exclusively designed for male lives having Aadhaar Card issued by UIDAI (Unique Identification Authority of India). \n    \u2022   For Base Plan: ( Submission of Aadhar Card is MUST)\n\n    \u2022   Minimum Age at entry\t: 8 years (completed) ( without insisting matching insurance of parent)\n\n    \u2022   Maximum Age at entry\t: 55 years (nearest birthday)\n\n    \u2022   Minimum Policy Term\t: 10 years\n\n    \u2022   Maximum Policy Term\t: 20 years\n\n    \u2022   Maximum Age at Maturity\t: 70 years (nearest birthday)\n\n    \u2022   Minimum Basic Sum Assured per life\t: Rs. 75,000/-\n\n    \u2022   Maximum Basic Sum Assured per life\t: Rs. 300,000/-\n    B S A shall be in multiples of Rs.5,000/- for BSA up to 150,00 & Rs.10,000 above BSA 150,000/-\n\n    \u2022   Age proof:\t: Both Standard & Non-standard allowed\n\n    \u2022   Medical\t: ONLY Non-Medical for all types. (Stand-alone)\n\n    \u2022   Financial underwriting:\t: No financial underwriting to be done.\n\n    \u2022   Loan & Surrender\t: Allowed.\n\n    \u2022   Riders\t: D A B allowed.\n\n    \u2022   Auto Cover\t: After payment of 3 year premiums==\t6 months from FUP: After payment of 5 year premiums== 24 months from\n\n    \u2022\tMode Rebate::Yly mode : 2% of TP, Hly mode : 1% of TP\n\n    \u2022\tQly &monthly : NIL\n\n    \u2022\tHigh Basic Sum Assured Rebate:\n\n    \u2022\tBasic Sum AssuredRebate (Rs.)\n\n    \u2022\t75,000 to 1,90,000: Nil\n\n    \u2022\t2,00,000 to 2,90,000: 1.50 \u2030Basic Sum Assured\n\n    \u2022\t3,00,000: 2.00 \u2030Basic Sum Assured\n\n    \u2022\tBusiness insurance:: Employer- employee Allowed. Not for key man/partnership.\n\n    \u2022\tNRI: NRI lives group Veligible. Not to FNIO.", source: 'www.licindia.in' },
    { Mid: 13, Pid: 11, name: 'Lic Jeevan Labh', description: "LIC's Jeevan Labh is a limited premium paying, non-linked, with-profits endowment plan which offers a combination of protection and savings. This plan provides financial support for the family in case of unfortunate death of the policyholder any time before maturity and a lump sum amount at the time of maturity for the surviving policyholder. This plan also takes care of liquidity needs through its loan facility.\n    1.      Benefits:\n\n    Death benefit:\n    In case of death during the policy term, provided all due premiums have been paid, Death benefit, defined as sum of \"Sum Assured on Death\",vested Simple Reversionary Bonuses and Final Additional bonus, if any, shall be payable. Where, \"Sum Assured on Death\" is defined as the higher of 10 times of annualised premium or Absolute amount assured to be paid on death i.e. Basic Sum Assured . This death benefit shall not be less than 105% of all the premiums paid as on date of death.\n    Premiums referred above shall not include any taxes, extra amount chargeable under the policy due to underwriting decision and rider premium(s), if any.\n    \n    Maturity Benefit:\n    \n    \"Sum Assured on Maturity\" equal to Basic Sum Assured, along with vested Simple Reversionary bonuses and Final Additional bonus, if any, shall be payable in lump sum on survival to the end of the policy term provided all due premiums have been paid.\n    \n    Participation in Profits:\n    The policy shall participate in profits of the Corporation and shall be entitled to receive Simple Reversionary Bonuses declared as per the experience of the Corporation, provided the policy is in full force.\n    Final (Additional) Bonus may also be declared under the policy in the year when the policy results into a claim either by death or maturity.\n    \n    2.      Optional Benefit:\n    The policyholder has an option of availing the following Rider benefit(s):\n    \n        LIC's Accidental Death and Disability Benefit Rider (UIN: 512B209V01)\n        LIC's New Term Assurance Rider (UIN: 512B210V01)\n    \n    Rider sum assured cannot exceed the basic sum assured.", source: 'www.licindia.in' },
    { Mid: 14, Pid: 11, name: 'LIC Jeevan Lakshya', description: "Benefits\n\n    LIC's Jeevan Lakshya is a participating non-linked plan which offers a combination of protection and savings. \n    \u2022   Mini. & Maxi Age at Entry:\t18 to 50 years (Completed)\n\n    \u2022   Maximum Age at Maturity:\t65 years\n\n    \u2022   Policy term\t13 to 25 years.\n\n    \u2022   Minimum S.A. -\tRs.100,000/-\n\n    \u2022   Maximum S.A. -\tNo Limit.\n\n    \u2022   Modes Allowed -\tYearly, Half Yearly, Quarterly, Monthly( ECS, & SSS)\n\n    \u2022   Surrender & Policy Loan: -\tAvailable\n\n    \u2022   Rider:\tD.A.B. up to 1 crore & Term Rider up to 25 lacs Allowed\n\n    \u2022   Age Proof: -\tStandard & all non-std proof accepted.\n\n    \u2022   Non-medical scheme: -\tAll non medical schemes allowed.\n\n    \u2022   Female: -\tAll categories allowed/ eligible.\n\n    \u2022   back dating:\tAllowed with lean period benefit.\n\n    \u2022   Foreclosure:-\tNot for fully paid-up & in-force pols even if default of loan interest.\n\n    \u2022   No change for:\tGrace period, Paid value & assignment/ nomination.\n\n    \u2022   Revival period:\t2 years from FUP\n\n    \u2022   Mode discount\tYly 2% and Hly 1%\n\n    \u2022   Large S A Discount\tup to 190,000:\tNIL\n\n    200,000 to 490,000\tRs. 2 per 1000\t500,000 & above\tRs. 3 per 1000", source: 'www.licindia.in' },
    { Mid: 15, Pid: 11, name: 'LIC Jeevan Pragati', description: "LIC's Jeevan Pragati Plan is a non-linked, with - profits plan which offers a combination of protection and savings. \n    \u2022   Minimum Age at entry :\t12 years (completed)\n\n    \u2022   Maximum Entry Age :\t45 years (nearer birthday)\n\n    \u2022   Minimum Policy Term :\t12 years\n\n    \u2022   Maximum Policy Term  :\t20 years\n\n    \u2022   Maximum Policy Term  :\t20 years\n\n    \u2022   Maximum Age at Maturity:\t65 years\n\n    \u2022   Minimum Basic Sum Assured:\tRs. 1,50,000/-\n\n    \u2022   Maximum B S A :\tNo Limit (M S A in multiple of Rs. 10,000/- only)\n\n    \u2022   Rider:\tOnly DAB rider allowed. ( max. 1 crs)\n\n    \u2022   Age Proof: -\tStd. or non-std. proof I allowed.\n\n    \u2022   Female:-\tA1 A2 only allowed.\n\n    \u2022   Non-medical scheme.\tNMG NMS NM Prof allowed.\n\n    \u2022   Actual Sum Assured & SUC:\t125% of Basic Sum Assured.\n\n    \u2022   Medical and MHR:\t125% of Basic Sum Assured\n\n    \u2022   Forms to be used:-\t340, 360 or 300 .\n\n    \u2022   Premium payment mode :\tYly, Hly, Qly & monthly ECS only or through SSS.", source: 'www.licindia.in' },
    { Mid: 16, Pid: 11, name: 'LIC Jeevan Rakshak', description: "Benefits\n    \n    LIC's Jeevan Rakshak Plan is a participating non-linked plan which offers a combination of protection and savings. \n\n    \u2022   Minimum Age at entry:\t8 years (completed) \n\n    \u2022   Maximum Age at entry:\t55 years (nearest birthday) \n\n    \u2022   Minimum Policy Term:\t10 years\n\n    \u2022   Maximum Policy Term:\t20 years\n\n    \u2022   Maxi. Maturity Age for Life Assured:\t70 years (nearest birthday) \n\n    \u2022   Mini. Basic Sum Assured per life:\tRs. 75,000/-\n\n    \u2022   Maxi. Basic Sum Assured per life:\tRs. 200,000/-\n\n    \u2022   The Basic Sum Assured shall be in multiples of Rs. 5000/-\n\n    \u2022   SURRENDER VALUE:\tAllowed but No Loyalty Addition is payable. \n\n    \u2022   LOAN: Available. :\t70% in force policies and 60% for paid-up policies. \n\n    \u2022   Age proof allowed\t:\tAll types allowed. No need for notary in case of SD. \n\n    \u2022   Female categories allowed\t: All Cat allowed ( even w/o husband insurance)Even to widows also. \n\n    \u2022   NM limit applicable:\tStand alone (No clubbing) with normal NM limits). \n\n    \u2022   DAB\t:Only DAB allowed (No EPDB).0.50p per 1000 SA\n", source: 'www.licindia.in' },
    { Mid: 17, Pid: 11, name: 'LIC Jeevan Utkarsh', description: "(A non-linked, with-profit, single premium life insurance plan)\n\n    \n    LIC\u2019s Jeevan Utkarsh offers a combination of protection and savings wherein the risk cover is ten times of Tabular Single premium. \n\n    \u2022   Feature: \n\n    \u2022   Age at entry:6 years LBD\n\n    \u2022   Maxi age at entry47 years NBD\n\n    \u2022   Mini SA 75,000\n\n    \u2022   Maxi SA No limit (depends on income) \n\n    \u2022   Policy term 12 years only. \n\n    \u2022   Premium Mode Single Only. \n\n    \u2022   Assignment Allowed. \n\n    \u2022   Back dating Allowed with No concession. \n\n    \u2022   Age Proof Standard only allowed. \n\n    \u2022   Female categories A- 1,2,3, and B- 1,2 allowed. \n\n    \u2022   Non-medical: Age 18 to 35 standalone 10 lakh SUC and all other usual NM Applicable(No NM for Major Students). \n\n    \u2022   Loan after 3 months of DOC allowed 90% of SV. \n\n    \u2022   Surrender Value 1st Year= 70% of premium paid thereafter 90% of premium paid. \n\n    \u2022   Business Insurance Only allowed for Employee employer scheme. \n\n    \u2022   NRI & FNIO: Group III to V allowed. Minor & housewife: Gr IV & V only. \n\n    \u2022   Riders- Accident Death and Disability Available from inception only. \n\n    \u2022   T.P. 9.10 per 1000 SA, T.P. 13.65 per 1000 SA (Police, Naval & Military) \n\n    \u2022   Other highlights: \n\n    \u2022   Tax relief under IT Act sec 80 C\n\n    \u2022   Maturity Tax free under IT Act sec 10(10D)\n", source: 'www.licindia.in' },
    { Mid: 18, Pid: 11, name: 'LIC New Endowment Plan', description: "LIC's New Endowment Plan is a participating non-linked plan which offers an attractive combination of protection and saving features.\n \n     FEATURES: \n\n     \u2022    Minimum Age at Entry -\t8 years last birthday. \n\n     \u2022    Maximum Age at Entry -\t55 years\n\n     \u2022    Maximum Maturity Age -\t75 years\n\n     \u2022    Minimum term-\t12 year\n\n     \u2022    Maximum term-\t35 years\n\n     \u2022    Minimum S.A. -\tRs. 100,000/-\n\n     \u2022    Maximum S.A. -\tNo Limit (Depending upon Income) \n\n     \u2022    Modes Allowed -\tYearly, Half Yearly, Quarterly, Monthly (NACH & SSS) \n\n     \u2022    Rider:\tD.A.B. EPDB, TR & CIR Allowed\n\n     \u2022    Maximum D.A.B.: -\t100 lakhs. \n\n     \u2022    Age Proof: -\tStd. or non-std. proof allowed. \n\n     \u2022    Female\tA & B both Allowed. \n\n     \u2022    Non-medical scheme.\tN.M.G., N.M.S. NM professional , NRI, FNIO Gr 5 allowed. \n\n     \u2022    Mode discount\tYly 2% and Hly 1%\n\n     \u2022    Large S A Discount\tup to 195,000:\tNIL\n\n     \u2022    200,000 to 495,000\t2% of BSA\n\n     \u2022    500,000 & above\t3% of BSA\n\n     \u2022    Foreclosure:-\tNot for fully paid-up and in-force policies even if there is default of loan interest. \n\n     \u2022    No change for:\tback dating, grace period, Paid value and assignment/ nomination. \n\n     \u2022    Revival period:\t2 years from FUP\n\n     \u2022    Surrender:\tThe Higher of GSV and Special Surrender Value payable. \n", source: 'www.licindia.in' },
    { Mid: 19, Pid: 11, name: 'LIC Single Premium Endowment Plan', description: "LIC's Single Premium Endowment Plan is a participating non-linked savings cum protection plan, where premium is paid in lump sum at the outset of the policy.\n \n    FEATURES:\n    \u2022\tMinimum Age at Entry: -\t90 days. Completed\n\n    \u2022\tMaximum Age at Entry -\t65 years NBD\n\n    \u2022\tMaximum Maturity Age -\t75 years\n\n    \u2022\tMini Age at Maturity: -\t18 years.\n\n    \u2022\tMinimum term-\t10 year\n\n    \u2022\tMaximum term-\t25 year\n\n    \u2022\tMinimum S.A. -\tRs. 50,000/-\n\n    \u2022\tMaximum S.A. -\tNo Limit (Depending upon Income)\n\n    \u2022\tModes Allowed -\tSingle only\n\n    \u2022\tHigh S A rebate\tAvailable.\n\n    \u2022\tSurrender:\tAllowed any time.\t1st year 70% of SP + vested Bonus 2nd year 90% of SP+ Vested Bonus\n\n    \u2022\tPolicy Loan: -\tAvailable.\n\n    \u2022\tBack dating: -\tAllowed.\n\n    \u2022\tASA\tSum Assured less premium paid.\n\n    \u2022\tAge Proof: -\tStd. or non-std. proof allowed.\n\n    \u2022\tFemale:\tAll Category Allowed.\n\n    \u2022\tNon-Medical Scheme:\t NMG NMS NM Prof allowed.", source: 'www.licindia.in' },
    { Mid: 20, Pid: 11, name: 'LIC Limited Premium Endowment Plan', description: "\n    Benefits\n    LIC's Limited Premium Endowment Plan is a participating non-linked plan which offers a combination of protection and savings. This plan provides financial support for the family in case of unfortunate death of the policyholder any time before maturity and a lump sum amount at the time of maturity for the surviving policyholder. This plan also takes care of liquidity needs through its loan facility. \n\n    \n    1.Benefits:\n    \n    Death benefit: \n\n     In case of death during the policy term, provided all due premiums have been paid, Death benefit, defined as sum of \"Sum Assured on Death\", vested Simple Reversionary Bonuses and Final Additional bonus, if any, shall be payable. Where, \"Sum Assured on Death\" is defined as the highest of 10 times of annualised premium or Guaranteed Sum Assured on Maturity i.e. Basic Sum Assured or Absolute amount assured to be paid on death i.e. 125% of Basic Sum Assured . This death benefit shall not be less than 105% of all the premiums paid as on date of death. \n\n    \n    Premiums referred above exclude service tax, extra premium and rider premium(s), if any. \n\n    \n    Maturity Benefit: \n    \"Sum Assured on Maturity\" equal to Basic Sum Assured, along with vested Simple Reversionary bonuses and Final Additional bonus, if any, shall be payable in lump sum on survival to the end of the policy term provided all due premiums have been paid. \n\n    \n    Participation in Profits: The policy shall participate in profits of the Corporation and shall be entitled to receive Simple Reversionary Bonuses declared as per the experience of the Corporation, provided the policy is in full force. \n\n    \n    Final (Additional) Bonus may also be declared under the policy in the year when the policy results into a claim either by death or maturity. \n\n    \n    2.Optional Benefit:\n    \n    The policyholder has an option of availing the following Rider benefit(s): \n\n    \n        LIC\u2019s Accidental Death and Disability Benefit Rider (UIN: 512B209V01)\n        LIC\u2019s New Term Assurance Rider (UIN: 512B210V01)\n    \n    Rider sum assured cannot exceed the basic sum assured. \n", source: 'www.licindia.in' },
    { Mid: 21, Pid: 11, name: 'LIC New Jeevan Anand', description: "Benefits\n\n    LIC's New Jeevan Anand Plan is a participating non-linked plan which offers an attractive combination of protection and savings. \n \n     FEATURES:\n    \u2022\tMinimum Age at Entry -\t18 years Completed\n\n    \u2022\tMaximum Age at Entry -\t50 years (nbd) \n\n    \u2022\tTerm  - \t15 to 35 years. \n\n    \u2022\tMax  Maturity age\t - 75 years. \n\n    \u2022\tMinimum S.A. -\tRs. 100,000/- and in multiple of 5000\n\n    \u2022\tMaximum S.A. -\tNo Limit (Depending upon Income) \n\n    \u2022\tRider -\tDAB, TR, CIR allowed. \n\n    \u2022\tModes Allowed -\tYearly, Half Yearly, Quarterly, Monthly (ECS & SSS) \n\n    \u2022\tAge Proof-\tStandard or non-standard proof allowed. \n\n    \u2022\tFemale-\tCategory A& B both Allowed. \n\n    \u2022\tNon-medical scheme:\tN.M.G., N.M.S. NM professional , NRI, FNIO Gr 5 allowed. \n\n    \u2022\tSurrender-Allowed at any time till death. \n\n    \u2022\tPolicy Loan:\tAnytime available before or after PPT. \n\n    \u2022\tMode discount\tYly 2% and Hly 1%\n\n    \u2022\tLarge S A Discount\tup to 195,000:\tNIL\n\n    \u2022\t200,000 to 495,000\t1.5% of BSA\n\n    \u2022\t500,000 to 995,000\t2.5% of BSA\n\n    \u2022\t10 Lacs and above\t3% of BSA\n\n    \u2022\tNo change for:\tback dating, grace period, Paid value & assignment/ nomination. \n\n    \u2022\tRevival period:\t2 years from FUP\n\n    \u2022\tSurrender:\tThe Higher of G.S. V. and Special Surrender Value payable. \n", source: 'www.licindia.in' },
    { Mid: 22, Pid: 12, name: 'LIC Jeevan Tarun', description: "Benefits\n\n    LIC's JEEVAN TARUN is a participating non-linked limited premium payment plan which offers an attractive combination of protection and saving features for children. \n\n   \u2022\tMini. & Maxi Age at Entry:\t90 days to 12 years (Completed) \n\n   \u2022\tMaximum Age at Maturity:\t25 years\n\n   \u2022\tPolicy term\t25 \u2013 age at entry years. \n\n   \u2022\tPPT\t20 \u2013 age at entry years. \n\n   \u2022\tMinimum S.A. -\tRs.75,000/-\n\n   \u2022\tMaximum S.A. -\tNo Limit. \n\n   \u2022\tModes Allowed -\tYearly, Half Yearly, Quarterly, Monthly( ECS, & SSS) \n\n   \u2022\tSurrender & Policy Loan: -\tAvailable\n\n   \u2022\tRider:\tTerm Rider up to 25 lacs Allowed\n\n   \u2022\tAge Proof: -\tStandard proof accepted. \n\n   \u2022\tNon-medical scheme: -\tAll non medical schemes allowed. \n\n   \u2022\tback dating:\tAllowed with lean period benefit. \n\n   \u2022\tForeclosure:-\tNot for fully paid-up & in-force pols even if default of loan interest. \n\n   \u2022\tNo change for:\tGrace period, Paid value & assignment/ nomination. \n\n   \u2022\tRevival period:\t2 years from FUP\n\n   \u2022\tMode discount\tYly 2% and Hly 1%\n\n   \u2022\tRisk cover\tfrom age 8 or 2 years from DOC WHICHEVER IS EARLIER\n", source: 'www.licindia.in' },
    { Mid: 23, Pid: 12, name: "LIC NEW CHILDREN'S MONEY BACK PLAN", description: "LIC's New Children\u2019s Money Back Plan is a participating non-linked money back plan. This plan is specially designed to meet the educational, marriage and other needs of growing children through Survival Benefits\n\n    \n    \u2022\tMinimum & Maxi Age at Entry -\t0 to 12 years (Completed) Maximum Age at\n \n    \u2022\tMaturity\t25 yrsMinimum S.A. -\tRs.100,000/-\n\n    \u2022\tMaximum S.A. -\tNo Limit. \n\n    \u2022\tModes Allowed -\tYearly, Half Yearly, Quarterly, Monthly( ECS, & SSS) \n\n    \u2022\tMode discount\tYly 2% and Hly 1%\n\n    \u2022\tPolicy & Premium paying term:-\t25 years Minus age at entry. \n\n    \u2022\tPolicy Loan: -\tAvailable\n\n    \u2022\tRider:\tPWB Allowed\n\n    \u2022\tAge Proof: -\tOnly Standard proof accepted. \n\n    \u2022\tNon-medical scheme: -\tAll non medical schemes for both (PWB) allowed. \n\n    \u2022\tNRI\tAllowed Sub to eligibility. \n\n    \u2022\tForeclosure:-\tNot for fully paid-up & in-force pols even if default of loan interest. \n\n    \u2022\tBack dating\twith Lean Month benefit allowed. \n\n    \u2022\tNo Change\tgrace period, Paid value and assignment/ nomination. \n\n    \u2022\tRevival period:\t2 years from FUP\n\n    \u2022\tLarge S A Discount\tup to 195,000:\tNIL\n\n    \u2022\t200,000 to 490,000\tRs.2  per 1000\t500,000 & above\tRs.3 per 1000\n", source: 'www.licindia.in' },
    { Mid: 24, Pid: 12, name: 'LIC NEW BIMA BACHAT', description: "Benefits\n\n    Policy Document attached file is in PDF Document Format\n\n    \n    LIC's New Bima Bachat is a participating non-linked savings cum protection plan, where premium is paid in lump sum at the outset of the policy. \n \n    \u2022\tMinimum Age at Entry -\t15 years completed. \n\n    \u2022\tMaximum age at entry -\t66 for T 9, 63 for T12 and 60 yrs for T15\n\n    \u2022\tMaximum Maturity Age -\t75 years nbd\n\n    \u2022\tTerm allowed\t9, 12 and 15 years. \n\n    \u2022\tMini.S.A. -\tRs.35,000 for T9, Rs.50,000 for T12 & Rs.70,000 for T15. \n\n    \u2022\tMaximum S.A. -\tNo Limit (Depending upon Income) \n\n    \u2022\tModes Allowed -\tOnly Single. \n\n    \u2022\tPolicy Loan:\tAvailable\n\n    \u2022\tNon Medical:\tAllowed as per NM scheme. \n\n    \u2022\tMedical:\tAs per the age and Sum proposed. \n\n    \u2022\tASA\tSum Assured less premium paid.\tNo stand alone. \n\n    \u2022\tFemale: -\tAll categories allowed\n\n    \u2022\tAge Proof: -\tAll categories allowed\n\n    \u2022\tSurrender\tHigher of GSV or SSV payable\n\n    \u2022\tNo change for:\tBack dating, Paid value and assignment/ nomination. \n\n    \u2022\tHigh S.A. Rebate:-\tApplicable as per SA\n", source: 'www.licindia.in' },
    { Mid: 25, Pid: 12, name: 'LIC NEW MONEY BACK PLAN - 25 YEARS', description: "Benefits\n\n    \n    LIC's New Money Back Plan-25 years is a participating non-linked plan which offers an attractive combination of protection against death throughout the term of the plan along with the periodic payment on survival at specified durations during the term.\n\n    \u2022\tMinimum Age at Entry -\t13 years (Completed) \n\n    \u2022\tMaximum Age at Entry-\t50 yrs for T.820 & 45yrs for T.821\n\n    \u2022\tMinimum S.A. -\tRs.100,000/-\n\n    \u2022\tMaximum S.A. -\tNo Limit. \n\n    \u2022\tModes Allowed -\tYearly, Half Yearly, Quarterly, Monthly( ECS, & SSS) \n\n    \u2022\tMode discount\tYly 2% and Hly 1%\n\n    \u2022\tPremium paying term:-\t15 years for T 820 and 20 year for T 821\n\n    \u2022\tLarge S A Discount\tup to 195,000:\tNIL\n\n    \u2022\t200,000 to 495,000  Rs.2  per 1000\t500,000 & above\tRs.3 per 1000\n\n    \u2022\tPolicy Loan: -\tAvailable\n\n    \u2022\tRider:\tD.A.B. Allowed\n\n    \u2022\tAge Proof: -\tStandard & non-std proof accepted. \n\n    \u2022\tNon-medical scheme: -\tN.M.G., N.M.S. NM professional , NRI, FNIO Gr 5 allowed. \n\n    \u2022\tASA\t125% of BSA. \n\n    \u2022\tFemale: -\tAll Categories eligible. \n\n    \u2022\tForeclosure:-\tNot for fully paid-up & in-force pols even if default of loan interest. \n\n    \u2022\tNo change for:\tback dating, grace period, Paid value and assignment/ nomination. \n\n    \u2022\tRevival period:\t2 years from FUP\n", source: 'www.licindia.in' },
    { Mid: 26, Pid: 12, name: 'LIC NEW MONEY BACK PLAN - 20 YEARS', description: "Benefits\n\n    \n    LIC's New Money Back Plan-20 years is a participating non-linked plan which offers an attractive combination of protection against death throughout the term of the plan along with the periodic payment on survival at specified durations during the term.\n \n    \u2022\tMinimum Age at Entry -\t13 years (Completed)\n\n    \u2022\tMaximum Age at Entry-\t50 yrs for T.820 & 45yrs for T.821\n\n    \u2022\tMinimum S.A. -\tRs.100,000/-\n\n    \u2022\tMaximum S.A. -\tNo Limit. \n\n    \u2022\tModes Allowed -\tYearly, Half Yearly, Quarterly, Monthly( ECS, & SSS) \n\n    \u2022\tMode discount\tYly 2% and Hly 1%\n\n    \u2022\tPremium paying term:-\t15 years for T 820 and 20 year for T 821\n\n    \u2022\tLarge S A Discount\tup to 195,000:\tNIL\n\n    \u2022\t200,000 to 495,000  Rs.2  per 1000\t500,000 & above\tRs.3 per 1000\n\n    \u2022\tPolicy Loan: -\tAvailable\n\n    \u2022\tRider:\tD.A.B. Allowed\n\n    \u2022\tAge Proof: -\tStandard & non-std proof accepted. \n\n    \u2022\tNon-medical scheme: -\tN.M.G., N.M.S. NM professional , NRI, FNIO Gr 5 allowed. \n\n    \u2022\tASA\t125% of BSA. \n\n    \u2022\tFemale: -\tAll Categories eligible. \n\n    \u2022\tForeclosure:-\tNot for fully paid-up & in-force pols even if default of loan interest. \n\n    \u2022\tNo change for:\tback dating, grace period, Paid value and assignment/ nomination. \n\n    \u2022\tRevival period:\t2 years from FUP\n", source: 'www.licindia.in' },
    { Mid: 27, Pid: 13, name: 'LIC New Critical Illness Benefit Rider', description: "LIC\u2019s New Critical Illness Benefit Rider is a non-linked rider which will reduce the financial burden in case the Life Assured is diagnosed as suffering from any of the pre-specified critical illnesses.\n \n    Cancer Cover\n\n    FEATURES: \n    \u2022\tMinimum Age at Entry - 20 years completed. \n\n    \u2022\tMaximum Age at Entry - 65 nbd. \n\n    \u2022\tMini Policy term: - 10 Years. \n\n    \u2022\tMaximum policy term: - 30 Years. \n\n    \u2022\tMinimum Cover till age 50 years. \n\n    \u2022\tMini Premium: - Rs.2400/- p.a. for all modes. \n\n    \u2022\tMaximum Cover till age: - 75 Years. \n\n    \u2022\tPremium Rates: - Separate for Male and female lives. \n\n    \u2022\tMinimum S.A. - Rs. 10 lakhs\n\n    \u2022\tMaximum S.A. -  Rs. 50 lakhs. (including all CIR, Cancer Cover from LIC and other Indian insurance Cos.) \n\n    \u2022\tModes Allowed - Yearly, Half Yearly (2% loading) \n\n    \u2022\tAge Proof: - Only Std. proof allowed. \n\n    \u2022\tFemale: - All Categories eligible. (even to pregnant female irrespective of duration) A 1 & A2 = 50 lakhs, A 3, B 1 and B 2 = 25 lacs. \n\n    \u2022\tNon-medical scheme. Only Non-Medical. Stand Alone SUC. \n\n    \u2022\tUnderwriting No financial underwriting. \n\n    \u2022\tForms to be used: - Separate form No URN HPF-1\n\n    \u2022\tWaiting period: - 180 days from date of issue of policy or date of revival. \n\n    \u2022\tPolicy Loan: -not available. \n\n    \u2022\tNRI and FNIO: - not allowed. \n\n    \u2022\tKey man and partnership: - Not allowed\n\n    \u2022\tEmployee Employer: -Allowed\n\n    \u2022\tBack Dating: -Not allowed. \n\n    \u2022\tGrace Period: -ONLY 30 days grace period. \n\n    \u2022\tSurvival period: -7 days from date of diagnosis for applicable benefit payment. \n\n    \u2022\tExclusions: Any pre-existing cancer conditions. \n\n    \u2022\tRevival period: - 2 years from FUP\n\n    \u2022\tCooling off: -Allowed as per IRDAI rules. \n\n    \u2022\tTaxes: -Govt Taxes as applicable from time to time. \n\n    \u2022\tCLAIM PAYMENT:-by Respective LIC branch ONLY. No TPA involved. \n", source: 'www.licindia.in' },
    { Mid: 28, Pid: 14, name: 'LIC Anmol Jeevan II', description: "It is a protection plan which provides financial protection to the insured's family in case of his/her unfortunate demise.\n\n    FEATURES:\n\n    Minimum Age at Entry -\t18 years Completed\n\n    Maximum Age at Entry -\t55 years near birthday. \n\n    Policy Term:-\t5 TO 25 Years. \n\n    Minimum S.A.:-\tRs. 600,000/\n -\n    Maximum S.A.:-\tRs.24,00,000/-\n\n    Maximum age at Maturity:-\t65 years. \n\n    Policy Loan-\tNot Available\n\n    Mode of Premium:\tYly & Hly. \n\n    Non Medical:\tNot allowed. \n\n    Age proof:\tStandard only. \n\n    Days of Grace:\t30 days only for risk cover\n\n    31 to 60 days with late fees. \n\n    Hly mode Additional 2% more.\n    \u00B7\tRiders Not allowed Revival 2\n    \u00B7\tyears from FUP\n    \u00B7\tClaim concession Not Available\n\n    BENEFITS:\n    1)Maturity Benefit: On maturity payment =\tNIL\n\n    2)Death Benefit:\n    a)\tNatural OR Accidental Death: Full Sum Assured.\n    \u2022   Minimum age at entry : 18 years (completed) \n\n    \u2022   Maximum age at entry : 60 years (NBD)\n\n    \u2022\tMaximum age at maturity : 70 years (NBD) \n\n    \u2022\tMinimum Policy Term : 5 years\n\n    \u2022\tMaximum Policy term : 35 years\n\n    \u2022\tMinimum Sum Assured: Rs.25,00,000/-\n\n    \u2022\tMaximum Sum Assured : No Upper Limit (Policies will be issued in multiples of Rs.100,000/-)\n\n    \u2022\tMode of premium payment : Yearly, Half-yearly\n\n    \u2022\tHalf yearly mode : additional 2% of T.P. \n\n    \u2022\tDays of Grace: :30 days only for risk cover:31 to 60 days with late fee. \n\n    \u2022\tClaim concession : Not Available\n\n    \u2022\tloan & surrender :Not Available\n\n    \u2022\tFemale : Category A& B both Allowed. \n\n    \u2022\tRiders :Not allowed\n\n    \u2022\tRevival :2 years from FUP\n", source: 'www.licindia.in' },
    { Mid: 29, Pid: 14, name: 'LIC Amulya Jeevan II', description: "It is a protection plan which provides financial protection to the insured\u2019s family in case of his/her unfortunate demise.\n\n    FEATURES:\n    \u2022\tMinimum age at entry\t: 18 years (completed) \n\n    \u2022\tMaximum age at entry\t: 60 years (NBD) \n\n    \u2022\tMaximum age at maturity\t: 70 years (NBD) \n\n    \u2022\tMinimum Policy Term\t: 5 years\n\n    \u2022\tMaximum Policy term\t: 35 years\n\n    \u2022\tMinimum Sum Assured\t: Rs.25,00,000/-\n\n    \u2022\tMaximum Sum Assured\t: No Upper Limit\t(Policies will be issued in multiples of Rs.100,000/-)\n\n    \u2022\tMode of premium payment\t: Yearly, Half-yearly\n\n    \u2022\tHalf yearly mode\t: additional 2% of T.P. \n\n    \u2022\tDays of Grace:\t:30 days only for risk cover:31 to 60 days with late fee. \n\n    \u2022\tClaim concession\t: Not Available\n\n    \u2022\tloan & surrender\t:Not Available\n\n    \u2022\tFemale\t: Category A& B both Allowed. \n\n    \u2022\tRiders\t:Not allowed\n\n    \u2022\tRevival\t:2 years from FUP\n", source: 'www.licindia.in' },
    { Mid: 30, Pid: 14, name: 'LIC NEW TERM ASSURANCE RIDER', description: "Benefits\n    \n    LIC's New Term Assurance Rider provides for life cover in case of unfortunate death of the insured during the cover period. It can be attached with a basic policy to provide add-on benefit at a nominal cost. This rider shall only be attached with Non-Linked plans at the inception of the base policy.\n\n    \n    1.Benefits:\n    \n    Death Benefit: In case of unfortunate death of the life assured during the term of the Rider, an amount equal to the Term Assurance Rider Sum Assured shall be payable.\n\n    \n    Maturity Benefit: On survival to the end of the term of the Rider, nothing shall be payable", source: 'www.licindia.in' },
    { Mid: 31, Pid: 15, name: 'LIC Jeevan Umang', description: "LIC\u2019s Jeevan Umang plan offers a combination of income and protection to your family.\n\n    Lives eligible:\tMinor lives, Major student, Major Males & females allowed. \n\n    Age proof:\tBoth Std and Non Std allowed. \n\n    NRI & FNIO:\tAllowed to Gr III to V only. \n\n    Business Insurance:\tOnly E & E allowed. No key man/partnership. \n\n    Risk cover:\tAge below 8 = 2 years from DOC & for age above 8 = Immediate. \n\n    Large SA rebate:\t2 to 4.75 lakhs\t= Nil\n\n    5 to 9.75 lakhs\t=1.25% of BSA\n\n    10 to24.75 lakhs\t= 1.75% of BSA\n\n    Above 25 lakhs\t=2.00% of BSA\n\n    \u2022\tMaturity Paid up S A is less than 2 lakhs\t=\tNo SB due payable.\n    \u2022\tMaturity paid up S A is more than 2 lakhs =\tSB of 8% = to maturity paid up payable.\n    \u2022\tFor self\t: Guaranteed pension with liquidity.\n    \u2022\tIdeal forBusinessman. Doctors.\n    \u2022\tIT professional. service class.\n    \u2022\tFor Girl Child:Third generation plan.\n    \u2022\tFor wife\t: Greatest expression of love.\n    \u2022\tFor Son: secure future and Creation of wealth and gift to grand child.\n    \u2022\tFor any close relative : greatest gift without litigation.", source: 'www.licindia.in' }
];
//# sourceMappingURL=lic-mock.js.map

/***/ }),

/***/ "../../../../../src/app/services/lic/lic.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lic_mock__ = __webpack_require__("../../../../../src/app/services/lic/lic-mock.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LicService = (function () {
    function LicService() {
    }
    LicService.prototype.getpolicies = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__lic_mock__["a" /* Policies */]);
    };
    LicService.prototype.getpoliciesD = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__lic_mock__["b" /* PoliciesD */]);
    };
    LicService.prototype.getpolicy = function (id) {
        return this.getpoliciesD()
            .then(function (policies) { return policies.find(function (policy) { return policy.Mid === id; }); });
    };
    return LicService;
}());
LicService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], LicService);

//# sourceMappingURL=lic.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/lic/lic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LIC */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LicPolicy; });
var LIC = (function () {
    function LIC() {
    }
    return LIC;
}());

var LicPolicy = (function () {
    function LicPolicy() {
    }
    return LicPolicy;
}());

//# sourceMappingURL=lic.js.map

/***/ }),

/***/ "../../../../../src/app/services/mail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailService = (function () {
    function MailService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    MailService.prototype.sendmail = function (user) {
        console.log(user);
        var url = '/api/user';
        this.http.post(url, user).subscribe(function (res) {
            console.log(res);
        });
    };
    return MailService;
}());
MailService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MailService);

var _a;
//# sourceMappingURL=mail.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map