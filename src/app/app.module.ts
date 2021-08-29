import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodolistItemComponent } from './components/todolist-item/todolist-item.component';
import { TodolistItemDetailComponent } from './components/todolist-item-detail/todolist-item-detail.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SearchFilterPipe } from './shared/pipes/search-filter/search-filter.pipe';
import { RadioFilterPipe } from './shared/pipes/radio-filter/radio-filter.pipe';
import { TodolistDetailComponent } from './components/todolist-detail/todolist-detail.component';

// const routes: Routes = [
//   {
//     path: 'item',
//     component: TodolistItemDetailComponent
//   }
// ]

@NgModule({
    declarations: [
        AppComponent,
        TodolistComponent,
        TodolistItemComponent,
        TodolistItemDetailComponent,
        SearchFilterPipe,
        RadioFilterPipe,
        TodolistDetailComponent,
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
        MatDialogModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        // RouterModule.forRoot(routes),

        BrowserAnimationsModule,
    ],
    exports: [MatSliderModule, MatButtonModule, MatIconModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
