webpackJsonp([0,3],{

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { LFService, LoggerFactoryOptions } from "typescript-logging"
// import '../styles.css';
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: "\n        <router-outlet></router-outlet>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/usman/Documents/workspace-ecommerce/manga/src/app.component.js.map

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CreateProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateProjectComponent = (function () {
    function CreateProjectComponent() {
    }
    //function to display tumbnail/snapshot of image in the browse image box in create project
    CreateProjectComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.imgurl = e.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    CreateProjectComponent.prototype.createProject = function (title, type, desc, file) {
        var tempPath;
        var tempImgPath;
        var returnData;
        // var token = "qUpnyBsW7tAAAAAAAAAAHeQerauNB_yPXrq-docw-tHLZ6ByggR1enJ3wf5Q_k3L";
        var token = "QOMAUaZsAgAAAAAAAAAAH7IQ6ehF4ceVh2SQfpB2W9jvN0DB6VES6sfDevdpUjtJ";
        alert(title + " " + type + " " + desc + " " + file.name);
        // var temp_path;
        // //creating folder
        // jQuery.ajax({
        //   url: 'https://api.dropboxapi.com/2/files/create_folder',
        //   headers: {
        //       'Authorization':'Bearer ' + 'qUpnyBsW7tAAAAAAAAAAHeQerauNB_yPXrq-docw-tHLZ6ByggR1enJ3wf5Q_k3L',
        //       'Content-Type':'application/json'
        //   },
        //   method: 'POST',
        //   dataType: 'json',
        //   data: '{"path":"/maintemp"}',
        //   success: function(data){
        //    //alert('succes: '+data);
        //    console.log(JSON.stringify(data.path_display));
        //    temp_path = data.path_display;
        //   }
        // });
        //
        //
        //
        // //uploading file
        // jQuery.ajax({
        //     url: 'https://content.dropboxapi.com/2/files/upload',
        //     type: 'post',
        //     data: file,
        //     processData: false,
        //     contentType: 'application/octet-stream',
        //     headers: {
        //         "Authorization": "Bearer " + 'qUpnyBsW7tAAAAAAAAAAHeQerauNB_yPXrq-docw-tHLZ6ByggR1enJ3wf5Q_k3L',
        //         "Dropbox-API-Arg": JSON.stringify({
        //           path: temp_path +  file.name,
        //           mode: 'add',
        //           autorename: true,
        //           mute: false
        //         })
        //
        //         //'{"path": "/test_ff_upload.txt","mode": "add","autorename": true,"mute": false}'
        //     },
        //     success: function (data) {
        //         console.log(data.path_display);
        //     }
        // });
        // temp_path = "/maintemp8";
        jQuery.when(
        //creating folder
        jQuery.ajax({
            async: false,
            url: 'https://api.dropboxapi.com/2/files/create_folder',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            dataType: 'json',
            data: JSON.stringify({
                path: '/Apps/pinwalk/1/temp',
                // mode: 'add',
                autorename: true,
            }),
            success: function (data) {
                //alert('succes: '+data);
                console.log(data);
                tempPath = data.path_display;
                console.log("this is the path iam passing:" + tempPath);
            }
        }), 
        //uploading file
        jQuery.ajax({
            async: false,
            url: 'https://content.dropboxapi.com/2/files/upload',
            type: 'post',
            data: file,
            processData: false,
            contentType: 'application/octet-stream',
            headers: {
                "Authorization": "Bearer " + token,
                "Dropbox-API-Arg": JSON.stringify({
                    path: tempPath + "/" + file.name,
                    mode: 'add',
                    autorename: true,
                    mute: false
                })
            },
            success: function (data) {
                console.log(data);
                tempImgPath = data.path_display;
            }
        }), 
        // creating project...****************
        jQuery.ajax({
            async: false,
            url: 'http://192.241.209.229/v1/project',
            headers: {
                // 'Authorization':'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            dataType: 'json',
            data: JSON.stringify({
                name: title,
                type: type,
                imagePath: tempImgPath,
                description: desc,
                userId: 1
            }),
            success: function (data) {
                //alert('succes: '+data);
                console.log(JSON.stringify(data));
                //  tempPath = data.path_display;
                returnData = data.data.id;
                console.log("project created with id: " + returnData);
            }
        }))
            .done(function (first_call, second_call, third_call) {
            //do something
            console.log("project has been created");
        })
            .fail(function () {
            //handle errors
            console.log("upload failed project cannot be created at this time");
            console.log("this is the final path of the image:" + tempImgPath);
        });
    };
    CreateProjectComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            template: __webpack_require__(653),
        }), 
        __metadata('design:paramtypes', [])
    ], CreateProjectComponent);
    return CreateProjectComponent;
}()); // class end
//# sourceMappingURL=/Users/usman/Documents/workspace-ecommerce/manga/src/create-project.component.js.map

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Main home component wired for routing.
 */
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            template: "\n    <h1>Home Router</h1>\n    <nav>\n      <a routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n      <a routerLink=\"/project\" routerLinkActive=\"active\">Project</a>\n      <a routerLink=\"/createproject\" routerLinkActive=\"active\">Create Project</a>\n      <a routerLink=\"/projectdetail\" routerLinkActive=\"active\">Project Details</a>\n    </nav>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/usman/Documents/workspace-ecommerce/manga/src/home.component.js.map

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
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
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            // selector: 'app-login',
            template: __webpack_require__(654),
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=/Users/usman/Documents/workspace-ecommerce/manga/src/login.component.js.map

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pin__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pin_service__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_service__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProjectDetailComponent; });
// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-project-detail',
//   templateUrl: './project-detail.component.html',
//   styleUrls: ['./project-detail.component.css']
// })
// export class ProjectDetailComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProjectDetailComponent = (function () {
    //***************************** functions below *************************************
    function ProjectDetailComponent(pinService, projectService, el, route, location) {
        this.pinService = pinService;
        this.projectService = projectService;
        this.el = el;
        this.route = route;
        this.location = location;
        //***************** mouse event handeling variables *********************
        this.rightPanelStyle = {};
        this.leftPanelStyle = {};
        this.RightMenuActive = false;
        this.LeftMenuActive = false;
        this.OutOfMenu = true;
        // OutLeftMenu = false;
        this.OnPin = false;
        this.leftX = 0;
        this.topY = 0;
        // **************************Pin related variable/property declarations****************
        this.projpins = []; //project pins to display
        this.projpin = new __WEBPACK_IMPORTED_MODULE_4__pin__["a" /* Pin */]; //new project pin to be created on right click
        // pin2 = new Pin; //declaring a pin property
        this.pin1 = new __WEBPACK_IMPORTED_MODULE_4__pin__["a" /* Pin */]; // used to update the pin
        this.pid = route.snapshot.params['pid'];
        // alert(this.pid);
    } //class constructor
    // selecting a pin and holding it in selectedPin
    ProjectDetailComponent.prototype.pinSelect = function (pin) {
        this.selectedPin = pin;
        console.log("Pin id is :" + this.selectedPin.id +
            ", name :" + this.selectedPin.name +
            ", x :" + this.selectedPin.pinx +
            ", y :" + this.selectedPin.piny +
            ", color :" + this.selectedPin.color);
        // alert("Pin id is :" + this.selectedPin.id +
        //       ", name :" + this.selectedPin.name +
        //       ", x :" + this.selectedPin.x +
        //       ", y :" + this.selectedPin.y +
        //       ", color :" + this.selectedPin.color );
    };
    // get all pins of a project
    // getPins(): void {
    //   this.pinService.getPins().then(pins => this.projpins = pins);
    // }
    ProjectDetailComponent.prototype.getAllPins = function () {
        var _this = this;
        this.pinService.getPins(this.pid).subscribe(
        // the first argument is a function which runs on success
        // data => { console.log(data);},
        function (data) { _this.projpins = data; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { return console.log('done loading pins'); });
        // this._demoService.getFoods()
        //   .then(projects => console.info(projects));
    };
    // adding a pin into the project
    // addPin(name: string, x:number, y:number, color:string): void {
    //   // name = name.trim();
    //   // if (!name) { return; }
    //   this.pinService.create(name, x, y, color)
    //     .then(projpin => {
    //       this.projpins.push(this.projpin);
    //       // this.projpin = null;
    //     });
    // }
    ProjectDetailComponent.prototype.addPin = function (name, x, y, color) {
        var _this = this;
        // let food = {name: name};
        this.pinService.createPin(this.pid, name, x, y, color).subscribe(function (data) {
            // refresh the list
            _this.getAllPins();
            return true;
        }, function (error) {
            console.error("Error Creating Pin!");
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(error);
        });
    };
    //updating a pin and then saving its data
    // save(): void {
    //   this.pin1.id = 8;
    //   this.pin1.name = "new";
    //   this.pin1.x = 50;
    //   this.pin1.y = 50;
    //   this.pin1.color = "white";
    //
    //   this.pinService.update(this.pin1)
    //      .then(() => this.goBack());
    // }
    ProjectDetailComponent.prototype.savePin = function (name, x, y, color) {
        var _this = this;
        // let pin = {name: name};
        this.pin1.id = 8;
        this.pin1.name = "new";
        this.pin1.x = 50;
        this.pin1.y = 50;
        this.pin1.color = "white";
        this.pinService.updatePin(this.pin1).subscribe(function (data) {
            // refresh the list
            _this.getAllPins();
            return true;
        }, function (error) {
            console.error("Error updating pin!");
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(error);
        });
    };
    //go back function
    ProjectDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    // delete pin function
    // delete(pin: Pin): void {
    //   if(pin){
    //
    //   }else{
    //     pin = this.selectedPin;
    //   }
    //
    //   this.pinService
    //       .delete(pin.id)
    //       .then(() => {
    //         this.projpins = this.projpins.filter(h => h !== pin);
    //         if (this.selectedPin === pin) { this.selectedPin = null; }
    //       });
    //
    //   this.rightPanelStyle = {'display':'none'};
    //   this.RightMenuActive = false;
    // }
    ProjectDetailComponent.prototype.delete = function (pin) {
        var _this = this;
        if (pin) {
        }
        else {
            pin = this.selectedPin;
        }
        if (confirm("Are you sure you want to delete this " + pin.id + "?")) {
            this.pinService.deletePin(pin.id).subscribe(function (data) {
                // refresh the list
                _this.getAllPins();
                return true;
            }, function (error) {
                console.error("Error deleting Pin!");
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(error);
            });
            this.rightPanelStyle = { 'display': 'none' };
            this.RightMenuActive = false;
        }
    };
    // ngOnInit function. call any functions inside to load  when the view of component is called first time
    ProjectDetailComponent.prototype.ngOnInit = function () {
        //first get projectdetails from the url parameter
        // this.route.params
        //   .switchMap((params: Params) => this.projectService.getProject(+params['pid']))
        //   .subscribe(project => this.sproj = project);
        var _this = this;
        this.projectService.getProject(this.pid).subscribe(
        // the first argument is a function which runs on success
        // data => { console.log(data);},
        function (data) { _this.sproj = data; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { return console.log('done loading single project'); });
        // this._demoService.getFoods()
        //   .then(projects => console.info(projects));
        //   this.route.params
        //  .switchMap((params: Params) => this.pinService.getPin(+params['id']))
        //  .subscribe(pin => this.pin2 = pin);
        // console.log("user projects:" + this.userproj[1].id );
        // console.log("project is :" + this.project.id);
        // console.log("pin is :" + this.pin2.id);
        //after project detail, get this project pins
        this.getAllPins(); //get all pins of the  project to display
        jQuery("#image-gallery").unitegallery({
            gallery_theme: "tilesgrid",
            tile_enable_icons: false,
            tile_width: 114,
            tile_height: 100,
            tile_enable_border: false,
            grid_num_rows: 10000,
            grid_space_between_cols: 10,
        });
        jQuery("#video-gallery").unitegallery({
            gallery_theme: "tilesgrid",
            // tile_enable_icons:false,
            tile_width: 114,
            tile_height: 100,
            tile_enable_border: false,
            grid_num_rows: 10000,
            grid_space_between_cols: 10,
        });
        jQuery("#audio-gallery").unitegallery({
            gallery_theme: "tilesgrid",
            // tile_enable_icons:false,
            tile_width: 114,
            tile_height: 100,
            tile_enable_border: false,
            grid_num_rows: 10000,
            grid_space_between_cols: 10,
        });
        // this.route.params
        //   .switchMap((params: Params) => this.pinService.getPin(+params['id']))
        //   .subscribe(pin => this.pin = pin);
    }; //ngOnIt
    // pinhover event to control the canvas of the pins
    ProjectDetailComponent.prototype.PinHover = function ($event) {
        if ($event.type == "mouseenter") {
            this.OnPin = true;
            console.log("on the pin - setting value to true - de-activate canvas clicks");
        }
        else {
            this.OnPin = false;
            console.log("outside of the pin - setting value to false - activate canvas clicks");
        }
    };
    // menuhover event to control the menu and the canvas behind
    ProjectDetailComponent.prototype.MenuEvent = function ($event) {
        if ($event.type == "mouseenter") {
            this.OutOfMenu = false;
            console.log("inside menu div - setting value to false - do not close the menu when inside");
        }
        else {
            this.OutOfMenu = true;
            console.log("outside menu div - setting value to true - close the menu when outside");
        }
    };
    ProjectDetailComponent.prototype.detectRightMouseClick = function ($event) {
        // alert("function called");
        var canvasXY = document.getElementById('pin-canvas');
        var globalPosRect = canvasXY.getBoundingClientRect();
        var singlepin = document.getElementById('singlePin');
        var pinRect = singlepin.getBoundingClientRect();
        var pinWidth = (pinRect.width);
        var pinHeight = (pinRect.height);
        console.log("Pin width...:" + pinWidth + " --- Pin Height..." + pinHeight);
        var leftoffset = globalPosRect.left;
        var topoffset = globalPosRect.top;
        // var box2TextRectangle = box2.getBoundingClientRect();
        // needed for IE8
        var canvasWidth = (globalPosRect.width ? globalPosRect.width : (globalPosRect.right - globalPosRect.left));
        var canvasHeight = (globalPosRect.height ? globalPosRect.height : (globalPosRect.bottom - globalPosRect.top));
        console.log("div total width.:", canvasWidth);
        console.log("div total height.:", canvasHeight);
        console.log("div left pos.:", leftoffset);
        console.log("div top pos.:", topoffset);
        //pin canvas div offset adjustment according to the  dom
        this.leftX = $event.clientX - leftoffset;
        this.topY = $event.clientY - topoffset;
        //pin offset adjustment according to the pin height and width
        this.leftX = this.leftX - (pinWidth / 2) + 3;
        this.topY = this.topY - pinHeight + 5;
        // pixel to percentage conversions
        var percentX = (this.leftX / canvasWidth) * 100;
        var percentY = (this.topY / canvasHeight) * 100;
        console.log('percentX ---' + percentX);
        console.log('percentY ---' + percentY);
        console.log('mouse coordinates X---' + $event.clientX);
        console.log('mouse coordinates Y---' + $event.clientY);
        console.log('leftX---' + this.leftX);
        console.log('topY---' + this.topY);
        if (!this.OnPin) {
            //drop pin
            if ($event.which === 3 && this.RightMenuActive === false && this.LeftMenuActive === false) {
                this.selectedPin = null; //setting the selectedPin to null if not clicked on pin
                this.addPin("Pin100", percentX, percentY, "black");
                // this.projpins = this.projpins.slice();
                // this.getAllPins();
                // this.projpins.push("Pin100",this.leftX,this.topY,"black");
                // this.projpins.push(this.leftX,this.topY,"black");
                // this.projpin.name = 'Pin100';
                // this.projpin.x =this.leftX;
                // this.projpin.y = this.topY;
                // this.projpin.color ="black";
                //
                // this.projpins.push(this.projpin);
                console.log('projpins=', this.projpins);
                // this.rightPanelStyle = {'display':'block','left':percentX + '%','top':percentY + '%'};
                // this.RightMenuActive = true;
                return false;
            }
            else {
                if (this.OutOfMenu) {
                    this.selectedPin = null; //setting the selectedPin to null if not clicked on pin
                    this.rightPanelStyle = { 'display': 'none' };
                    this.leftPanelStyle = { 'display': 'none' };
                    this.RightMenuActive = false;
                    this.LeftMenuActive = false;
                    return false;
                }
                return false;
            } //else
        }
        else {
            this.rightPanelStyle = { 'display': 'none' };
            this.leftPanelStyle = { 'display': 'none' };
            this.RightMenuActive = false;
            this.LeftMenuActive = false;
            if ($event.which === 3) {
                this.rightPanelStyle = { 'display': 'block', 'left': percentX + '%', 'top': percentY + '%' };
                this.RightMenuActive = true;
                return false;
            }
            else {
                if ($event.which === 1) {
                    this.leftPanelStyle = { 'display': 'block', 'left': percentX + '%', 'top': percentY + '%' };
                    this.LeftMenuActive = true;
                    return false;
                }
            }
        }
    }; //end detectRightMouseClick function bracket
    ProjectDetailComponent.prototype.scrollLeft = function () {
        // jQuery('#my-div').animate({scrollLeft: 100}, 500);
        jQuery('#my-div').animate({ left: "+=500px" });
        jQuery('#my-div').animate({ top: "-=300px" });
        // jQuery('#my-div').hide();
        // document.getElementById('my-div').style.display=='block';
        // alert("hello");
    };
    ProjectDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* Component */])({
            template: __webpack_require__(655),
            styles: ["\n  .selected {\n    text-shadow: 0 0 8px red;\n  }\n  #upload_form .modal-dialog  {width:500px;}\n  "],
            providers: [__WEBPACK_IMPORTED_MODULE_5__pin_service__["a" /* PinService */], __WEBPACK_IMPORTED_MODULE_6__project_service__["a" /* ProjectService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__pin_service__["a" /* PinService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__pin_service__["a" /* PinService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__project_service__["a" /* ProjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__project_service__["a" /* ProjectService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["g" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["g" /* ElementRef */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === 'function' && _e) || Object])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
    var _a, _b, _c, _d, _e;
}()); // end of class
//# sourceMappingURL=/Users/usman/Documents/workspace-ecommerce/manga/src/project-detail.component.js.map

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_timer__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProjectService; });
// import { Injectable } from '@angular/core';
//
// @Injectable()
// export class ProjectService {
//
//   constructor() { }
//
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectService = (function () {
    // private baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    // private baseUrl = 'https://api.myjson.com/bins/yg45';
    // private baseUrl = 'https://api.myjson.com/bins/48trl';
    function ProjectService(http) {
        this.http = http;
        this.baseUrl = 'http://192.241.209.229/v1/project';
    }
    ProjectService.prototype.getProjects = function () {
        return this.http.get(this.baseUrl).map(function (res) { return res.json(); });
        // return this.http.get(this.baseUrl)
        //     .toPromise()
        //     .then(response => response.json());
    };
    //gets a single project
    ProjectService.prototype.getProject = function (id) {
        return this.http.get('http://192.241.209.229/v1/project/' + id).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.createProject = function (proj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(proj);
        // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
        return this.http.post('/api/food/', body, headers).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.updateProject = function (proj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(proj);
        // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
        return this.http.put('/api/food/' + proj.id, body, headers).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.deleteProject = function (proj) {
        // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
        return this.http.delete('/api/food/' + proj.id);
    };
    ProjectService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ProjectService);
    return ProjectService;
    var _a;
}());
//# sourceMappingURL=/Users/usman/Documents/workspace-ecommerce/manga/src/project.service.js.map

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_service__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_timer__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_timer__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectComponent = (function () {
    function ProjectComponent(projectService, http) {
        // call create service here
        // console.log('In bookmarks service');
        // this.projectService.getProjects().then(projects => console.info(projects));
        this.projectService = projectService;
        this.http = http;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.getAllProjects();
    };
    ProjectComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.projectService.getProjects().subscribe(
        // the first argument is a function which runs on success
        // data => { console.log(data);},
        function (data) { _this.userProjects = data; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { return console.log('done loading projects'); });
    };
    ProjectComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            // selector: 'app-project',
            providers: [__WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* ProjectService */]],
            template: __webpack_require__(656),
            styles: [__webpack_require__(651)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* ProjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* ProjectService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === 'function' && _b) || Object])
    ], ProjectComponent);
    return ProjectComponent;
    var _a, _b;
}()); // end class
//# sourceMappingURL=/Users/usman/Documents/workspace-ecommerce/manga/src/project.component.js.map

