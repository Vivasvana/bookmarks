import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Bookmark} from "./bookmark";
import {Store} from "@ngrx/store";
import {selectBookmarkList} from "./store/bookmark-list.reducer";
import {groupList} from "../group-list";
import {AppState} from "../store";
import {MatDialog} from "@angular/material/dialog";
import {ModalDeleteComponent} from "./modal-delete/modal-delete.component";

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {
  public groupList: string[];
  public selectedTab: number;
  public bookmarkList$: Observable<Bookmark[]>;
  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog
  ) { }

  public openDeleteModal(bookmark: Bookmark): void {
    this.dialog.open(ModalDeleteComponent, {
      data: {name: bookmark.name, id: bookmark.id}
    });
  }

  public onTabChanged(e): void {
    this.selectedTab = e;
  }

  ngOnInit() {
    this.groupList = groupList;
    this.selectedTab = 0;
    this.bookmarkList$ = this.store.select(selectBookmarkList);
  }

}
