import React from 'react'
import './Word.css';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { selectWord } from '../actions/actions';

const Word = props => {
  const { index, value, isBold, isItalic, isUnderline } = props;

  const wordClass = classNames({
    'text-bold': isBold,
    'text-italic': isItalic,
    'text-underlined': isUnderline
  })

  const handleDoubleClick = () => {
    props.selectWord(index);
  }

  return (
    <span className={wordClass} onDoubleClick={handleDoubleClick}>
      {value}
    </span>
  )
}

export default connect(null, { selectWord })(Word);