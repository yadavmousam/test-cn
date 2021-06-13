import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  messagess = 'Hola Mundo!';
  // @Input() hero:any;
  @Input() Name:any;
  @Output() getResponse = new EventEmitter;  
 
  constructor() { }  
  
  
  onClick() {  
    this.getResponse.emit('Message from child');  
  }  

  ngOnInit(): void {
  }

}
