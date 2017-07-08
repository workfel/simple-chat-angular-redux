import {Action} from '@ngrx/store';
import {Message} from '../models/message';
export const ADD_MESSAGE = '[MESSAGE] ADD_MESSAGE';
export const LOAD_MESSAGE = '[MESSAGE] LOAD_MESSAGE';
export const DELETE_MESSAGE = '[MESSAGE] DELETE_MESSAGE';
export const EDIT_MESSAGE = '[MESSAGE] EDIT_MESSAGE';


export class AddMessageAction implements Action {
  readonly type = ADD_MESSAGE;

  constructor(public payload: Message) {
  }
}


export class DeleteMessageAction implements Action {
  readonly type = DELETE_MESSAGE;

  constructor(public payload: Message) {
  }
}

export class EditMessageAction implements Action {
  readonly type = EDIT_MESSAGE;

  constructor(public payload: Message) {
  }
}


export class LoadMessageAction implements Action {
  readonly type = LOAD_MESSAGE;

  constructor(public payload: Message[]) {
  }
}

export type Actions = AddMessageAction | LoadMessageAction | DeleteMessageAction | EditMessageAction;
