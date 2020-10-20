import React, { Component } from 'react';

import Navbar from "./NavBar";
import ColorBox from "./ColorBox";
import "./Palette.css";
class Palette extends Component {
   constructor(props){
      super(props);
      this.state={level: 500 , format :"hex"}
      this.changeLevel=this.changeLevel.bind(this);
      this.changeFormat= this.changeFormat.bind(this);
   }
   changeLevel(level){
     console.log(level);
     this.setState({level:level})
   }

   changeFormat(val){
      this.setState({format: val})
   }
   render() {
   const colorBoxes = this.props.palette.colors[this.state.level].map(color => <ColorBox background={color[this.state.format]} name ={color.name}/>);
      return (
         <div className="Palette">
            <Navbar level={this.state.level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
            {/* Navbar will go here*/}
            <div className="Palette-colors">
            {colorBoxes}
            </div>
            {/* footer*/}
         </div>
      );
   }
}

export default Palette;
