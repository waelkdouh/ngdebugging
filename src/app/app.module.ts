import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomCounterComponent } from './custom-counter/custom-counter.component';
import { MapoperatorComponent } from './mapoperator/mapoperator.component';
import { RxjsspyComponent } from './rxjsspy/rxjsspy.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomCounterComponent,
    MapoperatorComponent,
    RxjsspyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