/***/ },

/***/ 381:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 381;


/***/ },

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(491);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_27" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/usman/Documents/workspace-ecommerce/manga/src/main.js.map

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppRoutingComponent = (function () {
    function AppRoutingComponent() {
    }
    AppRoutingComponent.prototype.ngOnInit = function () {
    };
    AppRoutingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-app-routing',
            template: __webpack_require__(652),
            styles: [__webpack_require__(650)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingComponent);
    return AppRoutingComponent;
}());
//# sourceMappingURL=/Users/usman/Documents/workspace-ecommerce/manga/src/app-routing.component.js.map

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_project_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_project_create_project_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_detail_project_detail_component__ = __webpack_require__(326);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
//
// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
// export class AppRoutingModule { }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
                    { path: 'project', component: __WEBPACK_IMPORTED_MODULE_2__project_project_component__["a" /* ProjectComponent */] },
                    { path: 'createproject', component: __WEBPACK_IMPORTED_MODULE_4__create_project_create_project_component__["a" /* CreateProjectComponent */] },
                    { path: 'project-detail/:pid', component: __WEBPACK_IMPORTED_MODULE_6__project_detail_project_detail_component__["a" /* ProjectDetailComponent */] }
                ])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/Users/usman/Documents/workspace-ecommerce/manga/src/app-routing.module.js.map

