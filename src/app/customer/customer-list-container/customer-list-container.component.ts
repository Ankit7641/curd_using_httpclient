import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomerService } from '../customer.service';
import { CustomerListPresenterService } from './customer-list-presenter/customer-list-presenter.service';


@Component({
  selector: 'app-customer-list-container',
  templateUrl: './customer-list-container.component.html',
  styleUrls: ['./customer-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [CustomerListPresenterService]
})
export class CustomerListContainerComponent implements OnInit {

  // @Input() public customerList: Customer[];

  public customerList$: Observable<any> = of();

  constructor(
    private customerService: CustomerService
  ) {
    this.customerList$ = this.customerService.getCustomers();
  }

  ngOnInit(): void {
  }

 /*  public onDeleteId(value: number) {
    this.customerService.deleteCustomer(value)
  }
 */
}