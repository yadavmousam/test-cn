import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BlogService } from 'src/app/blog.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UserService, AlertService } from 'src/app/_service';
@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit {

  addNewPostForm:any=FormGroup;
  categories: any[] = ["mvc","sql","visual"];
  event: EventEmitter<any>=new EventEmitter();

  constructor(private userService: UserService,private builder: FormBuilder, private blogService: BlogService, private bsModalRef: BsModalRef) {
    this.addNewPostForm = this.builder.group({
      category: new FormControl(null, []),
      title: new FormControl('', []),
      description: new FormControl('', [])
    });

    this.blogService.getCategoryList().subscribe(data => {
      Object.assign(this.categories, data);
    }, error => { console.log('Error while gettig category data.'); });
  }

  onPostFormSubmit(){
    let postData = {
      'Title': this.addNewPostForm.get('title').value,
      'Description': this.addNewPostForm.get('description').value,
      'CategoryId': this.addNewPostForm.get('category').value,
    };
  
    this.userService.create(postData).subscribe(data=>{
      console.log(data);
      if(data!=null && data>0){
        this.event.emit('OK');
        this.bsModalRef.hide();
      }
    });
  }

  onClose(){
    this.bsModalRef.hide();
  }

  ngOnInit() {
  }

}
 
