import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Bookmark} from "../bookmark";
import {DeleteBookmark} from "../store/bookmark-list.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent {

  constructor(
    private store: Store<AppState>,
    public dialogRef: MatDialogRef<ModalDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Bookmark
  ) { }

  public onDelete(): void {
    this.store.dispatch(new DeleteBookmark(this.data.id));
    this.dialogRef.close();
  }

}
