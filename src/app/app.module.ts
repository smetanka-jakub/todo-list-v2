import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodolistItemComponent } from './todolist-item/todolist-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodolistItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatCheckboxModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatSliderModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
