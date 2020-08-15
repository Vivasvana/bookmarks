
import * as BookmarkListActions from './bookmark-list.actions';
import {Bookmark} from "../bookmark";
import {AppState} from "../../store";
import {createSelector} from "@ngrx/store";

export interface BookmarkState {
  bookmarks: Bookmark[];
}

const initialState: BookmarkState = {
  bookmarks: []
};

export function bookmarkListReducer(
  state: BookmarkState = initialState,
  action: BookmarkListActions.BookmarkListActions
) {
  switch (action.type) {
    case BookmarkListActions.ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload]
      };

    default:
      return state;
  }
}

export const selectBookmark = (state: AppState) => state.bookmark;

export const selectBookmarkList = createSelector(
  selectBookmark,
  (state: BookmarkState) => state.bookmarks
);
