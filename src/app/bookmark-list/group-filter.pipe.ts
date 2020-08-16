import {Pipe, PipeTransform} from '@angular/core';
import {Bookmark} from "./bookmark";

@Pipe({
  name: 'filterOnGroup'
})
export class FilterOnGroupPipe implements PipeTransform {

  transform(bookmarks: Bookmark[], group: string): Bookmark[] {
    if (!bookmarks) {
      return null;
    }
    return bookmarks.filter(bookmark => bookmark.group === group);
  }

}
