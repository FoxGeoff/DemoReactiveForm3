import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();

  constructor() { }

  /* This can be replaced by using: this.customForm = new FormGroup({ firstName: '', lastName: '', ...
  OR ... email: {value: 'n/a', disabled: tue}}) */
  ngOnInit() {
    this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(true)
    });
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  /* use setValue to change every value */
  testData() {
    this.customerForm.patchValue({
      firstName: 'Geoff'
    });
  }
}
