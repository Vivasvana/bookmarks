import {TestBed} from '@angular/core/testing';

import {BookmarkCreateService} from './bookmark-create.service';

describe('BookmarkCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookmarkCreateService = TestBed.get(BookmarkCreateService);
    expect(service).toBeTruthy();
  });

  describe('createNewBookmark', () => {
    let service: BookmarkCreateService;
    beforeEach(() => {
      service = TestBed.get(BookmarkCreateService);
    });

    it('id should be 0', () => {
      const firstBookmark = service.createNewBookmark('name', 'url', 'group');
      expect(firstBookmark.id).toEqual(0);
    });

    it('id of second should be 1', () => {
      const firstBookmark = service.createNewBookmark('name', 'url', 'group');
      const secondBookmark = service.createNewBookmark('name', 'url', 'group');
      expect(secondBookmark.id).toEqual(1);
    });
  });

});
