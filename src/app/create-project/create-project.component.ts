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
// $(document).ready(function(){
//     $("button").click(function(){
//         $.ajax({
//           url: 'https://api.dropboxapi.com/2/files/create_folder',
//           headers: {
//               'Authorization':'Bearer ' + 'qUpnyBsW7tAAAAAAAAAAHeQerauNB_yPXrq-docw-tHLZ6ByggR1enJ3wf5Q_k3L',
//               'Content-Type':'application/json'
//           },
//           method: 'POST',
//           dataType: 'json',
//           data: '{"path":"/apple/tempfolder1133"}',
//           success: function(data){
//            //alert('succes: '+data);
//            console.log(JSON.stringify(data.path_display));
//           }
//         });
//     });
// });
import { Component } from '@angular/core';
declare var jQuery:any;
@Component({
  templateUrl: './create-project.component.html',
})
export class CreateProjectComponent {

  // public temp_path;

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

createProject(title, type, desc, file ){

  var tempPath;
  var tempImgPath;
  var returnData;
  // var token = "qUpnyBsW7tAAAAAAAAAAHeQerauNB_yPXrq-docw-tHLZ6ByggR1enJ3wf5Q_k3L";
  var token = "QOMAUaZsAgAAAAAAAAAAH7IQ6ehF4ceVh2SQfpB2W9jvN0DB6VES6sfDevdpUjtJ";


  alert(title +" "+ type +" "+ desc +" "+ file.name);

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
          'Authorization':'Bearer ' + token,
          'Content-Type':'application/json'
      },
      method: 'POST',
      dataType: 'json',
      data: JSON.stringify({
        path:'/Apps/pinwalk/1/temp',
        // mode: 'add',
        autorename: true,
        // mute: false
      }), //'{"path":"/Apps/pinwalk/1/temp4"}'
      success: function(data){
       //alert('succes: '+data);
       console.log(data);
       tempPath = data.path_display;
       console.log("this is the path iam passing:" + tempPath );
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
              path:tempPath +"/"+  file.name,
              mode: 'add',
              autorename: true,
              mute: false
            })

            //'{"path": "/test_ff_upload.txt","mode": "add","autorename": true,"mute": false}'
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
          'Content-Type':'application/json'
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
      success: function(data){
       //alert('succes: '+data);
       console.log(JSON.stringify(data));
      //  tempPath = data.path_display;
      returnData = data.data.id;

       console.log("project created with id: " + returnData );
      }
    })
    )
    .done(function(first_call, second_call, third_call){
        //do something
        console.log("project has been created");
    })
    .fail(function(){
        //handle errors
        console.log("upload failed project cannot be created at this time");
        console.log("this is the final path of the image:" + tempImgPath );
    });






}



}// class end
