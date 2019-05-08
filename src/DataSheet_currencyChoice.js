import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_currencyChoice extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['column1'] = "Pick a Currency";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['column1'] = "SEK";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['column1'] = "EUR";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['column1'] = "BAM";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['column1'] = "USD";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['column1'] = "TRY";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['column1'] = "HRK";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['column1'] = "RSD";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['column1'] = "DKK";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['column1'] = "NOK";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['column1'] = "GDP";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['column1'] = "CAD";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['column1'] = "RUB";
    item.key = key++;
  }

}
