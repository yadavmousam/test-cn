// import { Component, OnInit } from '@angular/core';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from 'src/app/child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  name?: string; 
  
  message: any;  
  sendToChild?: string; 
//**testing */for only @input decorator
  // data={
  // name:"peter",
  // age:"25"
  // }
  
  // @ViewChild(ChildComponent) child:any;

  // constructor() { }

  // messagess:any;

  // ngAfterViewInit() {
  //    this.messagess = this.child.messagess
  // }

  getResponse($event:any) {  
    this.message = $event;  
  } 
  
  // receiveMessage($event:any) {  
  //   this.messagess = $event;  
  // } 
  submit() {  
    this.sendToChild = this.name;  
     
  }  

  // ngOnInit(): void {
    
  // }

}
