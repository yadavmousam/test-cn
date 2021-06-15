import { Component, OnInit ,Inject} from '@angular/core';
import {FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from  '@angular/material/dialog';
import { ContactService } from 'src/app/service/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 contactForm:any=FormGroup;
  constructor( private formbuilder:FormBuilder,
    private contactservice:ContactService,
    private dialogRef:MatDialogRef<ContactComponent>,
    @Inject(MAT_DIALOG_DATA) public  data:  any) { }
 
 

  ngOnInit(): void {
    this.contactForm = this.formbuilder.group({
      ID:[this.data.ID],
      FirstName: [this.data.FirstName, [Validators.required]],
      LastName: [this.data.LastName, [Validators.required]],
      Contact: [this.data.Contact, [Validators.required]],
      Email: [this.data.Email, [Validators.required]],
    });
  }

  onNoClick(){
    this.dialogRef.close();
  }

  onSubmit(){
    if(isNaN(this.data.ID)){
      this.contactservice.addContact(this.contactForm.value)
      this.dialogRef.close();
    }
    else{
      this.contactservice.editContact(this.contactForm.value)
      this.dialogRef.close();
    }
    
  }
}
