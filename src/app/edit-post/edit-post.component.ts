import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BlogService } from 'src/app/blog.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  editPostForm:any= FormGroup;
  categories: any[] = [];
  postId: number;
  postData: any;
  event: EventEmitter<any> = new EventEmitter();

  constructor(private builder: FormBuilder, private blogService: BlogService, private bsModalRef: BsModalRef) {
    this.editPostForm = this.builder.group({
      category: new FormControl(null, []),
      title: new FormControl('', []),
      description: new FormControl('', [])
    });


    this.blogService.getCategoryList().subscribe(data => {
      Object.assign(this.categories, data);
    }, error => { console.log('Error while gettig category data.'); });

    this.blogService.postIdData.subscribe((data:any) => {
      this.postId = data;
      if (this.postId !== undefined) {
        this.blogService.getPost(this.postId).subscribe(data => {
          this.postData = data;
          
          if (this.editPostForm!=null && this.postData!=null) {
            this.editPostForm.controls['category'].setValue(this.postData.categoryId);
            this.editPostForm.controls['title'].setValue(this.postData.title);
            this.editPostForm.controls['description'].setValue(this.postData.description);
          }
        }, error => { console.log("Error while gettig post details") });
      }
    });
  }

  onPostEditFormSubmit() {
    let postData = {
      'PostId': this.postId,
      'Title': this.editPostForm.get('title').value,
      'Description': this.editPostForm.get('description').value,
      'CategoryId': this.editPostForm.get('category').value,
    };

    this.blogService.updatePost(postData).subscribe(data => {      
        this.event.emit('OK');
        this.bsModalRef.hide();      
    });
  }

  onClose() {
    this.bsModalRef.hide();
  }

  ngOnInit() {

  }

}
