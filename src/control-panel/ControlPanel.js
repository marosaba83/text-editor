import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBold, setItalic, setUnderline } from '../actions/actions';
import classNames from 'classnames';
import './ControlPanel.css';

class ControlPanel extends Component {
  handleBoldButtonClick = () => {
    const index = this.props;
    if (index) {
      this.props.setBold(index);
    }
  }
  handleItalicButtonClick = () => {
    const index = this.props;
    if (index) {
      this.props.setItalic(index);
    }
  }
  handleUnderlineButtonClick = () => {
    const index = this.props;
    if (index) {
      this.props.setUnderline(index);
    }
  }

  render () {
    const index = this.props.word;
    let isBold = false, isItalic = false, isUnderline = false;

    if (index) {
      ({ isBold, isItalic, isUnderline } = this.props.words[index ? index : 0]);
    }

    const boldClass = classNames({
      'action-selected': isBold
    })

    const italicClass = classNames({
      'action-selected': isItalic
    })

    const underlineClass = classNames({
      'action-selected': isUnderline
    })

    return (
      <div id="control-panel">
        <div id="format-actions">
          <button className={boldClass} type="button" onClick={this.handleBoldButtonClick}><b>B</b></button>
          <button className={italicClass} type="button" onClick={this.handleItalicButtonClick}><i>I</i></button>
          <button className={underlineClass} type="button" onClick={this.handleUnderlineButtonClick}><u>U</u></button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  word: state.text.word,
  words: state.text.words
})

export default connect(mapStateToProps, { setBold, setItalic, setUnderline })(ControlPanel);
