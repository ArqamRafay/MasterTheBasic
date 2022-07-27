import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent implements OnInit {
  public form: FormGroup;
  public contactList: FormArray;

  // returns all form groups under contacts
  get contactFormGroup() {
    return this.form.get('contacts') as FormArray;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      organization: [null],
      contacts: this.fb.array([this.createContact()])
    });
    // set contactlist to the form control containing contacts
    this.contactList = this.form.get('contacts') as FormArray;
  }

  // contact formgroup
  createContact(): FormGroup {
    return this.fb.group({
      type: ['email', Validators.compose([Validators.required])],
      name: [null, Validators.compose([Validators.required])],
      value: [null, Validators.compose([Validators.required, Validators.email])]
    });
  }

  // add a contact form group
  addContact() {
    this.contactList.push(this.createContact());
  }

  // remove contact from group
  removeContact(index) {
    this.contactList.removeAt(index);
  }

  getContactsFormGroup(index): FormGroup {
    this.contactList = this.form.get('contacts') as FormArray;
    const formGroup = this.contactList.controls[index] as FormGroup;
    return formGroup;
  }

  changedContactType(index) {
    let validators = null;

    if (this.getContactsFormGroup(index).controls['type'].value === 'email') {
      validators = Validators.compose([Validators.required, Validators.email]);
    } else {
      validators = Validators.compose([
        Validators.required,
        Validators.pattern(new RegExp('^\\\+[0-9]?()[0-9](\d[0-9]{9})\$')) // pattern for validating international phone number
      ]);
    }

    this.getContactsFormGroup(index).controls['value'].setValidators(validators);

    // re-validate the inputs of the form control based on new validation
    this.getContactsFormGroup(index).controls['value'].updateValueAndValidity();
  }


  submit() {
    debugger;
    console.log(this.form.value);
  }


}
