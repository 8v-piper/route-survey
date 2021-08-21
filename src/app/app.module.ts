import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { StopsComponent } from './components/stops/stops.component';
import { StopItemComponent } from './components/stop-item/stop-item.component';
import { AddStopComponent } from './components/add-stop/add-stop.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    StopsComponent,
    StopItemComponent,
    AddStopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
