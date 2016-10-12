import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';

import { DateWithTraining } from './date-with-training.ts';

@NgModule({
    declarations: [
        AppComponent,
        DateWithTraining
    ],
    imports: [
        BrowserModule,
        routing
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule {
}
