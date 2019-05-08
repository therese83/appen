import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import './App.css';
import ErrorScreen from './ErrorScreen.js';
import SavedCurrenciesScreen from './SavedCurrenciesScreen.js';
import Login1Screen from './Login1Screen.js';
import Screen9 from './Screen9.js';
import ValueScreen from './ValueScreen.js';
import HOMEPAGEScreen from './HOMEPAGEScreen.js';
import IMG_2226JPG3Screen from './IMG_2226JPG3Screen.js';
import Screen6 from './Screen6.js';
import OopsScreen from './OopsScreen.js';
import DataSheet_localizationSheet from './DataSheet_localizationSheet.js';
import DataSheet_amountFromTo from './DataSheet_amountFromTo.js';
import DataSheet_latest from './DataSheet_latest.js';
import DataSheet_currencyChoice from './DataSheet_currencyChoice.js';
import firebase from 'firebase';
import firestore from 'firebase/firestore';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.dataSheets = {};
    this.dataSheets['localizationSheet'] = new DataSheet_localizationSheet('localizationSheet', this.dataSheetDidUpdate);
    this.dataSheets['amountFromTo'] = new DataSheet_amountFromTo('amountFromTo', this.dataSheetDidUpdate);
    this.dataSheets['latest'] = new DataSheet_latest('latest', this.dataSheetDidUpdate);
    this.dataSheets['currencyChoice'] = new DataSheet_currencyChoice('currencyChoice', this.dataSheetDidUpdate);

    this.dataSlots = {};
    this.dataSlots['ds_activeLang'] = "en";
    this.dataSlots['ds_Slot2'] = "EUR";
    this.dataSlots['ds_Slot3'] = "SEK";
    this.dataSlots['ds_Slot4'] = "result";
    this.dataSlots['ds_Slot5'] = "";
    this.dataSlots['ds_EmailLogIn'] = "";
    this.dataSlots['ds_Password'] = "";
    this.dataSlots['ds_Slot6'] = "";
    this.dataSlots['ds_SAVED'] = "";
    this.dataSlots['ds_Save'] = "";
    this.dataSlots['ds_Sparade1'] = "Save";

    this.updateLocalizationFromDataSheet(this.dataSheets['localizationSheet']);


    // Initialize web service plugin 'firebase 1'
    firebase.initializeApp({apiKey: "AIzaSyAor-y3xePMap3qJ8PIncu4rKbIzvR68pA",
        authDomain: "ilmze-c921e.firebaseapp.com",
        databaseURL: "https://ilmze-c921e.firebaseio.com",
        projectId: "ilmze-c921e",
        storageBucket: "ilmze-c921e.appspot.com",
        messagingSenderId: "365178221671"});
    firebase.firestore().settings({});
    
    this.serviceOptions_amountFromTo = {
      dataSlots: this.dataSlots,
      servicePath: "convert?access_key=ed5524bff9f68cb2f44fd671c59ce866&from=$slot('ds_Slot2')&to=$slot('ds_Slot3')&AMOUNT=100",
      query: "",
    };
    setInterval(() => {  // Reload data regularly
      this.serviceOptions_amountFromTo.servicePath = this.dataSheets['amountFromTo'].expandSlotTemplateString("convert?access_key=ed5524bff9f68cb2f44fd671c59ce866&from=$slot('ds_Slot2')&to=$slot('ds_Slot3')&AMOUNT=100", this.dataSlots);
      this.loadData_jsonsrc4(this.dataSheets['amountFromTo'], this.serviceOptions_amountFromTo, false);
    }, 10000);
    
    this.serviceOptions_latest = {
      dataSlots: this.dataSlots,
      servicePath: "",
      query: "",
    };
    setInterval(() => {  // Reload data regularly
      this.serviceOptions_latest.servicePath = this.dataSheets['latest'].expandSlotTemplateString("", this.dataSlots);
      this.loadData_jsonsrc3(this.dataSheets['latest'], this.serviceOptions_latest, false);
    }, 10000);
    

    this.state = {
      currentScreen: 'homepage',
      currentScreenProps: {},
      screenTransitionForward: true,
    }
    this.screenHistory = [ {...this.state} ];

  }

  windowDidResize = () => {
    let w = window.innerWidth;
    let formatId;
    if (w < 576) formatId = 'narrow-phone';
    else if (w < 768) formatId = 'wide-phone';
    else if (w < 1024) formatId = 'narrow-tablet';
    else formatId = 'wide-tablet';
    if (formatId !== this.state.screenFormatId) {
      this.setState({screenFormatId: formatId});
    }
  }

  componentDidMount() {
    this.windowDidResize();
    window.addEventListener('resize', this.windowDidResize);

    this.serviceOptions_amountFromTo.servicePath = this.dataSheets['amountFromTo'].expandSlotTemplateString("convert?access_key=ed5524bff9f68cb2f44fd671c59ce866&from=$slot('ds_Slot2')&to=$slot('ds_Slot3')&AMOUNT=100", this.dataSlots);
    this.loadData_jsonsrc4(this.dataSheets['amountFromTo'], this.serviceOptions_amountFromTo, true);
    
    this.serviceOptions_latest.servicePath = this.dataSheets['latest'].expandSlotTemplateString("", this.dataSlots);
    this.loadData_jsonsrc3(this.dataSheets['latest'], this.serviceOptions_latest, true);
    
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowDidResize);
  }

  isLoading() {
    return this.state.loading;
  }

  goToScreen = (screenId, props) => {
    // This method is the default implementation and could be customized by a navigation plugin.

    let screenIdx = -1;  // Check if the screen is already in the history stack, and pop back if so
    for (let i = 0; i < this.screenHistory.length; i++) {
      if (this.screenHistory[i].currentScreen === screenId) {
        screenIdx = i;
        break;
      }
    }
    if (screenIdx > -1) {
      this.screenHistory.splice(screenIdx + 1, this.screenHistory.length - screenIdx - 1);
      let prevScreenState = this.screenHistory[screenIdx];
      this.setState({...prevScreenState, screenTransitionForward: false});
    }
    else {
      props = props || {};
      let screenState = {currentScreen: screenId, currentScreenProps: props};
      this.screenHistory.push(screenState);
      this.setState({...screenState, screenTransitionForward: true});
    }
    window.scrollTo(0, 0);
  }

  goBack = () => {
    // This method is the default implementation and could be customized by a navigation plugin.
    if (this.screenHistory.length < 2)
      return;

    this.screenHistory.splice(this.screenHistory.length - 1, 1);
    let prevScreenState = this.screenHistory[this.screenHistory.length - 1];
    this.setState({...prevScreenState, screenTransitionForward: false});
    window.scrollTo(0, 0);
  }

  getDataSheet = (sheetId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    return this.dataSheets[sheetId];
  }

  addToDataSheet = (sheetId, newRow, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && newRow) {
      sheet.addItem(newRow, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateInDataSheet = (sheetId, row, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.replaceItemByKey(row.key, row, this['serviceOptions_'+sheetId] || {});

      if (this.state.currentScreenProps.dataSheetRow) {
        let screenProps = {...this.state.currentScreenProps};
        screenProps.dataSheetRow = row;

        // Also update any props that were carried into a detail view
        for (let prop in screenProps) {
          if (row[prop] !== undefined) {
            screenProps[prop] = row[prop];
          }
        }
        this.setState({currentScreenProps: screenProps});
      } else {
        this.setState({});
      }
    }
  }

  removeFromDataSheet = (sheetId, row) => {
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.removeItem(row, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateDataSlot = (slotId, value, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.dataSlots[slotId] = value;
    if (slotId === 'ds_activeLang') {
      this.locStrings.setLanguage(value);
    }

    {
      let usedSlots = [];
      let servicePath = this.dataSheets['amountFromTo'].expandSlotTemplateString("convert?access_key=ed5524bff9f68cb2f44fd671c59ce866&from=$slot('ds_Slot2')&to=$slot('ds_Slot3')&AMOUNT=100", this.dataSlots, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.serviceOptions_amountFromTo.servicePath = servicePath;
        this.loadData_jsonsrc4(this.dataSheets['amountFromTo'], this.serviceOptions_amountFromTo, true);
      }
    }
    this.setState({});
  }

  dataSheetDidUpdate = (dataSheet) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.setState({});
  }

  updateLocalizationFromDataSheet = (dataSheet) => {
    const stringsObj = dataSheet.getStringsByLanguage();
    if (stringsObj && Object.keys(stringsObj).length > 0) {
      this.locStrings = new LocalizedStrings(stringsObj);
    } else {
      this.locStrings = new LocalizedStrings({en: {}});
    }
    this.locStrings.setLanguage(this.dataSlots['ds_activeLang']);
  }

  loadData_jsonsrc4 = (dataSheet, options, firstLoad) => {
    // This method was written by data plugin 'Generic JSON'.
   this.setState({loading: true});
    
    // clear any placeholder data before load
    if (firstLoad) {
    	dataSheet.items = [];
    }
    
    const fetchComplete = (err) => {
      if (err) {
        // This error handling comes from React Studio
        // and currently doesn't do anything useful.
        console.error('** Web service load failed: ', err);
      } else {
      }
      this.setState({loading: false});
    }
    
    const url = dataSheet.urlFromOptions(options);  // this method was written by the web service plugin
    
    const fetchOpts = {
      method: 'GET',
      headers: {},
    };
    
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        dataSheet.loadFromJson(json);
        fetchComplete(null, options);
      })
      .catch((exc) => {
        fetchComplete(exc, options);
      });
  }
  loadData_jsonsrc3 = (dataSheet, options, firstLoad) => {
    // This method was written by data plugin 'Generic JSON'.
   this.setState({loading: true});
    
    // clear any placeholder data before load
    if (firstLoad) {
    	dataSheet.items = [];
    }
    
    const fetchComplete = (err) => {
      if (err) {
        // This error handling comes from React Studio
        // and currently doesn't do anything useful.
        console.error('** Web service load failed: ', err);
      } else {
      }
      this.setState({loading: false});
    }
    
    const url = dataSheet.urlFromOptions(options);  // this method was written by the web service plugin
    
    const fetchOpts = {
      method: 'GET',
      headers: {},
    };
    
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        dataSheet.loadFromJson(json);
        fetchComplete(null, options);
      })
      .catch((exc) => {
        fetchComplete(exc, options);
      });
  }

  render() {
    let makeElementForScreen = (screenId, baseProps, atTop, forward) => {
      let screenProps = {
        ...baseProps,
        atTopOfScreenStack: atTop,
        transitionForward: forward,
        appActions: this,
        dataSheets: this.dataSheets,
        locStrings: this.locStrings,
        deviceInfo: {
          screenFormatId: this.state.screenFormatId
        },
        'ds_activeLang': this.dataSlots['ds_activeLang'],
        'ds_Slot2': this.dataSlots['ds_Slot2'],
        'ds_Slot3': this.dataSlots['ds_Slot3'],
        'ds_Slot4': this.dataSlots['ds_Slot4'],
        'ds_Slot5': this.dataSlots['ds_Slot5'],
        'ds_EmailLogIn': this.dataSlots['ds_EmailLogIn'],
        'ds_Password': this.dataSlots['ds_Password'],
        'ds_Slot6': this.dataSlots['ds_Slot6'],
        'ds_SAVED': this.dataSlots['ds_SAVED'],
        'ds_Save': this.dataSlots['ds_Save'],
        'ds_Sparade1': this.dataSlots['ds_Sparade1'],
      };
      // A data sheet row was specified as the data source for this screen, so carry those props + 'dataSheetRow'.
      const dataSheetRow_ValueScreen = this.dataSheets['amountFromTo'].items[0];
      const screenData_ValueScreen = {
        ...dataSheetRow_ValueScreen,
        dataSheetRow: dataSheetRow_ValueScreen,
      }
      // A data sheet row was specified as the data source for this screen, so carry those props + 'dataSheetRow'.
      const dataSheetRow_Screen6 = this.dataSheets['amountFromTo'].items[0];
      const screenData_Screen6 = {
        ...dataSheetRow_Screen6,
        dataSheetRow: dataSheetRow_Screen6,
      }
      switch (screenId) {
        default:
          return null;
        case 'error':
          return (<ErrorScreen {...screenProps} />)
        case 'savedcurrencies':
          return (<SavedCurrenciesScreen {...screenProps} />)
        case 'login1':
          return (<Login1Screen {...screenProps} />)
        case 'screen9':
          return (<Screen9 {...screenProps} />)
        case 'value':
          return (<ValueScreen {...screenProps} {...screenData_ValueScreen} />)
        case 'homepage':
          return (<HOMEPAGEScreen {...screenProps} />)
        case 'img_2226jpg3':
          return (<IMG_2226JPG3Screen {...screenProps} />)
        case 'screen6':
          return (<Screen6 {...screenProps} {...screenData_Screen6} />)
        case 'oops':
          return (<OopsScreen {...screenProps} />)
      }
    }

    let screenEl = makeElementForScreen(this.state.currentScreen, this.state.currentScreenProps, true, this.state.screenTransitionForward);
    let prevScreenEl = null;
    if (this.screenHistory.length >= 2) {  // For transitions, we want to show the previous screen below
      let prevScreenState = this.screenHistory[this.screenHistory.length - 2];
      prevScreenEl = makeElementForScreen(prevScreenState.currentScreen, prevScreenState.currentScreenProps, false, this.state.screenTransitionForward);
    }

    return (
      <div className="App">
        {prevScreenEl}
        {screenEl}
      </div>
    );
  }
}
