import {Bookmark} from "../bookmark";
import {GetGroupPipe} from "./get-group.pipe";


describe('GetGroupPipe', () => {
  let pipe: GetGroupPipe;
  let bookmarks = [
    new Bookmark(0, 'some name', 'someUrl', 'personal'),
    new Bookmark(1, 'some name1', 'someUrl1', 'leisure'),
    new Bookmark(2, 'some name2', 'someUrl2', 'work'),
    new Bookmark(3, 'some name3', 'someUrl3', 'personal'),
    new Bookmark(4, 'some name3', 'someUrl3', 'personal'),
    new Bookmark(5, 'some name3', 'someUrl3', 'work'),]
  beforeEach(() => {
    pipe = new GetGroupPipe();
  });

  it('create an instance', () => {
    const pipe = new GetGroupPipe();
    expect(pipe).toBeTruthy();
  });

  it('return 1 item from 2', () => {
    const group = 'personal';
    bookmarks = [
      new Bookmark(0, 'some name', 'someUrl', group),
      new Bookmark(1, 'another', 'anotherUrl', group)
    ];
    const result = pipe.transform([...bookmarks]);
    expect(result[0]).toEqual(group);
  });

  it('return 1 item', () => {
    const group = 'personal';
    bookmarks = [
      new Bookmark(0, 'some name', 'someUrl', group)
    ];
    const result = pipe.transform([...bookmarks]);
    expect(result[0]).toEqual(group);
  });

  it('return 2 item from 4', () => {
    const group1 = 'personal';
    const group2 = 'leisure';
    bookmarks = [
      new Bookmark(0, 'some name', 'someUrl', group1),
      new Bookmark(1, 'another', 'anotherUrl', group1),
      new Bookmark(2, 'another', 'anotherUrl', group2),
      new Bookmark(3, 'another', 'anotherUrl', group2),
    ];
    const result = pipe.transform([...bookmarks]);
    expect(result[1]).toEqual(group2);
  });

  it('return 3 items', () => {
    bookmarks = [
      new Bookmark(0, 'some name', 'someUrl', 'personal'),
      new Bookmark(1, 'some name1', 'someUrl1', 'leisure'),
      new Bookmark(2, 'some name2', 'someUrl2', 'work'),
      new Bookmark(3, 'some name3', 'someUrl3', 'personal'),
      new Bookmark(4, 'some name3', 'someUrl3', 'personal'),
      new Bookmark(5, 'some name3', 'someUrl3', 'work'),]
    const result = pipe.transform([...bookmarks]);
    expect(result.length).toEqual(3);
  });

});
