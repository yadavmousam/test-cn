import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';

// import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
//   form!: FormGroup;
//   id!: string;
//   isAddMode!: boolean;
//   loading = false;
//   submitted = false;

//   constructor(
//       private formBuilder: FormBuilder,
//       private route: ActivatedRoute,
//       private router: Router,
//       private userService: UserService,
     
//   ) {}

//   ngOnInit() {
//       this.id = this.route.snapshot.params['id'];
//       this.isAddMode = !this.id;
      
//       // password not required in edit mode
//       const passwordValidators = [Validators.minLength(6)];
//       if (this.isAddMode) {
//           passwordValidators.push(Validators.required);
//       }

//       // const formOptions: AbstractControlOptions = { validators: MustMatch('password', 'confirmPassword') };
//       this.form = this.formBuilder.group({
//           title: ['', Validators.required],
//           firstName: ['', Validators.required],
//           lastName: ['', Validators.required],
//           email: ['', [Validators.required, Validators.email]],
//           role: ['', Validators.required],
//           password: ['', [Validators.minLength(6), this.isAddMode ? Validators.required : Validators.nullValidator]],
//           // confirmPassword: ['', this.isAddMode ? Validators.required : Validators.nullValidator]
//       });

//       // if (!this.isAddMode) {
//       //     this.userService.getById(this.id)
//       //         .pipe(first())
//       //         .subscribe(x => this.form.patchValue(x));
//       // }
//   }

//   // convenience getter for easy access to form fields
//   get f() { return this.form.controls; }

//   onSubmit() {
//       this.submitted = true;

//       // reset alerts on submit
      

//       // stop here if form is invalid
//       if (this.form.invalid) {
//           return;
//       }

//       this.loading = true;
//       if (this.isAddMode) {
//           this.createUser();
//       } else {
//           this.updateUser();
//       }
//   }

//   private createUser() {
//       this.userService.create(this.form.value)
//           .pipe(first())
//           .subscribe(() => {
             
//               this.router.navigate(['../'], { relativeTo: this.route });
//           })
//           .add(() => this.loading = false);
//   }

//   private updateUser() {
//       this.userService.update(this.id, this.form.value)
//           .pipe(first())
//           .subscribe(() => {
             
//               this.router.navigate(['../../'], { relativeTo: this.route });
//           })
//           .add(() => this.loading = false);
//   }
}
