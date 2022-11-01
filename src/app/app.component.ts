import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'surveyapp';
  // registerForm: FormGroup;
  // answerform: FormGroup;
  // formList: FormArray;
  // form1List: FormArray;
  // selectedFormName: any;

    // // returns all form groups under contacts
    // get dynamicFormGroup() {
    //   return this.answerform.get('formCollection') as FormArray;
    // }

  // constructor(private fb: FormBuilder,private notifyService : NotificationService) { }
  
  // ngOnInit() {
  //   this.registerForm = this.fb.group({
  //     'title':new FormControl(null,[]),
  //     'question':new FormControl(null,[]),
  //     'answer':new FormControl(null,[]),
  //     formList: this.fb.array([this.createFormOne()]),
  //     form1List: this.fb.array([this.createFormTwo()]),
  //   });
  // }

  // get f() {
  //   return this.registerForm.controls;
  // }
  // get d() {
  //   return this.registerForm.controls;
  // }
  // createFormOne() {
  //   return this.fb.group({    
  //     option: [''],
  //     min: [''],
  //     max: [''],
  //     row: [''],
  //   }) 
  // }
  // addItem() {
  //   this.formList = this.f['formList'] as FormArray;
  //   this.formList.push(this.createFormOne());
  // }

  // removeItem(idx: number): void {
  //   if(idx >= 1){
  //     (this.f['formList'] as FormArray).removeAt(idx);
  //   }
 
  // }

 
  // createFormTwo() {
  //    return this.fb.group({    
  //     option: [''],
  //     min: [''],
  //     max: [''],
    
  //     }) 
  // }
  // addItemNumber() {
  //   this.form1List = this.d['form1List'] as FormArray;
  //   this.form1List.push(this.createFormTwo());
  // }

  // removeItemNumber(idx: number): void {
  //   if(idx >= 1){
  //     (this.d['form1List'] as FormArray).removeAt(idx);
  //   }
 
  // }
  // loadForm(event) {
  //     // this.formList.clear();
  //   this.selectedFormName=event.value;
  //   if(event.value === 'TA')
  //   {    
  //   this.formList.push(this.createFormOne());
  //   }
  //   if(event.value === 'NU')
  //   {
  //     this.form1List.push(this.createFormTwo());
  //   }
  // }

  // onSubmit() {
  // console.log("value----", this.registerForm.value);

  // // stop here if form is invalid
  // if (this.registerForm.invalid) {
  //     return;
  // }
  // this.notifyService.showSuccess("Add Successfully !");

  // }
}
