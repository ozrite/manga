// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-create-project',
//   templateUrl: './create-project.component.html',
//   styleUrls: ['./create-project.component.css']
// })
// export class CreateProjectComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
import { Component } from '@angular/core';
@Component({
  templateUrl: './create-project.component.html',
})
export class CreateProjectComponent {

  imgurl: string;   //to recive image url string from the file open menu

  //function to display tumbnail/snapshot of image in the browse image box in create project
  readUrl(event) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.onload = (e:any) => {
      this.imgurl = e.target.result;
    }

    reader.readAsDataURL(event.target.files[0]);
  }
}




}// class end