/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_project_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_app_routing_component__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_app_routing_module__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_project_create_project_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__project_detail_project_detail_component__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__truncate_pipe__ = __webpack_require__(494);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_app_routing_component__["a" /* AppRoutingComponent */],
                __WEBPACK_IMPORTED_MODULE_9__create_project_create_project_component__["a" /* CreateProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__project_detail_project_detail_component__["a" /* ProjectDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__truncate_pipe__["a" /* TruncatePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/usman/Documents/workspace-ecommerce/manga/src/app.module.js.map

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(490);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/usman/Documents/workspace-ecommerce/manga/src/index.js.map

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_timer__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PinService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PinService = (function () {
    function PinService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // private pinsUrl = '/app/pins.json';  // URL to web api
        this.pinsUrl = 'http://192.241.209.229/v1/project/36/pin/';
    }
    // get pins from the database and send it to display
    // getPins(): Promise<Pin[]> {
    //   return this.http.get(this.pinsUrl)
    //              .toPromise()
    //              .then(response => response.json().data as Pin[])
    //              .catch(this.handleError);
    // }
    PinService.prototype.getPins = function (pid) {
        return this.http.get("http://192.241.209.229/v1/project/" + pid + "/pin/").map(function (res) { return res.json(); });
        // return this.http.get('https://jsonplaceholder.typicode.com/posts')
        //    .toPromise()
        //    .then(response => response.json())
    };
    //gets a single pin
    // getPin(id: number): Promise<Pin> {
    //   return this.getPins()
    //              .then(pins => pins.find(pin => pin.id === id));
    // }
    //gets a single project
    PinService.prototype.getPin = function (id) {
        return this.http.get(this.pinsUrl).map(function (res) { return res.json(); });
    };
    // creating or adding pin
    // create(name: string, x:number, y:number, color:string): Promise<Pin[]> {
    // return this.http
    //   .post(this.pinsUrl, JSON.stringify({name: name, x: x, y: y, color: color}), {headers: this.headers})
    //   .toPromise()
    //   .then(res => res.json().data)
    //   .catch(this.handleError);
    // }
    PinService.prototype.createPin = function (pid, name, x, y, color) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({ name: name, pinx: x, piny: y, color: color, description: 'newPin', pinShapeId: 1 });
        // { pin creation json
        //    "name":"randomName",
        //    "color":"ORANGE",
        //    "pinx":15.3455,
        //    "piny":58.9876,
        //    "description":"seventh pin drop.",
        //    "pinShapeId":1
        // }
        // http://192.241.209.229/v1/project/'+pid+'/pin
        // http://584ed4b67ba93b12001db56a.mockapi.io/api/v1/pin/
        // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
        return this.http.post('http://192.241.209.229/v1/project/' + pid + '/pin', body, options).map(function (res) { return res.json(); });
    };
    // updating a pin
    // update(pin: Pin): Promise<Pin> {
    //   const url = `${this.pinsUrl}/${pin.id}`;
    //   return this.http
    //     .put(url, JSON.stringify(pin), {headers: this.headers})
    //     .toPromise()
    //     .then(() => pin)
    //     .catch(this.handleError);
    // }
    PinService.prototype.updatePin = function (pin) {
        var url = this.pinsUrl + "/" + pin.id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(pin);
        // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
        return this.http.put(this.pinsUrl + pin.id, body, headers).map(function (res) { return res.json(); });
    };
    // deleting the pin service
    // delete(id: number): Promise<void> {
    //   const url = `${this.pinsUrl}/${id}`;
    //   return this.http.delete(url, {headers: this.headers})
    //     .toPromise()
    //     .then(() => null)
    //     .catch(this.handleError);
    // }
    PinService.prototype.deletePin = function (id) {
        var url = this.pinsUrl + "/" + id;
        // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
        return this.http.delete(url);
    };
    //error handeling and displayig the error in the console
    PinService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PinService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], PinService);
    return PinService;
    var _a;
}());
//# sourceMappingURL=/Users/usman/Documents/workspace-ecommerce/manga/src/pin.service.js.map

/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Pin; });
var Pin = (function () {
    function Pin() {
    }
    return Pin;
}());
//# sourceMappingURL=/Users/usman/Documents/workspace-ecommerce/manga/src/pin.js.map

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TruncatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    // transform(value: any, args?: any): any {
    //   return null;
    // }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args.length > 0 ? parseInt(args[0], 10) : 10;
        var trail = args.length > 1 ? args[1] : '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    TruncatePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Pipe */])({
            name: 'truncate'
        }), 
        __metadata('design:paramtypes', [])
    ], TruncatePipe);
    return TruncatePipe;
}());
//# sourceMappingURL=/Users/usman/Documents/workspace-ecommerce/manga/src/truncate.pipe.js.map

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/usman/Documents/workspace-ecommerce/manga/src/environment.js.map

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/usman/Documents/workspace-ecommerce/manga/src/polyfills.js.map

