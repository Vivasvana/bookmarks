import {Action} from '@ngrx/store';
import {Bookmark} from "../bookmark";

export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const DELETE_BOOKMARK = 'DELETE_BOOKMARK';

export class AddBookmark implements Action {
  readonly type = ADD_BOOKMARK;
  constructor(public payload: Bookmark) {
  }
}

export class DeleteBookmark implements Action {
  readonly type = DELETE_BOOKMARK;
  constructor(public payload: number) {
  }
}

export type BookmarkListActions =
  | AddBookmark
  | DeleteBookmark;
