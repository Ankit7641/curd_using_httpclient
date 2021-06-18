import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  title = 'FormArray Example in Angular Reactive forms';
 
  skillsForm: FormGroup;
  submitted = false;
 
  constructor(private fb:FormBuilder) {
 
    this.skillsForm = this.fb.group({
      name: ['',Validators.required],
      rollno: ['',Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(2)],
      address: ['',Validators.required],
      skills: this.fb.array([]) ,
    });
  
  }
  ngOnInit(): void {

   }

   get registerFormControl() {
    return this.skillsForm.controls;
  }
  
 
  get skills() : FormArray {
    return this.skillsForm.get("skills") as FormArray
  }
 
  newSkill(): FormGroup {
    return this.fb.group({
      skill: ['',Validators.required],
      exp: ['',Validators.required],
    })
  }
 
  addSkills() {
    this.skills.push(this.newSkill());
  }
 
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
 
  onSubmit() {
    console.log(this.skillsForm.value);
  }
 
}
 
 
export class country {
  id: string;
  name: string;
  rollno: string;
  address: string;
 
  constructor(id: string, name: string, rollno: string, address: string) {
    this.id = id;
    this.name = name;
    this.rollno = rollno;
    this.address = address;
  }
}