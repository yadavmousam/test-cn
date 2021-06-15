import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {

  postId: number;
  title: string;
  event: EventEmitter<any> = new EventEmitter();
  
  constructor(private bsModalRef: BsModalRef, private blogService: BlogService) {

  }

  deletePost(postId: number) {
    this.blogService.deletePost(postId).subscribe();
    this.event.emit('OK');
    this.bsModalRef.hide();
  }

  onClose() {
    this.bsModalRef.hide();

  }
  ngOnInit() {
  }
}
