import {reducer} from './messages';
import * as fromMessages from './messages';
import {Message} from '../models/message';
import {AddMessageAction} from '../actions/message';

describe('MessagesReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromMessages.initialState);
    });
  });


  describe('ADD_MESSAGE', () => {
    it('should set the selected book id on the state', () => {
      const message: Message = new Message();
      message.id = '111';
      message.message = 'Hello';
      message.sender = 'toto';
      message.date = new Date().toISOString();
      const action = new AddMessageAction(message);
      const result = reducer(fromMessages.initialState, action);

      expect(result.currentMessageId).toBe('111');
    });

  });

  // describe('SEARCH_COMPLETE & LOAD_SUCCESS', () => {
  //   function noExistingBooks(action) {
  //     const book1 = {id: '111'} as Book;
  //     const book2 = {id: '222'} as Book;
  //     const createAction = new action([book1, book2]);
  //
  //     const expectedResult = {
  //       ids: ['111', '222'],
  //       entities: {
  //         '111': book1,
  //         '222': book2
  //       },
  //       selectedBookId: null,
  //     };
  //
  //     const result = reducer(fromMessages.initialState, createAction);
  //     expect(result).toEqual(expectedResult);
  //   }
  //
  //   function existingBooks(action) {
  //     const book1 = {id: '111'} as Book;
  //     const book2 = {id: '222'} as Book;
  //     const initialState = {
  //       ids: ['111', '222'],
  //       entities: {
  //         '111': book1,
  //         '222': book2
  //       },
  //       selectedBookId: null,
  //     } as any;
  //     // should not replace existing books
  //     const differentBook2 = {id: '222', foo: 'bar'} as any;
  //     const book3 = {id: '333'} as Book;
  //     const createAction = new action([book3, differentBook2]);
  //
  //     const expectedResult = {
  //       ids: ['111', '222', '333'],
  //       entities: {
  //         '111': book1,
  //         '222': book2,
  //         '333': book3
  //       },
  //       selectedBookId: null,
  //     };
  //
  //     const result = reducer(initialState, createAction);
  //     expect(result).toEqual(expectedResult);
  //   }
  //
  //   it('should add all books in the payload when none exist', () => {
  //     noExistingBooks(SearchCompleteAction);
  //     noExistingBooks(LoadSuccessAction);
  //   });
  //
  //   it('should add only new books when books already exist', () => {
  //     existingBooks(SearchCompleteAction);
  //     existingBooks(LoadSuccessAction);
  //   });
  // });


  describe('Selections', () => {
    const message1 = {id: '111', message: 'Hello', sender: 'Michel', date: new Date().toISOString()} as Message;
    const message2 = {id: '222', message: 'Salut', sender: 'Toto', date: new Date().toISOString()} as Message;
    const message3 = {id: '333', message: 'good ?', sender: 'Toto', date: new Date().toISOString()} as Message;
    const state: fromMessages.State = {
      ids: ['111', '222', '333'],
      entities: [message1, message2, message3],
      currentMessageId: '111'
    };

    describe('getEntities', () => {
      it('should return entities', () => {
        const result = fromMessages.getEntities(state);
        expect(result).toBe(state.entities);
      });
    });

    describe('getIds', () => {
      it('should return ids', () => {
        const result = fromMessages.getIds(state);
        expect(result).toBe(state.ids);
      });
    });

    describe('getLastMessage', () => {
      it('should return the last message', () => {
        const result = fromMessages.getLastMessage(state);
        expect(result).toBe(message3);
      });
    });


    describe('getAllMessage', () => {
      it('should return all books as an array ', () => {
        const result = fromMessages.getAllMessage(state);
        expect(result).toEqual([message1, message2, message3]);
      });
    });

  });
});
