import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import styles from "./Styles/PaletteStyles";
import { Link } from "react-router-dom";
import PaletteFooter from "./PaletteFooter";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
  }
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[this.state.format]}
        showFullPalette={false}
      />
    ));
    return (
      <div className={this.props.classes.palette}>
        <NavBar handleChange={this.changeFormat} showingAllColors={false} />
        <div className={this.props.classes.colors}>
          {colorBoxes}
          <div className={this.props.classes.goBack}>
            <Link to={`/palette/${this.props.palette.id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter
          paletteName={this.props.palette.paletteName}
          emoji={this.props.palette.emoji}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
