webpackJsonp([1,4],{

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_tickets_mock__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TicketService = (function () {
    function TicketService() {
        this.miVariableTicketGlobal = "Soy una variable global";
    }
    TicketService.prototype.getTickets = function () {
        return __WEBPACK_IMPORTED_MODULE_1__mocks_tickets_mock__["a" /* TICKETS */];
    };
    TicketService.prototype.getVariableGlobal = function () {
        return this.miVariableTicketGlobal;
    };
    TicketService.prototype.getTicket = function (id) {
        var ticket = __WEBPACK_IMPORTED_MODULE_1__mocks_tickets_mock__["a" /* TICKETS */].find(function (x) { return x.id == id; });
        return ticket;
    };
    TicketService.prototype.getTicketObserver = function (id) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            setTimeout(function () {
                observer.next(__WEBPACK_IMPORTED_MODULE_1__mocks_tickets_mock__["a" /* TICKETS */].find(function (ticket) { return ticket.id == id; }));
            }, 300);
        });
    };
    TicketService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], TicketService);
    return TicketService;
}());
//# sourceMappingURL=ticket.service.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ticket_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_counter__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(206);
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
    function AppComponent(ticketService, fb, store, _ngZone, router, af) {
        this.ticketService = ticketService;
        this.fb = fb;
        this.store = store;
        this._ngZone = _ngZone;
        this.router = router;
        this.af = af;
        this.title = 'app works!';
        this.cantidad = 5;
        this.factor = 1;
        this.progress = 0;
        this.ticketFirebase = af.database.list('/ticket');
        /*this.ticketFirebase.push({
          'id': 1, 'titulo': 'no me funciona la impresora', 'estado': 'in progress'
        });
  
        this.ticketFirebase.push({
          'id': 2, 'titulo': 'no me funciona la computadora', 'estado': 'finish'
        });
  
        this.ticketFirebase.push({
          'id': 3, 'titulo': 'no me funciona el celular', 'estado': 'in progress'
        });
  
        this.ticketFirebase.push({
          'id': 4, 'titulo': 'no me funciona una lampara', 'estado': 'really'
        });*/
        this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AuthProviders */].Google,
            method: __WEBPACK_IMPORTED_MODULE_6_angularfire2__["b" /* AuthMethods */].Popup
        });
        this.counter = store.select('counter');
        this.tickets = ticketService.getTickets();
        this.myForm = fb.group({
            'name': ['Andrés']
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.variableAenviar = 'Soy un string, enviado al componente hijo';
    };
    AppComponent.prototype.funcionParaRecibirVariable = function (_variableRecibida) {
        this.variableRecibidaDelHijo = _variableRecibida;
    };
    AppComponent.prototype.onSubmit = function (value) {
        console.log("El formulario tiene");
        console.log(value);
    };
    AppComponent.prototype.increment = function () {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__services_counter__["b" /* INCREMENT */] });
    };
    AppComponent.prototype.decrement = function () {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__services_counter__["c" /* DECREMENT */] });
    };
    AppComponent.prototype.reset = function () {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_4__services_counter__["d" /* RESET */] });
    };
    AppComponent.prototype.verTicket = function (id) {
        this.router.navigate(['/ticket', id]);
    };
    AppComponent.prototype.updateTicket = function (key) {
        console.log(key);
        this.ticketFirebase.update(key, { estado: 'in progress' });
    };
    AppComponent.prototype.removeTicket = function (key) {
        console.log(key);
        this.ticketFirebase.remove(key);
    };
    AppComponent.prototype.removeAllTicket = function () {
        this.ticketFirebase.remove();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-component',
            template: __webpack_require__(562),
            styles: [__webpack_require__(554)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_ticket_service__["a" /* TicketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_ticket_service__["a" /* TicketService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6_angularfire2__["d" /* AngularFire */]) === 'function' && _f) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'page-not-found',
            template: "\n    <img src=\"http://localhost/COREPUCESD/App/asistencia/public/images/logo2.png\">\n    <a routerLink=\"/\">Go Home</a>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=page.not.found.component.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DECREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RESET; });
/* harmony export (immutable) */ __webpack_exports__["a"] = CounterReducer;
var INCREMENT = 'INCREMENT';
var DECREMENT = 'DECREMENT';
var RESET = 'RESET';
function CounterReducer(state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return 0;
        default:
            return state;
    }
}
//# sourceMappingURL=counter.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ticket_service__ = __webpack_require__(204);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketDetail; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TicketDetail = (function () {
    function TicketDetail(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
    }
    // ngOnInit(){
    //     let id = +this.route.snapshot.params['id'];
    //     this.ticket = this.service.getTicket(id);
    // }
    TicketDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getTicketObserver(this.route.params['id'])
            .subscribe(function (ticket) { return _this.ticket = ticket; });
    };
    TicketDetail = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'ticket-detail',
            template: __webpack_require__(565)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_ticket_service__["a" /* TicketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_ticket_service__["a" /* TicketService */]) === 'function' && _c) || Object])
    ], TicketDetail);
    return TicketDetail;
    var _a, _b, _c;
}());
//# sourceMappingURL=ticket.detail.js.map

