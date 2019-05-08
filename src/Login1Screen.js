import React, { Component } from 'react';
import './App.css';
import FirebaseLogin from './FirebaseLogin';
import btn_icon_939949 from './images/btn_icon_939949.png';
import btn_icon_back_login1 from './images/btn_icon_back_login1.png';
import firebase from 'firebase';
import firestore from 'firebase/firestore';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class Login1Screen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
      field2: '',
    };
  }

  componentDidMount() {
    // Check if Firebase login has been completed.
    setTimeout(() => {
      if (firebase.auth().currentUser) {
        if (this._elFirebaseLogin)
          this._elFirebaseLogin.saveCurrentUserDataInApp();
        
        this.props.appActions.goToScreen('savedcurrencies');
        
      }
    }, 50);
  }

  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
    this.props.appActions.updateDataSlot("ds_EmailLogIn", event.target.value);
  }
  
  textInputChanged_field2 = (event) => {
    this.setState({field2: event.target.value});
    this.props.appActions.updateDataSlot("ds_Password", event.target.value);
  }
  
  onClick_elButton = (ev) => {
    // 'Unlock gate' action.
    const dataFromElements = {  // This object contains the data collected from the UI
      field: this.state.field,
      field2: this.state.field2,
    };
    
    this.sendLogin(dataFromElements, (err) => {
      if (err) {
        console.log('** login failed: ', err);
        this.props.appActions.goToScreen('error', { errorText: ''+err });
      } else {
        this.props.appActions.goToScreen('savedcurrencies');
      }
    });
  
  
  }
  
  
  onClick_elIconButton = (ev) => {
    // Go to screen 'Screen 9'
    this.props.appActions.goToScreen('screen9', { transitionId: 'fadeIn' });
  
  }
  
  
  sendLogin() {
    // Login to Firebase
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
    const style_elField = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    
    const style_elField_outer = {
        pointerEvents: 'auto',
     };
    const style_elField2 = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    
    const style_elField2_outer = {
        pointerEvents: 'auto',
     };
    const style_elFirebaseLogin_outer = {
        pointerEvents: 'auto',
     };
    const style_elButton2 = {
        display: 'block',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#ff605f',
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
    const style_elIconButton = {
        display: 'block',
        backgroundImage: 'url('+btn_icon_939949+')',
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
      <div className="AppScreen Login1Screen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont elField' style={style_elField_outer}>
            <input style={style_elField} type="email" placeholder={this.props.locStrings.login1_field_497196} onChange={this.textInputChanged_field} value={this.state.field}  />
          
          </div>
          
          <div className='baseFont elField2' style={style_elField2_outer}>
            <input style={style_elField2} type="password" placeholder={this.props.locStrings.login1_field2_93806} onChange={this.textInputChanged_field2} value={this.state.field2}  />
          
          </div>
          
          <div className='elFirebaseLogin' style={style_elFirebaseLogin_outer}>
            <div>
              <FirebaseLogin ref={(el)=> this._elFirebaseLogin = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='actionFont elButton2'>
            <Button style={style_elButton2}  >
              {this.props.locStrings.login1_button2_556201}
            </Button>
          
          </div>
          
          <div className='actionFont elButton' style={style_elButton_outer}>
            <Button style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.login1_button_358178}
            </Button>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Login 1</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_login1} alt="" style={{width: '50%'}} /></div>
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
