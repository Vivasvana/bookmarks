import {Pipe, PipeTransform} from '@angular/core';
import {Bookmark} from "../bookmark";

@Pipe({
  name: 'getGroup'
})
export class GetGroupPipe implements PipeTransform {

  transform(bookmarks: Bookmark[]): string[] {
    if (!bookmarks) {
      return [];
    }
    return [...new Set(bookmarks.map(item => item.group))];
  }

}
