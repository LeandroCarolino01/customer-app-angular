import { Component } from '@angular/core';
import { Customer } from './CustomerApp.model';
@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.view.html'
})
export class CustomerComponent {
  title = 'customer-application';
  CustomerModel : Customer = new Customer();
}
