import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

import Navbar from "./NavBar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import styles from "./Styles/PaletteStyles";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    console.log(level);
    this.setState({ level: level });
  }

  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const colorBoxes = this.props.palette.colors[
      this.state.level
    ].map((color) => (
      <ColorBox
        background={color[this.state.format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={this.props.palette.id}
        showFullPalette={true}
      />
    ));
    return (
      <div className={this.props.classes.palette}>
        <Navbar
          level={this.state.level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors
        />
        <div className={this.props.classes.colors}>{colorBoxes}</div>
        <PaletteFooter
          paletteName={this.props.palette.paletteName}
          emoji={this.props.palette.emoji}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
