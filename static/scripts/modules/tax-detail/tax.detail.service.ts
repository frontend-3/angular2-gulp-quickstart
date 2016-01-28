import {Injectable} from 'angular2/core';
import {TaxComponent} from '../tax/tax.component';
import {TaxDetail} from '../tax-detail/tax.detail';
import {Scale} from '../scale/scale';
import {ScaleService} from '../scale/scale.service';

@Injectable()
export class TaxDetailService {

  public scales:Scale[];

  getScales() {
    return this.scales;
  }

  getListTaxDetail(tax:TaxComponent): TaxDetail[] {
    var i = 0,
        taxDetails = [],
        lastTaxDetail;

    for (i; i < this.scales.length; i++ ) {
      var scale = this.scales[i];
      var taxDetail = new TaxDetail();
      taxDetail.scale = scale;
      taxDetail.tax = tax;
      taxDetail.prevTaxDetail = lastTaxDetail;
      taxDetail.calculateAmountAfected()
      taxDetail.calculateAcumulateAmount()
      lastTaxDetail = taxDetail;
      taxDetails.push(taxDetail);
    }

    return taxDetails;
  }
  constructor (
      scaleService:ScaleService
  ) {
    Promise.resolve(scaleService.getScales())
      .then(scales => this.scales = scales);
  }
}

