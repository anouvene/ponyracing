webpackJsonp([1,4],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ws_service__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_interval__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeWhile__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaceService; });
/**
 * Race service
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RaceService = (function () {
    // Inject Http service
    function RaceService(http, wsService) {
        this.http = http;
        this.wsService = wsService;
    }
    // API REST Http
    RaceService.prototype.list = function () {
        // return this.http.get('/api/races?status=PENDING')
        // ...and calling .json() on the response to return data
        // .map((res) => res.json())
        // ...errors if any
        // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        return this.http.get('/api/races?status=PENDING');
    };
    // Bet on pony
    RaceService.prototype.bet = function (raceId, ponyId) {
        // console.log(raceId, ponyId);
        return this.http.post("/api/races/" + raceId + "/bets", { ponyId: ponyId });
    };
    // Get the detail of a race by its ID
    RaceService.prototype.get = function (id) {
        return this.http.get("/api/races/" + id);
    };
    // Cancel "Bet on pony"
    RaceService.prototype.cancelBet = function (raceId) {
        return this.http.delete("/api/races/" + raceId + "/bets");
    };
    // Get Array of PonyWithPositionModel
    RaceService.prototype.live = function (raceId) {
        // return Observable
        //   .interval(1000)
        //   .take(101)
        //   .map(position => {
        //     return [{
        //       id: 1,
        //       name: 'Superb Runner',
        //       color: 'BLUE',
        //       position
        //     }, {
        //       id: 2,
        //       name: 'Awesome Fridge',
        //       color: 'GREEN',
        //       position
        //     }, {
        //       id: 3,
        //       name: 'Great Bottle',
        //       color: 'ORANGE',
        //       position
        //     }, {
        //       id: 4,
        //       name: 'Little Flower',
        //       color: 'YELLOW',
        //       position
        //     }, {
        //       id: 5,
        //       name: 'Nice Rock',
        //       color: 'PURPLE',
        //       position
        //     }];
        //   });
        return this.wsService.connect("/race/" + raceId)
            .takeWhile(function (liveRace) { return liveRace.status !== 'FINISHED'; })
            .map(function (liveRace) { return liveRace.ponies; });
    };
    RaceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ws_service__["a" /* WsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ws_service__["a" /* WsService */]) === 'function' && _b) || Object])
    ], RaceService);
    return RaceService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/race.service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(291);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.baseUrl = 'http://ponyracer.ninja-squad.com';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    HttpService.prototype.get = function (path) {
        this.addJwtTokenIfExists();
        return this.http.get("" + this.baseUrl + path, this.options).map(function (res) { return res.json(); });
    };
    HttpService.prototype.post = function (path, body) {
        this.addJwtTokenIfExists();
        return this.http.post("" + this.baseUrl + path, body, this.options).map(function (res) { return res.json(); });
    };
    // Delete path if calceling the bet
    HttpService.prototype.delete = function (path) {
        this.addJwtTokenIfExists();
        return this.http.delete("" + this.baseUrl + path, this.options);
    };
    HttpService.prototype.addJwtTokenIfExists = function () {
        var value = window.localStorage.getItem('rememberMe');
        if (value) {
            var token = JSON.parse(value).token; // user.token
            this.headers.set('Authorization', "Bearer " + token);
        }
        else {
            this.headers.delete('Authorization');
        }
    };
    HttpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], HttpService);
    return HttpService;
    var _a;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/http.service.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountComponent = (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'pr-account',
            template: __webpack_require__(676),
            styles: [__webpack_require__(653)]
        }), 
        __metadata('design:paramtypes', [])
    ], AccountComponent);
    return AccountComponent;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/account.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_providers_race_service__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BetComponent = (function () {
    function BetComponent(raceService, route) {
        this.raceService = raceService;
        this.route = route;
        this.betFailed = false;
    }
    BetComponent.prototype.ngOnInit = function () {
        var _this = this;
        var raceId = this.route.snapshot.params['raceId'];
        this.raceService.get(raceId)
            .subscribe(function (raceBet) { _this.race = raceBet; _this.raceId = raceId; });
    };
    BetComponent.prototype.betOnPony = function (pony) {
        var _this = this;
        if (this.isPonySelected(pony)) {
            this.raceService.cancelBet(this.race.id).subscribe(function () { return _this.race.betPonyId = null; }, function () { return _this.betFailed = true; });
        }
        else {
            this.raceService.bet(this.race.id, pony.id)
                .subscribe(function (raceBet) { return _this.race = raceBet; }, function () { return _this.betFailed = true; });
        }
    };
    BetComponent.prototype.isPonySelected = function (pony) {
        return pony.id === this.race.betPonyId;
    };
    BetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'pr-bet',
            template: __webpack_require__(678),
            styles: [__webpack_require__(655)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_providers_race_service__["a" /* RaceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_providers_race_service__["a" /* RaceService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], BetComponent);
    return BetComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/bet.component.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_providers_user_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    function HomeComponent(userService) {
        this.userService = userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userEventsSubscription = this.userService.userEvents.subscribe(
        // userData => (userData) ? this.user = userData : this.user = this.userService.retrieveUser()
        function (userData) { return _this.user = userData; });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.userEventsSubscription) {
            this.userEventsSubscription.unsubscribe();
        }
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'pr-home',
            template: __webpack_require__(682),
            styles: [__webpack_require__(659)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_providers_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_providers_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/home.component.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_providers_race_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LiveComponent = (function () {
    function LiveComponent(raceService, route) {
        this.raceService = raceService;
        this.route = route;
        // Array of ponies with position
        this.poniesWithPosition = [];
    }
    LiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        var raceId = this.route.snapshot.params['raceId'];
        // this.positionSubscription = this.raceService.live(raceId).subscribe(res => this.poniesWithPosition = res);
        this.positionSubscription = this.raceService.get(raceId)
            .do(function (race) { return _this.race = race; })
            .filter(function () { return _this.race.status !== 'FINISHED'; })
            .switchMap(function (race) { return _this.raceService.live(race.id); })
            .subscribe(function (poniesLiveRace) {
            _this.poniesWithPosition = poniesLiveRace;
            _this.race.status = 'RUNNING';
        }, function (error) { return _this.error = true; }, function () {
            if (_this.poniesWithPosition !== undefined) {
                _this.race.status = 'FINISHED';
                _this.winners = _this.poniesWithPosition.filter(function (pony) { return pony.position >= 100; });
                _this.betWon = _this.winners.some(function (value) { return value.id === _this.race.betPonyId; });
            }
        });
    };
    LiveComponent.prototype.ngOnDestroy = function () {
        if (this.positionSubscription) {
            this.positionSubscription.unsubscribe();
        }
    };
    LiveComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'pr-live',
            template: __webpack_require__(683),
            styles: [__webpack_require__(660)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_providers_race_service__["a" /* RaceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_providers_race_service__["a" /* RaceService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], LiveComponent);
    return LiveComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/live.component.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_providers_user_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.credentials = {
            login: '',
            password: ''
        };
        this.authenticationFailed = false;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.authenticate = function () {
        var _this = this;
        this.authenticationFailed = false;
        this.userService.authenticate(this.credentials)
            .subscribe(function () { return _this.router.navigate(['/']); }, function () { return _this.authenticationFailed = true; });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'pr-login',
            template: __webpack_require__(684),
            styles: [__webpack_require__(661)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_providers_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_providers_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/login.component.js.map

/***/ }),

/***/ 319:
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
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'pr-page-not-found',
            template: __webpack_require__(685),
            styles: [__webpack_require__(662)]
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/page-not-found.component.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_providers_race_service__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RacesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RacesComponent = (function () {
    // Injection RaceService
    function RacesComponent(raceService, router) {
        this.raceService = raceService;
        this.router = router;
        this.races = [];
    }
    RacesComponent.prototype.ngOnInit = function () {
        // Use method list() from RaceService
        // this.races = this.raceService.list(); // [{name: 'Lyon'},{name: 'London'}]
        var _this = this;
        // Subscribe to an Observable
        // this.raceService.list().subscribe(
        //   races => {
        //     this.races = races;
        //   },
        //   error => console.log(error),
        //   () => console.log('Done')
        // );
        this.raceService.list().subscribe(function (races) { return _this.races = races; });
    };
    RacesComponent.prototype.betOnRace = function (race) {
        this.router.navigate([("/races/" + race.id)]);
        // this.router.navigate([`/account`]);
        // alert(`/races/${race.id}`);
    };
    RacesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'pr-races',
            template: __webpack_require__(688),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_providers_race_service__["a" /* RaceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_providers_race_service__["a" /* RaceService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], RacesComponent);
    return RacesComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/races.component.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_providers_user_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(fb, userService, router) {
        this.userService = userService;
        this.router = router;
        // Init fields FormControl
        this.loginCtrl = fb.control('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(3)]);
        this.passwordCtrl = fb.control('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required);
        this.confirmPasswordCtrl = fb.control('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required);
        this.birthYearCtrl = fb.control('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, RegisterComponent.validYear]);
        // Init passwordForm FormGroup
        this.passwordForm = fb.group({
            password: this.passwordCtrl,
            confirmPassword: this.confirmPasswordCtrl
        }, { validator: RegisterComponent.passwordMatch });
        // Init userForm FormGroup
        this.userForm = fb.group({
            login: this.loginCtrl,
            passwordForm: this.passwordForm,
            birthYear: this.birthYearCtrl
        });
    }
    // Password FormGroup validator
    RegisterComponent.passwordMatch = function (group) {
        var password = group.get('password').value;
        var confirmPassword = group.get('confirmPassword').value;
        return (password === confirmPassword) ? null : { matchingError: true };
    };
    // Birth date FormControl validator
    RegisterComponent.validYear = function (control) {
        var birthYear = control.value;
        return Number.isNaN(birthYear) ||
            birthYear < 1900 ||
            birthYear > new Date().getFullYear() ? { invalidYear: true } : null;
    };
    RegisterComponent.prototype.ngOnInit = function () { };
    // Register
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.register(this.userForm.value.login, this.userForm.value.passwordForm.password, this.userForm.value.birthYear).subscribe(function () { return _this.router.navigate(['/']); }, function () { return _this.registrationFailed = true; });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'pr-register',
            template: __webpack_require__(689),
            styles: [__webpack_require__(666)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_providers_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_providers_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/register.component.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRouteGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginRouteGuardService = (function () {
    function LoginRouteGuardService(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginRouteGuardService.prototype.canActivate = function (route, state) {
        if (this.userService.isLoggedOut()) {
            // User logged out so return true
            return true;
        }
        // User logged in so redirect to home page with the return url and return false
        this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    LoginRouteGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginRouteGuardService);
    return LoginRouteGuardService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/login-route-guard.service.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var WsService = (function () {
    function WsService(WebSocket, Webstomp) {
        this.WebSocket = WebSocket;
        this.Webstomp = Webstomp;
    }
    WsService.prototype.connect = function (channel) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            // TODO create the WebSocket connection
            var connection = new _this.WebSocket('ws://ponyracer.ninja-squad.com/ws');
            // TODO create the stomp client with Webstomp
            var stompClient = _this.Webstomp.over(connection);
            // TODO connect the stomp client
            var subscription;
            stompClient.connect({ login: null, passcode: null }, function () {
                // TODO subscribe to the specific channel and store the subscription
                subscription = stompClient.subscribe(channel, function (message) {
                    // TODO emit the message received, after extracting the JSON from the body
                    var bodyAsJson = JSON.parse(message.body);
                    observer.next(bodyAsJson);
                });
            }, function (error) {
                // propagate the error
                observer.error(error);
            });
            // TODO handle the unsubscription
            return function () {
                if (subscription) {
                    subscription.unsubscribe();
                }
                connection.close();
            };
        });
    };
    WsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])('WebSocket')),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])('Webstomp')), 
        __metadata('design:paramtypes', [Object, Object])
    ], WsService);
    return WsService;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/ws.service.js.map

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 469;


/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(598);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */], { useDebug: false }); // useDebug to false : <!--template bindings={}-->
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/main.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__races_races_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bet_bet_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__live_live_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_account_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_not_found_page_not_found_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_providers_login_route_guard_service__ = __webpack_require__(322);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/**
 * Router configuration
 * Installs Router routes, components and services
 */









/**
 * Default route would be also: { path: '', redirectTo: '/path', pathMatch: 'full' }
 * Don't do pathMatch: 'prefix' because every URL would match ''
 *
 * canActivate : true => the user can activate the route
 */
var ROUTES = [
    // { path: '', component: HomeComponent }, // Default route
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_providers_login_route_guard_service__["a" /* LoginRouteGuardService */]] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_6__account_account_component__["a" /* AccountComponent */] },
    { path: 'races/:raceId', component: __WEBPACK_IMPORTED_MODULE_4__bet_bet_component__["a" /* BetComponent */] },
    {
        path: 'races',
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__races_races_component__["a" /* RacesComponent */] },
            { path: ':raceId', component: __WEBPACK_IMPORTED_MODULE_4__bet_bet_component__["a" /* BetComponent */] },
            { path: ':raceId/live', component: __WEBPACK_IMPORTED_MODULE_5__live_live_component__["a" /* LiveComponent */] }
        ]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] } // Wildcard route
];
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/app-routing.module.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__ = __webpack_require__(446);
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AppComponent = (function () {
    function AppComponent(pageScrollService, document) {
        this.pageScrollService = pageScrollService;
        this.document = document;
        this.array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        this.myEasing = {
            ease: function (t, b, c, d) {
                // easeInOutExpo easing
                if (t === 0)
                    return b;
                if (t === d)
                    return b + c;
                if ((t /= d / 2) < 1)
                    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
        var pageScrollInstance = __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["b" /* PageScrollInstance */].simpleInstance(this.document, '#app-top');
        this.pageScrollService.start(pageScrollInstance);
    }
    AppComponent.prototype.onActivate = function (e, outlet) {
        outlet.scrollTop = 0;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'pr-root',
            template: __webpack_require__(677),
            styles: [__webpack_require__(654)]
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DOCUMENT */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["c" /* PageScrollService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["c" /* PageScrollService */]) === 'function' && _a) || Object, Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/app.component.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_register_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__races_races_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__race_race_component__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__bet_bet_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__live_live_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pony_pony_component__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__account_account_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__help_help_component__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__page_not_found_page_not_found_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_pipes_from_now_pipe__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_providers_http_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_providers_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_providers_login_route_guard_service__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_providers_race_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_providers_ws_service__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_webstomp_client__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_webstomp_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_webstomp_client__);
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





























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        // yarn add --exact webstomp-client
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__races_races_component__["a" /* RacesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__race_race_component__["a" /* RaceComponent */],
                __WEBPACK_IMPORTED_MODULE_16__bet_bet_component__["a" /* BetComponent */],
                __WEBPACK_IMPORTED_MODULE_17__live_live_component__["a" /* LiveComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pony_pony_component__["a" /* PonyComponent */],
                __WEBPACK_IMPORTED_MODULE_22__shared_pipes_from_now_pipe__["a" /* FromNowPipe */],
                __WEBPACK_IMPORTED_MODULE_19__account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_20__help_help_component__["a" /* HelpComponent */],
                __WEBPACK_IMPORTED_MODULE_21__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* ROUTES */]),
                __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__["a" /* Ng2PageScrollModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__shared_providers_http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_24__shared_providers_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_25__shared_providers_login_route_guard_service__["a" /* LoginRouteGuardService */],
                __WEBPACK_IMPORTED_MODULE_26__shared_providers_race_service__["a" /* RaceService */],
                __WEBPACK_IMPORTED_MODULE_27__shared_providers_ws_service__["a" /* WsService */],
                { provide: 'WebSocket', useValue: WebSocket },
                { provide: 'Webstomp', useValue: __WEBPACK_IMPORTED_MODULE_28_webstomp_client__ },
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* HashLocationStrategy */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/app.module.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'pr-footer',
            template: __webpack_require__(679),
            styles: [__webpack_require__(656)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/footer.component.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_providers_user_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        // Boolean for "collapse" class
        this.navbarCollapsed = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userEventsSubscription = this.userService.userEvents.subscribe(function (userData) { return _this.user = userData; });
    };
    // Destruction du composant (s'il n'est plus utilisé)
    HeaderComponent.prototype.ngOnDestroy = function () {
        if (this.userEventsSubscription) {
            this.userEventsSubscription.unsubscribe(); // Se désabonner pour éviter la fuite de mémoire avec un Observable
        }
    };
    // Click action on Button "Toggle Navbar"
    HeaderComponent.prototype.toggleNavbar = function () {
        // (this.navbarCollapsed === true) ? this.navbarCollapsed = false : this.navbarCollapsed = true;
        this.navbarCollapsed = !this.navbarCollapsed;
    };
    // Logout
    HeaderComponent.prototype.logout = function (event) {
        event.preventDefault();
        this.userService.logout();
        this.router.navigate(['/home']);
    };
    // Login
    HeaderComponent.prototype.login = function (event) {
        event.preventDefault();
        this.router.navigate(['/login']);
        // return false;
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'pr-header',
            template: __webpack_require__(680),
            styles: [__webpack_require__(657)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_providers_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_providers_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/header.component.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'pr-help',
            template: __webpack_require__(681),
            styles: [__webpack_require__(658)]
        }), 
        __metadata('design:paramtypes', [])
    ], HelpComponent);
    return HelpComponent;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/help.component.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_pony_model__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_pony_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_models_pony_model__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PonyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PonyComponent = (function () {
    // @Output('ponyClicked') emitter = new EventEmitter();
    // @Output('ponyAlerted') emitterAlert = new EventEmitter();
    function PonyComponent() {
        this.ponyClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    PonyComponent.prototype.ngOnInit = function () {
        this.name = this.ponyModel.name;
        this.color = this.ponyModel.color;
    };
    // Get current image url
    PonyComponent.prototype.getPonyImageUrl = function () {
        return "assets/img/ponies/pony-" + this.ponyModel.color.toLowerCase() + (this.isRunning ? '-running' : '') + ".gif";
    };
    // Click on Pony
    PonyComponent.prototype.selectThisPony = function (e) {
        e.preventDefault();
        this.ponyClicked.emit(this.ponyModel);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_models_pony_model__["PonyModel"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_models_pony_model__["PonyModel"]) === 'function' && _a) || Object)
    ], PonyComponent.prototype, "ponyModel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], PonyComponent.prototype, "isRunning", void 0);
    __decorate([
        // To reflect if the pony is running or not
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], PonyComponent.prototype, "isPending", void 0);
    __decorate([
        // To reflect if the pony is pending
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], PonyComponent.prototype, "isWinning", void 0);
    __decorate([
        // To reflect if the pony is winning
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(), 
        __metadata('design:type', Object)
    ], PonyComponent.prototype, "ponyClicked", void 0);
    PonyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'pr-pony',
            template: __webpack_require__(686),
            styles: [__webpack_require__(663)]
        }), 
        __metadata('design:paramtypes', [])
    ], PonyComponent);
    return PonyComponent;
    var _a;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/pony.component.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_race_model__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_race_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__shared_models_race_model__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RaceComponent = (function () {
    function RaceComponent() {
        this.raceClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    RaceComponent.prototype.ngOnInit = function () {
        this.race = this.raceModel;
        this.ponies = this.raceModel.ponies;
    };
    RaceComponent.prototype.selectThisRace = function () {
        this.raceClicked.emit(this.race);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_models_race_model__["RaceModel"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_models_race_model__["RaceModel"]) === 'function' && _a) || Object)
    ], RaceComponent.prototype, "raceModel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(), 
        __metadata('design:type', Object)
    ], RaceComponent.prototype, "raceClicked", void 0);
    RaceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'pr-race',
            template: __webpack_require__(687),
            styles: [__webpack_require__(664)]
        }), 
        __metadata('design:paramtypes', [])
    ], RaceComponent);
    return RaceComponent;
    var _a;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/race.component.js.map

