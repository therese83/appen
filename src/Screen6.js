import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Appbar from 'muicss/lib/react/appbar';


export default class Screen6 extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      picker: '',
      picker2: '',
    };
  }

  pickerValueChanged_picker = (event) => {
    this.setState({picker: event.target.value});
  }
  
  pickerValueChanged_picker2 = (event) => {
    this.setState({picker2: event.target.value});
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
    let selection_picker = this.state.picker;
    // Source datasheet and selected data column for picker element 'picker'
    const dataSource_picker = this.props.appActions.getDataSheet('latest');
    const valueColumnName_picker = 'SEK';
    
    const style_elPicker_outer = {
        pointerEvents: 'auto',
     };
    let selection_picker2 = this.state.picker2;
    // Source datasheet and selected data column for picker element 'picker 2'
    const dataSource_picker2 = this.props.appActions.getDataSheet('amountFromTo');
    const valueColumnName_picker2 = 'result';
    
    const style_elPicker2_outer = {
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen Screen6" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont elPicker' style={style_elPicker_outer}>
            <Select  onChange={this.pickerValueChanged_picker} value={selection_picker} >
              {dataSource_picker.items.map(item => {
                const colValue = item[valueColumnName_picker];
                const labelColValue = item[valueColumnName_picker];
                return <Option key={item.key} value={colValue} label={labelColValue} />
              })}
            </Select>
          
          </div>
          
          <div className='baseFont elPicker2' style={style_elPicker2_outer}>
            <Select  onChange={this.pickerValueChanged_picker2} value={selection_picker2} >
              {dataSource_picker2.items.map(item => {
                const colValue = item[valueColumnName_picker2];
                const labelColValue = item[valueColumnName_picker2];
                return <Option key={item.key} value={colValue} label={labelColValue} />
              })}
            </Select>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Screen 6</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }></div>
        </Appbar>
        
      </div>
    )
  }
  

}
