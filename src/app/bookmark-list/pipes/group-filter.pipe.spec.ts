import { FilterOnGroupPipe } from './group-filter.pipe';
import {Bookmark} from "../bookmark";

describe('FilterOnGroupPipe', () => {
  let pipe: FilterOnGroupPipe;
  const bookmarks = [
    new Bookmark(0, 'some name', 'someUrl', 'personal'),
    new Bookmark(1, 'some name1', 'someUrl1', 'leisure'),
    new Bookmark(2, 'some name2', 'someUrl2', 'work'),
    new Bookmark(3, 'some name3', 'someUrl3', 'personal'),
    new Bookmark(4, 'some name3', 'someUrl3', 'personal'),
    new Bookmark(5, 'some name3', 'someUrl3', 'work'),]
  beforeEach(() => {
    pipe = new FilterOnGroupPipe();
  });

  it('create an instance', () => {
    const pipe = new FilterOnGroupPipe();
    expect(pipe).toBeTruthy();
  });

  it('return 2 items', () => {
    const result = pipe.transform([...bookmarks], 'work');
    expect(result.length).toEqual(2);
  });

  it('return 3 items', () => {
    const result = pipe.transform([...bookmarks], 'personal');
    expect(result.length).toEqual(3);
  });

  it('return 3 items with group personal', () => {
    const group = 'personal';
    const result = pipe.transform([...bookmarks], group);
    expect(result[2].group).toEqual(group);
  });

  it('return 1 item with group leisure', () => {
    const group = 'leisure';
    const result = pipe.transform([...bookmarks], group);
    expect(result[0].group).toEqual(group);
  });

  it('return []', () => {
    const result = pipe.transform([...bookmarks], 'noexist');
    expect(result.length).toEqual(0);
  });


});
