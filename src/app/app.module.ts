import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';


@NgModule({
    declarations: [
        AppComponent
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