/***/ },

/***/ 650:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 651:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 652:
/***/ function(module, exports) {

module.exports = "<p>\n  app-routing works!\n</p>\n"

/***/ },

/***/ 653:
/***/ function(module, exports) {

module.exports = "\n   <div class=\"mainNav\">\n      <div class=\"container\">\n      \t<div class=\"row\"><!--row-->\n            <div class=\"brand-logo col-md-2 col-sm-4\"><!--Logo-->\n                <a href=\"javascript:;\"><img src=\"images/logo-nonummy.png\" alt=\"Logo\" /></a>\n            </div><!--Logo-->\n            <!--Main Navigation-->\n            <nav class=\"col-md-8 col-lg-8 col-sm-8 col-xs-10\">\n                <ul class=\"nav nav-pills navbar-right\">\n                    <li role=\"presentation\" class=\"active\"><a href=\"#\">Home</a></li>\n                    <li role=\"presentation\" class=\"dropdown hidden-xs\">\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Share <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"#\">Drop Down 1</a></li>\n                            <li><a href=\"#\">Drop Down 2</a></li>\n                            <li><a href=\"#\">Drop Down 3</a></li>\n                        </ul>\n                    </li>\n                    <li role=\"presentation\"><a href=\"#\">Explore</a></li>\n                    <li role=\"presentation\"><a href=\"#\">Your Projects</a></li>\n                </ul>\n            </nav>\n           \t<!--Main Navigation-->\n            <!--Loged Avatar-->\n            <div class=\"col-xs-1 visible-xs searchBtn\">\n               <a class=\"pull-right\" href=\"#\">Search</a>\n            </div>\n            <ul class=\"nav nav-pills col-xs-1 visible-xs mobileOptions\"><!--Responsive Menu-->\n                <li role=\"presentation\" class=\"dropdown\">\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"navOptions\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Drop Down 1</a></li>\n                        <li><a href=\"#\">Drop Down 2</a></li>\n                        <li><a href=\"#\">Drop Down 3</a></li>\n                    </ul>\n                </li>\n            </ul><!--Responsive Menu-->\n            <div class=\"col-md-2 col-sm-2 memberProfile hidden-sm hidden-xs\">\n                <ul class=\"nav nav-pills pull-left\">\n                    <li role=\"presentation\" class=\"dropdown\">\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Account <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"#\">Drop Down 1</a></li>\n                            <li><a href=\"#\">Drop Down 2</a></li>\n                            <li><a href=\"#\">Drop Down 3</a></li>\n                        </ul>\n                    </li>\n                </ul>\n                <a href=\"javascript:;\" class=\"profileImgThumb\"><img src=\"images/profile-avatar.png\" alt=\"Member Photo\"/></a>\n            </div>\n            <!--Loged Avatar-->\n\t     </div><!--row-->\n      </div>\n   </div>\n   <!--Search Bar-->\n    <div class=\"searchBar\">\n        <div class=\"container\">\n        \t<div class=\"row\">\n                <div class=\"col-lg-1 col-md-1\"></div>\n                <div class=\"col-lg-10 col-md-10\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-btn\"><button class=\"btn blueBtn searchProjectBtn btn-default\" type=\"button\">Interest</button></span>\n                        <input type=\"text\" class=\"form-control searchInput text-right\" placeholder=\"Search projects\">\n                    </div><!-- /input-group -->\n                </div>\n                <div class=\"col-lg-1 col-md-1\"></div>\n            </div>\n            <div class=\"row hidden-xs\">\n            \t<div class=\"col-lg-4 col-md-4 hidden-sm\"></div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8\">\n                    <ul class=\"searchAttrs list-inline text-center\">\n                    \t   <li class=\"active\"><a href=\"javascript:;\">Like</a></li>\n                        <li><a href=\"javascript:;\">Size</a></li>\n                        <li><a href=\"javascript:;\">Date</a></li>\n\t\t\t\t\t      </ul>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-4\">\n\t                <p class=\"favrouts text-right\"><a href=\"javascript:;\">favourites</a></p>\n                </div>\n                <div class=\"col-lg-1 col-md-1 hidden-sm\"></div>\n            </div>\n        </div>\n    </div>\n    <!--Search Bar-->\n    <!-- Mian contents-->\n    <div class=\"container\">\n        <!-- Add Project -->\n        <div class=\"row addProject\"><!--Row-->\n        \t<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n            \t<h4>New Project</h4>\n            </div>\n            <form>\n                <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12\">\n                    <div class=\"form-group\">\n                        <label class=\"sr-only \" for=\"InputProjectTitle\">Project Name</label>\n                        <input type=\"text\" class=\"form-control noRedius\" id=\"InputProjectTitle\" placeholder=\"Project Name\" #InputProjectTitle>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"sr-only\" for=\"InputProject\">Museum, Monuments...</label>\n                        <input type=\"text\" class=\"form-control noRedius\" id=\"InputProject\" placeholder=\"Museum, Monuments...\" #InputProject>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"sr-only\" for=\"InputPassword\">Description</label>\n                        <textarea class=\"form-control noRedius\" rows=\"6\" id=\"InputProjectDesc\" placeholder=\"Description\" #InputProjectDesc></textarea>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center\">\n                    <div class=\"form-group projectFileImage\"\n                    [ngStyle]=\"{'background-image':'url(' + imgurl + ')'}\"\n                    style=\"background-size: cover; background-repeat: no-repeat; background-position: center center;\">\n                      <!-- <img [src]=\"imgurl\" style=\"width:100%\"> -->\n                        <h4>Project Image</h4>\n                        <span class=\"green-btn btn-file\">\n                            Browse <input type='file' name=\"file1\" id=\"file1\" (change)=\"readUrl($event)\" #file1>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                \t<button type=\"submit\" class=\"custmBtn blueBtn\"\n                  (click) = 'createProject(InputProjectTitle.value, InputProject.value, InputProjectDesc.value, file1.files[0]  )'>Create</button>\n                </div>\n            </form>\n        </div><!--Row-->\n        <!-- Add Project -->\n    </div>\n<!-- Mian contents-->\n"

/***/ },

/***/ 654:
/***/ function(module, exports) {

module.exports = "<div class=\"mainBK\">\n <div class=\"container\">\n      <div class=\"row main\">\n          <div class=\"col-md-4 col-sm-4 hidden-xs\">&nbsp;</div>\n          <div class=\"col-md-4 col-sm-4 col-xs-12  text-center transWhiteBK signIn\">\n               <div class=\"alignCenter\">\n                 <div class=\"logo text-center\">\n                    <img src=\"images/logo-nonummy.png\"  alt=\"Logo\" />\n                 </div>\n                 <div class=\"panel-title fontColorWhite\">\n                     <h3 class=\"title\">Sign In</h3>\n                 </div>\n                 <form class=\"SignINForm\">\n                     <div class=\"form-group\">\n                         <label class=\"sr-only\" for=\"inputEmail\">Email</label>\n                         <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\n                     </div>\n                     <div class=\"form-group\">\n                         <label class=\"sr-only\" for=\"inputPassword\">Password</label>\n                         <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\n                     </div>\n                     <button type=\"submit\" class=\"btn btn-default btn-block\">Join nonummy</button>\n                 </form>\n                 <div class=\"connectPnl\">\n                     <p>Connect with us</p>\n                     <ul class=\"list-inline\">\n                         <li><a class=\"fbIcon\" href=\"javascript:;\">Facebook</a></li>\n                         <li><a class=\"googleIcon\" href=\"javascript:;\">Google</a></li>\n                         <li><a class=\"lkIcon\" href=\"javascript:;\">Linkdin</a></li>\n                     </ul>\n                 </div>\n               </div>\n               <div class=\"clearFix\"></div>\n          </div>\n          <div class=\"col-md-4 col-sm-4 hidden-xs\">&nbsp;</div>\n      </div>\n   </div>\n </div>\n<!-- end Main Wrapper -->\n"

/***/ },

