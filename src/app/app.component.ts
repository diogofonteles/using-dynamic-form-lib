import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicFormComponent, ControlConfig } from 'dynamic-form-diogofonteles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DynamicFormComponent, { static: true }) form: DynamicFormComponent;
  appForm: FormGroup;

  definitions: ControlConfig[] = [
    {
      type: 'input',
      id: 'username',
      label: 'Username',
      inputType: 'text',
      name: 'username',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Name Required',
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-zA-Z]+$'),
          message: 'Accept only text',
        },
      ],
    },
    {
      type: 'input',
      id: 'email',
      label: 'Email Address',
      inputType: 'email',
      name: 'email',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Email Required',
        },
        {
          name: 'pattern',
          validator: Validators.pattern(
            '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
          ),
          message: 'Invalid email',
        },
      ],
    },
    {
      type: 'input',
      id: 'password',
      label: 'Password',
      inputType: 'password',
      name: 'password',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Password Required',
        },
      ],
    },
    {
      type: 'selectcombobox',
      label: 'Role',
      name: 'role',
      options: [
        { value: '1', label: 'Developer' },
        { value: '1', label: 'Scrum Master' },
        { value: '3', label: 'Team Leader' },
        { value: '4', label: 'CIO' },
      ],
    },
    {
      type: 'list',
      label: 'Country',
      name: 'country',
      multipleSelection: false,
      options: [
        { value: '1', label: 'India' },
        { value: '2', label: 'UAE' },
        { value: '3', label: 'UK' },
        { value: '4', label: 'US' },
      ],
    },
  ];

  definitionsComponent: ControlConfig[] = [
    {
      type: 'input',
      id: 'username',
      label: 'Username',
      inputType: 'text',
      name: 'username',
      value: 'userlogin',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Name Required',
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-zA-Z]+$'),
          message: 'Accept only text',
        },
      ],
    },
    {
      type: 'input',
      id: 'email',
      label: 'Email Address',
      inputType: 'email',
      name: 'email',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Email Required',
        },
        {
          name: 'pattern',
          validator: Validators.pattern(
            '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
          ),
          message: 'Invalid email',
        },
      ],
    },
    {
      type: 'input',
      id: 'password',
      label: 'Password',
      inputType: 'password',
      name: 'password',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Password Required',
        },
      ],
    },
    {
      type: 'button',
      label: 'Save'
    }
  ];

  constructor(fb: FormBuilder) {
    this.appForm = fb.group({
      pessoa: null
    });
  }

  save(): void {
    console.log(this.appForm.value);
  }

  submit(value: any): void {
    console.log(value);
  }

}
