import { Injectable } from '@angular/core';
import {Bookmark} from "../bookmark-list/bookmark";

@Injectable({
  providedIn: 'root'
})
export class BookmarkCreateService {
  private increment = 0;
  constructor() { }

  public createNewBookmark(name: string, url: string, group: string) : Bookmark {
    return new Bookmark(this.increment++, name, url, group);
  }

}
