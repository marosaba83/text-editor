import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSynonyms, useSynonym } from '../actions/actions';

class Synonym extends Component {
  componentDidUpdate (oldProps) {
    const newProps = this.props;
    const words = this.props.words;
    
    if (oldProps.word !== newProps.word) {
      if (newProps.word) {
        const word = words[newProps.word];
        this.props.fetchSynonyms(word.value);
      }
    }
  }

  renderSynonyms () {
    return this.props.synonyms.map((e, i) => {
      return (
        <li key={i}>
          <a onClick={this.handleSynonymClick.bind(this, e.word)}>
            {e.word}
          </a>
        </li>
      )
    })
  }

  handleSynonymClick = (synonym) => {
    const words = this.props.words;
    const word = words[this.props.word];
    console.log(this.props)
    this.props.useSynonym(word, synonym);
  }

  render () {
    const { value } = this.props.word;
    return (
      <div>
        <h4>{value}</h4>
        <ul>
          {this.renderSynonyms()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  word: state.text.word,
  words: state.text.words,
  synonyms: state.text.synonyms
})

export default connect(mapStateToProps, { fetchSynonyms, useSynonym })(Synonym);
