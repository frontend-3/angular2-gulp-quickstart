import {Component, Input} from 'angular2/core';
import {TaxComponent} from '../tax/tax.component';
import {Scale} from '../scale/scale';

@Component({
  selector: 'sueldo-neto/templates/tax-detail/tax-detail-component',
  template: `
      <div>Monto afecto: {{taxDetail.amountAfected}}</div>
      <div>Impuestos: {{taxDetail.totalTax}}</div>
    `
})

export class TaxDetail {
  public scale:Scale;
  public tax: TaxComponent;
  public prevTaxDetail: TaxDetail;
  public amountAfected: number;
  public acumulateAmount: number;
  @Input('tax-detail') taxDetail: TaxDetail;

  public calculateAmountAfected() {
    var restAmountAfected = this.tax.incomeByYear,
        acumulateAmountAfected = 0,
        amount = 0,
        maxAmountAfected = (this.scale.topScale - this.scale.bottomScale) * this.tax.UIT;

    if (this.prevTaxDetail) {
      restAmountAfected = this.tax.incomeByYear - this.prevTaxDetail.acumulateAmount;
      amount = restAmountAfected;
    }

    if (restAmountAfected == 0) {
      amount = 0;
    }

    if (restAmountAfected > maxAmountAfected) {
      amount = maxAmountAfected;
    }
    this.amountAfected = amount;
  }

  public calculateAcumulateAmount() {
    var acumulateAmount = this.amountAfected;

    if (this.prevTaxDetail) {
      acumulateAmount = this.prevTaxDetail.acumulateAmount + this.amountAfected;
    }

    this.acumulateAmount = acumulateAmount;
  }

  public get totalTax(): number {
    return this.amountAfected * this.scale.percent;
  }

}
