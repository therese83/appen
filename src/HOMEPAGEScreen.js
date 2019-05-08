import React, { Component } from 'react';
import './App.css';
import btn_icon_79794 from './images/btn_icon_79794.png';
import btn_icon_back_homepage from './images/btn_icon_back_homepage.png';

// UI framework component imports
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class HOMEPAGEScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, column1

  constructor(props) {
    super(props);
    
    this.state = {
      picker: this.props.column1,
      picker2: this.props.column1,
    };
  }

  pickerValueChanged_picker = (event) => {
    this.setState({picker: event.target.value});
    this.props.appActions.updateDataSlot("ds_Slot2", event.target.value);
    this.props.appActions.updateDataSlot("ds_Sparade1", event.target.value);
  }
  
  pickerValueChanged_picker2 = (event) => {
    this.setState({picker2: event.target.value});
    this.props.appActions.updateDataSlot("ds_Slot3", event.target.value);
    this.props.appActions.updateDataSlot("ds_Sparade1", event.target.value);
  }
  
  onClick_elButton = (ev) => {
    // Go to screen 'Value'
    this.props.appActions.goToScreen('value', { ...this.props, transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton2 = (ev) => {
    let newVal = this.props.column1;
    this.props.appActions.updateDataSlot('ds_Sparade1', newVal);
  
  }
  
  
  onClick_elIconButton = (ev) => {
    // Go to screen 'Screen 9'
    this.props.appActions.goToScreen('screen9', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#fdfffe',
     };
    const style_elText = {
        fontSize: 21.5,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    let selection_picker = this.state.picker;
    // Source datasheet and selected data column for picker element 'picker'
    const dataSource_picker = this.props.appActions.getDataSheet('currencyChoice');
    const valueColumnName_picker = 'column1';
    const labelColumnName_picker = 'column1';
    
    const style_elPicker_outer = {
        pointerEvents: 'auto',
     };
    let selection_picker2 = this.state.picker2;
    // Source datasheet and selected data column for picker element 'picker 2'
    const dataSource_picker2 = this.props.appActions.getDataSheet('currencyChoice');
    const valueColumnName_picker2 = 'column1';
    const labelColumnName_picker2 = 'column1';
    
    const style_elPicker2_outer = {
        pointerEvents: 'auto',
     };
    const style_elButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elText2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elText3 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_elButton2 = {
        display: 'block',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#ffa8c9',
     };
    const style_elButton2_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elIconButton = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_79794+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '89.562%',
        backgroundPosition: '50% 0%',
        color: '(null)',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen HOMEPAGEScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elText'>
            <div style={style_elText}>
              <div>{this.props.locStrings.start_text_352467}</div>
            </div>
          
          </div>
          
          <div className='baseFont elPicker' style={style_elPicker_outer}>
            <Select  onChange={this.pickerValueChanged_picker} value={selection_picker} >
              {dataSource_picker.items.map(item => {
                const colValue = item[valueColumnName_picker];
                const labelColValue = item[labelColumnName_picker];
                return <Option key={item.key} value={colValue} label={labelColValue} />
              })}
            </Select>
          
          </div>
          
          <div className='baseFont elPicker2' style={style_elPicker2_outer}>
            <Select  onChange={this.pickerValueChanged_picker2} value={selection_picker2} >
              {dataSource_picker2.items.map(item => {
                const colValue = item[valueColumnName_picker2];
                const labelColValue = item[labelColumnName_picker2];
                return <Option key={item.key} value={colValue} label={labelColValue} />
              })}
            </Select>
          
          </div>
          
          <div className='actionFont elButton' style={style_elButton_outer}>
            <Button style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.homepage_button_601768}
            </Button>
          
          </div>
          
          <div className='baseFont elText2'>
            <div style={style_elText2}>
              <div>{this.props.locStrings.homepage_text2_477588}</div>
            </div>
          
          </div>
          
          <div className='baseFont elText3'>
            <div style={style_elText3}>
              <div>{this.props.locStrings.homepage_text3_1027659}</div>
            </div>
          
          </div>
          
          <div className='actionFont elButton2' style={style_elButton2_outer}>
            <Button style={style_elButton2}  onClick={this.onClick_elButton2} >
              {this.props.locStrings.homepage_button2_286202}
            </Button>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">HOMEPAGE</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_homepage} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <button className='actionFont elIconButton' style={style_elIconButton}  onClick={this.onClick_elIconButton}  />
          </div>
        </div>
      </div>
    )
  }
  

}
