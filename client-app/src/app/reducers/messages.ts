import {createSelector} from 'reselect';
import {Message} from  '../models/message';
import * as message from '../actions/message';

export interface  State {
  ids: string[];
  entities: Message[];
  currentMessageId?: string;
}


export const initialState: State = {
  ids: [],
  entities: [],
  currentMessageId: null
};

export function reducer(state = initialState, action: message.Actions): State {
  switch (action.type) {
    case message.ADD_MESSAGE: {
      const message: Message = action.payload;

      return {
        ids: [...state.ids, message.id],
        entities: [...state.entities, message],
        currentMessageId: message.id
      };
    }
    case message.DELETE_MESSAGE: {

      return {
        ids: state.ids.filter((message) => message !== action.payload.id),
        entities: state.entities.filter((message) => message.id !== action.payload.id),
      }
    }

    default : {
      return state;
    }
  }
}

export const getMessageState = (state: State) => state.currentMessageId;

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getNewMessage = createSelector(getEntities, getMessageState, (entities, messageId) => {
  return entities.filter(message => message.id === messageId)[0];
});


export const getAllMessage = createSelector(getEntities, getMessageState, (entities, messageId) => {
  return entities;
});

export const getMessageDeleted = createSelector(getEntities, getMessageState, (entities, messageId) => {
  return entities[messageId];
});

