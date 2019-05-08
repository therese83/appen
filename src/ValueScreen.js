import React, { Component } from 'react';
import './App.css';
import btn_icon_366006 from './images/btn_icon_366006.png';
import btn_icon_back_value from './images/btn_icon_back_value.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class ValueScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, result

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
    
    const style_elBackground2 = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground2_outer = {
        backgroundColor: '#fdfffe',
     };
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#fdfffe',
     };
    const style_elText = {
        fontSize: 25.8,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_elText2 = {
        color: '#ff1b11',
        textAlign: 'left',
     };
    const style_elText3 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_text3 = this.props.result;
    
    const style_elIconButton = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_366006+')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '89.562%',
        backgroundPosition: '50% 0%',
        color: '(null)',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    
    return (
      <div className="AppScreen ValueScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground2' style={style_elBackground2_outer}>
            <div style={style_elBackground2} />
          
          </div>
          
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='font-webdings  elText'>
            <div style={style_elText}>
              <div>{this.props.locStrings.screen11_text_968561}</div>
            </div>
          
          </div>
          
          <div className='baseFont elText2'>
            <div style={style_elText2}>
              <div>{this.props.locStrings.screen11_text2_691144}</div>
            </div>
          
          </div>
          
          <div className='baseFont elText3'>
            <div style={style_elText3}>
              <div>{value_text3 !== undefined ? value_text3 : (<span className="propValueMissing">{this.props.locStrings.screen11_text3_94032}</span>)}</div>
            </div>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Value</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_value} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <button className='actionFont elIconButton' style={style_elIconButton}   />
          </div>
        </div>
      </div>
    )
  }
  

}
