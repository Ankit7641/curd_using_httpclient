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

  private _customerList: Customer[] = [];
  customerListPresenterService: any;
  
  @Input() public set customerList(value: Customer[]) {
    if (value) {
      this._customerList = value
    }
  }

  public get customerList(): Customer[] {
    return this._customerList
  }
 
  ngOnInit(): void {
   
  }

  public deleteCustomer(value: number) {
    this.customerListPresenterService.deleteCustomer(value)
  }

}