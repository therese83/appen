import React, { Component } from 'react';
import './App.css';
import btn_icon_back_screen9 from './images/btn_icon_back_screen9.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class Screen9 extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton = (ev) => {
    // Go to screen 'HOMEPAGE'
    this.props.appActions.goToScreen('homepage', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton2 = (ev) => {
    // Go to screen 'Login 1'
    this.props.appActions.goToScreen('login1', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton3 = (ev) => {
  
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
    const style_elButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elButton2 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton2_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elButton3 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton3_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen Screen9" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='actionFont elButton' style={style_elButton_outer}>
            <Button style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.screen9_button_530432}
            </Button>
          
          </div>
          
          <div className='actionFont elButton2' style={style_elButton2_outer}>
            <Button style={style_elButton2}  color="accent" onClick={this.onClick_elButton2} >
              {this.props.locStrings.screen9_button2_758195}
            </Button>
          
          </div>
          
          <div className='actionFont elButton3' style={style_elButton3_outer}>
            <Button style={style_elButton3}  color="accent" onClick={this.onClick_elButton3} >
              {this.props.locStrings.screen9_button3_530132}
            </Button>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">{this.props.meny}</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_screen9} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  

}
