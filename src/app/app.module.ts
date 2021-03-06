import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from "./material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store';
import {BookmarkCreateComponent} from "./bookmark-create/bookmark-create.component";
import {ReactiveFormsModule} from "@angular/forms";
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FilterOnGroupPipe } from './bookmark-list/pipes/group-filter.pipe';
import { ModalDeleteComponent } from './bookmark-list/modal-delete/modal-delete.component';
import {GetGroupPipe} from "./bookmark-list/pipes/get-group.pipe";

@NgModule({
  declarations: [
    AppComponent,
    BookmarkCreateComponent,
    BookmarkListComponent,
    FilterOnGroupPipe,
    GetGroupPipe,
    ModalDeleteComponent
  ],
  entryComponents: [ModalDeleteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(fromApp.appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
