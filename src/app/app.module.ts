import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { ToolbarComponent } from './layouts/toolbar/toolbar.component';
import { FooterComponent } from './layouts/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    // angular
    BrowserModule,

    // core & shared
    SharedModule,

    // app
    AppRoutingModule,

    BrowserAnimationsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
