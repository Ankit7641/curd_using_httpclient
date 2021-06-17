import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  profileForm = this.Formbuldier.group({
    Name: ['', Validators.required],
    Rollnumber: [''],
    address: this.Formbuldier.group({}),
    skill: this.Formbuldier.array([
      this.Formbuldier.control('')
    ])
  });


  get skill() {
    return this.profileForm.get('skill') as FormArray;
  }

  constructor(
    private Formbuldier: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  
  addskill() {
    this.skill.push(this.Formbuldier.control(''));
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