/***/ }),

/***/ 358:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 358;


/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(491);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__input_input_component__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__input_output_input_output_component__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pageNotFound_page_not_found_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__init_component__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_conversor_pipe__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_highlight_directive__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_gigant_directive__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_ticket_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngrx_store__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_counter__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__commons_router__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tickets_ticket_detail__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2__ = __webpack_require__(206);
/* unused harmony export firebaseConfig */
/* unused harmony export myFirebaseAuthConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var firebaseConfig = {
    apiKey: "AIzaSyD1AqO_wDaPmXTa6PO28LvKNURFKzocTlQ",
    authDomain: "angular-7d26a.firebaseapp.com",
    databaseURL: "https://angular-7d26a.firebaseio.com",
    storageBucket: "angular-7d26a.appspot.com",
    messagingSenderId: "642869296593"
};
var myFirebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_18_angularfire2__["a" /* AuthProviders */].Google,
    method: __WEBPACK_IMPORTED_MODULE_18_angularfire2__["b" /* AuthMethods */].Popup
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__input_input_component__["a" /* InputComponent */],
                __WEBPACK_IMPORTED_MODULE_6__input_output_input_output_component__["a" /* InputOutputComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_conversor_pipe__["a" /* ConversorPipe */],
                __WEBPACK_IMPORTED_MODULE_11__directives_gigant_directive__["a" /* GigantDirective */],
                __WEBPACK_IMPORTED_MODULE_10__directives_highlight_directive__["a" /* HighlightDirective */],
                __WEBPACK_IMPORTED_MODULE_7__pageNotFound_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_8__init_component__["a" /* InitComponent */],
                __WEBPACK_IMPORTED_MODULE_17__tickets_ticket_detail__["a" /* TicketDetail */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__ngrx_store__["a" /* StoreModule */].provideStore({ counter: __WEBPACK_IMPORTED_MODULE_14__services_counter__["a" /* CounterReducer */] }),
                __WEBPACK_IMPORTED_MODULE_15__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__commons_router__["a" /* APPROUTER */]),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2__["c" /* AngularFireModule */].initializeApp(firebaseConfig, myFirebaseAuthConfig)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_ticket_service__["a" /* TicketService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__init_component__["a" /* InitComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pageNotFound_page_not_found_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tickets_ticket_detail__ = __webpack_require__(326);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APPROUTER; });



var APPROUTER = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */] },
    { path: 'ticket/:id', component: __WEBPACK_IMPORTED_MODULE_2__tickets_ticket_detail__["a" /* TicketDetail */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__pageNotFound_page_not_found_component__["a" /* PageNotFoundComponent */] },
];
//# sourceMappingURL=router.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GigantDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GigantDirective = (function () {
    function GigantDirective(el) {
        el.nativeElement.style.fontSize = "50px";
    }
    GigantDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Directive */])({ selector: '[gigant]' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === 'function' && _a) || Object])
    ], GigantDirective);
    return GigantDirective;
    var _a;
}());
//# sourceMappingURL=gigant.directive.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = (function () {
    function HighlightDirective(el) {
        el.nativeElement.style.backgroundColor = "yellow";
    }
    HighlightDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Directive */])({ selector: '[myHighlight]' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === 'function' && _a) || Object])
    ], HighlightDirective);
    return HighlightDirective;
    var _a;
}());
//# sourceMappingURL=highlight.directive.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InitComponent = (function () {
    function InitComponent() {
    }
    InitComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'init-component',
            template: "\n        <router-outlet></router-outlet>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], InitComponent);
    return InitComponent;
}());
//# sourceMappingURL=init.component.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputOutputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputOutputComponent = (function () {
    function InputOutputComponent() {
        this.funcionParaRecibirVariable = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* EventEmitter */]();
    }
    InputOutputComponent.prototype.ngOnInit = function () {
        // console.log(this.variableRecibida);
    };
    InputOutputComponent.prototype.enviarMensajeAlPadre = function () {
        this.funcionParaRecibirVariable.emit('Soy un mensaje para el componente padre');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', String)
    ], InputOutputComponent.prototype, "variableRecibida", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(), 
        __metadata('design:type', Object)
    ], InputOutputComponent.prototype, "funcionParaRecibirVariable", void 0);
    InputOutputComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-input-output',
            template: __webpack_require__(563),
            styles: [__webpack_require__(555)]
        }), 
        __metadata('design:paramtypes', [])
    ], InputOutputComponent);
    return InputOutputComponent;
}());
//# sourceMappingURL=input-output.component.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputComponent = (function () {
    // @Input() voto:string;
    // @Output() addVoto = new EventEmitter<string>();
    function InputComponent() {
        console.log("Estoy entrando...");
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', String)
    ], InputComponent.prototype, "variableRecibida", void 0);
    InputComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'input-component',
            template: __webpack_require__(564),
            styles: [__webpack_require__(556)]
        }), 
        __metadata('design:paramtypes', [])
    ], InputComponent);
    return InputComponent;
}());
//# sourceMappingURL=input.component.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversorPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConversorPipe = (function () {
    function ConversorPipe() {
    }
    ConversorPipe.prototype.transform = function (value, exponent) {
        var exp = parseFloat(exponent);
        return value * (isNaN(exp) ? 1 : exp);
    };
    ConversorPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Pipe */])({ name: 'conversorPipe' }), 
        __metadata('design:paramtypes', [])
    ], ConversorPipe);
    return ConversorPipe;
}());
//# sourceMappingURL=conversor.pipe.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TICKETS; });
var TICKETS = [
    { 'id': 1, 'titulo': 'no me funciona la impresora', 'estado': 'in progress' },
    { 'id': 2, 'titulo': 'no me funciona la computadora', 'estado': 'finish' },
    { 'id': 3, 'titulo': 'no me funciona el celular', 'estado': 'in progress' },
    { 'id': 4, 'titulo': 'no me funciona una lampara', 'estado': 'really' }
];
//# sourceMappingURL=tickets.mock.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(96)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(96)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(96)();
// imports