/***/ 655:
/***/ function(module, exports) {

module.exports = "\n<div class=\"mainNav\">\n   <div class=\"container\">\n     <div class=\"row\"><!--row-->\n         <div class=\"brand-logo col-md-2 col-sm-4\"><!--Logo-->\n             <a href=\"homePage.html\"><img src=\"images/logo-nonummy.png\" alt=\"Logo\" /></a>\n         </div><!--Logo-->\n         <!--Main Navigation-->\n         <nav class=\"col-md-8 col-lg-8 col-sm-8 col-xs-10\">\n             <ul class=\"nav nav-pills navbar-right\">\n                 <li role=\"presentation\"><a href=\"shareProject.html\">Share</a></li>\n                 <li role=\"presentation\"><a href=\"explorePage.html\">Explore</a></li>\n                 <li role=\"presentation\"><a href=\"homePage.html\">My Projects</a></li>\n             </ul>\n         </nav>\n         <!--Main Navigation-->\n         <!--Loged Avatar-->\n         <div class=\"col-xs-1 visible-xs searchBtn\">\n             <a class=\"pull-right\" href=\"#\">Search</a>\n         </div>\n         <ul class=\"nav nav-pills col-xs-1 visible-xs mobileOptions\"><!--Responsive Menu-->\n             <li role=\"presentation\" class=\"dropdown\">\n                 <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"navOptions\"></span></a>\n                 <ul class=\"dropdown-menu\">\n                     <li><a href=\"#\">Drop Down 1</a></li>\n                     <li><a href=\"#\">Drop Down 2</a></li>\n                     <li><a href=\"#\">Drop Down 3</a></li>\n                 </ul>\n             </li>\n         </ul><!--Responsive Menu-->\n         <div class=\"col-md-2 col-sm-2 col-lg-2  memberProfile hidden-sm hidden-xs\">\n             <a href=\"javascript:;\" class=\"pull-right profileImgThumb\"><img src=\"images/profile-avatar.png\" alt=\"Member Photo\"/></a>\n             <ul class=\"nav nav-pills pull-right\">\n                 <li role=\"presentation\" class=\"dropdown\">\n                     <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Account <span class=\"caret\"></span></a>\n                     <ul class=\"dropdown-menu\">\n                         <li><a href=\"#\">Edward Lear</a></li>\n                         <li><a href=\"#\">Edit Profile</a></li>\n                         <li><a href=\"#\">Sign out</a></li>\n                     </ul>\n                 </li>\n             </ul>\n         </div>\n         <!--Loged Avatar-->\n         </div><!--row-->\n     </div>\n </div>\n<!--Search Bar-->\n<!-- Mian contents-->\n <div class=\"projectPins\"\n      oncontextmenu=\"return false\"\n      id=\"pin-canvas\"\n      (mouseup)=\"detectRightMouseClick($event)\">\n\n  <!-- <span \"let proj of sproj?.data\"> -->\n   <img [src]=sproj?.data.imagePath alt=\"Loading Project...\" class=\"picWidth\" style=\"Object-fit: contain;\"/>\n  <!-- </span> -->\n   <!-- <img src='http://lorempixel.com/1000/600/city/1' alt=\"Loading Project...\" class=\"picWidth\" style=\"Object-fit: contain;\"/> -->\n\n\n     <!-- {{project.pimg}} -->\n     <!-- {{sproj.pname}} -->\n     <!-- userProjects?.data -->\n     <span *ngFor=\"let pin of projpins?.data\" class=\"icon icon-pin-1\" style=\"position: absolute;\"\n           [style.left.%]=pin.pinx [style.top.%]=pin.piny [style.color]=pin.color\n           [class.selected]=\"pin === selectedPin\"\n           (mouseenter)=\"PinHover($event)\"\n           (mouseleave)=\"PinHover($event)\"\n           (mouseup)=\"pinSelect(pin)\"\n            id=\"singlePin\">\n           <!-- {{pin.id}} -->\n     </span>\n\n\n\n     <!-- ***************************************************** -->\n     <!-- right panel    -->\n     <div class=\"rightClickPanel\"\n      (mouseenter)=\"MenuEvent($event)\"\n      (mouseleave)=\"MenuEvent($event)\"\n      style=\"position:absolute; display:none;\"\n      [ngStyle]=\"rightPanelStyle\">\n\n      <div class=\"pinSpecification\">\n          <ul>\n              <li><a (click)=\"save()\" class=\"active\" href=\"javasript:;\" onclick='return false;'>Edit</a></li>\n              <li><a href=\"javasript:;\" (click)=\"scrollLeft();\" onclick='return false;'>Lock</a></li>\n              <li><a href=\"javasript:;\" (click)=\"delete(pin);\" onclick=\"return false;\">Delete</a></li>\n          </ul>\n      </div>\n\n     </div>\n     <!-- right panel    -->\n     <!-- left panel    -->\n     <div class=\"leftClickPanel\"\n      (mouseenter)=\"MenuEvent($event)\"\n      (mouseleave)=\"MenuEvent($event)\"\n      style=\"position:absolute; display:none;\"\n      [ngStyle]=\"leftPanelStyle\">\n\n      <div class=\"pinSpecification pinProjectMark\">\n         <ul>\n           <li><a onclick=\"return false;\" data-toggle=\"modal\" data-target=\"#image_gal\"><span>&nbsp;</span></a></li>\n           <li><a onclick=\"return false;\" data-toggle=\"modal\" data-target=\"#video_gal\"><span class=\"cameraMovieBg\">&nbsp;</span></a></li>\n           <li><a onclick=\"return false;\" data-toggle=\"modal\" data-target=\"#file_gal\"><span class=\"chartBg\">&nbsp;</span></a></li>\n           <li><a onclick=\"return false;\" data-toggle=\"modal\" data-target=\"#audio_gal\"><span class=\"recrodBg\">&nbsp;</span></a></li>\n           <li><a href=\"javasript:;\"><span class=\"mapMakerBg\">&nbsp;</span></a></li>\n           <li><a href=\"javasript:;\">Project</a></li>\n         </ul>\n      </div>\n\n     </div>\n     <!-- left panel    -->\n\n\n </div>\n <!-- projectpins -->\n\n\n  <!-- Image Gallery-->\n\n  \t<div id=\"image_gal\" class=\"modal fade\" tabindex=\"-1\" data-backdrop=\"static\" data-keyboard=\"false\" style=\"display: none;\">\n          <div class=\"row addProject\"><!--Row-->\n              <div class=\"uploadProject\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n                  <div class=\"col-lg-12 col-md-12 col-sm-12 hidden-xs\">\n                      <h4>Upload Media</h4>\n                  </div>\n                  <ul class=\"col-xs-12 visible-xs uploadBlueBk\"><!--Responsive upload Menu-->\n                      <li role=\"presentation\" class=\"dropdown\">\n                          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Gallery<span class=\"caret\"></span></a>\n                          <ul class=\"dropdown-menu\">\n                              <li><a href=\"#\">Images</a></li>\n                              <li><a href=\"#\">Videos </a></li>\n                              <li><a href=\"#\">Text</a></li>\n                              <li><a href=\"#\">Audio</a></li>\n                              <li><a href=\"#\">Project</a></li>\n                          </ul>\n                      </li>\n                  </ul><!--Responsive upload Menu-->\n                  <div class=\"col-lg-9 col-md-9 col-sm-9 hidden-xs\">\n                      <ul class=\"uploadLink list-inline\">\n                          <li class=\"active\"><a href=\"javascript:;\">Images</a></li>\n                          <li><a href=\"javascript:;\">Videos </a></li>\n                          <li><a href=\"javascript:;\">Text</a></li>\n                          <li><a href=\"javascript:;\">Audio</a></li>\n                          <li><a href=\"javascript:;\">Project</a></li>\n                      </ul>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 hidden-xs\">\n                      <form class=\"searchMedia\">\n                      <input type=\"text\" class=\"form-control searchFiles\" placeholder=\"Search Media\">\n                      </form>\n                      <ul class=\"uploadLink uploadFilterLink list-inline text-right\">\n                          <li class=\"active\"><a href=\"javascript:;\">Likes</a></li>\n                          <li><a href=\"javascript:;\">Size</a></li>\n                          <li><a href=\"javascript:;\">Date</a></li>\n                      </ul>\n                  </div>\n                  <div class=\"uploadMainBorder scrollbar\" id=\"customScroll\">\n                    <!-- gallery start -->\n                    <div id=\"image-gallery\" style=\"display:none;\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-1.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-1.jpg\"\n                        data-description=\"Image 1 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-2.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-2.jpg\"\n                        data-description=\"Image 2 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-3.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-4.jpg\"\n                        data-description=\"Image 3 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-4.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-4.jpg\"\n                        data-description=\"Image 4 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-5.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-5.jpg\"\n                        data-description=\"Image 5 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-6.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-6.jpg\"\n                        data-description=\"Image 6 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-7.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-7.jpg\"\n                        data-description=\"Image 7 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-8.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-7.jpg\"\n                        data-description=\"Image 8 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-9.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-9.jpg\"\n                        data-description=\"Image 9 Description\">\n\n                        <!-- next  9 images -->\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-1.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-1.jpg\"\n                        data-description=\"Image 1 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-2.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-2.jpg\"\n                        data-description=\"Image 2 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-3.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-4.jpg\"\n                        data-description=\"Image 3 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-4.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-4.jpg\"\n                        data-description=\"Image 4 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-5.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-5.jpg\"\n                        data-description=\"Image 5 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-6.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-6.jpg\"\n                        data-description=\"Image 6 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-7.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-7.jpg\"\n                        data-description=\"Image 7 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-8.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-7.jpg\"\n                        data-description=\"Image 8 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-9.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-9.jpg\"\n                        data-description=\"Image 9 Description\">\n\n\n\n                        <!-- next  9 images -->\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-1.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-1.jpg\"\n                        data-description=\"Image 1 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-2.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-2.jpg\"\n                        data-description=\"Image 2 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-3.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-4.jpg\"\n                        data-description=\"Image 3 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-4.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-4.jpg\"\n                        data-description=\"Image 4 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-5.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-5.jpg\"\n                        data-description=\"Image 5 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-6.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-6.jpg\"\n                        data-description=\"Image 6 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-7.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-7.jpg\"\n                        data-description=\"Image 7 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-8.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-7.jpg\"\n                        data-description=\"Image 8 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-9.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-9.jpg\"\n                        data-description=\"Image 9 Description\">\n\n                        <!-- next  9 images -->\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-1.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-1.jpg\"\n                        data-description=\"Image 1 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-2.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-2.jpg\"\n                        data-description=\"Image 2 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-3.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-4.jpg\"\n                        data-description=\"Image 3 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-4.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-4.jpg\"\n                        data-description=\"Image 4 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-5.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-5.jpg\"\n                        data-description=\"Image 5 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-6.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-6.jpg\"\n                        data-description=\"Image 6 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-7.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-7.jpg\"\n                        data-description=\"Image 7 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-8.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-7.jpg\"\n                        data-description=\"Image 8 Description\">\n\n                      <img alt=\"Image 1 Title\" src=\"images/uploadPic/upload-pic-9.jpg\"\n                        data-image=\"images/uploadPic/upload-pic-9.jpg\"\n                        data-description=\"Image 9 Description\">\n\n                    </div>\n                    <!-- gallery end -->\n                  </div>\n\n                  <div class=\"col-lg-5 col-md-5 col-sm-6 col-xs-6\">\n                      <p><a href=\"javascript:;\">Delete</a></p>\n                  </div>\n                  <div class=\"col-lg-4 col-md-4 hidden-sm hidden-xs\"></div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                      <div class=\"createBtns\">\n                          <ul class=\"list-inline text-right\">\n                              <li><a class=\"custmBtn blueBtn\" href=\"javascript:;\">Upload Image</a></li>\n                          </ul>\n                      </div>\n                  </div>\n              </div>\n          </div><!--Row-->\n\n      </div>\n  <!-- Image Gallery-->\n\n  <!-- Video Gallery-->\n  \t<div id=\"video_gal\" class=\"modal fade\" tabindex=\"-1\" data-backdrop=\"static\" data-keyboard=\"false\" style=\"display: none;\">\n          <div class=\"row addProject\"><!--Row-->\n              <div class=\"uploadProject\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n                  <div class=\"col-lg-12 col-md-12 col-sm-12 hidden-xs\">\n                      <h4>Upload Media</h4>\n                  </div>\n                  <ul class=\"col-xs-12 visible-xs uploadBlueBk\"><!--Responsive upload Menu-->\n                      <li role=\"presentation\" class=\"dropdown\">\n                          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Gallery<span class=\"caret\"></span></a>\n                          <ul class=\"dropdown-menu\">\n                              <li><a href=\"#\">Images</a></li>\n                              <li><a href=\"#\">Videos </a></li>\n                              <li><a href=\"#\">Text</a></li>\n                              <li><a href=\"#\">Audio</a></li>\n                              <li><a href=\"#\">Project</a></li>\n                          </ul>\n                      </li>\n                  </ul><!--Responsive upload Menu-->\n                  <div class=\"col-lg-9 col-md-9 col-sm-9 hidden-xs\">\n                      <ul class=\"uploadLink list-inline\">\n                          <li class=\"active\"><a href=\"javascript:;\">Images</a></li>\n                          <li><a href=\"javascript:;\">Videos </a></li>\n                          <li><a href=\"javascript:;\">Text</a></li>\n                          <li><a href=\"javascript:;\">Audio</a></li>\n                          <li><a href=\"javascript:;\">Project</a></li>\n                      </ul>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 hidden-xs\">\n                      <form class=\"searchMedia\">\n                      <input type=\"text\" class=\"form-control searchFiles\" placeholder=\"Search Media\">\n                      </form>\n                      <ul class=\"uploadLink uploadFilterLink list-inline text-right\">\n                          <li class=\"active\"><a href=\"javascript:;\">Likes</a></li>\n                          <li><a href=\"javascript:;\">Size</a></li>\n                          <li><a href=\"javascript:;\">Date</a></li>\n                      </ul>\n                  </div>\n                  <div class=\"uploadMainBorder scrollbar\" id=\"customScroll\">\n                    <!-- gallery start -->\n                    <div id=\"video-gallery\" style=\"display:none;\">\n\n                      <div data-type=\"youtube\"\n                         data-videoid=\"M2-sponIRGM\"\n                         data-title=\"GoPro Demo\"\n                         data-description=\"by Go Pro\"></div>\n\n                      <div data-type=\"youtube\"\n                          data-videoid=\"7SDrjwtfKMk\"\n                          data-title=\"GoPro Demo\"\n                          data-description=\"by Go Pro\"></div>\n\n                      <div data-type=\"youtube\"\n                          data-videoid=\"qOgZJJmLfhA\"\n                          data-title=\"GoPro Demo\"\n                          data-description=\"by Go Pro\"></div>\n\n                      <div data-type=\"youtube\"\n                          data-videoid=\"jfqKObTVyHE\"\n                          data-title=\"GoPro Demo\"\n                          data-description=\"by Go Pro\"></div>\n\n                      <div data-type=\"youtube\"\n                         data-videoid=\"hzb6uI7xRA8\"\n                         data-title=\"GoPro Demo\"\n                         data-description=\"by Go Pro\"></div>\n\n\n                       <div data-type=\"youtube\"\n                          data-videoid=\"KaT9lEyqzU0\"\n                          data-title=\"GoPro Demo\"\n                          data-description=\"by Go Pro\"></div>\n\n                       <div data-type=\"youtube\"\n                           data-videoid=\"ssc5vRxvuk4\"\n                           data-title=\"GoPro Demo\"\n                           data-description=\"by Go Pro\"></div>\n\n\n\n                       <div data-type=\"youtube\"\n                            data-videoid=\"jDgeABMDuiU\"\n                            data-title=\"GoPro Demo\"\n                            data-description=\"by Go Pro\"></div>\n\n\n                       <div data-type=\"youtube\"\n                           data-videoid=\"UOeZCNIAUvc\"\n                           data-title=\"GoPro Demo\"\n                           data-description=\"by Go Pro\"></div>\n\n                       <div data-type=\"youtube\"\n                            data-videoid=\"0pHFJELNKZk\"\n                            data-title=\"GoPro Demo\"\n                            data-description=\"by Go Pro\"></div>\n\n\n                       <!-- audio file       -->\n                       <img alt=\"Html5 Video\"\n                       src=\"images/uploadPic/upload-pic-2.jpg\"\n                       data-type=\"html5video\"\n                       data-image=\"images/uploadPic/upload-pic-2.jpg\"\n                       data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                       data-description=\"This is html5 6666666666 audio demo played by mediaelement2 player\">\n\n\n\n                       <img alt=\"Html5 Video\"\n                       src=\"images/uploadPic/upload-pic-3.jpg\"\n                       data-type=\"html5video\"\n                       data-image=\"images/uploadPic/upload-pic-3.jpg\"\n                       data-videomp4=\"https://www.dropbox.com/s/3m375bb6y4acf4e/sawaal.mp4?dl=1\"\n                       data-description=\"This is html5 audio demo played by mediaelement2 player\">\n\n                    </div>\n                    <!-- gallery end -->\n                  </div>\n\n                  <div class=\"col-lg-5 col-md-5 col-sm-6 col-xs-6\">\n                      <p><a href=\"javascript:;\">Delete</a></p>\n                  </div>\n                  <div class=\"col-lg-4 col-md-4 hidden-sm hidden-xs\"></div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                      <div class=\"createBtns\">\n                          <ul class=\"list-inline text-right\">\n                              <li><a class=\"custmBtn blueBtn\" href=\"javascript:;\">Upload Image</a></li>\n                          </ul>\n                      </div>\n                  </div>\n              </div>\n          </div><!--Row-->\n      </div>\n  <!-- Video Gallery-->\n\n  <!-- Audio Gallery-->\n    <div id=\"audio_gal\" class=\"modal fade\" tabindex=\"-1\" data-backdrop=\"static\" data-keyboard=\"false\" style=\"display: none;\">\n          <div class=\"row addProject\"><!--Row-->\n              <div class=\"uploadProject\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n                  <div class=\"col-lg-12 col-md-12 col-sm-12 hidden-xs\">\n                      <h4>Upload Media</h4>\n                  </div>\n                  <ul class=\"col-xs-12 visible-xs uploadBlueBk\"><!--Responsive upload Menu-->\n                      <li role=\"presentation\" class=\"dropdown\">\n                          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Gallery<span class=\"caret\"></span></a>\n                          <ul class=\"dropdown-menu\">\n                              <li><a href=\"#\">Images</a></li>\n                              <li><a href=\"#\">Videos </a></li>\n                              <li><a href=\"#\">Text</a></li>\n                              <li><a href=\"#\">Audio</a></li>\n                              <li><a href=\"#\">Project</a></li>\n                          </ul>\n                      </li>\n                  </ul><!--Responsive upload Menu-->\n                  <div class=\"col-lg-9 col-md-9 col-sm-9 hidden-xs\">\n                      <ul class=\"uploadLink list-inline\">\n                          <li class=\"active\"><a href=\"javascript:;\">Images</a></li>\n                          <li><a href=\"javascript:;\">Videos </a></li>\n                          <li><a href=\"javascript:;\">Text</a></li>\n                          <li><a href=\"javascript:;\">Audio</a></li>\n                          <li><a href=\"javascript:;\">Project</a></li>\n                      </ul>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 hidden-xs\">\n                      <form class=\"searchMedia\">\n                      <input type=\"text\" class=\"form-control searchFiles\" placeholder=\"Search Media\">\n                      </form>\n                      <ul class=\"uploadLink uploadFilterLink list-inline text-right\">\n                          <li class=\"active\"><a href=\"javascript:;\">Likes</a></li>\n                          <li><a href=\"javascript:;\">Size</a></li>\n                          <li><a href=\"javascript:;\">Date</a></li>\n                      </ul>\n                  </div>\n                  <div class=\"uploadMainBorder scrollbar\" id=\"customScroll\">\n                    <!-- gallery start -->\n                    <div id=\"audio-gallery\" style=\"display:none;\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                      <!-- audio file       -->\n                      <img alt=\"Html5 Video\"\n                      src=\"images/play.jpg\"\n                      data-type=\"html5video\"\n                      data-image=\"images/play.jpg\"\n                      data-videomp4=\"https://www.dropbox.com/s/okdhnuwk4es97ea/khayaldropbox.mp3?dl=1\"\n                      data-description=\"This is audio demo played by mediaelement2 player\">\n\n                    </div>\n                    <!-- gallery end -->\n                  </div>\n\n                  <div class=\"col-lg-5 col-md-5 col-sm-6 col-xs-6\">\n                      <p><a href=\"javascript:;\">Delete</a></p>\n                  </div>\n                  <div class=\"col-lg-4 col-md-4 hidden-sm hidden-xs\"></div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                      <div class=\"createBtns\">\n                          <ul class=\"list-inline text-right\">\n                              <li><a class=\"custmBtn blueBtn\" href=\"javascript:;\">Upload Image</a></li>\n                          </ul>\n                      </div>\n                  </div>\n              </div>\n          </div><!--Row-->\n      </div>\n  <!-- Audio Gallery-->\n\n  <!-- file gallery -->\n    <div id=\"file_gal\"  class=\"modal fade\" tabindex=\"-1\" data-backdrop=\"static\" data-keyboard=\"false\" style=\"display: none;\">\n              <div class=\"row addProject\"><!--Row-->\n                  <div class=\"uploadProject\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n                      <div class=\"col-lg-12 col-md-12 col-sm-12 hidden-xs\">\n                          <h4>Upload Media</h4>\n                      </div>\n                      <ul class=\"col-xs-12 visible-xs uploadBlueBk\"><!--Responsive upload Menu-->\n                          <li role=\"presentation\" class=\"dropdown\">\n                              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Gallery<span class=\"caret\"></span></a>\n                              <ul class=\"dropdown-menu\">\n                                  <li><a href=\"#\">Images</a></li>\n                                  <li><a href=\"#\">Videos </a></li>\n                                  <li><a href=\"#\">Text</a></li>\n                                  <li><a href=\"#\">Audio</a></li>\n                                  <li><a href=\"#\">Project</a></li>\n                              </ul>\n                          </li>\n                      </ul><!--Responsive upload Menu-->\n                      <div class=\"col-lg-9 col-md-9 col-sm-9 hidden-xs\">\n                          <ul class=\"uploadLink list-inline\">\n                              <li class=\"active\"><a href=\"javascript:;\">Images</a></li>\n                              <li><a href=\"javascript:;\">Videos </a></li>\n                              <li><a href=\"javascript:;\">Text</a></li>\n                              <li><a href=\"javascript:;\">Audio</a></li>\n                              <li><a href=\"javascript:;\">Project</a></li>\n                          </ul>\n                      </div>\n                      <div class=\"col-lg-3 col-md-3 col-sm-3 hidden-xs\">\n                          <form class=\"searchMedia\">\n                          <input type=\"text\" class=\"form-control searchFiles\" placeholder=\"Search Media\">\n                          </form>\n                          <ul class=\"uploadLink uploadFilterLink list-inline text-right\">\n                              <li class=\"active\"><a href=\"javascript:;\">Likes</a></li>\n                              <li><a href=\"javascript:;\">Size</a></li>\n                              <li><a href=\"javascript:;\">Date</a></li>\n                          </ul>\n                      </div>\n                      <div class=\"uploadMainBorder scrollbar\" id=\"customScroll\">\n                          <!--Row Upload Image-->\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <!--Row Upload Image-->\n                          <!--Row Upload Image-->\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <!--Row Upload Image-->\n                          <!--Row Upload Image-->\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <!--Row Upload Image-->\n                          <!--Row Upload Image-->\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <div class=\"uploadIamges\">\n                              <div class=\"mediaImg\">\n                                  <img src=\"images/docs.png\" alt=\"upload Picture\" />\n                              </div>\n                          </div>\n                          <!--Row Upload Image-->\n                      </div>\n\n                      <div class=\"col-lg-5 col-md-5 col-sm-6 col-xs-6\">\n                          <p><a href=\"javascript:;\">Delete</a></p>\n                      </div>\n                      <div class=\"col-lg-4 col-md-4 hidden-sm hidden-xs\"></div>\n                      <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6\">\n                          <div class=\"createBtns\">\n                              <ul class=\"list-inline text-right\">\n                                  <li><a class=\"custmBtn blueBtn\" href=\"javascript:;\" onclick=\"return false;\" data-toggle=\"modal\" data-target=\"#upload_form\">Upload Image</a></li>\n                                  <!-- <li><a data-toggle=\"modal\" data-target=\"#upload_form\" class=\"btn btn-danger\"> Show Me The Modal In Front</a></li> -->\n                              </ul>\n                          </div>\n                      </div>\n                  </div>\n              </div><!--Row-->\n          </div>\n  <!-- file gallery -->\n\n\n<!--\n  <div id=\"upload_form\" class=\"modal fade\" tabindex=\"-1\" data-keyboard=\"false\" style=\"display: none;\" style=\"background-color:white; width:500px; z-index: 2000 !important;\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n\n      <h2>HTML5 File Upload Progress Bar Tutorial</h2>\n      <form id=\"upload_form\" enctype=\"multipart/form-data\" method=\"post\">\n        <input type=\"file\" name=\"file1\" id=\"file1\"><br>\n        <input type=\"button\" value=\"Upload File\" onclick=\"uploadFile()\">\n        <progress id=\"progressBar\" value=\"0\" max=\"100\" style=\"width:300px;\"></progress>\n        <h3 id=\"status\"></h3>\n        <p id=\"loaded_n_total\"></p>\n      </form>\n\n    <div class=\"modal-footer\">\n      <button type=\"button\" data-dismiss=\"modal\" class=\"btn\">Close</button>\n      <button type=\"button\" class=\"btn btn-primary\">Ok</button>\n    </div>\n  </div>\n</div> -->\n\n<!-- <div id=\"upload_form\" class=\"modal fade\" tabindex=\"-1\" style=\"display: none; background-color:white;\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n    <h4 class=\"modal-title\">Upload your media/file</h4>\n  </div>\n  <div class=\"modal-body\">\n    <h2>HTML5 File Upload Progress Bar Tutorial</h2>\n    <form id=\"upload_form\" enctype=\"multipart/form-data\" method=\"post\">\n      <input type=\"file\" name=\"file1\" id=\"file1\"><br>\n      <input type=\"button\" value=\"Upload File\" onclick=\"uploadFile()\">\n      <progress id=\"progressBar\" value=\"0\" max=\"100\" style=\"width:300px;\"></progress>\n      <h3 id=\"status\"></h3>\n      <p id=\"loaded_n_total\"></p>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Close</button>\n    <button type=\"button\" class=\"btn btn-primary\">Ok</button>\n  </div>\n</div> -->\n\n\n\n\n<div class=\"modal fade\" id=\"upload_form\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal_title\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\"> <!-- property to determine size -->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"modal_title\">Some modal</h4>\n      </div>\n      <div class=\"modal-body\">\n        <h2>HTML5 File Upload Progress Bar Tutorial</h2>\n        <form id=\"upload_form\" enctype=\"multipart/form-data\" method=\"post\">\n          <input type=\"file\" name=\"file1\" id=\"file1\"><br>\n          <input type=\"button\" value=\"Upload File\" onclick=\"uploadFile()\">\n          <progress id=\"progressBar\" value=\"0\" max=\"100\" style=\"width:300px;\"></progress>\n          <h3 id=\"status\"></h3>\n          <p id=\"loaded_n_total\"></p>\n        </form>\n        <!-- modal content -->\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" id=\"some_button\" data-loading-text=\"Loading...\">Send</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n<!-- this is just a test div to work with jquery -->\n  <!-- <div class=\"\" id=\"my-div\" style=\"background-color:yellow; border:2px solid green; height:200px; width:200px; position:absolute;\">\n    this is a new div\n  </div> -->\n\n\n\n <!-- <br><br><br>\n <video width=\"512\" height=\"288\" controls=\"controls\">\n <source src=\"https://www.dropbox.com/s/3m375bb6y4acf4e/sawaal.mp4?dl=1\" type=\"video/mp4\" />\n </video> -->\n <!-- <br><br><br>\n <audio controls>\n   <source src=\"khayal.mp3\" type=\"audio/mpeg\">\n Your browser does not support the audio element.\n </audio> -->\n\n <!-- file upload program -->\n <!-- <h2>HTML5 File Upload Progress Bar Tutorial</h2>\n <form id=\"upload_form\" enctype=\"multipart/form-data\" method=\"post\">\n   <input type=\"file\" name=\"file1\" id=\"file1\"><br>\n   <input type=\"button\" value=\"Upload File\" onclick=\"uploadFile()\">\n   <progress id=\"progressBar\" value=\"0\" max=\"100\" style=\"width:300px;\"></progress>\n   <h3 id=\"status\"></h3>\n   <p id=\"loaded_n_total\"></p>\n </form> -->\n\n\n <div class=\"container\">\n     <!-- Add Project -->\n     <!-- Add Project -->\n </div>\n<!-- Mian contents-->\n"

/***/ },

