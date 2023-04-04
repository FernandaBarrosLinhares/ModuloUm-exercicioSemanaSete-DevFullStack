import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponentHtmlComponent } from './src/app/home/home.component.html/home.component.html.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
  ],
  declarations: [AppComponent, HomeComponentHtmlComponent, ContatoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
