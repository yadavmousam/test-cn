import { Component, OnInit } from '@angular/core';
import { MatDialog} from  '@angular/material/dialog';
import { ContactService } from 'src/app/service/contact.service';
import { ContactComponent } from 'src/app/contact/contact.component';
@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {
isPopupOpen=false;
 ID:any;
// ID: number;
  constructor(private  dialog?:  MatDialog, private contactservice?:ContactService,) { }

  ngOnInit(): void {
     
  }

  get Contactlist(){
    return this.contactservice?.getAllContacts();

  }

  addContact(){
    this.isPopupOpen=true;
    const dialogRef= this.dialog?.open(ContactComponent,{
      data:{}
    });
  

     dialogRef?.afterClosed().subscribe(result => {
  this.isPopupOpen=false;
    });
  }  


  editContact(id:any){
    this.isPopupOpen=true;
    const contact=this.contactservice?.getAllContacts().find(c =>c.ID === id)
    const dialogRef= this.dialog?.open(ContactComponent,{
      data:contact
    });
  

     dialogRef?.afterClosed().subscribe(result => {
  this.isPopupOpen=false;
    });
  }  

  deleteContact(id:any){
    this.contactservice?.deleteContact(id);
  }

}
