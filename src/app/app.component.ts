import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { BlogService } from 'src/app/blog.service';

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoproject';



  // public token : any;
  // public username:string = ""
  // public password:string = ""
 
  // postList: any[] = [];
  // bsModalRef: BsModalRef;
  
  // constructor(private formBuilder:FormBuilder,private blogService: BlogService, private bsModalService: BsModalService) {
  //   // this.getPosts();
  // }
/**
 *
 */
constructor() {
  
  
}



  // // getPosts() {
  // //   this.blogService.getPostList().subscribe(data => {
  // //     Object.assign(this.postList, data);
  // //   }, error => {
  // //     console.log("Error while getting posts ", error);
  // //   });
  // // }

  // // addNewPost() {
  // //   this.bsModalRef = this.bsModalService.show(AddNewPostComponent);
   
  // //   this.bsModalRef.content.event.subscribe((result:any) => {
  // //     if (result == 'OK') {
  // //       this.getPosts();
  // //     }
  // //   });
  // // }

  // // deletePost(postId: number, title: string) {
  // //   this.bsModalRef = this.bsModalService.show(DeletePostComponent);
  // //   this.bsModalRef.content.postId = postId;
  // //   this.bsModalRef.content.title = title;
  // //   this.bsModalRef.content.event.subscribe((result:any) => {
  // //     console.log("deleted", result);
  // //     if (result == 'OK') {
  // //       setTimeout(() => {
  // //         this.postList=[];
  // //         this.getPosts();
  // //       }, 5000);
  // //     }
  // //   });
  // // }

  // // editPost(postId: number) {
  // //   this.blogService.changePostId(postId);

  // //   this.bsModalRef = this.bsModalService.show(EditPostComponent);
  // //   this.bsModalRef.content.event.subscribe((result:any) => {
  // //     if (result == 'OK') {
  // //       setTimeout(() => {
  // //         this.getPosts();
  // //       }, 5000);
  // //     }
  // //   });
  // }

 


}
        // Login(){
        //   this.authService.Authentication(this.username,this.password).subscribe(
        //     (data)=>{
             
        //      if(data!= null){
        //        // retreive the access token from the server
        //     // console.log(data["token"])
        //      // store the token in the localStorage
              
        //     //  this.token = data.token;
        //      localStorage.setItem("access-token",this.token)
            
        //      }else{
        //        console.log("check your credentials !!")
        //      }
        //     }
        //   )
        // }
        // DisplayList(){
        //   this.authService.GetAllProducts().subscribe(
        //     (data)=>{
        //        // display list in the console 
        //           console.log(data)
        //     }
        //   )
        // }

