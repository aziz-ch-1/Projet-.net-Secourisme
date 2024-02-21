import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecouristeListComponent } from './components/secouriste/secouriste-list/secouriste-list.component';
import { AddSecouristeComponent } from './components/secouriste/add-secouriste/add-secouriste.component';
import { FormsModule } from '@angular/forms';
import { EditSecouristeComponent } from './components/secouriste/edit-secouriste/edit-secouriste.component';

@NgModule({
  declarations: [
    AppComponent,
    SecouristeListComponent,
    AddSecouristeComponent,
    EditSecouristeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
