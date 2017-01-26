import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { DocDetailComponent } from './doc-detail.component';
import { DocsComponent } from './docs.component';
//import { HeroSearchComponent } from './hero-search.component';
import { DocService } from './doc.service';

import { AppRoutingModule }     from './app-routing.module';

import './rxjs-extensions';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpModule,
//    InMemoryWebApiModule.forRoot(InMemoryDataService),

  ],
  declarations: [ AppComponent,   DocDetailComponent , DocsComponent],
  bootstrap:    [ AppComponent ],
  providers:    [DocService]
})


export class AppModule { }
