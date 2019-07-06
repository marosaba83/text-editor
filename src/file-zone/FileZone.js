import React, { Component } from 'react';
import Word from '../word/Word';
import Synonym from '../synonym/Synonym';
import { connect } from 'react-redux';
import { fetchWords } from '../actions/actions';
import './FileZone.css';

class FileZone extends Component {
  componentWillMount () {
    this.props.fetchWords();
  }

  renderWords () {
    return this.props.words.map((e, i) => <Word key={i} {...e} />)
  }

  render () {
    return (
      <div id="file-zone">
        <div id="file">
          <div className="paragraph">
            <h3>Paragraph</h3>
            {this.renderWords()}
          </div>
          <hr />
          <div className="paragraph">
            <h3>Synonyms</h3>
            <Synonym />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  words: state.text.words
})

export default connect(mapStateToProps, { fetchWords })(FileZone);
