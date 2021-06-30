import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';
import { CustomerListPresenterService } from './customer-list-presenter/customer-list-presenter.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-list-container',
  templateUrl: './customer-list-container.component.html',
  styleUrls: ['./customer-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [CustomerListPresenterService]
})
export class CustomerListContainerComponent implements OnInit {

  // @Input() public customerList: Customer[];

  @Input() public set customerList(value: Customer[]) {
    if (value) {
      this._customerList = value
    }
  }

  public get customerList(): Customer[] {
    return this._customerList
  }
  @Output() public deleteId:EventEmitter<any> = new EventEmitter();

  private _customerList: Customer[] = [];
  public customerGroup: FormGroup;
  constructor(
    private customerListPresenterService: CustomerListPresenterService
  ) {
    this.customerList = [];
    this.customerGroup = this.customerListPresenterService.bindForm();
  }

  ngOnInit(): void {
    this.customerListPresenterService.customerId$.subscribe((customerId: any) => {
      debugger
      this.deleteId.emit(customerId);
    });
  }

  public deleteCustomer(value: number) {
    debugger
    this.customerListPresenterService.deleteCustomer(value)
  }

}