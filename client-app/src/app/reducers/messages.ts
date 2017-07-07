import {createSelector} from 'reselect';
import {Message} from  '../models/message';
import * as message from '../actions/message';

export interface  State {
  ids: string[];
  entities: { [id: string]: Message };
  currentMessageId?: string;
}


export const initialState: State = {
  ids: [],
  entities: {},
  currentMessageId: null
};

export function reducer(state = initialState, action: message.Actions): State {
  switch (action.type) {
    case message.ADD_MESSAGE: {
      const message: Message = action.payload;
      const newMessage = {
        [message.id]: message
      };

      return {
        ids: [...state.ids, message.id],
        entities: Object.assign({}, state.entities, newMessage),
        currentMessageId: message.id
      };
    }
    case message.LOAD_MESSAGE: {

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

  return entities[messageId];
});
