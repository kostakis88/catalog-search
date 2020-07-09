import { CHANGE_SEARCHFIELD } from './actionTypes';

export function filterChange(text) {
  return {
    type: CHANGE_SEARCHFIELD,
    payload: text
  }
}