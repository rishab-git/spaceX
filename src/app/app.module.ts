import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchListComponent } from './launch-list/launch-list.component';

import {BackendService} from './services/backend.service';

@NgModule({
  declarations: [
    AppComponent,
    LaunchListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'spaceX-app' }),
    AppRoutingModule,
    HttpClientModule,
    TransferHttpCacheModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
