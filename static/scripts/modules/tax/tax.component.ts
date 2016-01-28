import {Component} from 'angular2/core';
import {TaxDetail} from '../tax-detail/tax.detail';
import {ScaleService} from '../scale/scale.service';
import {TaxDetailService} from '../tax-detail/tax.detail.service'

@Component({
  selector: 'tax-component',
  templateUrl: 'sueldo-neto/templates/tax/tax-form.html',
  directives: [TaxDetail],
})

export class TaxComponent {
  public incomeByMonth: number = 0;
  public taxDetails: TaxDetail[];


  public get incomeAfectedByTax(): number {
    return this.incomeByYear - this.freeIncomeAfectedByTax;
  }

  public get freeIncomeAfectedByTax() : number {
    return this.UIT * 7;
  }

  public get incomeByYear(): number {
    return this.incomeByMonth * 14;
  }

  public get UIT(): number {
    return 3950;
  }

  public get isIncomeAfectedByTax(): boolean {
    if (this.incomeAfectedByTax > 0) {
      return true;
    }
    return false;
  }

  calculateTaxDetail($event) {
    this.incomeByMonth = $event;
    this.taxDetails = this.taxDetailService.getListTaxDetail(this)
  }

  constructor(private taxDetailService: TaxDetailService) {
  }
}
