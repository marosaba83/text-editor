import {
  FETCH_WORDS,
  FETCH_SYNONYMS,
  SELECT_WORD,
  SET_BOLD,
  SET_ITALIC,
  SET_UNDERLINE,
  USE_SYNONYM
} from '../actions/types';

const initialState = {
  words: [],
  word: '',
  synonyms: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_WORDS:
      return {
        ...state,
        words: action.payload
      }
    case FETCH_SYNONYMS:
      return {
        ...state,
        synonyms: action.payload
      }
    case SELECT_WORD:
      return {
        ...state,
        word: action.payload
      }
    case SET_BOLD:
      return {
        ...state,
        words: state.words.map(w =>
          (w.index === action.payload.word) && !w.isSpace
            ? { ...w, isBold: !w.isBold }
            : w
        )
      }
    case SET_ITALIC:
      return {
        ...state,
        words: state.words.map(w =>
          (w.index === action.payload.word) && !w.isSpace
            ? { ...w, isItalic: !w.isItalic }
            : w
        )
      }
    case SET_UNDERLINE:
      return {
        ...state,
        words: state.words.map(w =>
          (w.index === action.payload.word) && !w.isSpace
            ? { ...w, isUnderline: !w.isUnderline }
            : w
        )
      }
    case USE_SYNONYM:
      return {
        ...state,
        words: state.words.map(w =>
          (w.index === action.payload.word.index) && !w.isSpace
            ? { ...w, value: action.payload.synonym }
            : w
        )
      }
    default:
      return state;
  }
}