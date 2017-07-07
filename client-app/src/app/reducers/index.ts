import {ActionReducer, combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/core';
import {environment} from '../../environments/environment';
import {storeFreeze} from 'ngrx-store-freeze';


import * as fromMessages from  './messages';
import {createSelector} from 'reselect';
import * as fromCounter from  './counter';

export interface State {
  messages: fromMessages.State;
  counter: fromCounter.State;
}


const reducers = {
  messages: fromMessages.reducer,
  counter: fromCounter.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}


export const getMessagesState = (state: State) => state.messages;
export const getAllMessage = createSelector(getMessagesState, fromMessages.getAllMessage);

export const getNewMessage = createSelector(getMessagesState, fromMessages.getNewMessage);
