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

import 'rxjs/add/operator/switchMap';
import { Component, ViewChild, ElementRef, Renderer, OnInit  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Pin } from '../pin';
import { PinService } from '../pin.service';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
// import {ModalModule} from "ng2-modal";

//declaring jquery var to use jquery in the code
declare var jQuery:any;

@Component({
  templateUrl: './project-detail.component.html',
  styles: [`
  .selected {
    text-shadow: 0 0 8px red;
  }
  `],
  providers: [PinService, ProjectService]

})

export class ProjectDetailComponent implements OnInit {

  //***************** mouse event handeling variables *********************
  rightPanelStyle: Object = {};
  leftPanelStyle: Object = {};

  RightMenuActive = false;
  LeftMenuActive = false;
  OutOfMenu = true;
  // OutLeftMenu = false;
  OnPin = false;

  leftX = 0;
  topY = 0;

  // **************************Pin related variable/property declarations****************
  projpins: Pin[] = []; //project pins to display
  projpin = new Pin; //new project pin to be created on right click
  pin: Pin; //declaring a pin property
  // pin2 = new Pin; //declaring a pin property
  pin1 = new Pin; // used to update the pin
  // selectedPin: Pin; // for the pin which is elected on click
  public selectedPin;

 //**************************Project related variable/property declarations****************

  pid : number;
  // project = new Project;
  // userproj: Project[] = []; //project pins to display
  // sproj = new Project;
  public sproj;

  //***************************** functions below *************************************

  constructor(private pinService: PinService, private projectService: ProjectService,
     private el:ElementRef, private route: ActivatedRoute, private location: Location) {

      this.pid = route.snapshot.params['pid'];
      // alert(this.pid);



    }//class constructor

  // selecting a pin and holding it in selectedPin
  pinSelect(pin: Pin): void {
    this.selectedPin = pin;
    console.log("Pin id is :" + this.selectedPin.id +
           ", name :" + this.selectedPin.name +
           ", x :" + this.selectedPin.pinx +
           ", y :" + this.selectedPin.piny +
           ", color :" + this.selectedPin.color );

    // alert("Pin id is :" + this.selectedPin.id +
    //       ", name :" + this.selectedPin.name +
    //       ", x :" + this.selectedPin.x +
    //       ", y :" + this.selectedPin.y +
    //       ", color :" + this.selectedPin.color );
  }

  // get all pins of a project
  // getPins(): void {
  //   this.pinService.getPins().then(pins => this.projpins = pins);
  // }
  getAllPins() {
    this.pinService.getPins(this.pid).subscribe(
      // the first argument is a function which runs on success
      // data => { console.log(data);},
      data => { this.projpins = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading pins')
    );
    // this._demoService.getFoods()
    //   .then(projects => console.info(projects));
  }
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
  addPin(name: string, x:number, y:number, color:string) {
    // let food = {name: name};
    this.pinService.createPin(this.pid, name, x, y, color).subscribe(
       data => {
         // refresh the list
         this.getAllPins();
         return true;
       },
       error => {
         console.error("Error Creating Pin!");
         return Observable.throw(error);
       }
    );
  }


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

  savePin(name: string, x:number, y:number, color:string) {
    // let pin = {name: name};
    this.pin1.id = 8;
    this.pin1.name = "new";
    this.pin1.x = 50;
    this.pin1.y = 50;
    this.pin1.color = "white";

    this.pinService.updatePin(this.pin1).subscribe(
       data => {
         // refresh the list
         this.getAllPins();
         return true;
       },
       error => {
         console.error("Error saving food!");
         return Observable.throw(error);
       }
    );
  }



  //go back function
  goBack(): void {
    this.location.back();
  }
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

  delete(pin: Pin) {
    if(pin){

    }else{
      pin = this.selectedPin;
    }
    if (confirm("Are you sure you want to delete this " + pin.id + "?")) {
      this.pinService.deletePin(pin.id).subscribe(
         data => {
           // refresh the list
           this.getAllPins();
           return true;
         },
         error => {
           console.error("Error deleting food!");
           return Observable.throw(error);
         }
      );
      this.rightPanelStyle = {'display':'none'};
      this.RightMenuActive = false;
    }
  }



  // ngOnInit function. call any functions inside to load  when the view of component is called first time
  ngOnInit(): void {
    //first get projectdetails from the url parameter
    // this.route.params
    //   .switchMap((params: Params) => this.projectService.getProject(+params['pid']))
    //   .subscribe(project => this.sproj = project);


        this.projectService.getProject(this.pid).subscribe(
          // the first argument is a function which runs on success
          // data => { console.log(data);},
          data => { this.sproj = data},
          // the second argument is a function which runs on error
          err => console.error(err),
          // the third argument is a function which runs on completion
          () => console.log('done loading single project')
        );
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
      tile_enable_icons:false,
      tile_width: 114,						//tile width
      tile_height: 100,						//tile height
      tile_enable_border:false,
      grid_num_rows:10000,
      grid_space_between_cols: 10,			//space between columns
      // grid_space_between_rows: 20			//space between rows
      // gallery_debug_errors:true

    });

