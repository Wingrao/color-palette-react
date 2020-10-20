import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from "@material-ui/core/Select"
import { IconButton, MenuItem } from '@material-ui/core';
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from '@material-ui/icons/Close';

import "./NavBar.css"

class NavBar extends Component {
   constructor(props){
      super(props);
      this.state = { format: "hex", open: false};
      this.handleChange = this.handleChange.bind(this);
      this.closeSnackbar = this.closeSnackbar.bind(this);
   }
   handleChange(evt){
      this.setState({format: evt.target.value, open:true});
      this.props.handleChange(evt.target.value);
   }
   closeSnackbar(){
      this.setState({open: false})
   }
   render() {
      return (
        <header className="Navbar">
           <div className="Logo">
            <a href="#">ColorPickerReact</a>
           </div>
           <div className="slider-container">
      <span>Level: {this.props.level}</span>
           <div className="slider">
            <Slider defaultValue={this.props.level} min={100} step={100} max={900} onAfterChange={this.props.changeLevel}/>
            </div>
           </div>
           <div className="select-container">
              <Select value={this.state.format} onChange={this.handleChange}>
                 <MenuItem value="hex">HEX - #ffffff</MenuItem>
                 <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                 <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
              </Select>
           </div>
           <Snackbar 
           anchorOrigin={{vertical:"bottom",horizontal:"left"}} 
           open={this.state.open} 
           autoHideDuration={3000} 
           message={<span id="message-id">Format Changed!</span>}
           onClose={this.closeSnackbar}
           action={[
              <IconButton onClick={this.closeSnackbar} 
           color="inherit">
              <CloseIcon/>
              </IconButton>]}/>
        </header>
      );
   }
}

export default NavBar;