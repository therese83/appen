import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_latest extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "rates";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;

    // The contents of this data sheet will be loaded by plugin 'Generic JSON'.
    
    item = {};
    this.items.push(item);
    item['HRK'] = "7.418612";
    item['HUF'] = "322.164003";
    item['CDF'] = "1821.646273";
    item['ILS'] = "4.042941";
    item['NGN'] = "403.391427";
    item['GYD'] = "235.426881";
    item['BYR'] = "21837.472501";
    item['BHD'] = "0.420049";
    item['SZL'] = "16.060018";
    item['INR'] = "78.191577";
    item['SDG'] = "53.312867";
    item['PEN'] = "3.702733";
    item['EUR'] = "1";
    item['QAR'] = "4.056632";
    item['PGK'] = "3.760112";
    item['LRD'] = "186.89958";
    item['ISK'] = "136.005085";
    item['SYP'] = "573.790743";
    item['TRY'] = "6.571119";
    item['UAH'] = "29.763635";
    item['SGD'] = "1.519905";
    item['MMK'] = "1712.625499";
    item['NIO'] = "36.78333";
    item['BIF'] = "2049.714192";
    item['AFN'] = "87.028457";
    item['LKR'] = "195.245121";
    item['GTQ'] = "8.532379000000001";
    item['CHF'] = "1.137329";
    item['THB'] = "35.730707";
    item['AMD'] = "539.430087";
    item['AOA'] = "357.803617";
    item['SEK'] = "10.644019";
    item['SAR'] = "4.178701";
    item['KWD'] = "0.339258";
    item['IRR'] = "46911.569899";
    item['WST'] = "2.94276";
    item['BMD'] = "1.114157";
    item['BGN'] = "1.955902";
    item['PHP'] = "58.205734";
    item['ZMW'] = "14.024963";
    item['XAF'] = "655.280065";
    item['BDT'] = "94.48494700000001";
    item['NOK'] = "9.665811";
    item['BOB'] = "7.737429";
    item['TZS'] = "2568.017871";
    item['XAG'] = "0.074645";
    item['VEF'] = "11.127639";
    item['ANG'] = "2.099521";
    item['VUV'] = "128.608444";
    item['BND'] = "1.504613";
    item['XCD'] = "3.011064";
    item['SCR'] = "15.242223";
    item['KYD'] = "0.933128";
    item['DJF'] = "198.007954";
    item['CLF'] = "0.02717";
    item['LSL'] = "16.054783";
    item['MOP'] = "9.045449";
    item['ALL'] = "123.459978";
    item['UZS'] = "9444.651189";
    item['UYU'] = "38.583116";
    item['PLN'] = "4.295543";
    item['LTL'] = "3.289816";
    item['LYD'] = "1.560147";
    item['JPY'] = "124.650184";
    item['MNT'] = "2943.437404";
    item['FJD'] = "2.394602";
    item['ZWL'] = "359.154015";
    item['KPW'] = "1002.799633";
    item['PKR'] = "157.767325";
    item['MRO'] = "397.754327";
    item['OMR'] = "0.428978";
    item['GBP'] = "0.864812";
    item['LVL'] = "0.673942";
    item['SHP'] = "1.471691";
    item['GEL'] = "3.007344";
    item['TND'] = "3.377122";
    item['DKK'] = "7.466065";
    item['NPR'] = "125.14204";
    item['KRW'] = "1296.254486";
    item['BSD'] = "1.119895";
    item['CRC'] = "670.16437";
    item['EGP'] = "19.145118";
    item['MAD'] = "10.766877";
    item['AUD'] = "1.589562";
    item['BTC'] = "0.000205";
    item['SLL'] = "9804.579110000001";
    item['MWK'] = "809.95298";
    item['RSD'] = "117.966761";
    item['NZD'] = "1.689617";
    item['SRD'] = "8.30941";
    item['CLP'] = "749.721685";
    item['RUB'] = "72.174519";
    item['NAD'] = "16.066095";
    item['HKD'] = "8.739255999999999";
    item['GMD'] = "55.245432";
    item['VND'] = "25870.719973";
    item['LAK'] = "9724.97327";
    item['CUC'] = "1.114157";
    item['RON'] = "4.758005";
    item['MUR'] = "39.164278";
    item['XAU'] = "0.0008720000000000001";
    item['GGP'] = "0.864947";
    item['MXN'] = "21.289858";
    item['BRL'] = "4.446878";
    item['STD'] = "23453.667863";
    item['AWG'] = "2.005482";
    item['MVR'] = "17.213705";
    item['PAB'] = "1.119672";
    item['TJS'] = "10.558974";
    item['GNF'] = "10226.515631";
    item['MGA'] = "4081.434566";
    item['XDR'] = "0.806482";
    item['ETB'] = "32.163435";
    item['ZAR'] = "16.175829";
    item['COP'] = "3589.813082";
    item['IDR'] = "15837.738347";
    item['SVC'] = "9.797779999999999";
    item['CVE'] = "110.155008";
    item['TTD'] = "7.60217";
    item['GIP'] = "0.862948";
    item['PYG'] = "7003.533947";
    item['MZN'] = "72.102677";
    item['FKP'] = "0.862948";
    item['KZT'] = "423.493026";
    item['USD'] = "1.114157";
    item['UGX'] = "4187.836667";
    item['RWF'] = "1013.44256";
    item['GHS'] = "5.693899";
    item['ARS'] = "48.939367";
    item['JEP'] = "0.864947";
    item['DOP'] = "56.916737";
    item['LBP'] = "1683.434678";
    item['BZD'] = "2.257059";
    item['BTN'] = "78.17807500000001";
    item['MYR'] = "4.607374";
    item['YER'] = "278.872947";
    item['JMD'] = "149.071725";
    item['TOP'] = "2.534255";
    item['SOS'] = "646.21087";
    item['TMT'] = "3.899549";
    item['MDL'] = "19.98686";
    item['XOF'] = "655.279817";
    item['TWD'] = "34.489874";
    item['BBD'] = "2.241293";
    item['CAD'] = "1.506061";
    item['CNY'] = "7.510196";
    item['JOD'] = "0.789891";
    item['XPF'] = "119.136925";
    item['IQD'] = "1336.096787";
    item['HNL'] = "27.368155";
    item['AED'] = "4.092576";
    item['ERN'] = "16.712613";
    item['KES'] = "113.142951";
    item['KMF'] = "490.061734";
    item['MKD'] = "61.506977";
    item['DZD'] = "133.442845";
    item['CUP'] = "29.525154";
    item['BWP'] = "12.001693";
    item['SBD'] = "9.055588";
    item['AZN'] = "1.899697";
    item['KGS'] = "77.734973";
    item['BYN'] = "2.352318";
    item['KHR'] = "4525.87207";
    item['ZMK'] = "10028.748113";
    item['HTG'] = "95.976246";
    item['CZK'] = "25.747159";
    item['BAM'] = "1.95373";
    item['IMP'] = "0.864947";
    item.key = key++;
  }

  
  urlFromOptions(options) {
    const baseUrl = "http://data.fixer.io/api/latest?access_key=ed5524bff9f68cb2f44fd671c59ce866";
    
    let path = options.servicePath || '';
    if (path.length > 0 && path.substr(0, 1) !== '/' && baseUrl.substr(baseUrl.length - 1, 1) !== '/')
      path = '/'+path;
  
    let query = options.query || '';
    if (query.length > 0) {
      const dataSlots = options.dataSlots || {};
      query = "?" + this.expandSlotTemplateString(query, dataSlots);
    }
  
    return baseUrl + path + query; 
  }
  
  // this function's implementation is provided by React Studio.
  _fetchComplete = (err, options) => {
    if (err) {
      console.log('** Web service write failed: ', err, options);
    } else {
      if (this.updateCb) this.updateCb(this);
    }
  }
  
  addItem(item, options) {
    super.addItem(item, options);
    
    const url = this.urlFromOptions(options);
    
    let headers = {};
    headers['Content-Type'] = 'application/json';
  
    const fetchOpts = {
      method: 'POST',
    	headers: headers,
    	body: JSON.stringify(item),
    };
  
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          console.log("** Error sending %s to %s, response: ", fetchOpts.method, url, response);
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        this._fetchComplete(null, options);
      })
      .catch((exc) => {
        this._fetchComplete(exc, options);
      });  
  }
  
  removeItem(item, options) {
    super.removeItem(item, options);
    
    const url = this.urlFromOptions(options);
    
    let headers = {};
    headers['Content-Type'] = 'application/json';
  
    const fetchOpts = {
      method: 'DELETE',
    	headers: headers,
    	body: JSON.stringify(item),
    };
  
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          console.log("** Error sending %s to %s, response: ", fetchOpts.method, url, response);
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        this._fetchComplete(null, options);
      })
      .catch((exc) => {
        this._fetchComplete(exc, options);
      });  
  }
  
  replaceItemByRowIndex(idx, item, options) {
    super.replaceItemByRowIndex(idx, item, options);
    
    const url = this.urlFromOptions(options);
    
    let headers = {};
    headers['Content-Type'] = 'application/json';
  
    const fetchOpts = {
      method: 'PUT',
    	headers: headers,
    	body: JSON.stringify(item),
    };
  
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          console.log("** Error sending %s to %s, response: ", fetchOpts.method, url, response);
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        this._fetchComplete(null, options);
      })
      .catch((exc) => {
        this._fetchComplete(exc, options);
      });  
  }
  

}
