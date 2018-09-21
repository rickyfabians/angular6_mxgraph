import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DndModule} from 'ng2-dnd';
// import {ShContextMenuModule} from 'ng2-right-click-menu'


import { AppComponent } from './app.component';
import { RickygantengComponent } from './rickyganteng/rickyganteng.component';
import { AppRoutingModule } from './/app-routing.module';
import { NameComponentComponent } from './name-component/name-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {MatGridListModule,MatButtonModule,MatButtonToggleModule, MatCheckboxModule,MatSidenavModule,MatIconModule,MatDividerModule,MatCardModule,MatListModule,MatTooltipModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    RickygantengComponent,
    NameComponentComponent
  ],
  imports: [
    // ShContextMenuModule,
    DndModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
