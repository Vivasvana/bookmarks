import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";

const Material = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatListModule,
  MatIconModule,
  MatTabsModule
];

@NgModule({
  declarations: [],
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
