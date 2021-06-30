import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Customer } from '../../customer.model';
import { CustomerListPresenterService } from '../customer-list-presenter/customer-list-presenter.service';

@Component({
  selector: 'app-customer-list-presetation',
  templateUrl: './customer-list-presetation.component.html',
  styleUrls: ['./customer-list-presetation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [CustomerListPresenterService]
})
export class CustomerListPresetationComponent implements OnInit {
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