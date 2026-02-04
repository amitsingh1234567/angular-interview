import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-component.html',
  styleUrl: './form-component.scss',
})
export class FormComponent implements OnInit {
 userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      // string
      name: ['', Validators.required],

      // array (simple values)
      skills: this.fb.array([this.fb.control('', Validators.required)]),

      // object
      address: this.fb.group({
        city: [''],
        state: [''],
        zip: ['']
      }),

      // array of objects
      contacts: this.fb.array([
        this.createContact()
      ])
    });
  }

  /** Getter for skills */
  get skills(): FormArray {
    return this.userForm.get('skills') as FormArray;
  }

  /** Getter for contacts */
  get contacts(): FormArray {
    return this.userForm.get('contacts') as FormArray;
  }

  /** Create contact (object inside array) */
  createContact(): FormGroup {
    return this.fb.group({
      email: [''],
      mobile: ['']
    });
  }

  addSkill(): void {
    this.skills.push(this.fb.control('', Validators.required));
  }

  addContact(): void {
    this.contacts.push(this.createContact());
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  removeContact(index: number): void {
    this.contacts.removeAt(index);
  }

  submit(): void {
    const formValue = this.userForm.value;
    
    // Filter out empty strings from skills array
    const filteredSkills = formValue.skills.filter((skill: string) => skill.trim() !== '');
    
    // Create clean form value with filtered skills
    const cleanFormValue = {
      ...formValue,
      skills: filteredSkills
    };
    
    console.log(cleanFormValue);
  }
}
