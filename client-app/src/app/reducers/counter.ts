import {ActionReducer, Action} from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export interface Counter extends State {

}

export interface State {
  number: number;
}


export const initialState: State = {
  number: 0
};

export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + 1
      };

    case DECREMENT:
      return {
        number: state.number - 1
      };

    case
    RESET:
      return {
        number: 0
      };

    default:
      return state;
  }
}
