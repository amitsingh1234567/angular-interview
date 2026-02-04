import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-test-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './test-component.html',
  styleUrl: './test-component.scss',
})
export class TestComponent implements OnInit {
  userProfile!: FormGroup;

  constructor(private fb: FormBuilder){};

  ngOnInit(): void {  
    console.log('---TestComponent')
    this.userProfileForm();
  }

  userProfileForm(){
    this.userProfile = this.fb.group({
      name: ['', Validators.required],
      skills: this.fb.array([''], Validators.required),
      address: this.fb.group({
        city: [''],
        state: [''],
        zip: ['']
      }),
      contacts: this.fb.array([this.createContact()])
    })
  };

  createContact(): FormGroup{
    return this.fb.group({
      email: ['', Validators.required],
      mobile: ['']
    })
  };

  get contacts(): FormArray{
    return this.userProfile.get('contacts') as FormArray;
  };

  get skills(): FormArray {
    return this.userProfile.get('skills') as FormArray;
  }

  addSkills(): void{
    this.skills.push(this.fb.control(''));
  }

  removeSkills(index: number){
    this.skills.removeAt(index);
  }

  addContact(){
    this.contacts.push(this.createContact());
  }

  removeContact(index: number){
    this.contacts.removeAt(index);
  }

  onSubmit(){
    console.log(this.userProfile.value)
  }

};