/***/ 656:
/***/ function(module, exports) {

module.exports = "\n   <div class=\"mainNav\">\n      <div class=\"container\">\n      \t<div class=\"row\"><!--row-->\n            <div class=\"brand-logo col-md-2 col-sm-4\"><!--Logo-->\n                <a href=\"javascript:;\"><img src=\"images/logo-nonummy.png\" alt=\"Logo\" /></a>\n            </div><!--Logo-->\n            <!--Main Navigation-->\n            <nav class=\"col-md-8 col-lg-8 col-sm-8 col-xs-10\">\n                <ul class=\"nav nav-pills navbar-right\">\n                    <li role=\"presentation\" class=\"active\"><a href=\"#\">Home</a></li>\n                    <li role=\"presentation\" class=\"dropdown hidden-xs\">\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Share <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"#\">Drop Down 1</a></li>\n                            <li><a href=\"#\">Drop Down 2</a></li>\n                            <li><a href=\"#\">Drop Down 3</a></li>\n                        </ul>\n                    </li>\n                    <li role=\"presentation\"><a href=\"#\">Explore</a></li>\n                    <li role=\"presentation\"><a href=\"#\">Your Projects</a></li>\n                </ul>\n            </nav>\n           \t<!--Main Navigation-->\n            <!--Loged Avatar-->\n            <div class=\"col-xs-1 visible-xs searchBtn\">\n               <a class=\"pull-right\" href=\"#\">Search</a>\n            </div>\n            <ul class=\"nav nav-pills col-xs-1 visible-xs mobileOptions\"><!--Responsive Menu-->\n                <li role=\"presentation\" class=\"dropdown\">\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"navOptions\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Drop Down 1</a></li>\n                        <li><a href=\"#\">Drop Down 2</a></li>\n                        <li><a href=\"#\">Drop Down 3</a></li>\n                    </ul>\n                </li>\n            </ul><!--Responsive Menu-->\n            <div class=\"col-md-2 col-sm-2 memberProfile hidden-sm hidden-xs\">\n                <ul class=\"nav nav-pills pull-left\">\n                    <li role=\"presentation\" class=\"dropdown\">\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Account <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"#\">Drop Down 1</a></li>\n                            <li><a href=\"#\">Drop Down 2</a></li>\n                            <li><a href=\"#\">Drop Down 3</a></li>\n                        </ul>\n                    </li>\n                </ul>\n                <a href=\"javascript:;\" class=\"profileImgThumb\"><img src=\"images/profile-avatar.png\" alt=\"Member Photo\"/></a>\n            </div>\n            <!--Loged Avatar-->\n\t     </div><!--row-->\n      </div>\n   </div>\n   <!--Search Bar-->\n    <div class=\"searchBar\">\n        <div class=\"container\">\n        \t<div class=\"row\">\n                <div class=\"col-lg-1 col-md-1\"></div>\n                <div class=\"col-lg-10 col-md-10\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-btn\"><button class=\"btn blueBtn searchProjectBtn btn-default\" type=\"button\">Interest</button></span>\n                        <input type=\"text\" class=\"form-control searchInput text-right\" placeholder=\"Search projects\">\n                    </div><!-- /input-group -->\n                </div>\n                <div class=\"col-lg-1 col-md-1\"></div>\n            </div>\n            <div class=\"row hidden-xs\">\n            \t<div class=\"col-lg-4 col-md-4 hidden-sm\"></div>\n                <div class=\"col-lg-4 col-md-4 col-sm-8\">\n                    <ul class=\"searchAttrs list-inline text-center\">\n                    \t   <li class=\"active\"><a href=\"javascript:;\">Like</a></li>\n                        <li><a href=\"javascript:;\">Size</a></li>\n                        <li><a href=\"javascript:;\">Date</a></li>\n\t\t\t\t\t      </ul>\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-4\">\n\t                <p class=\"favrouts text-right\"><a href=\"javascript:;\">favourites</a></p>\n                </div>\n                <div class=\"col-lg-1 col-md-1 hidden-sm\"></div>\n            </div>\n        </div>\n    </div>\n    <!--Search Bar-->\n    <!-- Mian contents-->\n    <div class=\"container\">\n    \t<div class=\"createBtns\">\n        \t<ul class=\"list-inline\">\n            \t<li><a class=\"custmBtn blueBtn\" [routerLink]=\"['/createproject']\">Create Project</a></li>\n                <li><a class=\"custmBtn greenBtn\" href=\"javascript:;\">Create Group</a></li>\n            </ul>\n        </div>\n        <!-- Project Listing -->\n        <div class=\"row projectListing\"><!--Row-->\n\n        \t<!-- One Item-->\n            <div *ngFor=\"let proj of userProjects?.data\" class=\"col-lg-4 col-md-4 projectItem\">\n            \t<div class=\"itemBoundry\">\n                    <div class=\"projectImg\">\n                        <a [routerLink]=\"['/project-detail', proj.id]\"><img [src]=proj.imagePath alt=\"Place Name\" /></a>\n                    </div>\n                    <div class=\"projectDesc\">\n                        <h2 class=\"projTitle\"><a [routerLink]=\"['/project-detail', proj.id]\">{{proj.name}}</a></h2>\n                        <p class=\"projText\">{{proj.description | truncate:80 }}</p>\n                    </div>\n                    <div class=\"memberAssos\">\n                       <div class=\"row\">\n                           <div class=\"col-lg-9 col-md-9 col-sm-10 col-xs-10\">\n                               <div class=\"memberImg\">\n                                   <img src=\"images/profile-avatar.png\" alt=\"Member Name\" />\n                               </div>\n                               <div class=\"memberDesc\">\n                                   <p class=\"memberTitle\">By Lorem ipsum. from USA </p>\n                                   <p class=\"date\">August 11, 2016</p>\n                               </div>\n                           </div>\n                           <div class=\"col-lg-3 col-md-3 col-sm-2 col-xm-2 text-right\">\n                               <p class=\"actionBtns\"><span class=\"totalLikes\">54</span><span class=\"likeIco ico\"><a href=\"#\">&nbsp;</a></span></p>\n                               <p class=\"actionBtns\"><span class=\"bookmarkIco ico\"><a class=\"marked\" href=\"#\">&nbsp;</a></span></p> <!-- \"marked\" class to show it is bookmarked -->\n                           </div>\n                       </div>\n                    </div>\n                </div>\n            </div>\n            <!-- One Item-->\n\n\n        </div><!--Row-->\n        <!-- Project Listing -->\n    </div>\n<!-- Mian contents-->\n"

/***/ },

/***/ 687:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(382);


/***/ }

},[687]);
//# sourceMappingURL=main.bundle.map