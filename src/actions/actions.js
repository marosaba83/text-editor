import getMockedText from '../text.service';
import {
  FETCH_WORDS,
  FETCH_SYNONYMS,
  SELECT_WORD,
  SET_BOLD,
  SET_ITALIC,
  SET_UNDERLINE,
  USE_SYNONYM
} from '../actions/types';

export const fetchWords = () => dispatch => {
  getMockedText()
    .then(res => {
      const rawWords = [...res.match(/\w+|\s+|[^\s\w]+/g)];

      const formattedWords = rawWords.map((e, i) => {
        return ({
          index: i,
          value: e,
          isSpace: !e.trim()
        })
      });

      dispatch({
        type: FETCH_WORDS,
        payload: formattedWords
      });
    });
};

export const fetchSynonyms = (value) => dispatch => {
  fetch(`https://api.datamuse.com/words?ml=${value}`)
    .then(res => res.json())
    .then(synonyms => dispatch({
      type: FETCH_SYNONYMS,
      payload: synonyms.slice(0, 20)
    }))
};

export const selectWord = (index) => dispatch => {
  dispatch({
    type: SELECT_WORD,
    payload: index
  });
};

export const setBold = (index) => dispatch => {
  dispatch({
    type: SET_BOLD,
    payload: index
  });
};

export const setItalic = (index) => dispatch => {
  dispatch({
    type: SET_ITALIC,
    payload: index
  });
};

export const setUnderline = (index) => dispatch => {
  dispatch({
    type: SET_UNDERLINE,
    payload: index
  });
};

export const useSynonym = (word, synonym) => dispatch => {
  dispatch({
    type: USE_SYNONYM,
    payload: { word, synonym }
  });
};