    jQuery("#video-gallery").unitegallery({
      gallery_theme: "tilesgrid",
      // tile_enable_icons:false,
      tile_width: 114,						//tile width
      tile_height: 100,						//tile height
      tile_enable_border:false,
      grid_num_rows:10000,
      grid_space_between_cols: 10,			//space between columns
      // grid_space_between_rows: 20			//space between rows
      // gallery_debug_errors:true
    });

    jQuery("#audio-gallery").unitegallery({
      gallery_theme: "tilesgrid",
      // tile_enable_icons:false,
      tile_width: 114,						//tile width
      tile_height: 100,						//tile height
      tile_enable_border:false,
      grid_num_rows:10000,
      grid_space_between_cols: 10,			//space between columns
      // grid_space_between_rows: 20			//space between rows
      // gallery_debug_errors:true

    });



    // this.route.params
    //   .switchMap((params: Params) => this.pinService.getPin(+params['id']))
    //   .subscribe(pin => this.pin = pin);
  }//ngOnIt

  // pinhover event to control the canvas of the pins
  PinHover($event){

    if($event.type == "mouseenter"){
      this.OnPin = true;
      console.log("on the pin - setting value to true - de-activate canvas clicks");
    }else{
      this.OnPin = false;
      console.log("outside of the pin - setting value to false - activate canvas clicks");
    }

  }

  // menuhover event to control the menu and the canvas behind
  MenuEvent($event){
    if($event.type == "mouseenter"){
      this.OutOfMenu = false;
      console.log("inside menu div - setting value to false - do not close the menu when inside");
    }else{
      this.OutOfMenu = true;
      console.log("outside menu div - setting value to true - close the menu when outside");
    }
  }

  detectRightMouseClick($event) {
    // alert("function called");

    var canvasXY = document.getElementById('pin-canvas');
    var globalPosRect = canvasXY.getBoundingClientRect();

    var singlepin = document.getElementById('singlePin');
    var pinRect = singlepin.getBoundingClientRect();
    var pinWidth =  (pinRect.width);
    var pinHeight = (pinRect.height);

    console.log("Pin width...:" + pinWidth + " --- Pin Height..."+ pinHeight );


    var leftoffset = globalPosRect.left;
    var topoffset = globalPosRect.top;

    // var box2TextRectangle = box2.getBoundingClientRect();
    // needed for IE8
    var canvasWidth =  (globalPosRect.width ? globalPosRect.width : (globalPosRect.right-globalPosRect.left));
    var canvasHeight = (globalPosRect.height ? globalPosRect.height : (globalPosRect.bottom-globalPosRect.top));

    console.log("div total width.:", canvasWidth);
    console.log("div total height.:", canvasHeight);
    console.log("div left pos.:", leftoffset);
    console.log("div top pos.:", topoffset);

    //pin canvas div offset adjustment according to the  dom
    this.leftX = $event.clientX - leftoffset;
    this.topY = $event.clientY - topoffset;

    //pin offset adjustment according to the pin height and width
    this.leftX = this.leftX - (pinWidth/2) + 3;
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



    if(!this.OnPin){
        //drop pin
        if($event.which === 3 && this.RightMenuActive === false && this.LeftMenuActive === false) {
            this.selectedPin = null;  //setting the selectedPin to null if not clicked on pin
            this.addPin("Pin100",percentX,percentY,"black");
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

            console.log('projpins=',this.projpins);

            // this.rightPanelStyle = {'display':'block','left':percentX + '%','top':percentY + '%'};
            // this.RightMenuActive = true;
            return false;
        }
        else{

            if(this.OutOfMenu){
                this.selectedPin = null;  //setting the selectedPin to null if not clicked on pin
                this.rightPanelStyle = {'display':'none'};
                this.leftPanelStyle = {'display':'none'};
                this.RightMenuActive = false;
                this.LeftMenuActive = false;
                return false;
            }

            return false;
        }//else

    }else{
      this.rightPanelStyle = {'display':'none'};
      this.leftPanelStyle = {'display':'none'};
      this.RightMenuActive = false;
      this.LeftMenuActive = false;

      if($event.which === 3) {
          this.rightPanelStyle = {'display':'block','left':percentX + '%','top':percentY + '%'};
          this.RightMenuActive = true;
          return false;
      }else{
        if($event.which === 1) {
            this.leftPanelStyle = {'display':'block','left':percentX + '%','top':percentY + '%'};
            this.LeftMenuActive = true;
            return false;
        }

      }

    }

  }//end detectRightMouseClick function bracket


  scrollLeft() {

        // jQuery('#my-div').animate({scrollLeft: 100}, 500);
        jQuery('#my-div').animate({left: "+=500px"});
        jQuery('#my-div').animate({top: "-=300px"});
        // jQuery('#my-div').hide();
        // document.getElementById('my-div').style.display=='block';
        // alert("hello");

    }



}// end of class