/***/ }),

/***/ 595:
/***/ (function(module, exports) {

/**
 * Pony Interface
 */
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/pony.model.js.map

/***/ }),

/***/ 596:
/***/ (function(module, exports) {

/**
 * Pony race modal
 */
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/race.model.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FromNowPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FromNowPipe = (function () {
    function FromNowPipe() {
    }
    FromNowPipe.prototype.transform = function (value, args) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).fromNow();
    };
    FromNowPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */])({
            name: 'fromNow'
        }), 
        __metadata('design:paramtypes', [])
    ], FromNowPipe);
    return FromNowPipe;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/from-now.pipe.js.map

/***/ }),

/***/ 598:
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
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/environment.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/**
 * User service
 * Registration, authenticating
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    // HTTP injector
    function UserService(http) {
        this.http = http;
        // Observable multicast
        // userEvents = new Subject<UserModel>();
        this.userEvents = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](undefined);
        this.retrieveUser(); // To retrieve logged user when browser is refreshed
    }
    // Register service method
    UserService.prototype.register = function (login, password, birthYear) {
        var body = { login: login, password: password, birthYear: birthYear };
        return this.http.post('/api/users', body);
    };
    // Authenticate service
    UserService.prototype.authenticate = function (credentials) {
        var _this = this;
        return this.http
            .post('/api/users/authentication', credentials)
            .do(function (user) {
            _this.storeLoggedInUser(user); // User localStorage
        });
    };
    // Remain user logged service
    UserService.prototype.storeLoggedInUser = function (user) {
        window.localStorage.setItem('rememberMe', JSON.stringify(user));
        this.userEvents.next(user); // To transmit user data after user login
    };
    // Retrieve logged user service
    UserService.prototype.retrieveUser = function () {
        var value = window.localStorage.getItem('rememberMe');
        if (value) {
            var user = JSON.parse(value);
            this.userEvents.next(user); // To transmit user data when application restart
        }
    };
    // Logout service
    UserService.prototype.logout = function () {
        this.userEvents.next(null);
        window.localStorage.removeItem('rememberMe');
    };
    UserService.prototype.isLoggedOut = function () {
        var value = window.localStorage.getItem('rememberMe');
        if (!value) {
            return true;
        }
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=/Users/antoinenouvene/Sites/ANGULAR/ponyracing/src/user.service.js.map

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 338,
	"./af.js": 338,
	"./ar": 344,
	"./ar-dz": 339,
	"./ar-dz.js": 339,
	"./ar-ly": 340,
	"./ar-ly.js": 340,
	"./ar-ma": 341,
	"./ar-ma.js": 341,
	"./ar-sa": 342,
	"./ar-sa.js": 342,
	"./ar-tn": 343,
	"./ar-tn.js": 343,
	"./ar.js": 344,
	"./az": 345,
	"./az.js": 345,
	"./be": 346,
	"./be.js": 346,
	"./bg": 347,
	"./bg.js": 347,
	"./bn": 348,
	"./bn.js": 348,
	"./bo": 349,
	"./bo.js": 349,
	"./br": 350,
	"./br.js": 350,
	"./bs": 351,
	"./bs.js": 351,
	"./ca": 352,
	"./ca.js": 352,
	"./cs": 353,
	"./cs.js": 353,
	"./cv": 354,
	"./cv.js": 354,
	"./cy": 355,
	"./cy.js": 355,
	"./da": 356,
	"./da.js": 356,
	"./de": 358,
	"./de-at": 357,
	"./de-at.js": 357,
	"./de.js": 358,
	"./dv": 359,
	"./dv.js": 359,
	"./el": 360,
	"./el.js": 360,
	"./en-au": 361,
	"./en-au.js": 361,
	"./en-ca": 362,
	"./en-ca.js": 362,
	"./en-gb": 363,
	"./en-gb.js": 363,
	"./en-ie": 364,
	"./en-ie.js": 364,
	"./en-nz": 365,
	"./en-nz.js": 365,
	"./eo": 366,
	"./eo.js": 366,
	"./es": 368,
	"./es-do": 367,
	"./es-do.js": 367,
	"./es.js": 368,
	"./et": 369,
	"./et.js": 369,
	"./eu": 370,
	"./eu.js": 370,
	"./fa": 371,
	"./fa.js": 371,
	"./fi": 372,
	"./fi.js": 372,
	"./fo": 373,
	"./fo.js": 373,
	"./fr": 376,
	"./fr-ca": 374,
	"./fr-ca.js": 374,
	"./fr-ch": 375,
	"./fr-ch.js": 375,
	"./fr.js": 376,
	"./fy": 377,
	"./fy.js": 377,
	"./gd": 378,
	"./gd.js": 378,
	"./gl": 379,
	"./gl.js": 379,
	"./he": 380,
	"./he.js": 380,
	"./hi": 381,
	"./hi.js": 381,
	"./hr": 382,
	"./hr.js": 382,
	"./hu": 383,
	"./hu.js": 383,
	"./hy-am": 384,
	"./hy-am.js": 384,
	"./id": 385,
	"./id.js": 385,
	"./is": 386,
	"./is.js": 386,
	"./it": 387,
	"./it.js": 387,
	"./ja": 388,
	"./ja.js": 388,
	"./jv": 389,
	"./jv.js": 389,
	"./ka": 390,
	"./ka.js": 390,
	"./kk": 391,
	"./kk.js": 391,
	"./km": 392,
	"./km.js": 392,
	"./ko": 393,
	"./ko.js": 393,
	"./ky": 394,
	"./ky.js": 394,
	"./lb": 395,
	"./lb.js": 395,
	"./lo": 396,
	"./lo.js": 396,
	"./lt": 397,
	"./lt.js": 397,
	"./lv": 398,
	"./lv.js": 398,
	"./me": 399,
	"./me.js": 399,
	"./mi": 400,
	"./mi.js": 400,
	"./mk": 401,
	"./mk.js": 401,
	"./ml": 402,
	"./ml.js": 402,
	"./mr": 403,
	"./mr.js": 403,
	"./ms": 405,
	"./ms-my": 404,
	"./ms-my.js": 404,
	"./ms.js": 405,
	"./my": 406,
	"./my.js": 406,
	"./nb": 407,
	"./nb.js": 407,
	"./ne": 408,
	"./ne.js": 408,
	"./nl": 410,
	"./nl-be": 409,
	"./nl-be.js": 409,
	"./nl.js": 410,
	"./nn": 411,
	"./nn.js": 411,
	"./pa-in": 412,
	"./pa-in.js": 412,
	"./pl": 413,
	"./pl.js": 413,
	"./pt": 415,
	"./pt-br": 414,
	"./pt-br.js": 414,
	"./pt.js": 415,
	"./ro": 416,
	"./ro.js": 416,
	"./ru": 417,
	"./ru.js": 417,
	"./se": 418,
	"./se.js": 418,
	"./si": 419,
	"./si.js": 419,
	"./sk": 420,
	"./sk.js": 420,
	"./sl": 421,
	"./sl.js": 421,
	"./sq": 422,
	"./sq.js": 422,
	"./sr": 424,
	"./sr-cyrl": 423,
	"./sr-cyrl.js": 423,
	"./sr.js": 424,
	"./ss": 425,
	"./ss.js": 425,
	"./sv": 426,
	"./sv.js": 426,
	"./sw": 427,
	"./sw.js": 427,
	"./ta": 428,
	"./ta.js": 428,
	"./te": 429,
	"./te.js": 429,
	"./tet": 430,
	"./tet.js": 430,
	"./th": 431,
	"./th.js": 431,
	"./tl-ph": 432,
	"./tl-ph.js": 432,
	"./tlh": 433,
	"./tlh.js": 433,
	"./tr": 434,
	"./tr.js": 434,
	"./tzl": 435,
	"./tzl.js": 435,
	"./tzm": 437,
	"./tzm-latn": 436,
	"./tzm-latn.js": 436,
	"./tzm.js": 437,
	"./uk": 438,
	"./uk.js": 438,
	"./uz": 439,
	"./uz.js": 439,
	"./vi": 440,
	"./vi.js": 440,
	"./x-pseudo": 441,
	"./x-pseudo.js": 441,
	"./yo": 442,
	"./yo.js": 442,
	"./zh-cn": 443,
	"./zh-cn.js": 443,
	"./zh-hk": 444,
	"./zh-hk.js": 444,
	"./zh-tw": 445,
	"./zh-tw.js": 445
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 673;


/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "<div id=\"number-7\" class=\"page\">\n  <div class=\"container\">\n    <div class=\"page__content\">\n      <h2 class=\"page__title\">\n        Welcome \"nguyenmintuan\" !<br>\n        It's always a pleasure to bet on ponnies.\n      </h2>\n      <div class=\"btn-races\"><span class=\"ico-arrow-down\"></span><a pageScroll routerLink=\"/races\" href=\"#number-4\"><img src=\"/assets/img/xs_btn_races.png\" alt=\"Pony racing\"></a></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<a name=\"app-top\" id=\"app-top\"></a>\n\n<!-- HEADER -->\n<pr-header></pr-header>\n\n<!-- PAGE OUTLET -->\n<router-outlet (activate)=\"onActivate($event, outlet)\" #outlet></router-outlet>\n<!--<router-outlet></router-outlet>-->\n\n<!-- HOME PAGE 1 -->\n<!--<pr-page-not-found></pr-page-not-found>-->\n\n<!-- HOME PAGE 1 -->\n<!--<pr-home></pr-home>-->\n\n<!-- LOGIN PAGE 2 -->\n<!--<pr-login *ngIf=\"!user\"></pr-login>-->\n\n<!-- REGISTER PAGE 3 -->\n<!--<pr-register></pr-register>-->\n\n<!-- RACES PAGE 4 -->\n<!--<pr-races></pr-races>-->\n\n<!-- BET RACE PAGE 5 -->\n<!--<pr-bet></pr-bet>-->\n\n<!-- BET RACE PAGE 6 -->\n<!--<pr-live></pr-live>-->\n\n<!-- ACCOUNT PAGE 7 -->\n<!--<pr-account></pr-account>-->\n\n<!-- ABOUT ME -->\n<div id=\"about-me\" class=\"page\">\n  <div class=\"container\">\n    <div class=\"page__content\">\n      <h2 class=\"page__title\">About me</h2>\n      <div class=\"page__text\">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quae, beatae, hic quaerat natus modi maiores consectetur reiciendis voluptates rem veritatis repellendus culpa autem assumenda ipsa suscipit quod quasi ipsam?\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, deserunt unde iste sed a aperiam recusandae placeat rerum similique magni. Autem perferendis minima doloribus commodi consequatur! Facere in numquam autem.</p>\n        <p>Possimus, laboriosam, reiciendis, nobis neque et iure atque delectus beatae ipsum dolorum cum nesciunt sequi nisi? Accusamus dolores odit delectus aspernatur cumque tempore praesentium? Suscipit quam accusamus non pariatur quia.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- HELP -->\n<div id=\"help-me\" class=\"page\">\n  <div class=\"container\">\n    <div class=\"page__content\">\n      <h2 class=\"page__title\">\n        NEED HELP ?\n      </h2>\n      <div class=\"page__text\">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quae, beatae, hic quaerat natus modi maiores consectetur reiciendis voluptates rem veritatis repellendus culpa autem assumenda ipsa suscipit quod quasi ipsam?\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, deserunt unde iste sed a aperiam recusandae placeat rerum similique magni. Autem perferendis minima doloribus commodi consequatur! Facere in numquam autem.</p>\n        <p>Possimus, laboriosam, reiciendis, nobis neque et iure atque delectus beatae ipsum dolorum cum nesciunt sequi nisi? Accusamus dolores odit delectus aspernatur cumque tempore praesentium? Suscipit quam accusamus non pariatur quia.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- FAQ -->\n<div id=\"faq\" class=\"page\">\n  <div class=\"container\">\n    <div class=\"page__content\">\n      <h2 class=\"page__title\">FAQ</h2>\n      <div class=\"page__text\">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quae, beatae, hic quaerat natus modi maiores consectetur reiciendis voluptates rem veritatis repellendus culpa autem assumenda ipsa suscipit quod quasi ipsam?\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, deserunt unde iste sed a aperiam recusandae placeat rerum similique magni. Autem perferendis minima doloribus commodi consequatur! Facere in numquam autem.</p>\n        <p>Possimus, laboriosam, reiciendis, nobis neque et iure atque delectus beatae ipsum dolorum cum nesciunt sequi nisi? Accusamus dolores odit delectus aspernatur cumque tempore praesentium? Suscipit quam accusamus non pariatur quia.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- CONTACT -->\n<div id=\"contact\" class=\"page\">\n  <div class=\"container\">\n    <div class=\"page__content\">\n      <h2 class=\"page__title\">CONTACT ME</h2>\n      <div class=\"page__text\">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quae, beatae, hic quaerat natus modi maiores consectetur reiciendis voluptates rem veritatis repellendus culpa autem assumenda ipsa suscipit quod quasi ipsam?\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, deserunt unde iste sed a aperiam recusandae placeat rerum similique magni. Autem perferendis minima doloribus commodi consequatur! Facere in numquam autem.</p>\n        <p>Possimus, laboriosam, reiciendis, nobis neque et iure atque delectus beatae ipsum dolorum cum nesciunt sequi nisi? Accusamus dolores odit delectus aspernatur cumque tempore praesentium? Suscipit quam accusamus non pariatur quia.</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- FOOTER -->\n<pr-footer></pr-footer>\n"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<div id=\"number-5\" class=\"page\" *ngIf=\"race\">\n  <div class=\"container\">\n    <div class=\"page__content\">\n      <h2 class=\"page__title\">Bet on {{race.name}}</h2>\n\n      <div class=\"race-details\">\n        <p>Welcome !</p>\n        <p>You are going to bet on {{race.name}} racing which will begin in {{race.startInstant | fromNow}}</p>\n        <p>Good luck !</p>\n      </div>\n\n      <div class=\"race\">\n        <div class=\"race__country\"><span>{{race.name}}</span></div>\n        <div class=\"race__timestart\"><span class=\"ico-time\"></span> {{race.startInstant | fromNow}} <span class=\"arrow-right\"></span></div>\n        <div class=\"race__beton text-center\"><a pageScroll [pageScrollEasing]=\"myEasing\" [pageScrollOffset]=\"0\" [routerLink]=\"['/races', race.id, 'live']\" href=\"#number-5\" class=\"text-bet\">Live on {{ race.name }}</a></div>\n      </div>\n      <div class=\"race-choice\">\n        <div class=\"btn-races\" *ngFor=\"let pony of race.ponies\" [ngClass]=\"{selected: isPonySelected(pony)}\">\n          <pr-pony [ponyModel]=\"pony\" (ponyClicked)=\"betOnPony(pony)\" class=\"ponyColor-{{pony.color}}\"></pr-pony>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div>\n    <span>&copy;2016</span>\n     - <a pageScroll [pageScrollEasing]=\"myEasing\" href=\"#about-me\" title=\"About me\">About me</a>\n     - <a pageScroll [pageScrollEasing]=\"myEasing\" href=\"#help-me\" title=\"Help\">Help</a>\n     - <a pageScroll [pageScrollEasing]=\"myEasing\" href=\"#faq\" title=\"FAQ\">FAQ</a>\n     - <a pageScroll [pageScrollEasing]=\"myEasing\" href=\"#contact\" title=\"Contact\">Contact</a>\n  </div>\n</footer>\n"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar\">\n    <div class=\"container-fluid\">\n\n      <div class=\"navbar-header\">\n        <a id=\"welcome\" class=\"navbar-brand\" pageScroll routerLink=\"/home\" href=\"#number-1\" ><img src=\"/assets/img/navbar_logo.svg\" alt=\"Pony racing\"></a>\n      </div>\n\n      <div id=\"navbar\" class=\"navbar-collapse\">\n\n        <!-- NAV LEFT -->\n        <ul id=\"menu\" class=\"nav-left\" [class.collapse]=\"navbarCollapsed\">\n          <li><a pageScroll [pageScrollEasing]=\"myEasing\" routerLink=\"/home\" routerLinkActive=\"active\" href=\"#number-1\">Home</a></li>\n          <li *ngIf=\"!user\"><a pageScroll [pageScrollEasing]=\"myEasing\" routerLink=\"/login\" href=\"#number-2\">Login</a></li>\n          <li *ngIf=\"!user\"><a pageScroll [pageScrollEasing]=\"myEasing\" routerLink=\"/register\" href=\"#number-3\">Sign up</a></li>\n          <li><a pageScroll [pageScrollEasing]=\"myEasing\" routerLink=\"/races\" href=\"#number-4\">Races</a></li>\n        </ul>\n\n        <!-- NAV RIGHT -->\n        <ul class=\"nav-right\">\n          <li>\n            <p class=\"navbar-text\">\n              <a pageScroll [pageScrollEasing]=\"myEasing\" routerLink=\"/login\" href=\"#number-2\" [ngClass]=\"{'ico-toggle-off': !user}\" title=\"Login\"></a>\n              <a [ngClass]=\"{'ico-toggle-on': user}\" (click)=\"logout($event)\" title=\"Logout\"></a>\n            </p>\n          </li>\n          <li *ngIf=\"user\">\n            <p class=\"navbar-text\">\n              <a id=\"user\" pageScroll [routerLink]=\"['/account']\" routerLinkActive=\"active\" href=\"#number-7\" title=\"Account\"><span class=\"ico-user\"></span>\n                {{ user.login }}</a>\n            </p>\n          </li>\n          <li *ngIf=\"user\">\n            <p class=\"navbar-text\">\n              <span class=\"ico-star\"></span>\n              {{ user.money }}\n            </p>\n          </li>\n        </ul>\n\n        <!-- TOGGLE BUTTON -->\n        <button type=\"button\" class=\"navbar-toggle\" (click)=\"toggleNavbar()\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n\n      </div>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<p>\n  help works!\n</p>\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<div pageScroll id=\"number-1\" class=\"page\">\n  <div class=\"container\">\n    <div class=\"page__content\">\n      <div class=\"welcome-logo text-center\">\n        <h1>Welcome!</h1>\n        <h2>It's always a pleasure to bet on ponies</h2>\n\n        <div *ngIf=\"!user\">\n          <h2>You must to be registered to bet :-)</h2>\n          <a class=\"btn-green\" pageScroll routerLink=\"/login\" href=\"#number-2\">Login</a>\n          <a class=\"btn-green\" pageScroll routerLink=\"/register\" href=\"#number-3\">Register</a>\n        </div>\n\n        <div *ngIf=\"user\">\n          <h2>Click on button below to bet !</h2>\n          <a class=\"btn-green\" pageScroll [pageScrollEasing]=\"myEasing\" routerLink=\"/races\" href=\"#number-4\">Races</a>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<div id=\"number-6\" class=\"page\" *ngIf=\"race\">\n  <div class=\"container\">\n    <div class=\"page__content\">\n      <h2 class=\"page__title\">Live on {{race.name}}</h2>\n\n      <div class=\"race-details\">\n        <p>Welcome and this is your bet on {{race.name}} in live</p>\n        <p>Good luck !</p>\n      </div>\n\n      <div>\n        <div class=\"alert alert-danger\" *ngIf=\"error\">A problem occurred during the live...</div>\n        <div id=\"live-race\" [ngSwitch]=\"race?.status\">\n          <div *ngSwitchCase=\"'FINISHED'\">\n            <div *ngIf=\"!winners\">The race is over.</div>\n            <div *ngIf=\"winners\">\n              <div class=\"alert alert-success\" *ngIf=\"betWon\">You won your bet!</div>\n              <div class=\"alert alert-warning\" *ngIf=\"!betWon\">You lost your bet...</div>\n              <div>Most Valuable Ponies</div>\n              <div class=\"row\">\n                <div *ngFor=\"let winner of winners\" class=\"col-xs-2\" [class.selected]=\"winner.id === race.betPonyId\">\n                  <pr-pony [ponyModel]=\"winner\" [isWinning]=\"true\"></pr-pony>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngSwitchCase=\"'PENDING'\">\n            <div>The race will start {{ race.startInstant | fromNow }}</div>\n            <div class=\"row\">\n              <div *ngFor=\"let pony of race.ponies\" class=\"pony-wrapper\" [class.selected]=\"pony.id === race.betPonyId\">\n                <pr-pony [ponyModel]=\"pony\" [isPending]=\"true\"></pr-pony>\n              </div>\n            </div>\n          </div>\n          <div *ngSwitchCase=\"'RUNNING'\">\n            <div style=\"margin-left: 95%; margin-bottom: 5px;\">\n              <span class=\"fa fa-flag\" style=\"font-size: x-large;\"></span>\n            </div>\n            <div class=\"row finishing-line\">\n              <div *ngFor=\"let pony of poniesWithPosition\" [class.selected]=\"pony.id === race.betPonyId\" [style.marginLeft.%]=\"pony.position - 5\">\n                <pr-pony [ponyModel]=\"pony\" [isRunning]=\"true\"></pr-pony>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<div id=\"number-2\" class=\"page\">\n  <div class=\"container\">\n    <div class=\"page__content\">\n      <h2 class=\"page__title\">LOG IN</h2>\n      <div class=\"alert alert-danger\" *ngIf=\"authenticationFailed\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"authenticationFailed = false;\"><span aria-hidden=\"true\">&#215;</span></button>\n        Nope, try again...\n      </div>\n      <form class=\"log\" action=\"\" method=\"post\" (ngSubmit)=\"authenticate()\" #loginForm=\"ngForm\">\n        <input type=\"text\" class=\"log__user\" name=\"login\" [(ngModel)]=\"credentials.login\" required #loginCtrl=\"ngModel\" placeholder=\"Login\">\n        <div *ngIf=\"loginCtrl.control.dirty && loginCtrl.control.hasError('required')\">Login is required</div>\n\n        <input type=\"password\"s class=\"log__pass\" name=\"password\" [(ngModel)]=\"credentials.password\" required #passwordCtrl=\"ngModel\" placeholder=\"Password\">\n        <div *ngIf=\"passwordCtrl.dirty && passwordCtrl.hasError('required')\">Password is required</div>\n\n        <button type=\"submit\" [disabled]=\"!loginForm.valid\">Log me in !</button>\n        <a id=\"signup\" pageScroll [pageScrollEasing]=\"myEasing\" routerLink=\"/register\" href=\"#number-3\" title=\"Sign up\">Not yet registered ?</a>\n        <a id=\"help\" pageScroll [pageScrollEasing]=\"myEasing\" href=\"#help-me\" title=\"Help\">Need Help?</a>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"container\">\n    <div class=\"page__content\">\n      <h2 class=\"page__title\">404 - Page not found</h2>\n      <p class=\"text-center\">Please verify the web address is correct !</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isRunning && !isPending && !isWinning\">\n  <span class=\"ico-arrow-down\"></span>\n  <a href=\"#\" (click)=\"selectThisPony($event)\"></a>\n  <div class=\"race-name\">{{ponyModel.name}}</div>\n</div>\n\n<!--LiveComponent: FINISHED-->\n<div *ngIf=\"isWinning\">\n  <figure class=\"pony-live\">\n    <img [src]=\"getPonyImageUrl()\" [alt]=\"ponyModel.name\"/>\n    <figcaption>{{name}}</figcaption>\n  </figure>\n</div>\n<!--/-->\n\n<!--LiveComponent: PENDING-->\n<div *ngIf=\"isPending\">\n  <figure class=\"pony-live\">\n    <img [src]=\"getPonyImageUrl()\" [alt]=\"ponyModel.name\"/>\n    <figcaption>{{name}}</figcaption>\n  </figure>\n</div>\n<!--/-->\n\n<!--LiveComponent: RUNNING-->\n<div *ngIf=\"isRunning\">\n  <figure class=\"pony-live\">\n    <img [src]=\"getPonyImageUrl()\" [alt]=\"ponyModel.name\"/>\n    <figcaption>{{name}}</figcaption>\n  </figure>\n</div>\n<!--/-->\n\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<div class=\"race\">\n  <div class=\"race__country\"><span>{{race.name}}</span></div>\n  <div class=\"race__timestart\"><span class=\"ico-time\"></span> {{race.startInstant | fromNow}} <span class=\"arrow-right\"></span></div>\n  <div class=\"race__beton text-center\"><a (click)=\"selectThisRace()\" pageScroll [pageScrollEasing]=\"myEasing\" [pageScrollDuration]=\"500\" [routerLink]=\"['/races', race.id ]\" href=\"#number-5\" class=\"text-bet\">Bet on {{ race.name }}</a></div>\n</div>\n<div class=\"race-choice\">\n  <div class=\"btn-races\" *ngFor=\"let pony of ponies\">\n    <pr-pony [ponyModel]=\"pony\" class=\"ponyColor-{{pony.color}}\"></pr-pony>\n  </div>\n</div>\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<div id=\"number-4\" class=\"page\">\n  <div class=\"container\">\n    <div class=\"page__content\">\n      <h2 class=\"page__title\">PONNIES RACING</h2>\n      <div *ngFor=\"let race of races | slice:0:4\" raceClicked>\n        <pr-race [raceModel]=\"race\" (raceClicked)=\"betOnRace(race)\"></pr-race>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<div id=\"number-3\" class=\"page\">\n  <div class=\"container\">\n    <div class=\"page__content\">\n      <h2 class=\"page__title\">SIGN UP</h2>\n      <div id=\"registration-error\" class=\"alert alert-danger\" *ngIf=\"registrationFailed\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"registrationFailed = false;\"><span aria-hidden=\"true\">&#215;</span></button>\n        Try again with another login...\n      </div>\n\n      <form class=\"log\" [formGroup]=\"userForm\" (ngSubmit)=\"register()\">\n        <!--Login-->\n        <input type=\"text\" name=\"username\" placeholder=\"Login\" formControlName=\"login\">\n        <div *ngIf=\"loginCtrl.dirty && loginCtrl.hasError('required')\">Login is required</div>\n        <div id=\"login-length-error\" *ngIf=\"loginCtrl.dirty && loginCtrl.hasError('minlength')\">Your login should be at least 3 characters</div>\n\n        <div formGroupName=\"passwordForm\">\n          <!--Password-->\n          <input type=\"password\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\n          <div *ngIf=\"passwordCtrl.dirty && passwordCtrl.hasError('required')\">Password is required</div>\n          <!--Password confirm-->\n          <input type=\"password\"s name=\"conf_password\" placeholder=\"Confirm password\" formControlName=\"confirmPassword\">\n          <div *ngIf=\"confirmPasswordCtrl.dirty && confirmPasswordCtrl.hasError('required')\">Confirm your password</div>\n          <div id=\"password-matching-error\" *ngIf=\"passwordForm.dirty && passwordForm.hasError('matchingError')\">Your password does not match</div>\n        </div>\n        <!--Birth Year-->\n        <input type=\"text\" name=\"birth_year\" placeholder=\"Birth year\" formControlName=\"birthYear\">\n        <div *ngIf=\"birthYearCtrl.dirty && birthYearCtrl.hasError('required')\">Birth year is required</div>\n        <div id=\"invalid-year-error\" *ngIf=\"birthYearCtrl.dirty && birthYearCtrl.hasError('invalidYear')\">This is not a valid year</div>\n\n        <button [disabled]=\"!userForm.valid\">Let's go !</button>\n        <a id=\"login\" pageScroll [pageScrollEasing]=\"myEasing\" routerLink=\"/login\" href=\"#number-2\" title=\"Login\">Already inscribed ?</a>\n        <a id=\"help\" pageScroll [pageScrollEasing]=\"myEasing\" href=\"#help-me\" title=\"Help\">Need Help?</a>\n      </form>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(470);


/***/ })

},[740]);
//# sourceMappingURL=main.bundle.js.map