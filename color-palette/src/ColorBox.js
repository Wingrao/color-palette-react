import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

import styles from "./styles/ColorBoxStyles";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { name, background } = this.props;
    const copied = this.state.copied;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div
          style={{ background: this.props.background }}
          className={this.props.classes.ColorBox}
        >
          <div
            style={{ background }}
            className={`${this.props.classes.copyOverlay} ${
              copied && this.props.classes.showOverlay
            }`}
          />
          <div
            className={`${this.props.classes.copyMsg} ${
              copied && this.props.classes.showMsg
            }`}
          >
            <h1>Copied!</h1>
            <p className={this.props.classes.copyText}>{background}</p>
          </div>
          <div className="copy-container">
            <div className={this.props.classes.boxContent}>
              <span className={this.props.classes.colorName}>{name}</span>
            </div>
            <button className={this.props.classes.copyButton}>Copy</button>
          </div>
          {this.props.showFullPalette && (
            <Link
              to={`/palette/${this.props.paletteId}/${this.props.id}`}
              onClick={(evt) => evt.stopPropagation()}
            >
              <span className={this.props.classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
