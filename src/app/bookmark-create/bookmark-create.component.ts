import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {groupList} from "../group-list";
import {BookmarkCreateService} from "./bookmark-create.service";
import {Store} from "@ngrx/store";
import {AppState} from "../store";
import {AddBookmark} from "../bookmark-list/store/bookmark-list.actions";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-bookmark',
  templateUrl: './bookmark-create.component.html',
  styleUrls: ['./bookmark-create.component.css']
})
export class BookmarkCreateComponent implements OnInit {
  public form: FormGroup;
  public groupList: string[];

  constructor(private bookmarkCreateService: BookmarkCreateService,
              private store: Store<AppState>,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.groupList = groupList;
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'url': new FormControl(null, [Validators.required]),
      'group': new FormControl(null, [Validators.required])
    });
  }

  onSubmit(formData: any, formDirective: FormGroupDirective) {

    if (!this.form.valid) {
      return;
    }

    const value = this.form.value;
    this.store.dispatch(
      new AddBookmark(this.bookmarkCreateService.createNewBookmark(value.name, value.url, value.group))
    );
    this._snackBar.open('A new bookmark has been added', '', {
      duration: 22200,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
    formDirective.resetForm();
    this.form.reset();
  }

}