// module
exports.push([module.i, "span{\r\n    font-size: 40px;\r\n    color: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

module.exports = "<h1 gigant myHighlight>\n  {{title}}\n</h1>\n\n<!--<input-component></input-component>-->\n\n<!--<div *ngFor=\"let voto of votos \">\n  <input-component voto=\"{{voto.title}}\" \n  (addVoto)=\"addVoto($event)\"></input-component>\n</div>-->\n\n<!--<h1>{{votacion}}</h1>-->\n\n\n<!--{{variableAenviar}}\n<app-input-output \n(funcionParaRecibirVariable)=\"funcionParaRecibirVariable($event)\"\n\n\n variableRecibida=\"{{variableAenviar}}\"\n>\n\n</app-input-output>-->\n\n\n<h2>Conversor</h2>\n\n<div>Cantidad: <input type=\"text\" [(ngModel)]=\"cantidad\"></div>\n\n<div>1 dolar es : <input type=\"text\" [(ngModel)]=\"factor\"></div>\n\n<p>\n  oh es: {{cantidad | conversorPipe:factor}}\n</p>\n\n\n<ul>\n  <li *ngFor=\"let ticket of ticketFirebase | async\" (click)=\"verTicket(ticket.id)\">\n    <b>Ticket N: {{ticket.id}}</b>\n    <b>Ticket Titulo: {{ticket.titulo}}</b>\n    <span myHighlight>[ {{ticket.estado}} ]</span>\n        <button (click)=\"removeTicket(ticket.$key)\">Remove</button>\n    <button (click)=\"updateTicket(ticket.$key)\">Update</button>\n    <button (click)=\"verTicket(ticket.id)\">Ver</button>\n  </li>\n</ul>\n\n\n<ul>\n  <li *ngFor=\"let ticket of tickets\" (click)=\"verTicket(ticket.id)\">\n    <b>Ticket N: {{ticket.id}}</b>\n    <b>Ticket Titulo: {{ticket.titulo}}</b>\n    <span myHighlight>[ {{ticket.estado}} ]</span>\n\n  </li>\n</ul>\n\n\n<form [formGroup]=\"myForm\" (ngSubmit)=\"myForm.value\">\n  <div>\n    <label for=\"nameInput\">Nombre</label>\n    <input type=\"text\" id=\"nameInput\" \n    placeholder=\"Nombre\" name=\"nombre\" [formControl]=\"myForm.controls['name']\">\n  </div>\n\n  <!--<div>\n    <input type=\"date\" value=\"2017-01-30\" name=\"fecha\" ngModel>\n  </div>-->\n\n  <button type=\"submit\">Enviar</button>\n</form>\n\n\n<button (click)=\"increment()\">Incrementar</button>\n<div>Counter: {{ counter | async }}</div>\n\n<button (click)=\"decrement()\">decrementar</button>\n<button (click)=\"reset()\">reset</button>\n"

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

module.exports = "<p>\n  input-output works! {{variableRecibida}}\n</p>\n\n\n<span (click)=\"enviarMensajeAlPadre()\"> {{ variableRecibida }} </span>"

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports = "<!--<span (click)=\"votar()\">{{voto}}</span>-->\r\n<!--<span>{{voto}}</span>-->\r\n\r\n"

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

module.exports = "<ul>\r\n    <li>\r\n        <b>Ticket N: {{ticket?.id}}</b>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(359);


/***/ })

},[594]);
//# sourceMappingURL=main.bundle.js.map