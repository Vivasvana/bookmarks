import {ActionReducerMap} from '@ngrx/store';
import * as fromBookmarkList from '../bookmark-list/store/bookmark-list.reducer';

export interface AppState {
  bookmark: fromBookmarkList.BookmarkState
}

export const appReducer: ActionReducerMap<AppState> = {
  bookmark: fromBookmarkList.bookmarkListReducer
};
