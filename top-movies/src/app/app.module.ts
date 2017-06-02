import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule }  from '@angular/forms';
import {HttpModule} from '@angular/http';
import {FilterPipe} from './pipe/app.pipe';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent,FilterPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
