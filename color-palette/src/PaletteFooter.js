import React from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./Styles/PaletteFooterStyles";

function PaletteFooter(props) {
  return (
    <footer className={props.classes.paletteFooter}>
      {props.paletteName}
      <span className={props.classes.emoji}>{props.emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);
